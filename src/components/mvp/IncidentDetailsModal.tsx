import React from 'react';
import { Incident, TechnicalCategory } from '../../types';
import { useApp } from '../../context/AppContext';
import {
  X,
  AlertTriangle,
  Server,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileText,
  Activity,
  Tag,
  Copy,
  Check,
} from 'lucide-react';

interface Props {
  incident: Incident | null;
  onClose: () => void;
  onRequestSpecialist?: (incident: Incident) => void;
}

export function IncidentDetailsModal({ incident, onClose, onRequestSpecialist }: Props) {
  const { t } = useApp();
  const [copied, setCopied] = React.useState(false);

  if (!incident) return null;

  const getSeverityBadge = (sev: Incident['severity']) => {
    switch (sev) {
      case 'critical':
        return {
          bg: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
          label: t('بحرانی (Critical P1)', 'Critical (P1)'),
        };
      case 'high':
        return {
          bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
          label: t('بالا (High P2)', 'High (P2)'),
        };
      case 'medium':
        return {
          bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
          label: t('متوسط (Medium P3)', 'Medium (P3)'),
        };
      case 'low':
      default:
        return {
          bg: 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20',
          label: t('پایین (Low P4)', 'Low (P4)'),
        };
    }
  };

  const getCategoryLabel = (cat: Incident['category']) => {
    const map: Record<TechnicalCategory, { fa: string; en: string }> = {
      infrastructure: { fa: 'زیرساخت و سرور', en: 'Infrastructure' },
      linux: { fa: 'کرنل و سیستم‌عامل لینوکس', en: 'Linux Kernel & OS' },
      network: { fa: 'شبکه و فایروال', en: 'Network' },
      database: { fa: 'پایگاه داده', en: 'Database' },
      backend: { fa: 'سرویس‌های بک‌اند', en: 'Backend Services' },
      frontend: { fa: 'فرانت‌اند و وب', en: 'Frontend & Web' },
      software: { fa: 'نرم‌افزار و وب‌سرویس', en: 'Software' },
      apis: { fa: 'درگاه‌ها و وب‌سرویس‌ها', en: 'APIs & Gateways' },
      devops: { fa: 'دواپس و CI/CD', en: 'DevOps & CI/CD' },
      cloud: { fa: 'سرویس‌های ابری', en: 'Cloud Services' },
      security: { fa: 'امنیت سایبری', en: 'Cybersecurity' },
      architecture: { fa: 'معماری نرم‌افزار', en: 'Software Architecture' },
      performance: { fa: 'کارایی و بهینه‌سازی', en: 'Application Performance' },
      hardware: { fa: 'سخت‌افزار سرور', en: 'Server Hardware' },
      storage: { fa: 'ذخیره‌سازی و آرایه‌ها', en: 'Storage & Arrays' },
      other: { fa: 'سایر موارد فنی', en: 'Other' },
    };
    return t(map[cat]?.fa || cat, map[cat]?.en || cat);
  };

  const handleCopyTicket = () => {
    navigator.clipboard?.writeText(incident.ticketNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const badge = getSeverityBadge(incident.severity);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200/60 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400">
                  {incident.ticketNumber}
                </span>
                {incident.isSample && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">
                    {t('رکورد نمونه اولیه', 'Sample Seed Record')}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
                {incident.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-xl hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Key Attributes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-neutral-200/40 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 mb-1 font-mono">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{t('سطح فوریت', 'Severity')}</span>
              </div>
              <span
                className={`inline-block px-2 py-0.5 rounded-md text-xs font-bold border ${badge.bg}`}
              >
                {badge.label}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-neutral-200/40 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 mb-1 font-mono">
                <Tag className="w-3.5 h-3.5" />
                <span>{t('دسته‌بندی فنی', 'Category')}</span>
              </div>
              <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {getCategoryLabel(incident.category)}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 mb-1">
                <Server className="w-3.5 h-3.5" />
                <span>{t('سیستم متأثر', 'Affected System')}</span>
              </div>
              <div className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200 truncate">
                {incident.affectedSystem}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{t('وضعیت چرخه', 'Lifecycle')}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t('ثبت اولیه (فاز ۱)', 'Logged (Phase 1)')}
              </span>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>{t('شرح دقیق رخداد فنی', 'Incident Description')}</span>
            </h4>
            <div className="p-4 rounded-xl bg-neutral-200/40 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-pre-wrap font-sans">
              {incident.description}
            </div>
          </div>

          {/* Steps Taken Section */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5 font-mono">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span>{t('اقدامات و بررسی‌های اولیه انجام شده', 'Internal Investigation Steps')}</span>
            </h4>
            <div className="p-4 rounded-xl bg-neutral-200/40 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">
              {incident.stepsTaken || (
                <span className="italic text-neutral-400">
                  {t('اقدام اولیه‌ای ثبت نشده است.', 'No preliminary steps recorded.')}
                </span>
              )}
            </div>
          </div>

          {/* Privacy & Phase 1 Scope Clarification Note */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <div className="font-bold text-emerald-800 dark:text-emerald-300">
                {t('حفاظت از اطلاعات حساس و مرزهای فاز ۱', 'Sensitive Data Protection & Phase 1 Scope')}
              </div>
              <p className="text-emerald-700/90 dark:text-emerald-300/80 leading-relaxed">
                {t(
                  'این تیکت در فاز ۱ به‌صورت ایمن در پایگاه محلی ذخیره شده است. در فازهای بعدی، ماژول سانسور خودکار رمزهای عبور، کلیدهای API و آدرس‌های IP داخلی را پیش از اشتراک‌گذاری با کارشناس برون‌سازمانی حذف خواهد کرد.',
                  'In Phase 1, this incident record is safely stored in the local registry. In future phases, the automated redaction module will sanitize passwords, internal IPs, and API tokens before external expert matching.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-200/60 dark:border-neutral-800 bg-neutral-200/40 dark:bg-neutral-900/70 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t('تاریخ ثبت:', 'Registered at:')}</span>
            <span className="font-mono font-medium">{incident.createdAt}</span>
          </div>

          <div className="flex items-center gap-2">
            {onRequestSpecialist && (
              <button
                onClick={() => {
                  onClose();
                  onRequestSpecialist(incident);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition cursor-pointer"
              >
                <span>{t('درخواست متخصص خارجی', 'Request Specialist')}</span>
              </button>
            )}
            <button
              onClick={handleCopyTicket}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-neutral-200/70 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t('شماره کپی شد', 'Copied') : t('کپی شماره تیکت', 'Copy Ticket #')}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 transition cursor-pointer"
            >
              {t('بستن', 'Close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
