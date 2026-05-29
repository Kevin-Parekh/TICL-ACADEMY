import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import React from 'react';

const STEPS = [
  {
    id: 's1',
    title: 'Foundational Knowledge',
    description: 'Master the mathematical and theoretical underpinnings of modern AI algorithms.',
    icon: Lightbulb
  },
  {
    id: 's2',
    title: 'Hands-on Engineering',
    description: 'Build neural networks from scratch and fine-tune existing foundation models.',
    icon: Code2
  },
  {
    id: 's3',
    title: 'Collaborative Projects',
    description: 'Work in sprint-based teams to solve real-world industry problem statements.',
    icon: Users
  },
  {
    id: 's4',
    title: 'Production Deployment',
    description: 'Deploy resilient scaleable architectures to cloud infrastructure.',
    icon: Rocket
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white" id="outcomes">
      <div className="grid-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-fira text-3xl md:text-4xl font-bold tracking-tight text-deep-navy mb-4">
            The Learning Methodology
          </h2>
          <p className="text-lg text-slate-600 font-inter">
            Our pedagogical approach is designed for maximum retention and practical application.
          </p>
        </div>
        
        <div className="relative">
          {/* Dashed connecting line for desktop */}
          <div className="hidden md:block absolute top-[3.5rem] inset-x-[10%] h-[2px] border-t-2 border-dashed border-slate-200 -z-10 bg-white"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center text-center">
                  <div className="bg-white p-2 z-10 mb-6">
                    <div className="w-24 h-24 rounded-full bg-electric-blue/10 flex items-center justify-center border-2 border-white shadow-sm relative group">
                      <Icon className="w-10 h-10 text-electric-blue group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-deep-navy text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-fira text-xl font-bold text-deep-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
