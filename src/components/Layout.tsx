import { 
  Car, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  Menu, 
  X,
  ChevronDown,
  ChevronRight,
  Instagram,
  Facebook
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const PHONE_NUMBER = "+91 7249367599";
const WHATSAPP_NUMBER = "917249367599";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I am looking for a car rental in Goa.`, '_blank');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/fleet' },
  ];

  const exploreLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-amber-500 p-2 rounded-lg shrink-0">
            <Car className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-xl md:text-2xl tracking-tighter leading-none ${scrolled || !isHome ? 'text-neutral-900' : 'text-white'}`}>OK INDIA</span>
            <span className={`text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] leading-none mt-1 ${scrolled || !isHome ? 'text-amber-600' : 'text-amber-400'}`}>Car Rentals Goa</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-bold hover:text-amber-600 transition-colors ${scrolled || !isHome ? 'text-neutral-700' : 'text-neutral-100'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            className="relative group"
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              onMouseEnter={() => setIsDropdownOpen(true)}
              className={`flex items-center gap-1 text-sm font-bold hover:text-amber-600 transition-colors ${scrolled || !isHome ? 'text-neutral-700' : 'text-neutral-100'}`}
            >
              Explore <ChevronDown className="w-4 h-4" />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl border p-2 flex flex-col gap-1"
                >
                  {exploreLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.path} 
                      className="px-4 py-2 text-sm font-bold text-neutral-600 hover:bg-neutral-50 hover:text-amber-600 rounded-lg transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className={`flex items-center gap-2 group px-4 py-2.5 rounded-full border transition-all ${scrolled || !isHome ? 'border-neutral-200 text-neutral-900 font-bold text-sm' : 'border-white/20 text-white font-bold text-sm hover:bg-white/10'}`}
            >
              <Phone className="w-4 h-4 text-amber-500" />
              Call
            </a>
            <button 
              onClick={openWhatsApp}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-black transition-all hover:shadow-lg flex items-center gap-2 uppercase tracking-widest"
            >
              <MessageCircle className="w-4 h-4" />
              Book
            </button>
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={scrolled || !isHome ? 'text-black' : 'text-white'} /> : <Menu className={scrolled || !isHome ? 'text-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden h-screen flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                <div className="bg-amber-500 p-1.5 rounded-lg shrink-0">
                  <Car className="text-white w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-lg tracking-tighter leading-none text-neutral-900">OK INDIA</span>
                  <span className="text-[9px] uppercase font-bold tracking-widest leading-none mt-1 text-amber-600">Car Rentals Goa</span>
                </div>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-neutral-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-6 py-8">
              <div className="flex flex-col gap-6">
                <Link 
                  to="/" 
                  className="text-3xl font-black border-b border-neutral-100 pb-4 text-neutral-900 flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home <ChevronRight className="w-6 h-6 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </Link>
                {navLinks.filter(l => l.name !== 'Home').map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="text-3xl font-black border-b border-neutral-100 pb-4 text-neutral-900 flex items-center justify-between group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name} <ChevronRight className="w-6 h-6 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
                
                <div className="mt-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400 mb-6">Explore More</p>
                  <div className="grid grid-cols-2 gap-3">
                    {exploreLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.path} 
                        className="p-4 bg-neutral-50 rounded-2xl text-sm font-bold text-neutral-700 hover:bg-amber-50 hover:text-amber-600 transition-all border border-transparent hover:border-amber-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t bg-neutral-50/50">
              <div className="flex flex-col gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="bg-neutral-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl">
                  <Phone className="w-5 h-5 text-amber-500" /> CALL {PHONE_NUMBER}
                </a>
                <button 
                  onClick={openWhatsApp}
                  className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" /> WHATSAPP BOOKING
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  const ADDRESS = "Shop no.03, near Cota's Guest House, Utorda, Goa 403713";
  
  return (
    <footer className="bg-neutral-50 pt-24 pb-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 p-1.5 rounded-lg">
                <Car className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight block leading-tight">OK INDIA</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 block -mt-1">Car Rentals Goa</span>
              </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              Premium self-drive car rental services in Utorda, South Goa. Experience the freedom to explore at your own pace with our well-maintained fleet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border rounded-full flex items-center justify-center text-neutral-400 hover:text-amber-600 hover:border-amber-600 transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border rounded-full flex items-center justify-center text-neutral-400 hover:text-amber-600 hover:border-amber-600 transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-xs tracking-[0.2em] text-neutral-400 underline decoration-amber-500 underline-offset-8">Quick Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/about" className="text-neutral-600 hover:text-amber-600 transition-colors">About Our Business</Link></li>
              <li><Link to="/fleet" className="text-neutral-600 hover:text-amber-600 transition-colors">Our Premium Fleet</Link></li>
              <li><Link to="/faq" className="text-neutral-600 hover:text-amber-600 transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/blog" className="text-neutral-600 hover:text-amber-600 transition-colors">Goa Travel Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black mb-6 uppercase text-xs tracking-[0.2em] text-neutral-400 underline decoration-amber-500 underline-offset-8">Our Location</h4>
            <div className="bg-white p-2 rounded-3xl shadow-sm border mb-6 overflow-hidden">
              <div className="aspect-video bg-neutral-100 flex items-center justify-center relative">
                 <img 
                  src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/60 text-white p-6 text-center">
                  <MapPin className="w-10 h-10 mb-2 text-amber-500" />
                  <p className="font-bold mb-4">{ADDRESS}</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=OK+India+Car+Rentals+Utorda+Goa" 
                    target="_blank" 
                    className="text-xs bg-amber-500 text-white px-6 py-2.5 rounded-full font-black uppercase tracking-wider hover:bg-amber-600 transition-all"
                  >
                    Get Directions
                  </a>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} OK INDIA CAR RENTALS GOA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400 text-[10px] uppercase font-bold tracking-widest">UTORDA • SOUTH GOA • INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
