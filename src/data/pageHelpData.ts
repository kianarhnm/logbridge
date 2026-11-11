/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageHelpContent } from '../types';

export const PAGE_HELP_DATA: Record<string, PageHelpContent> = {
  documentation_index: {
    pageKey: 'documentation_index',
    title: { fa: 'راهنمای مستندات معماری و کسب‌وکار', en: 'Documentation & Architecture Guide' },
    purpose: {
      fa: 'ارائه مرجع جامع و استاندارد برای آشنایی کامل با چرخه عملکرد پلتفرم LogBridge، مدل درآمدی، معماری و نوآوری تلفیقی.',
      en: 'Serves as an exhaustive technical and business reference detailing LogBridge system lifecycle, economic model, and hybrid architecture.',
    },
    targetUsers: {
      fa: 'اساتید و داوران پروژه، معماران نرم‌افزار، مدیران فنی سازمان‌ها و سرمایه‌گذاران خطرپذیر.',
      en: 'Academic examiners, software architects, enterprise engineering leads, and venture evaluators.',
    },
    displayedInformation: {
      fa: [
        'کارت‌های طبقه‌بندی‌شده مفاهیم و مراحل کلیدی پلتفرم به صورت ۲ ستونه',
        'نشانگر سبز دسترسی‌پذیری و آمادگی مطالعه هر موضوع',
        'دسترسی با یک کلیک به صفحات عمیق و دارای معیارهای ۱۵ گانه مهندسی',
      ],
      en: [
        'Two-column grid of essential platform components and phases',
        'Green readiness indicators verifying full documentation availability',
        'Single-click access to comprehensive 15-aspect engineering deep-dives',
      ],
    },
    allowedActions: {
      fa: [
        'کلیک روی هر کارت برای مطالعه پرونده فنی کامل',
        'استفاده از منوی سه‌نقطه برای دسترسی سریع به جزئیات',
        'تغییر زبان به انگلیسی (LTR) یا بازگشت به نمای اصلی',
      ],
      en: [
        'Clicking any card to open its dedicated full specification page',
        'Triggering the corner three-dot control for direct navigation',
        'Switching between Persian (RTL) and English (LTR)',
      ],
    },
    relationshipToLogBridge: {
      fa: 'این بخش شالوده دانشی پروژه است و چرایی نیاز به محیط مانیتورینگ و بازارگاه متخصصان را اثبات می‌نماید.',
      en: 'Forms the foundational knowledge base justifying why the observability workspace and expert network exist.',
    },
  },

  monitoring_overview: {
    pageKey: 'monitoring_overview',
    title: { fa: 'راهنمای داشبورد جامع پایش و نقشه توپولوژی', en: 'Monitoring Overview & Topology Guide' },
    purpose: {
      fa: 'ارائه یک نمای ۳۶۰ درجه از وضعیت سلامت زنده سازمان انتخابی، جریان رویدادها، خطرات بحرانی و توپولوژی ارتباطی مؤلفه‌ها.',
      en: 'Provides a single-pane-of-glass operational view into tenant health, active telemetry flow, and inter-service topology.',
    },
    targetUsers: {
      fa: 'مهندسان کشیک عملیات (On-Call SRE)، مدیران زیرساخت و سرپرستان شیفت مرکز عملیات شبکه (NOC).',
      en: 'On-Call Site Reliability Engineers, Infrastructure Directors, and NOC Shift Supervisors.',
    },
    displayedInformation: {
      fa: [
        'کارت‌های سلامت ۷ منبع مجزا (فرانت، بک‌اند، دیتابیس، سرور، دیسک، شبکه و امنیت)',
        'نقشه سه‌بعدی تعاملی اتصال سرویس‌ها و جریان داده‌ها به هسته LogBridge',
        'خلاصه شمارش هشدارهای فعال، تیکت‌های باز و نرخ ارزیابی سیاست‌ها',
      ],
      en: [
        'Status cards across 7 decoupled categories (Frontend, Backend, DB, Server, Disk, Network, Security)',
        'Interactive 3D component topology mapping data streams into LogBridge Core',
        'Executive counts for open outages, pending alerts, and policy execution velocity',
      ],
    },
    allowedActions: {
      fa: [
        'تغییر سازمان فعال از منوی بالا برای بررسی داده‌های ایزوله هر شرکت',
        'کلیک روی هر گره در مدل سه‌بعدی برای هدایت مستقیم به پایش همان منبع',
        'تغییر حالت نمایش به جدول معمولی در صورت ترجیح',
        'بازنشانی شبیه‌ساز به مقادیر پیش‌فرض',
      ],
      en: [
        'Switching active tenant organization to observe isolated corporate telemetry',
        'Clicking any 3D node to jump directly into category-specific log and policy explorers',
        'Toggling between 3D topology and standard accessible grid views',
        'Resetting the simulation state to initial seed conditions',
      ],
    },
    relationshipToLogBridge: {
      fa: 'دروازه ورودی تمامی ماژول‌های عملیاتی بوده و نقطه کشف اولیه اختلالات پیش از تبدیل به بحران است.',
      en: 'The operational gateway where anomalies are first recognized before cascading into downtime.',
    },
  },

  monitoring_frontend: {
    pageKey: 'monitoring_frontend',
    title: { fa: 'راهنمای پایش لایه کلاینت و فرانت‌اند', en: 'Frontend & Client Monitoring Guide' },
    purpose: {
      fa: 'پایش بلادرنگ خطاهای جاوااسکریپت، درخواست‌های ناموفق XHR/Fetch، تاخیر رندرینگ و تجربه کاربری در مرورگرها.',
      en: 'Real-time observation of client-side JavaScript crashes, failed network requests, and Web Vitals anomalies.',
    },
    targetUsers: {
      fa: 'توسعه‌دهندگان ارشد فرانت‌اند، مهندسان تضمین کیفیت (QA) و مدیران محصول.',
      en: 'Frontend Tech Leads, QA Automation Engineers, and Digital Product Managers.',
    },
    displayedInformation: {
      fa: [
        'تعداد کل خطاهای کلاینت و نرخ خطای درخواست‌ها',
        'لاگ‌های متنی حاوی مرورگر، سیستم‌عامل کاربر، و مسیر URL فراخوانی‌شده',
        'سیاست‌های اختصاصی فعال فرانت‌اند مانند تشخیص رگبار خطای JS',
      ],
      en: [
        'Total client exception counts and HTTP request failure rates',
        'Structured log streams capturing browser agent, OS, and endpoint URI',
        'Dedicated frontend policies including JS Error Storm detection',
      ],
    },
    allowedActions: {
      fa: [
        'فیلتر کردن لاگ‌های فرانت‌اند بر اساس سطح خطا (ERROR, WARNING, INFO)',
        'جستجوی خطاهای خاص در بین لاگ‌ها و باز کردن جزئیات JSON',
        'تست و ارزیابی شبیه‌سازی‌شده سیاست‌های فرانت‌اند',
      ],
      en: [
        'Filtering client logs by severity level',
        'Inspecting structured trace payloads with one-click clipboard copy',
        'Simulating frontend policy rule evaluations against synthetic payloads',
      ],
    },
    relationshipToLogBridge: {
      fa: 'نشان‌دهنده مشکلات بیرونی‌ترین لایه برنامه قبل از این‌که کاربران به پشتیبانی تیکت بزنند.',
      en: 'Surfaces edge application failures before affected customers file support tickets.',
    },
  },

  monitoring_backend: {
    pageKey: 'monitoring_backend',
    title: { fa: 'راهنمای پایش سرویس‌های بک‌اند و API', en: 'Backend Services & API Monitoring Guide' },
    purpose: {
      fa: 'ردیابی کدهای ۵xx، خطاهای پردازش پس‌زمینه و تاخیر مسیرهای بحرانی API در مایکروسرویس‌ها.',
      en: 'Tracks 5xx exceptions, background worker failures, and API critical path latency across microservices.',
    },
    targetUsers: {
      fa: 'مهندسان بک‌اند، معماران توزیع‌شده و مدیران پایداری سرویس.',
      en: 'Backend Engineers, Distributed Systems Architects, and Service Owners.',
    },
    displayedInformation: {
      fa: [
        'نرخ خطای ۵xx در گیت‌وی، میانگین تاخیر پاسخ‌ها و تعداد جاب‌های ناموفق',
        'لاگ‌های دقیق همراه با شناسه‌های Trace-ID و نام سرویس مربوطه',
        'سیاست‌های فعال بک‌اند برای مقابله با کندی‌های مقطعی',
      ],
      en: [
        'HTTP 5xx error spikes, p95/p99 latency metrics, and worker crash frequencies',
        'Structured traces equipped with correlation trace IDs and service identifiers',
        'Active backend circuit-breaker and latency escalation policies',
      ],
    },
    allowedActions: {
      fa: [
        'مشاهده استک‌تریس خطاهای بک‌اند',
        'آزمودن شبیه‌ساز سیاست شکست جاب‌ها',
        'ایجاد مستقیم درخواست متخصص در صورت تکرار خطاهای بحرانی',
      ],
      en: [
        'Inspecting backend stack traces and error metadata',
        'Simulating worker failure policy actions',
        'Dispatching specialist collaboration requests directly from recurring errors',
      ],
    },
    relationshipToLogBridge: {
      fa: 'قلب پردازش تراکنش‌هاست و بیشترین تعداد رویدادهای پالایش‌شده را برای حل تخصصی تولید می‌کند.',
      en: 'The core transactional layer producing high-priority events requiring expert triage.',
    },
  },

  monitoring_database: {
    pageKey: 'monitoring_database',
    title: { fa: 'راهنمای پایش پایگاه داده و صف تراکنش‌ها', en: 'Database & Transaction Monitoring Guide' },
    purpose: {
      fa: 'پایش اشباع استخر اتصال (Connection Pool)، بن‌بست کوئری‌ها (Deadlocks) و تاخیر همگام‌سازی کپی‌ها (Replication Lag).',
      en: 'Monitors connection pool saturation, query deadlocks, slow query logs, and replica sync lag.',
    },
    targetUsers: {
      fa: 'مدیران پایگاه داده (DBA)، توسعه‌دهندگان پایگاه‌داده و متخصصان تیونینگ کارایی.',
      en: 'Database Administrators (DBAs), Data Engineers, and Database Tuning Specialists.',
    },
    displayedInformation: {
      fa: [
        'درصد اشباع کانکشن‌های فعال، زمان اجرای کوئری‌های کند و بن‌بست‌ها',
        'لاگ‌های تفکیک‌شده مربوط به PostgreSQL و Redis',
        'سیاست‌های خودکار هشدار به کشیک و راه‌اندازی Replicas',
      ],
      en: [
        'Active connection pool percentage, slow query thresholds, and deadlock flags',
        'Dedicated database query logs with duration timestamps',
        'Automated policies dispatching read-replica scaling alerts',
      ],
    },
    allowedActions: {
      fa: [
        'پایش کوئری‌های بالای ۵۰۰ میلی‌ثانیه',
        'تست سناریوی اتصال مجدد استخر به پایگاه داده در محیط شبیه‌ساز',
        'ارسال تیکت پالایش‌شده به معمار ارشد PostgreSQL در بازارگاه',
      ],
      en: [
        'Auditing queries exceeding latency thresholds',
        'Testing connection recovery policy triggers safely in demo mode',
        'Transferring sanitized database dump logs to certified DBAs',
      ],
    },
    relationshipToLogBridge: {
      fa: 'حساس‌ترین لایه نگهداری داده‌های سازمان است که نیازمند ماسک‌گذاری شدید پیش از هرگونه برون‌سپاری است.',
      en: 'Contains high-value enterprise data requiring strict automated redaction before external access.',
    },
  },

  monitoring_server: {
    pageKey: 'monitoring_server',
    title: { fa: 'راهنمای پایش سرور و سیستم‌عامل لینوکس', en: 'Server & Linux OS Monitoring Guide' },
    purpose: {
      fa: 'پایش مصرف CPU، اشباع رم کانتینرها، میانگین بار پردازشی (Load Average) و رخدادهای کرنل لینوکس (OOM Killer).',
      en: 'Monitors CPU utilization, container cgroup memory limits, system load averages, and kernel OOM signals.',
    },
    targetUsers: {
      fa: 'مدیران سیستم لینوکس (SysAdmins)، کارشناسان DevOps و ناظران سرور.',
      en: 'Linux System Administrators, DevOps Engineers, and Infrastructure Operators.',
    },
    displayedInformation: {
      fa: [
        'درصد لحظه‌ای مصرف پردازنده و حافظه رم سرورها',
        'رخدادهای سیستمی systemd و لاگ‌های مربوط به پایان ناگهانی پردازه‌ها',
        'سیاست‌های خودکار قرنطینه کانتینر در صورت نشت حافظه',
      ],
      en: [
        'Real-time CPU and RAM utilization metrics per compute host',
        'Systemd unit events and process termination traces',
        'Automated cgroup memory isolation and restart policies',
      ],
    },
    allowedActions: {
      fa: [
        'مشاهده اسپارک‌لاین مصرف منابع در ۲ ساعت گذشته',
        'بررسی رخداد نمونه SC-01 (نشت حافظه در لجستیک)',
        'اجرای آزمایشی پالایش لاگ کانتینر',
      ],
      en: [
        'Reviewing 2-hour resource utilization sparklines',
        'Inspecting the standard SC-01 memory leak scenario',
        'Executing safe simulated policy evaluations',
      ],
    },
    relationshipToLogBridge: {
      fa: 'لایه زیربنایی اجرای تمامی سرویس‌ها بوده و مستقیماً سناریوی استاندارد SC-01 را تغذیه می‌کند.',
      en: 'The compute layer hosting workloads and directly powering Scenario SC-01 validation.',
    },
  },

  monitoring_disk: {
    pageKey: 'monitoring_disk',
    title: { fa: 'راهنمای پایش فضای ذخیره‌سازی و سلامت فیزیکی دیسک', en: 'Storage & Disk Health Monitoring Guide' },
    purpose: {
      fa: 'تفکیک دقیق میان درصد پر بودن فضا (Capacity)، سلامت فیزیکی سخت‌افزار (SMART) و تاخیر خواندن/نوشتن (I/O Latency).',
      en: 'Explicitly separates disk capacity fullness, SMART hardware physical health, and read/write I/O performance.',
    },
    targetUsers: {
      fa: 'مهندسان ذخیره‌سازی (SAN/NAS)، پشتیبان‌های سخت‌افزار و کارشناسان دیتاسنتر.',
      en: 'SAN/Storage Engineers, Hardware Reliability Technicians, and Datacenter Specialists.',
    },
    displayedInformation: {
      fa: [
        'تفکیک شاخص سلامت SMART از درصد اشباع فضای هارد',
        'نرخ تاخیر عملیات I/O بر حسب میلی‌ثانیه',
        'سیاست‌های پیشگیرانه در صورت رسیدن فضای خالی به زیر ۱۰٪',
      ],
      en: [
        'Strict demarcation between SMART drive status and capacity utilization',
        'Read/write I/O latency in milliseconds',
        'Proactive warning policies triggered when available space drops below 10%',
      ],
    },
    allowedActions: {
      fa: [
        'بررسی وضعیت آرایه‌های RAID و هارد دیسک‌های فیزیکی',
        'آزمودن سیاست پاکسازی خودکار فایل‌های موقت لاگ',
        'تشخیص مرز فعالیت‌های دیجیتال از لزوم تعویض فیزیکی دیسک معیوب',
      ],
      en: [
        'Inspecting RAID volume and physical drive telemetry',
        'Simulating temporary log rotation and purge policies',
        'Distinguishing software actions from physical drive swap requirements',
      ],
    },
    relationshipToLogBridge: {
      fa: 'نمونه بارز نشان‌دهنده مرزهای فرآیندی پلتفرم است که تعویض فیزیکی را به تکنسین مقیم ارجاع می‌دهد.',
      en: 'A premier example of process boundaries where physical replacement is routed to datacenter staff.',
    },
  },

  monitoring_network: {
    pageKey: 'monitoring_network',
    title: { fa: 'راهنمای پایش شبکه، ترافیک و فایروال', en: 'Network, Traffic & Ingress Monitoring Guide' },
    purpose: {
      fa: 'پایش افت بسته‌ها (Packet Loss)، تاخیر رفت و برگشت (RTT)، خطاهای مسیریابی و تفکیک قطعی اینترفیس‌ها.',
      en: 'Monitors packet loss percentage, round-trip latency, DNS lookup failures, and interface link drops.',
    },
    targetUsers: {
      fa: 'مهندسان شبکه (CCNA/CCNP)، مدیران فایروال و ناظران CDN.',
      en: 'Network Engineers, Firewall Administrators, and CDN Operations Specialists.',
    },
    displayedInformation: {
      fa: [
        'ترافیک ورودی/خروجی بر حسب مگابیت بر ثانیه و وضعیت پورت‌های شبکه',
        'درصد خطای بسته‌ها و تاخیر گیت‌وی لبه',
        'سیاست‌های خودکار هشدار قطعی مسیر اصلی به بک‌آپ',
      ],
      en: [
        'Inbound/outbound throughput in Mbps and interface link status',
        'Packet loss percentages and edge gateway latencies',
        'Automated failover notification policies',
      ],
    },
    allowedActions: {
      fa: [
        'جستجو در لاگ‌های اتصال شبکه و رویدادهای فایروال',
        'آزمودن شبیه‌ساز هشدار افت پکت بالاتر از ۲٪',
        'ارزیابی پایداری اتصال به سورس‌های خارجی',
      ],
      en: [
        'Filtering network link logs and edge firewall events',
        'Simulating packet loss threshold escalation policies',
        'Verifying uplink connection stability in demo mode',
      ],
    },
    relationshipToLogBridge: {
      fa: 'تضمین‌کننده اتصال پایدار میان سرورهای مبدا و دروازه جمع‌آوری رویدادهای LogBridge.',
      en: 'Guarantees resilient connectivity between source servers and LogBridge ingress collectors.',
    },
  },

  monitoring_security: {
    pageKey: 'monitoring_security',
    title: { fa: 'راهنمای پایش امنیت سایبری و کنترل دسترسی', en: 'Cybersecurity & Access Control Monitoring Guide' },
    purpose: {
      fa: 'ردیابی تلاش‌های ناموفق ورود، رفتارهای مشکوک احراز هویت، تغییرات سطح دسترسی و حملات احتمالی بروت‌فورس.',
      en: 'Tracks repeated authentication failures, suspicious credential usage, privilege changes, and brute-force attempts.',
    },
    targetUsers: {
      fa: 'تحلیلگران مرکز عملیات امنیت (SOC)، افسران ارشد امنیت اطلاعات (CISO) و ممیزان انطباق.',
      en: 'SOC Security Analysts, Chief Information Security Officers (CISOs), and Compliance Auditors.',
    },
    displayedInformation: {
      fa: [
        'شمارش تلاش‌های ناموفق ورود با دسته‌بندی معقول (نه هر خطایی به عنوان حمله)',
        'لاگ‌های امنیتی پالایش‌شده بدون فاش شدن پسوردهای تایپ‌شده',
        'سیاست‌های انسداد موقت IP یا فعال‌سازی احراز هویت دوعاملی اجباری',
      ],
      en: [
        'Failed login frequencies categorized realistically by severity',
        'Sanitized security traces with entered passwords completely masked',
        'Automated IP throttling and mandatory MFA step-up policies',
      ],
    },
    allowedActions: {
      fa: [
        'بازرسی دقیق شواهد تلاش‌های نفوذ مشکوک',
        'تست شبیه‌ساز اعمال خودکار سیاست مهار Brute-force',
        'ارجاع فوری رخداد به متخصص معتبر امنیت ابری (CKS/CISSP)',
      ],
      en: [
        'Auditing suspicious credential attack signatures',
        'Simulating brute-force mitigation policy responses',
        'Escalating verified security incidents to accredited cybersecurity consultants',
      ],
    },
    relationshipToLogBridge: {
      fa: 'هسته محافظت از اسرار پلتفرم بوده و ضامن عدم نشت اطلاعات در زمان همکاری با متخصصان است.',
      en: 'Enforces the core zero-leak principle protecting organizational secrets during expert collaborations.',
    },
  },

  log_explorer: {
    pageKey: 'log_explorer',
    title: { fa: 'راهنمای کاوشگر زنده لاگ‌ها (Live Log Explorer)', en: 'Live Log Explorer Guide' },
    purpose: {
      fa: 'ارائه رابط پیشرفته جستجو، فیلتر چندبعدی و بازرسی ساختاریافته JSON برای تمامی رکوردهای لاگ دریافتی.',
      en: 'Advanced multi-variable search, filtering, and structured JSON telemetry inspector for ingested logs.',
    },
    targetUsers: {
      fa: 'توسعه‌دهندگان، مهندسان دیباگینگ و تحلیلگران داده‌های سیستمی.',
      en: 'Software Developers, Debugging Engineers, and Systems Telemetry Analysts.',
    },
    displayedInformation: {
      fa: [
        'جدول رکوردهای لاگ با تایم‌استمپ دقیق، سطح خطا، نام سرویس و پیام',
        'وضعیت پردازش هر لاگ (پارس‌شده، ارزیابی سیاست، ماسک‌شده)',
        'شناسه یکتای رویداد و پیوند به تیکت رخداد متناظر',
      ],
      en: [
        'Tabular log traces with microsecond timestamps, severity badges, and source services',
        'Processing pipeline status (Parsed, Policy-Evaluated, Redacted)',
        'Unique Event IDs linking directly to correlated incident tickets',
      ],
    },
    allowedActions: {
      fa: [
        'توقف موقت (Pause) یا ادامه پخش زنده جریان لاگ‌ها',
        'فیلتر کردن بر اساس سطح خطا (ERROR, WARN, INFO, CRITICAL)',
        'جستجوی متنی آزاد در پیام و جزییات لاگ',
        'کلیک روی هر لاگ برای باز کردن ساختار JSON و کپی در کلیپ‌بورد',
      ],
      en: [
        'Pausing and resuming the real-time telemetry stream',
        'Filtering by severity tier and source category',
        'Free-text searching across diagnostic messages and payloads',
        'Expanding structured JSON payloads with one-click clipboard copying',
      ],
    },
    relationshipToLogBridge: {
      fa: 'ماده خام اولیه برای تصمیم‌گیری موتور سیاست‌ها و منبع استخراج شواهد پرونده فنی.',
      en: 'Provides raw forensic material evaluated by the policy engine and compiled into incident dossiers.',
    },
  },

  policy_management: {
    pageKey: 'policy_management',
    title: { fa: 'راهنمای موتور سیاست‌ها و قوانین خودکار', en: 'Automated Policy Engine Guide' },
    purpose: {
      fa: 'تعریف و ارزیابی قوانین واکنشی "اگر-آنگاه" (IF-THEN) متصل به هر یک از منابع فنی برای جلوگیری از گسترش خرابی.',
      en: 'Defines and evaluates IF-THEN reactive operational policies mapped directly to individual technical sources.',
    },
    targetUsers: {
      fa: 'مدیران زیرساخت، طراحان سناریوهای SRE و ناظران انطباق سازمانی.',
      en: 'Infrastructure Leads, SRE Playbook Architects, and Organizational Compliance Officers.',
    },
    displayedInformation: {
      fa: [
        'فهرست سیاست‌های فعال تفکیک‌شده بر اساس هر منبع فنی',
        'شرط ماشه، آستانه مجاز، بازه ارزیابی و اقدام خودکار تعریف‌شده',
        'تاریخچه و شمارش دفعات اجرای هر سیاست با نتیجه موفق/ناموفق',
      ],
      en: [
        'Source-categorized active policy cards with source-specific icons',
        'Configured trigger conditions, threshold bounds, and automated actions',
        'Execution history logs and counters tracking success and failure rates',
      ],
    },
    allowedActions: {
      fa: [
        'مشاهده جزئیات کامل منطق کارکرد و چرایی وجود هر قانون',
        'فعال یا غیرفعال‌سازی موقت سیاست در محیط دمو',
        'اجرای آزمایشی سیاست (Test Evaluation) روی رویدادهای نمونه و مشاهده نتیجه فوری',
      ],
      en: [
        'Inspecting full underlying logic and purpose for each policy',
        'Toggling enabled/disabled state in demo mode',
        'Running safe test evaluations against sample payloads with immediate simulated feedback',
      ],
    },
    relationshipToLogBridge: {
      fa: 'مغز متفکر خودکارسازی سامانه است که رخدادهای خام را به اقدامات پیشگیرانه یا اعلان‌های فوری تبدیل می‌کند.',
      en: 'The autonomous intelligence layer converting raw signals into preventative remediations.',
    },
  },

  incident_center: {
    pageKey: 'incident_center',
    title: { fa: 'راهنمای مدیریت رخدادها و سناریوی SC-01', en: 'Incident Management & SC-01 Guide' },
    purpose: {
      fa: 'مدیریت تیکت‌های استاندارد بحران‌های زیرساخت و نرم‌افزار، ارزیابی شواهد و پیاده‌سازی عملی سناریوی SC-01.',
      en: 'Manages standardized operational incident dockets, forensic evidence, and Scenario SC-01 execution.',
    },
    targetUsers: {
      fa: 'رهبران پاسخ به رخداد (Incident Commanders)، مهندسان ارشد و کارشناسان تریاژ.',
      en: 'Incident Commanders, Senior System Engineers, and Triage Specialists.',
    },
    displayedInformation: {
      fa: [
        'فهرست تیکت‌های ثبت‌شده با شماره رهگیری، درجه فوریت و سیستم آسیب‌دیده',
        'فرم استاندارد ثبت رخداد جدید با اعتبارسنجی فیلدها',
        'شواهد فنی ایزوله‌شده و اقدامات انجام‌شده قبلی',
      ],
      en: [
        'Registry of incident dockets with ticket numbers, severity tags, and impacted services',
        'Standardized intake form featuring strict client-side field validation',
        'Forensic evidence dossiers and internal remediation logs',
      ],
    },
    allowedActions: {
      fa: [
        'ثبت رخداد فنی جدید در پایگاه داده محلی (Scenario SC-01)',
        'فیلتر کردن رخدادها بر اساس فوریت و منبع',
        'آغاز مستقیم فرآیند درخواست متخصص برون‌سازمانی همراه با پیش‌نمایش سانسور توکن‌ها',
      ],
      en: [
        'Logging new operational incidents into persistent local storage',
        'Filtering dockets by severity tier and category',
        'Launching the confidential specialist dispatch wizard directly from an incident docket',
      ],
    },
    relationshipToLogBridge: {
      fa: 'پل ارتباطی مستقیم میان رخداد داخلی سازمان و شبکه متخصصان برون‌سازمانی است.',
      en: 'The direct bridge linking internal organizational anomalies to external expert collaboration.',
    },
  },

  alert_center: {
    pageKey: 'alert_center',
    title: { fa: 'راهنمای مرکز هشدارها و اعلان‌های کشیک', en: 'Alert Center & On-Call Dispatch Guide' },
    purpose: {
      fa: 'ارائه هشدارهای دارای اولویت، جلوگیری از خستگی ناشی از آلرت (Alert Fatigue) و دریافت تاییدیه رویت از کشیک.',
      en: 'Prioritized operational notification center designed to eliminate alert fatigue and track acknowledgment.',
    },
    targetUsers: {
      fa: 'تیم کشیک شبانه‌روزی (24/7 On-Call)، سرپرستان فنی و مدیران پروژه‌ها.',
      en: '24/7 On-Call Rotations, Technical Leads, and Operations Duty Managers.',
    },
    displayedInformation: {
      fa: [
        'هشدارهای تفکیک‌شده بر اساس درجه حساسیت (Critical, Error, Warning, Info)',
        'منبع فنی صادرکننده، سیاست مسبب و تایم‌استمپ دقیق رخداد',
        'اقدام پیشنهادی خودکار برای هر هشدار',
      ],
      en: [
        'Tiered alerts organized by severity (Critical, Error, Warning, Info)',
        'Originating technical source, triggering policy, and precise timestamp',
        'Recommended immediate operational next action',
      ],
    },
    allowedActions: {
      fa: [
        'تایید و رویت هشدار (Acknowledge) برای اعلام در دست اقدام بودن به سایر اعضا',
        'اتصال مستقیم به تیکت رخداد مرتبط برای بررسی ریشه مشکل',
        'ارسال پرونده به شبکه متخصصان در صورت عدم امکان حل داخلی',
      ],
      en: [
        'Acknowledging alerts to notify the team that triage has commenced',
        'Directly navigating to the correlated incident docket for root-cause inspection',
        'Escalating to external specialists if internal skills are insufficient',
      ],
    },
    relationshipToLogBridge: {
      fa: 'خط مقدم اطلاع‌رسانی به انسان است تا زمان میانگین شناسایی رخداد (MTTD) به حداقل برسد.',
      en: 'The primary human notification channel minimizing Mean Time to Detect (MTTD).',
    },
  },

  expert_marketplace: {
    pageKey: 'expert_marketplace',
    title: { fa: 'راهنمای شبکه و بازارگاه متخصصان مستقل', en: 'Expert Talent Marketplace Guide' },
    purpose: {
      fa: 'فراهم ساختن دسترسی امن، سریع و قراردادی به مهندسان خبره لینوکس، دیتابیس، زیرساخت و امنیت بدون بروکراسی استخدام دائم.',
      en: 'Enables zero-trust, contract-based on-demand access to verified senior engineers without permanent hiring overhead.',
    },
    targetUsers: {
      fa: 'مدیران نیازمند مشاوره اضطراری و مهندسان مستقل دارای گواهینامه‌های معتبر بین‌المللی.',
      en: 'Engineering directors needing emergency consultation and accredited independent specialists.',
    },
    displayedInformation: {
      fa: [
        'پروفایل مشاوران با امتیاز، تعداد پرونده‌های موفق، نرخ ساعتی و گواهینامه‌ها',
        'وضعیت درخواست‌های فعال سازمان با کد رهگیری اختصاصی',
        'تضمین حفظ محرمانگی شواهد فنی با استانداردهای Zero-Knowledge',
      ],
      en: [
        'Specialist cards featuring verified ratings, track records, rates, and verified certifications',
        'Active collaboration case tracker with discrete request identifiers',
        'Zero-trust NDA and credential redaction assurances',
      ],
    },
    allowedActions: {
      fa: [
        'جستجو و فیلتر متخصصان بر اساس نام، مهارت یا حوزه تخصصی',
        'مشاهده سوابق و پروفایل کامل کارشناس',
        'پیگیری پرونده‌های ارجاع‌شده فعال و وضعیت همکاری',
      ],
      en: [
        'Searching and filtering specialists by name, core skills, or technical category',
        'Inspecting comprehensive consultant background profiles and certifications',
        'Monitoring dispatched case status and ongoing collaboration dockets',
      ],
    },
    relationshipToLogBridge: {
      fa: 'بخش دوم ارزش بنیادین پلتفرم است که چرخه شناسایی مشکل در مانیتورینگ را به حل قطعی با تخصص انسانی متصل می‌کند.',
      en: 'Fulfills the core value proposition: connecting automated telemetry detection directly to human expert resolution.',
    },
  },

  monitoring_cloud: {
    pageKey: 'monitoring_cloud',
    title: { fa: 'راهنمای پایش کلاود و کانتینرها', en: 'Cloud & Containers Monitoring Guide' },
    purpose: {
      fa: 'پایش سلامت زیرساخت ابری، چرخه حیات کانتینرها، پادهای کوبرنتیز و خودکارسازی مقیاس‌پذیری HPA.',
      en: 'Observes cloud infrastructure health, container lifecycle, Kubernetes pod churn, and autoscaling elasticity.',
    },
    targetUsers: {
      fa: 'مهندسان کلود و دوآپس، مدیران کلاستر کوبرنتیز و تیم پایداری زیرساخت.',
      en: 'Cloud DevOps engineers, Kubernetes cluster admins, and infrastructure reliability teams.',
    },
    displayedInformation: {
      fa: [
        'تعداد پادهای سالم و فعال کلاستر',
        'نرخ ریستارت و هشدارهای CrashLoopBackOff',
        'راندمان مقیاس‌پذیری خودکار و بهره‌وری منابع ابری',
        'لاگ‌های رویدادهای ارکستراسیون و سیاست‌های مرتبط',
      ],
      en: [
        'Count of healthy running cluster pods',
        'Restart rates and CrashLoopBackOff alerts',
        'Autoscaler replica efficiency and cloud cost utilization',
        'Orchestration event logs and associated recovery policies',
      ],
    },
    allowedActions: {
      fa: [
        'پایش زنده پادها و تفکیک هشدارهای بازراه‌اندازی',
        'تست اجرای سیاست‌های بازیابی خودکار کلاود',
        'درخواست متخصص دوآپس و کوبرنتیز در صورت تداوم خطا',
      ],
      en: [
        'Live pod monitoring and restart alert triage',
        'Testing automated container recovery policies',
        'Dispatching specialist DevOps assistance upon sustained degradation',
      ],
    },
    relationshipToLogBridge: {
      fa: 'لایه‌ای حیاتی برای سامانه‌های مایکروسرویس مدرن که زیرساخت اجرای سرویس‌ها را تضمین می‌کند.',
      en: 'Critical abstraction layer guaranteeing the runtime foundation for containerized microservices.',
    },
  },

  expert_workspace: {
    pageKey: 'expert_workspace',
    title: { fa: 'راهنمای میزکار حرفه‌ای متخصصان', en: 'Expert Professional Workspace Guide' },
    purpose: {
      fa: 'میزکار متمرکز برای مهندسان مستقل جهت کشف فرصت‌های فنی تاییدشده، ارسال پروپوزال و همکاری در حل رخدادها.',
      en: 'Dedicated hub for independent specialists to discover approved technical cases, submit proposals, and collaborate.',
    },
    targetUsers: {
      fa: 'متخصصان فنی مستقل، مشاوران ارشد لینوکس، دیتابیس، امنیت و دوآپس.',
      en: 'Freelance specialists, senior Linux consultants, DBAs, and cloud security architects.',
    },
    displayedInformation: {
      fa: [
        'فرصت‌های فنی تاییدشده و سانسورشده بدون نشت داده‌های سازمانی',
        'قراردادها و پرونده‌های فعال در حال همکاری',
        'فضای گفت‌وگوی امن و تست کدهای اصلاحی',
        'پروفایل، امتیازات، نرخ ساعتی و بازخوردهای کارفرمایان',
      ],
      en: [
        'Verified, sanitized technical opportunities with strict zero-leak compliance',
        'Active collaboration dockets and milestone tracking',
        'Secure communication thread and patch verification sandbox',
        'Profile credentials, ratings, hourly pricing, and client feedback',
      ],
    },
    allowedActions: {
      fa: [
        'ارسال پیشنهاد قیمت و زمان‌بندی برای پرونده‌های باز',
        'گفت‌وگو با مدیران سازمان و ارسال قطعه‌کدهای امن',
        'تکمیل مایلستون‌ها و ثبت گزارش پایانی حل مشکل',
        'مدیریت وضعیت در دسترس بودن و مهارت‌ها',
      ],
      en: [
        'Submitting pricing proposals and SLAs for open cases',
        'Communicating with engineering leads and exchanging sanitized patches',
        'Advancing milestones and recording final technical resolution',
        'Managing availability schedule and domain competencies',
      ],
    },
    relationshipToLogBridge: {
      fa: 'تجسم عملی سمت عرضه (Supply Side) پلتفرم LogBridge که ارزش نهایی اتصال دانش تخصصی به رخداد را محقق می‌سازد.',
      en: 'The supply-side interface of LogBridge delivering on-demand human expertise to solve critical technical incidents.',
    },
  },
};
