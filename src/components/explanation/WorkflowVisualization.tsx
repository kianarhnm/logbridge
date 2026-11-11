/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { WORKFLOW_NODES_DATA } from '../../data/phase1Data';
import { WorkflowNode } from '../../types';
import {
  Play,
  Pause,
  RotateCcw,
  Shield,
  Lock,
  Share2,
  Info,
  CheckCircle2,
  X,
  Server,
  AlertTriangle,
  Search,
  Users,
  Terminal,
  FileCheck,
} from 'lucide-react';

export const WorkflowVisualization: React.FC = () => {
  const { language, t } = useApp();
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0); // 0 to 6
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);

  const nodes = WORKFLOW_NODES_DATA;

  // Auto-progress active pulse when playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % nodes.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [isPlaying, nodes.length]);

  const handleReset = () => {
    setActiveStep(0);
    setIsPlaying(true);
  };

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'wf-org':
        return Server;
      case 'wf-incident':
        return AlertTriangle;
      case 'wf-analysis':
        return Terminal;
      case 'wf-masking':
        return Lock;
      case 'wf-expert':
        return Search;
      case 'wf-collab':
        return Users;
      case 'wf-res':
        return CheckCircle2;
      default:
        return Info;
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 text-neutral-100 shadow-xl space-y-5">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              {t('مصورسازی تعاملی جریان کار پیشنهادی پلتفرم', 'Interactive 3D / Isometric Workflow Visualization')}
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            {t(
              'مشاهده نحوه انتقال امن اطلاعات از بروز رخداد تا پالایش محرمانگی، اتصال به متخصص و ثبت دانش',
              'Observe how incident data travels safely from outage detection to redaction, expert matching, and runbook archival'
            )}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-neutral-950 p-1.5 rounded-xl border border-neutral-800">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('توقف موقت', 'Pause')}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('ادامه پخش', 'Play')}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title={t('شروع مجدد انیمیشن', 'Replay')}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mandatory University Note */}
      <div className="p-3 bg-neutral-950/80 border border-neutral-800 rounded-xl flex items-start gap-2.5 text-xs text-neutral-400">
        <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t(
            'این مصورسازی نمایانگر جریان کار پیشنهادی محصول در آینده است و به معنای پیاده‌سازی تمام این قابلیت‌ها در فاز ۱ نیست.',
            'This visualization represents the proposed product workflow. It does not mean all these capabilities are implemented in Phase 1.'
          )}
        </p>
      </div>

      {/* Isometric Stepper & Stage Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {nodes.map((node, idx) => {
          const Icon = getNodeIcon(node.id);
          const isPulseActive = activeStep === idx;
          const isSelected = selectedNode?.id === node.id;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => {
                setSelectedNode(node);
                setActiveStep(idx);
              }}
              className={`relative p-3 rounded-xl border text-right transition-all flex flex-col justify-between min-h-[110px] group ${
                isSelected
                  ? 'bg-neutral-800 border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg'
                  : isPulseActive
                  ? 'bg-neutral-800/80 border-emerald-600/70'
                  : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Step Counter & Privacy Indicator */}
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-[10px] text-neutral-400 font-bold">
                  0{node.order}
                </span>
                {node.privacyLevel === 'private' && (
                  <span
                    className="p-1 rounded bg-rose-950/80 border border-rose-800/60 text-rose-300"
                    title={t('اطلاعات کاملاً محرمانه درون‌سازمانی', 'Confidential Private Data')}
                  >
                    <Lock className="w-3 h-3" />
                  </span>
                )}
                {node.privacyLevel === 'sanitized_sharable' && (
                  <span
                    className="p-1 rounded bg-emerald-950/80 border border-emerald-800/60 text-emerald-300"
                    title={t('اطلاعات پالایش‌شده و قابل اشتراک', 'Sanitized Sharable Data')}
                  >
                    <Share2 className="w-3 h-3" />
                  </span>
                )}
                {node.privacyLevel === 'internal_system' && (
                  <span
                    className="p-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-400"
                    title={t('فرآیند تحلیل داخلی', 'Internal Triage Process')}
                  >
                    <Terminal className="w-3 h-3" />
                  </span>
                )}
              </div>

              {/* Icon & Title */}
              <div className="my-1.5 space-y-1">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isPulseActive || isSelected ? 'text-emerald-400' : 'text-neutral-400'
                  }`}
                />
                <h4 className="text-xs font-bold text-white line-clamp-1">
                  {node.name[language]}
                </h4>
              </div>

              {/* Status footer */}
              <span className="text-[10px] text-neutral-400 truncate w-full block">
                {node.shortRole[language]}
              </span>

              {/* Animated Progress Indicator Bar on Active */}
              {isPulseActive && (
                <div className="absolute -bottom-px inset-x-2 h-0.5 bg-emerald-500 rounded-full animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Interactive Node Inspector Drawer / Detail Box */}
      {selectedNode ? (
        <div className="p-4 sm:p-5 bg-neutral-950 border border-neutral-800 rounded-xl space-y-4 animate-fade-in relative">
          <button
            type="button"
            onClick={() => setSelectedNode(null)}
            className="absolute top-4 left-4 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800"
            title={t('بستن جزئیات', 'Close details')}
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded-lg">
              {t('گام ۰', 'Step 0')}
              {selectedNode.order} / 07
            </span>
            <h4 className="text-sm font-bold text-white">
              {selectedNode.name[language]}
            </h4>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed text-justify">
            {selectedNode.detailedDesc[language]}
          </p>

          {/* Privacy Distinction: Private vs Sharable Data Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {/* Private Data Container */}
            {selectedNode.privateItems && (
              <div className="p-3 bg-neutral-900 border border-rose-900/40 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span>
                    {t('اطلاعات محرمانه (هرگز از سازمان خارج نمی‌شود):', 'Confidential Data (Never Leaves Organization):')}
                  </span>
                </div>
                <ul className="text-[11px] text-neutral-300 space-y-1 list-disc list-inside">
                  {selectedNode.privateItems[language].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sharable Data Container */}
            {selectedNode.sharableItems && (
              <div className="p-3 bg-neutral-900 border border-emerald-900/40 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>
                    {t('اطلاعات پالایش‌شده (مجاز برای بررسی متخصص):', 'Sanitized Data (Permitted for Expert Triage):')}
                  </span>
                </div>
                <ul className="text-[11px] text-neutral-300 space-y-1 list-disc list-inside">
                  {selectedNode.sharableItems[language].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-3 bg-neutral-950/50 border border-neutral-800/60 rounded-xl text-center text-xs text-neutral-400">
          {t(
            'روی هر یک از ۷ گام بالا کلیک کنید تا تفکیک داده‌های محرمانه و پالایش‌شده را بررسی نمایید.',
            'Click any of the 7 steps above to inspect which data remains strictly private vs which can be shared.'
          )}
        </div>
      )}
    </div>
  );
};
