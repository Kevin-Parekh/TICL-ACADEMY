import { ArrowRight, Play, Sparkles } from 'lucide-react';
import React from 'react';

export function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-deep-navy to-[#1a2542] text-white overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788415-1fedc8c73294?q=80&w=2693&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="grid-container relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
            </span>
            <span className="text-slate-300">Live Cohort Enrollment Open</span>
          </div>
          
          <h1 className="font-fira text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Master Artificial Intelligence with <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-300">Academic Rigor</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 font-inter max-w-xl leading-relaxed">
            The premier AI academy bridging the gap between theoretical knowledge and production-ready engineering for India's brightest minds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="w-full sm:w-auto bg-electric-blue text-white px-8 py-3.5 rounded-sm font-semibold text-[15px] shadow-button-primary hover:translate-y-[2px] hover:shadow-button-primary-active active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2">
              Explore Curriculum
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white px-8 py-3.5 rounded-sm font-semibold text-[15px] transition-all flex items-center justify-center gap-2 group">
              <Play className="w-4 h-4 group-hover:text-accent-lime transition-colors" />
              Watch Demo
            </button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="font-fira text-2xl font-bold text-white">98%</p>
              <p className="text-sm font-mono text-slate-400 mt-1">Placement Rate</p>
            </div>
            <div>
              <p className="font-fira text-2xl font-bold text-white">500+</p>
              <p className="text-sm font-mono text-slate-400 mt-1">Alumni Network</p>
            </div>
            <div>
              <p className="font-fira text-2xl font-bold text-white">4.9/5</p>
              <p className="text-sm font-mono text-slate-400 mt-1">Average Rating</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-electric-blue blur-[120px] opacity-20 rounded-full"></div>
          <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-lime" />
                <span className="font-fira font-semibold text-white">Curriculum Overview</span>
              </div>
              <span className="font-mono text-xs text-slate-400">v2.0.4</span>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Neural Networks & Deep Learning', progress: '100%', active: false },
                { title: 'Large Language Models (LLMs)', progress: '60%', active: true },
                { title: 'Agentic Workflows', progress: '0%', active: false },
                { title: 'MLOps & Deployment', progress: '0%', active: false }
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-md border ${item.active ? 'border-electric-blue bg-electric-blue/10' : 'border-white/5 bg-white/5'} transition-colors`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-medium ${item.active ? 'text-white' : 'text-slate-300'}`}>{item.title}</span>
                    <span className="font-mono text-xs text-slate-400">{item.progress}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-electric-blue h-1.5 rounded-full" style={{ width: item.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
