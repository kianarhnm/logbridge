/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  DEMO_ORGANIZATIONS,
  MAIN_DOMAIN_DEFINITIONS,
  CATEGORY_DEFINITIONS,
  CATEGORY_METRICS_DATA,
} from '../../data/mockOpsData';
import { IncidentForm } from '../mvp/IncidentForm';
import { IncidentList } from '../mvp/IncidentList';
import { SpecialistRequestModal } from '../mvp/SpecialistRequestModal';
import { CategoryMonitoringDetail } from '../mvp/CategoryMonitoringDetail';
import { Signature3DLogAnimation } from '../common/Signature3DLogAnimation';
import { Interactive3DTopology } from '../common/Interactive3DTopology';
import { ContextualHelpDrawer } from '../common/ContextualHelpDrawer';
import { Incident, MonitoringSourceCategory, MainMonitoringDomain, ExpertRequest } from '../../types';
import {
  Activity,
  Layers,
  Layout,
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
  Settings,
  Webhook,
  MessageSquare,
  Lock,
  Plus,
  Share2,
  FileText,
  UserCheck,
  Key,
  ExternalLink,
  ChevronRight,
  Briefcase,
} from 'lucide-react';

const CATEGORY_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  application: Layout,
  infrastructure: Cpu,
  database_storage: Database,
  network: Network,
  hardware_security: ShieldAlert,
  frontend: Globe,
  backend: Cpu,
  database: Database,
  server: Server,
  disk: HardDrive,
  security: Shield,
  cloud: Cloud,
};

export function OrganizationWorkspace() {
  const {
    lang,
    t,
    incidents,
    resetIncidentsToDefault,
    selectedOrgId,
    setSelectedOrgId,
    policies,
    togglePolicy,
    simulatePolicyEvaluation,
    alerts,
    acknowledgeAlert,
    activeOpsTab,
    setActiveOpsTab,
    activeCategory,
    setActiveCategory,
    structuredLogs,
    isStreamPaused,
    setIsStreamPaused,
    expertRequests,
    approveCaseForSharing,
    proposals,
    acceptProposal,
    integrations,
    toggleIntegration,
    orgMembers,
    addOrgMember,
    currentRole,
    canAccess,
    setActiveWorkspace,
    setActiveProjectId,
  } = useApp();

  const [requestModalIncident, setRequestModalIncident] = useState<Incident | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [logFilter, setLogFilter] = useState<'ALL' | 'CRITICAL' | 'ERROR' | 'WARNING' | 'INFO'>('ALL');
  const [domainFilter, setDomainFilter] = useState<string>('ALL');
  const [logSearchQuery, setLogSearchQuery] = useState('');
  const [inspectedLogRecord, setInspectedLogRecord] = useState<any>(null);
  const [visMode, setVisMode] = useState<'signature_3d' | 'topology_3d'>('signature_3d');
  const [policyDomainFilter, setPolicyDomainFilter] = useState<string>('ALL');

  // Add Member Modal State
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberRole, setNewMemberRole] = useState<'it_operator' | 'org_admin'>('it_operator');

  const currentOrg =
    DEMO_ORGANIZATIONS.find((o) => o.id === selectedOrgId) || DEMO_ORGANIZATIONS[0];

  const handleOpenSpecialistModal = (incident: any) => {
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
        ? `درخواست ${reqId} با موفقیت ثبت شد و به بخش مدیریت درخواست‌های متخصص ارسال گردید.`
        : `Request ${reqId} successfully queued under Expert Request Management.`
    );
    setActiveOpsTab('expert_requests');
  };

  const handleApproveCaseSharing = (reqId: string) => {
    if (!canAccess('approve_expert_cases')) {
      setSuccessNotice(lang === 'fa' ? '⚠️ تنها مدیر سازمان مجوز تایید نهایی انتشار پرونده را دارد.' : '⚠️ Only Organization Admin can approve case sharing.');
      setTimeout(() => setSuccessNotice(null), 4000);
      return;
    }
    approveCaseForSharing(reqId);
    setSuccessNotice(
      lang === 'fa'
        ? 'پرونده با موفقیت تایید شد و اکنون در تالار فرصت‌های متخصصان مستقل قابل مشاهده است.'
        : 'Case approved for sharing! Independent experts can now view sanitized details and submit proposals.'
    );
  };

  const handleAcceptProposal = (propId: string) => {
    if (!canAccess('hire_experts')) {
      setSuccessNotice(lang === 'fa' ? '⚠️ تنها مدیر سازمان مجوز پذیرش پیشنهاد و استخدام متخصص را دارد.' : '⚠️ Only Organization Admin can accept proposals.');
      setTimeout(() => setSuccessNotice(null), 4000);
      return;
    }
    acceptProposal(propId);
    setSuccessNotice(
      lang === 'fa'
        ? 'پیشنهاد متخصص پذیرفته شد. فضای همکاری مشترک با موفقیت فعال گردید.'
        : 'Proposal accepted! Collaboration workspace activated.'
    );
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberName.trim() || !newMemberEmail.trim()) return;

    addOrgMember({
      id: `mem-${Date.now()}`,
      name: newMemberName,
      email: newMemberEmail,
      role: newMemberRole,
      lastActive: 'هم‌اکنون',
      accessScope: newMemberRole === 'org_admin' ? 'Full Organization Control' : 'Observability & Policy Triage',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    });

    setNewMemberName('');
    setNewMemberEmail('');
    setShowAddMemberModal(false);
    setSuccessNotice(
      lang === 'fa' ? 'عضو جدید با موفقیت به سازمان افزوده شد.' : 'New team member added successfully.'
    );
  };

  // If a specific category is active, render its dedicated decoupled monitoring view
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
    if (logFilter !== 'ALL' && log.severity !== logFilter) return false;
    if (domainFilter !== 'ALL' && log.domain !== domainFilter && log.source !== domainFilter) return false;
    if (logSearchQuery.trim() !== '') {
      const q = logSearchQuery.toLowerCase();
      const match =
        log.message.toLowerCase().includes(q) ||
        log.service.toLowerCase().includes(q) ||
        log.eventId.toLowerCase().includes(q) ||
        (log.correlationId && log.correlationId.toLowerCase().includes(q)) ||
        (log.host && log.host.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Simulation Transparency Indicator */}
      <div className="p-3 bg-neutral-200/60 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            {t(
              'میزکار عملیات سازمان (Operations Console): پایش بی‌وقفه زیرساخت، ارزیابی سیاست‌های خودکار و کنترل انتشار امن پرونده‌ها به متخصصان.',
              'Organization Operations Console: Real-time telemetry, automated policy enforcement, and secure case escalation.'
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
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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

      {/* SENTRY / ZABBIX OPERATIONS CONSOLE HEADER */}
      <div className="bg-neutral-900 text-white border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
            <Activity className="w-4 h-4" />
            <span>LogBridge // Operations Console (Sentry & Zabbix Architecture)</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-neutral-100">
            {t('کنسول عملیات و رصدپذیری سازمان', 'Organization Observability & Operations Console')}
          </h1>

          <p className="text-xs text-neutral-400 leading-relaxed text-justify">
            {t(
              'مدیریت یکپارچه رخدادها، پایش ایزوله منابع ۸گانه، اعمال سیاست‌های خودکار، تنظیم درگاه‌های ارتباطی و تایید امن پرونده‌ها برای شبکه متخصصان.',
              'Unified incident management, 8 decoupled telemetry domains, automated policies, connector integrations, and secure expert dispatch.'
            )}
          </p>
        </div>

        {/* Organization Selector and Help Button */}
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
              <span>{currentOrg.connectedSources} Connected Sources</span>
              <span className="text-emerald-400">{incidents.length} Incidents</span>
            </div>
          </div>

          <button
            onClick={() => setIsHelpOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition cursor-pointer self-stretch justify-center"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>{t('راهنمای کنسول عملیات (پاسخ ۵ پرسش)', 'Operations Console Help')}</span>
          </button>
        </div>
      </div>

      {/* OPERATIONS NAVIGATION TABS */}
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
          <span>{t('داشبورد و منابع', 'Overview & Domains')}</span>
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
          <span>{t('مدیریت رخدادها', 'Incident Triage')}</span>
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
          <span>{t('کاوشگر زنده لاگ‌ها', 'Live Log Viewer')}</span>
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
          <span>{t('موتور سیاست‌ها', 'Policy Engine')}</span>
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
          onClick={() => setActiveOpsTab('expert_requests')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeOpsTab === 'expert_requests'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{t('درخواست‌ها و پروپوزال‌های متخصص', 'Expert Requests & Proposals')}</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
            {expertRequests.length}
          </span>
        </button>

        <button
          onClick={() => setActiveOpsTab('integrations')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeOpsTab === 'integrations'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Webhook className="w-4 h-4" />
          <span>{t('اتصالات و اینتگریشن‌ها', 'Integrations')}</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-neutral-200 dark:bg-neutral-700">
            {integrations.filter((i) => i.status === 'active').length} Active
          </span>
        </button>

        <button
          onClick={() => setActiveOpsTab('settings')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ml-auto ${
            activeOpsTab === 'settings'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>{t('تنظیمات و دسترسی‌ها', 'Access & Settings')}</span>
        </button>
      </div>

      {/* 8 TECHNICAL SOURCES QUICK-NAV PILL BAR */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 px-1">
          <span className="font-semibold">
            {t('پایش مجزا و تفکیک‌شده منابع ۸گانه فنی:', 'Decoupled Technical Domains Monitoring:')}
          </span>
          <span className="text-[11px] font-mono">
            {t('انتخاب هر منبع صفحه اختصاصی آن را با لاگ‌ها و سیاست‌های ایزوله باز می‌کند', 'Select domain for isolated telemetry and policies')}
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORY_DEFINITIONS.map((cat) => {
            const Icon = CATEGORY_ICON_MAP[cat.id] || Globe;
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

      {/* SUBTAB 1: OVERVIEW & 3D TOPOLOGY */}
      {activeOpsTab === 'overview' && (
        <div className="space-y-6">
          {/* Top KPI Cards */}
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
                {expertRequests.filter((r) => r.status === 'in_collaboration' || r.status === 'approved_for_sharing').length}
              </div>
              <span className="text-[11px] text-neutral-500">Sanitized & Dispatched</span>
            </div>
          </div>

          {/* SIGNATURE 3D LOG ANIMATION & TOPOLOGY CARD */}
          <div className="p-6 rounded-3xl bg-[#171719] text-[#EDEDEF] border border-[#2E2A2D] shadow-2xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2E2A2D] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="font-bold text-sm text-[#EDEDEF]">
                    {t('پویانمایی ۳بعدی هسته لاگ و خطوط انتقال داده (Signature 3D Log Animation)', 'Signature 3D Log Character Core & Conduit Streams')}
                  </h3>
                </div>
                <p className="text-xs text-[#9E9B9F] mt-1">
                  {t(
                    'هسته هندسی لاگ با خطوط انتقال داده و ذرات بسته‌ها. می‌توانید با درگ ماوس زاویه دوربین را بچرخانید و وضعیت پایش هر دامنه را بررسی کنید.',
                    'Rotating 3D central log character core with entering/leaving particle stream conduits. Drag to inspect.'
                  )}
                </p>
              </div>

              {/* View Mode Toggle & Telemetry Badges */}
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#292426] p-1 rounded-xl border border-[#2E2A2D] text-xs">
                  <button
                    onClick={() => setVisMode('signature_3d')}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      visMode === 'signature_3d'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-[#9E9B9F] hover:text-white'
                    }`}
                  >
                    {t('هسته لاگ ۳بعدی', '3D Log Core')}
                  </button>
                  <button
                    onClick={() => setVisMode('topology_3d')}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      visMode === 'topology_3d'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-[#9E9B9F] hover:text-white'
                    }`}
                  >
                    {t('توپولوژی گره‌ها', 'Node Topology')}
                  </button>
                </div>

                <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-[#9E9B9F]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Healthy
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> Warning
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-400" /> Critical
                  </span>
                </div>
              </div>
            </div>

            {visMode === 'signature_3d' ? (
              <Signature3DLogAnimation
                variant="monitoring"
                onSelectDomain={(dom: string) => setActiveCategory(dom as any)}
              />
            ) : (
              <Interactive3DTopology
                variant="monitoring"
                onSelectCategory={(cat) => setActiveCategory(cat)}
              />
            )}
          </div>

          {/* 5 PRIMARY MONITORING DOMAINS GRID */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-[#EDEDEF]">
                  {t('پایش تفکیک‌شده حوزه‌های پنج‌گانه فنی سازمان', 'Decoupled 5 Primary Technical Domains')}
                </h3>
                <p className="text-xs text-[#9E9B9F]">
                  {t(
                    'هر دامنه فنی دارای صفحه اختصاصی، لاگ‌های ایزوله، شاخص‌های سلامت و قوانین ماشه مستقل است.',
                    'Each technical domain provides dedicated observability, live logs, resource indicators, and policies.'
                  )}
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">5 Domains Operational</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {MAIN_DOMAIN_DEFINITIONS.map((dom) => {
                const Icon = CATEGORY_ICON_MAP[dom.id] || Layout;
                const metrics = CATEGORY_METRICS_DATA[dom.id] || [];
                const firstMetric = metrics[0];
                const isCritical = dom.defaultHealth === 'critical';
                const isWarning = dom.defaultHealth === 'warning';
                const isPermitted = canAccess('domain:' + dom.id);

                return (
                  <div
                    key={dom.id}
                    onClick={() => setActiveCategory(dom.id)}
                    className="p-5 rounded-2xl bg-[#292426] border border-[#2E2A2D] shadow-md hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-[#343033] text-[#EDEDEF] group-hover:text-emerald-400 transition">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-[#EDEDEF] group-hover:text-emerald-400 transition">
                              {dom.title[lang]}
                            </h4>
                            <span className="text-[10px] text-[#9E9B9F] font-mono">
                              {dom.id}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                            isCritical
                              ? 'bg-rose-500/15 text-rose-400 border border-rose-500/20'
                              : isWarning
                              ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20'
                              : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                          }`}
                        >
                          ● {dom.defaultHealth}
                        </span>
                      </div>

                      <p className="text-xs text-[#9E9B9F] line-clamp-2 leading-relaxed">
                        {dom.subtitle[lang]}
                      </p>

                      {/* Subcomponents Tags */}
                      <div className="flex flex-wrap gap-1">
                        {dom.subComponents.slice(0, 3).map((sub, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#343033] text-[#9E9B9F]"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      {firstMetric && (
                        <div className="p-2.5 rounded-xl bg-[#343033] flex items-center justify-between text-xs font-mono">
                          <span className="text-[#9E9B9F] text-[11px] truncate max-w-[110px]">
                            {firstMetric.label[lang]}:
                          </span>
                          <span
                            className={`font-bold ${
                              firstMetric.isCritical
                                ? 'text-rose-400'
                                : firstMetric.isWarning
                                ? 'text-amber-400'
                                : 'text-emerald-400'
                            }`}
                          >
                            {firstMetric.value} {firstMetric.unit || ''}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-[#343033] flex items-center justify-between text-xs font-bold text-emerald-400">
                      <span className="text-[11px]">
                        {isPermitted ? t('مدیریت و پایش', 'Manage & Monitor') : t('مشاهده ناظر', 'Audited View')}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: INCIDENTS */}
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

      {/* SUBTAB 3: LIVE LOG VIEWER */}
      {activeOpsTab === 'logs' && (
        <div className="p-6 rounded-3xl bg-[#171719] text-[#EDEDEF] border border-[#2E2A2D] shadow-2xl space-y-4 font-mono">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-[#2E2A2D] pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-sm text-[#EDEDEF]">
                LogBridge Structured Live Log Ingestion Stream
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800">
                ZERO-LEAK ACTIVE
              </span>
            </div>

            {/* Filter Controls Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {/* Search Query */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('جستجو در پیام، شناسه یا کورلیشن...', 'Search msg, correlation, host...')}
                  value={logSearchQuery}
                  onChange={(e) => setLogSearchQuery(e.target.value)}
                  className="bg-[#292426] text-[#EDEDEF] px-3 py-1.5 rounded-xl border border-[#2E2A2D] text-xs placeholder:text-[#9E9B9F] focus:outline-none focus:border-emerald-500 w-44 sm:w-56"
                />
              </div>

              {/* Domain Filter */}
              <select
                value={domainFilter}
                onChange={(e) => setDomainFilter(e.target.value)}
                className="bg-[#292426] text-[#EDEDEF] px-2.5 py-1.5 rounded-xl border border-[#2E2A2D] text-xs"
              >
                <option value="ALL">{t('تمامی دامنه‌ها', 'All Domains (5)')}</option>
                <option value="application">1. Application & Software</option>
                <option value="infrastructure">2. Infrastructure & Runtime</option>
                <option value="database_storage">3. Database & Storage</option>
                <option value="network">4. Network & Connectivity</option>
                <option value="hardware_security">5. Hardware & Security</option>
              </select>

              {/* Severity Filter */}
              <select
                value={logFilter}
                onChange={(e) => setLogFilter(e.target.value as any)}
                className="bg-[#292426] text-[#EDEDEF] px-2.5 py-1.5 rounded-xl border border-[#2E2A2D] text-xs"
              >
                <option value="ALL">All Levels</option>
                <option value="CRITICAL">CRITICAL</option>
                <option value="ERROR">ERROR</option>
                <option value="WARNING">WARNING</option>
                <option value="INFO">INFO</option>
              </select>

              {/* Pause/Resume Stream */}
              <button
                onClick={() => setIsStreamPaused(!isStreamPaused)}
                className="px-3 py-1.5 rounded-xl bg-[#292426] hover:bg-[#343033] border border-[#2E2A2D] text-[#EDEDEF] flex items-center gap-1.5 cursor-pointer"
              >
                {isStreamPaused ? <Play className="w-3 h-3 text-emerald-400" /> : <Pause className="w-3 h-3 text-amber-400" />}
                <span>{isStreamPaused ? t('ادامه جریان', 'Resume') : t('توقف موقت', 'Pause')}</span>
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="py-2 border-b border-[#2E2A2D] text-[#9E9B9F] text-[11px] grid grid-cols-12 gap-2">
            <span className="col-span-2">TIMESTAMP</span>
            <span className="col-span-1">LEVEL</span>
            <span className="col-span-2">DOMAIN // HOST</span>
            <span className="col-span-2">SERVICE // CORRELATION</span>
            <span className="col-span-4">MESSAGE</span>
            <span className="col-span-1 text-right rtl:text-left">ACTION</span>
          </div>

          {/* Logs Rows */}
          <div className="space-y-1.5 text-xs text-[#EDEDEF] max-h-[500px] overflow-y-auto pr-2 divide-y divide-[#2E2A2D]/40">
            {filteredLogs.length === 0 ? (
              <div className="text-center py-10 text-[#9E9B9F]">
                {t('لاگی با فیلترهای انتخابی یافت نشد.', 'No logs matching current filters.')}
              </div>
            ) : (
              filteredLogs.map((log) => (
                <div
                  key={log.id}
                  onClick={() => setInspectedLogRecord(log)}
                  className="grid grid-cols-12 gap-2 py-2 hover:bg-[#292426]/70 rounded-lg px-1.5 transition cursor-pointer items-center"
                >
                  <span className="col-span-2 text-[#9E9B9F] tabular-nums text-[11px] truncate">
                    {log.timestamp}
                  </span>

                  <span className="col-span-1">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase inline-block ${
                        log.severity === 'CRITICAL'
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : log.severity === 'ERROR'
                          ? 'bg-rose-950/60 text-rose-400'
                          : log.severity === 'WARNING'
                          ? 'bg-amber-950 text-amber-400'
                          : 'bg-[#343033] text-[#9E9B9F]'
                      }`}
                    >
                      {log.severity}
                    </span>
                  </span>

                  <span className="col-span-2 text-[11px] truncate text-[#9E9B9F]">
                    <span className="text-emerald-400 font-bold block">{log.domain}</span>
                    <span className="text-[10px]">{log.host || log.source}</span>
                  </span>

                  <span className="col-span-2 text-[11px] truncate">
                    <span className="text-neutral-200 block truncate">{log.service}</span>
                    <span className="text-[10px] text-[#9E9B9F] truncate block">
                      {log.correlationId || log.eventId}
                    </span>
                  </span>

                  <span className="col-span-4 text-[11px] text-[#EDEDEF] truncate">
                    {log.message}
                    {log.relatedIncidentId && (
                      <span className="ml-2 rtl:mr-2 px-1 py-0.2 rounded bg-rose-950 text-rose-300 text-[9px] border border-rose-800">
                        {log.relatedIncidentId}
                      </span>
                    )}
                  </span>

                  <span className="col-span-1 text-right rtl:text-left text-[11px] text-emerald-400 hover:text-white">
                    {t('بررسی', 'Inspect')}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Log Inspector Modal */}
          {inspectedLogRecord && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-[#171719] border border-[#2E2A2D] rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-[#2E2A2D] pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-sm text-[#EDEDEF]">
                      Event Detail: {inspectedLogRecord.eventId}
                    </span>
                  </div>
                  <button
                    onClick={() => setInspectedLogRecord(null)}
                    className="p-1 rounded-lg bg-[#292426] hover:bg-[#343033] text-[#9E9B9F] hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-[#292426] border border-[#2E2A2D]">
                    <span className="text-[#9E9B9F] block text-[10px]">CORRELATION ID:</span>
                    <span className="text-emerald-400 font-bold">{inspectedLogRecord.correlationId || 'N/A'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#292426] border border-[#2E2A2D]">
                    <span className="text-[#9E9B9F] block text-[10px]">DOMAIN // SERVICE:</span>
                    <span className="text-[#EDEDEF]">{inspectedLogRecord.domain} // {inspectedLogRecord.service}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#292426] border border-[#2E2A2D]">
                    <span className="text-[#9E9B9F] block text-[10px]">HOST / NODE:</span>
                    <span className="text-[#EDEDEF]">{inspectedLogRecord.host || 'cluster-core'}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#292426] border border-[#2E2A2D]">
                    <span className="text-[#9E9B9F] block text-[10px]">PROCESSING PIPELINE:</span>
                    <span className="text-emerald-400 font-bold">{inspectedLogRecord.processingStatus.toUpperCase()}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#292426] border border-[#2E2A2D] space-y-1">
                  <span className="text-[#9E9B9F] text-[10px] block">PAYLOAD MESSAGE:</span>
                  <p className="text-[#EDEDEF] leading-relaxed break-all font-sans">{inspectedLogRecord.message}</p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-[#2E2A2D] overflow-x-auto max-h-48 text-[11px] text-emerald-300">
                  <pre>{JSON.stringify(inspectedLogRecord, null, 2)}</pre>
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-[#2E2A2D]">
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(JSON.stringify(inspectedLogRecord, null, 2));
                      setSuccessNotice(lang === 'fa' ? 'لاگ در کلیپ‌بورد کپی شد.' : 'Log payload copied to clipboard.');
                      setTimeout(() => setSuccessNotice(null), 3000);
                    }}
                    className="px-4 py-1.5 rounded-xl bg-[#292426] hover:bg-[#343033] text-[#EDEDEF] cursor-pointer"
                  >
                    {t('کپی JSON لاگ', 'Copy JSON')}
                  </button>
                  <button
                    onClick={() => setInspectedLogRecord(null)}
                    className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                  >
                    {t('بستن', 'Close')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUBTAB 4: POLICY ENGINE */}
      {activeOpsTab === 'policies' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-sm text-[#EDEDEF]">
                {t('موتور قوانین و سیاست‌های عملیاتی (15 Operational Policies)', 'Automated Operational Policy Rules (15 Policies)')}
              </h3>
              <p className="text-xs text-[#9E9B9F]">
                {t('تفکیک‌شده بر اساس حوزه‌های پنج‌گانه فنی همراه با قابلیت اجرای تست شبیه‌سازی ماشه', 'Grouped across 5 technical domains with safe simulation evaluation')}
              </p>
            </div>

            {/* Policy Domain Filter Tabs */}
            <div className="flex items-center gap-1 bg-[#292426] p-1 rounded-xl border border-[#2E2A2D] overflow-x-auto text-xs">
              <button
                onClick={() => setPolicyDomainFilter('ALL')}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer whitespace-nowrap ${
                  policyDomainFilter === 'ALL' ? 'bg-emerald-600 text-white' : 'text-[#9E9B9F] hover:text-white'
                }`}
              >
                {t('همه (۱۵)', 'All (15)')}
              </button>
              <button
                onClick={() => setPolicyDomainFilter('application')}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer whitespace-nowrap ${
                  policyDomainFilter === 'application' ? 'bg-emerald-600 text-white' : 'text-[#9E9B9F] hover:text-white'
                }`}
              >
                {t('نرم‌افزار (۳)', 'App (3)')}
              </button>
              <button
                onClick={() => setPolicyDomainFilter('infrastructure')}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer whitespace-nowrap ${
                  policyDomainFilter === 'infrastructure' ? 'bg-emerald-600 text-white' : 'text-[#9E9B9F] hover:text-white'
                }`}
              >
                {t('زیرساخت (۳)', 'Infra (3)')}
              </button>
              <button
                onClick={() => setPolicyDomainFilter('database_storage')}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer whitespace-nowrap ${
                  policyDomainFilter === 'database_storage' ? 'bg-emerald-600 text-white' : 'text-[#9E9B9F] hover:text-white'
                }`}
              >
                {t('دیتابیس (۳)', 'DB (3)')}
              </button>
              <button
                onClick={() => setPolicyDomainFilter('network')}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer whitespace-nowrap ${
                  policyDomainFilter === 'network' ? 'bg-emerald-600 text-white' : 'text-[#9E9B9F] hover:text-white'
                }`}
              >
                {t('شبکه (۳)', 'Net (3)')}
              </button>
              <button
                onClick={() => setPolicyDomainFilter('hardware_security')}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer whitespace-nowrap ${
                  policyDomainFilter === 'hardware_security' ? 'bg-emerald-600 text-white' : 'text-[#9E9B9F] hover:text-white'
                }`}
              >
                {t('سخت‌افزار/امنیت (۳)', 'HW/Sec (3)')}
              </button>
            </div>
          </div>

          {/* Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {policies
              .filter((pol) => {
                if (policyDomainFilter === 'ALL') return true;
                return pol.domain === policyDomainFilter || pol.category === policyDomainFilter;
              })
              .map((pol) => (
                <div
                  key={pol.id}
                  className="p-5 rounded-2xl bg-[#292426] border border-[#2E2A2D] shadow-md space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#343033] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-400">
                          {pol.id}
                        </span>
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#343033] text-neutral-300">
                          {pol.domain || pol.category}
                        </span>
                      </div>
                      <button
                        onClick={() => togglePolicy(pol.id)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                          pol.enabled
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-neutral-800 text-neutral-500 border border-neutral-700'
                        }`}
                      >
                        {pol.enabled ? 'ACTIVE' : 'DISABLED'}
                      </button>
                    </div>

                    <h4 className="font-bold text-xs text-[#EDEDEF]">
                      {pol.name[lang]}
                    </h4>
                    <p className="text-[11px] text-[#9E9B9F] leading-relaxed">
                      {pol.description[lang]}
                    </p>

                    <div className="space-y-1 text-xs font-mono">
                      <div className="p-2 rounded-lg bg-[#171719] text-[#EDEDEF] text-[11px] border border-[#2E2A2D]">
                        <span className="text-[#9E9B9F]">TARGET: </span>
                        {pol.targetComponent}
                      </div>
                      <div className="p-2 rounded-lg bg-[#171719] text-rose-300 text-[11px] border border-[#2E2A2D]">
                        <span className="text-[#9E9B9F]">TRIGGER: </span>
                        {pol.triggerCondition}
                      </div>
                      <div className="p-2 rounded-lg bg-[#171719] text-emerald-300 text-[11px] border border-[#2E2A2D]">
                        <span className="text-[#9E9B9F]">ACTION: </span>
                        {pol.action[lang]}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#9E9B9F] pt-1">
                      <span>Threshold: {pol.configuredThreshold}</span>
                      <span>Interval: {pol.evaluationInterval}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#343033] flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#9E9B9F]">
                      Executions: <strong className="text-emerald-400">{pol.executionCount}</strong>
                    </span>

                    <button
                      onClick={() => {
                        const res = simulatePolicyEvaluation(pol.id);
                        setSuccessNotice(`⚡ ${res.message} — ${res.actionResult}`);
                        setTimeout(() => setSuccessNotice(null), 5000);
                      }}
                      className="px-3 py-1 rounded-xl bg-[#343033] hover:bg-emerald-600 text-[#EDEDEF] hover:text-white text-[11px] font-bold transition cursor-pointer"
                    >
                      {t('تست شبیه‌سازی ماشه', 'Simulate Trigger')}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* SUBTAB 5: ALERT CENTER */}
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

      {/* SUBTAB 6: EXPERT REQUEST MANAGEMENT & PROPOSALS (WORKFLOW LINK) */}
      {activeOpsTab === 'expert_requests' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                {t('مدیریت درخواست‌های ارجاع به متخصص و تایید انتشار پرونده', 'Expert Request Management & Case Sharing Approval')}
              </h3>
              <p className="text-xs text-neutral-500">
                {t(
                  'پرونده‌ها تنها پس از بازبینی سانسور و تایید صریح مدیر سازمان برای متخصصان قابل رویت خواهند شد.',
                  'Cases become visible to experts only after explicit approval by Organization Admin. Zero-leak compliance.'
                )}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold">
                {t('نقش جاری شما:', 'Current Role:')} {currentRole === 'org_admin' ? 'Organization Admin (مجاز)' : currentRole}
              </span>
            </div>
          </div>

          {/* Requests List with Approval / Status */}
          <div className="space-y-4">
            {expertRequests.map((req) => {
              const reqProposals = proposals.filter((p) => p.requestId === req.id);
              const isApproved = req.status === 'approved_for_sharing' || req.status === 'proposals_received' || req.status === 'in_collaboration';

              return (
                <div
                  key={req.id}
                  className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          {req.requestId}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono">
                          (Ticket: {req.incidentTicket})
                        </span>
                        <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                          {req.incidentTitle}
                        </span>
                      </div>
                      <span className="text-xs text-neutral-500 font-medium">
                        Domain: {req.technicalDomain} | Budget: {req.budgetPreference}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold ${
                          req.status === 'in_collaboration'
                            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                            : req.status === 'approved_for_sharing'
                            ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400'
                            : req.status === 'proposals_received'
                            ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                            : 'bg-neutral-300 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        {req.status === 'in_collaboration'
                          ? t('در حال همکاری با متخصص', 'In Collaboration')
                          : req.status === 'approved_for_sharing'
                          ? t('تایید شده برای انتشار', 'Approved for Sharing')
                          : req.status === 'proposals_received'
                          ? t('پیشنهادات دریافت شد', 'Proposals Received')
                          : t('پیش‌نویس / نیازمند تایید مدیر', 'Draft / Pending Approval')}
                      </span>

                      {!isApproved && (
                        <button
                          onClick={() => handleApproveCaseSharing(req.id)}
                          className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                          title="تایید انتشار پرونده برای متخصصان"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{t('تایید انتشار برای متخصصان', 'Approve Sharing')}</span>
                        </button>
                      )}

                      {req.status === 'in_collaboration' && (
                        <button
                          onClick={() => {
                            setActiveWorkspace('expert');
                            setActiveProjectId('proj-01');
                          }}
                          className="px-3.5 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-emerald-600 hover:bg-neutral-800 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{t('ورود به فضای همکاری', 'Open Collaboration')}</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Sanitized Evidence Preview */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-500" />
                      <span>{t('شواهد فنی سانسورشده (قابل رویت برای متخصص):', 'Sanitized Technical Evidence (Shared with Experts):')}</span>
                    </span>
                    <pre className="p-3 rounded-xl bg-neutral-200/50 dark:bg-neutral-950 font-mono text-[11px] text-neutral-800 dark:text-neutral-300 border border-neutral-300/60 dark:border-neutral-800 overflow-x-auto whitespace-pre-wrap">
                      {req.sanitizedEvidence}
                    </pre>
                  </div>

                  {/* Proposals Received for this Request */}
                  <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{t('پیشنهادهای دریافت شده از متخصصان:', 'Proposals from Certified Experts:')}</span>
                      </span>
                      <span className="text-neutral-500 font-mono">{reqProposals.length} Proposals</span>
                    </div>

                    {reqProposals.length === 0 ? (
                      <div className="p-4 rounded-xl bg-neutral-200/40 dark:bg-neutral-800/40 text-xs text-neutral-500 text-center">
                        {isApproved
                          ? t('پرونده در شبکه منتشر شده است. منتظر ارسال پیشنهاد متخصصان باشید.', 'Case shared with network. Awaiting expert proposals.')
                          : t('پس از تایید انتشار، متخصصان می‌توانند پیشنهاد ارسال کنند.', 'Approve case sharing above to allow expert proposals.')}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {reqProposals.map((prop) => (
                          <div
                            key={prop.id}
                            className={`p-4 rounded-2xl border text-xs space-y-3 ${
                              prop.status === 'accepted'
                                ? 'bg-emerald-500/10 border-emerald-500/40'
                                : 'bg-neutral-200/60 dark:bg-neutral-800/60 border-neutral-300 dark:border-neutral-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <img
                                  src={prop.expertAvatar}
                                  alt={prop.expertName}
                                  className="w-7 h-7 rounded-full object-cover"
                                />
                                <div>
                                  <h5 className="font-bold text-neutral-900 dark:text-neutral-100">
                                    {prop.expertName}
                                  </h5>
                                  <span className="text-[10px] text-neutral-500">
                                    {prop.expertTitle[lang]}
                                  </span>
                                </div>
                              </div>

                              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                                {prop.proposedRate}
                              </span>
                            </div>

                            <p className="text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                              {prop.coverNote[lang]}
                            </p>

                            <div className="flex items-center justify-between pt-2 border-t border-neutral-300/60 dark:border-neutral-700">
                              <span className="text-[11px] text-neutral-500">
                                Time: {prop.estimatedHours}
                              </span>

                              {prop.status === 'accepted' ? (
                                <span className="px-2 py-0.5 rounded-lg bg-emerald-500 text-white font-bold text-[10px]">
                                  ✓ {t('پیشنهاد پذیرفته شد', 'Accepted')}
                                </span>
                              ) : (
                                <button
                                  onClick={() => handleAcceptProposal(prop.id)}
                                  className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] cursor-pointer"
                                >
                                  {t('پذیرش پیشنهاد و شروع همکاری', 'Accept & Hire')}
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUBTAB 7: INTEGRATIONS */}
      {activeOpsTab === 'integrations' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                {t('درگاه‌های اتصال و اینتگریشن‌های سازمان (Connectors)', 'Integrations & External Ingestion Connectors')}
              </h3>
              <p className="text-xs text-neutral-500">
                {t(
                  'اتصال بی‌وقفه به سامانه‌های اعلام کشیک (PagerDuty/Slack) و عامل‌های استخراج تلمتری (Prometheus/Zabbix).',
                  'Seamless telemetry ingestion bridges and incident alerting channels.'
                )}
              </p>
            </div>

            {!canAccess('manage_integrations') && (
              <span className="px-3 py-1 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400 text-xs font-semibold">
                {t('مجوز ویرایش اینتگریشن تنها مخصوص مدیر سازمان است.', 'Read-only: Org Admin privilege required to alter connectors.')}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integrations.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400">
                        {item.type === 'slack' ? (
                          <MessageSquare className="w-4 h-4" />
                        ) : item.type === 'pagerduty' ? (
                          <Bell className="w-4 h-4" />
                        ) : item.type === 'prometheus' ? (
                          <Activity className="w-4 h-4" />
                        ) : (
                          <Webhook className="w-4 h-4" />
                        )}
                      </div>
                      <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
                        {item.name}
                      </h4>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.status === 'active'
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                          : 'bg-neutral-300 dark:bg-neutral-800 text-neutral-500'
                      }`}
                    >
                      {item.status.toUpperCase()}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-950 p-2 rounded-xl">
                    {item.configSummary}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-neutral-500">
                    Sync: {item.lastSync}
                  </span>

                  <button
                    disabled={!canAccess('manage_integrations')}
                    onClick={() => toggleIntegration(item.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                      item.status === 'active'
                        ? 'bg-neutral-200 dark:bg-neutral-800 hover:bg-rose-500/15 hover:text-rose-600 text-neutral-700 dark:text-neutral-300'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {item.status === 'active' ? t('قطع موقت', 'Disconnect') : t('اتصال مجدد', 'Connect')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 8: SETTINGS & ACCESS */}
      {activeOpsTab === 'settings' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                {t('مدیریت اعضای تیم و کنترل دسترسی‌های نقش‌محور (RBAC)', 'Team Members & Role-Based Access Control')}
              </h3>
              <p className="text-xs text-neutral-500">
                {t(
                  'تعریف اعضای سازمان، تخصیص نقش‌های Org Admin و IT Operator، مدیریت کلیدهای وب‌سرویس و ردگیری امنیت.',
                  'Define team access levels, API authorization tokens, and security audit logs.'
                )}
              </p>
            </div>

            {canAccess('manage_org_settings') && (
              <button
                onClick={() => setShowAddMemberModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>{t('افزودن عضو جدید', 'Add Member')}</span>
              </button>
            )}
          </div>

          {/* Members Table */}
          <div className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4">
            <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
              {t('اعضای فعال سازمان با سطوح دسترسی جاری:', 'Active Organization Members:')}
            </h4>

            <div className="space-y-2">
              {orgMembers.map((mem) => (
                <div
                  key={mem.id}
                  className="p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={mem.avatar}
                      alt={mem.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-bold text-neutral-900 dark:text-neutral-100">{mem.name}</h5>
                      <span className="text-neutral-500 text-[11px] font-mono">{mem.email}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold ${
                        mem.role === 'org_admin'
                          ? 'bg-purple-500/15 text-purple-700 dark:text-purple-300'
                          : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                      }`}
                    >
                      {mem.role === 'org_admin' ? '👑 Organization Admin' : '🛠️ IT Operator'}
                    </span>
                    <span className="text-neutral-500 text-[11px]">
                      {t('آخرین فعالیت:', 'Active:')} {mem.lastActive}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & API Keys */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-emerald-500" />
                <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
                  {t('کلیدهای دسترسی API سازمانی (Ingestion Tokens)', 'Organization Ingestion Tokens')}
                </h4>
              </div>
              <p className="text-xs text-neutral-500">
                {t('استفاده در ایجنت‌های لاگین، کانتینرهای سایدکار و وب‌هوک‌های امنیتی.', 'Used by sidecars, fluentd, and agents to transmit telemetry securely.')}
              </p>
              <div className="p-2.5 rounded-xl bg-neutral-200/60 dark:bg-neutral-950 font-mono text-xs flex items-center justify-between">
                <span>lb_live_sec_token_948a****</span>
                <span className="text-emerald-500 text-[10px] font-bold">Active</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
                  {t('سیاست پیش‌فرض سانسور محرمانگی (Zero-Leak)', 'Zero-Leak Privacy Audit Policy')}
                </h4>
              </div>
              <p className="text-xs text-neutral-500">
                {t(
                  'تمامی متغیرهای Authorization، توکن‌های JWT و هش‌های پسورد قبل از ذخیره‌سازی ماسک می‌شوند.',
                  'All authorization headers, JWT tokens, and credentials undergo regex masking before disk persistence.'
                )}
              </p>
              <div className="text-xs text-emerald-600 font-bold">
                ✓ 100% RegEx Sanitization Guard Active
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Member Modal */}
      {showAddMemberModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-800 text-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h4 className="font-bold text-sm text-neutral-100">
                {t('افزودن عضو جدید به سازمان', 'Add New Organization Member')}
              </h4>
              <button
                onClick={() => setShowAddMemberModal(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-3">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  {t('نام و نام خانوادگی:', 'Full Name:')}
                </label>
                <input
                  type="text"
                  required
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                  placeholder="e.g. آرین نوری"
                  className="w-full p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  {t('آدرس ایمیل سازمانی:', 'Corporate Email:')}
                </label>
                <input
                  type="email"
                  required
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                  placeholder="e.g. a.nouri@company.ir"
                  className="w-full p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  {t('نقش سازمانی و سطح دسترسی:', 'Assigned Role:')}
                </label>
                <select
                  value={newMemberRole}
                  onChange={(e) => setNewMemberRole(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="it_operator">IT Manager / Operator (رصد و تریژ رخدادها)</option>
                  <option value="org_admin">Organization Admin (دسترسی کامل مدیریتی)</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowAddMemberModal(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                >
                  {t('انصراف', 'Cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                >
                  {t('ثبت و ارسال دعوت‌نامه', 'Confirm & Invite')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SPECIALIST REQUEST MODAL (FLOW FROM INCIDENT) */}
      {requestModalIncident && (
        <SpecialistRequestModal
          incident={requestModalIncident}
          onClose={() => setRequestModalIncident(null)}
          onSubmitSuccess={handleSpecialistSuccess}
        />
      )}

      {/* Contextual Help Drawer */}
      <ContextualHelpDrawer
        pageKey={activeCategory ? `monitoring_${activeCategory}` : activeOpsTab === 'overview' ? 'monitoring_overview' : activeOpsTab}
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
