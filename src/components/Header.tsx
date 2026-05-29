import { BrainCircuit, Menu } from 'lucide-react';
import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="grid-container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-deep-navy">
          <BrainCircuit className="w-8 h-8 text-electric-blue" />
          <span className="font-fira text-xl font-bold tracking-tight">Cognitive Edge</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#curriculum" className="hover:text-electric-blue transition-colors">Curriculum</a>
          <a href="#outcomes" className="hover:text-electric-blue transition-colors">Outcomes</a>
          <a href="#faculty" className="hover:text-electric-blue transition-colors">Faculty</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-electric-blue transition-colors">
            Sign In
          </button>
          <button className="bg-electric-blue text-white px-5 py-2.5 rounded-sm font-semibold text-[15px] shadow-button-primary hover:translate-y-[2px] hover:shadow-button-primary-active active:translate-y-[4px] active:shadow-none transition-all">
            Start Learning
          </button>
          <button className="md:hidden text-deep-navy">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
