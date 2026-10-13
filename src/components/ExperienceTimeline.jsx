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

  // Extract all unique technologies across all projects for the filter bar
  const allTechnologies = [
    'All',
    'Java',
    'Python',
    'LLMs',
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
                  ? 'bg-indigo-950/60 text-indigo-400 border-indigo-800/60' 
                  : 'bg-indigo-50 text-indigo-700 border-indigo-200'
              }`}>
                Career Journey
              </span>
              <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Click any role to expand projects
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Experience Timeline & Projects
            </h2>
            <p className={`mt-2 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Over a decade architecting Tier-1 distributed platforms, FinTech regulatory engines, and agentic AI loops.
            </p>
          </div>

          {/* Expand/Collapse All Controls */}
          <div className="flex items-center gap-2 no-print self-start md:self-auto">
            <button
              onClick={handleExpandAll}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                darkMode 
                  ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-indigo-500 hover:text-white' 
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-indigo-400 hover:bg-white'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Expand All Projects</span>
            </button>
            <button
              onClick={handleCollapseAll}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                darkMode 
                  ? 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600 hover:text-white' 
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
              }`}
            >
              <Minimize2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Collapse All</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className={`p-4 rounded-2xl border mb-10 no-print transition-all ${
          darkMode 
            ? 'bg-slate-900/60 border-slate-800' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Tech filter tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className={`text-xs font-mono font-medium mr-1 flex items-center gap-1 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <Filter className="w-3 h-3 text-indigo-400" /> Filter:
              </span>
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => setSelectedTechFilter(tech)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    selectedTechFilter === tech
                      ? darkMode 
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30' 
                        : 'bg-indigo-600 text-white shadow-sm'
                      : darkMode 
                        ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Quick search input inside timeline */}
            <div className="relative min-w-[220px]">
              <Search className={`w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full text-xs rounded-xl pl-9 pr-3 py-2 border transition-colors outline-none ${
                  darkMode 
                    ? 'bg-slate-950/80 border-slate-700 text-slate-200 placeholder-slate-500 focus:border-indigo-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-indigo-600'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ×
                </button>
              )}
            </div>

          </div>

          {(selectedTechFilter !== 'All' || searchQuery) && (
            <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
              <span className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>
                Showing results for {selectedTechFilter !== 'All' ? `tech "${selectedTechFilter}"` : ''} 
                {selectedTechFilter !== 'All' && searchQuery ? ' and ' : ''}
                {searchQuery ? `query "${searchQuery}"` : ''}
              </span>
              <button
                onClick={() => {
                  setSelectedTechFilter('All');
                  setSearchQuery('');
                }}
                className="underline hover:no-underline text-slate-400 hover:text-slate-200"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {filteredExperiences.map((exp, index) => {
            const isExpanded = expandedCompanyIds.includes(exp.id);
            const projectCount = exp.displayProjects.length;

            // Brand accent styling mapping
            const accentColors = {
              indigo: {
                border: 'hover:border-indigo-500/60',
                badgeBg: 'bg-indigo-600',
                ring: 'ring-indigo-500/30',
                glow: 'shadow-indigo-500/10',
                text: 'text-indigo-400',
              },
              emerald: {
                border: 'hover:border-emerald-500/60',
                badgeBg: 'bg-emerald-600',
                ring: 'ring-emerald-500/30',
                glow: 'shadow-emerald-500/10',
                text: 'text-emerald-400',
              },
              blue: {
                border: 'hover:border-blue-500/60',
                badgeBg: 'bg-blue-600',
                ring: 'ring-blue-500/30',
                glow: 'shadow-blue-500/10',
                text: 'text-blue-400',
              },
              cyan: {
                border: 'hover:border-cyan-500/60',
                badgeBg: 'bg-cyan-600',
                ring: 'ring-cyan-500/30',
                glow: 'shadow-cyan-500/10',
                text: 'text-cyan-400',
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
                  className={`absolute -left-[37px] sm:-left-[53px] top-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm text-white shadow-lg ring-4 transition-transform group-hover:scale-110 ${theme.badgeBg} ${
                    darkMode ? 'ring-slate-950' : 'ring-slate-100'
                  }`}
                >
                  {exp.logoBadge}
                </div>

                {/* Experience Master Card (Accordion Container) */}
                <div 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    darkMode 
                      ? `bg-slate-900/70 border-slate-800 ${theme.border} shadow-lg ${theme.glow}` 
                      : `bg-white border-slate-200/90 ${theme.border} shadow-md`
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
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {exp.role}
                          </h3>
                          <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                            darkMode 
                              ? 'bg-slate-800 text-slate-300 border-slate-700' 
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {exp.company}
                          </span>
                        </div>
                        <p className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {exp.companyType}
                        </p>
                      </div>

                      {/* Period, Location & Accordion Trigger Pill */}
                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs">
                        <div className="flex items-center gap-1.5 font-mono font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className={`flex items-center gap-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <MapPin className="w-3 h-3 text-rose-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                    </div>

                    {/* Summary text */}
                    <p className={`text-sm leading-relaxed mb-4 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {exp.summary}
                    </p>

                    {/* High-level achievements bullets */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${theme.text}`} />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Accordion Action Strip */}
                    <div className={`pt-4 border-t flex items-center justify-between transition-colors ${
                      darkMode ? 'border-slate-800' : 'border-slate-100'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-lg ${
                          darkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'
                        }`}>
                          <Layers className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{projectCount} {projectCount === 1 ? 'Project' : 'Projects'}</span>
                        </span>
                        <span className={`text-[11px] hidden sm:inline ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
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
                    <div className={`p-6 sm:p-7 pt-2 border-t ${
                      darkMode 
                        ? 'bg-slate-950/60 border-slate-800/80' 
                        : 'bg-slate-50/80 border-slate-200/80'
                    }`}>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-indigo-400" />
                          <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${
                            darkMode ? 'text-slate-300' : 'text-slate-700'
                          }`}>
                            Key Engineering Projects at {exp.company}
                          </h4>
                        </div>
                        <span className={`text-[11px] font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                          Detailed Architecture & Impact
                        </span>
                      </div>

                      {/* Project Cards Grid */}
                      <div className="space-y-6">
                        {exp.displayProjects.map((project) => (
                          <div 
                            key={project.id}
                            className={`p-5 sm:p-6 rounded-xl border transition-all duration-200 group/proj ${
                              darkMode 
                                ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 shadow-md' 
                                : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'
                            }`}
                          >
                            
                            {/* Project Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                              <div>
                                <h5 className={`text-base sm:text-lg font-bold tracking-tight group-hover/proj:text-indigo-400 transition-colors ${
                                  darkMode ? 'text-white' : 'text-slate-900'
                                }`}>
                                  {project.name}
                                </h5>
                                <p className={`text-xs font-medium mt-0.5 ${
                                  darkMode ? 'text-indigo-300' : 'text-indigo-700'
                                }`}>
                                  {project.tagline}
                                </p>
                              </div>
                              <span className="self-start text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap">
                                {project.period}
                              </span>
                            </div>

                            {/* Problem & Architecture Breakdown */}
                            <div className={`p-3.5 rounded-lg text-xs leading-relaxed mb-4 ${
                              darkMode ? 'bg-slate-950/70 text-slate-300' : 'bg-slate-100/80 text-slate-700'
                            }`}>
                              <p className="mb-2">
                                <strong className="text-rose-400 font-semibold font-mono">Problem: </strong>
                                {project.problem}
                              </p>
                              <p>
                                <strong className="text-emerald-400 font-semibold font-mono">Architecture: </strong>
                                {project.architecture}
                              </p>
                            </div>

                            {/* Key Highlights */}
                            <ul className="space-y-1.5 mb-4">
                              {project.keyPoints.map((pt, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs">
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                                    {pt}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            {/* Scale Badge & Tech Chips Footer */}
                            <div className="pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              
                              {/* Tech Stack Pills */}
                              <div className="flex flex-wrap items-center gap-1.5">
                                {project.techStack.map(tech => (
                                  <button
                                    key={tech}
                                    onClick={() => setSelectedTechFilter(tech)}
                                    className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                                      selectedTechFilter === tech
                                        ? 'bg-indigo-600 text-white font-semibold'
                                        : darkMode 
                                          ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' 
                                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                    title={`Filter by ${tech}`}
                                  >
                                    {tech}
                                  </button>
                                ))}
                              </div>

                              {/* Scale badge & Deep Dive trigger */}
                              <div className="flex items-center gap-2 self-end sm:self-auto">
                                <span className="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                                  {project.scale}
                                </span>
                                <button
                                  onClick={() => onSelectProject(project, exp)}
                                  className="no-print inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 ml-1"
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
