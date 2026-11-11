/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Server,
  Layers,
  Cpu,
  Sliders,
  ShieldAlert,
  Bell,
  Lock,
  UserCheck,
  Search,
  Users,
  CheckCircle2,
  Database,
  ArrowRight,
  ArrowDown,
  Shield,
  Eye,
  Info,
} from 'lucide-react';

interface StageMeta {
  id: string;
  order: number;
  title: { fa: string; en: string };
  category: 'private' | 'redaction' | 'collaboration';
  icon: React.ComponentType<{ className?: string }>;
  description: { fa: string; en: string };
  dataHandled: { fa: string; en: string };
}

export const ConceptualArchitectureDiagram: React.FC = () => {
  const { lang, t } = useApp();
  const [selectedStageId, setSelectedStageId] = useState<string>('ingestion');

  const STAGES: StageMeta[] = [
    {
      id: 'sources',
      order: 1,
      title: { fa: '۱. منابع سازمان (Sources)', en: '1. Org Sources' },
      category: 'private',
      icon: Server,
      description: {
        fa: 'سرورهای لینوکس، کانتینرهای داکر، اپلیکیشن‌ها، سوییچ‌های شبکه، پایگاه‌های داده و حسگرهای فیزیکی.',
        en: 'Linux servers, Docker containers, applications, network switches, databases, and physical sensors.',
      },
      dataHandled: {
        fa: 'لاگ‌های خام متنی، متریک‌های کارایی، پیام‌های استثنا (حاوی اسرار داخلی و IP)',
        en: 'Raw text logs, performance metrics, exception traces (contains internal IPs and secrets)',
      },
    },
    {
      id: 'ingestion',
      order: 2,
      title: { fa: '۲. دریافت لاگ (Ingestion)', en: '2. Log Ingestion' },
      category: 'private',
      icon: Layers,
      description: {
        fa: 'دریافت جریان مداوم تله‌متری با وب‌هوک، Syslog یا ایجنت‌های سبک و نرمال‌سازی با برچسب زمانی یکتا.',
        en: 'Streaming telemetry ingestion via webhooks, Syslog, or shippers with UTC timestamp normalization.',
      },
      dataHandled: {
        fa: 'رکوردهای ساختاریافته JSON با شناسه ردگیری (Trace ID)',
        en: 'Structured JSON records stamped with correlation and trace IDs',
      },
    },
    {
      id: 'classification',
      order: 3,
      title: { fa: '۳. طبقه‌بندی دامنه‌ها', en: '3. Classification' },
      category: 'private',
      icon: Cpu,
      description: {
        fa: 'تفکیک رویدادها به ۵ دامنه تخصصی: نرم‌افزار، زیرساخت، شبکه، دیتابیس و سخت‌افزار سرور.',
        en: 'Decoupling telemetry into 5 domains: Software, Infrastructure, Network, Database, and Hardware.',
      },
      dataHandled: {
        fa: 'برچسب‌های دامنه‌ای مجزا جهت اعمال سطوح دسترسی RBAC برای پرسنل فنی',
        en: 'Domain-scoped tags enforcing isolated RBAC views for technical operators',
      },
    },
    {
      id: 'analysis',
      order: 4,
      title: { fa: '۴. تحلیل رویدادها', en: '4. Event Analysis' },
      category: 'private',
      icon: Search,
      description: {
        fa: 'همبسته‌سازی لاگ‌های مرتبط و میانگین‌گیری در پنجره‌های زمانی لغزان جهت پیشگیری از خطای کاذب.',
        en: 'Event correlation and sliding-window aggregation preventing transient false alarms.',
      },
      dataHandled: {
        fa: 'الگوهای تکرارشونده خطا و شاخص‌های انحراف از عملکرد بهینه',
        en: 'Recurring error clusters and performance baseline deviations',
      },
    },
    {
      id: 'policy',
      order: 5,
      title: { fa: '۵. ارزیابی سیاست‌ها', en: '5. Policy Engine' },
      category: 'private',
      icon: Sliders,
      description: {
        fa: 'تطبیق بلادرنگ شروط با قواعد تعریف‌شده توسط مدیران (مانند CPU > 85% یا خطاهای ۵xx متوالی).',
        en: 'Real-time threshold matching against condition-action rules configured by operators.',
      },
      dataHandled: {
        fa: 'وضعیت اجرای سیاست، افزایش شمارنده ماشه و استخراج اکشن اصلاحی',
        en: 'Rule execution status, trigger counters, and automated action payload',
      },
    },
    {
      id: 'incident',
      order: 6,
      title: { fa: '۶. ثبت رخداد (Incident)', en: '6. Incident Triage' },
      category: 'private',
      icon: ShieldAlert,
      description: {
        fa: 'تولید تیکت رسمی با شناسه یکتا، تعیین درجه خطر، انتساب اپراتور و ترسیم خط زمانی رخداد.',
        en: 'Spawning formal incident tickets with unique ID, severity tier, and audit timeline.',
      },
      dataHandled: {
        fa: 'تیکت تریاژشده شامل شواهد اولیه و اقدامات انجام‌شده داخلی',
        en: 'Triaged incident brief containing initial evidence and internal steps taken',
      },
    },
    {
      id: 'alerts',
      order: 7,
      title: { fa: '۷. هشدار و بررسی اپراتور', en: '7. Alert Review' },
      category: 'private',
      icon: Bell,
      description: {
        fa: 'ارسال آلارم به مرکز هشدارها و بررسی اولیه توسط پرسنل فنی سازمان؛ در صورت عدم توان، درخواست متخصص.',
        en: 'Notification dispatch and internal triage; if internal resolution stalls, expert help is requested.',
      },
      dataHandled: {
        fa: 'گزارش ارزیابی فنی اولیه اپراتور و تصمیم به برون‌سپاری امن',
        en: 'Operator diagnostic evaluation and decision to escalate externally',
      },
    },
    {
      id: 'sanitization',
      order: 8,
      title: { fa: '۸. آماده‌سازی امن پرونده', en: '8. Secure Preparation' },
      category: 'redaction',
      icon: Lock,
      description: {
        fa: 'اسکن لاگ‌ها و علائم خطا، ماسک‌گذاری خودکار IPهای داخلی، توکن‌های احراز هویت و نام سرورها.',
        en: 'Automated token redaction, internal IP pseudonymization, and secret credential stripping.',
      },
      dataHandled: {
        fa: 'نسخه پالایش‌شده (Sanitized Case) مستقل از پایگاه داده اصلی خصوصی',
        en: 'Sanitized Case Brief completely decoupled from private raw organizational logs',
      },
    },
    {
      id: 'approval',
      order: 9,
      title: { fa: '۹. تایید مدیر سازمان', en: '9. Org Approval' },
      category: 'redaction',
      icon: UserCheck,
      description: {
        fa: 'بازبینی پیش‌نمایش دو ستونه توسط مدیر ارشد سازمان؛ تا زمانی که تایید نشود پرونده منتشر نمی‌شود.',
        en: 'Executive side-by-side audit; sharing is blocked until explicit sign-off by Org Admin.',
      },
      dataHandled: {
        fa: 'مجوز حقوقی رسمی و امضای دیجیتال انتشار پرونده در تالار متخصصان',
        en: 'Cryptographic approval token unlocking case visibility for external bidding',
      },
    },
    {
      id: 'matching',
      order: 10,
      title: { fa: '۱۰. تطبیق متخصصان', en: '10. Expert Matching' },
      category: 'collaboration',
      icon: Search,
      description: {
        fa: 'تطبیق هوشمند نیازمندی‌های پرونده با سوابق اعتبارسنجی‌شده متخصصان در بازارگاه مستقل LogBridge.',
        en: 'Algorithmic matching between incident skill requirements and vetted expert profiles.',
      },
      dataHandled: {
        fa: 'پروپوزال‌های پیشنهادی متخصصان شامل نرخ ساعتی و زمان‌بندی اصلاح',
        en: 'Specialist bids specifying hourly rates, scope, and estimated time to resolve',
      },
    },
    {
      id: 'collab',
      order: 11,
      title: { fa: '۱۱. اتاق همکاری مشترک', en: '11. Collaboration Room' },
      category: 'collaboration',
      icon: Users,
      description: {
        fa: 'فضای اشتراکی امن با پیام‌رسانی فنی، بررسی گام‌به‌گام مایلستون‌ها و دسترسی کنترل‌شده و مانیتورشده.',
        en: 'Secure collaborative workspace with technical chat, milestone gates, and auditable access.',
      },
      dataHandled: {
        fa: 'تبادل پچ‌های نرم‌افزاری، اصلاح کانفیگ‌ها و تست در محیط آزمایشی',
        en: 'Exchanging configuration patches, script fixes, and staging verification logs',
      },
    },
    {
      id: 'resolution',
      order: 12,
      title: { fa: '۱۲. حل و ذخیره در پایگاه دانش', en: '12. Resolution Archival' },
      category: 'collaboration',
      icon: CheckCircle2,
      description: {
        fa: 'تایید نهایی راه‌حل توسط کارفرما، خاتمه قرارداد متخصص و ذخیره مستند ریشه‌یابی در پایگاه دانش سازمانی.',
        en: 'Final solution acceptance, specialist payout, and archiving root-cause runbook into knowledge base.',
      },
      dataHandled: {
        fa: 'دارایی دانشی پایدار سازمانی جهت پیشگیری دائمی از تکرار همان مشکل',
        en: 'Permanent operational runbook preventing future recurrences of identical outages',
      },
    },
  ];

  const selectedStage = STAGES.find((s) => s.id === selectedStageId) || STAGES[1];

  return (
    <div className="p-5 sm:p-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm space-y-6">
      {/* Header & Description */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-extrabold text-base sm:text-lg text-[var(--text-primary)]">
              {t('نمودار مفهومی معماری و خط‌لوله عملیاتی LogBridge', 'LogBridge Conceptual Architecture & Operational Pipeline')}
            </h3>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            {t(
              'جریان داده‌ها از منابع سازمان تا مهار نشت، تایید مدیر و حل تخصصی با تفکیک دقیق ۳ مرز امنیتی.',
              'Data flow from organizational sources to secret redaction, executive approval, and expert resolution.'
            )}
          </p>
        </div>

        {/* Legend for the 3 Security Boundaries */}
        <div className="flex items-center gap-3 text-[11px] font-medium flex-wrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-200/80 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[var(--text-primary)]">{t('ناحیه خصوصی سازمان', 'Private Org Perimeter')}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-200/80 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[var(--text-primary)]">{t('مرز پالایش و تایید مدیر', 'Redaction & Sign-off')}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-200/80 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[var(--text-primary)]">{t('شبکه همکار متخصصان', 'Expert Network')}</span>
          </div>
        </div>
      </div>

      {/* Visual Step-by-Step Architecture Pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
        {STAGES.map((stg) => {
          const Icon = stg.icon;
          const isSelected = selectedStageId === stg.id;
          const colorStyles =
            stg.category === 'private'
              ? 'border-blue-500/40 hover:border-blue-500 text-blue-600 dark:text-blue-400'
              : stg.category === 'redaction'
              ? 'border-amber-500/40 hover:border-amber-500 text-amber-600 dark:text-amber-400'
              : 'border-emerald-500/40 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400';

          return (
            <button
              key={stg.id}
              onClick={() => setSelectedStageId(stg.id)}
              className={`p-3 rounded-2xl border text-right rtl:text-right ltr:text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 min-h-[96px] ${
                isSelected
                  ? 'bg-[var(--bg-surface)] ring-2 ring-emerald-500 shadow-md border-transparent'
                  : 'bg-[var(--bg-panel)]/50 hover:bg-[var(--bg-surface)]'
              } ${colorStyles}`}
            >
              <div className="flex items-center justify-between w-full">
                <Icon className="w-5 h-5 shrink-0" />
                <span className="font-mono text-[10px] font-bold opacity-60">#{stg.order}</span>
              </div>
              <div>
                <span className="font-bold text-xs block text-[var(--text-primary)] leading-tight">
                  {stg.title[lang]}
                </span>
                <span className="text-[10px] text-[var(--text-secondary)] font-medium capitalize mt-0.5 block truncate">
                  {stg.category} zone
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Drawer / Inspection Panel */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 animate-fadeIn">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <selectedStage.icon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-[var(--text-primary)]">
                {selectedStage.title[lang]}
              </h4>
              <span className="text-[11px] text-[var(--text-secondary)]">
                {t('مرحله در گردش کار اصلی پلتفرم', 'Sequential Phase in LogBridge Operational Pipeline')}
              </span>
            </div>
          </div>

          <span
            className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase ${
              selectedStage.category === 'private'
                ? 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30'
                : selectedStage.category === 'redaction'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
            }`}
          >
            {selectedStage.category === 'private'
              ? t('ناحیه خصوصی و محرمانه', 'Private Perimeter')
              : selectedStage.category === 'redaction'
              ? t('ناحیه پالایش و کنترل نشت', 'Redaction & Sign-off')
              : t('ناحیه همکاری متخصصان', 'Expert Collaboration')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-[var(--text-primary)] block">
              {t('شرح عملکرد این مؤلفه:', 'Module Responsibility & Flow:')}
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed text-justify">
              {selectedStage.description[lang]}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[var(--text-primary)] block">
              {t('ماهیت داده‌های پردازش‌شده در این مرحله:', 'Data & State Handled:')}
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed text-justify font-mono text-[11px] bg-[var(--bg-card)] p-2.5 rounded-xl border border-[var(--border-subtle)]">
              {selectedStage.dataHandled[lang]}
            </p>
          </div>
        </div>

        {/* Short non-specialist architectural note */}
        <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
          <Info className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>
            {t(
              'نکته ایمنی: داده‌های خام هرگز به صورت مستقیم به اینترنت ارسال نمی‌شوند؛ هرگونه انتشار پرونده نیازمند تایید صریح مدیر ارشد سازمان در گام ۹ است.',
              'Security Invariant: Raw data is never broadcast externally; specialist sharing strictly requires Organization Admin sign-off at Stage 9.'
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
