/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PROJECT_INTRO_DATA } from '../../data/phase1Data';
import { DETAILED_DOCS_COLLECTION } from '../../data/detailedDocsData';
import { DetailedDocumentationItem } from '../../types';
import { WorkflowVisualization } from './WorkflowVisualization';
import { DocumentationModal } from '../common/DocumentationModal';
import { TechnicalLogBackdrop } from '../common/TechnicalLogBackdrop';
import {
  ShieldCheck,
  Target,
  Sparkles,
  Layers,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

export const ProjectIntroduction: React.FC = () => {
  const { language, t } = useApp();
  const [activeDocItem, setActiveDocItem] = useState<DetailedDocumentationItem | null>(null);
  const d = PROJECT_INTRO_DATA;

  // Fallback / dynamic generator for introduction pillar cards
  const openPillarDoc = (key: string, titleFa: string, titleEn: string, contentFa: string, contentEn: string) => {
    // If predefined in collection, use it; otherwise create on-demand 14-aspect model
    if (DETAILED_DOCS_COLLECTION[key]) {
      setActiveDocItem(DETAILED_DOCS_COLLECTION[key]);
      return;
    }

    const item: DetailedDocumentationItem = {
      id: key,
      title: { fa: titleFa, en: titleEn },
      subtitle: { fa: 'مستند تفصیلی مؤلفه هویتی سامانه', en: 'Core project identity conceptual documentation' },
      badge: { fa: 'مبانی معماری فاز ۱', en: 'Phase 1 Foundation', type: 'implemented' },
      definition: { fa: contentFa, en: contentEn },
      purpose: {
        fa: 'تبیین صریح مرزهای عملکردی پلتفرم و جلوگیری از ابهام در نیازمندی‌های مشتریان و ارزیابان.',
        en: 'Defines explicit operational boundaries, preventing ambiguity for users and evaluators.',
      },
      problemAddressed: {
        fa: 'سردرگمی سازمان‌ها میان ابزارهای عمومی مدیریت وظایف (مانند Jira) و نیاز به متخصص بی‌درنگ در بحران‌های فنی.',
        en: 'Confusion between general project management tools and on-demand crisis technical intervention.',
      },
      components: {
        fa: ['لایه تریاژ حوادث', 'دروازه پالایش داده‌های حساس', 'شبکه متخصصان ارزیابی‌شده'],
        en: ['Incident triage layer', 'Sanitization gateway', 'Pre-vetted expert network'],
      },
      workflow: {
        fa: [
          'بروز حادثه یا اختلال در سیستم',
          'ثبت ساختاریافته در سامانه',
          'پالایش محرمانگی داده‌ها',
          'اتصال هدفمند به کارشناس متخصص',
        ],
        en: [
          'Outage detection in infrastructure',
          'Structured intake in platform',
          'Client-side secret redaction',
          'Targeted expert matchmaking',
        ],
      },
      inputs: {
        fa: ['لاگ‌های خطای سیستمی', 'اطلاعات معماری سرویس آسیب‌دیده'],
        en: ['Diagnostic system error logs', 'Impacted architecture component metadata'],
      },
      processing: {
        fa: ['تحلیل سطح فوریت و رده‌بندی حوزه فنی', 'اعمال خط‌مشی‌های حریم خصوصی'],
        en: ['Severity classification and technical domain tagging', 'Enforcement of privacy policies'],
      },
      outputs: {
        fa: ['شناسنامه امن و پالایش‌شده حادثه فنی آماده برای تحلیل کارشناسی'],
        en: ['Sanitized incident passport ready for external specialist triage'],
      },
      implementationApproach: {
        fa: 'پیاده‌سازی بر مبنای معماری ماژولار React با جریان داده یک‌طرفه و پایداری در LocalStorage در فاز ۱.',
        en: 'Engineered on modular React components with unidirectional data flow and LocalStorage persistence in Phase 1.',
      },
      executionProcess: {
        fa: 'در محیط عملیاتی بدون نیاز به زیرساخت پیچیده سمت سرور در مرورگر کلاینت اجرا می‌شود.',
        en: 'Operates directly in the browser environment with zero external server dependencies in Phase 1.',
      },
      relationships: {
        fa: 'پایه مفهومی سناریوی SC-01 در محیط عملیاتی MVP.',
        en: 'Forms the conceptual basis for Scenario SC-01 in the MVP Workspace.',
      },
      requirements: {
        fa: ['دسترسی مرورگر به پلتفرم', 'پشتیبانی از جاوااسکریپت مدرن'],
        en: ['Standard web browser access', 'Modern JavaScript execution support'],
      },
      validation: {
        fa: 'ارزیابی تطابق با مستندات مرجع پروژه دانشگاهی تجارت الکترونیک.',
        en: 'Validated against university e-commerce project reference requirements.',
      },
      currentStatus: {
        fa: 'پیاده‌سازی‌شده در فاز ۱ به صورت مستندات تعاملی.',
        en: 'Implemented in Phase 1 as an interactive documentation workspace.',
      },
    };
    setActiveDocItem(item);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Card with subtle light gray surfaces and log background */}
      <section className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <TechnicalLogBackdrop variant="hero" />

        <div className="relative z-10 max-w-3xl space-y-4">
          {/* Subtle minimal metadata instead of dominating pill */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
            <span className="text-emerald-600 dark:text-emerald-400">/sys/spec/introduction.md</span>
            <span>·</span>
            <span>scope: phase_1_foundation</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight leading-snug">
            {d.name[language]}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
            {d.tagline[language]}
          </p>

          {/* Value Proposition Card with gray tone */}
          <div className="p-4 sm:p-5 bg-neutral-200/50 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                {t('ارزش پیشنهادی محوری (Value Proposition)', 'Core Value Proposition')}
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                {t('کلیک روی کارت‌ها برای مستندات جامع', 'Click cards for full specs')}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium text-justify">
              {d.valueProposition[language]}
            </p>
          </div>
        </div>
      </section>

      {/* 3D / Isometric Animated Visualizer Embedded */}
      <section>
        <WorkflowVisualization />
      </section>

      {/* 4 Pillars Breakdown - Interactive Clickable Cards with Gray Surfaces */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: What it is & Target Users */}
        <div
          onClick={() =>
            openPillarDoc(
              'pillar-what-it-is',
              'چیستی سامانه و کاربران هدف',
              'What It Is & Target Users',
              d.whatItIs.fa,
              d.whatItIs.en
            )
          }
          className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 rounded-2xl p-5 shadow-xs space-y-3 cursor-pointer group transition-all"
        >
          <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-neutral-200/60 dark:bg-neutral-800 text-emerald-700 dark:text-emerald-400 rounded-lg">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {t('چیستی سامانه و کاربران هدف', 'What It Is & Target Users')}
              </h3>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition" />
          </div>
          <div className="space-y-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 text-justify">
            <div>
              <strong className="text-neutral-900 dark:text-neutral-100 block mb-0.5">
                {t('تعریف پلتفرم:', 'Platform Definition:')}
              </strong>
              {d.whatItIs[language]}
            </div>
            <div>
              <strong className="text-neutral-900 dark:text-neutral-100 block mb-0.5">
                {t('کاربران هدف اصلی:', 'Intended Target Users:')}
              </strong>
              {d.intendedUsers[language]}
            </div>
          </div>
          <div className="pt-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium flex items-center justify-between">
            <span>{t('مشاهده مستند ۱۴ گانه جزئیات...', 'View 14-aspect documentation...')}</span>
            <span className="font-mono text-[10px] text-neutral-400">DOC-01</span>
          </div>
        </div>

        {/* Card 2: Problems Addressed */}
        <div
          onClick={() =>
            openPillarDoc(
              'diff-1',
              'مسائلی که این پلتفرم حل می‌کند',
              'Problems the Platform Addresses',
              d.problemItAddresses.fa,
              d.problemItAddresses.en
            )
          }
          className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 rounded-2xl p-5 shadow-xs space-y-3 cursor-pointer group transition-all"
        >
          <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg">
                <AlertCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {t('مسائلی که این پلتفرم حل می‌کند', 'Problems the Platform Addresses')}
              </h3>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition" />
          </div>
          <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 text-justify">
            {d.problemItAddresses[language]}
          </p>
          <div className="pt-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium flex items-center justify-between">
            <span>{t('مشاهده تحلیل ریشه‌ای و مستندات...', 'View root-cause analysis docs...')}</span>
            <span className="font-mono text-[10px] text-neutral-400">DOC-02</span>
          </div>
        </div>

        {/* Card 3: What It Does vs Does NOT Replace */}
        <div
          onClick={() =>
            openPillarDoc(
              'pillar-boundaries',
              'کارکرد سامانه و مرزبندی آن',
              'Platform Responsibilities & Boundaries',
              d.whatItDoes.fa,
              d.whatItDoes.en
            )
          }
          className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 rounded-2xl p-5 shadow-xs space-y-3 cursor-pointer group transition-all"
        >
          <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-neutral-200/60 dark:bg-neutral-800 text-emerald-700 dark:text-emerald-400 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {t('کارکرد سامانه و مرزبندی آن', 'What It Does & What It Does NOT Replace')}
              </h3>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition" />
          </div>
          <div className="space-y-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 text-justify">
            <div>
              <strong className="text-neutral-900 dark:text-neutral-100 block mb-0.5">
                {t('اقدامات سامانه:', 'Platform Responsibilities:')}
              </strong>
              {d.whatItDoes[language]}
            </div>
            <div className="p-2.5 bg-neutral-200/50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <strong className="text-neutral-700 dark:text-neutral-300 block mb-0.5">
                {t('این سامانه جایگزین چه مواردی نیست؟', 'What It Does NOT Replace:')}
              </strong>
              {d.whatItDoesNotReplace[language]}
            </div>
          </div>
          <div className="pt-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium flex items-center justify-between">
            <span>{t('مشاهده مستند مرزهای عملکردی...', 'View boundary specifications...')}</span>
            <span className="font-mono text-[10px] text-neutral-400">DOC-03</span>
          </div>
        </div>

        {/* Card 4: Long-Term Vision vs Phase 1 Scope */}
        <div
          onClick={() =>
            openPillarDoc(
              'pillar-vision-vs-phase1',
              'چشم‌انداز آینده در برابر محدوده فاز ۱',
              'Long-Term Vision vs Phase 1 Scope',
              d.visionVsPhase1.fa,
              d.visionVsPhase1.en
            )
          }
          className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 rounded-2xl p-5 shadow-xs space-y-3 cursor-pointer group transition-all"
        >
          <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg">
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {t('چشم‌انداز آینده در برابر محدوده فاز ۱', 'Long-Term Vision vs Phase 1 Scope')}
              </h3>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition" />
          </div>
          <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 text-justify">
            {d.visionVsPhase1[language]}
          </p>
          <div className="pt-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium flex items-center justify-between">
            <span>{t('مشاهده تفکیک محدوده فاز ۱...', 'View Phase 1 scope breakdown...')}</span>
            <span className="font-mono text-[10px] text-neutral-400">DOC-04</span>
          </div>
        </div>
      </section>

      {/* 14-Aspect Detailed Documentation Modal */}
      {activeDocItem && (
        <DocumentationModal
          item={activeDocItem}
          onClose={() => setActiveDocItem(null)}
        />
      )}
    </div>
  );
};
