import { MessageCircle, Star, Quote } from 'lucide-react';

const REVIEWS = [
  { name: "Rahul Sharma", location: "Delhi", text: "Rented a Thar for 4 days. The car was in top condition and delivered right to my hotel in Utorda. Highly recommended!", date: "Jan 2024" },
  { name: "Priya V", location: "Bangalore", text: "Very smooth process. No security deposit was a big plus for us. The Baleno we got was super clean and fuel efficient.", date: "Dec 2023" },
  { name: "John D'Souza", location: "UK", text: "Excellent customer service. They helped us with an International Permit and the airport pickup was perfectly on time. 5 stars!", date: "Feb 2024" },
  { name: "Ankit Gupta", location: "Mumbai", text: "Best prices in South Goa. I've used OK India twice now and they never disappoint. Reliable and honest people.", date: "March 2024" },
  { name: "Sneha Patel", location: "Ahmedabad", text: "The team is very professional. Had a minor issue with a tyre, they sent a mechanic within 20 mins. That's real service!", date: "Nov 2023" },
  { name: "Robert Miller", location: "Germany", text: "A great experience. The car gave us the freedom to see the real Goa. Professional staff and good cars.", date: "Jan 2024" }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-amber-600 text-sm font-black uppercase tracking-[0.3em] mb-4 underline decoration-amber-500 underline-offset-8">Guest Reviews</h1>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 italic tracking-tighter uppercase leading-none mt-6">Voices of Happy Travelers</h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex text-amber-500">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-black text-xl italic uppercase">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <div key={i} className="p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 hover:bg-white hover:shadow-2xl transition-all relative group">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-amber-500/20 group-hover:text-amber-500/40 transition-colors" />
              <div className="flex text-amber-500 gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-neutral-700 text-lg leading-relaxed mb-8 italic font-medium">"{r.text}"</p>
              <div className="flex items-center gap-4 border-t border-neutral-200 pt-6">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-black text-xl italic">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-neutral-900 uppercase italic leading-none mb-1">{r.name}</h4>
                  <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">{r.location} • {r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-neutral-500 font-bold mb-8 italic text-lg">Join our community of happy explorers!</p>
          <a 
            href="https://wa.me/917249367599" 
            target="_blank" 
            className="inline-flex items-center gap-3 bg-neutral-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl"
          >
            <MessageCircle className="w-5 h-5 text-amber-500" />
            Book Your Ride Now
          </a>
        </div>
      </div>
    </div>
  );
}
