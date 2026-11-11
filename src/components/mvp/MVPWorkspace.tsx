/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DEMO_ORGANIZATIONS, CATEGORY_DEFINITIONS, CATEGORY_METRICS_DATA } from '../../data/mockOpsData';
import { IncidentForm } from './IncidentForm';
import { IncidentList } from './IncidentList';
import { ExpertMarketplace } from './ExpertMarketplace';
import { SpecialistRequestModal } from './SpecialistRequestModal';
import { CategoryMonitoringDetail } from './CategoryMonitoringDetail';
import { Interactive3DTopology } from '../common/Interactive3DTopology';
import { ContextualHelpDrawer } from '../common/ContextualHelpDrawer';
import { Incident, MonitoringSourceCategory } from '../../types';
import {
  Activity,
  Layers,
  Terminal,
  ShieldAlert,
  Sliders,
  Bell,
  Users,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Play,
  Pause,
  Filter,
  Check,
  ShieldCheck,
  Building2,
  HelpCircle,
  HardDrive,
  Server,
  Database,
  Globe,
  Network,
  Shield,
  Cloud,
  Cpu,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

const CATEGORY_ICON_MAP: Record<MonitoringSourceCategory, React.ComponentType<{ className?: string }>> = {
  frontend: Globe,
  backend: Cpu,
  database: Database,
  server: Server,
  disk: HardDrive,
  network: Network,
  security: Shield,
  cloud: Cloud,
  application: Globe,
  infrastructure: Server,
  database_storage: Database,
  hardware_security: Shield,
  hardware: Cpu,
  storage: HardDrive,
  api: Globe,
};

export function MVPWorkspace() {
  const {
    lang,
    t,
    incidents,
    resetIncidentsToDefault,
    selectedOrgId,
    setSelectedOrgId,
    policies,
    alerts,
    acknowledgeAlert,
    activeOpsTab,
    setActiveOpsTab,
    activeCategory,
    setActiveCategory,
    structuredLogs,
    isStreamPaused,
    setIsStreamPaused,
  } = useApp();

  const [requestModalIncident, setRequestModalIncident] = useState<Incident | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [logFilter, setLogFilter] = useState<'ALL' | 'CRITICAL' | 'ERROR' | 'WARNING' | 'INFO'>('ALL');

  const currentOrg =
    DEMO_ORGANIZATIONS.find((o) => o.id === selectedOrgId) || DEMO_ORGANIZATIONS[0];

  const handleOpenSpecialistModal = (incident: any) => {
    // If passed a partial incident or custom payload from category view, format as Incident
    if ('id' in incident && 'ticketNumber' in incident) {
      setRequestModalIncident(incident as Incident);
    } else {
      const synthIncident: Incident = {
        id: `inc-${Date.now()}`,
        ticketNumber: `INC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        createdAt: new Date().toLocaleTimeString(),
        title: incident.title || 'Technical Incident',
        description: incident.description || 'Incident requiring technical investigation',
        category: incident.category || 'other',
        sourceCategory: incident.sourceCategory,
        severity: incident.severity || 'high',
        affectedSystem: incident.affectedSystem || 'Core Cluster',
        status: 'submitted',
        isSample: false,
        organizationId: selectedOrgId,
      };
      setRequestModalIncident(synthIncident);
    }
  };

  const handleSpecialistSuccess = (reqId: string) => {
    setRequestModalIncident(null);
    setSuccessNotice(
      lang === 'fa'
        ? `درخواست ${reqId} با موفقیت ثبت شد و به شبکه متخصصان ارسال گردید.`
        : `Request ${reqId} successfully dispatched to the expert network.`
    );
    setActiveOpsTab('marketplace');
  };

  // If a specific category is active, render its dedicated decoupled monitoring workspace
  if (activeCategory) {
    return (
      <div className="space-y-6">
        <CategoryMonitoringDetail
          category={activeCategory}
          onBack={() => setActiveCategory(null)}
          onRequestSpecialist={handleOpenSpecialistModal}
        />
        {requestModalIncident && (
          <SpecialistRequestModal
            incident={requestModalIncident}
            onClose={() => setRequestModalIncident(null)}
            onSubmitSuccess={handleSpecialistSuccess}
          />
        )}
      </div>
    );
  }

  const filteredLogs = structuredLogs.filter((log) => {
    if (logFilter === 'ALL') return true;
    return log.severity === logFilter;
  });

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Simulation Transparency Indicator per University Project Requirements */}
      <div className="p-3 bg-neutral-200/60 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            {t(
              'محیط شبیه‌ساز عملیاتی امن LogBridge (Phase 1 Prototype): تمامی رخدادها، منابع و تطبیق‌های متخصص در این محیط ایزوله اجرا می‌شوند.',
              'LogBridge Safe Simulation Workspace (Phase 1): All telemetry, incident policies, and expert matching execute within client isolation.'
            )}
          </span>
        </div>

        <button
          onClick={resetIncidentsToDefault}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-semibold bg-neutral-300/80 dark:bg-neutral-800 hover:bg-neutral-400 text-neutral-800 dark:text-neutral-200 transition cursor-pointer shrink-0"
        >
          <RotateCcw className="w-3 h-3 text-neutral-500" />
          <span>{t('بازنشانی شبیه‌ساز', 'Reset Simulator')}</span>
        </button>
      </div>

      {successNotice && (
        <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700 text-emerald-200 text-xs flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{successNotice}</span>
          </div>
          <button
            onClick={() => setSuccessNotice(null)}
            className="text-emerald-400 hover:text-white text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* SENTRY / ZABBIX INSPIRED OPERATIONS WORKSPACE HEADER */}
      <div className="bg-neutral-900 text-white border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
            <Activity className="w-4 h-4" />
            <span>LogBridge // Observability & Incident Ops</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-neutral-100">
            {t('میزکار عملیات فنی و مانیتورینگ سازمان', 'Technical Operations & Observability Workspace')}
          </h1>

          <p className="text-xs text-neutral-400 leading-relaxed text-justify">
            {t(
              'رابط پایش بی‌وقفه رخدادها با الهام از سنتری و زابیکس؛ پایش مجزای منابع فنی، ارزیابی سیاست‌های خودکار و درگاه اعزام درخواست متخصص.',
              'Real-time incident observability suite inspired by Sentry and Zabbix: decoupled source monitoring, policy evaluation, and expert dispatch.'
            )}
          </p>
        </div>

        {/* Organization Selector and Contextual Help Trigger */}
        <div className="flex flex-col sm:flex-row md:flex-col items-end gap-3">
          <div className="p-4 rounded-2xl bg-neutral-950/90 border border-neutral-800 space-y-2 min-w-[270px] w-full">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                {t('انتخاب سازمان:', 'Select Organization:')}
              </span>
              <span
                className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                  currentOrg.health === 'healthy'
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    : currentOrg.health === 'critical'
                    ? 'bg-rose-950 text-rose-400 border border-rose-800'
                    : 'bg-amber-950 text-amber-400 border border-amber-800'
                }`}
              >
                {currentOrg.health.toUpperCase()}
              </span>
            </div>

            <select
              value={selectedOrgId}
              onChange={(e) => setSelectedOrgId(e.target.value)}
              className="w-full p-2 rounded-xl bg-neutral-900 border border-neutral-700 text-xs font-bold text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              {DEMO_ORGANIZATIONS.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name[lang]} ({org.industry[lang]})
                </option>
              ))}
            </select>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-1 border-t border-neutral-800/80">
              <span>{currentOrg.connectedSources} Sources connected</span>
              <span className="text-emerald-400">{incidents.length} incidents</span>
            </div>
          </div>

          {/* Contextual Help Button */}
          <button
            onClick={() => setIsHelpOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition cursor-pointer self-stretch justify-center"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>{t('راهنمای این بخش (پاسخ ۵ پرسش)', 'Page Help & Guidance')}</span>
          </button>
        </div>
      </div>

      {/* SENTRY/ZABBIX WORKSPACE NAVIGATION TABS */}
      <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveOpsTab('overview')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeOpsTab === 'overview'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>{t('نمای کلی وضعیت و منابع', 'Overview & Sources')}</span>
        </button>

        <button
          onClick={() => setActiveOpsTab('incidents')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeOpsTab === 'incidents'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{t('مدیریت رخدادها', 'Incidents')}</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-neutral-200 dark:bg-neutral-700">
            {incidents.length}
          </span>
        </button>

        <button
          onClick={() => setActiveOpsTab('logs')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeOpsTab === 'logs'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>{t('پایش زنده لاگ‌ها', 'Live Log Stream')}</span>
        </button>

        <button
          onClick={() => setActiveOpsTab('policies')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeOpsTab === 'policies'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>{t('سیاست‌ها و قوانین', 'Policy Engine')}</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-neutral-200 dark:bg-neutral-700">
            {policies.length}
          </span>
        </button>

        <button
          onClick={() => setActiveOpsTab('alerts')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeOpsTab === 'alerts'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>{t('مرکز هشدارها', 'Alert Center')}</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-rose-500 text-white">
            {alerts.filter((a) => !a.acknowledged).length}
          </span>
        </button>

        <button
          onClick={() => setActiveOpsTab('marketplace')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ml-auto ${
            activeOpsTab === 'marketplace'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20'
          }`}
        >
          <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{t('شبکه متخصصان (Marketplace)', 'Expert Marketplace')}</span>
        </button>
      </div>

      {/* 7 TECHNICAL SOURCES QUICK-ACCESS PILL BAR */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 px-1">
          <span className="font-semibold">
            {t('دسترسی مستقیم به پایش منابع ۷گانه:', 'Direct Decoupled Source Monitoring:')}
          </span>
          <span className="text-[11px] font-mono">
            {t('انتخاب منبع برای مشاهده لاگ‌ها، متغیرها و قوانین اختصاصی', 'Select source for isolated telemetry & policies')}
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORY_DEFINITIONS.map((cat) => {
            const Icon = CATEGORY_ICON_MAP[cat.id];
            const isCritical = cat.defaultHealth === 'critical';
            const isWarning = cat.defaultHealth === 'warning';

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer whitespace-nowrap ${
                  isCritical
                    ? 'bg-rose-500/10 border-rose-300 dark:border-rose-900/60 text-rose-700 dark:text-rose-400 hover:bg-rose-500/20'
                    : isWarning
                    ? 'bg-amber-500/10 border-amber-300 dark:border-amber-900/60 text-amber-700 dark:text-amber-400 hover:bg-amber-500/20'
                    : 'bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-emerald-500'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title[lang]}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isCritical ? 'bg-rose-500' : isWarning ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeOpsTab === 'overview' && (
        <div className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2">
              <span className="text-xs text-neutral-500 block">{t('رخدادهای باز و جاری', 'Open Incidents')}</span>
              <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-100">
                {incidents.filter((i) => i.status !== 'resolved').length}
              </div>
              <span className="text-[11px] text-emerald-600 font-medium">Scenario SC-01 Active</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2">
              <span className="text-xs text-neutral-500 block">{t('نرخ ارزیابی سیاست‌ها', 'Evaluated Policies')}</span>
              <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-100">
                {policies.reduce((acc, p) => acc + p.executionCount, 0)}
              </div>
              <span className="text-[11px] text-neutral-500">Auto-Enforced Rules</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2">
              <span className="text-xs text-neutral-500 block">{t('هشدار‌های فعال کشیک', 'Active Alerts')}</span>
              <div className="text-2xl font-bold font-mono text-rose-600 dark:text-rose-400">
                {alerts.filter((a) => !a.acknowledged).length}
              </div>
              <span className="text-[11px] text-neutral-500">Pending On-Call Review</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2">
              <span className="text-xs text-neutral-500 block">{t('پرونده‌های ارجاع به متخصص', 'Outsourced Cases')}</span>
              <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                {incidents.filter((i) => i.status === 'expert_requested').length}
              </div>
              <span className="text-[11px] text-neutral-500">Sanitized & Dispatched</span>
            </div>
          </div>

          {/* 3D TOPOLOGY CARD (Requirement 4 & 6) */}
          <div className="p-6 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="font-bold text-sm text-neutral-100">
                    {t('توپولوژی زنده و تعاملی ۳بعدی شبکه منابع فنی', 'Interactive 3D Infrastructure Topology')}
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  {t(
                    'روی هر گره کلیک کنید تا وارد محیط پایش اختصاصی، لاگ‌ها و سیاست‌های آن شوید. همچنین می‌توانید زاویه دوربین را با ماوس بچرخانید.',
                    'Click any node to navigate into its isolated monitoring view. Drag to rotate the 3D perspective.'
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Healthy
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> Warning
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500" /> Critical
                </span>
              </div>
            </div>

            <Interactive3DTopology
              variant="monitoring"
              onSelectCategory={(cat) => setActiveCategory(cat)}
            />
          </div>

          {/* 7 SOURCES MONITORING GRID */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                  {t('پایش مجزای منابع هفت‌گانه فنی', 'Decoupled Technical Sources Monitoring')}
                </h3>
                <p className="text-xs text-neutral-500">
                  {t(
                    'هر بخش دارای پایگاه لاگ، شاخص‌های سلامت و سیاست‌های ایزوله است.',
                    'Each domain maintains dedicated telemetry, health metrics, and policies.'
                  )}
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-600 font-bold">7 Sources Active</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CATEGORY_DEFINITIONS.map((cat) => {
                const Icon = CATEGORY_ICON_MAP[cat.id];
                const metrics = CATEGORY_METRICS_DATA[cat.id] || [];
                const firstMetric = metrics[0];
                const isCritical = cat.defaultHealth === 'critical';
                const isWarning = cat.defaultHealth === 'warning';

                return (
                  <div
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-500 transition">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                              {cat.title[lang]}
                            </h4>
                            <span className="text-[11px] text-neutral-500 font-mono">
                              {cat.subtitle.en}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                            isCritical
                              ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                              : isWarning
                              ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                              : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          }`}
                        >
                          ● {cat.defaultHealth}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                        {cat.subtitle[lang]}
                      </p>

                      {firstMetric && (
                        <div className="p-2.5 rounded-xl bg-neutral-200/60 dark:bg-neutral-800/60 flex items-center justify-between text-xs font-mono">
                          <span className="text-neutral-500">{firstMetric.label[lang]}:</span>
                          <span
                            className={`font-bold ${
                              firstMetric.isCritical
                                ? 'text-rose-600 dark:text-rose-400'
                                : firstMetric.isWarning
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-emerald-600 dark:text-emerald-400'
                            }`}
                          >
                            {firstMetric.value} {firstMetric.unit || ''}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <span>{t('مشاهده لاگ‌ها و سیاست‌های این منبع', 'Inspect Source & Logs')}</span>
                      <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Incident List Preview with Specialist Request Button */}
          <div className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                {t('رخدادهای بحرانی نیازمند تصمیم‌گیری سازمان', 'Critical Incidents Requiring Triage')}
              </h3>
              <button
                onClick={() => setActiveOpsTab('incidents')}
                className="text-xs text-emerald-600 hover:underline font-bold cursor-pointer"
              >
                {t('مشاهده همه تیکت‌ها', 'View All Incidents →')}
              </button>
            </div>

            <div className="space-y-3">
              {incidents.slice(0, 3).map((inc) => (
                <div
                  key={inc.id}
                  className="p-4 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
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
                    {inc.status === 'expert_requested' ? (
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                        ✓ {t('درخواست متخصص ارسال شد', 'Specialist Dispatched')}
                      </span>
                    ) : (
                      <button
                        onClick={() => handleOpenSpecialistModal(inc)}
                        className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-emerald-600 hover:bg-neutral-800 dark:hover:bg-emerald-700 font-bold text-[11px] flex items-center gap-1.5 cursor-pointer"
                      >
                        <Users className="w-3.5 h-3.5" />
                        <span>{t('درخواست متخصص خارجی', 'Request Specialist')}</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INCIDENTS (SC-01 Core) */}
      {activeOpsTab === 'incidents' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <IncidentForm />
            </div>
            <div className="lg:col-span-2">
              <IncidentList onRequestSpecialist={handleOpenSpecialistModal} />
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LIVE LOG STREAM */}
      {activeOpsTab === 'logs' && (
        <div className="p-6 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl space-y-4 font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-sm text-neutral-100">
                LogBridge Live Ingestion Stream (Sentry Mode)
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setIsStreamPaused(!isStreamPaused)}
                className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center gap-1 cursor-pointer"
              >
                {isStreamPaused ? <Play className="w-3 h-3 text-emerald-400" /> : <Pause className="w-3 h-3 text-amber-400" />}
                <span>{isStreamPaused ? 'Resume' : 'Pause'}</span>
              </button>

              <select
                value={logFilter}
                onChange={(e) => setLogFilter(e.target.value as any)}
                className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-lg border border-neutral-700 text-xs"
              >
                <option value="ALL">All Levels</option>
                <option value="CRITICAL">CRITICAL</option>
                <option value="ERROR">ERROR</option>
                <option value="WARNING">WARNING</option>
                <option value="INFO">INFO</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-neutral-300 max-h-[460px] overflow-y-auto pr-2">
            <div className="py-1 border-b border-neutral-800 text-neutral-500 text-[11px] flex justify-between">
              <span>TIMESTAMP // LEVEL // SOURCE // SERVICE // TRACE</span>
              <span className="text-emerald-400">LogBridge Interceptor: ACTIVE</span>
            </div>

            {filteredLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-center gap-3 py-1.5 border-b border-neutral-800/40 text-xs"
              >
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

                <span className="text-neutral-400 shrink-0 font-mono text-[11px]">
                  [{log.source}]
                </span>

                <span className="text-emerald-400 shrink-0 font-medium">{log.service}</span>
                <span className="text-neutral-300 truncate">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: POLICY ENGINE */}
      {activeOpsTab === 'policies' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              {t('سیاست‌ها و قوانین خودکار عملیات (Policy Rules)', 'Automated Operational Policy Rules')}
            </h3>
            <span className="text-xs text-neutral-500 font-mono">Zabbix-Style Trigger Rules</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {policies.map((pol) => (
              <div
                key={pol.id}
                className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {pol.id}
                    </span>
                    <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
                      {pol.name[lang]}
                    </h4>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      pol.enabled ? 'bg-emerald-500/15 text-emerald-600' : 'bg-neutral-200 text-neutral-500'
                    }`}
                  >
                    {pol.enabled ? 'Active' : 'Disabled'}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px]">
                    <span className="text-neutral-500">IF: </span>
                    {pol.triggerCondition}
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px]">
                    <span className="text-neutral-500">THEN: </span>
                    {pol.action[lang]}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <span>Source: {pol.category}</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    {pol.executionCount} executions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: ALERT CENTER */}
      {activeOpsTab === 'alerts' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              {t('مرکز هشدارهای عملیاتی و کشیک (Alert Center)', 'Operational & On-Call Alert Center')}
            </h3>
            <span className="text-xs text-neutral-500 font-mono">Push Notification Dispatch</span>
          </div>

          <div className="space-y-3">
            {alerts.map((alt) => (
              <div
                key={alt.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
                  alt.acknowledged
                    ? 'bg-neutral-100/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 opacity-60'
                    : 'bg-neutral-100 dark:bg-neutral-900 border-rose-300 dark:border-rose-900/60 shadow-xs'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-neutral-500">{alt.timestamp}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                        alt.severity === 'critical'
                          ? 'bg-rose-500 text-white'
                          : 'bg-amber-500 text-white'
                      }`}
                    >
                      {alt.severity.toUpperCase()}
                    </span>
                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                      {alt.title[lang]}
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">{alt.message[lang]}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  {!alt.acknowledged && (
                    <button
                      onClick={() => acknowledgeAlert(alt.id)}
                      className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-emerald-600 hover:bg-neutral-800 text-[11px] font-bold cursor-pointer"
                    >
                      {t('رویت و تایید آلرت (Ack)', 'Acknowledge')}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: EXPERT MARKETPLACE */}
      {activeOpsTab === 'marketplace' && <ExpertMarketplace />}

      {/* SPECIALIST REQUEST MODAL (FLOW FROM INCIDENT) */}
      {requestModalIncident && (
        <SpecialistRequestModal
          incident={requestModalIncident}
          onClose={() => setRequestModalIncident(null)}
          onSubmitSuccess={handleSpecialistSuccess}
        />
      )}

      {/* Contextual Help Drawer for Active MVP Ops Tab */}
      <ContextualHelpDrawer
        pageKey={activeOpsTab === 'overview' ? 'monitoring_overview' : activeOpsTab}
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
