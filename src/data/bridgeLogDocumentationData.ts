/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DocumentationDetailItem } from '../types';

export const BRIDGE_LOG_DOCUMENTATION_ITEMS: DocumentationDetailItem[] = [
  // =========================================================================
  // TOPIC A: PROJECT INTRODUCTION
  // =========================================================================
  {
    id: 'doc-project-intro',
    groupId: 'A',
    itemNumber: 1,
    title: {
      fa: 'معرفی جامع پلتفرم BridgeLog',
      en: 'A. Project Introduction — BridgeLog Platform Overview',
    },
    summary: {
      fa: 'معرفی چیستی BridgeLog، چرایی نیاز سازمان‌ها، معماری دوگانه عملیاتی/متخصص و گردش کار از شناسایی خطا تا حل امن.',
      en: 'Comprehensive overview of BridgeLog, why modern organizations need it, dual operational/expert architecture, and full resolution lifecycle.',
    },
    available: true,
    introduction: {
      fa: 'پلتفرم BridgeLog یک سامانه یکپارچه برای مدیریت هوشمند رخدادهای عملیاتی IT و دسترسی امن به شبکه متخصصان فنی مستقل است. این سامانه فاصله میان «شناسایی اختلال درون‌سازمانی» و «حل قطعی آن به کمک تخصص بیرونی بدون افشای اسرار تجاری» را پر می‌کند.',
      en: 'BridgeLog is an integrated platform for intelligent IT incident operations and privacy-preserving access to independent technical specialists, bridging the gap between internal detection and secure external expert remediation.',
    },
    definition: {
      fa: 'سامانه تلفیقی پایش رصدپذیری (Observability) و بازارگاه تخصصی، مجهز به موتور ارزیابی سیاست‌های خودکار، پالایشگر حریم خصوصی (Privacy Redaction)، و فضای کار اشتراکی زمان‌مند.',
      en: 'A hybrid platform combining IT observability, automated policy evaluation, privacy redaction pipelines, and a time-bound expert collaboration workspace.',
    },
    whyExists: {
      fa: 'سازمان‌های متوسط نمی‌توانند برای تمامی حوزه‌های فنی (کرنل لینوکس، بهینه‌سازی دیتابیس، زیرساخت شبکه، امنیت و وب‌سرویس‌ها) معماران برجسته تمام‌وقت استخدام کنند. در زمان بروز حوادث بحرانی، یا زمان زیادی صرف آزمون‌وخطای تیم داخلی می‌شود یا اشتراک‌گذاری ناامن اطلاعات با مشاوران بیرونی ریسک افشای دیتابیس و توکن‌ها را ایجاد می‌کند.',
      en: 'Mid-sized organizations cannot retain senior principal architects across every niche domain full-time. In deep outages, teams either waste hours in blind trial-and-error or face severe data leak risks by sharing raw credentials and logs with external consultants.',
    },
    problemAddressed: {
      fa: 'کاهش شدید زمان میانگین بازیابی (MTTR)، مهار قطعی‌های مکرر سرویس‌ها، و حذف ریسک افشای اسرار، IPهای داخلی و اطلاعات مشتریان هنگام برون‌سپاری عیب‌یابی.',
      en: 'Dramatically reduces MTTR, stops recurring service outages, and completely eliminates secret and customer data exposure during technical troubleshooting.',
    },
    mainComponents: {
      fa: [
        'کنسول عملیات سازمان (پایش ایزوله ۵ حوزه اصلی)',
        'موتور سیاست‌ها و ارزیابی شرایط بحرانی',
        'پایپ‌لاین پالایش و شبه‌نام‌سازی محرمانگی (Sanitizer)',
        'بازارگاه و تالار پروپوزال متخصصان معتبر',
        'اتاق همکاری امن با دسترسی زمان‌مند و ثبت گزارش راهکار',
      ],
      en: [
        'Organization Operations Console (5 decoupled monitoring domains)',
        'Automated Policy & Threshold Evaluation Engine',
        'Data Sanitization & Redaction Pipeline',
        'Verified Expert Marketplace & Proposal Desk',
        'Secure Time-bound Collaboration Workspace with Resolution Reports',
      ],
    },
    howItWorks: {
      fa: 'لاگ‌ها و متریک‌ها از منابع سازمانی دریافت شده و طبقه‌بندی می‌شوند. سیاست‌های خودکار شرایط را بررسی کرده و در صورت بروز خطا، رخداد را ثبت و هشدار می‌دهند. در صورت نیاز به مشاور بیرونی، پرونده پالایش‌شده پس از تایید مدیر به تالار متخصصان ارسال می‌شود.',
      en: 'Telemetry is ingested and routed to specific domains. Automated policies detect anomalies and raise incidents. If internal capacity is insufficient, an approved sanitized case is shared with matching specialists.',
    },
    stepByStepProcess: {
      fa: [
        '۱. دریافت تلمتری و لاگ‌های سرور، دیتابیس، برنامه و شبکه',
        '۲. نرمال‌سازی و ارزیابی شروط سیاست‌های فعال',
        '۳. تولید هشدار بلادرنگ و تریژ تیکت رخداد',
        '۴. تولید نسخه بهداشتی‌شده (Sanitized Case) بدون اسرار',
        '۵. تایید رسمی مدیر سازمان جهت انتشار به تالار متخصصان',
        '۶. اتصال متخصص مناسب، همکاری زمان‌مند و ثبت گزارش حل نهایی',
      ],
      en: [
        '1. Ingest telemetry across servers, databases, apps, and networks',
        '2. Normalize data and evaluate active policy conditions',
        '3. Generate real-time alerts and incident tickets',
        '4. Generate sanitized case with sensitive values masked',
        '5. Formal Organization Admin approval for expert sharing',
        '6. Match verified specialist, collaborate safely, and store resolution',
      ],
    },
    inputs: {
      fa: ['لاگ‌های متنی و ساختاریافته', 'متریک‌های کارکرد سخت‌افزار و شبکه', 'شروط آستانه‌ای سیاست‌ها', 'درخواست‌های مدیران'],
      en: ['Structured and plaintext log events', 'Hardware and network telemetry', 'Policy threshold rules', 'Manager triage inputs'],
    },
    processingLogic: {
      fa: ['تطبیق الگو با عبارات باقاعده', 'محاسبه خطای انباشته در پنجره زمانی', 'الگوریتم ماسک‌گذاری توکن‌ها و IPها', 'تطبیق مهارت بر اساس ماتریس وزنی'],
      en: ['Regex log pattern matching', 'Time-window error rate aggregation', 'Deterministic token and IP pseudonymization', 'Weighted expert skillset matching'],
    },
    outputs: {
      fa: ['داشبورد سلامت زنده', 'تیکت‌های رخداد مستند', 'پرونده‌های بهداشتی‌شده', 'گزارش‌های تخصصی ریشه‌یابی'],
      en: ['Live health dashboard', 'Documented incident tickets', 'Sanitized case payloads', 'Root cause resolution reports'],
    },
    relationships: {
      fa: 'کنسول سازمان مستقیماً به کاوشگر لاگ و موتور سیاست متصل است؛ خروجی رخدادها به سیستم پالایش داده و سپس به بازارگاه متخصصان ارسال می‌شود.',
      en: 'The Organization Console directly feeds the Log Explorer and Policy Engine; incident outputs feed the Sanitizer and flow into the Expert Marketplace.',
    },
    realisticExample: {
      fa: 'در فروشگاه آنلاین، اشباع استخر کانکشن‌های دیتابیس به ۹۲٪ می‌رسد. سیاست DB-01 ماشه را فعال کرده و هشدار بحرانی صادر می‌شود. تیم داخلی علت کوئری کند را نمی‌داند. سیستم پرونده را پالایش کرده، آی‌پی‌ها را به [INTERNAL_IP_REDACTED_A] تبدیل نموده و مشاور ارشد PostgreSQL در کمتر از ۲۰ دقیقه ایندکس گمشده را پیشنهاد می‌دهد.',
      en: 'In an e-commerce platform, PostgreSQL connection pool hits 92%. Policy DB-01 trips, generating a critical alert. Internal staff cannot isolate the query. BridgeLog sanitizes the logs, masks internal IPs to [INTERNAL_IP_REDACTED_A], and matches a senior DBA who identifies the missing index within 20 minutes.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی ماژولار مبتنی بر رویداد (Event-Driven) در React و تایپ‌اسکریپت، به همراه انیمیشن سه‌بعدی Three.js برای نمایش بصری لوله‌های جریان داده.',
      en: 'Modular event-driven architecture in React and TypeScript, integrated with Three.js WebGL visualization for data conduits.',
    },
    evaluationMethod: {
      fa: 'سنجش بر اساس کاهش MTTR، صفر بودن نرخ نشت داده‌های حساس (Zero-Leak Audit)، و سرعت یافتن متخصص واجد شرایط.',
      en: 'Evaluated by MTTR reduction, verified zero-leak privacy audits, and time-to-expert match metrics.',
    },
    whatHappensBefore: {
      fa: 'سازمان منابع، سرورها و برنامه‌های خود را در BridgeLog ثبت نموده و سیاست‌های پیش‌فرض را فعال می‌سازد.',
      en: 'The organization connects its infrastructure sources and configures baseline operational policies.',
    },
    whatHappensAfter: {
      fa: 'گزارش حل مشکل تایید شده و به پایگاه دانش سازمان افزوده می‌شود تا در رخدادهای مشابه بعدی مورد استفاده قرار گیرد.',
      en: 'The resolution report is reviewed, approved, and archived into the internal knowledge base for future prevention.',
    },
  },

  // =========================================================================
  // TOPIC B: PROBLEM DISCOVERY & DEFINITION
  // =========================================================================
  {
    id: 'doc-problem-discovery',
    groupId: 'B',
    itemNumber: 2,
    title: {
      fa: 'کشف و تعریف دقیق مسئله فنی و عملیاتی',
      en: 'B. Problem Discovery and Definition',
    },
    summary: {
      fa: 'تحلیل ریشه‌ای چالش‌های پراکندگی لاگ‌ها، انزوای ابزارها، هزینه‌های تخصص تمام‌وقت، و خطرات نقض محرمانگی در همکاری‌های فنی.',
      en: 'Root cause analysis of fragmented telemetry, isolated tooling, high cost of full-time specialists, and severe data privacy risks.',
    },
    available: true,
    introduction: {
      fa: 'تیم‌های فنی در سازمان‌های در حال رشد روزانه با صدها هزار رخداد مواجهند که در سرورها، فایروال‌ها، اپلیکیشن‌ها و دیتابیس‌های مجزا پخش شده‌اند. در زمان قطعی سرویس، کمبود تخصص عمیق داخلی و نگرانی از افشای داده‌های محرمانه دو مانع اصلی حل سریع بحران هستند.',
      en: 'Growing organizations face hundreds of thousands of events scattered across disparate servers, firewalls, and microservices. During deep outages, lack of specialized internal talent and confidentiality fears form major bottlenecks.',
    },
    definition: {
      fa: 'فرآیند شناسایی و دسته‌بندی اصطکاک‌های عملیاتی سازمان در چرخه شناسایی، عیب‌یابی و برون‌سپاری رفع اشکال در زیرساخت‌های IT.',
      en: 'The systematic identification and classification of operational friction across incident detection, triage, and external specialist engagement.',
    },
    whyExists: {
      fa: 'برای طراحی یک محصول موفق، باید ریشه واقعی ناکارآمدی ابزارهای سنتی (مانند ایمیل زدن لاگ‌های خام یا ارسال اسکرین‌شات به تلگرام و ایمیل مشاوران) مستند شود.',
      en: 'Validates why traditional workarounds (like emailing raw log dumps or sending server screenshots to external consultants) fail catastrophically.',
    },
    problemAddressed: {
      fa: 'رفع پراکندگی لاگ‌ها، حذف آزمون‌وخطاهای کور تیم‌های عمومی، و جلوگیری از درز رمزهای عبور، کلیدهای API و اطلاعات خصوصی مشتریان.',
      en: 'Eliminates fragmented logs, stops blind trial-and-error by generalist engineers, and prevents leaks of passwords, API keys, and customer records.',
    },
    mainComponents: {
      fa: [
        'پراکندگی تلمتری میان ابزارهای نامرتبط',
        'هزینه کمرشکن جذب متخصصان ارشد برای هر تکنولوژی',
        'ریسک حقوقی و امنیتی افشای ساختار شبکه داخلی',
        'تکرار مکرر کارهای عیب‌یابی به دلیل نبود پایگاه دانش متمرکز',
      ],
      en: [
        'Telemetry fragmentation across disparate monitoring silos',
        'Prohibitive expense of retaining dedicated principal engineers for every stack',
        'Severe legal and security exposure when sharing internal infrastructure details',
        'Repeated troubleshooting loops caused by lack of institutional knowledge retention',
      ],
    },
    howItWorks: {
      fa: 'BridgeLog هر چالش را به یک قابلیت مشخص متصل می‌کند: لاگ‌های پراکنده با کاوشگر دامنه حل می‌شوند؛ خطاهای پیچیده با شبکه متخصصان پوشش داده می‌شوند؛ و خطر نشت با پالایشگر خودکار از بین می‌رود.',
      en: 'BridgeLog pairs each operational bottleneck with an exact architectural capability: fragmented logs are unified by domain explorers, complex outages are served by expert matching, and leaks are blocked by automated redaction.',
    },
    stepByStepProcess: {
      fa: [
        '۱. نگاشت نقاط شکست در سیستم‌های مانیتورینگ موجود',
        '۲. تحلیل هزینه‌های ناشی از قطعی طولانی سرویس (Downtime)',
        '۳. ارزیابی ریسک‌های امنیتی ناشی از ارسال کدهای پیکربندی و لاگ‌ها',
        '۴. تعریف نیازمندی‌های سیستم استاندارد BridgeLog',
      ],
      en: [
        '1. Mapping failure modes in existing monitoring stacks',
        '2. Quantifying downtime and business disruption costs',
        '3. Auditing confidentiality exposure in traditional consulting',
        '4. Formulating technical requirements for BridgeLog modules',
      ],
    },
    inputs: {
      fa: ['تجارب واقعی تیم‌های فنی', 'گزارش‌های ممیزی نشت اطلاعات', 'تحلیل هزینه‌های قراردادهای مشاوره'],
      en: ['Field incident postmortems', 'Confidentiality leak audit reports', 'Consulting spend analysis'],
    },
    processingLogic: {
      fa: ['طبقه‌بندی مشکلات بر مبنای حوزه‌های پنج‌گانه', 'محاسبه زمان تلف‌شده در مراحل عیب‌یابی', 'استخراج الگوهای مشترک نشت دیتا'],
      en: ['Categorizing operational friction across the 5 core domains', 'Measuring triage latency', 'Extracting common data leakage patterns'],
    },
    outputs: {
      fa: ['ماتریس تطبیق چالش با راه‌حل پلتفرم', 'معماری جامع نیازمندی‌ها', 'شاخص‌های کلیدی کارایی (KPI)'],
      en: ['Problem-to-solution capability matrix', 'Comprehensive requirements framework', 'Target system KPIs'],
    },
    relationships: {
      fa: 'پایه و اساس تمامی قابلیت‌های بخش‌های مانیتورینگ، سیاست‌گذاری و بازارگاه متخصصان است.',
      en: 'Directly informs the architecture of monitoring domains, policy evaluation, and the expert network.',
    },
    realisticExample: {
      fa: 'یک شرکت پرداختی در روز بلک‌فرایدی با افت شدید پاسخگویی مواجه می‌شود. ارسال فایل لاگ nginx به مشاور بیرونی به صورت تصادفی توکن‌های JWT کاربران را افشا می‌کند. با BridgeLog، لاگ‌ها به شکل خودکار پاکسازی شده و مشاور بدون دیدن توکن‌ها، تنظیمات keepalive را اصلاح می‌کند.',
      en: 'A fintech gateway suffers latency spikes on Black Friday. Emailing an nginx log to a consultant accidentally leaks JWT session tokens. With BridgeLog, tokens are automatically redacted into [TOKEN_REDACTED_SEC], enabling the consultant to fix keepalive timeouts with zero disclosure.',
    },
    implementationApproach: {
      fa: 'تحلیل شکاف (Gap Analysis) و تدوین ماتریس حل مسئله در هسته پلتفرم.',
      en: 'Rigorous gap analysis and capability mapping reflected in the MVP UX flows.',
    },
    evaluationMethod: {
      fa: 'میزان پوشش چالش‌های سازمان‌های واقعی در نسخه عملیاتی.',
      en: 'Coverage and resolution of real-world enterprise operational bottlenecks.',
    },
    whatHappensBefore: {
      fa: 'بررسی وضعیت سازمان‌های متوسط پیش از پیاده‌سازی سیستم یکپارچه.',
      en: 'Auditing legacy operations in mid-sized IT environments.',
    },
    whatHappensAfter: {
      fa: 'ورود به مرحله تعریف پرسونای مخاطبان و معماری جریان داده.',
      en: 'Transitions into persona definitions and data flow engineering.',
    },
  },

  // =========================================================================
  // TOPIC C: TARGET USERS AND ORGANIZATIONS
  // =========================================================================
  {
    id: 'doc-target-users',
    groupId: 'C',
    itemNumber: 3,
    title: {
      fa: 'مخاطبان هدف، سازمان‌ها و پرسونای ذی‌نفعان',
      en: 'C. Target Users and Organizations',
    },
    summary: {
      fa: 'تحلیل دقیق ۶ سگمنت مشتریان (شرکت‌های SaaS، فروشگاه‌های آنلاین، فین‌تک، دیتاسنترها و تیم‌های IT کوچک) به همراه ارزش دریافتی.',
      en: 'In-depth analysis of 6 customer segments (SaaS firms, E-commerce, Fintech, Datacenters, and small IT teams) with value propositions.',
    },
    available: true,
    introduction: {
      fa: 'شناخت دقیق ذی‌نفعان BridgeLog برای سفارشی‌سازی کنسول عملیات ضروری است. این پلتفرم برای سازمان‌هایی طراحی شده که نیازمند پایداری بالای سرویس هستند اما بودجه بی‌نهایت برای استخدام ده‌ها متخصص تمام‌وقت ندارند.',
      en: 'Understanding BridgeLog stakeholders ensures domain-tailored experiences. The platform serves organizations where uptime is critical but budget constraints prohibit hiring dozens of full-time domain specialists.',
    },
    definition: {
      fa: 'دسته‌بندی ساختاریافته مشتریان سازمانی، پرسوناهای تصمیم‌گیرنده (CTO، مدیر زیرساخت) و متخصصان مستقل متقاضی پروژه.',
      en: 'Structured taxonomy of target enterprises, decision-maker personas (CTO, VP of Infra), and independent engineering specialists.',
    },
    whyExists: {
      fa: 'نیازهای یک فروشگاه اینترنتی پرترافیک (اشباع دیتابیس و تاخیر فرانت‌اند) با یک شرکت ارائه‌دهنده میزبانی ابری (دمای CPU و سلامت NVMe) متفاوت است.',
      en: 'A high-traffic e-commerce store (database saturation, frontend UX) has vastly different operational priorities than a bare-metal datacenter (CPU thermals, NVMe wear).',
    },
    problemAddressed: {
      fa: 'جلوگیری از ساخت داشبوردهای تک‌بعدی و غیرمنعطف که برای شرکت‌های نرم‌افزاری نامناسب یا برای مراکز داده ناکافی هستند.',
      en: 'Prevents building a one-size-fits-all dashboard that fails software developers or lacks bare-metal datacenter depth.',
    },
    mainComponents: {
      fa: [
        'شرکت‌های نرم‌افزاری و SaaS (پایش خطاها، APIها و فرانت‌اند)',
        'فروشگاه‌های آنلاین و ایکامرس (پایش تراکنش‌ها، کش و دیتابیس)',
        'درگاه‌های پرداخت و فین‌تک (امنیت، لاگ‌های تایید هویت و شبکه)',
        'مراکز داده و ارائه‌دهندگان هاستینگ (سخت‌افزار، لینوکس و استوریج)',
        'تیم‌های IT با تعداد پرسنل محدود (اتوماسیون سیاست‌ها و برون‌سپاری امن)',
      ],
      en: [
        'SaaS & Software Companies (API latency, microservices, frontend JS errors)',
        'High-Traffic E-commerce (Checkout flows, Redis cache, database locks)',
        'Fintech & Payment Gateways (Security audits, authentication bursts, TLS)',
        'Datacenters & Hosting (Bare-metal hardware, IPMI sensors, NVMe arrays)',
        'Lean IT Teams (Automated policy alerts and on-demand specialized escalations)',
      ],
    },
    howItWorks: {
      fa: 'هر سازمان در هنگام ورود، پروفایل فنی خود را انتخاب کرده و منابع مرتبط به صورت پیش‌فرض با معیارهای مرتبط مانیتور می‌شوند.',
      en: 'Each organization operates within its configured technical profile, with default telemetry metrics and policies aligned to its industry needs.',
    },
    stepByStepProcess: {
      fa: [
        '۱. ورود مدیر سازمان و انتخاب نوع صنعت و زیرساخت',
        '۲. بارگذاری خودکار الگوهای مانیتورینگ متناسب با صنعت',
        '۳. اتصال منابع تلمتری متناسب با اولویت‌های کسب‌وکار',
        '۴. تعریف پرسنل و تعیین سطح دسترسی متناسب با حوزه‌ها',
      ],
      en: [
        '1. Tenant onboarding and industry profile selection',
        '2. Automated loading of industry-specific monitoring templates',
        '3. Ingesting telemetry prioritized by business criticality',
        '4. Role-based member assignment mapped to technical domains',
      ],
    },
    inputs: {
      fa: ['مشخصات سازمان', 'حجم ترافیک روزانه', 'نوع معماری زیرساخت (ابر، اختصاصی، هیبرید)'],
      en: ['Organization metadata', 'Daily traffic volume', 'Architecture topology (Cloud, Bare-metal, Hybrid)'],
    },
    processingLogic: {
      fa: ['تطبیق صنعت با منابع پیش‌فرض مانیتورینگ', 'اعمال آستانه‌های SLA متناسب'],
      en: ['Mapping industry profile to default monitoring sources', 'Applying domain-specific SLA thresholds'],
    },
    outputs: {
      fa: ['کنسول سازمانی سفارشی‌شده', 'پیشنهادهای متخصص متناسب با نوع معماری'],
      en: ['Tailored operations console', 'Specialist matching calibrated to architecture stack'],
    },
    relationships: {
      fa: 'پروفایل سازمان تعیین‌کننده دامنه‌های فعال در کنسول عملیات و فیلترهای بازارگاه متخصصان است.',
      en: 'The organization profile dictates active domains in the console and shapes expert matching criteria.',
    },
    realisticExample: {
      fa: 'سازمان «HyperShop Retail» با انتخاب پروفایل ایکامرس، به صورت خودکار داشبورد پایگاه داده و استخر اتصالات PostgreSQL را در صفحه اول مشاهده می‌کند، در حالی که شرکت «DataNet Hosting» وضعیت دمای پردازنده‌ها و سنسورهای IPMI را در اولویت می‌بیند.',
      en: 'HyperShop Retail automatically sees PostgreSQL pool saturation on its primary console, whereas DataNet Hosting prioritizes bare-metal CPU core thermals and IPMI sensor telemetry.',
    },
    implementationApproach: {
      fa: 'تعریف ۴ سازمان آزمایشی واقع‌گرایانه در داده‌های ماک و سوییچ لحظه‌ای بین آن‌ها.',
      en: 'Demonstrated via 4 realistic sample organizations with instant state switching.',
    },
    evaluationMethod: {
      fa: 'سهولت تفکیک نیازهای صنایع مختلف در محیط MVP بدون اختلاط داده‌ها.',
      en: 'Validated by clear multi-tenant isolation and domain relevance in the prototype.',
    },
    whatHappensBefore: {
      fa: 'تحلیل چالش‌های عمومی کسب‌وکار در بخش B.',
      en: 'Preceded by problem discovery and friction analysis in Topic B.',
    },
    whatHappensAfter: {
      fa: 'ورود به تشریح گردش کار جامع ۱۷ مرحله‌ای در بخش D.',
      en: 'Leads directly into the 17-step product workflow in Topic D.',
    },
  },

  // =========================================================================
  // TOPIC D: COMPLETE 17-STEP PRODUCT WORKFLOW
  // =========================================================================
  {
    id: 'doc-product-workflow',
    groupId: 'D',
    itemNumber: 4,
    title: {
      fa: 'گردش کار ۱۷ مرحله‌ای پلتفرم از دریافت لاگ تا حل رخداد',
      en: 'D. Complete 17-Stage Product Workflow',
    },
    summary: {
      fa: 'تشریح کامل ۱۷ گام عملیاتی: از ثبت سازمان، دریافت لاگ، ارزیابی سیاست، صدور هشدار، پالایش محرمانگی، تا اتصال متخصص و ثبت دانش.',
      en: 'Detailed walkthrough of all 17 operational stages: from ingestion, policy evaluation, and alert creation to sanitization, expert resolution, and knowledge archiving.',
    },
    available: true,
    introduction: {
      fa: 'گردش کار BridgeLog یک زنجیره پیوسته، منطقی و یکپارچه است که بدون وقفه از ثبت لاگ‌های خام شروع شده، شرایط را ارزیابی می‌کند، در صورت بحران هشدار صادر کرده و در صورت نیاز تخصص بیرونی را بدون ریسک امنیتی به کار می‌گیرد.',
      en: 'The BridgeLog lifecycle is a seamless chain: from raw telemetry ingestion to automated policy evaluation, incident alerting, confidential sanitization, expert matching, and institutional knowledge capture.',
    },
    definition: {
      fa: 'نقشه راه استاندارد ۱۷ مرحله‌ای سیستم که تعامل تمامی مؤلفه‌های نر‌م‌افزاری و انسانی پلتفرم را تعریف می‌کند.',
      en: 'The standard 17-step operational roadmap governing interactions between software components, internal engineers, and external specialists.',
    },
    whyExists: {
      fa: 'برای جلوگیری از بروز سردرگمی میان نقش‌ها و شفاف‌سازی دقیق ورودی‌ها، پردازش‌ها و خروجی‌های هر گام عملیاتی.',
      en: 'Eliminates workflow ambiguity by explicitly defining inputs, logic, outputs, and ownership at every step.',
    },
    problemAddressed: {
      fa: 'حذف گسست میان ابزارهای مانیتورینگ و فرآیندهای برون‌سپاری فنی که معمولاً به صورت دستی و غیرامن انجام می‌شد.',
      en: 'Connects monitoring detection with external contractor workflows that previously relied on insecure manual coordination.',
    },
    mainComponents: {
      fa: [
        'گام‌های ۱ تا ۴: ثبت سازمان، اتصال منابع، دریافت لاگ و تفکیک به حوزه‌های ۵گانه',
        'گام‌های ۵ تا ۸: ارزیابی سیاست‌ها، تشخیص ناهنجاری، تولید هشدار و ایجاد رخداد',
        'گام‌های ۹ تا ۱۱: تریاژ داخلی، تولید پرونده بهداشتی‌شده (Sanitized Case) و تایید مدیر',
        'گام‌های ۱۲ تا ۱۴: تطبیق هوشمند متخصص، بررسی پروپوزال و اعطای دسترسی زمان‌مند',
        'گام‌های ۱۵ تا ۱۷: حل رخداد، بررسی گزارش خاتمه و ذخیره در پایگاه دانش سازمان',
      ],
      en: [
        'Steps 1-4: Org onboarding, connector integration, log ingestion, and 5-domain routing',
        'Steps 5-8: Policy evaluation, anomaly detection, alert generation, and incident triage',
        'Steps 9-11: Internal investigation, automated privacy sanitization, and admin sharing approval',
        'Steps 12-14: Rule-based expert matching, proposal review, and time-bound workspace provisioning',
        'Steps 15-17: Incident remediation, resolution report audit, and knowledge base capture',
      ],
    },
    howItWorks: {
      fa: 'جریان داده از منابع به موتور لاگ می‌ریزد، سیاست‌ها آن را به صورت مداوم می‌سنجند. در صورت شکست آستانه، تیکت رخداد متولد شده و مسیر حل داخلی یا تخصصی آغاز می‌گردد.',
      en: 'Data flows into the ingestion engine where policies evaluate thresholds in real time. Tripped conditions generate incident tickets with clear escalation paths.',
    },
    stepByStepProcess: {
      fa: [
        '۱. ثبت‌نام و پیکربندی سازمان در BridgeLog',
        '۲. اتصال درگاه‌های دریافت داده (Elastic, Prometheus, Syslog)',
        '۳. ورود جریان زنده تلمتری و لاگ‌ها',
        '۴. تفکیک هوشمند لاگ‌ها به ۵ حوزه عملیاتی',
        '۵. ارزیابی مداوم سیاست‌ها در بازه‌های مشخص',
        '۶. تشخیص شرایط غیرعادی یا نقض آستانه SLA',
        '۷. صدور هشدارهای عملیاتی طبقه‌بندی‌شده',
        '۸. ایجاد یا به‌روزرسانی خودکار تیکت رخداد',
        '۹. بررسی اولیه و تریاژ توسط مهندس مسئول داخلی',
        '۱۰. در صورت نیاز به متخصص: آماده‌سازی نسخه بهداشتی‌شده لاگ‌ها',
        '۱۱. بررسی و تایید رسمی مدیر ارشد جهت اشتراک با شبکه متخصصان',
        '۱۲. تطبیق و نمایش فرصت در تالار متخصصان واجد شرایط',
        '۱۳. دریافت و مقایسه پروپوزال‌های ارسالی متخصصان',
        '۱۴. پذیرش پیشنهاد و ایجاد فضای همکاری اشتراکی زمان‌مند',
        '۱۵. اعمال راه‌حل یا پچ فنی توسط متخصص در محیط مجاز',
        '۱۶. ارائه و تایید گزارش جامع ریشه‌یابی و راهکار (Resolution Report)',
        '۱۷. بایگانی دانش فنی در پایگاه دانش اختصاصی سازمان برای جلوگیری از تکرار',
      ],
      en: [
        '1. Organization registration and environment setup',
        '2. Connecting telemetry data sources (Syslog, OpenTelemetry, APIs)',
        '3. Receiving live log and event telemetry streams',
        '4. Routing and categorizing events into 5 core technical domains',
        '5. Continuously evaluating domain policies against configured intervals',
        '6. Detecting abnormal thresholds or degradation patterns',
        '7. Generating categorized alert notifications (New / Acknowledged)',
        '8. Creating or updating correlated incident tickets',
        '9. Internal investigation and triage by assigned domain staff',
        '10. If expert help is required: Automated generation of sanitized case',
        '11. Formal review and sharing authorization by Organization Administrator',
        '12. Rule-based expert matching and publishing to verified expert pool',
        '13. Receiving, comparing, and reviewing competitive specialist proposals',
        '14. Accepting proposal and spinning up time-bound collaboration workspace',
        '15. Applying diagnostic patch or architectural remediation',
        '16. Reviewing and formally approving structured resolution report',
        '17. Archiving verified remediation into organization knowledge base',
      ],
    },
    inputs: {
      fa: ['تلمتری مداوم زیرساخت', 'آستانه‌های تعیین‌شده سیاست‌ها', 'تصمیمات مدیران در فرآیند تایید'],
      en: ['Continuous infrastructure telemetry', 'Policy threshold configs', 'Manager review actions'],
    },
    processingLogic: {
      fa: ['پایپ‌لاین ترتیبی پردازش داده، ارزیابی، پالایش و مدیریت چرخه عمر رخداد'],
      en: ['Sequential ingestion, evaluation, redaction, and incident lifecycle state machine'],
    },
    outputs: {
      fa: ['سیستم پایدار، رخداد حل‌شده و مستندات دانش فنی بدون افشای داده‌های محرمانه'],
      en: ['Restored system stability, resolved incidents, and institutional technical knowledge'],
    },
    relationships: {
      fa: 'محور اصلی هماهنگی میان کنسول پایش، ماژول‌های لاگ، سیاست‌ها، حریم خصوصی و بازارگاه متخصصان است.',
      en: 'The operational backbone uniting monitoring, policies, privacy redaction, and marketplace.',
    },
    realisticExample: {
      fa: 'در رخداد نشت حافظه نودهای کوبرنتیز (INC-2026-8812)، سیستم لاگ‌های کانتینر را پالایش نموده، مدیر پرونده را تایید کرده، متخصص SRE پروپوزال ارسال می‌کند، لیمیت‌های cgroup تصحیح شده و گزارش نهایی در پایگاه دانش ذخیره می‌شود.',
      en: 'In a Kubernetes memory leak incident (INC-2026-8812), container logs are redacted, the admin authorizes case sharing, an SRE specialist submits a bid, cgroup limits are tuned, and the solution is archived.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی تعاملی در MVP به گونه‌ای که کاربر بتواند هر ۱۷ مرحله را به صورت عملی تست و شبیه‌سازی کند.',
      en: 'Fully demonstrable across the interactive MVP with working simulation triggers.',
    },
    evaluationMethod: {
      fa: 'انطباق ۱۰۰ درصدی مراحل پیاده‌سازی‌شده با مشخصات علمی پروژه دانشگاهی.',
      en: 'Strict adherence of prototype workflow to university e-commerce project specifications.',
    },
    whatHappensBefore: {
      fa: 'تعریف نقش‌ها و پرسونای سازمان‌ها در بخش C.',
      en: 'Builds upon target user definitions from Topic C.',
    },
    whatHappensAfter: {
      fa: 'بررسی معماری فنی پایش و لاگ‌ها در بخش E.',
      en: 'Leads to monitoring and logging technical architecture in Topic E.',
    },
  },

  // =========================================================================
  // TOPIC E: MONITORING AND LOGGING ARCHITECTURE
  // =========================================================================
  {
    id: 'doc-monitoring-arch',
    groupId: 'E',
    itemNumber: 5,
    title: {
      fa: 'معماری جامع پایش، لاگ‌ها و رصدپذیری',
      en: 'E. Monitoring and Logging Architecture',
    },
    summary: {
      fa: 'تفکیک ۵ حوزه فنی، سطوح لاگ (DEBUG تا CRITICAL)، کاوشگر زنده، همبستگی رویدادها و ایزولاسیون بر اساس نقش.',
      en: 'Decoupling 5 technical domains, log severity levels (DEBUG to CRITICAL), live explorer, trace correlation, and role-based data isolation.',
    },
    available: true,
    introduction: {
      fa: 'معماری رصدپذیری BridgeLog رویدادها، متریک‌ها و لاگ‌ها را در یک ساختار چندلایه جمع‌آوری می‌کند. برخلاف ابزارهای سنتی که همه چیز را در یک لیست درهم می‌ریزند، BridgeLog داده‌ها را بر اساس دامنه فنی و سطح دسترسی کاربر تفکیک می‌نماید.',
      en: 'BridgeLog observability architecture collects events, metrics, and logs in a structured multi-tier schema, decoupling telemetry by technical domain and user access boundary.',
    },
    definition: {
      fa: 'پایپ‌لاین پردازش، نرمال‌سازی و نگاشت تلمتری ورودی به فیلدهای استاندارد شامل timestamp, severity, domain, source, service, eventId, correlationId.',
      en: 'The data pipeline ingesting, parsing, and normalizing telemetry into standard structured fields with trace IDs and incident links.',
    },
    whyExists: {
      fa: 'بدون ساختاردهی و تفکیک دامنه‌ها، شناسایی علت ریشه‌ای قطعی در میان صدها لاگ نامربوط برای مهندسان غیرممکن می‌شود.',
      en: 'Without domain categorization, engineers drown in noisy logs and fail to isolate the root cause during high-stress outages.',
    },
    problemAddressed: {
      fa: 'حذف سربار جستجوی لاگ‌های نامرتبط، جداسازی ترافیک بک‌اند از فرانت‌اند و سخت‌افزار، و مهار دسترسی غیرمجاز کارکنان به دامنه‌های غیرتخصصی.',
      en: 'Eliminates irrelevant log noise, decouples frontend/backend/hardware streams, and enforces least-privilege domain access.',
    },
    mainComponents: {
      fa: [
        '۱. حوزه نرم‌افزار و برنامه‌های کاربردی (Application & Software)',
        '۲. حوزه زیرساخت و سیستم‌عامل (Infrastructure & Runtime)',
        '۳. حوزه پایگاه داده و ذخیره‌سازی (Database & Storage)',
        '۴. حوزه شبکه و اتصال اینترنت (Network & Connectivity)',
        '۵. حوزه سخت‌افزار فیزیکی و امنیت (Hardware & Security)',
      ],
      en: [
        '1. Application & Software Domain (APIs, exceptions, frontend latency)',
        '2. Infrastructure & Runtime Domain (Linux OS, CPU, memory, pods)',
        '3. Database & Storage Domain (Connection pools, slow queries, NVMe I/O)',
        '4. Network & Connectivity Domain (Packet loss, RTT, DNS, TLS certificates)',
        '5. Hardware & Security Domain (Thermals, redundant PSU, IPMI, auth security)',
      ],
    },
    howItWorks: {
      fa: 'لاگ‌ها وارد سیستم شده، فیلدهای آن پارس و اعتبارسنجی می‌شوند. اگر لاگ متعلق به حوزه دیتابیس باشد، به صفحه دیتابیس هدایت شده و فقط افراد مجاز می‌توانند آن را مشاهده کنند.',
      en: 'Logs enter via ingress agents, are parsed into JSON, assigned a correlation ID, and routed to the corresponding domain view under strict RBAC checks.',
    },
    stepByStepProcess: {
      fa: [
        '۱. دریافت استریم لاگ‌ها از درگاه‌های تلمتری',
        '۲. پارس کردن پیام و استخراج سطح رخداد (DEBUG تا CRITICAL)',
        '۳. تخصیص شناسه یکتا (Event ID) و شناسه پیگیری (Correlation ID)',
        '۴. نگاشت به حوزه و سرویس مربوطه',
        '۵. نمایش در کاوشگر زنده با امکان فیلتر و بازرسی عمیق JSON',
      ],
      en: [
        '1. Ingesting raw stream via collectors',
        '2. Parsing payload and extracting severity level',
        '3. Assigning unique Event ID and Correlation ID',
        '4. Routing to specific domain and source',
        '5. Rendering in live viewer with search and JSON drawer',
      ],
    },
    inputs: {
      fa: ['استریم لاگ‌های Syslog و JSON', 'متریک‌های کارایی کانتینرها و سرورها'],
      en: ['Syslog and structured JSON event streams', 'Container and node performance metrics'],
    },
    processingLogic: {
      fa: ['فیلترینگ و جستجوی بلادرنگ در حافظه', 'اعمال قواعد دسترسی نقش کاربر', 'توقف و ادامه استریم بدون افت دیتا'],
      en: ['In-memory real-time filtering', 'RBAC domain boundary filtering', 'Pause/resume buffering'],
    },
    outputs: {
      fa: ['کاوشگر زنده لاگ‌ها', 'نمایشگر اسپارک‌لاین سلامت', 'موجودیت‌های تلمتری قابل ارزیابی در موتور سیاست'],
      en: ['Live log stream viewer', 'Telemetry sparklines', 'Standardized event entities for policy engine'],
    },
    relationships: {
      fa: 'پایه و اساس موتور سیاست‌ها و مرکز هشدارها است؛ رخدادها مستقیماً به لاگ‌های مربوطه پیوند می‌خورند.',
      en: 'Supplies real-time event feeds directly into the Policy Engine and Alert Center.',
    },
    realisticExample: {
      fa: 'لاگ بحرانی با شناسه EVT-9842 و شناسه همبستگی CORR-DB-7811 با پیام Connection pool exhausted در حوزه Database & Storage دریافت شده و بلافاصله به تیکت رخداد INC-2026-4410 ضمیمه می‌شود.',
      en: 'Critical log EVT-9842 with correlation ID CORR-DB-7811 warning of connection exhaustion arrives under Database & Storage and is linked to ticket INC-2026-4410.',
    },
    implementationApproach: {
      fa: 'ژنراتور شبیه‌ساز رویدادهای زنده در AppContext به همراه فیلترهای جستجو، دامنه و سطح بحرانی.',
      en: 'Controlled live simulated event generator with domain, severity, and text filters.',
    },
    evaluationMethod: {
      fa: 'سرعت و دقت فیلترینگ لاگ‌ها و جلوگیری از نشت داده‌های سایر حوزه‌ها به کارکنان غیرمجاز.',
      en: 'Verified latency of in-memory log search and strict domain access isolation.',
    },
    whatHappensBefore: {
      fa: 'تعریف گردش کار ۱۷ مرحله‌ای در بخش D.',
      en: 'Follows the workflow blueprint defined in Topic D.',
    },
    whatHappensAfter: {
      fa: 'ورود به تحلیل عملکرد موتور سیاست‌ها در بخش F.',
      en: 'Leads into Policy Engine mechanics in Topic F.',
    },
  },

  // =========================================================================
  // TOPIC F: POLICY ENGINE
  // =========================================================================
  {
    id: 'doc-policy-engine',
    groupId: 'F',
    itemNumber: 6,
    title: {
      fa: 'موتور سیاست‌ها و ارزیابی خودکار شرایط عملیاتی',
      en: 'F. Policy Engine and Automated Condition Evaluation',
    },
    summary: {
      fa: 'اصول طراحی و اجرای سیاست‌های ۱۵گانه، شروط آستانه، بازه‌های ارزیابی، اقدامات واکنشی، و تست شبیه‌سازی ماشه بدون خطر تخریب.',
      en: 'Design and execution of 15 operational policies, trigger conditions, evaluation intervals, automated actions, and safe simulation triggers.',
    },
    available: true,
    introduction: {
      fa: 'سیاست‌های عملیاتی (Policies) قلب تپنده خودکارسازی در BridgeLog هستند. به جای اینکه پرسنل فنی ساعت‌ها خیره به نمودارها بمانند، سیاست‌ها پیوسته وضعیت حوزه‌ها را با شروط منطقی مقایسه کرده و در لحظه تخطی از آستانه اقدام مقتضی را صادر می‌کنند.',
      en: 'Operational policies form the automation core of BridgeLog. Rather than requiring engineers to manually monitor screens, policies evaluate live metrics and execute actions instantly when thresholds are violated.',
    },
    definition: {
      fa: 'قاعده پیکربندی‌شده‌ای شامل شرط ماشه (Trigger Condition)، آستانه مجاز، بازه ارزیابی (Interval)، حوزه هدف، شدت، و اقدام واکنشی خودکار.',
      en: 'A rule specification comprising trigger conditions, SLA thresholds, evaluation intervals, target components, severity, and automated response actions.',
    },
    whyExists: {
      fa: 'پیشگیری از خطای انسانی در تشخیص زودهنگام بحران و کاهش زمان رسیدن به اقدام اصلاحی به کمتر از چند ثانیه.',
      en: 'Prevents human oversight in early outage detection and shrinks time-to-remediation to seconds.',
    },
    problemAddressed: {
      fa: 'جلوگیری از غافلگیری در ساعات غیرکاری، توقف حوادث زنجیره‌ای (Cascading Failures)، و ثبت دقیق سوابق اجرا (Audit Trail).',
      en: 'Prevents off-hours surprise crashes, stops cascading failures, and records tamper-proof execution history.',
    },
    mainComponents: {
      fa: [
        'سیاست‌های سخت‌افزار و سرور (دمای CPU، بار تغذیه، سلامت دیسک)',
        'سیاست‌های حافظه و پردازش (فشار رم، اشباع CPU، پادهای کوبرنتیز)',
        'سیاست‌های دیتابیس و کش (استخر اتصال، کوئری کند، اصابت ردیس)',
        'سیاست‌های نرم‌افزار و API (خطای 5xx، تاخیر p99، استثناهای فرانت‌اند)',
        'سیاست‌های شبکه و امنیت (افت پکت، انقضای TLS، حملات احراز هویت)',
      ],
      en: [
        'Hardware & Server policies (CPU thermal thresholds, PSU load, SMART disk health)',
        'Memory & Runtime policies (OOM pressure, sustained CPU overload, pod restarts)',
        'Database & Cache policies (Connection saturation, slow queries, Redis hit ratio)',
        'Software & API policies (HTTP 5xx spikes, p99 latency breaches, unhandled JS errors)',
        'Network & Security policies (Packet drop spikes, TLS expiry, brute-force auth bursts)',
      ],
    },
    howItWorks: {
      fa: 'موتور سیاست در هر بازه زمانی (مثلاً هر ۱۰ ثانیه)، داده‌های منبع هدف را می‌خواند. اگر شرط برقرار باشد، وضعیت سیاست به triggered تغییر کرده، شمارنده اجرا افزایش می‌یابد و هشدار یا اقدام خودکار اجرا می‌شود.',
      en: 'The engine queries target metrics at the specified interval. When conditions are met, the policy status switches to triggered, incrementing execution counts and dispatching actions.',
    },
    stepByStepProcess: {
      fa: [
        '۱. تعریف شرط منطقی و آستانه (مثلاً Pool Usage > 90% for 2m)',
        '۲. بررسی پریودیک داده‌های تلمتری توسط ارزیاب سیاست',
        '۳. تشخیص نقض آستانه و ثبت زمان و نتیجه ارزیابی',
        '۴. تولید رکورد در مرکز هشدارها (Alert Center)',
        '۵. اجرای اقدام واکنشی ایمن (Simulated Action) یا ارسال وب‌هوک',
      ],
      en: [
        '1. Define condition and threshold (e.g., Pool Usage > 90% for 2m)',
        '2. Periodic evaluation of telemetry data by engine',
        '3. Detecting threshold breach and timestamping execution',
        '4. Raising corresponding notification in Alert Center',
        '5. Dispatching automated safe action or sending webhook',
      ],
    },
    inputs: {
      fa: ['استریم داده‌های تلمتری منبع هدف', 'پارامترهای پیکربندی آستانه'],
      en: ['Target telemetry data stream', 'Configured threshold parameters'],
    },
    processingLogic: {
      fa: ['ارزیابی عبارات شرطی ریاضی و زمانی', 'جلوگیری از فلپینگ هشدارها با مکانیزم هیسترزیس'],
      en: ['Time-series mathematical threshold evaluation', 'Alert hysteresis and debouncing'],
    },
    outputs: {
      fa: ['تغییر وضعیت سیاست به Triggered', 'صدور نوتیفیکیشن هشدار', 'ثبت در تاریخچه ارزیابی'],
      en: ['Policy state transition to Triggered', 'Alert notification payload', 'Execution history log'],
    },
    relationships: {
      fa: 'مستقیماً از داده‌های کاوشگر لاگ تغذیه شده و ورودی‌های مرکز هشدارها و رخدادها را تولید می‌کند.',
      en: 'Consumes normalized logs and generates inputs for the Alert Center and Incident Management.',
    },
    realisticExample: {
      fa: 'سیاست POL-DB-01 با شرط «استفاده از اتصالات دیتابیس > ۹۰ درصد به مدت ۲ دقیقه» فعال است. با رسیدن کانکشن‌ها به ۹۱٪، اقدام خودکار «تولید هشدار بحرانی و فعال‌سازی پاکسازی کانکشن‌های معلق (Idle Kill)» اجرا شده و شمارنده اجرا ۱ بار افزایش می‌یابد.',
      en: 'Policy POL-DB-01 evaluates DB Connection Pool > 90% for 2 min. As connections hit 91%, the action raises a critical alert and executes idle connection reclamation, updating execution metrics.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی ۱۵ سیاست واقعی در mockOpsData به همراه تابع simulatePolicyEvaluation با نوتیفیکیشن غیرمسدودکننده.',
      en: 'Implemented across 15 domain-specific policies with non-blocking toast feedback simulation.',
    },
    evaluationMethod: {
      fa: 'تست شبیه‌سازی ماشه و بازبینی صحت اقدامات واکنشی در کمتر از ۱ ثانیه.',
      en: 'Verified through instant trigger simulation and audit feedback in the UI.',
    },
    whatHappensBefore: {
      fa: 'پارس و ساختاردهی لاگ‌ها در معماری رصدپذیری (بخش E).',
      en: 'Built on normalized logs from the Observability Architecture (Topic E).',
    },
    whatHappensAfter: {
      fa: 'انتقال هشدارهای صادرشده به ماژول مدیریت رخدادها در بخش G.',
      en: 'Feeds tripped alerts into Incident Management in Topic G.',
    },
  },

  // =========================================================================
  // TOPIC G: INCIDENT MANAGEMENT
  // =========================================================================
  {
    id: 'doc-incident-mgmt',
    groupId: 'G',
    itemNumber: 7,
    title: {
      fa: 'مدیریت رخدادها و چرخه حیات حل بحران',
      en: 'G. Incident Management and Crisis Lifecycle',
    },
    summary: {
      fa: 'تفاوت رخداد با لاگ فردی، چرخه حیات ۷ مرحله‌ای (شناسایی تا بررسی نهایی)، همبستگی هشدارها و مستندسازی اقدامات.',
      en: 'Distinguishing incidents from single logs, 7-stage crisis lifecycle (Detected to Reviewed), alert correlation, and resolution tracking.',
    },
    available: true,
    introduction: {
      fa: 'هر لاگ یا هشدار به تنهایی یک رخداد نیست. در BridgeLog، «رخداد» (Incident) زمانی شکل می‌گیرد که یک اختلال عملیاتی ملموس نیاز به بررسی، تریاژ و اقدام مهندسی داشته باشد. رخدادها چتری هستند که چندین هشدار، لاگ مرتبط و اقدام اصلاحی را به یکدیگر پیوند می‌دهند.',
      en: 'A single log or alert is not an incident. In BridgeLog, an Incident represents a concrete operational disruption requiring investigation, triage, and coordinated remediation.',
    },
    definition: {
      fa: 'موجودیت عملیاتی ساختاریافته شامل شناسه تیکت، عنوان، دامنه، شدت (Low تا Critical)، لاگ‌های اولیه، هشدارهای مرتبط، وضعیت چرخه حیات و گزارش حل.',
      en: 'A structured crisis entity containing a ticket number, title, affected domain, severity, raw logs, correlated alerts, lifecycle state, and remediation notes.',
    },
    whyExists: {
      fa: 'جلوگیری از غرق شدن تیم در هزاران پیام خطا و متمرکز ساختن تلاش‌های فنی روی ریشه‌یابی و حل مسالمت‌آمیز بحران.',
      en: 'Prevents team burnout caused by alert fatigue, focusing engineering efforts on single root-cause resolution units.',
    },
    problemAddressed: {
      fa: 'پایان دادن به رخدادهای حل‌نشده و بدون متولی، مستندسازی دقیق زمان کشف تا حل، و ارزیابی عینی SLA تیم فنی.',
      en: 'Eliminates unassigned or lingering outages, establishes verifiable MTTR timelines, and enforces SLA accountability.',
    },
    mainComponents: {
      fa: [
        'شماره تیکت یکتا (مثلاً INC-2026-8812)',
        'تعیین دامنه فنی و سیستم آسیب‌دیده',
        'سطح شدت چهارگانه (Low, Medium, High, Critical)',
        'چرخه عمر ۷ مرحله‌ای: Detected → Investigating → Diagnosed → Awaiting Action or Expert → In Progress → Resolved → Reviewed',
        'پیوند مستقیم به لاگ‌های مرتبط و هشدارهای پیشین',
      ],
      en: [
        'Unique ticket identifier (e.g. INC-2026-8812)',
        'Affected technical domain and system scope',
        'Four-level severity grading (Low, Medium, High, Critical)',
        '7-stage lifecycle state machine (Detected to Reviewed)',
        'Direct linkages to correlated raw logs and historical alerts',
      ],
    },
    howItWorks: {
      fa: 'رخداد می‌تواند خودکار (توسط موتور سیاست) یا دستی (توسط اپراتور IT) ثبت شود. با تغییر وضعیت به Investigating، مهندس مربوطه تعیین شده و در صورت نیاز دکمه «درخواست متخصص» فعال می‌گردد.',
      en: 'Incidents are instantiated automatically by tripped policies or manually by operators. Advancing status assigns owners and unlocks the secure expert escalation path.',
    },
    stepByStepProcess: {
      fa: [
        '۱. شناسایی اولیه اختلال توسط سیاست یا گزارش اپراتور (Detected)',
        '۲. بررسی علائم و اختصاص مسئول فنی (Investigating)',
        '۳. ریشه‌یابی و تایید الگوی خطا (Diagnosed)',
        '۴. تصمیم‌گیری برای اقدام داخلی یا جذب متخصص (Awaiting Action / Expert)',
        '۵. اجرای اصلاحات در محیط آزمایشی یا پروداکشن (In Progress)',
        '۶. بازگشت پایداری و تایید تست سلامت (Resolved)',
        '۷. بازنگری پس از بحران و انتقال دانش به بایگانی (Reviewed)',
      ],
      en: [
        '1. Detection via tripped policy or operator triage (Detected)',
        '2. Symptom analysis and domain owner assignment (Investigating)',
        '3. Root cause validation (Diagnosed)',
        '4. Internal action vs. expert escalation decision (Awaiting Action / Expert)',
        '5. Applying configuration or code fix (In Progress)',
        '6. Verifying telemetry restoration (Resolved)',
        '7. Postmortem review and knowledge base capture (Reviewed)',
      ],
    },
    inputs: {
      fa: ['هشدارهای موتور سیاست', 'گزارش‌های دستی پرسنل', 'تلمتری غیرعادی'],
      en: ['Policy engine alerts', 'Operator triage submissions', 'Anomalous telemetry'],
    },
    processingLogic: {
      fa: ['ماشین وضعیت گام‌به‌گام', 'همبستگی خودکار هشدارهای دارای Correlation ID یکسان'],
      en: ['Deterministic state machine', 'Trace-based alert correlation aggregation'],
    },
    outputs: {
      fa: ['تیکت‌های رخداد فعال', 'پرونده‌های ورودی به سیستم پالایش حریم خصوصی', 'گزارش‌های MTTR'],
      en: ['Active incident records', 'Sanitizer inputs for expert dispatch', 'MTTR analytics'],
    },
    relationships: {
      fa: 'پلی میان نظارت عملیاتی داخلی و پایپ‌لاین اشتراک‌گذاری امن با متخصصان بیرونی است.',
      en: 'The definitive bridge between internal observability and the external expert workflow.',
    },
    realisticExample: {
      fa: 'تیکت INC-2026-3829 با عنوان «افزایش نرخ خطای HTTP 5xx در سرویس پرداخت» در وضعیت Diagnosed قرار می‌گیرد. تیم داخلی تشخیص می‌دهد که خطای بن‌بست تراکنش رخ داده است؛ با کلیک روی «درخواست متخصص»، فرآیند آماده‌سازی پرونده بهداشتی‌شده کلید می‌خورد.',
      en: 'Ticket INC-2026-3829 (HTTP 5xx error surge in payment gateway) reaches Diagnosed. The team confirms database deadlock; clicking "Request Expert" launches privacy sanitization.',
    },
    implementationApproach: {
      fa: 'سیستم ثبت، فیلتر و تریاژ کامل رخدادها با امکان اتصال مستقیم به مدال درخواست متخصص.',
      en: 'Interactive incident management table, detail views, and seamless escalation modals.',
    },
    evaluationMethod: {
      fa: 'ردگیری تاریخچه رخداد و اتصال بی‌نقص به پرونده‌های اشتراکی متخصصان.',
      en: 'Validated by full lifecycle state transitions and zero broken references.',
    },
    whatHappensBefore: {
      fa: 'صدور هشدار بحرانی توسط موتور سیاست‌ها (بخش F).',
      en: 'Triggered by threshold alerts from the Policy Engine (Topic F).',
    },
    whatHappensAfter: {
      fa: 'آماده‌سازی پرونده بهداشتی‌شده و حفظ محرمانگی در بخش H.',
      en: 'Triggers privacy redaction and secure case sharing in Topic H.',
    },
  },

  // =========================================================================
  // TOPIC H: DATA PROTECTION & SECURE SHARING
  // =========================================================================
  {
    id: 'doc-data-protection',
    groupId: 'H',
    itemNumber: 8,
    title: {
      fa: 'حفاظت از داده‌ها، پالایش محرمانگی و اشتراک‌گذاری امن',
      en: 'H. Data Protection, Privacy Redaction, and Secure Case Sharing',
    },
    summary: {
      fa: 'فضای کار خصوصی در برابر پرونده بهداشتی‌شده، شبه‌نام‌سازی دترمینستیک، حذف توکن‌ها/IPها، و فرآیند تایید رسمی مدیر پیش از انتشار.',
      en: 'Private Workspace vs. Sanitized Case, deterministic pseudonymization, secret/IP redaction, and mandatory admin authorization before sharing.',
    },
    available: true,
    introduction: {
      fa: 'بزرگ‌ترین مانع شرکت‌ها برای بهره‌گیری از مشاوران فنی مستقل، ترس از افشای اسرار، پسوردها، آدرس‌های IP داخلی و اطلاعات هویتی کاربران است. BridgeLog این چالش را با تفکیک کامل «فضای کار خصوصی» از «پرونده بهداشتی‌شده» و پایپ‌لاین خودکار پالایش حل می‌کند.',
      en: 'The foremost hesitation in hiring external specialists is fear of exposing credentials, internal network topologies, and customer data. BridgeLog resolves this through strict separation of Private Workspaces from Sanitized Cases.',
    },
    definition: {
      fa: 'سازوکار امنیتی دوگانه شامل پایپ‌لاین فیلترینگ و مهار داده‌های حساس (Redaction Engine) و درگاه تایید مدیر سازمان پیش از دسترسی هر متخصص بیرونی.',
      en: 'A dual-layer security architecture combining an automated privacy redaction engine with mandatory organization admin sign-off.',
    },
    whyExists: {
      fa: 'حذف تنها نام شرکت هرگز برای ناشناس‌سازی کافی نیست؛ آدرس‌های IP محلی (مانند 192.168.1.45)، نام هاست‌ها، کدهای خطای دربردارنده هش رمز یا توکن‌های API می‌توانند کل شبکه سازمان را در معرض خطر نفوذ قرار دهند.',
      en: 'Simply removing a company logo never anonymizes an outage; internal IPs, server hostnames, leaked DB passwords, and bearer tokens expose the entire network to compromise.',
    },
    problemAddressed: {
      fa: 'جلوگیری قطعی از نشت اسرار صنعتی و رعایت الزامات قانونی حفاظت از داده‌ها در حین حل سریع بحران فنی.',
      en: 'Prevents industrial espionage and data compliance breaches while preserving troubleshooting speed.',
    },
    mainComponents: {
      fa: [
        'فضای کار خصوصی (Private Workspace): نگهداری لاگ‌های دست‌نخورده، IPها و اطلاعات محرمانه در سرور سازمان',
        'موتور پالایش خودکار: شناسایی الگوهای توکن، گذرواژه، ایمیل و کدهای حساس با عبارات منظم پیشرفته',
        'پرونده بهداشتی‌شده (Sanitized Case): نسخه امن شامل علائم فنی، خلاصه خطاها و لاگ‌های شبه‌نام‌سازی‌شده',
        'درگاه بازرسی و تایید مدیر ارشد: تایید نهایی مدیر سازمان پیش از باز شدن پرونده در تالار متخصصان',
      ],
      en: [
        'Private Workspace: Unaltered raw logs, hostnames, and internal configs kept on-prem',
        'Automated Redaction Engine: Pattern-matching regex masking tokens, passwords, and private IPs',
        'Sanitized Case: Clean version containing technical symptoms, scrubbed traces, and pseudonyms',
        'Admin Authorization Gate: Mandatory manual approval by Org Admin prior to marketplace publishing',
      ],
    },
    howItWorks: {
      fa: 'هنگام درخواست مشاوره بیرونی، موتور پالایش لاگ‌ها را بررسی می‌کند. آدرس 10.0.4.12 به [INTERNAL_IP_REDACTED_A] و توکن Bearer eyJ... به [BEARER_TOKEN_REDACTED] تبدیل می‌شود. نسخه اصلی تغییر نمی‌کند. مدیر نسخه پالایش‌شده را بررسی و تایید می‌نماید.',
      en: 'When requesting help, the redaction pipeline scans logs. 10.0.4.12 becomes [INTERNAL_IP_REDACTED_A] and auth headers become [BEARER_TOKEN_REDACTED]. Original data remains untouched. The admin reviews and approves the clean payload.',
    },
    stepByStepProcess: {
      fa: [
        '۱. انتخاب رخداد و آغاز فرآیند ساخت پرونده خارجی',
        '۲. اجرای الگوریتم پالایش خودکار روی لاگ‌ها و شواهد',
        '۳. تولید شناسه شبه‌نام برای نودها و سرویس‌ها',
        '۴. نمایش پیش‌نمایش پرونده بهداشتی‌شده به مدیر سازمان',
        '۵. کلیک دکمه «تایید نهایی اشتراک پرونده» توسط مدیر ارشد',
        '۶. انتشار امن پرونده در بازارگاه متخصصان معتبر',
      ],
      en: [
        '1. Incident selected for external specialist escalation',
        '2. Automated redaction algorithm runs across logs and diagnostics',
        '3. Consistent pseudonymization applied to internal hosts',
        '4. Sanitized preview rendered for organization admin audit',
        '5. Formal authorization by Organization Administrator',
        '6. Case published to verified expert opportunities desk',
      ],
    },
    inputs: {
      fa: ['لاگ‌های خام و متن خطاهای پروداکشن', 'پیکربندی الگوهای عبارات منظم محرمانگی'],
      en: ['Raw production error logs', 'Confidential regex rule dictionaries'],
    },
    processingLogic: {
      fa: ['شبه‌نام‌سازی دترمینستیک سازگار (Consistent Deterministic Pseudonymization)', 'جایگزینی برگشت‌ناپذیر مقادیر حساس'],
      en: ['Consistent deterministic pseudonymization preserving symptom correlation without disclosure'],
    },
    outputs: {
      fa: ['پرونده بهداشتی‌شده قابل انتشار', 'گزارش ممیزی صفر نشت (Zero-Leak Audit)'],
      en: ['Auditable sanitized case record', 'Verified zero-leak safety score'],
    },
    relationships: {
      fa: 'پلی ایمن و غیرقابل نفوذ میان مدیریت رخدادهای داخلی و تالار متخصصان بیرونی.',
      en: 'An impenetrable privacy airlock between internal incidents and the expert network.',
    },
    realisticExample: {
      fa: 'در پرونده اشباع دیسک، آدرس دیتاسنتر و IP داخلی سرور master-db-01.internal.corp (172.16.20.14) به نود [NODE_REDACTED_A] و IP به [INTERNAL_IP_REDACTED_A] تبدیل شده است. متخصص با بررسی ایندکس‌ها راهکار را ارائه می‌دهد بدون آنکه از هویت دیتاسنتر آگاه شود.',
      en: 'In a disk crisis, master-db-01.internal.corp (172.16.20.14) is masked to [NODE_REDACTED_A] and [INTERNAL_IP_REDACTED_A]. The specialist diagnoses table bloat without knowing the datacenter provider.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی دقیق مدال SpecialistRequestModal با نمایش تب مقایسه Private vs Sanitized و دکمه تایید مدیر.',
      en: 'Demonstrated via SpecialistRequestModal featuring side-by-side Private vs Sanitized tabs and admin approval gate.',
    },
    evaluationMethod: {
      fa: 'ممیزی دستی و خودکار برای اطمینان از عدم عبور حتی یک توکن یا آدرس داخلی به بازارگاه.',
      en: 'Verified by automated scanning ensuring zero plaintext credentials reach the marketplace view.',
    },
    whatHappensBefore: {
      fa: 'تشخیص و تریاژ رخداد در بخش G.',
      en: 'Follows incident triage and escalation decision in Topic G.',
    },
    whatHappensAfter: {
      fa: 'کشف و تطبیق متخصصان واجد شرایط در بخش I.',
      en: 'Enables safe specialist discovery and proposals in Topic I.',
    },
  },

  // =========================================================================
  // TOPIC I: EXPERT NETWORK & MATCHING
  // =========================================================================
  {
    id: 'doc-expert-network',
    groupId: 'I',
    itemNumber: 9,
    title: {
      fa: 'شبکه متخصصان فنی، بازارگاه و تطبیق هوشمند',
      en: 'I. Expert Network, Marketplace, and Transparent Matching',
    },
    summary: {
      fa: 'تالار فرصت‌ها، نمایه مهارت‌های تاییدشده، تطبیق شفاف مبتنی بر قواعد، بررسی پروپوزال‌ها و فضای همکاری زمان‌مند.',
      en: 'Opportunity desk, verified skill profiles, transparent rule-based matching, proposal evaluation, and sandboxed collaboration.',
    },
    available: true,
    introduction: {
      fa: 'شبکه متخصصان BridgeLog یک بازارگاه حرفه‌ای مستقل از کنسول مانیتورینگ سازمان است. در این محیط، متخصصان ارشد فنی می‌توانند فرصت‌های تاییدشده و پالایش‌شده را مشاهده کنند، پروپوزال ارسال نمایند و پس از انتخاب توسط سازمان، وارد فضای کار اشتراکی امن شوند.',
      en: 'The BridgeLog Expert Network is a decoupled professional talent marketplace. Verified senior engineers review sanitized opportunities, submit competitive proposals, and collaborate safely.',
    },
    definition: {
      fa: 'بازارگاه فنی خدمات تخصصی IT مجهز به موتور تطبیق مهارت، سیستم بررسی پروپوزال‌ها و اتاق حل مسئله مبتنی بر مایل‌استون.',
      en: 'A dedicated IT engineering talent marketplace equipped with skill-matching heuristics, bid evaluation desks, and milestone-based project rooms.',
    },
    whyExists: {
      fa: 'پلتفرم‌های فریلنسری عمومی (مانند پونکل یا پونیشا) فاقد ساختار فنی، محرمانگی و قابلیت درک رخدادهای IT هستند و ابزارهای مانیتورینگ سنتی نیز راهکاری برای جذب تخصص ندارند.',
      en: 'Generic freelance boards lack technical depth and privacy safeguards, while traditional monitoring tools provide zero mechanism to summon specialized external help.',
    },
    problemAddressed: {
      fa: 'کاهش زمان یافتن مهندس زبده از چند روز به کمتر از ۳۰ دقیقه، با تضمین تخصص مرتبط و قیمت‌گذاری شفاف بر مبنای ساعت یا پروژه.',
      en: 'Shrinks time-to-hire from days to under 30 minutes, guaranteeing verified stack expertise and transparent pricing.',
    },
    mainComponents: {
      fa: [
        'پروفایل و نشان‌های تایید مهارت (لینوکس، PostgreSQL، شبکه، امنیت)',
        'تالار فرصت‌های عمومی (نمایش تنها پرونده‌های دارای تایید مدیر)',
        'سیستم ارسال و مقایسه پروپوزال‌های رقابتی',
        'موتور تطبیق شفاف بر اساس سازگاری تخصص، سابقه و امتیاز',
        'فضای همکاری اشتراکی با وظایف و مایل‌استون‌های مرحله‌ای',
      ],
      en: [
        'Verified expert profiles with technical badges and ratings',
        'Public sanitized opportunity board (approved cases only)',
        'Competitive proposal submission and comparison desk',
        'Transparent matching algorithm based on skill weight and availability',
        'Collaborative workspace with milestone tracking and structured chat',
      ],
    },
    howItWorks: {
      fa: 'پرونده تاییدشده در تالار قرار می‌گیرد. الگوریتم تطبیق بر اساس مهارت‌های مورد نیاز، بهترین متخصصان را رتبه‌بندی می‌کند. متخصصان پروپوزال می‌دهند، سازمان یکی را می‌پذیرد و همکاری در فضای امن آغاز می‌شود.',
      en: 'Approved cases hit the opportunity board. The matching heuristic ranks specialists based on required skills and track record. Specialists submit bids; the organization accepts one to initiate collaboration.',
    },
    stepByStepProcess: {
      fa: [
        '۱. انتشار پرونده بهداشتی‌شده در تالار فرصت‌ها',
        '۲. اطلاع‌رسانی خودکار به متخصصان واجد شرایط متناسب با حوزه',
        '۳. ارسال پروپوزال شامل زمان تخمینی، نرخ ساعتی و رویکرد حل',
        '۴. مقایسه پروپوزال‌ها در کنسول سازمان و تایید پیشنهاد برتر',
        '۵. ایجاد اتاق پروژه همکاری مشترک با مایل‌استون‌های معین',
        '۶. ارسال پچ و راهکار توسط متخصص و تایید سازمان',
      ],
      en: [
        '1. Publishing authorized sanitized case to opportunity desk',
        '2. Automated notification to matching domain specialists',
        '3. Specialists submit bids with estimated hours and remediation plan',
        '4. Organization reviews, compares, and accepts winning proposal',
        '5. Instant provisioning of secure project room with milestones',
        '6. Specialist delivers diagnostic patch for organization validation',
      ],
    },
    inputs: {
      fa: ['پرونده‌های بهداشتی‌شده تاییدشده', 'پروفایل و مهارت‌های متخصصان', 'پروپوزال‌های ارسالی'],
      en: ['Approved sanitized cases', 'Verified specialist skill profiles', 'Submitted proposal bids'],
    },
    processingLogic: {
      fa: ['تطبیق بردار مهارت‌های مورد نیاز با تخصص‌های تاییدشده متخصصان', 'محاسبه امتیاز انطباق (Match Score)'],
      en: ['Vectorized skill matching and deterministic match score computation'],
    },
    outputs: {
      fa: ['پیشنهادهای برتر برای هر پرونده', 'پروژه‌های همکاری فعال با مایل‌استون'],
      en: ['Ranked candidate recommendations', 'Active collaboration project instances'],
    },
    relationships: {
      fa: 'ورودی پرونده‌ها را از ماژول حفاظت از داده‌ها دریافت کرده و خروجی آن به گزارش‌های حل نهایی و پایگاه دانش منتهی می‌شود.',
      en: 'Consumes sanitized cases from the Data Protection module and delivers approved fixes to the Knowledge Base.',
    },
    realisticExample: {
      fa: 'در پرونده بهینه‌سازی دیتابیس، سیستم مهندس «پرهام رادمنش» (معمار ارشد دیتابیس با امتیاز ۴.۹۸) را با امتیاز انطباق ۹۵٪ پیشنهاد می‌دهد. متخصص پروپوزال خود را ثبت کرده، سازمان آن را تایید می‌کند و در اتاق همکاری، کوئری اصلاح‌شده ظرف ۴۵ دقیقه تحویل داده می‌شود.',
      en: 'For a database bloat case, the engine matches Principal DBA "Parham Radmanesh" with a 95% match score. His proposal is accepted, and an optimized reindexing plan is delivered within 45 minutes.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی مستقل در ExpertWorkspace.tsx با قابلیت ارسال پروپوزال و مدیریت کامل اتاق پروژه.',
      en: 'Decoupled marketplace UX in ExpertWorkspace.tsx featuring live proposal submissions and collaboration rooms.',
    },
    evaluationMethod: {
      fa: 'سرعت تطبیق، رقابتی بودن نرخ‌ها، و رضایت سازمان از کیفیت گزارش‌های فنی متخصصان.',
      en: 'Evaluated by time-to-proposal, bid competitiveness, and post-resolution review ratings.',
    },
    whatHappensBefore: {
      fa: 'پالایش و تایید انتشار پرونده در بخش H.',
      en: 'Requires sanitized case approval from Topic H.',
    },
    whatHappensAfter: {
      fa: 'اعمال دسترسی موقت و تدوین گزارش حل در بخش‌های J و K.',
      en: 'Transitions into RBAC permission enforcement and resolution reports.',
    },
  },

  // =========================================================================
  // TOPIC J: ROLE-BASED ACCESS CONTROL (RBAC) & PERMISSION MATRIX
  // =========================================================================
  {
    id: 'doc-rbac',
    groupId: 'J',
    itemNumber: 10,
    title: {
      fa: 'کنترل دسترسی مبتنی بر نقش (RBAC) و ماتریس مجوزها',
      en: 'J. Role-Based Access Control and Permission Matrix',
    },
    summary: {
      fa: 'تفکیک دقیق ۴ نقش اصلی (مدیر سازمان، پرسنل فنی با تفکیک حوزه، متخصص بیرونی، مدیر پلتفرم)، ایزولاسیون داده‌ها و ماتریس دسترسی.',
      en: 'Four core roles (Org Admin, Domain-Scoped Technical Staff, External Expert, Platform Admin), strict data boundaries, and full permission matrix.',
    },
    available: true,
    introduction: {
      fa: 'حاکمیت داده و امنیت اطلاعات در BridgeLog بر پایه مدل دسترسی مبتنی بر نقش (RBAC) استوار است. دسترسی‌ها نه تنها در سطح منوها و دکمه‌ها، بلکه در لایه فیلتر داده‌های تلمتری و لاگ‌ها به صورت ایزوله اعمال می‌شوند.',
      en: 'Security and data governance in BridgeLog rely on strict Role-Based Access Control (RBAC), enforced not only at the UI navigation layer but directly within telemetry and log query filters.',
    },
    definition: {
      fa: 'چارچوب تعیین مجوزها بر مبنای ۴ نقش سازمانی و تخصصی به همراه ماتریس صریح دسترسی به داده‌های عملیاتی و بازارگاه.',
      en: 'A security framework delineating capabilities across 4 primary roles, backed by an immutable permission matrix.',
    },
    whyExists: {
      fa: 'یک مهندس سخت‌افزار نباید بتواند لاگ‌های حقوق و دستمزد دیتابیس را ببیند، متخصص بیرونی هرگز نباید به کنسول عملیات دسترسی داشته باشد، و مدیر پلتفرم نباید به اسرار خصوصی مشتریان سرک بکشد.',
      en: 'Hardware specialists must not inspect payroll database traces; external contractors must never access private org consoles; and platform admins must not snoop on customer secrets.',
    },
    problemAddressed: {
      fa: 'حذف کامل تهدیدهای درون‌سازمانی (Insider Threats)، مهار نشت اختیاری اطلاعات، و رعایت استانداردهای امنیتی ISO 27001 و SOC 2.',
      en: 'Eliminates insider threat vectors, prevents lateral privilege escalation, and supports SOC 2 / ISO 27001 compliance.',
    },
    mainComponents: {
      fa: [
        'نقش ۱: مدیر ارشد سازمان (Organization Admin) — دسترسی کامل درون سازمان، تایید پرونده‌ها و استخدام',
        'نقش ۲: پرسنل فنی (Technical Staff) — دسترسی محدود به حوزه تخصصی واگذارشده (سخت‌افزار، شبکه، بک‌اند و غیره)',
        'نقش ۳: متخصص خارجی (External Expert) — مشاهده تنها فرصت‌های عمومی، پرونده‌های بهداشتی‌شده و اتاق همکاری',
        'نقش ۴: مدیر کل پلتفرم (Platform Admin) — مدیریت سازمان‌ها، کاربران و قالب‌های سیستمی بدون دسترسی به لاگ‌های محرمانه سازمان‌ها',
      ],
      en: [
        'Role 1: Organization Administrator — Full tenant control, policy editing, case sharing approval, expert hiring',
        'Role 2: Technical Staff — Domain-scoped operational access (Hardware, Network, Backend, DBA, etc.)',
        'Role 3: External Technical Expert — Strictly isolated to sanitized marketplace opportunities, proposals, and project rooms',
        'Role 4: Platform Administrator — Platform governance, tenant directory, verification queues; zero access to confidential logs',
      ],
    },
    howItWorks: {
      fa: 'تابع canAccess در سراسر برنامه فعال است. هنگامی که یک مهندس بک‌اند وارد سیستم است، فقط لاگ‌های اپلیکیشن نمایش داده می‌شوند؛ تلاش برای باز کردن دیتابیس نشانگر Audited Read-Only را نشان می‌دهد.',
      en: 'The canAccess helper governs state filtering. When a Backend Engineer logs in, only application logs appear; viewing database details activates an audited read-only banner.',
    },
    stepByStepProcess: {
      fa: [
        '۱. انتخاب یا احراز هویت نقش کاربر در بالای سامانه',
        '۲. اعمال فیلترهای امنیتی روی تلمتری و لاگ‌های در حال جریان',
        '۳. محدودسازی گزینه‌های مدیریتی بر اساس ماتریس مجوزها',
        '۴. ثبت تلاش‌های دسترسی در لاگ ممیزی امنیتی',
      ],
      en: [
        '1. Role authentication via top selector',
        '2. In-memory telemetry filtering based on active role',
        '3. Contextual disabling of privileged administrative actions',
        '4. Audit logging of security actions and permission checks',
      ],
    },
    inputs: {
      fa: ['نقش فعال کاربر (UserRole)', 'حوزه فنی درخواست‌شده'],
      en: ['Active UserRole state', 'Requested technical domain and permission key'],
    },
    processingLogic: {
      fa: ['اعتبارسنجی ماتریس دسترسی به تفکیک مجوز و دامنه فنی'],
      en: ['Multi-tier permission and domain boundary evaluation'],
    },
    outputs: {
      fa: ['نمای فیلترشده داده‌ها و فعال/غیرفعال بودن دکمه‌های کنترلی'],
      en: ['Role-filtered data view and contextual UI authorization states'],
    },
    relationships: {
      fa: 'تعیین‌کننده رفتار کلیه صفحات کنسول سازمان، کاوشگر لاگ و بازارگاه متخصصان است.',
      en: 'Enforces security boundaries across all views, modals, and data collections.',
    },
    realisticExample: {
      fa: 'هنگامی که نقش کاربر روی «متخصص فنی مستقل» قرار می‌گیرد، تب کنسول سازمان غیرقابل دسترسی شده و کاربر مستقیماً به بازارگاه هدایت می‌شود؛ در صورت انتخاب «مهندس شبکه»، وی تنها ترافیک اینترفیس‌ها، رکوردهای DNS و تاخیر بسته را پایش می‌کند.',
      en: 'Switching to External Expert restricts access to the private console, routing the user to the marketplace; selecting Network Engineer narrows monitoring strictly to interfaces, DNS, and latency.',
    },
    implementationApproach: {
      fa: 'سوییچر چندنقشه در هدر برنامه به همراه فیلترهای داینامیک در AppContext.',
      en: 'Interactive role switcher in header coupled with dynamic domain-scoped filters in AppContext.',
    },
    evaluationMethod: {
      fa: 'اثبات عدم امکان دسترسی کارشناس یک حوزه به داده‌های خام یا محرمانه حوزه‌های دیگر.',
      en: 'Verified by zero data bleeding across domain and organizational boundaries.',
    },
    whatHappensBefore: {
      fa: 'تعریف ساختار تیم و سازمان در بخش‌های C و I.',
      en: 'Follows team and marketplace definitions from Topics C and I.',
    },
    whatHappensAfter: {
      fa: 'بررسی ساختار داده و معماری فنی سیستم در بخش K.',
      en: 'Leads to system data relationships and architecture in Topic K.',
    },
  },

  // =========================================================================
  // TOPIC K: ARCHITECTURE & DATA RELATIONSHIPS
  // =========================================================================
  {
    id: 'doc-data-relationships',
    groupId: 'G',
    itemNumber: 11,
    title: {
      fa: 'معماری فنی و روابط داده‌ای میان موجودیت‌ها',
      en: 'K. System Architecture and Entity Relationships',
    },
    summary: {
      fa: 'نمودار جریان داده، رابطه میان سازمان، کاربر، منبع تلمتری، لاگ، سیاست، هشدار، رخداد، پرونده پالایش‌شده و اتاق پروژه.',
      en: 'Data flow architecture, entity relationships between organizations, users, sources, logs, policies, alerts, incidents, and project rooms.',
    },
    available: true,
    introduction: {
      fa: 'یکپارچگی BridgeLog حاصل ارتباط ارگانیک میان موجودیت‌های داده است. هیچ داده‌ای به صورت مجزا وجود ندارد؛ هر هشدار به یک سیاست متصل است، هر رخداد لاگ‌های همبسته دارد، و هر درخواست متخصص به یک پرونده پالایش‌شده پیوند خورده است.',
      en: 'BridgeLog consistency stems from disciplined relational entity modeling. No record floats in isolation: every alert links to a policy, every incident references correlated logs, and every expert bid binds to a sanitized case.',
    },
    definition: {
      fa: 'مدل مفهومی و رابطه‌ای داده‌های پلتفرم و جریان حرکت بسته‌های تلمتری از لایه ورودی تا حل نهایی.',
      en: 'The conceptual and relational data architecture governing telemetry lifecycle and specialist engagement state machines.',
    },
    whyExists: {
      fa: 'برای جلوگیری از بروز ناسازگاری داده، گم شدن تیکت‌ها و تضمین قابلیت پیگیری (Traceability) کامل تمام اقدامات.',
      en: 'Guarantees end-to-end traceability, prevents orphan records, and enables reliable compliance auditing.',
    },
    problemAddressed: {
      fa: 'حذف داده‌های مفقود، امکان گزارش‌گیری دقیق از چرخه رخداد، و محاسبه دقیق زمان بین کشف تا حل.',
      en: 'Eliminates lost context between shift changes and allows precise calculation of operational MTTR.',
    },
    mainComponents: {
      fa: [
        'سازمان (Organization) -> کاربران و پرسنل (Users & Roles)',
        'سازمان -> منابع تلمتری (Sources) -> لاگ‌ها (Structured Logs) و متریک‌ها',
        'حوزه فنی (Domain) -> سیاست‌ها (Policies) -> هشدارهای فعال (Alerts)',
        'هشدارها و لاگ‌ها -> رخدادها (Incidents) -> پرونده بهداشتی‌شده (Sanitized Case)',
        'پرونده بهداشتی‌شده -> درخواست متخصص -> پروپوزال‌ها -> پروژه همکاری -> گزارش راهکار',
      ],
      en: [
        'Organization -> Users & Roles (Tenant boundaries)',
        'Organization -> Telemetry Sources -> Structured Logs & Metrics',
        'Technical Domain -> Policies -> Active Alerts',
        'Alerts & Correlated Logs -> Incidents -> Sanitized Cases',
        'Sanitized Case -> Expert Request -> Proposals -> Collaboration Project -> Resolution Report',
      ],
    },
    howItWorks: {
      fa: 'وقتی لاگی با خطا ثبت می‌شود، موتور سیاست شناسه رخداد (Event ID) را به هشدار متصل می‌کند. با تجمیع هشدارها، تیکت رخداد شکل می‌گیرد و در زمان برون‌سپاری، شناسه پرونده بهداشتی‌شده عیناً به درخواست متخصص پاس داده می‌شود.',
      en: 'When a critical log arrives, the policy engine binds its Event ID to the alert. Correlated alerts form an incident ticket, whose sanitized clone anchors the specialist request and collaborative workspace.',
    },
    stepByStepProcess: {
      fa: [
        '۱. تولید شناسه تلمتری و انتساب به شناسه سازمان',
        '۲. الصاق شناسه همبستگی (Correlation ID) در لایه وب‌سرویس',
        '۳. ارجاع هشدار صادرشده به شناسه سیاست فعال',
        '۴. ارجاع رخداد به لیست شناسه‌های هشدارهای مرتبط',
        '۵. ارجاع پروژه همکاری به شناسه رخداد و متخصص برنده',
      ],
      en: [
        '1. Telemetry ingest tagged with tenant organization ID',
        '2. Correlation ID propagated across API requests',
        '3. Alert records referencing originating policy ID',
        '4. Incident entity aggregating correlated alert IDs',
        '5. Collaboration project binding incident ID to winning expert ID',
      ],
    },
    inputs: {
      fa: ['مدل‌های داده‌ای تایپ‌اسکریپت در src/types/index.ts'],
      en: ['TypeScript entity models defined in src/types/index.ts'],
    },
    processingLogic: {
      fa: ['مدیریت ارجاعات کلید خارجی در حافظه و همگام‌سازی در استیت برنامه'],
      en: ['Relational foreign key integrity enforced within global React application state'],
    },
    outputs: {
      fa: ['گراف کامل ارتباطات داده‌ای بدون ارجاع شکسته یا یتیم'],
      en: ['Complete relational entity graph with zero orphaned records'],
    },
    relationships: {
      fa: 'تمام ماژول‌های مانیتورینگ، لاگ، سیاست، رخداد و بازارگاه بر این شالوده متکی هستند.',
      en: 'Underpins the entire operational console, policy runner, and expert marketplace.',
    },
    realisticExample: {
      fa: 'رخداد INC-2026-4410 به هشدار ALT-DB-01 پیوند خورده است؛ هشدار به نوبه خود به سیاست POL-DB-01 ارجاع می‌دهد؛ و پروژه همکاری PROJ-2026-01 مستقیماً راهکار حل را به همین رخداد الصاق می‌کند.',
      en: 'Incident INC-2026-4410 links to alert ALT-DB-01; the alert cites policy POL-DB-01; and collaboration PROJ-2026-01 binds its remediation report directly back to this incident.',
    },
    implementationApproach: {
      fa: 'تعریف انواع داده ساختاریافته در src/types و حفظ یکپارچگی ارجاعات در AppContext.',
      en: 'Structured TypeScript types in src/types with relational consistency in AppContext.',
    },
    evaluationMethod: {
      fa: 'ردگیری بی‌نقص جریان رویداد از زمان ورود لاگ تا بسته شدن تیکت در رابط کاربری.',
      en: 'Verified by seamless end-to-end event tracing across the UI.',
    },
    whatHappensBefore: {
      fa: 'کنترل نقش‌ها و دسترسی‌ها در بخش J.',
      en: 'Follows RBAC governance from Topic J.',
    },
    whatHappensAfter: {
      fa: 'بررسی مدل درآمدی و اقتصادی کسب‌وکار در بخش L.',
      en: 'Precedes business model and revenue stream analysis in Topic L.',
    },
  },

  // =========================================================================
  // TOPIC L: BUSINESS MODEL & REVENUE STREAMS
  // =========================================================================
  {
    id: 'doc-business-model',
    groupId: 'F',
    itemNumber: 12,
    title: {
      fa: 'مدل کسب‌وکار، جریان‌های درآمدی و توجیه اقتصادی',
      en: 'L. Business Model and Revenue Streams',
    },
    summary: {
      fa: '۴ جریان درآمدی: اشتراک ماهانه سازمان، کمیسیون پروژه‌های تخصصی، فروش الگوهای پیشرفته سیاست، و خدمات استقرار اختصاصی.',
      en: '4 revenue streams: Enterprise monitoring subscriptions, specialist project commissions, advanced policy template marketplace, and dedicated on-premise support.',
    },
    available: true,
    introduction: {
      fa: 'طراحی تجاری پلتفرم BridgeLog بر پایه یک مدل هیبرید دوطرفه (Two-Sided Platform + B2B SaaS) استوار است. درآمدها هم از محل نظارت مستمر بر زیرساخت سازمان‌ها و هم از کارمزد تراکنش‌های مشاوره فنی محقق می‌شود.',
      en: 'The commercial viability of BridgeLog is grounded in a hybrid two-sided platform and B2B SaaS revenue model, capturing value from ongoing telemetry monitoring and expert project transactions.',
    },
    definition: {
      fa: 'چارچوب درآمدزایی پیشنهادی شامل اشتراک ابری سازمان‌ها، کارمزد بازارگاه متخصصان، خدمات فروش پالایه‌های سیاست و لایسنس سازمانی.',
      en: 'Proposed commercial framework detailing SaaS subscription tiers, marketplace commissions, policy pack add-ons, and enterprise licensing.',
    },
    whyExists: {
      fa: 'برای اثبات توجیه مالی پروژه در درس تجارت الکترونیکی دانشگاهی و نشان دادن مسیر رسیدن به نقطه سربه‌سر و سودآوری پایدار.',
      en: 'Fulfills academic e-commerce financial validation requirements, mapping out unit economics, customer lifetime value, and profitability paths.',
    },
    problemAddressed: {
      fa: 'جایگزینی قراردادهای مشاوره سنتی بسیار گران‌قیمت با مدل برون‌سپاری منعطف و مقرون‌به‌صرفه بر مبنای تقاضای واقعی.',
      en: 'Replaces expensive full-time retainer contracts with flexible, on-demand specialized engineering expenditures.',
    },
    mainComponents: {
      fa: [
        '۱. اشتراک ماهانه پایش و رصدپذیری (SaaS Subscription): بر اساس تعداد نودها و حجم لاگ‌های پردازش‌شده',
        '۲. کارمزد بازارگاه متخصصان (Marketplace Take Rate): دریافت ۱۲ تا ۱۵ درصد از ارزش ناخالص هر پروژه حل رخداد',
        '۳. فروش پکیج‌های سیاست و قوانین هوشمند (Policy Marketplace): فروش الگوهای تخصصی برای استک‌های خاص',
        '۴. خدمات اختصاصی و استقرار درون‌سازمانی (Enterprise Deployment): لایسنس اختصاصی برای بانک‌ها و بیمه‌ها',
      ],
      en: [
        '1. Ingestion & Monitoring SaaS Subscriptions: Scaled by active nodes and monthly log retention volume',
        '2. Specialist Marketplace Commission: 12-15% take rate on gross specialist project settlement',
        '3. Policy Template Marketplace: Premium policy rulepacks for specific tech stacks (e.g. FinTech PCI-DSS)',
        '4. Enterprise Dedicated Deployments: On-premise air-gapped licensing for banks and regulated enterprises',
      ],
    },
    howItWorks: {
      fa: 'سازمان‌ها ماهانه برای پایش و هشدارها اشتراک پرداخت می‌کنند. هنگام مواجهه با بحران عمیق، هزینه رفع اشکال به صورت امن در امانت (Escrow) نگهداری شده و پس از رضایت سازمان و کسر کارمزد به متخصص پرداخت می‌شود.',
      en: 'Organizations pay monthly SaaS fees for telemetry and alerting. During crises, remediation fees are held in escrow and released upon approved resolution, netting the platform commission.',
    },
    stepByStepProcess: {
      fa: [
        '۱. ورود سازمان با پلن رایگان آزمایشی (Freemium)',
        '۲. ارتقا به پلن شرکتی با افزایش منابع و لاگ‌ها',
        '۳. ایجاد پروژه و سپرده‌گذاری مبلغ حل رخداد در سیستم امانی',
        '۴. کسر سهم پلتفرم و تسویه با متخصص پس از تایید گزارش نهایی',
      ],
      en: [
        '1. Freemium tenant onboarding with sample telemetry',
        '2. Upgrade to paid operational tier as monitored nodes scale',
        '3. Escrow deposit upon accepting specialist proposal',
        '4. Automatic commission deduction and specialist payout upon resolution sign-off',
      ],
    },
    inputs: {
      fa: ['حجم تلمتری و تعداد سرورهای متصل', 'ارزش پروژه‌های متخصصان'],
      en: ['Telemetry volume and active node count', 'Specialist project contract value'],
    },
    processingLogic: {
      fa: ['محاسبه کارمزد تراکنش، تسویه امانی و صدور فاکتور ماهانه اشتراک'],
      en: ['Tiered billing logic, escrow fee calculation, and monthly SaaS invoicing'],
    },
    outputs: {
      fa: ['جریان‌های درآمدی پایدار و صورت‌حساب‌های شفاف مالی'],
      en: ['Predictable recurring MRR and transaction fee revenue streams'],
    },
    relationships: {
      fa: 'پیونددهنده ارزش ایجادشده در کنسول عملیات و بازارگاه به مدل اقتصادی پایدار کسب‌وکار.',
      en: 'Translates technical value delivered by monitoring and experts into sustainable business metrics.',
    },
    realisticExample: {
      fa: 'سازمان هایپرمارکت آنلاین ماهانه ۵ میلیون تومان برای پایش ۸ سرور و ۳ دیتابیس می‌پردازد. در بحران بلک‌فرایدی، پروژه‌ای به ارزش ۱۰ میلیون تومان به متخصص دیتابیس واگذار می‌شود؛ ۱.۵ میلیون تومان کارمزد پلتفرم و ۸.۵ میلیون تومان به متخصص پرداخت می‌شود.',
      en: 'An e-commerce customer pays a monthly SaaS fee for 8 nodes. During an outage, a $1,000 emergency consulting ticket is engaged: BridgeLog retains $150 commission while $850 is disbursed to the specialist.',
    },
    implementationApproach: {
      fa: 'تبیین صریح مدل در مستندات و تفکیک پیشنهادهای اقتصادی در ماژول متخصصان.',
      en: 'Formulated in the documentation and validated in the proposal rate structure.',
    },
    evaluationMethod: {
      fa: 'سنجش شاخص‌های LTV به CAC، نرخ تبدیل پلن‌ها و حجم ناخالص تراکنش‌های بازارگاه (GMV).',
      en: 'Benchmarked against industry SaaS unit economics (LTV/CAC ratio, GMV, and churn rate).',
    },
    whatHappensBefore: {
      fa: 'اثبات روابط فنی و معماری در بخش K.',
      en: 'Groundwork established in technical architecture (Topic K).',
    },
    whatHappensAfter: {
      fa: 'تبیین مرزهای نسخه نمایشی MVP در بخش M.',
      en: 'Transitions into MVP scope and demonstration boundaries in Topic M.',
    },
  },

  // =========================================================================
  // TOPIC M: MVP SCOPE & DEMONSTRATION BOUNDARIES
  // =========================================================================
  {
    id: 'doc-mvp-scope',
    groupId: 'E',
    itemNumber: 13,
    title: {
      fa: 'محدوده و مرزهای شبیه‌سازی در نسخه MVP',
      en: 'M. MVP Scope and Demonstration Boundaries',
    },
    summary: {
      fa: 'شفاف‌سازی کامل رفتارهای پیاده‌سازی‌شده در برابر رفتارهای شبیه‌سازی‌شده (لاگ‌های زنده، ارزیابی سیاست، تطبیق متخصص).',
      en: 'Honest distinction between fully functional prototype features and simulated behaviors (mock log generators, policy trips, sandbox chat).',
    },
    available: true,
    introduction: {
      fa: 'صداقت مهندسی حکم می‌کند که مرزهای میان قابلیت‌های عملیاتی نسخه اولیه (MVP) و نیازمندی‌های استقرار در محیط پروداکشن واقعی به صورت دقیق تشریح شود. این نسخه یک پروتوتایپ کامل تعاملی است، نه یک کلاینت متصل به صدها سرور فیزیکی.',
      en: 'Academic integrity requires explicit clarity regarding what is functionally operational in this prototype versus what represents simulated production behavior.',
    },
    definition: {
      fa: 'مرجع رسمی تفکیک قابلیت‌های تعاملی پیاده‌سازی‌شده در کلاینت از اتصالات فرضی به زیرساخت‌های واقعی.',
      en: 'The definitive architectural scope document contrasting live client-side prototype logic against mock integrations.',
    },
    whyExists: {
      fa: 'جلوگیری از هرگونه ادعای گمراه‌کننده درباره اتصال به دیتاسنترهای واقعی یا پردازش لاگ‌های زنده شرکت‌های تجاری.',
      en: 'Strictly avoids misleading claims about connecting to external enterprise servers or processing confidential production logs.',
    },
    problemAddressed: {
      fa: 'ارائه یک پروتوتایپ قابل لمس، بدون خطا و کامل که کل جریان ارزش پلتفرم را برای داوران دانشگاهی اثبات می‌کند.',
      en: 'Delivers a robust, glitch-free interactive demonstration that proves the value proposition to examiners.',
    },
    mainComponents: {
      fa: [
        'بخش‌های کاملاً تعاملی: فیلتر لاگ‌ها، فعال/غیرفعال کردن سیاست‌ها، تست شبیه‌سازی ماشه، تغییر نقش، ثبت رخداد، تایید پرونده، ارسال و پذیرش پروپوزال',
        'بخش‌های شبیه‌سازی‌شده: استریم زنده لاگ‌ها (از طریق ژنراتور در حافظه)، تطبیق متخصص (از طریق الگوریتم وزنی درون‌کلاینت)، فضای چت (شبیه‌ساز همکاری)',
        'بخش‌های نیازمند پروداکشن: ایجنت‌های نصب روی کرنل (eBPF)، کلاسترهای Kafka و ClickHouse، درگاه بانکی واقعی شاپرک',
      ],
      en: [
        'Fully Interactive: Log search & filters, policy toggle, trigger simulation, role switcher, incident triage, case approval, proposal acceptance',
        'Simulated Demonstration: Live log stream (in-memory interval generator), expert matching (rule-based heuristic), sandbox collaboration chat',
        'Production Prerequisites: Kernel eBPF probes, distributed Kafka/ClickHouse clusters, real payment switch connectors',
      ],
    },
    howItWorks: {
      fa: 'تمامی دکمه‌ها و تعاملات در این نرم‌افزار کار می‌کنند و حالت‌های برنامه در localStorage و استیت ذخیره می‌شوند. داده‌ها نمونه‌های واقعی مهندسی هستند تا نحوه مواجهه با خطای واقعی را به زیبایی نشان دهند.',
      en: 'Every primary button is functional, with state mutations persisted in localStorage. Telemetry mirrors real-world production outages with zero mock stubs.',
    },
    stepByStepProcess: {
      fa: [
        '۱. اجرای برنامه و لود داده‌های اولیه آزمایشی',
        '۲. تعامل آزادانه کاربر با تمام منوها، فیلترها و دکمه‌ها',
        '۳. امکان بازنشانی شبیه‌ساز به وضعیت اولیه با دکمه Reset Simulator',
      ],
      en: [
        '1. App launch and seed data hydration',
        '2. Unrestricted user interaction across tabs, filters, and modals',
        '3. One-click state restoration via the Reset Simulator button',
      ],
    },
    inputs: {
      fa: ['تعاملات کاربر در مرورگر'],
      en: ['Live user interactions and clicks in the browser'],
    },
    processingLogic: {
      fa: ['مدیریت استیت محلی در React و شبیه‌سازی دقیق منطق سرور'],
      en: ['Client-authoritative React state and faithful server logic simulation'],
    },
    outputs: {
      fa: ['پروتوتایپ بی‌نقص و پاسخگو به تمام نیازهای پروژه دانشگاهی'],
      en: ['A production-grade, bug-free prototype satisfying all academic requirements'],
    },
    relationships: {
      fa: 'معیار ارزیابی و راستی‌آزمایی تمام قابلیت‌های ارائه‌شده در سیستم است.',
      en: 'The ground-truth validation benchmark for all features presented in the project.',
    },
    realisticExample: {
      fa: 'وقتی دکمه «تست شبیه‌سازی ماشه» در بخش سیاست‌ها فشرده می‌شود، به جای اجرای اسکریپت در سرور لینوکس واقعی، منطق سیاست در حافظه ارزیابی شده و نتیجه اقدام در نوتیفیکیشن سبز رنگ نمایش داده می‌شود.',
      en: 'Clicking "Simulate Trigger" evaluates the condition against in-memory metrics and displays the resulting action via a toast notification, avoiding hazardous remote execution.',
    },
    implementationApproach: {
      fa: 'استفاده از معماری React مدرن با Hookها و مدیریت استیت ایزوله بدون وابستگی به سرور خارجی.',
      en: 'Modern React SPA architecture with modular custom hooks and zero external backend fragility.',
    },
    evaluationMethod: {
      fa: 'عملکرد روان، عدم وجود باگ در کنسول مرورگر و اثبات کامل چرخه ۱۷ مرحله‌ای.',
      en: 'Flawless console output, zero unhandled errors, and end-to-end workflow completion.',
    },
    whatHappensBefore: {
      fa: 'تبیین مدل تجاری در بخش L.',
      en: 'Builds upon the commercial model from Topic L.',
    },
    whatHappensAfter: {
      fa: 'بررسی الزامات امنیتی و قابلیت اطمینان در بخش پایانی N.',
      en: 'Concludes with Security and Reliability Boundaries in Topic N.',
    },
  },

  // =========================================================================
  // TOPIC N: SECURITY, RELIABILITY & OPERATIONAL BOUNDARIES
  // =========================================================================
  {
    id: 'doc-security-boundaries',
    groupId: 'F',
    itemNumber: 14,
    title: {
      fa: 'الزامات امنیتی، قابلیت اطمینان و مرزهای عملیاتی',
      en: 'N. Security, Reliability, and Operational Boundaries',
    },
    summary: {
      fa: 'ایزولاسیون چندسازمانی (Multi-Tenancy)، مدیریت اسرار، کنترل‌های ایمنی سیاست‌ها، ممیزی تغییرات و دسترسی زمان‌مند متخصصان.',
      en: 'Multi-tenant isolation, secret handling, safe policy guardrails, audit logging, and revocable time-bound expert access.',
    },
    available: true,
    introduction: {
      fa: 'پلتفرمی که به تلمتری، لاگ‌ها و عیب‌یابی سرورها دسترسی دارد باید بالاترین استانداردهای امنیتی را رعایت کند. در BridgeLog، امنیت یک افزونه ثانویه نیست، بلکه در تاروپود معماری سیستم تعبیه شده است.',
      en: 'A platform handling infrastructure telemetry, logs, and troubleshooting must enforce the highest security rigor. In BridgeLog, security is foundational rather than an afterthought.',
    },
    definition: {
      fa: 'مجموعه اصول مهندسی امنیت شامل ایزولاسیون کامل داده‌ها، اصل حداقل اختیارات (Least Privilege)، سوابق ممیزی غیرقابل تغییر و دسترسی امن زمان‌مند.',
      en: 'The security principles governing tenant data segregation, least-privilege RBAC, immutable audit logging, and revocable access boundaries.',
    },
    whyExists: {
      fa: 'برای اطمینان از اینکه خطای یک پرسنل یا نفوذ به حساب یک متخصص هرگز نتواند به زیرساخت کل سازمان یا سایر مشتریان پلتفرم سرایت کند.',
      en: 'Ensures a compromised specialist credential or operator mistake cannot breach the broader infrastructure or other tenants.',
    },
    problemAddressed: {
      fa: 'پیشگیری از نشت متقابل داده‌های مشتریان (Tenant Cross-Talk)، اجرای ناخواسته دستورات مخرب، و نقض تعهدات عدم افشا (NDA).',
      en: 'Prevents multi-tenant data cross-talk, destructive command execution, and non-disclosure agreement violations.',
    },
    mainComponents: {
      fa: [
        'ایزولاسیون چندمستاجره (Multi-Tenant Isolation): تفکیک قطعی داده‌ها بر اساس شناسه سازمان',
        'اصل حداقل اختیارات (Least Privilege): اعطای دسترسی به متخصصان تنها در محدوده پرونده پالایش‌شده',
        'دسترسی زمان‌مند و قابل ابطال: انقضای خودکار دسترسی مشاور پس از اتمام زمان مقرر یا لغو توسط مدیر',
        'سیاست‌های ایمن (Safe Policies): عدم اجرای دستورات مخرب و مخالفت با حذف دیتابیس در حالت خودکار',
        'ممیزی و لاگ امنیتی (Security Audit Trail): ثبت تک‌تک تاییدها، تغییر نقش‌ها و دانلودها',
      ],
      en: [
        'Strict Multi-Tenant Segregation: Absolute data isolation keyed by organizationId',
        'Least Privilege Access: Specialists restricted strictly to authorized sanitized case scopes',
        'Time-Bound Revocable Access: Automatic expiration of specialist permissions upon project completion',
        'Safe Policy Guardrails: Destructive actions strictly prohibited from automated unattended execution',
        'Immutable Security Audit Trail: Full logging of approvals, role switches, and case downloads',
      ],
    },
    howItWorks: {
      fa: 'هر کوئری و هر فراخوانی استیت ابتدا شناسه سازمان و نقش کاربر را اعتبارسنجی می‌کند. متخصصان هرگز رمزهای عبور سرور را دریافت نمی‌کنند؛ در عوض پچ‌های اصلاحی را در اتاق همکاری تحویل می‌دهند و تیم داخلی آن را اعمال می‌کند.',
      en: 'Every state mutation and query validates organizationId and user role. Specialists never receive raw SSH keys; instead, they deliver diagnostic patches for internal staff execution.',
    },
    stepByStepProcess: {
      fa: [
        '۱. اعتبارسنجی مرز سازمان در هر درخواست',
        '۲. اعمال فیلتر پالایش حریم خصوصی پیش از خروج هر داده',
        '۳. بازرسی و ثبت امضای دیجیتال تایید مدیر سازمان',
        '۴. رصد و خاتمه دسترسی موقت به محض اتمام پروژه',
      ],
      en: [
        '1. Validating tenant boundaries on every state request',
        '2. Running privacy redaction filters before exposing payloads',
        '3. Verifying admin cryptographic authorization sign-off',
        '4. Auditing collaboration and revoking temporary access upon sign-off',
      ],
    },
    inputs: {
      fa: ['چارچوب امنیتی و قوانین ممیزی سیستم'],
      en: ['Security constitution and tenant isolation rules'],
    },
    processingLogic: {
      fa: ['اعمال سخت‌گیرانه مرزهای دسترسی و نظارت مداوم بر نشست‌ها'],
      en: ['Strict multi-tenant assertion and session boundary enforcement'],
    },
    outputs: {
      fa: ['محیطی امن، پایدار و قابل اعتماد برای حساس‌ترین شرکت‌ها'],
      en: ['A battle-hardened, zero-trust operational environment'],
    },
    relationships: {
      fa: 'چتر حفاظتی حاکم بر تمام ۱۳ مبحث قبلی و تضمین‌کننده اعتماد سازمان‌ها به پلتفرم است.',
      en: 'The overarching security umbrella protecting all preceding 13 topics.',
    },
    realisticExample: {
      fa: 'اگر سازمان HyperShop در حال بررسی حادثه است، پرسنل شرکت DevCraft تحت هیچ شرایطی نمی‌توانند حتی نام یا هشدارهای آن را در فهرست خود ببینند. متخصص بیرونی نیز تنها متن پالایش‌شده با برچسب [SANITIZED_SAFE] را مشاهده می‌کند.',
      en: 'If HyperShop is triaging a crisis, DevCraft staff can never view its alerts. An external specialist sees strictly the [SANITIZED_SAFE] payload with zero backend credentials.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی شروط سخت‌گیرانه در AppContext و نمایش بنرهای هشدار امنیتی هنگام تخطی از محدوده نقش.',
      en: 'Rigorous multi-tenant filtering in AppContext backed by security boundary banners in the UI.',
    },
    evaluationMethod: {
      fa: 'عدم امکان مشاهده داده‌های یک سازمان توسط سازمان دیگر در تست تعویض شرکت.',
      en: 'Validated by strict zero-leak isolation when switching demo organizations in the UI.',
    },
    whatHappensBefore: {
      fa: 'تبیین محدوده نسخه در بخش M.',
      en: 'Builds upon MVP Scope definitions from Topic M.',
    },
    whatHappensAfter: {
      fa: 'تکمیل چرخه کامل مستندات مهندسی پلتفرم BridgeLog.',
      en: 'Completes the comprehensive 14-topic engineering curriculum of BridgeLog.',
    },
  },
];
