import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Network, 
  Layers 
} from 'lucide-react';

export default function PublicationsSection({ darkMode }) {
  return (
    <section id="publications" className="py-20 relative border-t border-[#E7E2DA] dark:border-[#2E2822]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              darkMode 
                ? 'bg-amber-950/40 text-amber-300 border-amber-800/50' 
                : 'bg-amber-100/70 text-amber-900 border-amber-200/80'
            }`}>
              Academic Rigor
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
          }`}>
            Peer-Reviewed Research Publications
          </h2>
          <p className={`mt-2 text-base ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            Algorithms in optical mesh networks, NP-hard heuristic optimizations, and traffic grooming.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="space-y-6">
          {resumeData.publications.map((pub) => (
            <div
              key={pub.title}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 group ${
                darkMode 
                  ? 'bg-[#1A1714] border-[#2E2822] hover:border-amber-600/50 shadow-md' 
                  : 'bg-white border-[#E7E2DA] hover:border-amber-700 shadow-xs'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-semibold text-amber-900 dark:text-amber-300 px-2.5 py-0.5 rounded bg-amber-100/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40">
                      {pub.journal}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      {pub.date}
                    </span>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${
                    darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
                  }`}>
                    {pub.title}
                  </h3>
                </div>

                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`self-start inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                      darkMode 
                        ? 'bg-[#221D18] text-stone-300 border-[#383025] hover:border-amber-500 hover:text-white' 
                        : 'bg-[#F2ECE1] text-stone-800 border-[#DED4C3] hover:border-amber-700 hover:bg-white'
                    }`}
                  >
                    <span>View Publication</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  </a>
                )}
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                darkMode ? 'text-stone-300' : 'text-stone-600'
              }`}>
                {pub.abstract}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${
                      darkMode 
                        ? 'bg-[#151210] text-stone-400 border-[#2E2822]' 
                        : 'bg-[#FAF7F2] text-stone-700 border-[#E8E1D5]'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
