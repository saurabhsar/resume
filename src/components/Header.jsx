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
            ? 'bg-[#141210]/90 backdrop-blur-md border-b border-[#2E2822] shadow-lg shadow-black/30 py-3' 
            : 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7E2DA] shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm tracking-tight transition-transform duration-300 group-hover:scale-105 shadow-sm ${
              darkMode 
                ? 'bg-amber-600 text-amber-50 shadow-amber-900/30' 
                : 'bg-amber-700 text-[#FAF7F2] shadow-amber-900/15'
            }`}>
              SA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold tracking-tight text-base sm:text-lg transition-colors ${
                  darkMode ? 'text-[#EDE8E1] group-hover:text-amber-400' : 'text-stone-900 group-hover:text-amber-800'
                }`}>
                  {resumeData.personal.name}
                </span>
                <span className={`hidden sm:inline-flex text-[11px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                  darkMode 
                    ? 'bg-amber-950/40 text-amber-300 border-amber-800/50' 
                    : 'bg-amber-100/70 text-amber-900 border-amber-200/80'
                }`}>
                  Staff Engineer
                </span>
              </div>
              <p className={`text-xs font-mono hidden md:block ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                {resumeData.personal.location}
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
                    ? 'text-stone-300 hover:text-white hover:bg-[#25201C]' 
                    : 'text-stone-700 hover:text-stone-900 hover:bg-[#EFEAE2]'
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
                  ? 'bg-[#1E1B18] text-stone-300 border-[#383129] hover:border-amber-600 hover:bg-[#282420]' 
                  : 'bg-[#F2EDE4] text-stone-800 border-[#E0D8CB] hover:border-amber-600 hover:bg-white'
              }`}
              title="Quick Search (Ctrl/Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">Search</span>
              <kbd className={`hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                darkMode ? 'bg-[#29231D] border-[#3E362D] text-stone-400' : 'bg-[#E7E0D3] border-[#D9D0C1] text-stone-700'
              }`}>
                ⌘K
              </kbd>
            </button>

            {/* Print / Download PDF */}
            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                darkMode 
                  ? 'bg-[#1E1B18] text-stone-300 border-[#383129] hover:border-amber-500 hover:text-white' 
                  : 'bg-[#F2EDE4] text-stone-800 border-[#E0D8CB] hover:border-amber-600 hover:bg-white'
              }`}
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span className="hidden md:inline">Print / PDF</span>
            </button>

            {/* LinkedIn Link */}
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                darkMode 
                  ? 'text-stone-300 border-[#383129] hover:border-amber-500 hover:text-amber-400 hover:bg-[#201C18]' 
                  : 'text-stone-700 border-[#E0D8CB] hover:border-amber-600 hover:text-amber-800 hover:bg-[#EFEAE2]'
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
                  ? 'text-amber-400 border-[#383129] hover:bg-[#25201C] hover:border-amber-400/50' 
                  : 'text-amber-800 border-[#E0D8CB] hover:bg-[#EFEAE2] hover:border-amber-600'
              }`}
              title={darkMode ? "Switch to Warm Paper Mode" : "Switch to Warm Charcoal Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg border transition-all ${
                darkMode 
                  ? 'text-stone-300 border-[#383129] hover:bg-[#201C18]' 
                  : 'text-stone-700 border-[#E0D8CB] hover:bg-[#EFEAE2]'
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
              ? 'bg-[#1C1916]/95 border-[#383129] text-stone-200' 
              : 'bg-[#FAF7F2]/95 border-[#E7E2DA] text-stone-900'
          }`}>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    darkMode ? 'hover:bg-[#2A241F] text-stone-300' : 'hover:bg-[#EFEAE2] text-stone-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#383129]/50 flex items-center justify-between">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-amber-700"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-stone-600"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 text-xs font-medium text-stone-700"
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
