import React, { useEffect } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Server, 
  ShieldCheck, 
  Share2,
  ExternalLink
} from 'lucide-react';

export default function ProjectModal({ project, company, onClose, darkMode }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 no-print">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Window */}
      <div 
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 transition-all ${
          darkMode 
            ? 'bg-slate-900 border-slate-700 text-slate-100 shadow-black/80' 
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-400/30'
        }`}
      >
        
        {/* Header Bar */}
        <div className={`sticky top-0 z-20 flex items-center justify-between p-6 border-b backdrop-blur-md ${
          darkMode 
            ? 'bg-slate-900/95 border-slate-800' 
            : 'bg-white/95 border-slate-200'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                darkMode ? 'bg-indigo-950 text-indigo-300' : 'bg-indigo-100 text-indigo-800'
              }`}>
                {company?.company || 'Experience'}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.period}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {project.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-all ${
              darkMode 
                ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white' 
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Tagline & Scale Callout */}
          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
            darkMode 
              ? 'bg-indigo-950/30 border-indigo-900/50 text-indigo-200' 
              : 'bg-indigo-50 border-indigo-100 text-indigo-900'
          }`}>
            <div>
              <p className="text-xs font-mono uppercase font-semibold text-indigo-400">Project Focus</p>
              <p className="text-sm font-medium mt-0.5">{project.tagline}</p>
            </div>
            <div className="self-start sm:self-auto shrink-0">
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {project.scale}
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Overview
            </h4>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.description}
            </p>
          </div>

          {/* Problem Statement */}
          <div className={`p-4 rounded-xl border ${
            darkMode ? 'bg-rose-950/20 border-rose-900/40 text-rose-200' : 'bg-rose-50 border-rose-100 text-rose-900'
          }`}>
            <h4 className="text-xs font-mono uppercase font-bold text-rose-400 mb-1 flex items-center gap-1.5">
              <span>Challenge & Problem Statement</span>
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* System Design & Architecture */}
          <div className={`p-4 rounded-xl border ${
            darkMode ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-200' : 'bg-emerald-50 border-emerald-100 text-emerald-900'
          }`}>
            <h4 className="text-xs font-mono uppercase font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
              <span>Solution & Technical Architecture</span>
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Engineering Deliverables */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-3 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Key Contributions & Engineering Deliverables
            </h4>
            <div className="space-y-2">
              {project.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                    darkMode 
                      ? 'bg-slate-800 text-slate-200 border-slate-700' 
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className={`p-4 sm:p-6 border-t flex items-center justify-between ${
          darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <span className={`text-xs font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Press Esc or click outside to dismiss
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
          >
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  );
}
