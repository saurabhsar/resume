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
    <section id="philosophy" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              darkMode 
                ? 'bg-cyan-950/60 text-cyan-400 border-cyan-800/60' 
                : 'bg-cyan-50 text-cyan-700 border-cyan-200'
            }`}>
              Engineering Philosophy
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Articles & Technical Thoughts
          </h2>
          <p className={`mt-2 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Reflecting on real-world engineering experiences: Kafka vs Pub/Sub, loop engineering, and agentic precision.
          </p>
        </div>

        {/* Thought callout banner */}
        <div className={`p-6 sm:p-7 rounded-2xl border mb-10 ${
          darkMode 
            ? 'bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border-indigo-900/50 text-slate-200' 
            : 'bg-gradient-to-r from-indigo-50 via-purple-50 to-white border-indigo-200 text-slate-800'
        }`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl shrink-0 ${
              darkMode ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
            }`}>
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight mb-1">
                "Reason from first principle!"
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Every architecture challenge—whether scaling distributed locks for 500k concurrent e-commerce flash sales, structuring regulatory KYC state machines, or preventing LLM hallucinations with ASD-STE100—begins with stripping assumptions down to fundamental axioms and reasoning upwards.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.articles.map((art) => (
            <div
              key={art.title}
              className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between ${
                darkMode 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 shadow-lg' 
                  : 'bg-white border-slate-200 hover:border-cyan-400 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-cyan-400 font-semibold">{art.platform}</span>
                  <span className="text-slate-400">{art.date}</span>
                </div>

                <h4 className={`text-base font-bold tracking-tight mb-3 ${
                  darkMode ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
                }`}>
                  {art.title}
                </h4>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {art.summary}
                </p>
              </div>

              <a
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                  darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'
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
