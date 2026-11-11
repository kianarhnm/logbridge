import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TechnicalCategory, IncidentSeverity, Incident } from '../../types';
import {
  AlertCircle,
  CheckCircle2,
  Send,
  RotateCcw,
  Shield,
  Layers,
  HelpCircle,
} from 'lucide-react';

interface Props {
  onSuccess?: (created: Incident) => void;
}

export function IncidentForm({ onSuccess }: Props) {
  const { t, createIncident, lang } = useApp();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<TechnicalCategory>('database');
  const [severity, setSeverity] = useState<IncidentSeverity>('high');
  const [affectedSystem, setAffectedSystem] = useState('');
  const [description, setDescription] = useState('');
  const [stepsTaken, setStepsTaken] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedIncident, setSubmittedIncident] = useState<Incident | null>(null);

  const categories: { id: TechnicalCategory; fa: string; en: string }[] = [
    { id: 'infrastructure', fa: 'زیرساخت، سرور و لینوکس', en: 'Infrastructure & Linux' },
    { id: 'network', fa: 'شبکه، مسیریابی و فایروال', en: 'Network, Routing & Firewall' },
    { id: 'database', fa: 'پایگاه داده (PostgreSQL, Redis, ...)', en: 'Databases (PostgreSQL, Redis)' },
    { id: 'software', fa: 'نرم‌افزار، بک‌اند و API', en: 'Software, Backend & APIs' },
    { id: 'devops', fa: 'دواپس، کانتینر و CI/CD', en: 'DevOps, Docker & CI/CD' },
    { id: 'cloud', fa: 'سرویس‌ها و زیرساخت ابری', en: 'Cloud Platforms' },
    { id: 'security', fa: 'امنیت، احراز هویت و مجوزها', en: 'Security & Access Control' },
    { id: 'other', fa: 'سایر موارد فنی تخصصی', en: 'Other Technical Domain' },
  ];

  const severities: { id: IncidentSeverity; fa: string; en: string; badge: string; desc: string; descEn: string }[] = [
    {
      id: 'low',
      fa: 'پایین (Low - P4)',
      en: 'Low (P4)',
      badge: 'border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400',
      desc: 'اختلال جزئی بدون تأثیر روی کاربران نهایی',
      descEn: 'Minor glitch with no end-user impact',
    },
    {
      id: 'medium',
      fa: 'متوسط (Medium - P3)',
      en: 'Medium (P3)',
      badge: 'border-blue-400 text-blue-600 dark:text-blue-400',
      desc: 'کاهش کارایی سیستم با وجود راهکار موقت',
      descEn: 'Degraded performance with existing workaround',
    },
    {
      id: 'high',
      fa: 'بالا (High - P2)',
      en: 'High (P2)',
      badge: 'border-amber-400 text-amber-600 dark:text-amber-400',
      desc: 'از کار افتادن بخش مهمی از سامانه عملیاتی',
      descEn: 'Critical service interruption affecting customers',
    },
    {
      id: 'critical',
      fa: 'بحرانی (Critical - P1)',
      en: 'Critical (P1)',
      badge: 'border-red-500 text-red-600 dark:text-red-400',
      desc: 'توقف کامل سرویس اصلی یا نقض امنیتی فعال',
      descEn: 'Total system outage or active security threat',
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!title.trim()) {
      errs.title = t('عنوان رخداد فنی الزامی است.', 'Incident title is required.');
    } else if (title.trim().length < 5) {
      errs.title = t('عنوان باید حداقل ۵ کاراکتر باشد.', 'Title must be at least 5 characters.');
    }

    if (!affectedSystem.trim()) {
      errs.affectedSystem = t('نام سرویس یا مؤلفه متأثر الزامی است.', 'Affected service/system name is required.');
    } else if (affectedSystem.trim().length < 3) {
      errs.affectedSystem = t('نام مؤلفه باید حداقل ۳ کاراکتر باشد.', 'System name must be at least 3 characters.');
    }

    if (!description.trim()) {
      errs.description = t('شرح جزئیات رخداد الزامی است.', 'Incident description is required.');
    } else if (description.trim().length < 15) {
      errs.description = t(
        'شرح رخداد برای امکان تحلیل فنی باید حداقل ۱۵ کاراکتر باشد.',
        'Description must be at least 15 characters to allow technical triage.'
      );
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newInc = createIncident({
      title: title.trim(),
      category,
      severity,
      affectedSystem: affectedSystem.trim(),
      description: description.trim(),
      stepsTaken: stepsTaken.trim() || undefined,
    });

    setSubmittedIncident(newInc);
    if (onSuccess) {
      onSuccess(newInc);
    }
  };

  const handleReset = () => {
    setTitle('');
    setCategory('database');
    setSeverity('high');
    setAffectedSystem('');
    setDescription('');
    setStepsTaken('');
    setErrors({});
    setSubmittedIncident(null);
  };

  const handleCreateAnother = () => {
    handleReset();
  };

  return (
    <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm overflow-hidden">
      {/* Card Header */}
      <div className="p-6 border-b border-neutral-200/60 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400">
              [SC-01]
            </span>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {t('فرم ثبت رخداد فنی عملیاتی', 'Technical Incident Intake Form')}
            </h3>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            {t(
              'سناریوی استاندارد فاز ۱: ساختاردهی به رخداد، تعیین سطح حساسیت و ذخیره‌سازی محلی معتبر.',
              'Phase 1 Standard Scenario: Incident structuring, severity rating, and persistent local storage.'
            )}
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700 shrink-0">
          <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{t('پایگاه داده: LocalStorage ایزوله', 'DB: Isolated LocalStorage')}</span>
        </div>
      </div>

      {/* Success Notification Banner */}
      {submittedIncident && (
        <div className="m-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                {t('رخداد فنی با موفقیت در فاز ۱ ذخیره شد!', 'Incident successfully recorded in Phase 1!')}
              </div>
              <div className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                {t('شماره تیکت یکتا:', 'Generated Ticket Number:')}{' '}
                <span className="font-mono font-bold">{submittedIncident.ticketNumber}</span>
                {' • '}
                {t('اکنون در لیست تیکت‌ها قابل مشاهده است.', 'Now visible in the incident registry.')}
              </div>
            </div>
          </div>
          <button
            onClick={handleCreateAnother}
            className="self-end sm:self-center px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-200 bg-emerald-500/20 hover:bg-emerald-500/30 transition cursor-pointer"
          >
            {t('ثبت رخداد دیگر', 'Log Another Incident')}
          </button>
        </div>
      )}

      {/* The Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Title */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {t('عنوان رخداد فنی', 'Incident Title')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((prev) => ({ ...prev, title: '' }));
            }}
            placeholder={t(
              'مثال: خطای Deadlock در تراکنش‌های پرداخت PostgreSQL',
              'e.g., PostgreSQL Deadlock on payment transaction workers'
            )}
            className={`w-full px-4 py-2.5 rounded-xl text-sm bg-neutral-200/40 dark:bg-neutral-800/80 border transition outline-hidden ${
              errors.title
                ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-neutral-300 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10'
            }`}
          />
          {errors.title && (
            <p className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.title}</span>
            </p>
          )}
        </div>

        {/* Category & Affected System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {t('حوزه و دسته‌بندی فنی', 'Technical Domain & Category')}{' '}
              <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as TechnicalCategory)}
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-neutral-200/40 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10 outline-hidden"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {t(cat.fa, cat.en)}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {t('سرویس یا مؤلفه متأثر', 'Affected Service / Component')}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={affectedSystem}
              onChange={(e) => {
                setAffectedSystem(e.target.value);
                if (errors.affectedSystem)
                  setErrors((prev) => ({ ...prev, affectedSystem: '' }));
              }}
              placeholder={t('مثال: order-db-cluster یا nginx-ingress-02', 'e.g., pg-cluster-primary or auth-service-v2')}
              className={`w-full px-4 py-2.5 rounded-xl text-sm font-mono bg-neutral-200/40 dark:bg-neutral-800/80 border transition outline-hidden ${
                errors.affectedSystem
                  ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-neutral-300 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10'
              }`}
            />
            {errors.affectedSystem && (
              <p className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.affectedSystem}</span>
              </p>
            )}
          </div>
        </div>

        {/* Severity Radio Cards */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {t('سطح فوریت و تأثیر عملیاتی (Severity)', 'Severity & Operational Impact')}{' '}
            <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {severities.map((sev) => {
              const isSelected = severity === sev.id;
              return (
                <div
                  key={sev.id}
                  onClick={() => setSeverity(sev.id)}
                  className={`p-3.5 rounded-xl border text-right transition cursor-pointer ${
                    isSelected
                      ? 'border-emerald-500 dark:border-emerald-400 bg-neutral-200/70 dark:bg-neutral-800 ring-2 ring-emerald-500/20'
                      : 'border-neutral-200 dark:border-neutral-800 bg-neutral-200/40 dark:bg-neutral-800/40 hover:bg-neutral-200/60 dark:hover:bg-neutral-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded border ${sev.badge} bg-neutral-100 dark:bg-neutral-900`}
                    >
                      {t(sev.fa, sev.en)}
                    </span>
                    <input
                      type="radio"
                      name="severity"
                      checked={isSelected}
                      onChange={() => setSeverity(sev.id)}
                      className="accent-emerald-600 cursor-pointer"
                    />
                  </div>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
                    {t(sev.desc, sev.descEn)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              {t('شرح کامل و مشاهدات لاگ فنی', 'Detailed Incident Description & Logs')}{' '}
              <span className="text-red-500">*</span>
            </label>
            <span className="text-[11px] text-neutral-400 font-mono">
              {description.length} {t('کاراکتر', 'chars')}
            </span>
          </div>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              if (errors.description) setErrors((prev) => ({ ...prev, description: '' }));
            }}
            placeholder={t(
              'پیام خطا، رفتار سیستم، زمان شروع و علائم اولیه را شرح دهید...',
              'Detail error messages, behavior, onset time, and key observations...'
            )}
            className={`w-full px-4 py-2.5 rounded-xl text-sm font-mono bg-neutral-50 dark:bg-neutral-800 border transition outline-hidden ${
              errors.description
                ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-neutral-200 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10'
            }`}
          />
          {errors.description && (
            <p className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.description}</span>
            </p>
          )}
        </div>

        {/* Steps Taken (Optional) */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {t('اقدامات و بررسی‌های انجام شده اولیه (اختیاری)', 'Troubleshooting Steps Already Attempted (Optional)')}
          </label>
          <textarea
            rows={2}
            value={stepsTaken}
            onChange={(e) => setStepsTaken(e.target.value)}
            placeholder={t(
              'مثال: ری‌استارت سرویس انجام شد ولی خطا مجدداً رخ داد؛ فضای دیسک بررسی شد و کافی بود.',
              'e.g., Restarted service with no effect; verified disk capacity was normal.'
            )}
            className="w-full px-4 py-2.5 rounded-xl text-sm bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10 outline-hidden"
          />
        </div>

        {/* Phase 1 Explanatory Callout */}
        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <strong className="text-neutral-900 dark:text-neutral-200 font-semibold block mb-0.5">
              {t('رفتار فاز ۱ سامانه در سناریوی SC-01:', 'Phase 1 Behavior for Scenario SC-01:')}
            </strong>
            {t(
              'اطلاعات این فرم با کلیدواژه‌های امنیتی نگهداری شده و بلافاصله به مخزن LocalStorage افزوده می‌شود. قابلیت‌های تکمیلی مانند تطبیق خودکار با کارشناس خارجی یا درگاه پرداخت کارشناسی در فازهای بعدی فعال خواهند شد.',
              'This record is preserved with sanitized metadata in the local registry. Subsequent matching against external expert profiles and escrow milestone payment will be enabled in future project phases.'
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('پاک‌سازی فرم', 'Clear Form')}</span>
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-md shadow-emerald-600/20 transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{t('ثبت رسمی رخداد فنی (SC-01)', 'Submit Technical Incident (SC-01)')}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
