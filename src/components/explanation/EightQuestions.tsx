/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EIGHT_QUESTIONS_DATA } from '../../data/phase1Data';
import { QuestionEvaluation } from '../../types';
import {
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  X,
  FileText,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { TechnicalLogBackdrop } from '../common/TechnicalLogBackdrop';

export const EightQuestions: React.FC = () => {
  const { language, t } = useApp();
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionEvaluation | null>(null);

  const renderStatusBadge = (status: QuestionEvaluation['statusLabel']) => {
    switch (status) {
      case 'hypothesis':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700">
            {t('فرض اولیه', 'Initial Hypothesis')}
          </span>
        );
      case 'requires_validation':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700">
            {t('نیازمند اعتبارسنجی', 'Requires Validation')}
          </span>
        );
      case 'proposed':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
            {t('راه‌حل پیشنهادی', 'Proposed Solution')}
          </span>
        );
      case 'evidence_needed':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">
            {t('شواهد مورد نیاز', 'Evidence Needed')}
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 mb-1">
          <span className="text-emerald-600 dark:text-emerald-400">/analysis/section_03</span>
          <span>·</span>
          <span>eight_maturity_questions</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          {t('۸ پرسش ارزیابی بلوغ ایده کسب‌وکار (Eight Idea Evaluation Questions)', 'Eight Questions for Evaluating a Mature Business Idea')}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {t(
            'تحلیل عمیق فرضیات و استدلال‌های پروژه بر اساس چارچوب استاندارد ارزیابی ایده‌های ناب و نوآوری تجاری',
            'In-depth evaluation of project assumptions and reasoning based on lean startup and business idea maturity criteria'
          )}
        </p>
      </div>

      {/* 8 Interactive Cards Grid with subtle gray surfaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EIGHT_QUESTIONS_DATA.map((q) => {
          const isSelected = selectedQuestion?.id === q.id;
          return (
            <div
              key={q.id}
              onClick={() => setSelectedQuestion(q)}
              className={`bg-neutral-100/90 dark:bg-neutral-900 border rounded-2xl p-5 shadow-xs transition-all cursor-pointer flex flex-col justify-between space-y-3 group ${
                isSelected
                  ? 'border-emerald-600 dark:border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                  : 'border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-neutral-200/70 dark:bg-neutral-800 px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700">
                    Q0{q.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {renderStatusBadge(q.statusLabel)}
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition" />
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {q.question[language]}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify line-clamp-3">
                  {q.shortAnswer[language]}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200/50 dark:border-neutral-800/80 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                <span>{t('مشاهده مستند تفصیلی، استدلال و شواهد...', 'View Detailed Reasoning & Evidence...')}</span>
                <span className="font-mono text-[10px] text-neutral-400">DOC</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expandable Detail Modal with Gray Surfaces */}
      {selectedQuestion && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedQuestion(null)}
        >
          <div
            className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-5 max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <TechnicalLogBackdrop variant="card" />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3 relative z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-neutral-200 dark:bg-neutral-800 px-2 py-0.5 rounded">
                    QUESTION {selectedQuestion.id} / 8
                  </span>
                  {renderStatusBadge(selectedQuestion.statusLabel)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {selectedQuestion.question[language]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedQuestion(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with 14-Point Depth Subsections */}
            <div className="space-y-4 text-xs leading-relaxed relative z-10">
              {/* Detailed Explanation */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-1.5">
                <span className="font-bold text-neutral-900 dark:text-neutral-100 block text-[11px] uppercase tracking-wider font-mono">
                  {t('۱. پاسخ تفصیلی و تحلیل مفهومی (Detailed Explanation):', '1. Detailed Explanation & Conceptual Analysis:')}
                </span>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
                  {selectedQuestion.detailedExplanation[language]}
                </p>
              </div>

              {/* Project-Specific Reasoning */}
              <div className="p-4 bg-emerald-500/10 dark:bg-emerald-950/30 rounded-xl border border-emerald-500/20 space-y-1.5">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 block text-[11px] uppercase tracking-wider font-mono">
                  {t('۲. استدلال تخصصی انطباقی در این پروژه (Specific Reasoning):', '2. Project-Specific Reasoning:')}
                </span>
                <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed text-justify">
                  {selectedQuestion.reasoning[language]}
                </p>
              </div>

              {/* Assumptions & Hypotheses */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-1.5">
                <span className="font-bold text-neutral-700 dark:text-neutral-300 block text-[11px] uppercase tracking-wider font-mono">
                  {t('۳. مفروضات فعلی و ارزیابی ریسک (Current Assumptions):', '3. Current Assumptions & Risk Profile:')}
                </span>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                  {selectedQuestion.currentAssumptions[language]}
                </p>
              </div>

              {/* Needed Evidence for Validation */}
              <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-1.5">
                <span className="font-bold text-neutral-700 dark:text-neutral-300 block text-[11px] uppercase tracking-wider font-mono">
                  {t('۴. شواهد میدانی مورد نیاز جهت اعتبارسنجی (Needed Evidence):', '4. Field Evidence Needed for Validation:')}
                </span>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                  {selectedQuestion.neededEvidence[language]}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500 relative z-10">
              <span>{t('چارچوب ارزیابی ایده ناب • فاز ۱', 'Lean Canvas Maturity Matrix • Phase 1')}</span>
              <button
                type="button"
                onClick={() => setSelectedQuestion(null)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-neutral-900 dark:bg-emerald-600 hover:bg-neutral-800 dark:hover:bg-emerald-700 transition cursor-pointer"
              >
                {t('بستن', 'Close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
