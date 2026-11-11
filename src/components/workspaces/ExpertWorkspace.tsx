/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { INITIAL_EXPERTS } from '../../data/mockOpsData';
import { ContextualHelpDrawer } from '../common/ContextualHelpDrawer';
import {
  ExpertRequest,
  ExpertProposal,
  CollaborationProject,
  TechnicalCategory,
} from '../../types';
import {
  Briefcase,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Star,
  ShieldCheck,
  Send,
  FileCode,
  DollarSign,
  Award,
  Layers,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  User,
  Check,
  Lock,
  Sparkles,
  TrendingUp,
  FileText,
  Terminal,
  Activity,
  AlertCircle,
} from 'lucide-react';

export function ExpertWorkspace() {
  const {
    lang,
    t,
    expertRequests,
    proposals,
    submitProposal,
    collaborationProjects,
    activeProjectId,
    setActiveProjectId,
    sendCollaborationMessage,
    toggleMilestone,
    resolveProject,
    currentRole,
  } = useApp();

  const [activeExpertTab, setActiveExpertTab] = useState<
    'overview' | 'opportunities' | 'my_projects' | 'collaboration' | 'profile'
  >('overview');

  // Filter state for opportunities
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');
  const [opportunitySearch, setOpportunitySearch] = useState('');
  const [selectedCaseForProposal, setSelectedCaseForProposal] = useState<ExpertRequest | null>(null);

  // Proposal modal form state
  const [proposedRate, setProposedRate] = useState('۱,۴۰۰,۰۰۰ تومان / ساعت');
  const [estimatedHours, setEstimatedHours] = useState('۴ ساعت');
  const [proposalCoverNote, setProposalCoverNote] = useState('');
  const [proposedApproach, setProposedApproach] = useState('');
  const [proposalNotice, setProposalNotice] = useState<string | null>(null);

  // Collaboration Chat input state
  const [chatInputText, setChatInputText] = useState('');
  const [chatSnippet, setChatSnippet] = useState('');
  const [showSnippetInput, setShowSnippetInput] = useState(false);
  const [resolutionNotes, setResolutionNotes] = useState('');
  const [showResolveModal, setShowResolveModal] = useState(false);

  // Profile availability state
  const [isAvailableNow, setIsAvailableNow] = useState(true);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Logged-in Expert representation (defaulting to Expert #1)
  const currentExpert = INITIAL_EXPERTS[0];

  // Cases that are approved for sharing (Zero-leak privacy compliance)
  const availableCases = expertRequests.filter((req) => {
    const isApproved =
      req.status === 'approved_for_sharing' ||
      req.status === 'proposals_received' ||
      req.status === 'in_collaboration';

    if (!isApproved) return false;

    const matchesDomain =
      selectedDomain === 'ALL' || req.technicalDomain === selectedDomain;

    const matchesSearch =
      opportunitySearch.trim() === '' ||
      req.incidentTitle.toLowerCase().includes(opportunitySearch.toLowerCase()) ||
      req.problemDescription.toLowerCase().includes(opportunitySearch.toLowerCase()) ||
      req.requiredSkills.some((s) => s.toLowerCase().includes(opportunitySearch.toLowerCase()));

    return matchesDomain && matchesSearch;
  });

  const activeProject =
    collaborationProjects.find((p) => p.id === activeProjectId) ||
    collaborationProjects[0];

  const handleOpenProposalModal = (req: ExpertRequest) => {
    setSelectedCaseForProposal(req);
    setProposalCoverNote(
      lang === 'fa'
        ? `با تحلیل شواهد فنی پرونده ${req.incidentTicket}، علت اختلال مشخص است. می‌توانیم در اسرع وقت اقدام به اصلاح نماییم.`
        : `After reviewing the sanitized evidence for ${req.incidentTicket}, the root cause is identifiable. I propose the following remediation plan.`
    );
    setProposedApproach(
      lang === 'fa'
        ? '۱. تحلیل پروفایل مصرف منبع ۲. اعمال پچ بهینه‌سازی ۳. تست پایداری نهایی'
        : '1. Diagnostic tracing 2. Applying remediation patch 3. Stress testing verification'
    );
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCaseForProposal) return;

    submitProposal({
      requestId: selectedCaseForProposal.id,
      incidentTicket: selectedCaseForProposal.incidentTicket,
      caseTitle: selectedCaseForProposal.incidentTitle,
      expertId: currentExpert.id,
      expertName: currentExpert.name,
      expertAvatar: currentExpert.avatar,
      expertTitle: currentExpert.title,
      proposedRate,
      estimatedHours,
      coverNote: {
        fa: proposalCoverNote,
        en: proposalCoverNote,
      },
      proposedApproach: {
        fa: proposedApproach,
        en: proposedApproach,
      },
    });

    setProposalNotice(
      lang === 'fa'
        ? 'پیشنهاد شما با موفقیت برای سازمان ارسال شد. پس از تایید توسط سازمان، همکاری آغاز خواهد شد.'
        : 'Proposal submitted successfully! You will be notified once the organization approves it.'
    );
    setSelectedCaseForProposal(null);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInputText.trim() && !chatSnippet.trim()) return;
    if (!activeProject) return;

    sendCollaborationMessage(
      activeProject.id,
      chatInputText,
      chatSnippet.trim() ? chatSnippet : undefined
    );

    setChatInputText('');
    setChatSnippet('');
    setShowSnippetInput(false);
  };

  const handleResolveCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeProject || !resolutionNotes.trim()) return;

    resolveProject(activeProject.id, resolutionNotes);
    setShowResolveModal(false);
    setResolutionNotes('');
    setProposalNotice(
      lang === 'fa'
        ? 'پرونده رخداد با موفقیت به عنوان حل‌شده ثبت شد و گزارش فنی به سازمان تحویل گردید.'
        : 'Case marked resolved! Technical closure report submitted to the organization.'
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Privacy & Zero-Knowledge Guarantee Banner */}
      <div className="p-3 bg-neutral-200/60 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            {t(
              'میزکار تخصصی متخصصان مستقل (Expert Marketplace): شواهد فنی به‌صورت کاملاً ماسک‌شده (Zero-Leak) در دسترس قرار دارند.',
              'Expert Professional Marketplace: Sanitized dockets with zero organizational credential exposure.'
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold text-neutral-800 dark:text-neutral-200">
            {isAvailableNow
              ? t('وضعیت: آماده همکاری فوری (< ۱ ساعت)', 'Status: Immediate (< 1 hr)')
              : t('وضعیت: مشغول در پروژه', 'Status: Busy')}
          </span>
        </div>
      </div>

      {proposalNotice && (
        <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700 text-emerald-200 text-xs flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{proposalNotice}</span>
          </div>
          <button
            onClick={() => setProposalNotice(null)}
            className="text-emerald-400 hover:text-white text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* EXPERT WORKSPACE HERO & IDENTITY */}
      <div className="bg-neutral-900 text-white border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
            <Briefcase className="w-4 h-4" />
            <span>LogBridge // Expert Network & Talent Marketplace</span>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={currentExpert.avatar}
              alt={currentExpert.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-500 shadow-md shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-neutral-100">
                  {currentExpert.name}
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-white">
                  ✓ Verified
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                {currentExpert.title[lang]}
              </p>
            </div>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed text-justify">
            {t(
              'فضای متمرکز مشاوره فنی: بررسی رخدادهای بحرانی تاییدشده توسط سازمان‌ها، ارائه راهکارهای تخصصی، همکاری در بستر ایزوله و دریافت دستمزد قراردادی.',
              'Dedicated consulting hub: inspect verified incident dockets, submit competitive bids, collaborate securely, and get paid.'
            )}
          </p>
        </div>

        {/* Quick Stats Panel */}
        <div className="p-4 rounded-2xl bg-neutral-950/90 border border-neutral-800 space-y-3 min-w-[260px]">
          <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
            <span>{t('شاخص‌های حرفه‌ای شما:', 'Performance Metrics:')}</span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              {currentExpert.rating} ({currentExpert.reviewCount})
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] text-neutral-500 block">{t('پرونده‌های موفق', 'Solved Cases')}</span>
              <span className="text-sm font-bold font-mono text-emerald-400">
                {currentExpert.completedCases}
              </span>
            </div>

            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] text-neutral-500 block">{t('نرخ ساعتی پایه', 'Base Rate')}</span>
              <span className="text-xs font-bold text-neutral-200">
                {currentExpert.hourlyRate.split('/')[0]}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsHelpOpen(true)}
            className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('راهنمای میزکار متخصص', 'Expert Workspace Guide')}</span>
          </button>
        </div>
      </div>

      {/* EXPERT WORKSPACE TABS */}
      <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveExpertTab('overview')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeExpertTab === 'overview'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>{t('نمای کلی فعالیت من', 'My Overview')}</span>
        </button>

        <button
          onClick={() => setActiveExpertTab('opportunities')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeExpertTab === 'opportunities'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>{t('کشف فرصت‌های فنی و رخدادها', 'Find Opportunities')}</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
            {availableCases.length}
          </span>
        </button>

        <button
          onClick={() => setActiveExpertTab('my_projects')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeExpertTab === 'my_projects'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>{t('پروژه‌ها و قراردادهای من', 'My Projects')}</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-neutral-200 dark:bg-neutral-700">
            {collaborationProjects.length}
          </span>
        </button>

        <button
          onClick={() => setActiveExpertTab('collaboration')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
            activeExpertTab === 'collaboration'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>{t('فضای همکاری زنده (Collaboration)', 'Collaboration Room')}</span>
          {activeProject && (
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          )}
        </button>

        <button
          onClick={() => setActiveExpertTab('profile')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ml-auto ${
            activeExpertTab === 'profile'
              ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
          }`}
        >
          <User className="w-4 h-4" />
          <span>{t('پروفایل و نرخ‌ها', 'Profile & Rates')}</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeExpertTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2">
              <span className="text-xs text-neutral-500 block">{t('قراردادهای جاری و فعال', 'Active Contracts')}</span>
              <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-100">
                {collaborationProjects.filter((p) => p.status === 'in_collaboration').length}
              </div>
              <span className="text-[11px] text-emerald-600 font-medium">Under SLA Collaboration</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2">
              <span className="text-xs text-neutral-500 block">{t('پروپوزال‌های ارسال‌شده', 'Submitted Proposals')}</span>
              <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-100">
                {proposals.length}
              </div>
              <span className="text-[11px] text-neutral-500">Awaiting Client Review</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2">
              <span className="text-xs text-neutral-500 block">{t('فرصت‌های جدید منطبق', 'Matching Opportunities')}</span>
              <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                {availableCases.length}
              </div>
              <span className="text-[11px] text-neutral-500">Approved for Sharing</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-2">
              <span className="text-xs text-neutral-500 block">{t('درآمد ماه جاری', 'Monthly Earnings')}</span>
              <div className="text-xl font-bold font-mono text-neutral-900 dark:text-neutral-100">
                ۲۴,۲۰۰,۰۰۰ <span className="text-xs font-normal">تومان</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-medium">+18% vs Last Month</span>
            </div>
          </div>

          {/* Active Contract Quick Card */}
          {activeProject && (
            <div className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-emerald-500/40 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {activeProject.incidentTicket}
                    </span>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                      {activeProject.title}
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-500">
                    {t('کارفرما:', 'Client:')} {activeProject.organizationName} ({activeProject.organizationIndustry})
                  </span>
                </div>

                <button
                  onClick={() => setActiveExpertTab('collaboration')}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t('ورود به اتاق گفت‌وگو و همکاری', 'Open Collaboration Room')}</span>
                </button>
              </div>

              {/* Progress Milestones Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-neutral-600 dark:text-neutral-300">
                    {t('پیشرفت مایلستون‌های پرونده:', 'Milestones Progress:')}
                  </span>
                  <span className="font-mono text-emerald-600 font-bold">
                    {activeProject.milestones.filter((m) => m.completed).length} / {activeProject.milestones.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  {activeProject.milestones.map((m, idx) => (
                    <div
                      key={m.id}
                      className={`p-2.5 rounded-xl border text-[11px] flex items-center gap-2 ${
                        m.completed
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300'
                          : 'bg-neutral-200/50 dark:bg-neutral-800/60 border-neutral-300 dark:border-neutral-700 text-neutral-500'
                      }`}
                    >
                      <span className="font-mono font-bold">{idx + 1}.</span>
                      <span className="truncate">{m.title}</span>
                      {m.completed && <Check className="w-3.5 h-3.5 text-emerald-500 ml-auto shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Recommended Opportunities Teaser */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                {t('فرصت‌های فنی منطبق با مهارت‌های شما', 'Recommended Opportunities for You')}
              </h3>
              <button
                onClick={() => setActiveExpertTab('opportunities')}
                className="text-xs text-emerald-600 hover:underline font-bold"
              >
                {t('مشاهده همه فرصت‌ها →', 'View All Opportunities →')}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableCases.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        {item.incidentTicket}
                      </span>
                      <span className="text-xs font-bold font-mono text-neutral-800 dark:text-neutral-200">
                        {item.budgetPreference}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
                      {item.incidentTitle}
                    </h4>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
                      {item.problemDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-neutral-500">
                      Domain: {item.technicalDomain}
                    </span>
                    <button
                      onClick={() => handleOpenProposalModal(item)}
                      className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-emerald-600 hover:bg-neutral-800 font-bold text-[11px] cursor-pointer"
                    >
                      {t('ارسال پروپوزال', 'Submit Proposal')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: FIND OPPORTUNITIES / AVAILABLE CASES */}
      {activeExpertTab === 'opportunities' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-100/90 dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
            <div className="flex items-center gap-3 flex-1 max-w-md relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 rtl:left-auto rtl:right-3 pointer-events-none" />
              <input
                type="text"
                placeholder={t('جستجو در عنوان پرونده، شرح مشکل یا مهارت‌ها...', 'Search cases, keywords or skills...')}
                value={opportunitySearch}
                onChange={(e) => setOpportunitySearch(e.target.value)}
                className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 rounded-xl bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-neutral-500 shrink-0">{t('فیلتر حوزه:', 'Domain:')}</span>
              {['ALL', 'linux', 'database', 'security', 'network', 'cloud'].map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-3 py-1 rounded-xl font-bold uppercase transition cursor-pointer whitespace-nowrap ${
                    selectedDomain === domain
                      ? 'bg-neutral-900 text-white dark:bg-emerald-600'
                      : 'bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Cases Grid */}
          <div className="space-y-4">
            {availableCases.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 space-y-2">
                <AlertCircle className="w-6 h-6 mx-auto text-neutral-400" />
                <p>{t('هیچ پرونده تاییدشده‌ای با این فیلتر یافت نشد.', 'No approved cases matching current criteria.')}</p>
                <p className="text-[11px] text-neutral-400">
                  {t(
                    'پرونده‌ها فقط در صورت تایید صریح مدیر سازمان و عدم نشت اطلاعات به این بخش وارد می‌شوند.',
                    'Cases only appear here after strict redaction approval by the organization admin.'
                  )}
                </p>
              </div>
            ) : (
              availableCases.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          {item.incidentTicket}
                        </span>
                        <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                          {item.incidentTitle}
                        </h4>
                      </div>
                      <span className="text-xs text-neutral-500">
                        {t('صنعت کارفرما:', 'Industry:')} {item.organizationIndustry || 'تجارت الکترونیک'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-xl">
                        {item.budgetPreference}
                      </span>
                      <button
                        onClick={() => handleOpenProposalModal(item)}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{t('ارسال پروپوزال و قیمت', 'Submit Proposal')}</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
                    {item.problemDescription}
                  </p>

                  {/* Sanitized Evidence Preview */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 font-bold">
                      <span className="flex items-center gap-1 text-emerald-600">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{t('شواهد فنی بررسی‌شده (تایید عدم نشت اسرار):', 'Sanitized Technical Evidence (Zero-Leak Verified):')}</span>
                      </span>
                      <span className="font-mono">LogBridge Redaction Engine v1</span>
                    </div>

                    <pre className="p-3.5 rounded-xl bg-neutral-200/60 dark:bg-neutral-950 font-mono text-[11px] text-neutral-800 dark:text-neutral-300 border border-neutral-300/60 dark:border-neutral-800 overflow-x-auto whitespace-pre-wrap">
                      {item.sanitizedEvidence}
                    </pre>
                  </div>

                  {/* Required Skills & Outcome */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs pt-2 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-neutral-500">{t('مهارت‌های مورد نیاز:', 'Skills:')}</span>
                      {item.requiredSkills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2 py-0.5 rounded-md bg-neutral-200/80 dark:bg-neutral-800 font-mono text-[11px] text-neutral-700 dark:text-neutral-300"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    <span className="text-[11px] text-neutral-500">
                      {t('نتیجه مورد انتظار سازمان:', 'Expected Outcome:')} {item.expectedOutcome}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: MY PROJECTS & CONTRACTS */}
      {activeExpertTab === 'my_projects' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              {t('قراردادها و پرونده‌های در جریان شما', 'My Active Client Contracts')}
            </h3>
            <span className="text-xs text-neutral-500 font-mono">
              {collaborationProjects.length} Engagements
            </span>
          </div>

          <div className="space-y-4">
            {collaborationProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        {proj.incidentTicket}
                      </span>
                      <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                        {proj.title}
                      </h4>
                    </div>
                    <span className="text-xs text-neutral-500">
                      {t('کارفرما:', 'Client:')} {proj.organizationName} | {t('نرخ توافق‌شده:', 'Rate:')} {proj.agreedRate}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold ${
                        proj.status === 'resolved'
                          ? 'bg-emerald-500/15 text-emerald-600'
                          : 'bg-amber-500/15 text-amber-600'
                      }`}
                    >
                      {proj.status === 'resolved' ? t('حل‌شده و خاتمه یافته', 'Resolved') : t('در جریان همکاری', 'Active Collaboration')}
                    </span>

                    <button
                      onClick={() => {
                        setActiveProjectId(proj.id);
                        setActiveExpertTab('collaboration');
                      }}
                      className="px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-emerald-600 hover:bg-neutral-800 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{t('ورود به اتاق همکاری', 'Enter Room')}</span>
                    </button>
                  </div>
                </div>

                {/* Milestones list */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                    {t('مراحل فنی و مایلستون‌های این قرارداد:', 'Technical Milestones:')}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {proj.milestones.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => toggleMilestone(proj.id, m.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                          m.completed
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300'
                            : 'bg-neutral-200/50 dark:bg-neutral-800/60 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-emerald-500'
                        }`}
                      >
                        <span className="truncate">{m.title}</span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                            m.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-neutral-400'
                          }`}
                        >
                          {m.completed && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {proj.resolutionNotes && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-200 space-y-1">
                    <span className="font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t('گزارش پایانی و مستند حل رخداد:', 'Recorded Technical Resolution:')}</span>
                    </span>
                    <p className="leading-relaxed">{proj.resolutionNotes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: COLLABORATION WORKSPACE (TWO-WAY INTERACTIVE CHAT & RESOLUTION) */}
      {activeExpertTab === 'collaboration' && (
        <div className="space-y-6">
          {activeProject ? (
            <div className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl space-y-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {activeProject.incidentTicket}
                    </span>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                      {activeProject.title}
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-500">
                    {t('کانال ارتباطی ایزوله میان سازمان و متخصص', 'Isolated Communication Channel between Org & Expert')}
                  </span>
                </div>

                {activeProject.status !== 'resolved' ? (
                  <button
                    onClick={() => setShowResolveModal(true)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t('ثبت گزارش نهایی و خاتمه پرونده', 'Mark Case Resolved')}</span>
                  </button>
                ) : (
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-600 font-bold text-xs">
                    ✓ {t('پرونده حل و بسته شد', 'Case Officially Resolved')}
                  </span>
                )}
              </div>

              {/* Chat Thread Messages */}
              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2">
                {activeProject.messages.map((msg) => {
                  const isMe = msg.senderRole === (currentRole === 'expert' ? 'expert' : 'organization');
                  const isSys = msg.senderRole === 'system';

                  if (isSys) {
                    return (
                      <div
                        key={msg.id}
                        className="p-3 rounded-2xl bg-neutral-200/60 dark:bg-neutral-950 border border-neutral-300/60 dark:border-neutral-800 text-xs text-center text-neutral-600 dark:text-neutral-400 space-y-1 font-mono"
                      >
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 block">
                          🛡️ {msg.senderName}
                        </span>
                        <p>{msg.text}</p>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`}
                    >
                      <div className="flex items-center gap-2 text-[10px] text-neutral-500 px-1">
                        <span className="font-bold">{msg.senderName}</span>
                        <span>{msg.timestamp}</span>
                      </div>

                      <div
                        className={`p-4 rounded-2xl max-w-xl text-xs space-y-2 ${
                          isMe
                            ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white rounded-tr-xs'
                            : 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-tl-xs'
                        }`}
                      >
                        <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>

                        {msg.codeSnippet && (
                          <div className="p-3 rounded-xl bg-neutral-950 text-emerald-400 font-mono text-[11px] overflow-x-auto border border-neutral-800">
                            <span className="text-[10px] text-neutral-500 block mb-1">
                              // Technical Remediation Patch
                            </span>
                            <pre>{msg.codeSnippet}</pre>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Message Input Box */}
              {activeProject.status !== 'resolved' && (
                <form onSubmit={handleSendMessage} className="space-y-2 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  {showSnippetInput && (
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
                        <FileCode className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{t('افزودن قطعه‌کد یا پچ اصلاحی (Sanitized Code Snippet):', 'Attach Remediation Patch:')}</span>
                      </span>
                      <textarea
                        rows={4}
                        placeholder="// Enter clean diagnostic code or patch..."
                        value={chatSnippet}
                        onChange={(e) => setChatSnippet(e.target.value)}
                        className="w-full p-3 rounded-xl bg-neutral-900 text-emerald-400 font-mono text-xs border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder={t('پیام، تحلیل یا سوال خود را بنویسید...', 'Type your analysis or message...')}
                      value={chatInputText}
                      onChange={(e) => setChatInputText(e.target.value)}
                      className="flex-1 p-2.5 rounded-xl bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />

                    <button
                      type="button"
                      onClick={() => setShowSnippetInput(!showSnippetInput)}
                      className="p-2.5 rounded-xl bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 text-neutral-700 dark:text-neutral-300 text-xs cursor-pointer"
                      title="افزودن پچ کد"
                    >
                      <FileCode className="w-4 h-4 text-emerald-600" />
                    </button>

                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t('ارسال', 'Send')}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
              {t('هیچ پروژه فعالی انتخاب نشده است.', 'No active project selected.')}
            </div>
          )}
        </div>
      )}

      {/* TAB 5: EXPERT PROFILE & PRICING */}
      {activeExpertTab === 'profile' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Info */}
            <div className="md:col-span-1 p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4">
              <div className="text-center space-y-2">
                <img
                  src={currentExpert.avatar}
                  alt={currentExpert.name}
                  className="w-20 h-20 rounded-3xl object-cover mx-auto border-2 border-emerald-500 shadow-lg"
                />
                <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                  {currentExpert.name}
                </h4>
                <p className="text-xs text-neutral-500">
                  {currentExpert.title[lang]}
                </p>
                <div className="flex items-center justify-center gap-1 text-amber-400 font-bold text-xs">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{currentExpert.rating} ({currentExpert.reviewCount} Reviews)</span>
                </div>
              </div>

              {/* Availability Toggle */}
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
                <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 block">
                  {t('تنظیم وضعیت دسترسی:', 'Availability Status:')}
                </span>

                <button
                  onClick={() => setIsAvailableNow(!isAvailableNow)}
                  className={`w-full p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between transition cursor-pointer ${
                    isAvailableNow
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300'
                      : 'bg-neutral-200 dark:bg-neutral-800 border-neutral-300 text-neutral-500'
                  }`}
                >
                  <span>{isAvailableNow ? t('آماده همکاری فوری (< ۱ ساعت)', 'Available for Instant Dispatch') : t('در حال حاضر مشغول', 'Currently Busy')}</span>
                  <span className={`w-3 h-3 rounded-full ${isAvailableNow ? 'bg-emerald-500' : 'bg-neutral-400'}`} />
                </button>
              </div>

              {/* Pricing Rate */}
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-1">
                <span className="text-xs text-neutral-500 block">{t('نرخ ساعتی فعلی:', 'Hourly Rate:')}</span>
                <div className="font-mono text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  {currentExpert.hourlyRate}
                </div>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="md:col-span-2 space-y-6">
              <div className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4">
                <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
                  {t('بیوگرافی و تخصص‌های اصلی:', 'Biography & Core Domains:')}
                </h4>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                  {currentExpert.bio[lang]}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 block">
                    {t('مهارت‌های اعتبارسنجی‌شده (Verified Skills):', 'Verified Technical Skills:')}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {currentExpert.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 font-mono text-xs text-neutral-800 dark:text-neutral-200 border border-neutral-300/60 dark:border-neutral-700"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 block">
                    {t('مدارک و گواهینامه‌های بین‌المللی:', 'Accredited Certifications:')}
                  </span>
                  <div className="space-y-1.5">
                    {currentExpert.certifications.map((cert) => (
                      <div
                        key={cert}
                        className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2"
                      >
                        <Award className="w-4 h-4 text-emerald-500" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Work History and Reviews */}
              <div className="p-6 rounded-3xl bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4">
                <h4 className="font-bold text-xs text-neutral-900 dark:text-neutral-100">
                  {t('نظرات کارفرمایان و پرونده‌های پیشین:', 'Client Reviews & Work History:')}
                </h4>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">
                        مدیر زیرساخت سامانه دیجی‌پارس
                      </span>
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        ★★★★★
                      </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      «رفع بن‌بست نشت رم کانتینر سفارشات در کمتر از ۴ ساعت بدون نیاز به ارسال دیتابیس محرمانه. راهکار ارائه شده کاملاً پایدار بود.»
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">
                        سرپرست دوآپس زرین‌پی
                      </span>
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        ★★★★★
                      </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      «بهینه‌سازی ترتیب قفل‌گذاری و پارامتر deadlock_timeout دیتابیس پستگرس با تسلط کامل انجام شد.»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBMIT PROPOSAL MODAL */}
      {selectedCaseForProposal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-800 text-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 text-xs max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="space-y-0.5">
                <span className="font-mono text-emerald-400 font-bold">
                  {selectedCaseForProposal.incidentTicket}
                </span>
                <h4 className="font-bold text-sm text-neutral-100">
                  {selectedCaseForProposal.incidentTitle}
                </h4>
              </div>
              <button
                onClick={() => setSelectedCaseForProposal(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleProposalSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    {t('نرخ پیشنهادی شما:', 'Proposed Rate:')}
                  </label>
                  <input
                    type="text"
                    required
                    value={proposedRate}
                    onChange={(e) => setProposedRate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    {t('تخمین مدت زمان تحویل:', 'Estimated Hours:')}
                  </label>
                  <input
                    type="text"
                    required
                    value={estimatedHours}
                    onChange={(e) => setEstimatedHours(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  {t('شرح تحلیل اولیه و انگیزه حل پرونده (Cover Note):', 'Diagnostic Note & Cover Letter:')}
                </label>
                <textarea
                  rows={3}
                  required
                  value={proposalCoverNote}
                  onChange={(e) => setProposalCoverNote(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  {t('رویکرد و مراحل پیشنهادی حل مشکل (Approach):', 'Proposed Step-by-Step Approach:')}
                </label>
                <textarea
                  rows={3}
                  required
                  value={proposedApproach}
                  onChange={(e) => setProposedApproach(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs leading-relaxed"
                />
              </div>

              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-400">
                {t(
                  '💡 با ارسال این پروپوزال، شما متعهد به رعایت خط‌مشی محرمانگی LogBridge و عدم استخراج داده‌های حساس سازمان می‌شوید.',
                  'By submitting, you agree to LogBridge zero-leak confidentiality standards.'
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setSelectedCaseForProposal(null)}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                >
                  {t('انصراف', 'Cancel')}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                >
                  {t('ثبت و ارسال پیشنهاد به سازمان', 'Submit Proposal')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* RESOLVE CASE MODAL */}
      {showResolveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-800 text-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h4 className="font-bold text-sm text-neutral-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t('ثبت گزارش خاتمه و حل رسمی رخداد', 'Submit Technical Closure Report')}</span>
              </h4>
              <button
                onClick={() => setShowResolveModal(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleResolveCase} className="space-y-3">
              <p className="text-neutral-400 text-xs leading-relaxed">
                {t(
                  'لطفاً اقدامات انجام‌شده، اصلاحات کد و توصیه‌های پایداری آینده را جهت ثبت در پرونده دائمی سازمان شرح دهید.',
                  'Summarize the remediation actions, code fixes applied, and future prevention recommendations.'
                )}
              </p>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  {t('شرح کامل نحوه حل رخداد و نتایج تست:', 'Resolution Summary & Test Results:')}
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder={t(
                    'مثال: با لغو اشتراک در رویداد order_completed نشت حافظه متوقف شد و در تست استرس استیجینگ مصرف رم زیر ۶۰٪ باقی ماند.',
                    'e.g. Memory leak fixed by explicit unsubscription. Under 40k staging load, RAM stabilized under 60%.'
                  )}
                  value={resolutionNotes}
                  onChange={(e) => setResolutionNotes(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowResolveModal(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                >
                  {t('انصراف', 'Cancel')}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                >
                  {t('تایید و ثبت خاتمه پرونده', 'Confirm & Mark Resolved')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contextual Help Drawer */}
      <ContextualHelpDrawer
        pageKey="expert_workspace"
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
