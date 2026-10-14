import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { 
  ChevronDown, 
  ChevronUp, 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight,
  Filter,
  Maximize2,
  Minimize2,
  Search
} from 'lucide-react';

export default function ExperienceTimeline({ 
  darkMode, 
  onSelectProject,
  expandedCompanyIds,
  setExpandedCompanyIds,
  selectedTechFilter,
  setSelectedTechFilter
}) {
  const [searchQuery, setSearchQuery] = useState('');

  // Extract core engineering technologies across all projects for the filter bar
  const allTechnologies = [
    'All',
    'Java',
    'Python',
    'Google Cloud Pub/Sub',
    'Apache Cassandra',
    'Redis',
    'Aerospike',
    'Terraform',
    'Kubernetes (EKS)',
    'PostgreSQL',
    'MySQL',
    'Kafka'
  ];

  // Helper to toggle a single company accordion
  const toggleCompany = (companyId) => {
    setExpandedCompanyIds(prev => 
      prev.includes(companyId) 
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    );
  };

  const handleExpandAll = () => {
    setExpandedCompanyIds(resumeData.experiences.map(e => e.id));
  };

  const handleCollapseAll = () => {
    setExpandedCompanyIds([]);
  };

  // Filter experiences and projects based on tech filter and search query
  const filteredExperiences = resumeData.experiences.map(exp => {
    const matchingProjects = exp.projects.filter(proj => {
      const matchesTech = selectedTechFilter === 'All' || 
        proj.techStack.some(t => t.toLowerCase().includes(selectedTechFilter.toLowerCase()));
      
      const matchesSearch = !searchQuery || 
        proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTech && matchesSearch;
    });

    const matchesExpSearch = !searchQuery ||
      exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return {
      ...exp,
      displayProjects: matchingProjects,
      hasMatches: matchingProjects.length > 0 || (selectedTechFilter === 'All' && matchesExpSearch)
    };
  }).filter(exp => exp.hasMatches);

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                darkMode 
                  ? 'bg-amber-950/40 text-amber-300 border-amber-800/50' 
                  : 'bg-amber-100/70 text-amber-900 border-amber-200/80'
              }`}>
                Career Journey
              </span>
              <span className={`text-xs font-mono ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                Click any role to expand projects
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
            }`}>
              Experience Timeline & Projects
            </h2>
            <p className={`mt-2 text-base ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              Over a decade architecting Tier-1 distributed platforms, FinTech regulatory engines, and event-driven data streaming.
            </p>
          </div>

          {/* Expand/Collapse All Controls */}
          <div className="flex items-center gap-2 no-print self-start md:self-auto">
            <button
              onClick={handleExpandAll}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                darkMode 
                  ? 'bg-[#1E1B18] text-stone-300 border-[#383129] hover:border-amber-500 hover:text-white' 
                  : 'bg-[#F2EDE4] text-stone-800 border-[#E0D8CB] hover:border-amber-700 hover:bg-white'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Expand All Projects</span>
            </button>
            <button
              onClick={handleCollapseAll}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                darkMode 
                  ? 'bg-[#1E1B18] text-stone-400 border-[#383129] hover:border-stone-500 hover:text-stone-200' 
                  : 'bg-[#F2EDE4] text-stone-600 border-[#E0D8CB] hover:border-stone-400 hover:bg-white'
              }`}
            >
              <Minimize2 className="w-3.5 h-3.5 text-stone-500" />
              <span>Collapse All</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className={`p-4 rounded-2xl border mb-10 no-print transition-all ${
          darkMode 
            ? 'bg-[#1A1714] border-[#2E2822]' 
            : 'bg-white border-[#E7E2DA] shadow-xs'
        }`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Tech filter tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className={`text-xs font-mono font-medium mr-1 flex items-center gap-1 ${
                darkMode ? 'text-stone-400' : 'text-stone-600'
              }`}>
                <Filter className="w-3 h-3 text-amber-700 dark:text-amber-400" /> Filter:
              </span>
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => setSelectedTechFilter(tech)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    selectedTechFilter === tech
                      ? darkMode 
                        ? 'bg-amber-600 text-stone-950 font-bold shadow-xs' 
                        : 'bg-amber-800 text-[#FAF7F2] font-semibold shadow-xs'
                      : darkMode 
                        ? 'bg-[#221D18] text-stone-300 hover:bg-[#2A241F] hover:text-white border border-[#352D24]' 
                        : 'bg-[#F2ECE1] text-stone-700 hover:bg-[#EAE2D4] border border-[#E0D8CB]'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Quick search input inside timeline */}
            <div className="relative min-w-[220px]">
              <Search className={`w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 ${
                darkMode ? 'text-stone-400' : 'text-stone-500'
              }`} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full text-xs rounded-xl pl-9 pr-3 py-2 border transition-colors outline-none ${
                  darkMode 
                    ? 'bg-[#141210] border-[#383129] text-stone-200 placeholder-stone-500 focus:border-amber-600' 
                    : 'bg-[#FAF7F2] border-[#E0D8CB] text-stone-800 placeholder-stone-400 focus:border-amber-700'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
                >
                  ×
                </button>
              )}
            </div>

          </div>

          {(selectedTechFilter !== 'All' || searchQuery) && (
            <div className="mt-3 pt-3 border-t border-[#E7E2DA] dark:border-[#2E2822] flex items-center justify-between text-xs">
              <span className={darkMode ? 'text-amber-400' : 'text-amber-800'}>
                Showing results for {selectedTechFilter !== 'All' ? `tech "${selectedTechFilter}"` : ''} 
                {selectedTechFilter !== 'All' && searchQuery ? ' and ' : ''}
                {searchQuery ? `query "${searchQuery}"` : ''}
              </span>
              <button
                onClick={() => {
                  setSelectedTechFilter('All');
                  setSearchQuery('');
                }}
                className="underline hover:no-underline text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#D9D0C1] dark:border-[#332C24] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedCompanyIds.includes(exp.id);
            const projectCount = exp.displayProjects.length;

            // Warm theme styling mapping
            const accentColors = {
              indigo: {
                border: 'hover:border-amber-600/70',
                badgeBg: 'bg-amber-800',
                text: 'text-amber-800 dark:text-amber-400',
              },
              emerald: {
                border: 'hover:border-emerald-700/70',
                badgeBg: 'bg-emerald-800',
                text: 'text-emerald-800 dark:text-emerald-400',
              },
              blue: {
                border: 'hover:border-stone-600/70',
                badgeBg: 'bg-stone-800',
                text: 'text-stone-800 dark:text-stone-300',
              },
              cyan: {
                border: 'hover:border-amber-700/70',
                badgeBg: 'bg-amber-900',
                text: 'text-amber-900 dark:text-amber-400',
              },
            };

            const theme = accentColors[exp.accentColor] || accentColors.indigo;

            return (
              <div 
                key={exp.id} 
                className="relative group print-break-inside-avoid"
              >
                {/* Timeline node icon */}
                <div 
                  className={`absolute -left-[37px] sm:-left-[53px] top-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm text-[#FAF7F2] shadow-md ring-4 transition-transform group-hover:scale-110 ${theme.badgeBg} ${
                    darkMode ? 'ring-[#141210]' : 'ring-[#FAF7F2]'
                  }`}
                >
                  {exp.logoBadge}
                </div>

                {/* Experience Master Card (Accordion Container) */}
                <div 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    darkMode 
                      ? `bg-[#1A1714] border-[#2E2822] ${theme.border} shadow-lg` 
                      : `bg-white border-[#E7E2DA] ${theme.border} shadow-xs`
                  }`}
                >
                  
                  {/* Clickable Accordion Header */}
                  <div 
                    onClick={() => toggleCompany(exp.id)}
                    className="p-6 sm:p-7 cursor-pointer select-none transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      
                      {/* Role & Company */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                            darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
                          }`}>
                            {exp.role}
                          </h3>
                          <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                            darkMode 
                              ? 'bg-[#241F1A] text-stone-300 border-[#383129]' 
                              : 'bg-[#F2ECE1] text-stone-800 border-[#DED4C3]'
                          }`}>
                            {exp.company}
                          </span>
                        </div>
                        <p className={`text-xs font-medium ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                          {exp.companyType}
                        </p>
                      </div>

                      {/* Period, Location & Accordion Trigger Pill */}
                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs">
                        <div className="flex items-center gap-1.5 font-mono font-medium px-2.5 py-1 rounded-md bg-amber-100/70 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className={`flex items-center gap-1 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                          <MapPin className="w-3 h-3 text-amber-700" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                    </div>

                    {/* Summary text */}
                    <p className={`text-sm leading-relaxed mb-4 ${
                      darkMode ? 'text-stone-300' : 'text-stone-700'
                    }`}>
                      {exp.summary}
                    </p>

                    {/* High-level achievements bullets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${theme.text}`} />
                          <span className={darkMode ? 'text-stone-300' : 'text-stone-700'}>
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Accordion Action Strip */}
                    <div className={`pt-4 border-t flex items-center justify-between transition-colors ${
                      darkMode ? 'border-[#2E2822]' : 'border-[#F0EBE2]'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-lg ${
                          darkMode ? 'bg-[#25201B] text-stone-200' : 'bg-[#F2ECE1] text-stone-800'
                        }`}>
                          <Layers className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                          <span>{projectCount} {projectCount === 1 ? 'Project' : 'Projects'}</span>
                        </span>
                        <span className={`text-[11px] hidden sm:inline ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}>
                          {isExpanded ? 'Click to collapse projects' : 'Click to expand all project details'}
                        </span>
                      </div>

                      <div className={`inline-flex items-center gap-1 text-xs font-semibold ${theme.text}`}>
                        <span>{isExpanded ? 'Hide Projects' : 'Show Projects'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Expanded Accordion Body (Project Cards) */}
                  <div 
                    className={`transition-all duration-300 ${
                      isExpanded 
                        ? 'max-h-[5000px] opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                    } print-expand`}
                  >
                    <div className={`p-6 sm:p-7 pt-3 border-t ${
                      darkMode 
                        ? 'bg-[#141210] border-[#2E2822]' 
                        : 'bg-[#FAF7F2] border-[#E7E2DA]'
                    }`}>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                          <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${
                            darkMode ? 'text-stone-300' : 'text-stone-700'
                          }`}>
                            Key Engineering Projects at {exp.company}
                          </h4>
                        </div>
                        <span className={`text-[11px] font-mono ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
                          Architecture & Impact Breakdown
                        </span>
                      </div>

                      {/* Project Cards Grid */}
                      <div className="space-y-6">
                        {exp.displayProjects.map((project) => (
                          <div 
                            key={project.id}
                            className={`p-5 sm:p-6 rounded-xl border transition-all duration-200 group/proj ${
                              darkMode 
                                ? 'bg-[#1C1815] border-[#2E2822] hover:border-amber-600/50 shadow-md' 
                                : 'bg-white border-[#E7E2DA] hover:border-amber-700 shadow-xs'
                            }`}
                          >
                            
                            {/* Project Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                              <div>
                                <h5 className={`text-base sm:text-lg font-bold tracking-tight group-hover/proj:text-amber-800 dark:group-hover/proj:text-amber-300 transition-colors ${
                                  darkMode ? 'text-[#EDE8E1]' : 'text-stone-900'
                                }`}>
                                  {project.name}
                                </h5>
                                <p className={`text-xs font-medium mt-0.5 ${
                                  darkMode ? 'text-amber-300' : 'text-amber-900'
                                }`}>
                                  {project.tagline}
                                </p>
                              </div>
                              <span className={`self-start text-[11px] font-mono px-2 py-0.5 rounded border whitespace-nowrap ${
                                darkMode 
                                  ? 'bg-[#26201B] text-stone-300 border-[#383025]' 
                                  : 'bg-[#F2ECE1] text-stone-800 border-[#DED4C3]'
                              }`}>
                                {project.period}
                              </span>
                            </div>

                            {/* Problem & Architecture Breakdown */}
                            <div className={`p-4 rounded-xl text-xs leading-relaxed mb-4 border ${
                              darkMode 
                                ? 'bg-[#151210] border-[#2E2822] text-stone-300' 
                                : 'bg-[#F7F3EB] border-[#E8E1D5] text-stone-700'
                            }`}>
                              <p className="mb-2">
                                <strong className="text-amber-800 dark:text-amber-400 font-semibold font-mono">Problem: </strong>
                                {project.problem}
                              </p>
                              <p>
                                <strong className="text-emerald-800 dark:text-emerald-400 font-semibold font-mono">Architecture: </strong>
                                {project.architecture}
                              </p>
                            </div>

                            {/* Key Highlights */}
                            <ul className="space-y-1.5 mb-4">
                              {project.keyPoints.map((pt, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 dark:bg-amber-400 mt-1.5 shrink-0" />
                                  <span className={darkMode ? 'text-stone-300' : 'text-stone-700'}>
                                    {pt}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            {/* Scale Badge & Tech Chips Footer */}
                            <div className={`pt-3 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                              darkMode ? 'border-[#2E2822]' : 'border-[#F0EBE2]'
                            }`}>
                              
                              {/* Tech Stack Pills */}
                              <div className="flex flex-wrap items-center gap-1.5">
                                {project.techStack.map(tech => (
                                  <button
                                    key={tech}
                                    onClick={() => setSelectedTechFilter(tech)}
                                    className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                                      selectedTechFilter === tech
                                        ? 'bg-amber-800 text-white font-semibold'
                                        : darkMode 
                                          ? 'bg-[#25201B] text-stone-300 hover:bg-[#302A24] hover:text-white border border-[#3A3228]' 
                                          : 'bg-[#F2ECE1] text-stone-800 hover:bg-[#EAE2D4] border border-[#E0D8CB]'
                                    }`}
                                    title={`Filter by ${tech}`}
                                  >
                                    {tech}
                                  </button>
                                ))}
                              </div>

                              {/* Scale badge & Deep Dive trigger */}
                              <div className="flex items-center gap-2 self-end sm:self-auto">
                                <span className="text-[11px] font-mono font-medium text-amber-900 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 px-2 py-0.5 rounded">
                                  {project.scale}
                                </span>
                                <button
                                  onClick={() => onSelectProject(project, exp)}
                                  className="no-print inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 dark:text-amber-400 hover:underline ml-1"
                                >
                                  <span>Deep Dive</span>
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </button>
                              </div>

                            </div>

                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
