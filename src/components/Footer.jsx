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
        ? 'bg-[#141210] border-[#2E2822] text-stone-400' 
        : 'bg-[#F5F0E8] border-[#E5DECةD] text-stone-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E0D8CB] dark:border-[#2E2822]">
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-base font-bold ${darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'}`}>
                {resumeData.personal.name}
              </span>
              <span className="text-xs font-mono text-amber-800 dark:text-amber-400">
                — {resumeData.personal.title}
              </span>
            </div>
            <p className="text-xs text-stone-500">
              Staff Software Engineer & Platform Architect • {resumeData.personal.location}
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
                  ? 'bg-[#1E1B18] border-[#383129] hover:border-amber-600 hover:text-amber-400' 
                  : 'bg-white border-[#E0D8CB] hover:border-amber-700 hover:text-amber-900'
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
                  ? 'bg-[#1E1B18] border-[#383129] hover:border-stone-500 hover:text-white' 
                  : 'bg-white border-[#E0D8CB] hover:border-stone-500 hover:text-stone-900'
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
                  ? 'bg-[#1E1B18] border-[#383129] hover:border-amber-500 hover:text-amber-400' 
                  : 'bg-white border-[#E0D8CB] hover:border-amber-600 hover:text-amber-800'
              }`}
              title="Technical Blog"
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'bg-[#1E1B18] border-[#383129] hover:border-amber-500 hover:text-white' 
                  : 'bg-white border-[#E0D8CB] hover:border-amber-700 hover:text-stone-900'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {resumeData.personal.name}. Built with React, Vite & Tailwind CSS.</p>
          <p className="font-mono text-[11px]">
            Optimized for Vercel deployment & PDF printing.
          </p>
        </div>

      </div>
    </footer>
  );
}
