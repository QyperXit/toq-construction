import { ArrowLeft, ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section className="py-24 bg-slate-900 text-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Built by TOQ</h2>
            <p className="text-slate-400">Recent commercial and hospitality projects.</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group">
            <div className="relative overflow-hidden h-64 mb-6">
              <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Hotel" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="flex items-start justify-between">
              <div className="">
                <h3 className="text-lg font-semibold text-white mb-1">Royal Stratford Hotel</h3>
                <p className="text-sm text-slate-400">London, UK • Renovation</p>
              </div>
              <div className="px-2 py-1 bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">2023</div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="group">
            <div className="relative overflow-hidden h-64 mb-6">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Resort" />
              <div className="group-hover:bg-black/0 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
            </div>
            <div className="flex items-start justify-between">
              <div className="">
                <h3 className="text-lg font-semibold text-white mb-1">The Meridian</h3>
                <p className="text-sm text-slate-400">Manchester, UK • Mixed-Use</p>
              </div>
              <div className="px-2 py-1 bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">2024</div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="group">
            <div className="relative overflow-hidden h-64 mb-6">
              <img src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Office" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="flex items-start justify-between">
              <div className="">
                <h3 className="text-lg font-semibold text-white mb-1">Canary Wharf Hub</h3>
                <p className="text-sm text-slate-400">London, UK • Commercial</p>
              </div>
              <div className="px-2 py-1 bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
