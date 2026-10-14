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
      
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top First-Principles Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono tracking-wide ${
            darkMode 
              ? 'bg-slate-900/90 text-indigo-300 border-indigo-500/30 shadow-sm shadow-indigo-500/10' 
              : 'bg-indigo-50 text-indigo-800 border-indigo-200 shadow-sm'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">{resumeData.personal.tagline}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
              darkMode ? 'bg-indigo-950 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
            }`}>
              Core Philosophy
            </span>
          </div>
        </div>

        {/* Main Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-8">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">{resumeData.personal.name}</span>
            </h1>

            <h2 className={`text-xl sm:text-2xl font-semibold mb-6 flex flex-wrap items-center gap-2 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <span>{resumeData.personal.title}</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="text-sm sm:text-base font-normal font-mono px-2.5 py-1 rounded-md border text-cyan-400 bg-cyan-950/40 border-cyan-800/40">
                Distributed Systems & Platform Architecture
              </span>
            </h2>

            {/* Location & Metadata */}
            <div className={`flex flex-wrap items-center gap-4 text-sm mb-6 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{resumeData.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server className="w-4 h-4 text-indigo-400" />
                <span>500k+ RPS Flash-Sale Scale</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Tier-1 FinTech & E-Commerce Platforms</span>
              </div>
            </div>

            {/* Executive Bio / First principles summary */}
            <div className={`text-base sm:text-lg leading-relaxed p-5 rounded-2xl border mb-8 ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800/80 text-slate-300' 
                : 'bg-slate-50 border-slate-200/90 text-slate-700'
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
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/30' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/25'
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
                    ? 'bg-slate-900 text-slate-200 border-slate-700 hover:border-blue-500 hover:text-blue-400' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>

              {/* GitHub Button */}
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all ${
                  darkMode 
                    ? 'bg-slate-900 text-slate-200 border-slate-700 hover:border-purple-500 hover:text-purple-400' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-purple-400 hover:text-purple-600'
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
                    ? 'bg-slate-900 text-slate-200 border-slate-700 hover:border-amber-500 hover:text-amber-400' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:text-amber-600'
                }`}
              >
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>Technical Blog</span>
              </a>

            </div>

          </div>

          {/* Quick Pillars Sidebar Card */}
          <div className="lg:col-span-4">
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode 
                ? 'bg-slate-900/70 border-slate-800 shadow-xl shadow-black/40' 
                : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
            }`}>
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/50">
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Architectural Pillars
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Production Proven
                </span>
              </div>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-indigo-950/60 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Ultra-Scale Distributed Systems
                    </h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      500,000+ RPS concurrency, Aerospike, Cassandra, Redis, Java Dropwizard, JVM profiling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-950/60 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Data Backbones & Streaming
                    </h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Event-driven streaming with Google Cloud Pub/Sub, Kafka, PostgreSQL optimizations, and Terraform IaC.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-emerald-950/60 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Mission-Critical Compliance
                    </h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Multi-vertical FinTech KYC complying with RBI/IRDAI/SEBI, plus SOX security certification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-cyan-950/60 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Cross-Charter Technical Leadership
                    </h4>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      End-to-end architecture across 15+ engineering systems, RFC closures, and high-concurrency order paths.
                    </p>
                  </div>
                </div>

              </div>

              {/* Jump to Timeline Button */}
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <a
                  href="#experience"
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    darkMode 
                      ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white' 
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
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
