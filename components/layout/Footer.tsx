import { HardHat, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center">
                <HardHat size={14} strokeWidth={2} />
              </div>
              <span className="text-lg font-semibold tracking-tighter text-slate-900">TOQ.</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-6">
              Revolutionizing the construction experience through leadership, engagement, and excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Twitter size={20} strokeWidth={2} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Linkedin size={20} strokeWidth={2} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Instagram size={20} strokeWidth={2} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Pre-Construction</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">General Contracting</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Construction Mgmt</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Design-Build</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Leadership</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-slate-900 transition-colors">Licensing</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2025 TOQ Construction Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 bg-green-500"></span> Licensed & Insured
          </div>
        </div>
      </div>
    </footer>
  );
}
