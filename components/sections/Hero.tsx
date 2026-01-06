import { CheckCircle, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle Grid Background */}
      <div className="[background-size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-40 absolute top-0 right-0 bottom-0 left-0 bg-grid-pattern"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-8 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-blue-600 animate-pulse"></span> Licensed General Contractor
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.05]">
            Building the <br />
            <span className="text-slate-400">Future Today.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-lg font-normal">
            We deliver premier construction management and general contracting services for hospitality, commercial, and residential developments across the nation.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full mb-12">
            <Link 
              href="#quote" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2"
            >
              Consultation
            </Link>
            <Link 
              href="#expertise" 
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
            >
              <LayoutGrid size={16} />
              View Sectors
            </Link>
          </div>
          <div className="flex items-center gap-8 border-t border-slate-100 pt-8">
            <div className="">
              <div className="text-2xl font-semibold text-slate-900 tracking-tight">25+</div>
              <div className="text-xs text-slate-400 font-medium uppercase mt-1">Years Experience</div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="">
              <div className="text-2xl font-semibold text-slate-900 tracking-tight">150+</div>
              <div className="text-xs text-slate-400 font-medium uppercase mt-1">Projects Delivered</div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="">
              <div className="text-2xl font-semibold text-slate-900 tracking-tight">100%</div>
              <div className="text-xs text-slate-400 font-medium uppercase mt-1">Safety Record</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image Composition */}
        <div className="lg:h-[600px] hidden lg:block w-full relative">
          <div className="absolute inset-0 bg-slate-100 rotate-3 scale-95 z-0"></div>
          <div className="absolute inset-0 z-10 overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
              alt="Construction Site" 
              className="w-full h-full object-cover"
            />
            {/* Floating Card 1 */}
            <div className="bg-white/95 max-w-xs border-slate-100 border pt-4 pr-4 pb-4 pl-4 absolute bottom-8 left-8 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle size={16} strokeWidth={2} />
                </div>
                <div className="">
                  <p className="text-sm font-semibold text-slate-900">Project Completed</p>
                  <p className="text-xs text-slate-500">Novotel • London, Greater London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
