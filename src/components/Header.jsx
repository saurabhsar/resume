import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Search, 
  Printer, 
  Globe, 
  Sun, 
  Moon, 
  Menu, 
  X,
  FileText
} from 'lucide-react';
import { Linkedin, Github } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Header({ 
  darkMode, 
  setDarkMode, 
  onOpenSearch, 
  onExpandAllExperience 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    // Ensure all experiences are expanded before printing
    if (onExpandAllExperience) {
      onExpandAllExperience();
    }
    setTimeout(() => {
      window.print();
    }, 250);
  };

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Awards', href: '#awards' },
    { name: 'Publications', href: '#publications' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        scrolled 
          ? darkMode 
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/30 py-3'
          : darkMode 
            ? 'bg-transparent py-5' 
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-105 shadow-md ${
              darkMode 
                ? 'bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 text-white shadow-indigo-500/20' 
                : 'bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-indigo-600/25'
            }`}>
              SA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold tracking-tight text-base sm:text-lg transition-colors ${
                  darkMode ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
                }`}>
                  {resumeData.personal.name}
                </span>
                <span className={`hidden sm:inline-flex text-[11px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                  darkMode 
                    ? 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60' 
                    : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                }`}>
                  Staff Engineer
                </span>
              </div>
              <p className={`text-xs font-mono hidden md:block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {resumeData.personal.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Search Button (Cmd+K) */}
            <button
              onClick={onOpenSearch}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:border-indigo-500/80 hover:bg-slate-800' 
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-indigo-400 hover:bg-white'
              }`}
              title="Quick Search (Ctrl/Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className={`hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                darkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-200 border-slate-300 text-slate-600'
              }`}>
                ⌘K
              </kbd>
            </button>

            {/* Print / Download PDF */}
            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:border-emerald-500/80 hover:text-white' 
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-emerald-500 hover:bg-white'
              }`}
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">Print / PDF</span>
            </button>

            {/* LinkedIn Link */}
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                darkMode 
                  ? 'text-slate-300 border-slate-800 hover:border-blue-500/80 hover:text-blue-400 hover:bg-slate-900' 
                  : 'text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:bg-slate-100'
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-all ${
                darkMode 
                  ? 'text-amber-400 border-slate-800 hover:bg-slate-900 hover:border-amber-400/50' 
                  : 'text-indigo-600 border-slate-200 hover:bg-slate-100 hover:border-indigo-400'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg border transition-all ${
                darkMode 
                  ? 'text-slate-300 border-slate-800 hover:bg-slate-900' 
                  : 'text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-3 p-4 rounded-2xl border shadow-xl transition-all ${
            darkMode 
              ? 'bg-slate-900/95 border-slate-800 text-slate-200' 
              : 'bg-white/95 border-slate-200 text-slate-800'
          }`}>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-blue-400"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-slate-400"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 text-xs font-medium text-emerald-400"
              >
                <Printer className="w-3.5 h-3.5" /> Print PDF
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
