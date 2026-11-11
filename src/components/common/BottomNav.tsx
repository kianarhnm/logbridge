/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, Activity, Briefcase, Languages, Sun, Moon } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const {
    language,
    toggleLanguage,
    theme,
    toggleTheme,
    mainSection,
    setMainSection,
    activeWorkspace,
    setActiveWorkspace,
    t,
  } = useApp();

  const handleSelectExplanation = () => {
    setMainSection('explanation');
  };

  const handleSelectOrganization = () => {
    setMainSection('workspace');
    setActiveWorkspace('organization');
  };

  const handleSelectExpert = () => {
    setMainSection('workspace');
    setActiveWorkspace('expert');
  };

  const isExplanationActive = mainSection === 'explanation';
  const isOrgActive = mainSection === 'workspace' && activeWorkspace === 'organization';
  const isExpertActive = mainSection === 'workspace' && activeWorkspace === 'expert';

  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-0 inset-x-0 z-50 bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-300/80 dark:border-neutral-800 transition-colors shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-3 py-2 flex items-center justify-between gap-1 sm:gap-2">
        {/* Control 1: Project Explanation */}
        <button
          type="button"
          onClick={handleSelectExplanation}
          className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-1.5 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            isExplanationActive
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60'
          }`}
          aria-current={isExplanationActive ? 'page' : undefined}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span className="truncate">
            {t('تحلیل پروژه', 'Project Analysis')}
          </span>
        </button>

        {/* Control 2: Organization Workspace */}
        <button
          type="button"
          onClick={handleSelectOrganization}
          className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-1.5 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            isOrgActive
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60'
          }`}
          aria-current={isOrgActive ? 'page' : undefined}
        >
          <Activity className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span className="truncate">
            {t('کنسول سازمان', 'Org Console')}
          </span>
        </button>

        {/* Control 3: Expert Workspace */}
        <button
          type="button"
          onClick={handleSelectExpert}
          className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-1.5 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            isExpertActive
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60'
          }`}
          aria-current={isExpertActive ? 'page' : undefined}
        >
          <Briefcase className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span className="truncate">
            {t('میزکار متخصصان', 'Expert Network')}
          </span>
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-800 mx-0.5 sm:mx-1" />

        {/* Control 4: Language Switch */}
        <button
          type="button"
          onClick={toggleLanguage}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-1.5 px-2.5 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
          title={t('تغییر زبان به English', 'Switch language to Persian')}
        >
          <Languages className="w-4 h-4 shrink-0 text-emerald-700 dark:text-emerald-400" />
          <span className="font-mono text-[11px] font-bold">
            {language === 'fa' ? 'EN' : 'فا'}
          </span>
        </button>

        {/* Control 5: Theme Switch */}
        <button
          type="button"
          onClick={toggleTheme}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-1.5 px-2.5 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
          title={theme === 'dark' ? t('حالت روشن', 'Light mode') : t('حالت تاریک', 'Dark mode')}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-4 h-4 shrink-0 text-neutral-300" />
              <span className="hidden sm:inline text-[11px]">
                {t('روشن', 'Light')}
              </span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 shrink-0 text-neutral-700" />
              <span className="hidden sm:inline text-[11px]">
                {t('تاریک', 'Dark')}
              </span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
};
