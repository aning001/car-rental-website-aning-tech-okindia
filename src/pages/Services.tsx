import { Car, MapPin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    title: "Self-Drive Car Rental",
    desc: "The core of our business. Get the freedom to drive around Goa yourself. Choose from a wide range of cars from budget hatchbacks to premium SUVs.",
    icon: Car,
    features: ["Unlimited Kilometers", "24/7 Roadside Assistance", "Well-Maintained Fleet"]
  },
  {
    title: "Airport Pickup & Drop",
    desc: "Arrive in style. We deliver your rental car right to the arrival gate at Dabolim or Mopa Airport. No waiting in taxi queues.",
    icon: MapPin,
    features: ["Punctual Service", "Flight Tracking", "Direct to Hotel Delivery"]
  },
  {
    title: "Short & Long Term Rentals",
    desc: "Planning a weekend getaway or a month-long workation in Goa? We offer flexible rental plans that save you money on longer bookings.",
    icon: Clock,
    features: ["Special Weekly Rates", "Monthly Discounted Plans", "No Hidden Extension Fees"]
  },
  {
    title: "Corporate & Event Bookings",
    desc: "Need multiple cars for a wedding or a corporate event in Goa? We provide group booking solutions with dedicated support.",
    icon: ShieldCheck,
    features: ["Group Discounts", "Clean & Sanitize Cars", "Priority Customer Support"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-neutral-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h1 className="text-amber-600 text-sm font-black uppercase tracking-[0.3em] mb-4 underline decoration-amber-500 underline-offset-8">Professional Services</h1>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 italic uppercase leading-tight mt-6 tracking-tighter">Everything You Need To Move In Goa</h2>
          <p className="text-neutral-500 mt-6 font-medium">From the moment you land to the moment you leave, we ensure your mobility in Goa is seamless and enjoyable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3rem] border border-neutral-100 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 italic uppercase">{s.title}</h3>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8 font-medium">{s.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {s.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-500 font-bold text-sm uppercase">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center gap-12 bg-neutral-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 opacity-10 blur-[150px]"></div>
          <div className="w-full lg:w-1/2 relative z-10">
            <h3 className="text-3xl font-black italic uppercase mb-6 underline decoration-amber-500 underline-offset-[12px]">Special Requirements?</h3>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-medium">
              Do you need a baby seat? Or perhaps a car for a late-night arrival at Mopa airport? We are flexible and always ready to accommodate special requests for our clients.
            </p>
            <a href="tel:+917249367599" className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-amber-500 hover:text-white transition-all shadow-xl">
              Talk To Us Now
            </a>
          </div>
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/10">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop" alt="Customer Support" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
