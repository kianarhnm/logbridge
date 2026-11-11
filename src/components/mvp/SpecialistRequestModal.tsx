/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Incident, Expert, TechnicalCategory, IncidentSeverity } from '../../types';
import { INITIAL_EXPERTS } from '../../data/mockOpsData';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Users,
  Search,
  Lock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  DollarSign,
  AlertTriangle,
} from 'lucide-react';

interface SpecialistRequestModalProps {
  incident: Incident;
  onClose: () => void;
  onSubmitSuccess: (newRequestId: string) => void;
}

export const SpecialistRequestModal: React.FC<SpecialistRequestModalProps> = ({
  incident,
  onClose,
  onSubmitSuccess,
}) => {
  const { lang, t, addExpertRequest } = useApp();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // 1: Case Prep & Redaction, 2: Skill & Outcome Form, 3: Expert Discovery, 4: Review & Submit
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(INITIAL_EXPERTS[0]);

  // Form State
  const [domain, setDomain] = useState<TechnicalCategory>(incident.category);
  const [severity, setSeverity] = useState<IncidentSeverity>(incident.severity);
  const [description, setDescription] = useState(incident.description);
  const [actionsTaken, setActionsTaken] = useState(
    incident.stepsTaken || 'کانتینرها مجدداً راه‌اندازی شدند و پارامترهای اتصال تست گردید.'
  );
  const [expectedOutcome, setExpectedOutcome] = useState(
    'شناسایی و اصلاح ریشه مشکل، تنظیم مجدد کانفیگ‌ها و تحویل راهنمای پایدارسازی (Runbook).'
  );
  const [budgetPreference, setBudgetPreference] = useState('ساعتی طبق تعرفه مصوب یا پروژه‌ای تا ۵ میلیون تومان');
  
  // Sanitized evidence logs
  const [sanitizedLogs, setSanitizedLogs] = useState(
    incident.sanitizedLogs ||
      `[LOG-EXTRACT] 2026-11-08 10:41:00 ERROR ${incident.affectedSystem} : Out of capacity threshold
[STACK-TRACE] org.logbridge.service.WorkerPool.exhausted(WorkerPool.java:142)
[SECURITY-NOTE] Auth Token: [REDACTED_JWT_TOKEN_94fa2]
[SECURITY-NOTE] DB Password: [REDACTED_CREDENTIAL]
[NETWORK] client_ip=192.168.*** (Internal Virtual Network)`
  );
  const [redactionApproved, setRedactionApproved] = useState(true);

  const handleNext = () => {
    if (step < 4) setStep((s) => (s + 1) as any);
  };

  const handlePrev = () => {
    if (step > 1) setStep((s) => (s - 1) as any);
  };

  const handleSubmit = () => {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newReqId = `REQ-2026-${randNum}`;

    addExpertRequest({
      id: `req-${Date.now()}`,
      requestId: newReqId,
      incidentId: incident.id,
      incidentTicket: incident.ticketNumber,
      incidentTitle: incident.title,
      organizationName: 'سامانه لجستیک دیجی‌پارس (فعال)',
      technicalDomain: domain,
      requiredSkills: selectedExpert ? selectedExpert.skills.slice(0, 3) : ['Linux', 'Troubleshooting'],
      severity: severity,
      problemDescription: description,
      sanitizedEvidence: sanitizedLogs,
      actionsTaken: actionsTaken,
      expectedOutcome: expectedOutcome,
      budgetPreference: budgetPreference,
      status: 'case_approved',
      matchedExpert: selectedExpert || undefined,
      createdAt: 'هم‌اکنون',
    });

    onSubmitSuccess(newReqId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="p-5 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>LogBridge // Specialist Request Gateway</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 mt-1">
              {t('درخواست همکاری با متخصص فنی (برون‌سپاری امن)', 'Secure Specialist Request Dispatch')}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Wizard Bar */}
        <div className="px-6 py-3 bg-neutral-200/70 dark:bg-neutral-950 border-b border-neutral-300 dark:border-neutral-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 font-medium">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 1 ? 'bg-emerald-600 text-white' : 'bg-neutral-300 dark:bg-neutral-800 text-neutral-600'
              }`}
            >
              1
            </span>
            <span className={step === 1 ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-neutral-500'}>
              {t('پالایش و محرمانگی لاگ', 'Sanitization')}
            </span>
          </div>

          <span className="text-neutral-400">→</span>

          <div className="flex items-center gap-2 font-medium">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 2 ? 'bg-emerald-600 text-white' : 'bg-neutral-300 dark:bg-neutral-800 text-neutral-600'
              }`}
            >
              2
            </span>
            <span className={step === 2 ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-neutral-500'}>
              {t('مشخصات و اهداف پرونده', 'Case Details')}
            </span>
          </div>

          <span className="text-neutral-400">→</span>

          <div className="flex items-center gap-2 font-medium">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 3 ? 'bg-emerald-600 text-white' : 'bg-neutral-300 dark:bg-neutral-800 text-neutral-600'
              }`}
            >
              3
            </span>
            <span className={step === 3 ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-neutral-500'}>
              {t('کشف و انتخاب متخصص', 'Expert Discovery')}
            </span>
          </div>

          <span className="text-neutral-400">→</span>

          <div className="flex items-center gap-2 font-medium">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step === 4 ? 'bg-emerald-600 text-white' : 'bg-neutral-300 dark:bg-neutral-800 text-neutral-600'
              }`}
            >
              4
            </span>
            <span className={step === 4 ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-neutral-500'}>
              {t('تایید و ارسال', 'Review & Dispatch')}
            </span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-neutral-800 dark:text-neutral-200">
          {/* STEP 1: Sanitization & Redaction */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-start gap-3">
                <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-100">
                    {t('بررسی خودکار شواهد و مهار نشت اسرار فنی', 'Automated Evidence Redaction & Privacy Check')}
                  </h4>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {t(
                      'پلتفرم LogBridge به طور خودکار توکن‌های احراز هویت، کلیدهای دسترسی، و پسوردهای موجود در خروجی لاگ را ماسک کرده است.',
                      'LogBridge has automatically redacted credentials and tokens from diagnostic logs before external dispatch.'
                    )}
                  </p>
                </div>
              </div>

              <div>
                <label className="font-bold block mb-1">
                  {t('شواهد و لاگ‌های پالایش‌شده برای ارائه به متخصص:', 'Sanitized Logs & Evidence for Specialist:')}
                </label>
                <textarea
                  value={sanitizedLogs}
                  onChange={(e) => setSanitizedLogs(e.target.value)}
                  rows={6}
                  className="w-full p-3 rounded-xl font-mono text-[11px] bg-neutral-200/70 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-neutral-200/40 dark:bg-neutral-800/60 border border-neutral-300/60 dark:border-neutral-700/60">
                <input
                  type="checkbox"
                  id="redactionConfirm"
                  checked={redactionApproved}
                  onChange={(e) => setRedactionApproved(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <label htmlFor="redactionConfirm" className="cursor-pointer font-medium text-xs">
                  {t(
                    'تایید می‌کنم که لاگ‌های فوق عاری از اطلاعات هویتی کاربران و اسرار محرمانه سازمانی است.',
                    'I confirm that the above logs contain no unredacted production secrets or customer PII.'
                  )}
                </label>
              </div>
            </div>
          )}

          {/* STEP 2: Case Details Form */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold block mb-1">{t('دامنه تخصصی:', 'Technical Domain:')}</label>
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-medium"
                  >
                    <option value="infrastructure">Infrastructure & Servers</option>
                    <option value="linux">Linux Kernel & OS</option>
                    <option value="database">Database (Postgres/Redis/MySQL)</option>
                    <option value="backend">Backend & Microservices</option>
                    <option value="network">Network & Ingress</option>
                    <option value="security">Cybersecurity & Hardening</option>
                    <option value="devops">DevOps & CI/CD</option>
                    <option value="performance">Application Performance</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold block mb-1">{t('درجه فوریت:', 'Severity Tier:')}</label>
                  <select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-medium"
                  >
                    <option value="critical">Critical (خاموشی کامل سرویس)</option>
                    <option value="high">High (اختلال در بخشی از تراکنش‌ها)</option>
                    <option value="medium">Medium (افت کارایی و کندی)</option>
                    <option value="low">Low (مشاوره پیشگیرانه)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold block mb-1">{t('شرح دقیق رخداد فنی:', 'Problem Description:')}</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full p-3 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">
                  {t('اقدامات و آزمون‌های قبلی تیم داخلی:', 'Actions Already Taken by Internal Team:')}
                </label>
                <input
                  type="text"
                  value={actionsTaken}
                  onChange={(e) => setActionsTaken(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">
                  {t('نتیجه و خروجی مورد انتظار از متخصص:', 'Expected Outcome / Deliverable:')}
                </label>
                <input
                  type="text"
                  value={expectedOutcome}
                  onChange={(e) => setExpectedOutcome(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">
                  {t('ترجیح بودجه یا نرخ همکاری:', 'Budget / Rate Preference:')}
                </label>
                <input
                  type="text"
                  value={budgetPreference}
                  onChange={(e) => setBudgetPreference(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Expert Discovery & Profile Review */}
          {step === 3 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-neutral-900 dark:text-neutral-100">
                  {t('متخصصان متناسب با این رخداد:', 'Recommended Specialists for this Incident:')}
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">
                  {INITIAL_EXPERTS.length} verified available
                </span>
              </div>

              <div className="space-y-3">
                {INITIAL_EXPERTS.map((exp) => {
                  const isChosen = selectedExpert?.id === exp.id;
                  return (
                    <div
                      key={exp.id}
                      onClick={() => setSelectedExpert(exp)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isChosen
                          ? 'bg-neutral-200/90 dark:bg-neutral-800 border-emerald-500 ring-2 ring-emerald-500/30'
                          : 'bg-neutral-100 dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-800 hover:border-neutral-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={exp.avatar}
                          alt={exp.name}
                          className="w-12 h-12 rounded-xl object-cover shrink-0 border border-neutral-300 dark:border-neutral-700"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">
                              {exp.name}
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono">
                              ★ {exp.rating} ({exp.reviewCount})
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{exp.title[lang]}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {exp.skills.slice(0, 3).map((s, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-neutral-200 dark:border-neutral-800">
                        <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                          {exp.hourlyRate}
                        </span>
                        <span className="text-[10px] text-neutral-500">{exp.availability[lang]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Review & Submit */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-300 dark:border-neutral-700 pb-2">
                  <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                    {t('خلاصه درخواست همکاری تخصصی', 'Specialist Collaboration Request Summary')}
                  </span>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    Incident #{incident.ticketNumber}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-500 block">{t('عنوان رخداد:', 'Incident Title:')}</span>
                    <span className="font-medium">{incident.title}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{t('متخصص منتخب:', 'Selected Specialist:')}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      {selectedExpert ? selectedExpert.name : t('تطبیق خودکار توسط سامانه', 'Auto-Match')}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{t('دامنه فنی:', 'Technical Domain:')}</span>
                    <span className="font-mono">{domain}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{t('بودجه پیشنهادی:', 'Budget / Terms:')}</span>
                    <span>{budgetPreference}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-300 dark:border-neutral-700">
                  <span className="text-neutral-500 block mb-1">{t('شرح خلاصه:', 'Summary Scope:')}</span>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-neutral-950 text-white rounded-xl text-xs space-y-1 font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LogBridge Protocol: NDA & Controlled Scope Active</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-sans">
                  {t(
                    'ارسال این درخواست منجر به باز شدن کانال ارتباطی امن با متخصص شده و دسترسی تنها به لاگ‌های پالایش‌شده محدود خواهد بود.',
                    'Dispatching will create a zero-trust collaborative thread restricted exclusively to sanitized logs.'
                  )}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 bg-neutral-200/80 dark:bg-neutral-950 border-t border-neutral-300 dark:border-neutral-800 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-300 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-400 cursor-pointer"
            >
              {t('مرحله قبل', 'Previous Step')}
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-800 cursor-pointer"
            >
              {t('انصراف', 'Cancel')}
            </button>
          )}

          {step < 4 ? (
            <button
              onClick={handleNext}
              disabled={step === 1 && !redactionApproved}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-neutral-900 dark:bg-emerald-600 hover:bg-neutral-800 dark:hover:bg-emerald-700 transition cursor-pointer disabled:opacity-50"
            >
              {t('مرحله بعد', 'Next Step')}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition cursor-pointer flex items-center gap-1.5 shadow-md"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('تایید نهایی و ارسال درخواست متخصص', 'Confirm & Dispatch Request')}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
