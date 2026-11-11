/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PROBLEM_DEFINITION_DATA } from '../../data/phase1Data';
import { DETAILED_DOCS_COLLECTION } from '../../data/detailedDocsData';
import { DetailedDocumentationItem } from '../../types';
import { DocumentationModal } from '../common/DocumentationModal';
import { TechnicalLogBackdrop } from '../common/TechnicalLogBackdrop';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  FileQuestion,
  Users,
  Compass,
  ExternalLink,
} from 'lucide-react';

export const ProblemDiscovery: React.FC = () => {
  const { language, t } = useApp();
  const [selectedDocItem, setSelectedDocItem] = useState<DetailedDocumentationItem | null>(null);
  const d = PROBLEM_DEFINITION_DATA;

  const handleDifficultyClick = (diffId: string, idx: number) => {
    if (DETAILED_DOCS_COLLECTION[diffId]) {
      setSelectedDocItem(DETAILED_DOCS_COLLECTION[diffId]);
    } else {
      // Fallback generator for other difficulties ensuring 14 criteria
      const diff = d.difficulties[idx];
      const fallbackItem: DetailedDocumentationItem = {
        id: diffId,
        title: diff.title,
        subtitle: { fa: 'چالش عملیاتی احصاشده در تحقیقات کسب‌وکار', en: 'Operational challenge identified during business analysis' },
        badge: { fa: 'تحلیل مسئله • فاز ۱', en: 'Problem Discovery • Phase 1', type: 'validation' },
        definition: diff.desc,
        purpose: {
          fa: 'مبنای استدلال برای نیازمندی‌های محصول و توجیه اقتصادی ارجاع حوادث به متخصصان.',
          en: 'Serves as primary justification for platform requirements and crisis incident routing economics.',
        },
        problemAddressed: diff.desc,
        components: {
          fa: ['فرم گزارش علائم فنی', 'الگوریتم برآورد سطح خسارت (Impact Assessment)', 'تطبیق‌دهنده نیازمندی با کارشناس'],
          en: ['Technical symptom report form', 'Operational impact scoring algorithm', 'Skill-to-symptom matcher'],
        },
        workflow: {
          fa: [
            'بروز قطعی یا خطای غیرمنتظره در سرورهای سازمان',
            'تشخیص ناتوانی تیم داخلی در رفع خطا',
            'ثبت مشخصات حادثه در سامانه با فرم SC-01',
            'پالایش داده‌های حساس و آغاز فرآیند تخصصی',
          ],
          en: [
            'Unexpected infrastructure disruption occurs',
            'Internal team recognizes specialized skill gap',
            'Incident parameters logged via Scenario SC-01',
            'Confidential data masked and specialized workflow initiated',
          ],
        },
        inputs: {
          fa: ['لاگ‌های خطای سیستمی', 'گزارش‌های مانیتورینگ', 'شواهد اولیه بررسی‌شده توسط تیم داخلی'],
          en: ['System crash logs', 'Monitoring alerts', 'Initial troubleshooting observations by internal staff'],
        },
        processing: {
          fa: ['استخراج کلمات کلیدی خطا و دسته‌بندی در یکی از ۸ حوزه تخصصی'],
          en: ['Keyword extraction and taxonomy mapping across software engineering domains'],
        },
        outputs: {
          fa: ['شناسنامه شفاف رخداد با تعیین فوریت و حوزه فنی'],
          en: ['Standardized incident passport with severity and skill requirements'],
        },
        implementationApproach: {
          fa: 'پیاده‌سازی در سناریوی SC-01 در فاز ۱ با ذخیره‌سازی محلی و اعتبارسنجی ورودی‌ها.',
          en: 'Implemented in Phase 1 SC-01 intake form with client-side validation and storage.',
        },
        executionProcess: {
          fa: 'مدیر فنی با تکمیل فرم ساختاریافته، از اتلاف ساعت‌ها زمان در گروه‌های غیررسمی جلوگیری می‌کند.',
          en: 'IT leads avoid hours of unstructured panic by completing standardized technical inputs.',
        },
        relationships: {
          fa: 'تغذیه لایه تریاژ حوادث و آماده‌سازی داده برای ثبت در مخزن.',
          en: 'Feeds the Incident Triage layer and prepares structured records for storage.',
        },
        requirements: {
          fa: ['ثبت دقیق عنوان، مؤلفه آسیب‌دیده و شرح مشاهدات'],
          en: ['Detailed title, impacted system identifier, and symptom description'],
        },
        validation: {
          fa: 'آزمون پذیرش فرم SC-01 و راستی‌آزمایی فیلدهای اجباری در پروتوتایپ.',
          en: 'Validated through intake form boundary checks and LocalStorage persistence in MVP.',
        },
        currentStatus: {
          fa: 'پیاده‌سازی‌شده در فاز ۱ در قالب سناریوی استاندارد SC-01.',
          en: 'Implemented in Phase 1 via standard Scenario SC-01.',
        },
      };
      setSelectedDocItem(fallbackItem);
    }
  };

  const renderBadge = (status: string) => {
    switch (status) {
      case 'hypothesis':
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700">
            {t('فرض اولیه', 'Initial Hypothesis')}
          </span>
        );
      case 'requires_validation':
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700">
            {t('نیازمند اعتبارسنجی', 'Requires Validation')}
          </span>
        );
      case 'proposed':
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
            {t('راه‌حل پیشنهادی', 'Proposed Solution')}
          </span>
        );
      case 'evidence_needed':
        return (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">
            {t('شواهد مورد نیاز', 'Evidence Needed')}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 mb-1">
          <span className="text-emerald-600 dark:text-emerald-400">/analysis/section_02</span>
          <span>·</span>
          <span>problem_discovery</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          {t('کشف و تبیین مسئله (Problem Discovery & Definition)', 'Problem Discovery and Definition')}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {t(
            'واکاوی دقیق چالش‌های سازمان‌های متوسط در زمان بروز حوادث فنی با تفکیک فرضیات از شواهد اثبات‌شده',
            'Detailed analysis of mid-sized enterprise operational pain points during technical incidents, separating hypotheses from verified facts'
          )}
        </p>
      </div>

      {/* Epistemological Banner with Gray Theme */}
      <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950/60 border border-neutral-300/80 dark:border-neutral-800 rounded-xl flex items-start gap-3">
        <FileQuestion className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div className="text-xs text-neutral-800 dark:text-neutral-200 space-y-1">
          <h4 className="font-bold">
            {t('اصل تفکیک فرضیات از شواهد اثبات‌شده (Research Epistemology)', 'Distinction Between Facts & Hypotheses')}
          </h4>
          <p className="leading-relaxed text-neutral-600 dark:text-neutral-300 text-justify">
            {t(
              'در فاز ۱ پروژه، هیچ‌گونه آمار ساختگی بازار یا شواهد تأییدنشده مشتریان به عنوان واقعیت قطعی ارائه نمی‌شود. تمامی گزاره‌ها با برچسب‌های دقیق مشخص شده‌اند تا مرز میان مفروضات ذهنی بنیان‌گذار و نیازمندی‌های اثبات‌شده با تحقیقات میدانی شفاف بماند.',
              'In Phase 1, no fabricated market surveys or unverified customer statistics are presented as proven facts. All assertions are explicitly labeled to distinguish founder hypotheses from empirical validation requirements.'
            )}
          </p>
        </div>
      </div>

      {/* 6 Key Operational Difficulties Grid - Clickable with Gray Surfaces */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              {t('۶ معضل و مانع اساسی سازمان‌ها در مواجهه با حوادث فنی', '6 Core Difficulties Faced by Organizations During Incidents')}
            </h3>
            <p className="text-[11px] text-neutral-500">
              {t('برای مشاهده مستند تفصیلی ۱۴ گانه، روی هر کارت کلیک کنید:', 'Click any card to inspect its comprehensive 14-aspect documentation:')}
            </p>
          </div>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold">
            6 Challenges
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.difficulties.map((diff, idx) => (
            <div
              key={diff.id}
              onClick={() => handleDifficultyClick(diff.id, idx)}
              className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 rounded-2xl p-5 shadow-xs space-y-2 flex flex-col justify-between cursor-pointer group transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-lg bg-neutral-200 dark:bg-neutral-800 font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300 flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {renderBadge(idx % 2 === 0 ? 'requires_validation' : 'hypothesis')}
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition" />
                  </div>
                </div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {diff.title[language]}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify line-clamp-3">
                  {diff.desc[language]}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200/50 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                <span>{t('مشاهده مستند کامل ۱۴ گانه...', 'Inspect 14-aspect doc...')}</span>
                <span className="font-mono text-[10px] text-neutral-400">SPEC</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current vs Undesirable vs Desired Situation with Gray Surfaces */}
      <section className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-5">
        <div className="border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
          <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
            {t('ماتریس تحول وضعیت: از وضع موجود به وضع مطلوب', 'Situational Transformation: Current vs Undesirable vs Desired')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Current State */}
          <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2">
            <span className="text-neutral-500 font-bold block text-[11px] uppercase tracking-wider font-mono">
              {t('۱. وضعیت فعلی (Current Situation)', '1. Current Situation')}
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed text-justify">
              {d.states.current[language]}
            </p>
          </div>

          {/* Undesirable State */}
          <div className="p-4 bg-neutral-200/60 dark:bg-neutral-950/80 rounded-xl border border-neutral-300 dark:border-neutral-800 space-y-2">
            <span className="text-neutral-700 dark:text-neutral-300 font-bold block text-[11px] uppercase tracking-wider font-mono">
              {t('۲. عواقب نامطلوب (Undesirable Consequences)', '2. Undesirable Consequences')}
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed text-justify">
              {d.states.undesirable[language]}
            </p>
          </div>

          {/* Desired State */}
          <div className="p-4 bg-emerald-500/10 dark:bg-emerald-950/30 rounded-xl border border-emerald-500/30 space-y-2">
            <span className="text-emerald-700 dark:text-emerald-400 font-bold block text-[11px] uppercase tracking-wider font-mono">
              {t('۳. وضعیت مطلوب با پلتفرم (Desired Situation)', '3. Desired Situation with Platform')}
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed text-justify">
              {d.states.desired[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Target User Profiles Table */}
      <section className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="border-b border-neutral-200/60 dark:border-neutral-800 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              {t('پروفایل کاربران هدف و ذینفعان کلیدی', 'Target User Profiles & Key Stakeholders')}
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400">B2B Segments</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {d.targetUsers.map((user, idx) => (
            <div
              key={idx}
              className="p-4 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100">
                  {user.role[language]}
                </h4>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  SEGMENT {idx + 1}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                {user.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Measurable Target Improvements */}
      <section className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="border-b border-neutral-200/60 dark:border-neutral-800 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              {t('اهداف فرضی و شاخص‌های سنجش بهبود (Measurable Goals)', 'Measurable Goals & Target Improvement Metrics')}
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">KPIs</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {d.improvements.map((imp, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-1"
            >
              <span className="text-[11px] text-neutral-500 block font-medium">
                {imp.metric[language]}
              </span>
              <div className="font-bold text-emerald-700 dark:text-emerald-400 text-xs">
                {imp.target[language]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 14-Aspect Detailed Documentation Modal */}
      {selectedDocItem && (
        <DocumentationModal
          item={selectedDocItem}
          onClose={() => setSelectedDocItem(null)}
        />
      )}
    </div>
  );
};
