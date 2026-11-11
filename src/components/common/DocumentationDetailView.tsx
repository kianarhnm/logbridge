/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../../context/AppContext';
import { DocumentationDetailItem } from '../../types';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  FileText,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Sparkles,
  Link2,
} from 'lucide-react';

interface DocumentationDetailViewProps {
  item: DocumentationDetailItem;
  onBack: () => void;
  onSelectRelated?: (itemId: string) => void;
}

export const DocumentationDetailView: React.FC<DocumentationDetailViewProps> = ({
  item,
  onBack,
}) => {
  const { lang, t } = useApp();
  const BackIcon = lang === 'fa' ? ArrowRight : ArrowLeft;

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Navigation & Back Action */}
      <div className="flex items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-neutral-200/80 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-100 transition cursor-pointer"
        >
          <BackIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{t('بازگشت به فهرست مستندات', 'Back to Documentation Index')}</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/60 border border-neutral-300/60 dark:border-neutral-700/60 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-neutral-700 dark:text-neutral-300 text-[11px] font-medium">
              {t('مستند معتبر مهندسی', 'Verified Technical Specification')}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Card with subtle gray hierarchy */}
      <div className="bg-neutral-900 text-white border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4 relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span>LogBridge // Architecture Specification</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-100">
            {item.title[lang]}
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl text-justify">
            {item.introduction[lang]}
          </p>
        </div>
      </div>

      {/* Structured Sections (15-Aspect Engineering Breakdown) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols wide on desktop): Core Content & Process */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Definition & Purpose */}
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold">{t('۱. تعریف دقیق و دلیل وجودی', '1. Definition & Core Purpose')}</h3>
            </div>

            <div className="space-y-3 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              <div>
                <span className="font-bold text-neutral-900 dark:text-neutral-100 block mb-1">
                  {t('چیستی و تعریف فنی:', 'Technical Definition:')}
                </span>
                <p>{item.definition[lang]}</p>
              </div>

              <div>
                <span className="font-bold text-neutral-900 dark:text-neutral-100 block mb-1">
                  {t('چرا به آن نیاز داریم و چه مشکلی را حل می‌کند؟', 'Why is it needed & Problem addressed?')}
                </span>
                <p>{item.whyExists[lang]}</p>
                <p className="mt-1.5 text-neutral-600 dark:text-neutral-400">{item.problemAddressed[lang]}</p>
              </div>
            </div>
          </div>

          {/* Section 2: Step-by-Step Workflow & How it Works */}
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold">{t('۲. نحوه کارکرد و فرآیند گام‌به‌گام', '2. Operational Logic & Step-by-Step Workflow')}</h3>
            </div>

            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              {item.howItWorks[lang]}
            </p>

            <div className="space-y-2 pt-2">
              <span className="font-bold text-xs text-neutral-900 dark:text-neutral-100 block">
                {t('مراحل اجرایی ترتیبی:', 'Sequential Execution Steps:')}
              </span>
              <div className="space-y-2">
                {item.stepByStepProcess[lang].map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-300/40 dark:border-neutral-700/40 flex items-start gap-2.5 text-xs text-neutral-800 dark:text-neutral-200"
                  >
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Realistic Example */}
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
              <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-sm font-bold">{t('۳. سناریو و مثال واقعی پروژه', '3. Realistic Project-Specific Example')}</h3>
            </div>
            <div className="p-4 rounded-xl bg-neutral-200/60 dark:bg-neutral-800/80 border-l-4 border-emerald-500 text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed text-justify">
              {item.realisticExample[lang]}
            </div>
          </div>
        </div>

        {/* Right Column: Components, Inputs/Outputs, Implementation & Relationships */}
        <div className="space-y-6">
          {/* Main Components */}
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-xs font-bold">{t('اجزا و مؤلفه‌های کلیدی', 'Core Components')}</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
              {item.mainComponents[lang].map((comp, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inputs & Outputs */}
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
              <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-xs font-bold">{t('ورودی‌ها و خروجی‌های داده', 'Data Inputs & Outputs')}</h4>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200 block text-[11px] mb-1">
                  {t('داده‌های ورودی:', 'Inputs:')}
                </span>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-0.5">
                  {item.inputs[lang].map((inp, idx) => (
                    <li key={idx}>{inp}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <span className="font-semibold text-neutral-900 dark:text-neutral-200 block text-[11px] mb-1">
                  {t('نتایج و خروجی‌ها:', 'Outputs & Deliverables:')}
                </span>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-0.5">
                  {item.outputs[lang].map((out, idx) => (
                    <li key={idx}>{out}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Temporal Context: Before & After */}
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
              <Link2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-xs font-bold">{t('قبل و بعد در فرآیند سیستم', 'Process Precedence & Successor')}</h4>
            </div>

            <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
              {item.whatHappensBefore && (
                <div className="p-2.5 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/60">
                  <span className="font-bold text-[11px] text-neutral-900 dark:text-neutral-100 block mb-0.5">
                    {t('قبل از این مرحله چه اتفاقی می‌افتد؟', 'What happens before?')}
                  </span>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400">{item.whatHappensBefore[lang]}</p>
                </div>
              )}

              {item.whatHappensAfter && (
                <div className="p-2.5 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/60">
                  <span className="font-bold text-[11px] text-neutral-900 dark:text-neutral-100 block mb-0.5">
                    {t('بعد از این مرحله چه می‌شود؟', 'What happens after?')}
                  </span>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400">{item.whatHappensAfter[lang]}</p>
                </div>
              )}
            </div>
          </div>

          {/* Implementation & Validation */}
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
              <AlertTriangle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-xs font-bold">{t('نحوه پیاده‌سازی و سنجش موفقیت', 'Implementation & Evaluation')}</h4>
            </div>

            <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200 block text-[11px]">
                  {t('روش پیاده‌سازی:', 'Implementation Approach:')}
                </span>
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                  {item.implementationApproach[lang]}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <span className="font-semibold text-neutral-900 dark:text-neutral-200 block text-[11px]">
                  {t('معیار سنجش و ارزیابی:', 'Evaluation & Metrics:')}
                </span>
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                  {item.evaluationMethod[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
