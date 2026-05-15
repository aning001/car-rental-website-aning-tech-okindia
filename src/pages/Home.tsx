import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PHONE_NUMBER = "+91 7249367599";
const WHATSAPP_NUMBER = "917249367599";

import { FLEET_DATA } from '../constants';

export default function Home() {
  const openWhatsApp = (carName?: string) => {
    const message = carName 
      ? `Hello! I would like to inquire about renting the ${carName} in Goa.`
      : "Hello! I am looking for a car rental in Goa.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main>
      {/* --- Hero Section --- */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden bg-neutral-900 pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop" 
            alt="Goa Landscape" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-8 md:py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-3 py-1 rounded-md shadow-xl">
                <Zap className="w-3 h-3 fill-current" />
                <span className="text-[10px] font-black uppercase tracking-widest">Premium Goa Rentals</span>
              </div>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-md font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                <Phone className="w-3 h-3 text-amber-500" />
                {PHONE_NUMBER}
              </a>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-[0.95] tracking-tight uppercase">
              Self Drive <span className="text-amber-500">Car Rental</span> in Goa
            </h1>
            <p className="text-base md:text-lg text-neutral-200 mb-8 max-w-xl font-medium tracking-tight opacity-90 leading-snug">
              Explore sunny beaches with <span className="text-white font-black underline decoration-amber-500 underline-offset-4">OK India Car Rentals</span>. Zero security deposit options and 24/7 doorstep delivery.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openWhatsApp}
                className="bg-amber-500 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-amber-600 transition-all shadow-2xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                BOOK NOW
              </button>
              <button 
                onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
                className="bg-white text-neutral-900 px-8 py-4 rounded-2xl font-black text-sm hover:bg-neutral-100 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                CALL NOW
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Fleet Preview --- */}
      <section className="py-20 bg-neutral-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-amber-500 text-xs font-black uppercase tracking-[0.4em] mb-3">Our Featured Rides</h2>
            <h3 className="text-4xl md:text-5xl font-black text-neutral-900 leading-none uppercase">Popular <span className="text-amber-500">Fleet</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {FLEET_DATA.slice(0, 18).map((car) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group bg-white rounded-[2rem] overflow-hidden border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  <Link to={`/car/${car.id}`} className="relative aspect-[16/10] overflow-hidden block">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/95 backdrop-blur shadow-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {car.category}
                      </span>
                    </div>
                  </Link>
                  
                  <div className="p-8 pb-10">
                    <div className="flex justify-between items-start mb-6">
                      <Link to={`/car/${car.id}`} className="hover:text-amber-600 transition-colors">
                        <h4 className="text-2xl font-black text-neutral-900 leading-none mb-2">{car.name}</h4>
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">{car.type} • {car.transmission}</p>
                      </Link>
                      <div className="text-right">
                        <p className="text-amber-500 text-2xl font-black italic leading-none">₹{car.price}</p>
                        <p className="text-neutral-400 text-[10px] uppercase font-black">Per Day</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <button 
                        onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
                        className="border-2 border-neutral-900 text-neutral-900 py-4 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Book Call
                      </button>
                      <button 
                        onClick={() => openWhatsApp(car.name)}
                        className="bg-amber-500 text-white py-4 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-amber-600 transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Rent Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-20 text-center">
            <Link to="/fleet" className="inline-block bg-neutral-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-neutral-800 transition-all shadow-2xl hover:-translate-y-1">
              Explore Full Fleet (50+ Cars)
            </Link>
          </div>
        </div>
      </section>

      {/* --- SEO Article Snippet --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-amber-600 text-sm font-black uppercase tracking-[0.3em] mb-4">Ultimate Car Rental In Goa</h2>
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 leading-tight">Why Self-Drive is the Best Way to Experience Goa?</h3>
          <div className="text-neutral-600 space-y-6 text-lg leading-relaxed text-justify md:text-center">
            <p>
              Whether you are landing at Dabolim Airport or Mopa Airport, having a self-drive car in Goa gives you the ultimate freedom. No more haggling with local taxis or waiting for buses in the tropical heat. With <strong>OK India Car Rentals</strong>, you can zip from the serene beaches of South Goa like Utorda and Majorda to the vibrant parties of North Goa like Baga and Anjuna.
            </p>
            <p>
              Our fleet includes everything from budget-friendly hatchbacks like the <strong>Swift</strong> to luxury SUVs like the <strong>Thar</strong> and <strong>Creta</strong>. All our cars are commercially registered with white/black plates (Yellow Number Plates) ensuring you have a legal and hassle-free trip across the state of Goa.
            </p>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-amber-600 font-black border-b-2 border-amber-600 pb-1 hover:text-amber-700 hover:border-amber-700 transition-all">
            Read More About Our Services
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 text-xs font-black uppercase tracking-[0.4em] mb-4">Quick Answers</h2>
            <h3 className="text-5xl font-black text-neutral-900 uppercase leading-none">Frequently <span className="text-amber-500">Asked</span></h3>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What documents are required?", a: "Valid Indian DL and Aadhaar Card. For foreigners, IDP and Passport are mandatory." },
              { q: "Is fuel included?", a: "No, cars are provided with some fuel and should be returned at the same level." },
              { q: "Do you have airport pickup?", a: "Yes, we serve both Dabolim and Mopa Airport with 24/7 delivery." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <h4 className="font-black text-lg text-neutral-900 mb-2 uppercase italic">Q: {faq.q}</h4>
                <p className="text-neutral-600 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/faq" className="text-amber-600 font-black flex items-center justify-center gap-2 hover:gap-3 transition-all">
              VIEW ALL FAQS <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="py-24 bg-neutral-900 text-white px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-amber-500 text-xs font-black uppercase tracking-[0.4em] mb-4">Real Experiences</h2>
            <h3 className="text-5xl md:text-6xl font-black uppercase leading-none text-white">Loved By <span className="text-amber-500">Travelers</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", city: "Delhi", text: "Best car rental in South Goa. The Thar was immaculate!" },
              { name: "Sneha K.", city: "Mumbai", text: "Seamless airport delivery. The Creta made our trip perfect." },
              { name: "David M.", city: "Europe", text: "Professional service and transparent pricing. 5 stars." },
            ].map((rec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10">
                <div className="flex text-amber-500 gap-1 mb-6">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-lg italic font-medium mb-8">"{rec.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-black">{rec.name[0]}</div>
                  <div>
                    <h5 className="font-black uppercase italic leading-none">{rec.name}</h5>
                    <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-1">{rec.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Quick Features --- */}
      <section className="py-24 bg-neutral-900 text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: "Verified Documents", desc: "Just share DL and Aadhaar via WhatsApp for quick verification." },
              { icon: Clock, title: "Instant Booking", desc: "Get confirmation within 5 minutes of inquiry during working hours." },
              { icon: MapPin, title: "Airport Pickup", desc: "Available at both Dabolim (North) and Mopa (North) airports for convenience." },
              { icon: Star, title: "Top Support", desc: "Our 24/7 helpline ensures you never get stuck on Goan roads." },
            ].map((item, idx) => (
              <div key={idx} className="group hover:bg-white/5 p-6 rounded-3xl transition-all">
                <item.icon className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-black mb-3 italic uppercase text-amber-500">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
