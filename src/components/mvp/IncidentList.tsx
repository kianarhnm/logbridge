import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Incident, IncidentSeverity, TechnicalCategory } from '../../types';
import {
  Search,
  Filter,
  Eye,
  AlertTriangle,
  Server,
  Calendar,
  CheckCircle2,
  FileQuestion,
  Tag,
  Hash,
} from 'lucide-react';
import { IncidentDetailsModal } from './IncidentDetailsModal';

interface IncidentListProps {
  onRequestSpecialist?: (incident: Incident) => void;
}

export function IncidentList({ onRequestSpecialist }: IncidentListProps = {}) {
  const { incidents, t, lang } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalIncident, setActiveModalIncident] = useState<Incident | null>(null);

  const filteredIncidents = useMemo(() => {
    return incidents.filter((inc) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        inc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.affectedSystem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSeverity =
        selectedSeverity === 'all' || inc.severity === selectedSeverity;

      const matchesCategory =
        selectedCategory === 'all' || inc.category === selectedCategory;

      return matchesSearch && matchesSeverity && matchesCategory;
    });
  }, [incidents, searchQuery, selectedSeverity, selectedCategory]);

  const stats = useMemo(() => {
    const samples = incidents.filter((i) => i.isSample).length;
    const userSubmitted = incidents.length - samples;
    const critical = incidents.filter((i) => i.severity === 'critical').length;
    return { total: incidents.length, samples, userSubmitted, critical };
  }, [incidents]);

  const getSeverityBadge = (sev: IncidentSeverity) => {
    switch (sev) {
      case 'critical':
        return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
      case 'high':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'medium':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'low':
      default:
        return 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20';
    }
  };

  const getCategoryLabel = (cat: TechnicalCategory) => {
    const map: Record<TechnicalCategory, { fa: string; en: string }> = {
      infrastructure: { fa: 'زیرساخت', en: 'Infrastructure' },
      linux: { fa: 'لینوکس', en: 'Linux' },
      network: { fa: 'شبکه', en: 'Network' },
      database: { fa: 'دیتابیس', en: 'Database' },
      backend: { fa: 'بک‌اند', en: 'Backend' },
      frontend: { fa: 'فرانت‌اند', en: 'Frontend' },
      software: { fa: 'نرم‌افزار', en: 'Software' },
      apis: { fa: 'وب‌سرویس', en: 'APIs' },
      devops: { fa: 'دواپس', en: 'DevOps' },
      cloud: { fa: 'ابری', en: 'Cloud' },
      security: { fa: 'امنیت', en: 'Security' },
      architecture: { fa: 'معماری', en: 'Architecture' },
      performance: { fa: 'کارایی', en: 'Performance' },
      hardware: { fa: 'سخت‌افزار', en: 'Hardware' },
      storage: { fa: 'استوریج', en: 'Storage' },
      other: { fa: 'سایر', en: 'Other' },
    };
    return t(map[cat]?.fa || cat, map[cat]?.en || cat);
  };

  return (
    <div className="space-y-6">
      {/* Registry Top Bar & Filter Controls */}
      <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Hash className="w-4 h-4 text-emerald-500" />
              <span>{t('فهرست رخدادهای ثبت‌شده (Incident Registry)', 'Logged Incidents Registry')}</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              {t(
                'شامل رکوردهای نمونه اولیه دانشگاهی و رخدادهای جدید ثبت‌شده توسط شما در سناریوی SC-01.',
                'Includes initial academic seed cases and newly logged incidents via Scenario SC-01.'
              )}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-lg bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono">
              {t('کل تیکت‌ها:', 'Total:')} <strong className="text-neutral-900 dark:text-white">{stats.total}</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 font-mono">
              {t('توسط کاربر:', 'User Added:')}{' '}
              <strong className="text-emerald-800 dark:text-emerald-200">{stats.userSubmitted}</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-neutral-200/50 dark:bg-neutral-800 text-neutral-500 font-mono hidden md:inline">
              {t('نمونه پیش‌فرض:', 'Seed Samples:')} {stats.samples}
            </span>
          </div>
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute top-3 right-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('جستجو در شماره تیکت، عنوان یا سیستم...', 'Search ticket #, title, or system...')}
              className="w-full pr-9 pl-4 rtl:pr-9 rtl:pl-4 ltr:pl-9 ltr:pr-4 py-2 rounded-xl text-xs bg-neutral-200/40 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 outline-hidden"
            />
          </div>

          {/* Severity Filter */}
          <div className="relative">
            <Filter className="w-3.5 h-3.5 text-neutral-400 absolute top-3 right-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto pointer-events-none" />
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="w-full pr-8 pl-3 rtl:pr-8 rtl:pl-3 ltr:pl-8 ltr:pr-3 py-2 rounded-xl text-xs bg-neutral-200/40 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 outline-hidden cursor-pointer"
            >
              <option value="all">{t('همه سطوح فوریت', 'All Severities')}</option>
              <option value="critical">{t('بحرانی (Critical P1)', 'Critical (P1)')}</option>
              <option value="high">{t('بالا (High P2)', 'High (P2)')}</option>
              <option value="medium">{t('متوسط (Medium P3)', 'Medium (P3)')}</option>
              <option value="low">{t('پایین (Low P4)', 'Low (P4)')}</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs bg-neutral-200/40 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:border-emerald-500 dark:focus:border-emerald-400 outline-hidden cursor-pointer"
            >
              <option value="all">{t('همه حوزه‌های فنی', 'All Categories')}</option>
              <option value="infrastructure">{t('زیرساخت و سرور', 'Infrastructure')}</option>
              <option value="network">{t('شبکه و فایروال', 'Network')}</option>
              <option value="database">{t('پایگاه داده', 'Database')}</option>
              <option value="software">{t('نرم‌افزار و بک‌اند', 'Software')}</option>
              <option value="devops">{t('دواپس و CI/CD', 'DevOps')}</option>
              <option value="cloud">{t('ابری', 'Cloud')}</option>
              <option value="security">{t('امنیت سایبری', 'Security')}</option>
              <option value="other">{t('سایر حوزه‌ها', 'Other')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Incidents Table / Cards */}
      {filteredIncidents.length === 0 ? (
        <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-neutral-200/60 dark:bg-neutral-800 text-neutral-400 mx-auto flex items-center justify-center">
            <FileQuestion className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
            {t('هیچ رخدادی با فیلترهای جاری یافت نشد', 'No incidents match current filters')}
          </h4>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            {t(
              'می‌توانید فیلترهای جستجو را پاک کنید یا از طریق تب فرم ثبت، رخداد جدیدی ایجاد نمایید.',
              'Clear search queries or log a new incident using the intake form tab.'
            )}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSeverity('all');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-neutral-700 dark:text-neutral-300 bg-neutral-200/70 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition cursor-pointer"
          >
            {t('بازنشانی فیلترها', 'Reset Filters')}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredIncidents.map((incident) => {
            const sevBadge = getSeverityBadge(incident.severity);
            return (
              <div
                key={incident.id}
                onClick={() => setActiveModalIncident(incident)}
                className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-200/70 dark:bg-neutral-800 px-2.5 py-0.5 rounded-md">
                        {incident.ticketNumber}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${sevBadge}`}
                      >
                        {incident.severity.toUpperCase()}
                      </span>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {getCategoryLabel(incident.category)}
                      </span>
                      {incident.isSample ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 border border-neutral-200 dark:border-neutral-700">
                          {t('رکورد نمونه اولیه', 'Sample Seed')}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {t('ثبت‌شده توسط کاربر', 'User Logged')}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                      {incident.title}
                    </h4>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                      {incident.description}
                    </p>
                  </div>

                  {/* Metadata & Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-300">
                      <Server className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="truncate max-w-[140px]">{incident.affectedSystem}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                      <Calendar className="w-3 h-3" />
                      <span>{incident.createdAt}</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalIncident(incident);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t('مشاهده جزئیات', 'View Details')}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Modal */}
      {activeModalIncident && (
        <IncidentDetailsModal
          incident={activeModalIncident}
          onClose={() => setActiveModalIncident(null)}
          onRequestSpecialist={onRequestSpecialist}
        />
      )}
    </div>
  );
}
