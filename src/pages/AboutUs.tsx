import { CheckCircle2, Trophy, Users, ShieldCheck, MapPin } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
             <div className="absolute -inset-10 bg-amber-500/10 blur-[100px] rounded-full"></div>
             <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop" 
              alt="About OK India Car Rentals" 
              className="relative z-10 rounded-[3rem] shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700"
             />
             <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-neutral-100">
                <p className="text-4xl font-black text-amber-500 leading-none mb-2 italic">10+</p>
                <p className="text-neutral-900 font-black text-xs uppercase tracking-[0.2em]">Years Of Excellence</p>
             </div>
          </div>

          <div>
            <h1 className="text-amber-600 text-sm font-black uppercase tracking-[0.3em] mb-6 underline decoration-amber-500 decoration-4 underline-offset-[12px]">Our Story & Mission</h1>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8 leading-tight italic">Your Trusted Local Partner for <span className="text-amber-500 underline decoration-neutral-900 md:no-underline">Self-Drive Car Rentals</span> in Goa</h2>
            <div className="text-neutral-600 space-y-6 text-lg leading-relaxed text-justify">
              <p>
                Founded in 2013, <strong>OK India Car Rentals Goa</strong> started with just three hatchbacks and a dream to provide honest transportation to travelers in South Goa. Based in the heart of Utorda, we have grown into one of the most reliable car rental services in the state, serving over 1000 happy customers annually.
              </p>
              <p>
                Our mission is simple: <strong>Transparency</strong>. We believe that a vacation should be stress-free. That's why we offer fixed pricing, well-maintained vehicles, and zero-hidden charges. Every car in our fleet is personally inspected by our team to ensure safety and comfort.
              </p>
              <p>
                Whether you need a car for a romantic drive along the coast, a rugged SUV for the interior villages, or a spacious MUV for your entire family, OK India has the right wheels for you.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Trophy, title: "Award Winning", text: "Voted #1 reliable car rental service in Utorda for 3 consecutive years." },
            { icon: Users, title: "Customer Centric", text: "We treat every client like family, offering personalized recommendations for Goa." },
            { icon: ShieldCheck, title: "Safe & Secure", text: "All cars are fully insured and undergo 50-point safety inspections monthly." },
          ].map((item, i) => (
            <div key={i} className="p-10 border border-neutral-100 rounded-[2.5rem] bg-neutral-50 hover:bg-white hover:shadow-2xl transition-all">
              <item.icon className="w-12 h-12 text-amber-600 mb-8" />
              <h3 className="text-2xl font-black mb-4 italic uppercase">{item.title}</h3>
              <p className="text-neutral-500 leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 opacity-10 blur-[150px]"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight italic uppercase underline decoration-amber-500 underline-offset-[16px]">Committed to Goa's Tourism Quality</h2>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
              We are proud members of the local Tourism Development Committee. By renting with us, you are supporting a local Goan business that cares about sustainable tourism and local communities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-amber-500 w-6 h-6" />
                <span className="font-bold">Verified Local Operators</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-amber-500 w-6 h-6" />
                <span className="font-bold">24/7 On-Ground Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
