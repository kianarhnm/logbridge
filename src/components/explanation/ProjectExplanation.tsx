/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LogBridgeLogo } from '../common/LogBridgeLogo';
import { LiveLogStreamBackdrop } from '../common/LiveLogStreamBackdrop';
import { Signature3DLogAnimation } from '../common/Signature3DLogAnimation';
import { DocumentationDetailView } from '../common/DocumentationDetailView';
import { ConceptualArchitectureDiagram } from './ConceptualArchitectureDiagram';
import { ContextualHelpDrawer } from '../common/ContextualHelpDrawer';
import { DETAILED_DOCUMENTATION_ITEMS } from '../../data/logBridgeDocsData';
import {
  HelpCircle,
  MoreVertical,
  ArrowUpRight,
  Sparkles,
  Search,
  GitBranch,
  Users,
  Target,
  Layers,
  Shield,
  Cpu,
  CheckCircle2,
  Compass,
} from 'lucide-react';

export function ProjectExplanation() {
  const { lang, t, selectedDocId, setSelectedDocId, setMainSection, setActiveOpsTab, setActiveCategory } = useApp();
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // If a document detail page is selected, render the dedicated view
  if (selectedDocId) {
    const docItem = DETAILED_DOCUMENTATION_ITEMS.find((d) => d.id === selectedDocId);
    if (docItem) {
      return (
        <DocumentationDetailView
          item={docItem}
          onBack={() => setSelectedDocId(null)}
        />
      );
    }
  }

  const getItemIcon = (index: number) => {
    const icons = [Sparkles, Search, GitBranch, Users, Target, Layers, Shield, Cpu, CheckCircle2, Compass];
    return icons[index % icons.length];
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* PART 2: NEW HERO VISUAL DESIGN WITH 3D TECHNICAL TOPOLOGY & LOG STREAM */}
      <div className="bg-[#171719] text-[#EDEDEF] border border-[#2E2A2D] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Animated log records stream continuously entering */}
        <LiveLogStreamBackdrop />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <LogBridgeLogo size="md" onDarkBackground={true} />
              
              {/* Contextual Page Help Button */}
              <button
                onClick={() => setIsHelpOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#292426] hover:bg-[#343033] text-[#EDEDEF] text-xs font-semibold transition border border-[#2E2A2D] cursor-pointer shadow-xs"
                title={t('راهنمای عملکرد این صفحه', 'Page Operation Guide')}
              >
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                <span>{t('راهنمای صفحه', 'Page Guide')}</span>
              </button>
            </div>

            {/* Main Tagline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#EDEDEF] leading-snug">
              {t(
                'از شناسایی مشکل تا حل آن؛ مدیریت هوشمند رخدادهای فنی و دسترسی امن به متخصصان.',
                'From detecting technical issues to resolving them — intelligent incident operations and secure access to expertise.'
              )}
            </h1>

            {/* Concise, understandable description */}
            <p className="text-xs sm:text-sm text-[#9E9B9F] leading-relaxed text-justify max-w-xl font-normal">
              {t(
                'LogBridge به سازمان‌ها کمک می‌کند لاگ‌ها و رویدادهای فنی را جمع‌آوری و تحلیل کنند، سیاست‌های خودکار را اعمال نمایند، هشدارهای بلادرنگ دریافت کنند و در صورت نیاز تیم داخلی، به شکلی امن و بدون افشای اطلاعات محرمانه از مشاوره تخصصی برون‌سازمانی بهره‌مند شوند.',
                'LogBridge helps organizations ingest and analyze technical telemetry, enforce automated policies, receive real-time alerts, and securely request specialized engineering support when internal teams require external assistance.'
              )}
            </p>

            {/* Direct jump to workspace */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setMainSection('mvp')}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <Cpu className="w-4 h-4" />
                <span>{t('ورود به میزکار مانیتورینگ زنده', 'Open Monitoring Workspace')}</span>
              </button>
            </div>
          </div>

          {/* Right 3D Visualization Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#292426]/80 border border-[#2E2A2D] rounded-2xl p-2 relative shadow-inner">
            <Signature3DLogAnimation
              variant="hero"
              onSelectDomain={(dom: string) => {
                setMainSection('mvp');
                setActiveCategory(dom as any);
              }}
            />
          </div>
        </div>
      </div>

      {/* CONCEPTUAL ARCHITECTURE & 12-STAGE OPERATIONAL PIPELINE DIAGRAM */}
      <ConceptualArchitectureDiagram />

      {/* PART 1.2: DOCUMENTATION TOPICS — FULL-WIDTH HORIZONTAL BAR EXPANDABLE ROWS */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                {t('مستندات معماری، فرآیند و تحلیل محصول (۱۴ بخش جامع)', 'Architecture, Process & Product Analysis Specifications (14 Topics)')}
              </h2>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              {t(
                'برای بررسی جزئیات، ورودی‌ها، پردازش، خروجی‌ها و نمونه‌های هر بخش، روی سطر مربوطه کلیک کنید.',
                'Click any row to inspect deep engineering specifications, inputs, processing pipeline, and deliverables.'
              )}
            </p>
          </div>

          <span className="text-xs text-[var(--text-secondary)] font-mono shrink-0">
            {DETAILED_DOCUMENTATION_ITEMS.length} {t('مبحث کامل', 'Topics Ready')}
          </span>
        </div>

        {/* Clean full-width horizontal row layout per critical design rule */}
        <div className="space-y-3">
          {DETAILED_DOCUMENTATION_ITEMS.map((item, index) => {
            const Icon = getItemIcon(index);
            const orderNum = String(index + 1).padStart(2, '0');
            const isMenuOpen = activeMenuId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedDocId(item.id)}
                className="group w-full p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-emerald-500/70 hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 relative"
              >
                {/* Left/Main Column: Order # + Icon + Green Dot + Title + Summary */}
                <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 w-6">
                      #{orderNum}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface)] text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-[var(--border-subtle)] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shrink-0 shadow-xs"
                        title={t('آماده مطالعه', 'Ready to read')}
                      />
                      <h3 className="font-bold text-sm text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                        {item.title[lang]}
                      </h3>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2 md:line-clamp-1 text-justify">
                      {item.summary[lang]}
                    </p>
                  </div>
                </div>

                {/* Right Column: Actions (Read Specification & Context Options) */}
                <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[var(--border-subtle)]">
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] hidden lg:inline">
                    10/10 Criteria
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDocId(item.id);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white transition-all cursor-pointer border border-emerald-500/25 group-hover:border-transparent"
                  >
                    <span>{t('مطالعه مشخصات کامل', 'Read Specification')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {/* Context Menu Button */}
                  <div
                    className="relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenuId(isMenuOpen ? null : item.id);
                    }}
                  >
                    <button
                      type="button"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition cursor-pointer"
                      title={t('گزینه‌ها', 'Options')}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>

                    {isMenuOpen && (
                      <div className="absolute left-0 rtl:left-auto rtl:right-0 mt-1 w-48 p-1 rounded-xl bg-neutral-900 text-white shadow-xl border border-neutral-700 z-30 animate-fadeIn text-xs">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDocId(item.id);
                            setActiveMenuId(null);
                          }}
                          className="w-full text-right rtl:text-right ltr:text-left px-3 py-2 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-neutral-200 hover:text-white cursor-pointer"
                        >
                          <span>{t('باز کردن صفحه کامل', 'Open Full Page')}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contextual Help Drawer */}
      <ContextualHelpDrawer
        pageKey="documentation_index"
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
