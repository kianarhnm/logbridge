/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DETAILED_DOCS_COLLECTION } from '../../data/detailedDocsData';
import { DetailedDocumentationItem } from '../../types';
import { DocumentationModal } from '../common/DocumentationModal';
import { TechnicalLogBackdrop } from '../common/TechnicalLogBackdrop';
import {
  Layers,
  CheckCircle2,
  Clock,
  Sparkles,
  GitMerge,
  Target,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const IdeaClassification: React.FC = () => {
  const { language, t } = useApp();
  const [selectedDocItem, setSelectedDocItem] = useState<DetailedDocumentationItem | null>(null);

  const openModelDoc = (modelKey: string) => {
    if (DETAILED_DOCS_COLLECTION[modelKey]) {
      setSelectedDocItem(DETAILED_DOCS_COLLECTION[modelKey]);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 mb-1">
          <span className="text-emerald-600 dark:text-emerald-400">/analysis/section_04</span>
          <span>·</span>
          <span>classification_and_scope</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          {t('طبقه‌بندی ایده و مرزبندی دامنه پروژه (Idea Classification & Scope)', 'Idea Classification and Project Scope')}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {t(
            'تحلیل نوع نوآوری (بنیادی، ترکیبی یا انطباقی) و شفاف‌سازی مرزهای دقیق فاز ۱ در برابر چشم‌انداز فازهای بعد',
            'Analytical classification of the innovation model and explicit demarcation between Phase 1 deliverables and deferred future capabilities'
          )}
        </p>
      </div>

      {/* Classification Matrix: Fundamental vs Combined vs Adaptive with Gray Surfaces */}
      <section className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-4 relative overflow-hidden">
        <TechnicalLogBackdrop variant="card" />

        <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 pb-3 relative z-10">
          <div className="flex items-center gap-2">
            <GitMerge className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              {t('تحلیل نوع نوآوری بر مبنای نظریات مدیریت فناوری', 'Innovation Classification Analysis')}
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            {t('کلیک روی مدل‌ها جهت مستندات', 'Click models for full spec')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs relative z-10">
          {/* Fundamental */}
          <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950 rounded-xl border border-neutral-300/80 dark:border-neutral-800 space-y-2 opacity-80">
            <span className="font-mono text-neutral-400 text-[10px] font-bold">TYPE 01</span>
            <h4 className="font-bold text-neutral-700 dark:text-neutral-300">
              {t('نوآوری بنیادی (Fundamental Innovation)', 'Fundamental Innovation')}
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
              {t(
                'اختراع پروتکل‌ها، الگوریتم‌های رمزنگاری پایه یا معماری‌های سخت‌افزاری کاملاً جدید. ایده ما بنیادی نیست زیرا از پروتکل‌های استاندارد وب و اینترنت بهره می‌برد.',
                'Invention of new cryptographic primitives or foundational hardware architectures. Our project is NOT fundamental as it leverages established Internet and web standards.'
              )}
            </p>
            <span className="text-[10px] text-neutral-500 block font-medium font-mono">
              {t('وضعیت: رد می‌شود (عدم توجیه R&D)', 'Status: Excluded')}
            </span>
          </div>

          {/* Combined (Selected) - Clickable */}
          <div
            onClick={() => openModelDoc('model-combined')}
            className="p-4 bg-neutral-100 dark:bg-neutral-950/70 rounded-xl border-2 border-emerald-500/70 dark:border-emerald-500/60 space-y-2 cursor-pointer group hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">TYPE 02</span>
              <div className="flex items-center gap-1">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-mono font-bold border border-emerald-500/20">
                  {t('مدل منتخب اصلی', 'Selected Model')}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
            <h4 className="font-bold text-neutral-900 dark:text-emerald-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              {t('نوآوری ترکیبی (Combined Innovation)', 'Combined Innovation')}
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              {t(
                'ترکیب هوشمندانه سه مؤلفه تثبیت‌شده: ۱) سیستم‌های ثبت و ردیابی حوادث، ۲) فیلترهای پالایش و پوشش داده‌های حساس، و ۳) پلتفرم‌های دوسویه عرضه و تقاضای خدمات فنی تخصصی.',
                'Synergistic integration of three proven mechanisms: 1) structured incident intake systems, 2) sensitive credential redaction filters, and 3) two-sided technical specialist marketplaces.'
              )}
            </p>
            <div className="pt-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
              {t('مشاهده مستند کامل ۱۴ گانه مدل ترکیبی...', 'View 14-aspect combined model doc...')}
            </div>
          </div>

          {/* Adaptive (Selected) - Clickable */}
          <div
            onClick={() => openModelDoc('model-adaptive')}
            className="p-4 bg-neutral-100 dark:bg-neutral-950/70 rounded-xl border-2 border-emerald-500/70 dark:border-emerald-500/60 space-y-2 cursor-pointer group hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">TYPE 03</span>
              <div className="flex items-center gap-1">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-mono font-bold border border-emerald-500/20">
                  {t('مؤلفه بومی‌سازی', 'Adaptive Context')}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
            <h4 className="font-bold text-neutral-900 dark:text-emerald-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              {t('نوآوری انطباقی (Adaptive Innovation)', 'Adaptive Innovation')}
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              {t(
                'تطبیق الگو با چالش‌های بومی شرکت‌های متوسط، نظیر کمبود متخصصان ارشد لینوکس/دیتابیس، عدم امکان پرداخت‌های دلاری به پلتفرم‌های خارجی و نیاز به ضمانت‌های حقوقی محلی.',
                'Customizing the solution for mid-sized domestic markets facing severe senior DevOps brain-drain, barriers to foreign dollar subscriptions, and domestic contract compliance.'
              )}
            </p>
            <div className="pt-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
              {t('مشاهده مستند کامل ۱۴ گانه مدل انطباقی...', 'View 14-aspect adaptive model doc...')}
            </div>
          </div>
        </div>

        <div className="p-3.5 bg-neutral-200/50 dark:bg-neutral-950 rounded-xl border border-neutral-300/80 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 relative z-10">
          <strong className="text-neutral-900 dark:text-neutral-100">
            {t('استدلال انتخابی: ', 'Core Rationale: ')}
          </strong>
          {t(
            'نوآوری ترکیبی-انطباقی به سامانه امکان می‌دهد بدون متحمل شدن هزینه‌های نجومی R&D بنیادی، بیشترین ارزش را در کوتاه‌ترین زمان به دست کاربران نیازمند برساند.',
            'A combined-adaptive model allows the venture to deliver immediate, high-impact operational value without the prohibitive R&D timelines of foundational inventions.'
          )}
        </div>
      </section>

      {/* Scope Boundaries: Included Now in Phase 1 vs Postponed */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Included Now in Phase 1 */}
        <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-emerald-500/40 dark:border-emerald-500/40 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {t('محدوده مصوب فاز ۱ (اقدامات پیاده‌سازی‌شده اکنون)', 'Phase 1 Scope: Fully Implemented Now')}
              </h3>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono">
                {t('مطابق دقیق با الزامات دانشگاهی فاز اول', 'In strict compliance with university Phase 1 guidelines')}
              </span>
            </div>
          </div>

          <ul className="text-xs text-neutral-700 dark:text-neutral-300 space-y-2 list-disc list-inside leading-relaxed text-justify">
            <li>{t('تحلیل جامع کسب‌وکار و تبیین مسئله، مشتریان هدف و شاخص‌های بهبود', 'Comprehensive business problem discovery, target profiles, and transformation matrices')}</li>
            <li>{t('ارزیابی کامل ۸ پرسش بلوغ ایده با استدلال‌ها و شواهد مورد نیاز', 'In-depth assessment of the 8 idea maturity questions with assumptions and evidence tags')}</li>
            <li>{t('مصورسازی تعاملی و سه‌بعدی گردش کار از رخداد تا رفع و ثبت دانش', 'Interactive 3D/isometric workflow sandbox depicting data confidentiality demarcations')}</li>
            <li>{t('تعیین مرزهای فرآیندهای برخط سامانه در برابر خدمات فیزیکی و انسانی', 'Demarcation of online platform operations versus on-premise physical services')}</li>
            <li>{t('دیاگرام تعاملی معماری اولیه ۷ جزئی همراه با ورودی‌ها، پردازش و خروجی‌ها', 'Interactive 7-component conceptual architecture diagram with detailed responsibilities')}</li>
            <li>{t('پروتوتایپ عملیاتی سناریوی SC-01 (ثبت کامل حادثه فنی همراه با اعتبارسنجی و رکوردهای نمونه)', 'Functional SC-01 MVP scenario (Create Technical Incident with validation and storage)')}</li>
            <li>{t('پایداری اطلاعات در LocalStorage، نوار ناوبری پایدار و پشتیبانی دوزبانه RTL/LTR', 'LocalStorage persistence, persistent bottom navigation, and bilingual RTL/LTR')}</li>
          </ul>
        </div>

        {/* Postponed to Later Phases */}
        <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
            <Clock className="w-5 h-5 text-neutral-500" />
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {t('قابلیت‌های موکول‌شده به فازهای آتی (Planned Future Scope)', 'Intentionally Deferred Future Scope')}
              </h3>
              <span className="text-[11px] text-neutral-500 font-mono">
                {t('متعلق به فازهای ۲، ۳ و ۴ (ادعای پیاده‌سازی اکنون نمی‌شود)', 'Belongs to Phases 2, 3 & 4 (NOT claimed as completed in Phase 1)')}
              </span>
            </div>
          </div>

          <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2 list-disc list-inside leading-relaxed text-justify">
            <li>{t('بازارچه کامل متخصصان و الگوریتم‌های خودکار تطبیق رزومه‌ها (فاز ۳)', 'Full two-sided expert marketplace and automated matching algorithms (Phase 3)')}</li>
            <li>{t('یکپارچگی و اتصال زنده به سیستم‌های مانیتورینگ Zabbix و Prometheus (فاز ۴)', 'Live telemetry probers and real-time Zabbix/Prometheus integrations (Phase 4)')}</li>
            <li>{t('درگاه پرداخت بانکی، تسویه حساب امانی و قراردادهای مالی رسمی (فاز ۳)', 'Real payment gateway integrations, financial escrow clearing, and tax invoicing (Phase 3)')}</li>
            <li>{t('محیط اجرای دستورات ریموت و ایجنت اختصاصی داخل سرور (فاز ۴)', 'On-premise proxy agents and terminal session recorders (Phase 4)')}</li>
            <li>{t('سیستم خودکار تولید خط‌مشی و رفع خودکار بدون دخالت انسان (فاز ۴)', 'Autonomous self-healing policy generation (Phase 4)')}</li>
          </ul>
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
