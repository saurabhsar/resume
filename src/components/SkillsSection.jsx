import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Sparkles, 
  Cpu, 
  Server, 
  Database, 
  Cloud, 
  Code2, 
  Users, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export default function SkillsSection({ darkMode, onSelectSkillFilter }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIcons = {
    'Agentic AI & LLMs': Sparkles,
    'Distributed Systems & Architecture': Server,
    'Databases, Caches & Streaming': Database,
    'Cloud, Infrastructure & DevOps': Cloud,
    'Languages & Frameworks': Code2,
    'Leadership & Strategy': Users,
  };

  const categories = ['All', ...resumeData.skillsCategories.map(c => c.category)];

  const displayedCategories = activeCategory === 'All'
    ? resumeData.skillsCategories
    : resumeData.skillsCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              darkMode 
                ? 'bg-purple-950/60 text-purple-400 border-purple-800/60' 
                : 'bg-purple-50 text-purple-700 border-purple-200'
            }`}>
              Technical Expertise
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Core Competencies & Stack Matrix
          </h2>
          <p className={`mt-2 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Mastery across distributed systems, low-latency caches, deterministic AI loops, and cloud-native infrastructure.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-print">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? darkMode 
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' 
                    : 'bg-purple-600 text-white shadow-md'
                  : darkMode 
                    ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white' 
                    : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((catGroup) => {
            const Icon = categoryIcons[catGroup.category] || Cpu;
            return (
              <div
                key={catGroup.category}
                className={`p-6 rounded-2xl border transition-all duration-300 group ${
                  darkMode 
                    ? 'bg-slate-900/60 border-slate-800/90 hover:border-purple-500/40 hover:bg-slate-900/90 shadow-lg' 
                    : 'bg-white border-slate-200/90 hover:border-purple-400 shadow-md'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl ${
                    darkMode ? 'bg-purple-950/60 text-purple-400' : 'bg-purple-50 text-purple-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {catGroup.category}
                    </h3>
                  </div>
                </div>

                <p className={`text-xs mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {catGroup.description}
                </p>

                {/* Skills list inside category */}
                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className={`p-3 rounded-xl border transition-colors ${
                        darkMode ? 'bg-slate-950/50 border-slate-800/60' : 'bg-slate-50/70 border-slate-200/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                          skill.level === 'Expert'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : skill.level === 'Advanced'
                              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                              : 'bg-slate-700/40 text-slate-300'
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {skill.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              if (onSelectSkillFilter) onSelectSkillFilter(tag);
                            }}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                              darkMode 
                                ? 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700' 
                                : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                            title={`Search projects using ${tag}`}
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
