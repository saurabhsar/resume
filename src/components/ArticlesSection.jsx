import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  FileText, 
  ExternalLink, 
  Lightbulb, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';

export default function ArticlesSection({ darkMode }) {
  return (
    <section id="philosophy" className="py-20 relative border-t border-[#E7E2DA] dark:border-[#2E2822]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              darkMode 
                ? 'bg-amber-950/40 text-amber-300 border-amber-800/50' 
                : 'bg-amber-100/70 text-amber-900 border-amber-200/80'
            }`}>
              Technical Insights
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
          }`}>
            Articles & Architecture Notes
          </h2>
          <p className={`mt-2 text-base ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            Reflecting on real-world systems architecture, streaming tradeoffs, and platform resilience.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.articles.map((art) => (
            <div
              key={art.title}
              className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between ${
                darkMode 
                  ? 'bg-[#1A1714] border-[#2E2822] hover:border-amber-600/50 shadow-md' 
                  : 'bg-white border-[#E7E2DA] hover:border-amber-700 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-amber-800 dark:text-amber-400 font-semibold">{art.platform}</span>
                  <span className="text-stone-500">{art.date}</span>
                </div>

                <h4 className={`text-base font-bold tracking-tight mb-3 ${
                  darkMode ? 'text-[#EDE8E1] group-hover:text-amber-300' : 'text-stone-900 group-hover:text-amber-800'
                }`}>
                  {art.title}
                </h4>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-stone-300' : 'text-stone-600'
                }`}>
                  {art.summary}
                </p>
              </div>

              <a
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                  darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-800 hover:text-amber-900'
                }`}
              >
                <span>Read Full Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
