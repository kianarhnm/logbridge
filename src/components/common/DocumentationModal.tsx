/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../../context/AppContext';
import { DetailedDocumentationItem } from '../../types';
import {
  X,
  FileCode,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
  ArrowRight,
  ArrowLeft,
  Cpu,
  Database,
  ShieldCheck,
  Workflow,
  Sparkles,
  GitBranch,
} from 'lucide-react';
import { TechnicalLogBackdrop } from './TechnicalLogBackdrop';

interface Props {
  item: DetailedDocumentationItem | null;
  onClose: () => void;
}

export const DocumentationModal: React.FC<Props> = ({ item, onClose }) => {
  const { language, t } = useApp();

  if (!item) return null;

  const getBadgeStyle = (type?: string) => {
    switch (type) {
      case 'implemented':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
      case 'conceptual':
        return 'bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700';
      case 'validation':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20';
      case 'deferred':
        return 'bg-neutral-200/40 dark:bg-neutral-800/60 text-neutral-500 border-neutral-300/60 dark:border-neutral-700/60';
      default:
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-neutral-950/70 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <TechnicalLogBackdrop variant="hero" className="opacity-20" />

        {/* Modal Top Header */}
        <div className="relative z-10 p-5 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/95 dark:bg-neutral-900/95 flex items-start justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                /doc/spec/{item.id}
              </span>
              {item.badge && (
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold border ${getBadgeStyle(item.badge.type)}`}>
                  {item.badge[language]}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-neutral-50">
              {item.title[language]}
            </h3>
            {item.subtitle && (
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                {item.subtitle[language]}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Structured 14-Point Documentation Body */}
        <div className="relative z-10 p-5 sm:p-6 space-y-6 overflow-y-auto">
          {/* Section A: Core Identity & Purpose */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('۱. ماهیت، هدف و مسئله برطرف‌شده', '1. Concept, Purpose & Problem Addressed')}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
              {/* 1. Definition */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('تعریف دقیق (Definition):', 'Precise Definition:')}
                </strong>
                <p className="text-neutral-700 dark:text-neutral-300 text-justify">
                  {item.definition[language]}
                </p>
              </div>

              {/* 2. Purpose */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('هدف و چرایی در این پروژه (Purpose in Project):', 'Purpose in Project:')}
                </strong>
                <p className="text-neutral-700 dark:text-neutral-300 text-justify">
                  {item.purpose[language]}
                </p>
              </div>

              {/* 3. Problem Addressed */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5 md:col-span-2">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('مسئله و خلأ فنی حل‌شده (Problem Addressed):', 'Problem Solved:')}
                </strong>
                <p className="text-neutral-700 dark:text-neutral-300 text-justify">
                  {item.problemAddressed[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Section B: Components & Operational Workflow */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              <Workflow className="w-4 h-4" />
              <span>{t('۲. اجزاء، جریان کار گام‌به‌گام و نحوه اجرا', '2. Components, Step-by-Step Workflow & Execution')}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
              {/* 4. Components */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('عناصر و مؤلفه‌های تشکیل‌دهنده (Components):', 'Constituent Components:')}
                </strong>
                <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 list-disc list-inside">
                  {item.components[language].map((comp, i) => (
                    <li key={i}>{comp}</li>
                  ))}
                </ul>
              </div>

              {/* 5. Workflow */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('گردش کار گام‌به‌گام (Step-by-Step Workflow):', 'Step-by-Step Operational Workflow:')}
                </strong>
                <ol className="space-y-1.5 text-neutral-700 dark:text-neutral-300 list-decimal list-inside font-medium">
                  {item.workflow[language].map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* 10. Execution Process */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5 md:col-span-2">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('فرآیند اجرای عملی در محیط واقعی (Execution in Practice):', 'Execution Process in Practice:')}
                </strong>
                <p className="text-neutral-700 dark:text-neutral-300 text-justify">
                  {item.executionProcess[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Section C: Data Pipeline (Inputs, Processing, Outputs) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              <Database className="w-4 h-4" />
              <span>{t('۳. ورودی‌ها، پردازش و خروجی‌های داده', '3. Inputs, Processing & Outputs')}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs leading-relaxed">
              {/* 6. Inputs */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('ورودی‌ها (Inputs):', 'Inputs:')}
                </strong>
                <ul className="text-neutral-700 dark:text-neutral-300 space-y-1 list-disc list-inside">
                  {item.inputs[language].map((inp, i) => (
                    <li key={i}>{inp}</li>
                  ))}
                </ul>
              </div>

              {/* 7. Processing */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5">
                <strong className="text-emerald-800 dark:text-emerald-300 block font-bold">
                  {t('پردازش و تبدیل (Processing):', 'Processing Transformation:')}
                </strong>
                <ul className="text-neutral-700 dark:text-neutral-300 space-y-1 list-disc list-inside">
                  {item.processing[language].map((prc, i) => (
                    <li key={i}>{prc}</li>
                  ))}
                </ul>
              </div>

              {/* 8. Outputs */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('خروجی‌ها (Outputs):', 'Produced Outputs:')}
                </strong>
                <ul className="text-neutral-700 dark:text-neutral-300 space-y-1 list-disc list-inside">
                  {item.outputs[language].map((out, i) => (
                    <li key={i}>{out}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section D: Engineering, Relationships, Requirements & Validation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>{t('۴. رویکرد مهندسی، ارتباطات و اعتبارسنجی', '4. Implementation, Relationships & Validation')}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
              {/* 9. Implementation Approach */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('رویکرد پیاده‌سازی نرم‌افزاری (Implementation Approach):', 'Software Implementation Approach:')}
                </strong>
                <p className="text-neutral-700 dark:text-neutral-300 text-justify">
                  {item.implementationApproach[language]}
                </p>
              </div>

              {/* 11. Relationships */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('ارتباط و جریان داده با سایر بخش‌ها (Relationships):', 'Inter-Component Relationships:')}
                </strong>
                <p className="text-neutral-700 dark:text-neutral-300 text-justify">
                  {item.relationships[language]}
                </p>
              </div>

              {/* 12. Requirements */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-1.5">
                <strong className="text-neutral-900 dark:text-neutral-200 block font-bold">
                  {t('پیش‌نیازها و ملزومات کارکرد (Requirements):', 'Operational Prerequisites:')}
                </strong>
                <ul className="text-neutral-700 dark:text-neutral-300 space-y-1 list-disc list-inside">
                  {item.requirements[language].map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* 13. Validation & 14. Status */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2">
                <div>
                  <strong className="text-neutral-900 dark:text-neutral-200 block font-bold mb-0.5">
                    {t('روش اعتبارسنجی و آزمون (Validation):', 'Validation & Verification:')}
                  </strong>
                  <p className="text-neutral-700 dark:text-neutral-300 text-justify">
                    {item.validation[language]}
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-300/50 dark:border-neutral-800">
                  <strong className="text-neutral-900 dark:text-neutral-200 block font-bold mb-0.5">
                    {t('وضعیت جاری در محدوده پروژه (Current Status):', 'Current Status in Scope:')}
                  </strong>
                  <p className="text-emerald-800 dark:text-emerald-400 font-medium">
                    {item.currentStatus[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="relative z-10 p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between">
          <div className="text-[11px] font-mono text-neutral-500">
            {t('مستندات مهندسی پروژه تجارت الکترونیک • فاز ۱', 'E-Commerce Engineering Docs • Phase 1')}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-neutral-900 dark:bg-emerald-600 hover:bg-neutral-800 dark:hover:bg-emerald-700 transition cursor-pointer"
          >
            {t('بستن مستند', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
};
