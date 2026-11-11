/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../../context/AppContext';
import { PAGE_HELP_DATA } from '../../data/pageHelpData';
import {
  X,
  HelpCircle,
  Users,
  Eye,
  MousePointerClick,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface ContextualHelpDrawerProps {
  pageKey: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ContextualHelpDrawer: React.FC<ContextualHelpDrawerProps> = ({
  pageKey,
  isOpen,
  onClose,
}) => {
  const { lang, t } = useApp();

  if (!isOpen) return null;

  const help = PAGE_HELP_DATA[pageKey] || PAGE_HELP_DATA['monitoring_overview'];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-md h-full bg-neutral-100 dark:bg-neutral-900 border-l rtl:border-r rtl:border-l-0 border-neutral-300 dark:border-neutral-800 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slideInRight"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 bg-neutral-900 text-white border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-emerald-400 font-bold block">
                LogBridge // Contextual Guide
              </span>
              <h3 className="text-sm font-bold text-neutral-100">
                {help.title[lang]}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer"
            title={t('بستن راهنما', 'Close Help')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body with 5 Specific Aspects */}
        <div className="p-6 space-y-6 text-xs text-neutral-700 dark:text-neutral-300 overflow-y-auto">
          {/* 1. Purpose */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
            <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 text-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('این صفحه برای چه کاری است؟', 'What is this page for?')}</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              {help.purpose[lang]}
            </p>
          </div>

          {/* 2. Target Users */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
            <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 text-xs">
              <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('چه کسانی از این صفحه استفاده می‌کنند؟', 'Who uses this page?')}</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              {help.targetUsers[lang]}
            </p>
          </div>

          {/* 3. Displayed Information */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
            <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 text-xs">
              <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('چه اطلاعاتی در این صفحه نمایش داده می‌شود؟', 'What information is displayed?')}</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-neutral-600 dark:text-neutral-300">
              {help.displayedInformation[lang].map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* 4. Allowed Actions */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
            <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 text-xs">
              <MousePointerClick className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('کاربر چه اقداماتی می‌تواند انجام دهد؟', 'What actions can be performed?')}</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-neutral-600 dark:text-neutral-300">
              {help.allowedActions[lang].map((act, i) => (
                <li key={i} className="leading-relaxed">{act}</li>
              ))}
            </ul>
          </div>

          {/* 5. Relationship to LogBridge */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
            <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 text-xs">
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('ارتباط این صفحه با کل سامانه LogBridge', 'Relationship to LogBridge system')}</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
              {help.relationshipToLogBridge[lang]}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-200/70 dark:bg-neutral-950 border-t border-neutral-300 dark:border-neutral-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Interactive Operational Guide</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl font-bold text-white bg-neutral-900 dark:bg-emerald-600 hover:bg-neutral-800 dark:hover:bg-emerald-700 transition cursor-pointer"
          >
            {t('متوجه شدم', 'Got it')}
          </button>
        </div>
      </div>
    </div>
  );
};
