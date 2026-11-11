/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Expert, TechnicalCategory, ExpertRequest } from '../../types';
import { INITIAL_EXPERTS } from '../../data/mockOpsData';
import {
  Search,
  Filter,
  CheckCircle2,
  Star,
  Clock,
  ShieldCheck,
  Award,
  DollarSign,
  Briefcase,
  X,
  Send,
  Sparkles,
} from 'lucide-react';

export const ExpertMarketplace: React.FC = () => {
  const { lang, t, expertRequests } = useApp();
  const [activeTab, setActiveTab] = useState<'directory' | 'my_requests'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [inspectedExpert, setInspectedExpert] = useState<Expert | null>(null);

  const filteredExperts = INITIAL_EXPERTS.filter((exp) => {
    const matchesSearch =
      exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      exp.title[lang].toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDomain =
      selectedDomain === 'all' || exp.domains.includes(selectedDomain as TechnicalCategory);

    return matchesSearch && matchesDomain;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Marketplace Switcher & Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {t('شبکه متخصصان فنی و مشاوران خبره', 'LogBridge Expert Talent Marketplace')}
            </h3>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
              {INITIAL_EXPERTS.length} Verified Specialists
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            {t(
              'دسترسی به خبرگان ارزیابی‌شده در حوزه‌های لینوکس، دیتابیس، زیرساخت و امنیت بدون نیاز به استخدام تمام‌وقت.',
              'Access vetted senior engineers across Linux, DBAs, Cloud & Cyber on an on-demand, confidential basis.'
            )}
          </p>
        </div>

        {/* Tab switch between directory and my requests */}
        <div className="flex items-center gap-1.5 bg-neutral-200/70 dark:bg-neutral-800 p-1 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('directory')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === 'directory'
                ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900'
            }`}
          >
            {t('فهرست متخصصان', 'Specialist Directory')}
          </button>

          <button
            onClick={() => setActiveTab('my_requests')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'my_requests'
                ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900'
            }`}
          >
            <span>{t('درخواست‌های فعال سازمان', 'Active Case Requests')}</span>
            <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
              {expertRequests.length}
            </span>
          </button>
        </div>
      </div>

      {activeTab === 'directory' ? (
        <>
          {/* Search & Domain Filter Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 relative">
              <Search className="w-4 h-4 absolute top-3.5 right-3.5 sm:left-auto text-neutral-400 pointer-events-none" />
              <input
                type="text"
                placeholder={t(
                  'جستجو بر اساس نام، مهارت (eBPF, PostgreSQL, Kernel) یا تخصص...',
                  'Search by name, skill (eBPF, PostgreSQL, Kernel) or domain...'
                )}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="all">{t('همه دامنه‌های فنی', 'All Technical Domains')}</option>
                <option value="infrastructure">Infrastructure & Servers</option>
                <option value="linux">Linux Kernel & System Tuning</option>
                <option value="database">PostgreSQL & Database HA</option>
                <option value="security">Cloud Security & Hardening</option>
                <option value="backend">Backend & Microservices</option>
                <option value="performance">Application Performance</option>
              </select>
            </div>
          </div>

          {/* Expert Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredExperts.map((exp) => (
              <div
                key={exp.id}
                className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition"
              >
                <div>
                  {/* Top info */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={exp.avatar}
                        alt={exp.name}
                        className="w-12 h-12 rounded-xl object-cover border border-neutral-300 dark:border-neutral-700 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                            {exp.name}
                          </h4>
                          {exp.verified && (
                            <span title="Verified Specialist">
                              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {exp.title[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-neutral-200/60 dark:bg-neutral-800 px-2 py-1 rounded-lg text-xs font-mono shrink-0">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">{exp.rating}</span>
                      <span className="text-[10px] text-neutral-500">({exp.reviewCount})</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-3 line-clamp-2 leading-relaxed">
                    {exp.bio[lang]}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Pricing, Availability & Action */}
                <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      {exp.hourlyRate}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      <span>{exp.availability[lang]}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setInspectedExpert(exp)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-neutral-900 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-800 transition cursor-pointer"
                  >
                    {t('مشاهده پروفایل و سوابق', 'View Profile')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* My Active Requests Tab */
        <div className="space-y-4">
          {expertRequests.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
              {t('هنوز هیچ درخواست همکار‌ی‌ای ثبت نشده است.', 'No active specialist requests logged yet.')}
            </div>
          ) : (
            <div className="space-y-3">
              {expertRequests.map((req) => (
                <div
                  key={req.id}
                  className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {req.requestId}
                      </span>
                      <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                        {req.incidentTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        Incident #{req.incidentTicket}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                        {req.status === 'in_collaboration' ? t('در حال بررسی و همکاری', 'In Collaboration') : t('پرونده تایید شد', 'Case Approved')}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                    <div>
                      <span className="text-neutral-500 block text-[11px]">{t('متخصص همکار:', 'Assigned Specialist:')}</span>
                      <span className="font-bold">{req.matchedExpert ? req.matchedExpert.name : t('در صف تطبیق', 'Queued')}</span>
                    </div>

                    <div>
                      <span className="text-neutral-500 block text-[11px]">{t('بودجه و تعرفه:', 'Budget Preference:')}</span>
                      <span>{req.budgetPreference}</span>
                    </div>

                    <div>
                      <span className="text-neutral-500 block text-[11px]">{t('زمان ثبت درخواست:', 'Created At:')}</span>
                      <span className="font-mono">{req.createdAt}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/60 font-mono text-[11px] text-neutral-600 dark:text-neutral-400 truncate">
                    {req.sanitizedEvidence.split('\n')[0]}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Inspected Expert Full Profile Modal */}
      {inspectedExpert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={inspectedExpert.avatar}
                  alt={inspectedExpert.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-neutral-300 dark:border-neutral-700"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      {inspectedExpert.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono">
                      ★ {inspectedExpert.rating}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {inspectedExpert.title[lang]}
                  </p>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                    {inspectedExpert.hourlyRate}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setInspectedExpert(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100">{t('بیوگرافی و تجربیات:', 'Bio & Background:')}</h4>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                {inspectedExpert.bio[lang]}
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100">{t('گواهینامه‌های رسمی و تاییدشده:', 'Verified Certifications:')}</h4>
              <div className="flex flex-wrap gap-1.5">
                {inspectedExpert.certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono text-[11px]"
                  >
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100">{t('سوابق پرونده‌های حل‌شده در پلتفرم:', 'Platform Resolution Track Record:')}</h4>
              <div className="p-3 rounded-xl bg-neutral-200/60 dark:bg-neutral-800 text-xs flex items-center justify-between">
                <span>{t('تعداد رخدادهای رفع‌شده با رضایت بالای ۹۸٪:', 'Successfully Resolved Incidents (98%+ satisfaction):')}</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {inspectedExpert.completedCases} {t('پرونده', 'cases')}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
              <button
                onClick={() => setInspectedExpert(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-neutral-900 dark:bg-emerald-600 hover:bg-neutral-800 transition cursor-pointer"
              >
                {t('بستن پنجره', 'Close Profile')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
