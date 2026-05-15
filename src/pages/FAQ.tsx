import { HelpCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    q: "What documents are required to rent a car in Goa?",
    a: "You need a valid Original Indian Driving License (Laminated) and an Aadhaar Card. For foreign nationals, an International Driving Permit and Passport are required."
  },
  {
    q: "Is there a security deposit involved?",
    a: "We offer zero security deposit for most of our regular customers. For certain luxury vehicles and out-of-state drives, a nominal refundable deposit of ₹2,000 to ₹5,000 may be collected."
  },
  {
    q: "Do you provide airport pickup and drop?",
    a: "Yes! We provide car delivery and pickup at both Dabolim Airport and the new Mopa Airport. Nominal delivery charges may apply based on your booking duration."
  },
  {
    q: "Is fuel included in the rental price?",
    a: "No, fuel is not included. We provide the car with a certain level of fuel, and you are expected to return it with the same level. There are many petrol pumps across Goa for your convenience."
  },
  {
    q: "What happens in case of a breakdown?",
    a: "We provide 24/7 roadside assistance. In case of mechanical failure, we will either fix the car on-site or provide a replacement vehicle immediately so your trip isn't interrupted."
  },
  {
    q: "Can I drive the rental car outside of Goa?",
    a: "Our standard self-drive rentals are strictly for use within the state of Goa. If you wish to travel to neighboring states like Maharashtra or Karnataka, please inform us in advance so we can arrange the necessary permits."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-neutral-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-amber-600 text-sm font-black uppercase tracking-[0.3em] mb-4 underline decoration-amber-500 decoration-4 underline-offset-8">Information Center</h1>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 italic tracking-tighter uppercase leading-none mt-6">Frequently Asked Questions</h2>
          <p className="text-neutral-500 mt-6 font-medium max-w-xl mx-auto">Everything you need to know about renting a car with OK India in Goa. If you have more questions, feel free to WhatsApp us!</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${openIndex === i ? 'shadow-xl border-amber-500/30' : 'hover:border-neutral-300'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-8 flex justify-between items-center group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl transition-colors ${openIndex === i ? 'bg-amber-500 text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="font-black text-lg md:text-xl text-neutral-900 italic uppercase">{faq.q}</span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-90 text-amber-500' : 'text-neutral-400 group-hover:translate-x-1'}`} />
              </button>
              
              <div className={`transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-neutral-600 leading-relaxed text-lg border-t border-neutral-50 font-medium">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-neutral-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent"></div>
          <h3 className="text-2xl font-black mb-4 relative z-10 italic uppercase">Still have questions?</h3>
          <p className="text-neutral-400 mb-8 relative z-10">Our customer support team is available 24/7 to assist you with your booking.</p>
          <a 
            href="https://wa.me/917249367599" 
            target="_blank" 
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest relative z-10 hover:bg-amber-600 transition-all shadow-xl"
          >
            Chat with Experts
          </a>
        </div>
      </div>
    </div>
  );
}
