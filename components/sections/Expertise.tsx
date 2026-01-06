import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Expertise() {
  return (
    <section className="bg-slate-50 pt-24 pb-24" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Sectors & Expertise</h2>
            <p className="text-slate-500 text-lg">Comprehensive construction solutions tailored to your industry needs.</p>
          </div>
          <Link href="#" className="hidden md:flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors mt-4 md:mt-0">
            View All Services <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Hospitality" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest bg-blue-400/10 px-2 py-1 backdrop-blur-sm">Core Focus</span>
                <div className="w-8 h-8 bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">Hospitality</h3>
              <p className="text-slate-300 text-sm">Hotel renovations, lobbies, and PIPs.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Commercial" />
            <div className="bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-green-400 uppercase tracking-widest bg-green-400/10 px-2 py-1 backdrop-blur-sm">Active</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">Commercial</h3>
              <p className="text-slate-300 text-sm">Office buildings, retail, and mixed-use.</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Residential" />
            <div className="bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest bg-orange-400/10 px-2 py-1 backdrop-blur-sm">Expanding</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">Multi-Family</h3>
              <p className="text-slate-300 text-sm">Apartment complexes and condominiums.</p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Architecture" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-semibold text-white mb-1">Design-Build</h3>
              <p className="text-slate-300 text-sm">Integrated design and construction services.</p>
            </div>
          </div>
          
          {/* Card 5 */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Management" />
            <div className="bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-semibold text-white mb-1">Site Management</h3>
              <p className="text-slate-300 text-sm">On-site supervision and safety control.</p>
            </div>
          </div>
          
          {/* Card 6 */}
          <div className="group relative h-80 bg-white border border-slate-200 flex flex-col items-center justify-center text-center p-8 hover:border-slate-300 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
              <ArrowRight size={32} className="text-slate-400 group-hover:text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">View Portfolio</h3>
            <p className="text-sm text-slate-500">See our completed projects across the US.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
