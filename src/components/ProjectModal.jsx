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
        className="fixed inset-0 bg-[#141210]/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Window */}
      <div 
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 transition-all ${
          darkMode 
            ? 'bg-[#1A1714] border-[#383129] text-[#EDE8E1]' 
            : 'bg-white border-[#E7E2DA] text-stone-900 shadow-xl'
        }`}
      >
        
        {/* Header Bar */}
        <div className={`sticky top-0 z-20 flex items-center justify-between p-6 border-b backdrop-blur-md ${
          darkMode 
            ? 'bg-[#1A1714]/95 border-[#2E2822]' 
            : 'bg-white/95 border-[#E7E2DA]'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                darkMode ? 'bg-amber-950/60 text-amber-300' : 'bg-amber-100 text-amber-900'
              }`}>
                {company?.company || 'Experience'}
              </span>
              <span className="text-xs font-mono text-stone-500">
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
                ? 'bg-[#221D18] text-stone-300 border-[#383129] hover:bg-[#2A241F] hover:text-white' 
                : 'bg-[#F2ECE1] text-stone-700 border-[#DED4C3] hover:bg-[#EAE2D4]'
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
              ? 'bg-[#241F1A] border-[#383129] text-stone-200' 
              : 'bg-[#FAF7F2] border-[#E8E1D5] text-stone-800'
          }`}>
            <div>
              <p className="text-xs font-mono uppercase font-semibold text-amber-800 dark:text-amber-400">Project Focus</p>
              <p className="text-sm font-medium mt-0.5">{project.tagline}</p>
            </div>
            <div className="self-start sm:self-auto shrink-0">
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">
                {project.scale}
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-2 ${
              darkMode ? 'text-stone-400' : 'text-stone-500'
            }`}>
              Overview
            </h4>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
              {project.description}
            </p>
          </div>

          {/* Problem Statement */}
          <div className={`p-4 rounded-xl border ${
            darkMode ? 'bg-[#211A1A] border-[#3E2828] text-stone-300' : 'bg-[#FAF3F3] border-[#F0DADA] text-stone-800'
          }`}>
            <h4 className="text-xs font-mono uppercase font-bold text-amber-900 dark:text-amber-400 mb-1 flex items-center gap-1.5">
              <span>Challenge & Problem Statement</span>
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* System Design & Architecture */}
          <div className={`p-4 rounded-xl border ${
            darkMode ? 'bg-[#18201B] border-[#25362B] text-stone-300' : 'bg-[#F2F7F4] border-[#D6E6DC] text-stone-800'
          }`}>
            <h4 className="text-xs font-mono uppercase font-bold text-emerald-800 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
              <span>Solution & Technical Architecture</span>
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Engineering Deliverables */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-3 ${
              darkMode ? 'text-stone-400' : 'text-stone-500'
            }`}>
              Key Contributions & Engineering Deliverables
            </h4>
            <div className="space-y-2">
              {project.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-stone-300' : 'text-stone-700'}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-4 border-t border-[#E7E2DA] dark:border-[#2E2822]">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-2 ${
              darkMode ? 'text-stone-400' : 'text-stone-500'
            }`}>
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                    darkMode 
                      ? 'bg-[#241F1A] text-stone-300 border-[#383025]' 
                      : 'bg-[#F2ECE1] text-stone-800 border-[#DFD6C5]'
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
          darkMode ? 'bg-[#141210] border-[#2E2822]' : 'bg-[#FAF7F2] border-[#E7E2DA]'
        }`}>
          <span className="text-xs font-mono text-stone-500">
            Press Esc or click outside to dismiss
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-amber-800 text-[#FAF7F2] hover:bg-amber-900 transition-colors shadow-xs"
          >
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  );
}
