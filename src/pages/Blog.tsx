import { Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    title: "10 Must-Visit Beaches in South Goa with a Self-Drive Car",
    excerpt: "Discover the hidden gems of South Goa that are only accessible by car. From Majorda to Palolem, we show you the best scenic routes.",
    date: "March 15, 2024",
    author: "OK India Team",
    image: "https://images.unsplash.com/photo-1512789677070-60d59049986c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Why Renting a Thar is the Ultimate Way to Experience Goa",
    excerpt: "The Mahindra Thar has become a symbol of Goan vacations. Learn why this off-roader is perfect for the coastal state's terrain.",
    date: "Feb 28, 2024",
    author: "Safety Expert",
    image: "https://images.unsplash.com/photo-1662453531980-60b64d39f400?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Driving Tips for First-Time Travelers in Goa",
    excerpt: "Read our comprehensive guide on road rules, parking, and traffic etiquette in Goa to ensure a safe and enjoyable self-drive experience.",
    date: "Jan 12, 2024",
    author: "Local Guide",
    image: "https://images.unsplash.com/photo-1582522434678-751a0293774b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-amber-600 text-sm font-black uppercase tracking-[0.3em] mb-4 underline decoration-amber-500 underline-offset-8">Travel & Safety Blog</h1>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 italic uppercase tracking-tighter leading-none mt-6">Goa Travel Insights</h2>
          <p className="text-neutral-500 mt-6 font-medium max-w-xl mx-auto italic">Expert tips and local recommendations to make your Goan vacation absolutely unforgettable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {BLOG_POSTS.map((post, i) => (
            <div key={i} className="group flex flex-col h-full bg-neutral-50 rounded-[2.5rem] overflow-hidden border border-neutral-100 hover:bg-white hover:shadow-2xl transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 text-[10px] uppercase font-black text-amber-600 mb-6 tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" /> {post.author}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-6 italic leading-tight group-hover:text-amber-600 transition-colors">{post.title}</h3>
                <p className="text-neutral-500 text-lg leading-relaxed mb-8 flex-grow font-medium line-clamp-3">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center gap-2 text-neutral-900 font-black uppercase tracking-widest text-xs border-b border-neutral-900 pb-1 self-start hover:text-amber-600 hover:border-amber-600 transition-all">
                  Read Full Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Article Section */}
        <div className="bg-neutral-50 rounded-[3rem] p-12 md:p-20 border border-neutral-100">
           <article className="prose prose-neutral max-w-none">
             <h2 className="text-3xl font-black italic uppercase text-neutral-900 mb-8 underline decoration-amber-500 underline-offset-8">Explore Goa Like A Local</h2>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-neutral-600 leading-relaxed text-lg font-medium">
               <div>
                 <p className="mb-6">
                   Traveling in Goa is an experience that stays with you forever. While many people choose to stick to the popular beaches, the real beauty of Goa lies in its hidden waterfalls, spice plantations, and ancient churches located in the hinterlands. With a <strong>self-drive car rental from OK India</strong>, you are not bound by the schedules of public transport or the high costs of private drivers.
                 </p>
                 <p>
                   From the white sands of <strong>Utorda</strong> to the vibrant shacks of <strong>Palolem</strong>, having your own vehicle allows you to witness the sunrise on the east coast and drive back to catch the sunset on the west. We provide cars that are regularly serviced and sanitized, ensuring your family's safety is never compromised.
                 </p>
               </div>
               <div>
                 <p className="mb-6">
                   Our car rental service supports all major locations in Goa including <strong>Margao</strong>, <strong>Panaji</strong>, and <strong>Vasco da Gama</strong>. We also offer specialized support for tourists arriving at the <strong>Mopa International Airport</strong>. Booking is as simple as sending a WhatsApp message with your dates and preferred car model.
                 </p>
                 <div className="bg-amber-500/10 p-8 rounded-3xl border border-amber-500/20 italic">
                   <h4 className="text-neutral-900 font-black mb-4 uppercase text-sm">Travel Tip:</h4>
                   <p className="text-sm">Always carry a hard copy of your driving license while traveling in Goa. Even though digital copies are valid, local traffic authorities often prefer physical documents during routine checks.</p>
                 </div>
               </div>
             </div>
           </article>
        </div>
      </div>
    </div>
  );
}
