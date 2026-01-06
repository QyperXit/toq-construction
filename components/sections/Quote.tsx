
export function Quote() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="quote">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white shadow-2xl shadow-slate-200 overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Visual Left Side */}
            <div className="bg-slate-900 relative p-12 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover grayscale mix-blend-overlay" alt="Background" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 text-white text-xs font-medium mb-8">
                  <span className="w-1.5 h-1.5 bg-green-500"></span> Estimating Team Online
                </div>
                <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Let's Build Together.</h2>
                <p className="text-slate-400 text-lg">Discuss your next renovation or new build with our team. We provide detailed estimates within 48 hours.</p>
              </div>
              <div className="relative z-10 mt-12 space-y-6">
                <blockquote className="border-l-2 border-slate-700 pl-4">
                  <p className="text-slate-300 text-sm italic mb-4">"TOQ Construction managed our renovation with zero disruption to our guests. The attention to detail was unmatched."</p>
                  <footer className="text-xs font-semibold text-white">David Miller, GM at Courtyard Marriott</footer>
                </blockquote>
              </div>
            </div>
            
            {/* Form Right Side */}
            <div className="p-8 md:p-12 lg:p-16">
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">First Name</label>
                    <input type="text" className="block w-full border-0 py-3 px-4 text-slate-900 bg-slate-50 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Last Name</label>
                    <input type="text" className="block w-full border-0 py-3 px-4 text-slate-900 bg-slate-50 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm transition-all" placeholder="Smith" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Work Email</label>
                  <input type="email" className="block w-full border-0 py-3 px-4 text-slate-900 bg-slate-50 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm transition-all" placeholder="jane@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Project Type</label>
                  <select className="block w-full border-0 py-3 px-4 text-slate-900 bg-slate-50 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm transition-all">
                    <option>Hotel Renovation</option>
                    <option>Commercial New Build</option>
                    <option>Multi-Family Residential</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Project Details</label>
                  <textarea rows={3} className="block w-full border-0 py-3 px-4 text-slate-900 bg-slate-50 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm transition-all" placeholder="Tell us about the project scope, location, and timeline.."></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent shadow-sm text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
