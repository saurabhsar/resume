import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import AwardsSection from './components/AwardsSection';
import PublicationsSection from './components/PublicationsSection';
import ArticlesSection from './components/ArticlesSection';
import EducationSection from './components/EducationSection';
import ProjectModal from './components/ProjectModal';
import CommandMenu from './components/CommandMenu';
import Footer from './components/Footer';
import { resumeData } from './data/resumeData';

export default function App() {
  // Default to soft warm paper mode (beige/light warm sand)
  const [darkMode, setDarkMode] = useState(false);
  
  // Expand experiences by default so all projects can be scanned immediately
  const [expandedCompanyIds, setExpandedCompanyIds] = useState(
    resumeData.experiences.map(e => e.id)
  );
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedTechFilter, setSelectedTechFilter] = useState('All');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = "bg-[#141210] text-[#EDE8E1] antialiased selection:bg-amber-900/60 selection:text-amber-100";
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = "bg-[#FAF7F2] text-stone-900 antialiased selection:bg-amber-200 selection:text-stone-900";
    }
  }, [darkMode]);

  const handleSelectProject = (project, company) => {
    setSelectedProject(project);
    setSelectedCompany(company);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setSelectedCompany(null);
  };

  const handleSelectExperience = (expId) => {
    if (!expandedCompanyIds.includes(expId)) {
      setExpandedCompanyIds(prev => [...prev, expId]);
    }
    const el = document.getElementById('experience');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTech = (tech) => {
    setSelectedTechFilter(tech);
    setExpandedCompanyIds(resumeData.experiences.map(e => e.id));
    const el = document.getElementById('experience');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExpandAllExperience = () => {
    setExpandedCompanyIds(resumeData.experiences.map(e => e.id));
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      darkMode ? 'bg-[#141210] text-[#EDE8E1]' : 'bg-[#FAF7F2] text-stone-900'
    }`}>
      
      {/* Navigation Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        onExpandAllExperience={handleExpandAllExperience}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero darkMode={darkMode} />

        {/* Stats & Scale Bar */}
        <StatsBar 
          darkMode={darkMode} 
          onStatClick={(target) => {
            const el = document.querySelector(target);
            el?.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* Interactive Experience Timeline with Expandable Accordions */}
        <ExperienceTimeline
          darkMode={darkMode}
          onSelectProject={handleSelectProject}
          expandedCompanyIds={expandedCompanyIds}
          setExpandedCompanyIds={setExpandedCompanyIds}
          selectedTechFilter={selectedTechFilter}
          setSelectedTechFilter={setSelectedTechFilter}
        />

        {/* Skills Matrix */}
        <SkillsSection 
          darkMode={darkMode} 
          onSelectSkillFilter={handleSelectTech}
        />

        {/* Honors & Awards */}
        <AwardsSection darkMode={darkMode} />

        {/* Peer-Reviewed Publications */}
        <PublicationsSection darkMode={darkMode} />

        {/* Articles & Engineering Philosophy */}
        <ArticlesSection darkMode={darkMode} />

        {/* Education & Certifications */}
        <EducationSection darkMode={darkMode} />

      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Project Deep Dive Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          company={selectedCompany}
          onClose={handleCloseProject}
          darkMode={darkMode}
        />
      )}

      {/* Quick Search Palette (Cmd+K) */}
      <CommandMenu
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        darkMode={darkMode}
        onSelectProject={handleSelectProject}
        onSelectExperience={handleSelectExperience}
        onSelectTech={handleSelectTech}
      />

    </div>
  );
}
