/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PROCESS_BOUNDARIES_DATA } from '../../data/phase1Data';
import { DetailedDocumentationItem } from '../../types';
import { DocumentationModal } from '../common/DocumentationModal';
import { TechnicalLogBackdrop } from '../common/TechnicalLogBackdrop';
import { Globe, Wrench, Shield, ArrowRight, Laptop, Server, Cable, ExternalLink } from 'lucide-react';

export const ProcessBoundaries: React.FC = () => {
  const { language, t } = useApp();
  const [filterMode, setFilterMode] = useState<'all' | 'online' | 'offline'>('all');
  const [selectedDocItem, setSelectedDocItem] = useState<DetailedDocumentationItem | null>(null);
  const d = PROCESS_BOUNDARIES_DATA;

  const openBoundaryDoc = (item: any, isOnline: boolean) => {
    const doc: DetailedDocumentationItem = {
      id: item.id,
      title: item.title,
      subtitle: {
        fa: isOnline ? 'فرآیند تمام‌دیجیتال در بستر پلتفرم ابری' : 'خدمات نیازمند حضور فیزیکی یا دسترسی سخت‌افزاری برون‌پلتفرم',
        en: isOnline ? 'Fully digital online platform process' : 'Physical or on-premise hardware operational boundary',
      },
      badge: {
        fa: isOnline ? 'عملیات برخط پلتفرم' : 'مرز خدمات فیزیکی',
        en: isOnline ? 'Online Platform Operation' : 'Physical Service Boundary',
        type: isOnline ? 'implemented' : 'conceptual',
      },
      definition: item.desc,
      purpose: {
        fa: isOnline
          ? 'امکان پاسخگویی بی‌درنگ، خودکارسازی ثبت رخداد و اتصال امن بدون وابستگی به جغرافیا.'
          : 'حفظ استقلال پلتفرم نرم‌افزاری و اجتناب از ادعای نادرست در مورد انجام اموری که ذاتاً نیازمند حضور فیزیکی در محل دیتاسنتر هستند.',
        en: isOnline
          ? 'Enables real-time response, automated incident triage, and location-agnostic collaboration.'
          : 'Preserves software platform integrity by avoiding false claims of handling tasks that physically require on-site datacenter presence.',
      },
      problemAddressed: {
        fa: isOnline
          ? 'از میان برداشتن مرزهای جغرافیایی و تسریع در دسترسی به نخبگان فنی سراسر کشور در نیمه‌شب.'
          : 'تعیین شفاف تعهدات قانونی و مرزبندی قراردادهای SLA در برابر خرابی‌های کابل و سوختگی فیزیکی قطعات.',
        en: isOnline
          ? 'Eliminates geographic boundaries and speeds up access to national specialist talent during off-hour outages.'
          : 'Clearly defines legal liabilities and SLA boundaries regarding physical cable failures and hardware burns.',
      },
      components: {
        fa: isOnline
          ? ['موتور تحت وب سامانه', 'درگاه پالایش و فیلترینگ لاگ‌ها', 'فضای تعاملی امن']
          : ['کابل‌کشی فیزیکی رک', 'تجهیزات تست ولتاژ و فیبر نوری', 'کلیدهای فیزیکی امنیتی و توکن‌های سخت‌افزاری'],
        en: isOnline
          ? ['Web application engine', 'Client-side log redaction gateway', 'Secure collaboration workspace']
          : ['Physical rack cabling', 'Fiber & voltage hardware diagnostics', 'Physical HSM keys and air-gapped tokens'],
      },
      workflow: {
        fa: isOnline
          ? [
              'دریافت اطلاعات دیجیتال از کاربر',
              'پردازش در مرورگر و اعمال فیلترهای محرمانگی',
              'ثبت پایدار در پایگاه داده پلتفرم',
              'انتقال خروجی امن به کارشناس',
            ]
          : [
              'اعزام کارشناس سخت‌افزار به محل دیتاسنتر سازمان',
              'بررسی چشمی چراغ‌های وضعیت سرور و عیب‌یابی با دستگاه تستر',
              'تعویض فیزیکی ماژول رم، هارد یا کابل شبکه',
              'راه‌اندازی مجدد فیزیکی و تست برق',
            ],
        en: isOnline
          ? [
              'Digital payload ingestion from client',
              'Browser processing & secret sanitization',
              'Persistent storage in platform registry',
              'Dispatch to assigned specialist sandbox',
            ]
          : [
              'Field technician dispatched to physical datacenter',
              'Visual inspection of server chassis LED alarms and diagnostic cable tests',
              'Physical replacement of burnt RAM, disk drives, or patch cables',
              'Cold reboot and electrical verification',
            ],
      },
      inputs: {
        fa: isOnline ? ['تیکت‌های متنی', 'لاگ‌های نرم‌افزاری', 'کدهای کانفیگ'] : ['تجهیزات یدکی', 'دسترسی فیزیکی به اتاق سرور'],
        en: isOnline ? ['Text tickets', 'Software error logs', 'Config files'] : ['Replacement hardware', 'Physical datacenter access passes'],
      },
      processing: {
        fa: isOnline
          ? ['تطبیق الگوهای امنیتی، ذخیره‌سازی، و ردیابی وضعیت تیکت']
          : ['تعمیرات مکانیکی، مونتاژ سخت‌افزاری و سربندی فیبر نوری'],
        en: isOnline
          ? ['Security regex parsing, database persistence, state transitions']
          : ['Mechanical assembly, fiber splicing, and hardware seating'],
      },
      outputs: {
        fa: isOnline ? ['پرونده رخداد دیجیتال و راهکار نرم‌افزاری'] : ['سخت‌افزار سالم و اتصال فیزیکی شبکه برقرارشده'],
        en: isOnline ? ['Digital incident passport and software resolution'] : ['Restored hardware operation and physical network link'],
      },
      implementationApproach: {
        fa: isOnline
          ? 'پیاده‌سازی کامل با React و TypeScript در مرورگر.'
          : 'برون‌سپاری به تیم‌های پشتیبانی دیتاسنتر یا ارجاع به تکنسین‌های فیزیکی بومی.',
        en: isOnline
          ? 'Fully implemented with React and TypeScript in browser.'
          : 'Outsourced to datacenter on-site support or physical field technicians.',
      },
      executionProcess: {
        fa: isOnline
          ? 'کاربر به صورت ۲۴ ساعته و آنی از هر نقطه‌ای به آن دسترسی دارد.'
          : 'نیازمند هماهنگی زمان ورود به اتاق سرور، مجوزهای حراستی و حضور در محل است.',
        en: isOnline
          ? 'Accessible 24/7 immediately from any browser globally.'
          : 'Requires security clearance, datacenter badge access, and travel time.',
      },
      relationships: {
        fa: 'تفکیک‌کننده مسئولیت‌های نرم‌افزاری فاز ۱ از نیازمندی‌های فیزیکی سازمان.',
        en: 'Defines software responsibilities of Phase 1 apart from physical enterprise requirements.',
      },
      requirements: {
        fa: isOnline ? ['دسترسی اینترنت و مرورگر'] : ['حضور فیزیکی در محل رک‌های سرور'],
        en: isOnline ? ['Internet connection and modern browser'] : ['Physical on-premise presence at server rack'],
      },
      validation: {
        fa: 'بررسی عدم تداخل مسئولیت‌های پلتفرم با وظایف فیزیکی تیم‌های پشتیبانی دیتاسنتر.',
        en: 'Verified through clean separation between digital platform duties and datacenter physical maintenance.',
      },
      currentStatus: {
        fa: isOnline ? 'پیاده‌سازی‌شده در فاز ۱' : 'خارج از دامنه نرم‌افزاری پلتفرم',
        en: isOnline ? 'Implemented in Phase 1' : 'Strictly external to software platform scope',
      },
    };
    setSelectedDocItem(doc);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 mb-1">
          <span className="text-emerald-600 dark:text-emerald-400">/analysis/section_05</span>
          <span>·</span>
          <span>online_vs_offline_boundaries</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          {t('مرزبندی فرآیندهای برخط و برون‌پلتفرمی (Online & Offline Process Boundaries)', 'Online and Offline Process Boundaries')}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {t(
            'تفکیک صریح عملیاتی که به صورت تمام‌دیجیتال در بستر وب‌سایت انجام می‌شوند از فعالیت‌های نیازمند حضور فیزیکی یا دسترسی سخت‌افزاری',
            'Clear operational demarcation distinguishing cloud/web digital platform capabilities from physical datacenter on-site requirements'
          )}
        </p>
      </div>

      {/* Filter Tabs with Gray Surfaces */}
      <div className="flex items-center gap-1.5 p-1 bg-neutral-200/60 dark:bg-neutral-800 rounded-xl w-fit">
        <button
          type="button"
          onClick={() => setFilterMode('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            filterMode === 'all'
              ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          {t('نمایش هر دو حوزه (All)', 'All Boundaries')}
        </button>
        <button
          type="button"
          onClick={() => setFilterMode('online')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            filterMode === 'online'
              ? 'bg-neutral-100 dark:bg-neutral-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          {t('فرآیندهای برخط پلتفرم (Online)', 'Online Platform')}
        </button>
        <button
          type="button"
          onClick={() => setFilterMode('offline')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            filterMode === 'offline'
              ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
          }`}
        >
          {t('خدمات فیزیکی برون‌پلتفرم (Offline)', 'Physical & External')}
        </button>
      </div>

      {/* Comparison Grid with Gray Surfaces */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Column 1: Online Digital Platform Operations */}
        {(filterMode === 'all' || filterMode === 'online') && (
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-neutral-200/60 dark:bg-neutral-800 text-emerald-700 dark:text-emerald-400 rounded-lg">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {t('فرآیندهای تمام‌دیجیتال در پلتفرم (Online Platform Operations)', 'Online Digital Platform Operations')}
                  </h3>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono">
                    {t('جریان‌های کاری تمام‌نرم‌افزاری در بستر وب', 'Executed entirely inside the web interface')}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                {t('کلیک برای جزئیات', 'Click item')}
              </span>
            </div>

            <div className="space-y-3">
              {d.online.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openBoundaryDoc(item, true)}
                  className="p-4 bg-neutral-200/40 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 rounded-xl space-y-1.5 cursor-pointer group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title[language]}
                    </h4>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-neutral-200/60 dark:bg-neutral-800 px-2 py-0.5 rounded">
                        {item.component[language]}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition" />
                    </div>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                    {item.desc[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Column 2: Physical / External On-Site Operations */}
        {(filterMode === 'all' || filterMode === 'offline') && (
          <div className="bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-lg">
                  <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {t('خدمات فیزیکی و برون‌پلتفرمی (Physical & On-Premise Services)', 'Physical & On-Premise Operations')}
                  </h3>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {t('اموری که به دلیل وابستگی سخت‌افزاری خارج از پلتفرم باقی می‌مانند', 'Operations strictly external due to physicality')}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                {t('کلیک برای جزئیات', 'Click item')}
              </span>
            </div>

            <div className="space-y-3">
              {d.offline.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openBoundaryDoc(item, false)}
                  className="p-4 bg-neutral-200/40 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 rounded-xl space-y-1.5 cursor-pointer group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title[language]}
                    </h4>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-200/60 dark:bg-neutral-800 px-2 py-0.5 rounded">
                        {t('خارج از پلتفرم', 'External / Physical')}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition" />
                    </div>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                    {item.desc[language]}
                  </p>
                  <div className="pt-1 text-[11px] text-neutral-500 border-t border-neutral-300/50 dark:border-neutral-800/60">
                    <strong className="text-neutral-700 dark:text-neutral-300">{t('علت تفکیک: ', 'Demarcation Reason: ')}</strong>
                    {item.reason[language]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Summary Note with Gray Tone */}
      <div className="p-4 bg-neutral-200/50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-xs text-neutral-600 dark:text-neutral-400 text-justify leading-relaxed">
        <strong className="text-neutral-900 dark:text-neutral-100">
          {t('جمع‌بندی حاکمیت معماری: ', 'Architectural Governance Takeaway: ')}
        </strong>
        {t(
          'این مرزبندی تضمین می‌کند که پلتفرم وعده‌های بی‌پایه یا فراتر از توان نرم‌افزار ارائه نمی‌دهد. مسئولیت‌های دیجیتال با بالاترین ضریب امنیت و سرعت در فضای ابری انجام می‌شوند، در حالی که خدمات فیزیکی نیازمند تیم‌های مقیم در دیتاسنتر باقی می‌مانند.',
          'This demarcation guarantees that the platform never makes unrealistic promises beyond software capabilities. Digital operations achieve maximal speed and security in the cloud, while physical datacenter operations are cleanly delegated to on-premise hardware teams.'
        )}
      </div>

      {/* 14-Aspect Detailed Documentation Modal */}
      {selectedDocItem && (
        <DocumentationModal
          item={selectedDocItem}
          onClose={() => setSelectedDocItem(null)}
        />
      )}
    </div>
  );
};
