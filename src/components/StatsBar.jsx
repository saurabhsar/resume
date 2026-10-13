import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Clock, 
  Flame, 
  Users, 
  Layers, 
  Trophy, 
  FileText 
} from 'lucide-react';

export default function StatsBar({ darkMode, onStatClick }) {
  const icons = [Clock, Flame, Users, Layers, Trophy, FileText];
  const targetSections = ['#experience', '#experience', '#experience', '#experience', '#awards', '#publications'];

  return (
    <section className="py-6 border-y border-slate-800/60 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {resumeData.stats.map((stat, idx) => {
            const Icon = icons[idx] || Layers;
            const target = targetSections[idx];
            return (
              <a
                key={stat.label}
                href={target}
                onClick={(e) => {
                  if (onStatClick) {
                    onStatClick(target);
                  }
                }}
                className={`p-4 rounded-xl border transition-all duration-300 group hover:-translate-y-0.5 ${
                  darkMode 
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-indigo-500/10' 
                    : 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-slate-50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {stat.label}
                  </span>
                  <Icon className={`w-3.5 h-3.5 transition-colors ${
                    darkMode ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-indigo-600 group-hover:text-indigo-700'
                  }`} />
                </div>
                <div className={`text-xl sm:text-2xl font-black tracking-tight ${
                  darkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-[11px] font-medium mt-1 truncate ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {stat.sub}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
