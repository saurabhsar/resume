import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Globe, 
  BookOpen, 
  Check, 
  Copy, 
  ChevronDown, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Server 
} from 'lucide-react';
import { Linkedin, Github } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Hero({ darkMode }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      
      {/* Background ambient warm sunlight glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[120px] rounded-full pointer-events-none -z-10 ${
        darkMode 
          ? 'bg-gradient-to-tr from-amber-950/20 via-stone-900/30 to-amber-900/10' 
          : 'bg-gradient-to-tr from-amber-100/60 via-orange-50/50 to-yellow-100/40'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wide ${
            darkMode 
              ? 'bg-[#1E1B18] text-amber-300 border-[#383129] shadow-sm' 
              : 'bg-[#F4EFE6] text-amber-900 border-[#DFD7C7] shadow-xs'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-semibold">Staff Software Engineer & Platform Architect</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
              darkMode ? 'bg-amber-950/60 text-amber-300' : 'bg-amber-100 text-amber-900'
            }`}>
              Bengaluru, India
            </span>
          </div>
        </div>

        {/* Main Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-8">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
            }`}>
              Hi, I'm <span className="text-amber-800 dark:text-amber-400">{resumeData.personal.name}</span>
            </h1>

            <h2 className={`text-xl sm:text-2xl font-semibold mb-6 flex flex-wrap items-center gap-2 ${
              darkMode ? 'text-stone-300' : 'text-stone-700'
            }`}>
              <span>{resumeData.personal.title}</span>
              <span className="hidden sm:inline text-stone-400">•</span>
              <span className={`text-sm sm:text-base font-normal font-mono px-2.5 py-1 rounded-md border ${
                darkMode 
                  ? 'bg-[#241F1A] text-amber-300 border-[#3D352B]' 
                  : 'bg-[#F2ECE1] text-amber-900 border-[#DED4C3]'
              }`}>
                Distributed Systems & Platform Architecture
              </span>
            </h2>

            {/* Location & Metadata */}
            <div className={`flex flex-wrap items-center gap-4 text-sm mb-6 ${
              darkMode ? 'text-stone-400' : 'text-stone-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>{resumeData.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                <span>500k+ RPS Flash-Sale Scale</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Tier-1 FinTech & E-Commerce Platforms</span>
              </div>
            </div>

            {/* Executive Bio summary */}
            <div className={`text-base sm:text-lg leading-relaxed p-6 rounded-2xl border mb-8 transition-colors ${
              darkMode 
                ? 'bg-[#1A1714] border-[#2E2822] text-stone-300' 
                : 'bg-white border-[#E7E2DA] text-stone-700 shadow-xs'
            }`}>
              <p>
                {resumeData.personal.summary}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm ${
                  darkMode 
                    ? 'bg-amber-600 text-stone-950 hover:bg-amber-500 shadow-amber-900/30 font-semibold' 
                    : 'bg-amber-800 text-[#FAF7F2] hover:bg-amber-900 shadow-amber-950/15'
                }`}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-300" /> : <Mail className="w-4 h-4" />}
                <span>{copiedEmail ? "Copied to Clipboard!" : "Copy Email"}</span>
              </button>

              {/* LinkedIn Button */}
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all ${
                  darkMode 
                    ? 'bg-[#1E1B18] text-stone-200 border-[#383129] hover:border-amber-600 hover:text-amber-400' 
                    : 'bg-white text-stone-700 border-[#E0D8CB] hover:border-amber-600 hover:text-amber-800'
                }`}
              >
                <Linkedin className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>LinkedIn Profile</span>
              </a>

              {/* GitHub Button */}
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all ${
                  darkMode 
                    ? 'bg-[#1E1B18] text-stone-200 border-[#383129] hover:border-stone-500 hover:text-white' 
                    : 'bg-white text-stone-700 border-[#E0D8CB] hover:border-stone-400 hover:text-stone-900'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* Blog Link */}
              <a
                href={resumeData.personal.blog}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all ${
                  darkMode 
                    ? 'bg-[#1E1B18] text-stone-200 border-[#383129] hover:border-amber-500 hover:text-amber-400' 
                    : 'bg-white text-stone-700 border-[#E0D8CB] hover:border-amber-600 hover:text-amber-800'
                }`}
              >
                <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>Technical Blog</span>
              </a>

            </div>

          </div>

          {/* Quick Pillars Sidebar Card */}
          <div className="lg:col-span-4">
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode 
                ? 'bg-[#1A1714] border-[#2E2822] shadow-xl' 
                : 'bg-white border-[#E7E2DA] shadow-xs'
            }`}>
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E7E2DA] dark:border-[#2E2822]">
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-stone-400' : 'text-stone-500'
                }`}>
                  Architectural Pillars
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 font-mono">
                  Production Proven
                </span>
              </div>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    darkMode ? 'bg-[#26201B] text-amber-400' : 'bg-[#F4EFE6] text-amber-800'
                  }`}>
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'}`}>
                      Ultra-Scale Distributed Systems
                    </h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                      500,000+ RPS concurrency, Aerospike, Cassandra, Redis, Java Dropwizard, JVM profiling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    darkMode ? 'bg-[#26201B] text-amber-400' : 'bg-[#F4EFE6] text-amber-800'
                  }`}>
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'}`}>
                      Data Backbones & Streaming
                    </h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                      Event-driven streaming with Google Cloud Pub/Sub, Kafka, PostgreSQL optimizations, and Terraform IaC.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    darkMode ? 'bg-[#1E2620] text-emerald-400' : 'bg-[#EAF2EC] text-emerald-800'
                  }`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'}`}>
                      Mission-Critical Compliance
                    </h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                      Multi-vertical FinTech KYC complying with RBI/IRDAI/SEBI, plus SOX security certification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    darkMode ? 'bg-[#26201B] text-amber-400' : 'bg-[#F4EFE6] text-amber-800'
                  }`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'}`}>
                      Cross-Charter Technical Leadership
                    </h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                      End-to-end architecture across 15+ engineering systems, RFC closures, and high-concurrency order paths.
                    </p>
                  </div>
                </div>

              </div>

              {/* Jump to Timeline Button */}
              <div className="mt-6 pt-4 border-t border-[#E7E2DA] dark:border-[#2E2822]">
                <a
                  href="#experience"
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    darkMode 
                      ? 'bg-[#241F1B] text-stone-200 hover:bg-[#302A24] hover:text-white' 
                      : 'bg-[#F2ECE1] text-stone-800 hover:bg-[#EAE2D4]'
                  }`}
                >
                  <span>Explore Interactive Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
