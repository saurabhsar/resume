import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Clock, 
  Flame, 
  Layers, 
  ShieldCheck, 
  Trophy, 
  FileText 
} from 'lucide-react';

export default function StatsBar({ darkMode, onStatClick }) {
  const icons = [Clock, Flame, Layers, ShieldCheck, Trophy, FileText];
  const targetSections = ['#experience', '#experience', '#experience', '#experience', '#awards', '#publications'];

  return (
    <section className="py-6 border-y border-[#E7E2DA] dark:border-[#2E2822] no-print">
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
                    ? 'bg-[#1A1714] border-[#2E2822] hover:border-amber-600/50 hover:bg-[#221D18] shadow-sm' 
                    : 'bg-white border-[#E7E2DA] hover:border-amber-600 hover:bg-[#FDFCF9] shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono uppercase tracking-wider ${
                    darkMode ? 'text-stone-400' : 'text-stone-500'
                  }`}>
                    {stat.label}
                  </span>
                  <Icon className={`w-3.5 h-3.5 transition-colors ${
                    darkMode ? 'text-amber-400 group-hover:text-amber-300' : 'text-amber-700 group-hover:text-amber-800'
                  }`} />
                </div>
                <div className={`text-xl sm:text-2xl font-black tracking-tight ${
                  darkMode ? 'text-[#EDE8E1] group-hover:text-amber-300' : 'text-stone-900 group-hover:text-amber-800'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-[11px] font-medium mt-1 truncate ${
                  darkMode ? 'text-stone-400' : 'text-stone-600'
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
