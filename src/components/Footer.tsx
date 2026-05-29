import { BrainCircuit } from 'lucide-react';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-deep-navy text-slate-300 py-16 border-t border-white/10">
      <div className="grid-container grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
        <div className="md:col-span-1 lg:col-span-2">
          <div className="flex items-center gap-2 text-white mb-6">
            <BrainCircuit className="w-8 h-8 text-electric-blue" />
            <span className="font-fira text-xl font-bold tracking-tight">Cognitive Edge</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed mb-6">
            A premier AI academy. We do not just teach syntax; we engineer intuition. Preparing the next generation of builders for the intelligence age.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue transition-colors cursor-pointer">
               <span className="sr-only">LinkedIn</span>
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue transition-colors cursor-pointer">
               <span className="sr-only">Twitter</span>
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
             </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-fira text-white font-semibold mb-6">Programs</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-electric-blue transition-colors">Generative AI Engineering</a></li>
            <li><a href="#" className="hover:text-electric-blue transition-colors">Foundations of DL</a></li>
            <li><a href="#" className="hover:text-electric-blue transition-colors">Agentic AI Systems</a></li>
            <li><a href="#" className="hover:text-electric-blue transition-colors">MLOps & Deployment</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-fira text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-electric-blue transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-electric-blue transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-electric-blue transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-electric-blue transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="grid-container mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Cognitive Edge AI Academy. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
