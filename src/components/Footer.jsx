import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  ArrowUp, 
  Globe, 
  BookOpen, 
  Heart,
  Mail
} from 'lucide-react';
import { Linkedin, Github } from './Icons';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${
      darkMode 
        ? 'bg-slate-950 border-slate-800/80 text-slate-400' 
        : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {resumeData.personal.name}
              </span>
              <span className="text-xs font-mono text-indigo-400">
                — {resumeData.personal.tagline}
              </span>
            </div>
            <p className="text-xs">
              Staff Software Engineer & Engineering Leader • Bengaluru, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 hover:border-blue-500 hover:text-blue-400' 
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 hover:border-purple-500 hover:text-purple-400' 
                  : 'bg-white border-slate-200 hover:border-purple-400 hover:text-purple-600'
              }`}
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={resumeData.personal.blog}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 hover:border-amber-500 hover:text-amber-400' 
                  : 'bg-white border-slate-200 hover:border-amber-400 hover:text-amber-600'
              }`}
              title="Technical Blog"
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 hover:border-indigo-500 hover:text-white' 
                  : 'bg-white border-slate-200 hover:border-indigo-400 hover:text-slate-900'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {resumeData.personal.name}. Built with Vite, React & Tailwind CSS.</p>
          <p className="font-mono text-[11px] text-slate-500">
            Optimized for Vercel deployment & PDF printing.
          </p>
        </div>

      </div>
    </footer>
  );
}
