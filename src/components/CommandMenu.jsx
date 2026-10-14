import React, { useState, useEffect, useRef } from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Search, 
  X, 
  Briefcase, 
  Layers, 
  Sparkles, 
  Trophy, 
  FileText, 
  ArrowRight,
  Command
} from 'lucide-react';

export default function CommandMenu({ 
  isOpen, 
  onClose, 
  darkMode, 
  onSelectProject,
  onSelectExperience,
  onSelectTech
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build searchable index
  const results = [];
  const q = query.trim().toLowerCase();

  if (q.length > 0) {
    // 1. Search Projects
    resumeData.experiences.forEach(exp => {
      exp.projects.forEach(proj => {
        const matchName = proj.name.toLowerCase().includes(q);
        const matchTag = proj.tagline.toLowerCase().includes(q);
        const matchTech = proj.techStack.some(t => t.toLowerCase().includes(q));
        if (matchName || matchTag || matchTech) {
          results.push({
            type: 'Project',
            title: proj.name,
            subtitle: `${exp.company} • ${proj.tagline}`,
            badge: exp.company,
            icon: Layers,
            action: () => {
              onSelectProject(proj, exp);
              onClose();
            }
          });
        }
      });
    });

    // 2. Search Experiences
    resumeData.experiences.forEach(exp => {
      if (exp.company.toLowerCase().includes(q) || exp.role.toLowerCase().includes(q)) {
        results.push({
          type: 'Role',
          title: `${exp.role} at ${exp.company}`,
          subtitle: exp.summary,
          badge: exp.period,
          icon: Briefcase,
          action: () => {
            onSelectExperience(exp.id);
            onClose();
          }
        });
      }
    });

    // 3. Search Skills
    resumeData.skillsCategories.forEach(cat => {
      cat.skills.forEach(skill => {
        if (skill.name.toLowerCase().includes(q) || skill.tags.some(t => t.toLowerCase().includes(q))) {
          results.push({
            type: 'Skill',
            title: skill.name,
            subtitle: `${cat.category} • ${skill.tags.join(', ')}`,
            badge: skill.level,
            icon: Sparkles,
            action: () => {
              onSelectTech(skill.name);
              onClose();
            }
          });
        }
      });
    });

    // 4. Search Awards
    resumeData.awards.forEach(aw => {
      if (aw.title.toLowerCase().includes(q) || aw.organization.toLowerCase().includes(q)) {
        results.push({
          type: 'Award',
          title: aw.title,
          subtitle: `${aw.organization} (${aw.date})`,
          badge: 'Award',
          icon: Trophy,
          action: () => {
            const el = document.getElementById('awards');
            el?.scrollIntoView({ behavior: 'smooth' });
            onClose();
          }
        });
      }
    });

    // 5. Search Publications
    resumeData.publications.forEach(pub => {
      if (pub.title.toLowerCase().includes(q) || pub.journal.toLowerCase().includes(q)) {
        results.push({
          type: 'Publication',
          title: pub.title,
          subtitle: pub.journal,
          badge: 'Research',
          icon: FileText,
          action: () => {
            const el = document.getElementById('publications');
            el?.scrollIntoView({ behavior: 'smooth' });
            onClose();
          }
        });
      }
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 no-print">
      
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#141210]/75 backdrop-blur-md" 
      />

      {/* Palette Modal */}
      <div 
        className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden z-10 transition-all ${
          darkMode 
            ? 'bg-[#1A1714] border-[#383129] text-[#EDE8E1]' 
            : 'bg-white border-[#E7E2DA] text-stone-900 shadow-xl'
        }`}
      >
        
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E7E2DA] dark:border-[#2E2822]">
          <Search className="w-5 h-5 text-amber-700 dark:text-amber-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type to search projects, tech stack, roles, awards..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base outline-none placeholder-stone-400"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {query.trim().length === 0 ? (
            <div className="py-12 text-center text-xs text-stone-500">
              <Command className="w-8 h-8 mx-auto mb-2 text-stone-400" />
              <p>Type keywords like "Cassandra", "KYC", "PubSub", "Flipkart", "500k"</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-xs text-stone-500">
              No results found matching "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              {results.slice(0, 10).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={item.action}
                    className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      darkMode 
                        ? 'hover:bg-[#25201B]' 
                        : 'hover:bg-[#F7F3EB]'
                    }`}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className={`p-2 rounded-lg shrink-0 ${
                        darkMode ? 'bg-[#25201B] text-amber-400' : 'bg-[#F2ECE1] text-amber-800'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold truncate">{item.title}</h4>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#EAE4D8] dark:bg-[#25201B] text-stone-700 dark:text-stone-400 shrink-0">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 truncate mt-0.5">{item.subtitle}</p>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-stone-400 shrink-0 ml-2" />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className={`px-4 py-2 text-[11px] font-mono border-t flex items-center justify-between ${
          darkMode ? 'bg-[#141210] border-[#2E2822] text-stone-500' : 'bg-[#FAF7F2] border-[#E7E2DA] text-stone-500'
        }`}>
          <span>Quick Navigator</span>
          <span>Esc to close</span>
        </div>

      </div>
    </div>
  );
}
