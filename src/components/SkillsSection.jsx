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
    'Distributed Systems & Core Scale': Server,
    'Data Stores, Caching & Streaming': Database,
    'Platform Engineering & Compliance': Check,
    'Cloud, Infrastructure & SRE': Cloud,
    'Languages & Frameworks': Code2,
    'Technical Leadership & System Design': Users,
  };

  const categories = ['All', ...resumeData.skillsCategories.map(c => c.category)];

  const displayedCategories = activeCategory === 'All'
    ? resumeData.skillsCategories
    : resumeData.skillsCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative border-t border-[#E7E2DA] dark:border-[#2E2822]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              darkMode 
                ? 'bg-amber-950/40 text-amber-300 border-amber-800/50' 
                : 'bg-amber-100/70 text-amber-900 border-amber-200/80'
            }`}>
              Technical Expertise
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
          }`}>
            Core Competencies & Stack Matrix
          </h2>
          <p className={`mt-2 text-base ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
            Mastery across distributed systems, low-latency caches, transactional consistency, and cloud-native infrastructure.
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
                    ? 'bg-amber-600 text-stone-950 font-bold shadow-xs' 
                    : 'bg-amber-800 text-[#FAF7F2] font-semibold shadow-xs'
                  : darkMode 
                    ? 'bg-[#1E1B18] text-stone-300 border border-[#383129] hover:border-amber-600 hover:text-white' 
                    : 'bg-[#F2ECE1] text-stone-700 border border-[#E0D8CB] hover:bg-[#EAE2D4]'
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
                    ? 'bg-[#1A1714] border-[#2E2822] hover:border-amber-600/50 shadow-md' 
                    : 'bg-white border-[#E7E2DA] hover:border-amber-700 shadow-xs'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl ${
                    darkMode ? 'bg-[#25201B] text-amber-400' : 'bg-[#F4EFE6] text-amber-800'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold tracking-tight ${
                      darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
                    }`}>
                      {catGroup.category}
                    </h3>
                  </div>
                </div>

                <p className={`text-xs mb-5 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                  {catGroup.description}
                </p>

                {/* Skills list inside category */}
                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className={`p-3.5 rounded-xl border transition-colors ${
                        darkMode ? 'bg-[#151210] border-[#2E2822]' : 'bg-[#FAF7F2] border-[#E8E1D5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-xs font-semibold ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                          skill.level === 'Expert'
                            ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40'
                            : 'bg-[#EAE4D8] dark:bg-[#25201B] text-stone-800 dark:text-stone-300 border border-[#D9D0C1] dark:border-[#3B332A]'
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
                                ? 'bg-[#201C18] text-stone-300 hover:text-white hover:bg-[#2C2620] border border-[#332C24]' 
                                : 'bg-white text-stone-700 border border-[#E0D8CB] hover:border-amber-600 hover:text-amber-900'
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
