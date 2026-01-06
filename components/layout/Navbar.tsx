import { ArrowRight, HardHat } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center">
            <HardHat size={18} strokeWidth={2} />
          </div>
          <Link href="#" className="text-xl font-semibold text-slate-900 tracking-tighter">
            TOQ<span className="text-slate-400">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
          <Link href="#expertise" className="hover:text-slate-900 transition-colors">Expertise</Link>
          <Link href="#process" className="hover:text-slate-900 transition-colors">Process</Link>
          <Link href="#projects" className="hover:text-slate-900 transition-colors">Projects</Link>
          <Link href="#leadership" className="hover:text-slate-900 transition-colors">Leadership</Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">
            Careers
          </Link>
          <Link
            href="#quote"
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20"
          >
            <span>Start Project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
