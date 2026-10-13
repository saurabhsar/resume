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
    <section id="publications" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              darkMode 
                ? 'bg-blue-950/60 text-blue-400 border-blue-800/60' 
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              Academic Rigor
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Peer-Reviewed Research Publications
          </h2>
          <p className={`mt-2 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Algorithms in optical mesh networks, NP-hard heuristic optimizations, and traffic grooming.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="space-y-6">
          {resumeData.publications.map((pub, i) => (
            <div
              key={pub.title}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 group ${
                darkMode 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 shadow-lg' 
                  : 'bg-white border-slate-200 hover:border-blue-400 shadow-md'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-semibold text-blue-400 px-2.5 py-0.5 rounded bg-blue-950/50 border border-blue-800/50">
                      {pub.journal}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {pub.date}
                    </span>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
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
                        ? 'bg-slate-800 text-slate-300 border-slate-700 hover:border-blue-400 hover:text-white' 
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-white'
                    }`}
                  >
                    <span>View Publication</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  </a>
                )}
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {pub.abstract}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${
                      darkMode 
                        ? 'bg-slate-950 text-slate-400 border-slate-800' 
                        : 'bg-slate-50 text-slate-600 border-slate-200'
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
