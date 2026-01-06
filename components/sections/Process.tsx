import { Hammer, Key, Ruler } from "lucide-react";

export function Process() {
  return (
    <section className="py-24 bg-white border-y border-slate-200" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2 block">How We Build</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">A Concierge Experience</h2>
          <p className="text-slate-500 text-lg">We own the entire construction lifecycle, ensuring transparency, quality, and timely delivery.</p>
        </div>
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 flex items-center justify-center relative z-10 mb-6 shadow-xl shadow-slate-100">
                <Ruler size={32} className="text-slate-900" />
                <div className="absolute -right-2 -top-2 w-8 h-8 bg-slate-900 text-white text-sm font-bold flex items-center justify-center border-4 border-white">1</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Pre-Construction</h3>
              <p className="text-sm text-slate-500 leading-relaxed px-6">Detailed planning, estimating, and value engineering to set the project up for success.</p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 flex items-center justify-center relative z-10 mb-6 shadow-xl shadow-slate-100">
                <Hammer size={32} className="text-slate-900" />
                <div className="absolute -right-2 -top-2 w-8 h-8 bg-slate-900 text-white text-sm font-bold flex items-center justify-center border-4 border-white">2</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Construction</h3>
              <p className="text-sm text-slate-500 leading-relaxed px-6">Execution with precision. Dedicated site superintendents and real-time progress tracking.</p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 flex items-center justify-center relative z-10 mb-6 shadow-xl shadow-slate-100">
                <Key size={32} className="text-slate-900" />
                <div className="absolute -right-2 -top-2 w-8 h-8 bg-slate-900 text-white text-sm font-bold flex items-center justify-center border-4 border-white">3</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Closeout</h3>
              <p className="text-sm text-slate-500 leading-relaxed px-6">Thorough inspections, punch-list completion, and seamless turnover to operations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
