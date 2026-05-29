import { Clock, GraduationCap, Video } from 'lucide-react';
import React from 'react';
import type { Course } from '../types';

const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Applied Generative AI Engineering',
    description: 'Learn to build production-ready applications across text, image, and voice modalities.',
    level: 'Intermediate',
    duration: '12 Weeks',
    isNew: true,
  },
  {
    id: 'c2',
    title: 'Foundations of Deep Learning',
    description: 'A rigorous mathematical approach to neural networks, backpropagation, and optimization.',
    level: 'Beginner',
    duration: '8 Weeks',
    isTrending: true,
  },
  {
    id: 'c3',
    title: 'Agentic AI Systems',
    description: 'Design and deploy autonomous agents using advanced reasoning and tool-use frameworks.',
    level: 'Advanced',
    duration: '10 Weeks',
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-24 bg-surface" id="curriculum">
      <div className="grid-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-fira text-3xl md:text-4xl font-bold tracking-tight text-deep-navy mb-4">
              Featured Flagship Programs
            </h2>
            <p className="text-lg text-slate-600 font-inter">
              Master the skills that matter. Our curriculum is co-designed with industry leaders to ensure you learn what is currently deployed in production.
            </p>
          </div>
          <button className="text-electric-blue font-semibold hover:text-blue-700 transition-colors hidden md:flex items-center gap-2">
            View All Programs <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-[1.5rem] border border-slate-200 p-8 shadow-card hover:shadow-floating transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-electric-blue group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                {course.isNew && (
                  <span className="bg-accent-lime text-deep-navy px-3 py-1 rounded-sm font-mono text-xs font-semibold uppercase tracking-wider">
                    New
                  </span>
                )}
                {course.isTrending && (
                  <span className="bg-electric-blue text-white px-3 py-1 rounded-sm font-mono text-xs font-semibold uppercase tracking-wider">
                    Trending
                  </span>
                )}
              </div>
              
              <h3 className="font-fira text-2xl font-bold text-deep-navy mb-3 group-hover:text-electric-blue transition-colors">
                {course.title}
              </h3>
              
              <p className="text-slate-600 mb-8 flex-grow">
                {course.description}
              </p>
              
              <div className="flex items-center gap-4 py-4 border-t border-slate-100 mb-6">
                <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                  <Video className="w-4 h-4 text-slate-400" />
                  {course.level}
                </div>
              </div>
              
              <button className="w-full bg-transparent border-2 border-slate-200 text-deep-navy hover:border-electric-blue hover:text-electric-blue px-6 py-3 rounded-sm font-semibold text-[15px] transition-all">
                View Syllabus
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="text-electric-blue font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-2">
            View All Programs <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
