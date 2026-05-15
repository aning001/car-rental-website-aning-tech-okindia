/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Fleet from './pages/Fleet';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import Blog from './pages/Blog';
import CarDetails from './pages/CarDetails';

const WHATSAPP_NUMBER = "917249367599";
const PHONE_NUMBER = "+91 7249367599";

export default function App() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I am looking for a car rental in Goa.`, '_blank');
  };

  const callUs = () => {
    window.open(`tel:${PHONE_NUMBER}`);
  };

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>

        <Footer />

        {/* --- Floating Action Buttons --- */}
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex gap-4">
          <motion.button 
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={callUs}
            className="bg-neutral-900 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center hover:bg-neutral-800 transition-colors group relative"
          >
            <span className="absolute bottom-full mb-4 right-0 bg-white/95 backdrop-blur text-neutral-900 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Call Support
            </span>
            <Phone className="w-7 h-7" />
          </motion.button>

          <motion.button 
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.7
            }}
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            onClick={openWhatsApp}
            className="bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.3)] flex items-center justify-center hover:bg-[#20ba5a] transition-colors group relative border-4 border-white"
          >
            <span className="absolute bottom-full mb-4 right-0 bg-white/95 backdrop-blur text-neutral-900 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              WhatsApp Booking
            </span>
            <MessageCircle className="w-7 h-7 fill-current" />
          </motion.button>
        </div>

      </div>
    </Router>
  );
}

