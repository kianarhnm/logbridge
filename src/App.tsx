/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { BottomNav } from './components/common/BottomNav';
import { LogBridgeLogo } from './components/common/LogBridgeLogo';
import { ProjectExplanation } from './components/explanation/ProjectExplanation';
import { OrganizationWorkspace } from './components/workspaces/OrganizationWorkspace';
import { ExpertWorkspace } from './components/workspaces/ExpertWorkspace';
import { UserRole } from './types';
import {
  BookOpen,
  Activity,
  Briefcase,
  Shield,
  User,
  ShieldAlert,
  ChevronDown,
  Sparkles,
  Info,
} from 'lucide-react';

const ROLE_CONFIG: Record<
  UserRole,
  { label: { fa: string; en: string }; icon: string; badgeClass: string; desc: { fa: string; en: string } }
> = {
  org_admin: {
    label: { fa: 'مدیر ارشد سازمان (Organization Admin)', en: 'Organization Administrator' },
    icon: '👑',
    badgeClass: 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30',
    desc: {
      fa: 'دسترسی کامل به تمام حوزه‌ها، سیاست‌ها، تایید انتشار پرونده به متخصصان و مدیریت اعضا',
      en: 'Full access to all telemetry domains, policies, and expert sharing approvals',
    },
  },
  infra_operator: {
    label: { fa: 'اپراتور زیرساخت و سرور (Infrastructure Operator)', en: 'Infrastructure / Server Operator' },
    icon: '🖥️',
    badgeClass: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30',
    desc: {
      fa: 'پایش سیستم‌های عامل لینوکس، سرورها، کانتینرها، CPU و حافظه',
      en: 'Linux OS, servers, containers, CPU and memory utilization',
    },
  },
  software_operator: {
    label: { fa: 'اپراتور نرم‌افزار و برنامه‌ها (Software Operator)', en: 'Software / Application Operator' },
    icon: '💻',
    badgeClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    desc: {
      fa: 'پایش لاگ‌های فرانت‌اند، بک‌اند، خطاهای API و استثناهای برنامه',
      en: 'Frontend, backend, API failures and application exceptions',
    },
  },
  network_operator: {
    label: { fa: 'اپراتور شبکه و امنیت (Network & Security Operator)', en: 'Network / Security Operator' },
    icon: '🌐',
    badgeClass: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
    desc: {
      fa: 'پایش اتصال شبکه، DNS، فایروال، TLS و تلاش‌های مشکوک احراز هویت',
      en: 'Network connectivity, DNS, firewall, TLS and authentication events',
    },
  },
  database_operator: {
    label: { fa: 'اپراتور پایگاه داده و ذخیره‌سازی (Database Operator)', en: 'Database / Storage Operator' },
    icon: '🗄️',
    badgeClass: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
    desc: {
      fa: 'پایش خطاهای دیتابیس، کوئری‌های کند، استخر اتصال، دیسک و کش',
      en: 'Database errors, slow queries, connection pool, and disk storage',
    },
  },
  hardware_operator: {
    label: { fa: 'اپراتور سخت‌افزار و تجهیزات (Hardware Operator)', en: 'Hardware Operator' },
    icon: '⚙️',
    badgeClass: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30',
    desc: {
      fa: 'پایش دمای پردازنده، سلامت دیسک، سرعت فن، توان پاور و حسگرهای فیزیکی',
      en: 'CPU temperature, disk health, fan speed, power supply and sensors',
    },
  },
  expert: {
    label: { fa: 'متخصص فنی مستقل (Technical Expert)', en: 'Technical Expert' },
    icon: '🎓',
    badgeClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    desc: {
      fa: 'دسترسی به بازارگاه متخصصان، پرونده‌های پالایش‌شده، ارسال پروپوزال و اتاق همکاری',
      en: 'Expert marketplace, sanitized cases, bid submission and collaboration',
    },
  },
  // Legacy aliases for backward compatibility
  technical_staff: {
    label: { fa: 'پرسنل فنی عمومی', en: 'Technical Staff' },
    icon: '🛠️',
    badgeClass: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30',
    desc: { fa: 'پرسنل فنی سازمان با دسترسی دامنه', en: 'Technical staff domain scope' },
  },
  hardware_specialist: {
    label: { fa: 'اپراتور سخت‌افزار (قدیمی)', en: 'Hardware Operator (Legacy)' },
    icon: '⚙️',
    badgeClass: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30',
    desc: { fa: 'پایش سخت‌افزار و سنسورها', en: 'Hardware scope' },
  },
  backend_engineer: {
    label: { fa: 'مهندس بک‌اند (قدیمی)', en: 'Backend Operator (Legacy)' },
    icon: '💻',
    badgeClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    desc: { fa: 'پایش سرویس‌های بک‌اند', en: 'Backend scope' },
  },
  frontend_engineer: {
    label: { fa: 'مهندس فرانت‌اند (قدیمی)', en: 'Frontend Operator (Legacy)' },
    icon: '💻',
    badgeClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    desc: { fa: 'پایش رابط کاربر و خطاهای کلاینت', en: 'Frontend scope' },
  },
  infra_engineer: {
    label: { fa: 'مهندس زیرساخت (قدیمی)', en: 'Infra Operator (Legacy)' },
    icon: '🖥️',
    badgeClass: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30',
    desc: { fa: 'پایش زیرساخت', en: 'Infra scope' },
  },
  dba: {
    label: { fa: 'راهبر دیتابیس (قدیمی)', en: 'DBA (Legacy)' },
    icon: '🗄️',
    badgeClass: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
    desc: { fa: 'پایش دیتابیس', en: 'DB scope' },
  },
  network_engineer: {
    label: { fa: 'مهندس شبکه (قدیمی)', en: 'Network Operator (Legacy)' },
    icon: '🌐',
    badgeClass: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
    desc: { fa: 'پایش شبکه', en: 'Network scope' },
  },
  security_engineer: {
    label: { fa: 'مهندس امنیت (قدیمی)', en: 'Security Operator (Legacy)' },
    icon: '🛡️',
    badgeClass: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30',
    desc: { fa: 'پایش امنیت', en: 'Security scope' },
  },
  it_operator: {
    label: { fa: 'اپراتور ارشد IT (قدیمی)', en: 'IT Operator (Legacy)' },
    icon: '🛠️',
    badgeClass: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30',
    desc: { fa: 'پایش عمومی IT', en: 'General IT operations' },
  },
  platform_admin: {
    label: { fa: 'مدیر کل پلتفرم (قدیمی)', en: 'Platform Admin (Legacy)' },
    icon: '⚖️',
    badgeClass: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30',
    desc: { fa: 'مدیریت کلان پلتفرم', en: 'Platform governance' },
  },
};

function AppContent() {
  const {
    mainSection,
    setMainSection,
    activeWorkspace,
    setActiveWorkspace,
    currentRole,
    setCurrentRole,
    t,
    lang,
  } = useApp();

  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const activeRoleData = ROLE_CONFIG[currentRole] || ROLE_CONFIG.org_admin;

  return (
    <div className="min-h-screen bg-[#171719] text-[#EDEDEF] flex flex-col font-sans transition-colors duration-200">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#171719]/95 backdrop-blur-md border-b border-[#2E2A2D] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <LogBridgeLogo size="sm" showTagline={false} />
            <div className="hidden lg:block border-r rtl:border-l border-neutral-300 dark:border-neutral-700 h-6 mx-1" />
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400 hidden lg:block">
              {t(
                'مدیریت هوشمند رخدادهای فنی و دسترسی امن به متخصصان',
                'Intelligent Incident Operations & Secure Expert Network'
              )}
            </span>
          </div>

          {/* Center Navigation: Main Sections & Workspace Selector */}
          <div className="flex items-center gap-2">
            {/* Documentation vs Workspace Switcher */}
            <div className="flex items-center gap-1 bg-neutral-200/60 dark:bg-neutral-800 p-1 rounded-xl">
              <button
                onClick={() => setMainSection('explanation')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  mainSection === 'explanation'
                    ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('تحلیل و مستندات', 'Documentation')}</span>
              </button>

              <button
                onClick={() => setMainSection('workspace')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  mainSection === 'workspace'
                    ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('میزکارهای اجرایی', 'Workspaces')}</span>
              </button>
            </div>

            {/* When in Workspace mode: Distinct Workspace Switcher (Org vs Expert) */}
            {mainSection === 'workspace' && (
              <div className="flex items-center gap-1 bg-neutral-200/90 dark:bg-neutral-850 p-1 rounded-xl border border-neutral-300 dark:border-neutral-700/60 shadow-xs">
                <button
                  onClick={() => setActiveWorkspace('organization')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeWorkspace === 'organization'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                  title={t('کنسول عملیات و رصدپذیری سازمان', 'Organization Observability Console')}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span className="truncate">{t('کنسول سازمان', 'Organization')}</span>
                </button>

                <button
                  onClick={() => setActiveWorkspace('expert')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeWorkspace === 'expert'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                  title={t('بازارگاه حرفه‌ای متخصصان مستقل', 'Expert Professional Marketplace')}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span className="truncate">{t('میزکار متخصص', 'Expert')}</span>
                </button>
              </div>
            )}
          </div>

          {/* Role-Based Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer shadow-xs ${activeRoleData.badgeClass}`}
            >
              <span className="text-sm">{activeRoleData.icon}</span>
              <span className="hidden md:inline">{activeRoleData.label[lang].split('(')[0]}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {isRoleDropdownOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-72 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-2 z-50 animate-fadeIn text-xs text-white space-y-1">
                <div className="px-3 py-2 border-b border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>{t('انتخاب نقش کاربر (RBAC):', 'Switch User Role:')}</span>
                  <span className="text-emerald-400 font-mono">LogBridge RBAC</span>
                </div>

                {(['org_admin', 'infra_operator', 'software_operator', 'network_operator', 'database_operator', 'hardware_operator', 'expert'] as UserRole[]).map((rKey) => {
                  const cfg = ROLE_CONFIG[rKey];
                  const isSelected = currentRole === rKey;

                  return (
                    <button
                      key={rKey}
                      onClick={() => {
                        setCurrentRole(rKey);
                        if (rKey === 'expert') {
                          setActiveWorkspace('expert');
                        } else if (activeWorkspace === 'expert') {
                          setActiveWorkspace('organization');
                        }
                        setIsRoleDropdownOpen(false);
                      }}
                      className={`w-full text-right rtl:text-right ltr:text-left p-2.5 rounded-xl transition cursor-pointer flex items-start gap-2.5 ${
                        isSelected
                          ? 'bg-neutral-800 border border-neutral-700'
                          : 'hover:bg-neutral-800/60'
                      }`}
                    >
                      <span className="text-base shrink-0 mt-0.5">{cfg.icon}</span>
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-neutral-100">{cfg.label[lang]}</span>
                          {isSelected && <span className="text-emerald-400 font-bold">✓</span>}
                        </div>
                        <p className="text-[10px] text-neutral-400 leading-relaxed">
                          {cfg.desc[lang]}
                        </p>
                      </div>
                    </button>
                  );
                })}

                <div className="p-2 border-t border-neutral-800 text-[10px] text-neutral-500 text-center">
                  {t('تغییر نقش دسترسی‌ها و نمای مجاز را بلافاصله به‌روزرسانی می‌کند.', 'Switching role instantly recalculates permitted workspace actions.')}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-28">
        {mainSection === 'explanation' ? (
          <ProjectExplanation />
        ) : activeWorkspace === 'organization' ? (
          <OrganizationWorkspace />
        ) : (
          <ExpertWorkspace />
        )}
      </main>

      {/* Persistent Fixed Bottom Navigation Bar */}
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
