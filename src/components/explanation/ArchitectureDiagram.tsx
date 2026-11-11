/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ARCHITECTURE_DATA } from '../../data/phase1Data';
import { DETAILED_DOCS_COLLECTION } from '../../data/detailedDocsData';
import { ArchitectureComponent, DetailedDocumentationItem } from '../../types';
import { DocumentationModal } from '../common/DocumentationModal';
import { TechnicalLogBackdrop } from '../common/TechnicalLogBackdrop';
import {
  Layers,
  ArrowDown,
  ArrowRight,
  Database,
  Cpu,
  Monitor,
  HardDrive,
  FileText,
  Cloud,
  CheckCircle2,
  X,
  Info,
  ExternalLink,
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const { language, t } = useApp();
  const [selectedCompId, setSelectedCompId] = useState<string>('arch-ui');
  const [modalDocItem, setModalDocItem] = useState<DetailedDocumentationItem | null>(null);

  const components = ARCHITECTURE_DATA;
  const activeComp = components.find((c) => c.id === selectedCompId) || components[0];

  const getStatusBadge = (status: ArchitectureComponent['status']) => {
    switch (status) {
      case 'implemented_phase1':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 font-semibold">
            {t('پیاده‌سازی در فاز ۱', 'Phase 1 Implemented')}
          </span>
        );
      case 'conceptual_phase1':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700">
            {t('مفهومی در فاز ۱', 'Phase 1 Conceptual')}
          </span>
        );
      case 'future_phase':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200/40 dark:bg-neutral-800/60 text-neutral-500 border border-neutral-300/60 dark:border-neutral-700/60">
            {t('نقطه اتصال فازهای آتی', 'Future Integration Slot')}
          </span>
        );
    }
  };

  const openDetailedDoc = (compId: string) => {
    if (DETAILED_DOCS_COLLECTION[compId]) {
      setModalDocItem(DETAILED_DOCS_COLLECTION[compId]);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 mb-1">
          <span className="text-emerald-600 dark:text-emerald-400">/analysis/section_06</span>
          <span>·</span>
          <span>conceptual_architecture</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          {t('معماری مفهومی اولیه سیستم (Initial Conceptual Architecture)', 'Initial Conceptual Architecture')}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {t(
            'نمودار تعاملی ۷ مؤلفه کلیدی نرم‌افزار، ورودی‌ها، خروجی‌ها و نحوه جریان داده‌ها میان لایه‌ها',
            'Interactive 7-component system architecture diagram detailing component roles, inputs, outputs, and data flow'
          )}
        </p>
      </div>

      {/* Mandatory Architecture Note with Gray Surface */}
      <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950 border border-neutral-300/80 dark:border-neutral-800 rounded-xl text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed text-justify">
          {t(
            'این ساختار یک معماری مفهومی اولیه برای سامان‌دهی ماژول‌های فاز ۱ و آماده‌سازی توسعه فازهای بعد است و به معنای ادعای پیاده‌سازی کامل کلیه سرویس‌های آینده در این مرحله نیست.',
            'This model represents an initial conceptual architecture structuring Phase 1 modules and future extension points; it does not claim that every future enterprise service is already implemented.'
          )}
        </p>
      </div>

      {/* Interactive 7-Component Visual Grid with Gray Surfaces */}
      <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5 relative overflow-hidden">
        <TechnicalLogBackdrop variant="card" />

        <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 pb-3 relative z-10">
          <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
            {t('روی هر یک از مؤلفه‌ها کلیک کنید تا وظایف و مستندات کامل آن نمایش داده شود:', 'Click any component node to inspect responsibilities and full documentation:')}
          </span>
          <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            7 Components
          </span>
        </div>

        {/* Visual Architecture Layers */}
        <div className="space-y-4 relative z-10">
          {/* Layer 1: Client UI */}
          <div className="p-3 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block">
              {t('لایه ارائه و تعامل کاربری (Presentation Layer)', 'Presentation & User Interaction Layer')}
            </span>
            <button
              type="button"
              onClick={() => setSelectedCompId('arch-ui')}
              className={`w-full p-3.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                selectedCompId === 'arch-ui'
                  ? 'bg-neutral-100 dark:bg-neutral-900 border-emerald-500 shadow-xs ring-2 ring-emerald-500/20'
                  : 'bg-neutral-100/80 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Monitor className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  {components[0].number}. {components[0].name[language]}
                </span>
              </div>
              {getStatusBadge(components[0].status)}
            </button>
          </div>

          <div className="flex justify-center -my-2 text-neutral-400">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Layer 2: Core Phase 1 Modules (Project Explanation + MVP Workspace) */}
          <div className="p-3 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block">
              {t('ماژول‌های منطق برنامه در فاز ۱ (Application Modules)', 'Phase 1 Application Modules')}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[components[1], components[2]].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCompId(c.id)}
                  className={`p-3.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                    selectedCompId === c.id
                      ? 'bg-neutral-100 dark:bg-neutral-900 border-emerald-500 shadow-xs ring-2 ring-emerald-500/20'
                      : 'bg-neutral-100/80 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {c.id === 'arch-explanation' ? <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                      {c.number}. {c.name[language]}
                    </span>
                  </div>
                  {getStatusBadge(c.status)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center -my-2 text-neutral-400">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Layer 3: Incident Logic Controller */}
          <div className="p-3 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block">
              {t('منطق تجاری و پردازش دامنه (Domain & Business Logic)', 'Domain & Business Rules Logic')}
            </span>
            <button
              type="button"
              onClick={() => setSelectedCompId('arch-incident-mgmt')}
              className={`w-full p-3.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                selectedCompId === 'arch-incident-mgmt'
                  ? 'bg-neutral-100 dark:bg-neutral-900 border-emerald-500 shadow-xs ring-2 ring-emerald-500/20'
                  : 'bg-neutral-100/80 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  {components[3].number}. {components[3].name[language]}
                </span>
              </div>
              {getStatusBadge(components[3].status)}
            </button>
          </div>

          <div className="flex justify-center -my-2 text-neutral-400">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Layer 4: Data Layer & Persistence + Future Integration */}
          <div className="p-3 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block">
              {t('لایه دسترسی به داده و نقاط اتصال آینده (Persistence & Integration Layer)', 'Persistence & Extension Points')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[components[4], components[5], components[6]].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCompId(c.id)}
                  className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between min-h-[90px] cursor-pointer ${
                    selectedCompId === c.id
                      ? 'bg-neutral-100 dark:bg-neutral-900 border-emerald-500 shadow-xs ring-2 ring-emerald-500/20'
                      : 'bg-neutral-100/80 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {c.id === 'arch-future' ? (
                      <Cloud className="w-4 h-4 text-neutral-400" />
                    ) : (
                      <HardDrive className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    )}
                    <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                      {c.number}. {c.name[language]}
                    </span>
                  </div>
                  <div>{getStatusBadge(c.status)}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Selected Component Deep Inspection Panel with Gray Surfaces */}
      {activeComp && (
        <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200/60 dark:border-neutral-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-neutral-200/70 dark:bg-neutral-800 px-2.5 py-0.5 rounded-lg border border-neutral-300 dark:border-neutral-700">
                  COMPONENT {activeComp.number}
                </span>
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {activeComp.name[language]}
                </h3>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {activeComp.role[language]}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {getStatusBadge(activeComp.status)}
              <button
                type="button"
                onClick={() => openDetailedDoc(activeComp.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-neutral-900 dark:bg-emerald-600 hover:bg-neutral-800 dark:hover:bg-emerald-700 transition cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t('مشاهده مستند کامل ۱۴ گانه', 'View 14-Point Spec')}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
            {/* Responsibilities */}
            <div className="p-4 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-2">
              <span className="font-bold text-neutral-900 dark:text-neutral-100 block text-[11px] uppercase tracking-wider font-mono">
                {t('وظایف و کارکردهای کلیدی (Responsibilities):', 'Core Responsibilities:')}
              </span>
              <ul className="text-neutral-700 dark:text-neutral-300 space-y-1.5 list-disc list-inside">
                {activeComp.responsibilities[language].map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>

            {/* Inputs & Outputs */}
            <div className="space-y-3">
              <div className="p-3 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-1">
                <span className="font-bold text-neutral-700 dark:text-neutral-300 block text-[11px] font-mono">
                  {t('ورودی‌ها (Inputs):', 'Component Inputs:')}
                </span>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {activeComp.inputs[language].join(' · ')}
                </p>
              </div>

              <div className="p-3 bg-neutral-200/40 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-1">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block text-[11px] font-mono">
                  {t('خروجی‌ها (Outputs):', 'Component Outputs:')}
                </span>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {activeComp.outputs[language].join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Relationships */}
          <div className="p-3.5 bg-neutral-200/40 dark:bg-neutral-950/70 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs">
            <strong className="text-neutral-900 dark:text-neutral-200 block mb-0.5 font-mono">
              {t('ارتباط و جریان داده با سایر مؤلفه‌ها (Relationships):', 'Inter-Component Relationships:')}
            </strong>
            <p className="text-neutral-700 dark:text-neutral-300 text-justify">
              {activeComp.relationships[language]}
            </p>
          </div>
        </div>
      )}

      {/* 14-Aspect Detailed Documentation Modal */}
      {modalDocItem && (
        <DocumentationModal
          item={modalDocItem}
          onClose={() => setModalDocItem(null)}
        />
      )}
    </div>
  );
};
