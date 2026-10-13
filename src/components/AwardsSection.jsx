import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Trophy, 
  Award, 
  Star, 
  Zap, 
  Sparkles, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

export default function AwardsSection({ darkMode }) {
  const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Star: Star,
    Zap: Zap,
    Sparkles: Sparkles,
    BookOpen: BookOpen,
  };

  return (
    <section id="awards" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              darkMode 
                ? 'bg-amber-950/60 text-amber-400 border-amber-800/60' 
                : 'bg-amber-50 text-amber-700 border-amber-200'
            }`}>
              Recognition & Accolades
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Honors & Marquee Awards
          </h2>
          <p className={`mt-2 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Acknowledged for organizational impact, cross-team ownership, and scaling critical infrastructure.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.awards.map((award, i) => {
            const Icon = iconMap[award.icon] || Trophy;
            return (
              <div
                key={award.title + i}
                className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 shadow-lg' 
                    : 'bg-white border-slate-200 hover:border-amber-400 shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    darkMode ? 'bg-amber-950/60 text-amber-400' : 'bg-amber-50 text-amber-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {award.date}
                  </span>
                </div>

                <div className="mb-1 text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
                  {award.organization}
                </div>

                <h3 className={`text-lg font-bold tracking-tight mb-3 ${
                  darkMode ? 'text-white group-hover:text-amber-300' : 'text-slate-900 group-hover:text-amber-700'
                }`}>
                  {award.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {award.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
