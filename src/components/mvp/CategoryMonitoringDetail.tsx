/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MonitoringSourceCategory, StructuredLog, CategoryPolicy } from '../../types';
import {
  CATEGORY_DEFINITIONS,
  CATEGORY_METRICS_DATA,
} from '../../data/mockOpsData';
import { ContextualHelpDrawer } from '../common/ContextualHelpDrawer';
import { Signature3DLogAnimation } from '../common/Signature3DLogAnimation';
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  Sliders,
  Terminal,
  ShieldAlert,
  Search,
  Filter,
  Play,
  Pause,
  Copy,
  Check,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Users,
  HelpCircle,
  Eye,
  RefreshCw,
  Power,
  Zap,
  Lock,
  GitBranch,
} from 'lucide-react';

interface CategoryMonitoringDetailProps {
  category: MonitoringSourceCategory;
  onBack: () => void;
  onRequestSpecialist: (incidentOrContext: any) => void;
}

export const CategoryMonitoringDetail: React.FC<CategoryMonitoringDetailProps> = ({
  category,
  onBack,
  onRequestSpecialist,
}) => {
  const {
    lang,
    t,
    structuredLogs,
    policies,
    togglePolicy,
    simulatePolicyEvaluation,
    incidents,
    isStreamPaused,
    setIsStreamPaused,
    currentRole,
    canAccess,
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'metrics' | 'logs' | 'policies' | 'incidents'>('metrics');
  const [logSearch, setLogSearch] = useState('');
  const [logSeverityFilter, setLogSeverityFilter] = useState<string>('ALL');
  const [inspectedLog, setInspectedLog] = useState<StructuredLog | null>(null);
  const [copiedLogId, setCopiedLogId] = useState<string | null>(null);
  const [policySimResult, setPolicySimResult] = useState<{ id: string; message: string; action: string } | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const BackIcon = lang === 'fa' ? ArrowRight : ArrowLeft;
  const categoryMeta = CATEGORY_DEFINITIONS.find((c) => c.id === category) || CATEGORY_DEFINITIONS[0];
  const metrics = CATEGORY_METRICS_DATA[category] || [];
  const categoryPolicies = policies.filter((p) => p.domain === category || p.category === category);
  const categoryLogs = structuredLogs.filter((l) => l.domain === category || l.source === category);
  const categoryIncidents = incidents.filter((i) => i.domain === category || i.sourceCategory === category || i.category === (category as any));
  const isPermitted = canAccess('domain:' + category);

  const filteredLogs = categoryLogs.filter((log) => {
    const matchesSearch =
      logSearch.trim() === '' ||
      log.message.toLowerCase().includes(logSearch.toLowerCase()) ||
      log.service.toLowerCase().includes(logSearch.toLowerCase()) ||
      log.eventId.toLowerCase().includes(logSearch.toLowerCase());

    const matchesSeverity =
      logSeverityFilter === 'ALL' || log.severity === logSeverityFilter;

    return matchesSearch && matchesSeverity;
  });

  const handleCopyLog = (log: StructuredLog) => {
    navigator.clipboard?.writeText(JSON.stringify(log, null, 2));
    setCopiedLogId(log.id);
    setTimeout(() => setCopiedLogId(null), 2000);
  };

  const handleRunSim = (pol: CategoryPolicy) => {
    const res = simulatePolicyEvaluation(pol.id);
    setPolicySimResult({
      id: pol.id,
      message: res.message,
      action: res.actionResult,
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Bar: Back Action, Category Title, Health, Help */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2E2A2D] pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-[#292426] hover:bg-[#343033] border border-[#2E2A2D] text-[#EDEDEF] transition cursor-pointer"
            title={t('بازگشت به نمای کلی', 'Back to Overview')}
          >
            <BackIcon className="w-4 h-4 text-emerald-400" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-extrabold text-[#EDEDEF]">
                {categoryMeta.title[lang]}
              </h1>

              {/* Health Indicator Badge */}
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                  categoryMeta.defaultHealth === 'critical'
                    ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                    : categoryMeta.defaultHealth === 'warning'
                    ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                }`}
              >
                ● {categoryMeta.defaultHealth}
              </span>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              {categoryMeta.subtitle[lang]}
            </p>
          </div>
        </div>

        {/* Action Controls & Contextual Page Help Button */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setIsHelpOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-200/70 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold transition cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t('راهنمای پایش این منبع', 'Source Guide')}</span>
          </button>

          <button
            onClick={() =>
              onRequestSpecialist({
                title: `${categoryMeta.title[lang]} Outage`,
                category: category as any,
                description: `اختلال عمیق در منبع ${categoryMeta.title[lang]} با وضعیت ${categoryMeta.defaultHealth}. نیاز به تحلیل تخصصی.`,
                severity: categoryMeta.defaultHealth === 'critical' ? 'critical' : 'high',
                affectedSystem: categoryMeta.title.en,
              })
            }
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer shadow-xs"
          >
            <Users className="w-3.5 h-3.5" />
            <span>{t('درخواست متخصص این حوزه', 'Dispatch Specialist')}</span>
          </button>
        </div>
      </div>

      {/* RBAC Domain Scope Indicator */}
      {!isPermitted && (
        <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-800/80 text-amber-200 text-xs flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {t(
                `نقش شما (${currentRole}) برای حوزه ${categoryMeta.title.fa} در وضعیت ناظر (Audited Read-Only) قرار دارد. تنها مهندس متخصص این حوزه و مدیران می‌توانند سیاست‌ها را تغییر دهند.`,
                `Your current role (${currentRole}) is in read-only audit mode for ${categoryMeta.title.en}. Only assigned domain specialists and admins can modify policies.`
              )}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-900/60 border border-amber-700 text-amber-300 shrink-0 font-bold">
            DOMAIN SCOPE ENFORCED
          </span>
        </div>
      )}

      {/* Category Tabs: Metrics, Logs, Policies, Incidents */}
      <div className="flex items-center gap-2 border-b border-[#2E2A2D] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('metrics')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeSubTab === 'metrics'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>{t('شاخص‌ها و سلامت', 'Metrics & Telemetry')}</span>
          <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-700">
            {metrics.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('logs')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeSubTab === 'logs'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>{t('کاوشگر لاگ‌های اختصاصی', 'Dedicated Log Stream')}</span>
          <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-700">
            {categoryLogs.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('policies')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeSubTab === 'policies'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>{t('سیاست‌های مرتبط با این منبع', 'Associated Policies')}</span>
          <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-700">
            {categoryPolicies.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('incidents')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeSubTab === 'incidents'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>{t('تیکت‌های رخداد این بخش', 'Related Incidents')}</span>
          <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-700">
            {categoryIncidents.length}
          </span>
        </button>
      </div>

      {/* SUBTAB 1: METRICS & HEALTH CARDS */}
      {activeSubTab === 'metrics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-neutral-500 text-xs">
                  <span>{m.label[lang]}</span>
                  {m.change && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold ${
                        m.isCritical
                          ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                          : m.isWarning
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                          : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                      }`}
                    >
                      {m.change}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-2xl font-black font-mono tracking-tight ${
                      m.isCritical
                        ? 'text-rose-600 dark:text-rose-400'
                        : m.isWarning
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-neutral-900 dark:text-neutral-100'
                    }`}
                  >
                    {m.value}
                  </span>
                  {m.unit && <span className="text-xs text-neutral-500 font-mono">{m.unit}</span>}
                </div>

                {/* Visual Mini-Chart Sparkline */}
                {m.sparkline && (
                  <div className="pt-2 flex items-end gap-1 h-8">
                    {m.sparkline.map((val, idx) => {
                      const max = Math.max(...m.sparkline!);
                      const min = Math.min(...m.sparkline!);
                      const h = max === min ? 50 : Math.max(15, ((val - min) / (max - min || 1)) * 100);
                      return (
                        <div
                          key={idx}
                          className="flex-1 rounded-xs transition-all"
                          style={{
                            height: `${h}%`,
                            backgroundColor: m.isCritical ? '#EF4444' : m.isWarning ? '#F59E0B' : '#10B981',
                            opacity: idx === m.sparkline!.length - 1 ? 1 : 0.45 + idx * 0.12,
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3D Log Animation Conduit for Domain Ingestion */}
          <div className="p-4 rounded-3xl bg-[#171719] border border-[#2E2A2D] shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#2E2A2D] mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#EDEDEF]">
                  {t('جریان ۳بعدی انتقال و پالایش بسته لاگ‌های این دامنه', 'Domain LogStream Conduits & Telemetry Particles')}
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">
                {categoryMeta.id.toUpperCase()} // INGEST ACTIVE
              </span>
            </div>
            <Signature3DLogAnimation variant="compact" />
          </div>

          {/* Quick Category Summary Box */}
          <div className="p-6 rounded-3xl bg-[#292426] border border-[#2E2A2D] shadow-xs space-y-3">
            <h3 className="font-bold text-sm text-[#EDEDEF] flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>{t('وضعیت اجرایی و پایش این منبع فنی', 'Operational Diagnostics & Baseline')}</span>
            </h3>

            <p className="text-xs text-[#9E9B9F] leading-relaxed text-justify">
              {t(
                `این حوزه فنی به صورت ایزوله مانیتور می‌شود. تمامی رویدادها ابتدا توسط موتور قوانین ${categoryMeta.title.fa} ارزیابی شده و در صورت لزوم آلرت صادر می‌گردد. داده‌های لاگ خام قبل از انتقال به مشاور به طور خودکار از هرگونه کلید خصوصی و پسورد پاکسازی می‌شوند.`,
                `This domain is decoupled for isolated observability. Telemetry events are evaluated by ${categoryMeta.title.en} policy engines. Sensitive tokens and credentials undergo automated redaction before external handoff.`
              )}
            </p>
          </div>
        </div>
      )}

      {/* SUBTAB 2: DEDICATED LOG EXPLORER */}
      {activeSubTab === 'logs' && (
        <div className="p-6 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl space-y-4 font-mono text-xs">
          {/* Controls Bar: Search, Severity Filter, Pause Stream */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-3 flex-1 max-w-md relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 rtl:left-auto rtl:right-3 pointer-events-none" />
              <input
                type="text"
                placeholder={t('جستجو در لاگ‌ها، پیام یا شناسه رویداد...', 'Search logs, message or Event ID...')}
                value={logSearch}
                onChange={(e) => setLogSearch(e.target.value)}
                className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 rounded-xl bg-neutral-800 border border-neutral-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <select
                value={logSeverityFilter}
                onChange={(e) => setLogSeverityFilter(e.target.value)}
                className="bg-neutral-800 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-neutral-200"
              >
                <option value="ALL">All Severities</option>
                <option value="CRITICAL">CRITICAL</option>
                <option value="ERROR">ERROR</option>
                <option value="WARNING">WARNING</option>
                <option value="INFO">INFO</option>
              </select>

              <button
                onClick={() => setIsStreamPaused(!isStreamPaused)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition cursor-pointer"
              >
                {isStreamPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
                <span>{isStreamPaused ? 'Resume' : 'Pause'}</span>
              </button>
            </div>
          </div>

          {/* Log Records Table */}
          <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
            {filteredLogs.length === 0 ? (
              <div className="p-12 text-center text-neutral-500">
                {t('هیچ لاگی با فیلتر جاری یافت نشد.', 'No logs matching current criteria.')}
              </div>
            ) : (
              filteredLogs.map((log) => (
                <div
                  key={log.id}
                  onClick={() => setInspectedLog(log)}
                  className="p-3 rounded-xl bg-neutral-950/80 hover:bg-neutral-800/80 border border-neutral-800/80 hover:border-neutral-700 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className="text-neutral-500 tabular-nums shrink-0 text-[11px]">
                      {log.timestamp}
                    </span>

                    <span
                      className={`px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0 uppercase ${
                        log.severity === 'CRITICAL'
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : log.severity === 'ERROR'
                          ? 'bg-rose-950/60 text-rose-400'
                          : log.severity === 'WARNING'
                          ? 'bg-amber-950 text-amber-400'
                          : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      {log.severity}
                    </span>

                    <span className="text-emerald-400 shrink-0 font-medium">{log.service}</span>
                    <span className="text-neutral-300 truncate">{log.message}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center text-[10px] text-neutral-500">
                    <span className="px-1.5 py-0.2 rounded bg-neutral-900 border border-neutral-800">
                      {log.eventId}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyLog(log);
                      }}
                      className="p-1 text-neutral-400 hover:text-white"
                      title="Copy JSON"
                    >
                      {copiedLogId === log.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* SUBTAB 3: ASSOCIATED POLICIES & SIMULATION */}
      {activeSubTab === 'policies' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              {t(`سیاست‌های تعریف‌شده برای ${categoryMeta.title.fa}`, `Configured Policies for ${categoryMeta.title.en}`)}
            </h3>
            <span className="text-xs font-mono text-neutral-500">
              {categoryPolicies.filter((p) => p.enabled).length} of {categoryPolicies.length} Active
            </span>
          </div>

          {policySimResult && (
            <div className="p-4 rounded-2xl bg-neutral-900 text-white border border-emerald-500/60 space-y-2 animate-fadeIn text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Simulated Policy Execution Result: OK</span>
                </span>
                <button
                  onClick={() => setPolicySimResult(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <p className="text-neutral-300">{policySimResult.message}</p>
              <div className="p-2 rounded-lg bg-neutral-950 text-emerald-300 text-[11px]">
                {policySimResult.action}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryPolicies.map((pol) => (
              <div
                key={pol.id}
                className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        {pol.id}
                      </span>
                      <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
                        {pol.name[lang]}
                      </h4>
                    </div>

                    <button
                      onClick={() => togglePolicy(pol.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition ${
                        pol.enabled
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                          : 'bg-neutral-300 dark:bg-neutral-800 text-neutral-500'
                      }`}
                    >
                      <Power className="w-3 h-3" />
                      <span>{pol.enabled ? 'Enabled' : 'Disabled'}</span>
                    </button>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                    {pol.description[lang]}
                  </p>

                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="p-2 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-200 text-[11px]">
                      <span className="text-neutral-500">IF: </span>
                      {pol.triggerCondition}
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-200 text-[11px]">
                      <span className="text-neutral-500">ACTION: </span>
                      {pol.action[lang]}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-neutral-500">
                    Exec: {pol.executionCount} ({pol.lastExecutionTime || 'Never'})
                  </span>

                  <button
                    onClick={() => handleRunSim(pol)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-neutral-900 text-white dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 transition cursor-pointer"
                  >
                    <Play className="w-3 h-3 text-emerald-400" />
                    <span>{t('تست و اجرای شبیه‌ساز', 'Test Evaluation')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 4: RELATED INCIDENTS */}
      {activeSubTab === 'incidents' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              {t(`تیکت‌های رخداد منبع ${categoryMeta.title.fa}`, `Incidents Originating from ${categoryMeta.title.en}`)}
            </h3>
            <span className="text-xs font-mono text-neutral-500">
              {categoryIncidents.length} Registered
            </span>
          </div>

          {categoryIncidents.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
              {t('هیچ رخدادی در این بخش ثبت نشده است.', 'No active incident registered for this category.')}
            </div>
          ) : (
            <div className="space-y-3">
              {categoryIncidents.map((inc) => (
                <div
                  key={inc.id}
                  className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        {inc.ticketNumber}
                      </span>
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">
                        {inc.title}
                      </span>
                    </div>
                    <p className="text-neutral-500 line-clamp-1">{inc.description}</p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => onRequestSpecialist(inc)}
                      className="px-3.5 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-emerald-600 hover:bg-neutral-800 dark:hover:bg-emerald-700 font-bold text-[11px] flex items-center gap-1.5 cursor-pointer"
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>{t('درخواست متخصص خارجی', 'Request Specialist')}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Structured Log JSON Inspection Modal */}
      {inspectedLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-800 text-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 font-mono text-xs max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-sm">Event Payload Inspector: {inspectedLog.eventId}</span>
              </div>
              <button
                onClick={() => setInspectedLog(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 overflow-x-auto text-[11px] leading-relaxed">
              {JSON.stringify(inspectedLog, null, 2)}
            </pre>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => handleCopyLog(inspectedLog)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer"
              >
                {copiedLogId === inspectedLog.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLogId === inspectedLog.id ? 'Copied to Clipboard' : 'Copy JSON'}</span>
              </button>

              <button
                onClick={() => setInspectedLog(null)}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
              >
                {t('بستن', 'Close')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contextual Page Help Drawer */}
      <ContextualHelpDrawer
        pageKey={`monitoring_${category}`}
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
};
