import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  Car, 
  Gauge, 
  Users, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  Phone,
  ShieldCheck,
  Fuel,
  Info
} from 'lucide-react';
import { FLEET_DATA } from '../constants';

const PHONE_NUMBER = "+91 7249367599";
const WHATSAPP_NUMBER = "917249367599";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = FLEET_DATA.find(c => c.id === Number(id));

  if (!car) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h2 className="text-3xl font-black mb-4">Car Not Found</h2>
        <button 
          onClick={() => navigate('/fleet')}
          className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold"
        >
          Back to Fleet
        </button>
      </div>
    );
  }

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want to rent the ${car.name}. Can you help me with availability?`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-neutral-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb / Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-neutral-500 font-bold hover:text-amber-600 transition-colors mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          BACK TO ALL CARS
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-amber-500 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-xl">
                  {car.category}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-3xl overflow-hidden bg-neutral-200 border-2 border-white shadow-md">
                  <img 
                    src={car.image} 
                    alt={`${car.name} view ${i}`}
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Details & Booking */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black text-neutral-900 mb-2 uppercase leading-none">{car.name}</h1>
              <p className="text-lg text-amber-600 font-black uppercase tracking-[0.3em]">{car.type}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex flex-col items-center justify-center text-center">
                <Users className="w-6 h-6 text-amber-500 mb-3" />
                <span className="text-xs font-black text-neutral-400 uppercase tracking-widest">Seating</span>
                <span className="text-sm font-black text-neutral-900 uppercase">5 Seater</span>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex flex-col items-center justify-center text-center">
                <Gauge className="w-6 h-6 text-amber-500 mb-3" />
                <span className="text-xs font-black text-neutral-400 uppercase tracking-widest">Drive</span>
                <span className="text-sm font-black text-neutral-900 uppercase">{car.transmission}</span>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex flex-col items-center justify-center text-center">
                <Fuel className="w-6 h-6 text-amber-500 mb-3" />
                <span className="text-xs font-black text-neutral-400 uppercase tracking-widest">Fuel Type</span>
                <span className="text-sm font-black text-neutral-900 uppercase">Petrol/Diesel</span>
              </div>
            </div>

            <div className="bg-neutral-900 p-8 rounded-[2.5rem] text-white mb-10 shadow-2xl relative overflow-hidden border-2 border-amber-500/20">
               <div className="relative z-10">
                <p className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-3">Premium Daily Rate</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black italic">₹{car.price}</span>
                  <span className="text-neutral-400 font-black text-sm uppercase tracking-[0.2em] ml-2">/ Day</span>
                </div>
                <p className="text-neutral-500 text-[10px] mt-4 font-black uppercase tracking-widest leading-relaxed">* SEASONAL RATES MAY APPLY • 24H BILLING CYCLE</p>
               </div>
               <Car className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 rotate-12" />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-black text-neutral-900 mb-4 uppercase">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-neutral-700 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                      {feature}
                    </div>
                  ))}
                  <div className="flex items-center gap-3 text-neutral-700 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                    Clean & Sanitized
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-dashed border-neutral-200">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-10 h-10 text-amber-500 shrink-0" />
                  <div>
                    <h4 className="font-black text-neutral-900 uppercase leading-none mb-2">Safe & Legal Rental</h4>
                    <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                      All our cars are commercially registered with white/black plates (Yellow Number Plates) for a legal and safe journey across Goa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={openWhatsApp}
                  className="bg-[#25D366] text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(37,211,102,0.2)]"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhasApp Book
                </button>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="bg-neutral-900 text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <Phone className="w-5 h-5" />
                  Call Agent
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Requirements Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2rem] border border-neutral-100">
            <MapPin className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-xl font-black text-neutral-900 mb-4 uppercase leading-none">Free Pickup</h4>
            <p className="text-neutral-600 font-medium leading-relaxed">
              We offer free doorstep delivery and pickup in major areas of North and South Goa for bookings over 3 days.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] border border-neutral-100">
            <Info className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-xl font-black text-neutral-900 mb-4 uppercase leading-none">No Security Deposit</h4>
            <p className="text-neutral-600 font-medium leading-relaxed">
              Rent stress-free with our zero security deposit policy for verified customers. Just pay the rent and enjoy.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] border border-neutral-100">
            <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-xl font-black text-neutral-900 mb-4 uppercase leading-none">24/7 Support</h4>
            <p className="text-neutral-600 font-medium leading-relaxed">
              Our team is always available for assistance. Whether it's a flat tire or a change in schedule, we've got you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
