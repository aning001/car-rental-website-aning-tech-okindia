import { Star, MessageCircle, Phone, ArrowLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FLEET_DATA } from '../constants';

const PHONE_NUMBER = "+91 7249367599";
const WHATSAPP_NUMBER = "917249367599";

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Budget', 'Mid-Range', 'SUV', 'Luxury'];

  const filteredFleet = activeCategory === 'All' 
    ? FLEET_DATA 
    : FLEET_DATA.filter(car => car.category === activeCategory);

  const openWhatsApp = (carName: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=I am interested in renting ${carName}.`, '_blank');
  };

  return (
    <div className="bg-neutral-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <Link to="/" className="text-amber-600 flex items-center gap-2 font-bold mb-4 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter uppercase leading-none">Our Premium <span className="text-amber-500">Fleet</span></h1>
            <p className="text-neutral-400 mt-2 font-black uppercase tracking-[0.2em] text-xs">Over 50+ cars ready for your adventure</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black transition-all uppercase tracking-widest ${
                  activeCategory === cat 
                  ? 'bg-amber-500 text-white shadow-xl' 
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredFleet.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-neutral-100 flex flex-col group"
              >
                <Link to={`/car/${car.id}`} className="aspect-[16/10] relative overflow-hidden block">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 capitalize">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {car.transmission}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <Link to={`/car/${car.id}`} className="block hover:text-amber-600 transition-colors">
                    <h3 className="text-xl font-black mb-1">{car.name}</h3>
                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4">{car.type}</p>
                  </Link>
                  
                  <ul className="space-y-1 mb-6 flex-grow">
                    {car.features.map((f, i) => (
                      <li key={i} className="text-[10px] uppercase font-bold text-neutral-400 flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 text-amber-500" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-lg font-black text-amber-600 leading-none">₹{car.price}</p>
                      <p className="text-[10px] uppercase font-black text-neutral-400">Daily Rate</p>
                    </div>
                    <div className="flex text-amber-400">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
                      className="border-2 border-neutral-200 text-neutral-700 py-4 rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-3 h-3" /> Book Call
                    </button>
                    <button 
                      onClick={() => openWhatsApp(car.name)}
                      className="bg-amber-500 text-white py-4 rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-3 h-3" /> Rent Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
