import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BadgePercent, 
  ExternalLink 
} from 'lucide-react';

export default function EducationSection({ darkMode }) {
  return (
    <section id="education" className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
              darkMode 
                ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60' 
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}>
              Academic Foundation
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Degree Card */}
          <div className="lg:col-span-7">
            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-2xl border transition-all ${
                  darkMode 
                    ? 'bg-slate-900/60 border-slate-800' 
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${
                    darkMode ? 'bg-emerald-950/60 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-sm font-semibold text-emerald-400 mt-0.5`}>
                      {edu.institution}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-3 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Leadership & Responsibilities
                  </h4>
                  <div className="space-y-2">
                    {edu.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Tests */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* eLitmus Score Card */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">Standardized Aptitude</span>
                <span className="text-xs font-mono text-slate-400">Mar 2013</span>
              </div>
              <h4 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                eLitmus pH Test
              </h4>
              <div className="flex items-center gap-2 my-2">
                <BadgePercent className="w-5 h-5 text-emerald-400" />
                <span className="text-2xl font-black text-emerald-400">97.25%</span>
                <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Percentile Score</span>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                National engineering evaluation test assessing advanced problem-solving, algorithms, and quantitative logic.
              </p>
            </div>

            {/* Udacity Nanodegree */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">Specialization</span>
                <span className="text-xs font-mono text-slate-400">Mar 2013</span>
              </div>
              <h4 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Machine Learning Basics Nanodegree
              </h4>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'} mb-3`}>
                Udacity India
              </p>
              <a
                href="https://confirm.udacity.com/QCKV7JTU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span>Verify Credential (QCKV7JTU)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
