/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DocumentationDetailItem } from '../types';

export const DETAILED_DOCUMENTATION_ITEMS: DocumentationDetailItem[] = [
  // 1. Project Introduction and Product Definition
  {
    id: 'doc-1-intro',
    groupId: 'A',
    itemNumber: 1,
    title: {
      fa: 'معرفی پروژه و تعریف محصول (Project Introduction & Definition)',
      en: 'Project Introduction & Product Definition',
    },
    summary: {
      fa: 'پلتفرم یکپارچه عملیات امن IT و اتصال به شبکه متخصصان برای پایش رویدادها، اجرای سیاست‌های خودکار و حل تخصصی رخدادها.',
      en: 'Integrated secure IT operations and expert collaboration platform for telemetry monitoring, policy automation, and specialized incident resolution.',
    },
    available: true,
    introduction: {
      fa: 'پلتفرم LogBridge سامانه‌ای نوآورانه است که شکاف میان رصد رویدادهای سیستمی و حل بحران‌های فنی توسط خبره‌ترین متخصصان را با حفظ کامل محرمانگی پر می‌کند.',
      en: 'LogBridge is an innovative platform bridging the operational gap between raw system event telemetry and expert engineering resolution while strictly safeguarding corporate confidentiality.',
    },
    definition: {
      fa: 'LogBridge یک پلتفرم دوگانه (عملیات ابری + شبکه خبرگان) است که به سازمان‌ها امکان می‌دهد رویدادها و لاگ‌های نرم‌افزاری، زیرساختی، شبکه‌ای، پایگاه‌داده و سخت‌افزاری را به صورت بلادرنگ مانیتور کرده، سیاست‌های واکنشی خودکار را اجرا نمایند و در زمان بروز رخدادهای حل‌نشده، بدون افشای داده‌های محرمانه به متخصصان معتبر متصل شوند.',
      en: 'LogBridge is a dual-capability platform (Cloud Operations Console + Expert Network) enabling organizations to continuously monitor software, infrastructure, network, database, and hardware telemetry, evaluate automated policies, and securely consult verified external engineers without exposing private organizational secrets.',
    },
    whyExists: {
      fa: 'سازمان‌های امروزی از یک سو با ابزارهای مانیتورینگ متفرق و پراکنده روبرو هستند و از سوی دیگر برای حل مشکلات پیچیده زیرساختی یا پایگاه داده با کمبود تخصص داخلی و هزینه‌های گزاف استخدام دائم دست‌وپنجه نرم می‌کنند.',
      en: 'Modern enterprises face fragmented monitoring tools while concurrently suffering from internal skill shortages and high overheads of hiring permanent senior specialists for rare low-level outages.',
    },
    problemAddressed: {
      fa: 'جلوگیری از طولانی شدن زمان قطعی سرویس (Downtime)، پایان دادن به آزمون‌وخطاهای پرریسک تیم‌های عمومی، و مهار قطعی نشت اطلاعات حساس و توکن‌های سازمانی در زمان اشتراک با مشاوران بیرونی.',
      en: 'Eliminates prolonged downtime, curtails risky trial-and-error by generalist staff, and prevents inadvertent leakage of proprietary credentials when consulting external specialists.',
    },
    mainComponents: {
      fa: [
        'درگاه دریافت و نرمال‌سازی لاگ (Ingestion & Normalizer)',
        'موتور سیاست‌ها و اتوماسیون (Policy Rule Engine)',
        'سامانه مدیریت رخداد و تریاژ (Incident Triage Center)',
        'محیط خصوصی سازمان و فیلتر پالایش اسرار (Privacy Sandbox & Redactor)',
        'بازارگاه و تالار همکاری متخصصان (Expert Collaboration Network)',
      ],
      en: [
        'Telemetry Ingestion & Normalizer Ingress',
        'Automated Policy Rule Engine',
        'Incident Triage & Correlation Center',
        'Privacy Sandbox & Secret Redaction Engine',
        'Expert Collaboration & Bidding Marketplace',
      ],
    },
    howItWorks: {
      fa: 'رویدادهای پنج حوزه فنی به پلتفرم تزریق می‌شوند؛ موتور سیاست‌ها شرایط بحرانی را شناسایی و هشدار صادر می‌کند؛ در صورت عدم توانایی تیم داخلی، نسخه پالایش‌شده رخداد ساخته شده و پس از تایید مدیر به متخصص واجد شرایط ارجاع می‌شود.',
      en: 'Telemetry from five domains streams into LogBridge; automated policies trigger alerts upon anomalies; if unresolvable internally, a sanitized case brief is generated and, with executive sign-off, dispatched to vetted specialists.',
    },
    stepByStepProcess: {
      fa: [
        'گام ۱: اتصال منابع داده سازمانی (اپلیکیشن، لینوکس، شبکه، دیتابیس، سخت‌افزار).',
        'گام ۲: تجمیع رویدادها و استخراج فیلدهای استاندارد با شناسه رهگیری.',
        'گام ۳: ارزیابی قواعد و آستانه‌ها توسط موتور سیاست‌ها.',
        'گام ۴: ایجاد تیکت رخداد و ارسال نوتیفیکیشن به اپراتور مربوطه.',
        'گام ۵: آماده‌سازی خودکار پرونده پالایش‌شده در صورت نیاز به مشاور بیرونی.',
      ],
      en: [
        'Step 1: Onboarding organizational data sources across five decoupled domains.',
        'Step 2: Stream normalization with standardized timestamp and correlation tracing.',
        'Step 3: Continuous threshold evaluation by the domain-specific policy engine.',
        'Step 4: Automated incident triage and alert generation.',
        'Step 5: Automated preparation of sanitized case previews for external consulting.',
      ],
    },
    inputs: {
      fa: ['جریان‌های لاگ متنی، JSON و Syslog', 'متریک‌های سیستمی CPU/RAM/IOPS', 'سیاست‌های تعریف‌شده توسط مدیران'],
      en: ['JSON/Syslog telemetry streams', 'System performance metrics (CPU/RAM/IOPS)', 'Configured operational rule thresholds'],
    },
    processingLogic: {
      fa: ['تطبیق الگوهای خطای پرتکرار', 'تشخیص افت شاخص‌های SLA', 'ماسک‌گذاری دوطرفه عبارات باقاعده محرمانه'],
      en: ['Pattern matching for recurring failure signatures', 'SLA breach detection', 'Deterministic regular-expression token masking'],
    },
    outputs: {
      fa: ['داشبورد سلامت کلان سازمان', 'هشدارهای زنده تریاژشده', 'پرونده‌های امن اشتراک با متخصص'],
      en: ['Unified organization health dashboard', 'Real-time triaged alerts', 'Sanitized collaboration case briefs'],
    },
    relationships: {
      fa: 'پایه مفهومی تمام بخش‌ها بوده و گردش کار میان کنسول مانیتورینگ سازمان و بازارگاه متخصصان را هماهنگ می‌سازد.',
      en: 'Forms the conceptual core integrating the organizational operations console with the independent expert network.',
    },
    realisticExample: {
      fa: 'یک پلتفرم فروش بلیت در جشنواره با بن‌بست تراکنش‌های دیتابیس مواجه می‌شود؛ لاگ‌ها تجمیع شده، خطای ۵۰۴ اعلام می‌گردد، اطلاعات حساس خریداران ماسک شده و راهبر خبره پایگاه‌داده تیکت را بررسی می‌کند.',
      en: 'An e-commerce platform encounters PostgreSQL lock deadlocks; error 504 fires an incident, customer PII is auto-redacted, and a senior database architect assists within minutes.',
    },
    implementationApproach: {
      fa: 'معماری بر پایه React + TypeScript، مدیریت حالت متمرکز، پشتیبانی دوزبانه کامل و رابط کاربری دارای طراحی غنی خنثی.',
      en: 'Engineered using modular React and TypeScript with zero-pill visual discipline, responsive RTL/LTR layouts, and local mock state persistence.',
    },
    evaluationMethod: {
      fa: 'کاهش شاخص MTTD (میانگین زمان شناسایی) و MTTR (میانگین زمان حل بحران).',
      en: 'Benchmarked by reduction in Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR).',
    },
  },

  // 2. Problem Discovery and Problem Definition
  {
    id: 'doc-2-problems',
    groupId: 'B',
    itemNumber: 2,
    title: {
      fa: 'کشف و تعریف دقیق مسئله (Problem Discovery & Definition)',
      en: 'Problem Discovery & Problem Definition',
    },
    summary: {
      fa: 'بررسی ۶ چالش ساختاری سازمان‌ها: لاگ‌های پراکنده، کمبود مهارت‌های عمیق، هدررفت زمان در خطاهای تکراری و ریسک بالای افشای اسرار.',
      en: 'Investigating 6 core organizational dilemmas: fragmented logs, rare skill deficits, repeated triage waste, and data leak hazards.',
    },
    available: true,
    introduction: {
      fa: 'تحلیل عمیق چالش‌های واقعی تیم‌های مهندسی نشان می‌دهد که ریشه بیشتر قطعی‌های طولانی در عدم پیوستگی ابزارهای پایش و دسترسی به تخصص است.',
      en: 'Empirical analysis of engineering operations reveals that extended outages stem from the disconnect between observability tools and immediate expertise access.',
    },
    definition: {
      fa: 'تعریف دقیق چالش‌هایی که شرکت‌های در حال رشد در نگهداری سیستم‌های توزیع‌شده با آن مواجه هستند: ابزارهای جزیره‌ای، عدم امکان استخدام دائمی معماران در تمام فناوری‌ها، و نبود کانال امن برای دریافت کمک بدون لو رفتن توکن‌ها و معماری داخلی.',
      en: 'Exhaustive definition of dilemmas facing mid-sized organizations: fragmented monitoring silos, economic inability to hire full-time senior architects across all stacks, and lack of secure consulting channels.',
    },
    whyExists: {
      fa: 'اثبات ضرورت وجود پلتفرم از طریق تبیین ابعاد زیان‌های ناشی از قطعی سیستم و خطرات حقوقی نشت اطلاعات در ارتباطات غیررسمی مانند تلگرام و اسلک.',
      en: 'Justifies why LogBridge exists by demonstrating outage losses and regulatory non-compliance caused by sharing logs over unencrypted chat channels.',
    },
    problemAddressed: {
      fa: 'برطرف کردن گسستگی میان «کشف خطا»، «تصمیم‌گیری سیاستی» و «فراخوانی متخصص».',
      en: 'Resolves the systemic fracture between fault detection, automated policy response, and specialist engagement.',
    },
    mainComponents: {
      fa: [
        'ماتریس ارزیابی مهارت‌های نایاب (Tier 1 Support تا Principal Architect)',
        'تحلیل هزینه خاموشی سرویس (Cost of Downtime Calculator)',
        'ارزیابی آسیب‌پذیری نشت توکن‌های دسترسی و IPهای داخلی',
      ],
      en: [
        'Rare Skill Availability Matrix (Tier 1 to Principal Architect)',
        'Downtime Opportunity Cost Calculator',
        'Credential & Internal Network Leak Vulnerability Auditor',
      ],
    },
    howItWorks: {
      fa: 'شناسایی و دسته‌بندی مشکلات در سه سطح: ۱) فنی و زیرساختی ۲) اقتصادی و نیروی انسانی ۳) امنیت و انطباق با قوانین حفظ حریم خصوصی.',
      en: 'Triangulates organizational issues across three vectors: 1) Technical & infrastructure 2) Human capital & payroll economics 3) Security & privacy compliance.',
    },
    stepByStepProcess: {
      fa: [
        'تحلیل وضعیت موجود (As-Is): ابزارهای مانیتورینگ متفرق و سردرگمی اپراتور.',
        'شناسایی گلوگاه: رخداد در لایه‌ای خارج از مهارت تیم فعلی رخ داده است.',
        'تلاش‌های پرریسک: ارسال لاگ‌های خام حاوی اطلاعات حساس در ایمیل یا چت.',
        'وضعیت مطلوب (To-Be): تریاژ هوشمند، مهار نشت داده و ورود هدفمند متخصص.',
      ],
      en: [
        'Current State Assessment: Scattered observability tools causing operator fatigue.',
        'Bottleneck Identification: Incident lies outside current team competencies.',
        'High-Risk Improvisation: Unsanitized log snippets pasted into external messengers.',
        'Desired State with LogBridge: Automated triage, secret redaction, and specialist dispatch.',
      ],
    },
    inputs: {
      fa: ['گزارش‌های خرابی و قطعی سازمان', 'ساختار تیم فنی و بودجه استخدام', 'سوابق رخدادهای تکراری'],
      en: ['Historical outage postmortems', 'Engineering headcount budgets', 'Recurring incident logs'],
    },
    processingLogic: {
      fa: ['ارزیابی نسبت هزینه استخدام دائم به مشاوره موردی', 'تحلیل توزیع خطاهای حل‌نشده'],
      en: ['CapEx vs. On-Demand OpEx calculation', 'Unresolved failure distribution analysis'],
    },
    outputs: {
      fa: ['مدل توجیه اقتصادی پلتفرم', 'فهرست نیازمندی‌های امنیتی اشتراک داده'],
      en: ['Platform economic justification model', 'Security redaction requirements specification'],
    },
    relationships: {
      fa: 'ورودی فکری برای بخش‌های ۳ (گردش کار)، ۸ (امنیت و پالایش) و ۱۰ (کاربران هدف).',
      en: 'Informs Section 3 (Workflow), Section 8 (Security), and Section 10 (Target Personas).',
    },
    realisticExample: {
      fa: 'یک شرکت نرم‌افزاری ۳۰ نفره با خطای نشت حافظه در پادهای کوبرنتیز مواجه می‌شود؛ استخدام مهندس ارشد کوبرنتیز با حقوق بالا مقدور نیست و اشتراک فایل‌های پیکربندی شامل کلیدهای مخفی است.',
      en: 'A 30-person SaaS team suffers memory leaks in Kubernetes pods; hiring a full-time senior cloud engineer is financially infeasible, while raw configs expose private keys.',
    },
    implementationApproach: {
      fa: 'ارائه پرونده‌های تحلیلی مقایسه‌ای در مستندات و امکان شبیه‌سازی سناریوهای بحران.',
      en: 'Documented analytical case studies with simulated crisis triage flows in the MVP.',
    },
    evaluationMethod: {
      fa: 'اعتبارسنجی فرضیات با معیارهای مصاحبه‌های میدانی و تحلیل داده‌های حوادث.',
      en: 'Validated through engineering lead interviews and outage postmortem analytics.',
    },
  },

  // 3. Product Workflow & Conceptual Architecture
  {
    id: 'doc-3-workflow',
    groupId: 'C',
    itemNumber: 3,
    title: {
      fa: 'گردش کار محصول و معماری مفهومی (Product Workflow & Architecture)',
      en: 'Product Workflow & Architecture',
    },
    summary: {
      fa: 'ترسیم کامل جریان ۱۲ مرحله‌ای: از دریافت لاگ و ارزیابی سیاست‌ها تا آماده‌سازی امن پرونده و خاتمه قرارداد متخصص.',
      en: 'Comprehensive 12-stage workflow mapping: from log ingest and policy evaluation to sanitized case sharing and expert sign-off.',
    },
    available: true,
    introduction: {
      fa: 'معماری مفهومی LogBridge بر اساس اصل کمینه‌سازی دسترسی (Least Privilege) و خودکارسازی چرخه حیات رخدادهای فنی بنا شده است.',
      en: 'LogBridge conceptual architecture is anchored on the principle of Least Privilege and automated incident lifecycle orchestration.',
    },
    definition: {
      fa: 'گردش کار جامع پلتفرم که توالی گام‌ها، ورودی‌ها، خروجی‌ها و مرزهای امنیتی بین محیط داخلی سازمان و شبکه متخصصان مستقل را معین می‌کند.',
      en: 'End-to-end operational pipeline defining the sequence of operations, data transforms, and security boundaries separating internal systems from external specialists.',
    },
    whyExists: {
      fa: 'ایجاد شفافیت کامل برای اپراتورها و کارفرمایان تا دقیقاً بدانند در هر مرحله چه داده‌ای ثبت، چه سیاستی اجرا و چه اطلاعاتی به اشتراک گذاشته می‌شود.',
      en: 'Establishes absolute operational transparency so operators and executives know exactly what data is ingested, evaluated, and published at every stage.',
    },
    problemAddressed: {
      fa: 'حذف فرآیندهای دستی کند، تصمیم‌گیری‌های سلیقه‌ای در زمان بحران و ناهماهنگی میان تیم‌های عملیات و مشاوران بیرونی.',
      en: 'Eliminates slow manual escalation, ad-hoc triage during outages, and friction between internal operations and external consultants.',
    },
    mainComponents: {
      fa: [
        'خط لوله دریافت و ارزیابی بلادرنگ (Ingestion Pipeline)',
        'موتور سیاست‌گذاری و تولید هشدار (Policy Engine)',
        'ماژول تولید پرونده فنی پالایش‌شده (Sanitized Case Builder)',
        'درگاه تایید دو مرحله‌ای مدیر سازمان (Admin Approval Gateway)',
        'تالار تطبیق هوشمند و اتاق همکاری امن (Collab Workspace)',
      ],
      en: [
        'Real-time Ingestion & Normalization Pipeline',
        'Automated Policy & Alert Dispatcher',
        'Sanitized Case Generation Module',
        'Two-Man Rule Organization Approval Gateway',
        'Expert Matching & Secure Room Collaboration',
      ],
    },
    howItWorks: {
      fa: 'اطلاعات در محیط داخلی پایش و تحلیل می‌شوند؛ پس از ارزیابی سیاست‌ها، تیکت رخداد باز می‌شود؛ در صورت تایید مدیریت، پرونده پالایش‌شده در تالار متخصصان درج و پس از ارائه راه‌حل، مستندسازی نهایی صورت می‌پذیرد.',
      en: 'Telemetry is analyzed locally; policy evaluations spawn incidents; upon organizational approval, a sanitized case brief is posted for bidding and, upon resolution, logged into the runbook.',
    },
    stepByStepProcess: {
      fa: [
        'مرحله ۱: دریافت لاگ و نرمال‌سازی رویدادها با استاندارد مشترک.',
        'مرحله ۲: تفکیک به دامنه‌های ۵ گانه (نرم‌افزار، زیرساخت، شبکه، دیتابیس، سخت‌افزار).',
        'مرحله ۳: ارزیابی قواعد و آستانه‌ها در موتور سیاست‌ها.',
        'مرحله ۴: ثبت تیکت رخداد، تعیین شدت و ارسال هشدار به کارشناس مربوطه.',
        'مرحله ۵: تلاش اولیه تیم داخلی؛ در صورت پیچیدگی، فعال‌سازی گزینه «درخواست متخصص».',
        'مرحله ۶: استخراج خودکار علائم و ساخت پیش‌نویس پرونده فنی.',
        'مرحله ۷: پالایش و ماسک‌گذاری خودکار داده‌های محرمانه (IP، پسورد، نام دامنه).',
        'مرحله ۸: بازبینی و تایید نهایی انتشار توسط مدیر ارشد سازمان.',
        'مرحله ۹: انتشار در تالار فرصت‌ها و تطبیق هوشمند با سوابق متخصصان.',
        'مرحله ۱۰: بررسی پروپوزال‌ها و انتخاب متخصص توسط سازمان.',
        'مرحله ۱۱: شروع همکاری در محیط امن با دسترسی زمان‌دار و مانیتورشده.',
        'مرحله ۱۲: ثبت گزارش نهایی حل مشکل، تایید کارفرما و ذخیره در پایگاه دانش.',
      ],
      en: [
        'Stage 1: Log ingestion and standardized format normalization.',
        'Stage 2: Decoupled categorization across the 5 technical domains.',
        'Stage 3: Automated threshold evaluation by the policy engine.',
        'Stage 4: Incident ticket creation and severity tagging.',
        'Stage 5: Internal investigation; triggering "Request Expert" if unresolved.',
        'Stage 6: Automated extraction of symptoms and technical case drafting.',
        'Stage 7: Deterministic secret redaction (internal IPs, tokens, customer PII).',
        'Stage 8: Executive review and explicit sharing approval.',
        'Stage 9: Opportunity publication and skills-based specialist matching.',
        'Stage 10: Proposal evaluation and specialist engagement.',
        'Stage 11: Scoped collaboration with auditable temporary permissions.',
        'Stage 12: Resolution sign-off and knowledge base archiving.',
      ],
    },
    inputs: {
      fa: ['رویدادهای خام سیستمی', 'پیکربندی قوانین و سیاست‌ها', 'تصمیمات مدیریتی و تاییدهای انسانی'],
      en: ['Raw telemetry records', 'Policy rule configurations', 'Organizational approval actions'],
    },
    processingLogic: {
      fa: ['رهگیری وضعیت ماشین حالت رخداد (State Machine)', 'تولید رونوشت غیرقابل برگشت پالایش‌شده'],
      en: ['Incident Finite State Machine transitions', 'Irreversible redaction cloning'],
    },
    outputs: {
      fa: ['پرونده فنی پالایش‌شده', 'قرارداد همکاری متخصص', 'گزارش ریشه‌یابی و مستند پایگاه دانش'],
      en: ['Sanitized case specification', 'Collaboration agreement', 'Root Cause Analysis runbook'],
    },
    relationships: {
      fa: 'شالوده پیونددهنده کنسول عملیات (Operations Console) با میزکار متخصصان (Expert Network).',
      en: 'The core workflow connecting the internal Operations Console to the Expert Network.',
    },
    realisticExample: {
      fa: 'افزایش ناگهانی پکت‌لاس در سوییچ اصلی؛ سیستم هشدار می‌دهد، لاگ‌های شبکه ماسک شده و پس از تایید مدیر، مهندس ارشد سیسکو کانفیگ BGP را اصلاح می‌کند.',
      en: 'A core switch suffers packet loss; LogBridge flags high latency, network configs are sanitized, and a CCIE expert debugs the BGP routing within the collaboration room.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی نمودار تعاملی با گام‌های قابل کلیک و نمایش وضعیت زنده ماشین حالت.',
      en: 'Interactive flowchart diagram with clickable milestones and state machine indicators.',
    },
    evaluationMethod: {
      fa: 'صحت‌سنجی تکمیل تمام ۱۲ گام بدون دور زدن مرزهای امنیتی و تاییدی.',
      en: 'Audited against zero bypass of security boundaries and approval milestones.',
    },
  },

  // 4. Technical Domains Covered
  {
    id: 'doc-4-domains',
    groupId: 'D',
    itemNumber: 4,
    title: {
      fa: 'حوزه‌های فنی پنج‌گانه تحت پوشش (Five Technical Monitoring Domains)',
      en: 'Five Technical Monitoring Domains Covered',
    },
    summary: {
      fa: 'تفکیک جامع پایش به ۵ دامنه مستقل: نرم‌افزار، زیرساخت لینوکس، شبکه و امنیت، پایگاه‌داده و سخت‌افزار سرور.',
      en: 'Exhaustive telemetry partitioning into 5 domains: Software, Infrastructure, Network & Security, Database & Storage, and Hardware.',
    },
    available: true,
    introduction: {
      fa: 'پلتفرم LogBridge مانیتورینگ را فراتر از سخت‌افزار محض برده و تمام لایه‌های فناوری یک سازمان مدرن را در ۵ حوزه ایزوله پوشش می‌دهد.',
      en: 'LogBridge transcends conventional hardware monitoring by addressing all operational technology layers across five decoupled domains.',
    },
    definition: {
      fa: 'تقسیم‌بندی ۵ گانه منابع مانیتورینگ شامل: ۱) نرم‌افزار و اپلیکیشن ۲) زیرساخت و سیستم‌عامل ۳) شبکه و امنیت ۴) پایگاه‌داده و ذخیره‌سازی ۵) سخت‌افزار و تجهیزات فیزیکی.',
      en: 'Five-pillar domain partitioning: 1) Software & Applications 2) Infrastructure & OS 3) Network & Security 4) Database & Storage 5) Hardware & Devices.',
    },
    whyExists: {
      fa: 'جلوگیری از انباشت همه لاگ‌ها در یک محیط درهم‌ریخته و امکان اختصاص دسترسی نقش‌محور به کارشناسان هر حوزه بدون تداخل کاری.',
      en: 'Prevents monolithic telemetry dumping, enabling role-based access control where each domain specialist accesses only relevant systems.',
    },
    problemAddressed: {
      fa: 'خستگی از آلارم‌های غیرمرتبط (Alert Fatigue) و سردرگمی کارشناسان دیتابیس در میان انبوه خطاهای فرانت‌اند یا شبکه.',
      en: 'Mitigates alert fatigue and prevents specialists from sifting through irrelevant logs outside their core domain.',
    },
    mainComponents: {
      fa: [
        'دامنه نرم‌افزار: فرانت‌اند، بک‌اند، APIها، خطاهای ۵xx، استثناها و تاخیر کلاینت',
        'دامنه زیرساخت: سرورهای لینوکس، کانتینرها، پادهای کوبرنتیز، CPU و رم سرور',
        'دامنه شبکه و امنیت: اینترفیس‌ها، سرورهای DNS، فایروال، TLS و حملات ورود ناموفق',
        'دامنه پایگاه داده: کانکشن‌پول PostgreSQL/MySQL، کوئری‌های کند، کش ردیس و دیسک',
        'دامنه سخت‌افزار: دمای فیزیکی CPU، ولتاژ، سرعت فن‌ها، منابع تغذیه موازی و حسگرهای IPMI',
      ],
      en: [
        'Software: Frontend, backend, APIs, 5xx errors, exceptions, and client latency',
        'Infrastructure: Linux servers, Docker containers, Kubernetes pods, CPU/RAM',
        'Network & Security: Interfaces, DNS, firewall, TLS expiry, and brute-force events',
        'Database & Storage: Connection pool saturation, slow queries, Redis, and NVMe I/O',
        'Hardware: CPU core thermal sensors, voltages, fan RPMs, redundant PSUs, IPMI BMC',
      ],
    },
    howItWorks: {
      fa: 'هر لاگ در زمان ورود با برچسب دامنه (domain tag) شناسایی شده و در پنل اختصاصی همان حوزه با شاخص‌های کارایی متناسب نمایش داده می‌شود.',
      en: 'Inbound logs are stamped with canonical domain tags and routed to dedicated views featuring tailored KPIs and telemetry charts.',
    },
    stepByStepProcess: {
      fa: [
        'ورود رویداد از فرستنده لاگ سازمانی.',
        'تخصیص خودکار به یکی از ۵ حوزه بر اساس منبع و متادیتا.',
        'محاسبه شاخص‌های سلامت مستقل برای هر دامنه (Healthy/Warning/Critical).',
        'ارائه لاگ‌های فیلترشده در کاوشگر اختصاصی حوزه.',
      ],
      en: [
        'Event ingestion from organizational collectors.',
        'Automated routing into one of the 5 domains based on source metadata.',
        'Independent health index computation per domain (Healthy/Warning/Critical).',
        'Isolated log stream display in the domain-specific explorer.',
      ],
    },
    inputs: {
      fa: ['لاگ‌های Nginx و Node.js', 'متریک‌های Prometheus کرنل لینوکس', 'تله‌متری حسگرهای IPMI مادربرد'],
      en: ['Nginx/Node.js application logs', 'Kernel Prometheus metrics', 'Motherboard IPMI BMC sensor data'],
    },
    processingLogic: {
      fa: ['جداسازی منطقی جریان داده‌ها بر اساس نام سرویس و هاست'],
      en: ['Decoupled logical stream partitioning keyed by service and host'],
    },
    outputs: {
      fa: ['۵ پنل مانیتورینگ مجزا با اسپارک‌لاین و وضعیت سلامت اختصاصی'],
      en: ['5 distinct operational panels with dedicated sparklines and health indicators'],
    },
    relationships: {
      fa: 'مبنای ساختاری بخش‌های ۵ (پایش و لاگ)، ۶ (سیاست‌ها) و ۱۰ (نقش‌های دسترسی).',
      en: 'Structural basis for Section 5 (Monitoring), Section 6 (Policies), and Section 10 (RBAC).',
    },
    realisticExample: {
      fa: 'هنگام افزایش دمای سرور فیزیکی، فقط کارشناس سخت‌افزار هشدار دریافت می‌کند و اپراتورهای فرانت‌اند درگیر هشدارهای نامربوط نمی‌شوند.',
      en: 'When CPU temperatures spike to 84°C, only the Hardware Operator receives urgent alerts, shielding frontend staff from alert noise.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی ۵ کارت سلامت اصلی در بالای داشبورد به همراه صفحات اختصاصی با لاگ‌های تفکیک‌شده.',
      en: 'Implemented via 5 domain health cards in the console overview linking to dedicated domain detail views.',
    },
    evaluationMethod: {
      fa: 'تضمین ایزوله‌سازی ۱۰۰ درصدی لاگ‌ها در زمان انتخاب فیلتر دامنه.',
      en: 'Verified through 100% strict telemetry isolation when a domain filter is active.',
    },
  },

  // 5. Monitoring and Log Management
  {
    id: 'doc-5-monitoring',
    groupId: 'E',
    itemNumber: 5,
    title: {
      fa: 'پایش عملیاتی و مدیریت لاگ‌ها (Monitoring & Log Ingestion)',
      en: 'Monitoring and Log Management',
    },
    summary: {
      fa: 'کاوشگر زنده لاگ‌ها، سطوح شش‌گانه شدت رویداد، قابلیت مکث/ادامه و هم‌زیستی با ابزارهای سنتری و زابیکس.',
      en: 'Live log stream explorer, six severity tiers, pause/resume controls, and coexistence with Sentry and Zabbix.',
    },
    available: true,
    introduction: {
      fa: 'کاوشگر لاگ LogBridge پنجره شفاف سازمان به وضعیت زنده سیستم است که داده‌ها را بدون بار اضافی روی سرورها نمایش می‌دهد.',
      en: 'LogBridge live explorer provides a high-density, low-overhead operational window into continuous enterprise telemetry.',
    },
    definition: {
      fa: 'موتور دریافت و کاوش لاگ مجهز به سطوح شش‌گانه شدت (DEBUG, INFO, NOTICE, WARNING, ERROR, CRITICAL)، جستجوی بلادرنگ، فیلتر بازه زمانی و ماژول بازرسی کامل JSON.',
      en: 'Ingestion and explorer terminal supporting six severity tiers, real-time query filtering, time-range slicing, and deep JSON payload inspection.',
    },
    whyExists: {
      fa: 'اپراتورها در زمان حادثه نیاز به مشاهده بلادرنگ آخرین رویدادهای مرتبط دارند تا پیش از وقوع فاجعه، الگوی خطا را تشخیص دهند.',
      en: 'Operators require real-time visibility into incoming event spikes to diagnose failure cascades before catastrophic outages occur.',
    },
    problemAddressed: {
      fa: 'رفع تاخیرهای طولانی در دیدن لاگ‌ها و نیاز به ورود دستی به ترمینال چندین سرور با SSH.',
      en: 'Eliminates log aggregation lag and removes the security hazard of having operators SSH into individual production boxes.',
    },
    mainComponents: {
      fa: [
        'ترمینال زنده لاگ با رنگ‌بندی استاندارد شدت',
        'کنترل‌های مکث و ادامه استریم داده (Pause/Resume)',
        'فیلتر سطوح شش‌گانه شدت و دامنه‌های فنی',
        'مدال بازرسی عمقی رکورد و کپی سریع JSON لاگ',
      ],
      en: [
        'Live terminal log stream with standard severity hues',
        'Pause and Resume real-time stream controls',
        'Six-tier severity and domain-scoped filter bars',
        'Deep JSON record inspector modal with one-click clipboard copy',
      ],
    },
    howItWorks: {
      fa: 'رویدادها به صورت خودکار با برچسب زمانی و شناسه ردیابی دریافت می‌شوند؛ اپراتور می‌تواند جریان را متوقف کرده و فیلدهای متادیتا را موشکافی کند.',
      en: 'Incoming logs stream into memory with timestamp and correlation IDs; operators can pause the stream to inspect raw payloads.',
    },
    stepByStepProcess: {
      fa: [
        'دریافت رکورد لاگ از عامل نرم‌افزاری یا اینتگریشن.',
        'افزودن شناسه یکتا (eventId) و برچسب دامنه.',
        'نمایش در بالای جریان لاگ زنده.',
        'امکان کلیک روی هر رکورد جهت مشاهده جزییات فنی کامل.',
      ],
      en: [
        'Log record arrival from connector or shipper.',
        'Tagging with unique eventId and canonical domain.',
        'Prepend insertion into the live UI stream.',
        'Click-to-inspect for complete technical metadata.',
      ],
    },
    inputs: {
      fa: ['استریم رویدادهای شبیه‌سازی‌شده سازمان انتخابی', 'فیلترهای اعمالی توسط کاربر'],
      en: ['Live simulated telemetry streams from active tenant', 'User-selected filter queries'],
    },
    processingLogic: {
      fa: ['بافر گردشی ۵۰ رکورد آخر جهت حفظ پرفورمنس مرورگر'],
      en: ['Circular buffer maintaining the latest 50 records for peak browser performance'],
    },
    outputs: {
      fa: ['نمای جدول ترمینالی با جزئیات کامل رکورد'],
      en: ['High-density terminal log table with expandable record payloads'],
    },
    relationships: {
      fa: 'خوراک اصلی موتور ارزیابی سیاست‌ها (Policy Engine) و ایجاد رخدادها (Incidents).',
      en: 'Feeds continuous telemetry into the Policy Engine and Incident Triage Center.',
    },
    realisticExample: {
      fa: 'در حین افت سرعت فروشگاه، لاگ‌های ERROR با پیام "Connection pool timeout" از هاست db-primary-01 با رنگ قرمز در ترمینال هویدا می‌شوند.',
      en: 'During e-commerce lag, ERROR logs showing "Connection pool timeout" from host db-primary-01 highlight immediately in red.',
    },
    implementationApproach: {
      fa: 'شبیه‌ساز مداوم لاگ در پس‌زمینه با قابلیت توقف استریم و فیلتر روی شناسه همبستگی.',
      en: 'Stateful background generator producing structured JSON logs tagged with correlation IDs.',
    },
    evaluationMethod: {
      fa: 'تضمین پاسخگویی کمتر از ۵۰ میلی‌ثانیه‌ای فیلترها و عدم کرش مرورگر در حجم بالای لاگ.',
      en: 'Verified with sub-50ms query filtering and zero UI stutter during high throughput.',
    },
  },

  // 6. Policy Management and Automation
  {
    id: 'doc-6-policy',
    groupId: 'F',
    itemNumber: 6,
    title: {
      fa: 'مدیریت سیاست‌ها و اتوماسیون (Policy Management & Automation)',
      en: 'Policy Management and Automation',
    },
    summary: {
      fa: 'تعریف قواعد خودکار برای ۵ حوزه، تعیین آستانه‌ها، فواصل ارزیابی، اقدامات اصلاحی و شبیه‌سازی بلادرنگ ماشه.',
      en: 'Automated policy rule definitions across 5 domains, thresholds, intervals, actions, and real-time trigger simulation.',
    },
    available: true,
    introduction: {
      fa: 'موتور سیاست‌های LogBridge مغز متفکر سیستم است که لاگ‌های منفعل را به اقدامات خودکار و هشدارهای پیشگیرانه تبدیل می‌کند.',
      en: 'LogBridge Policy Engine transforms passive log telemetry into proactive alerts and automated remediation actions.',
    },
    definition: {
      fa: 'مجموعه‌ای از قوانین مشروط (Condition-Action Rules) تفکیک‌شده بر اساس حوزه فنی، شامل آستانه عددی، بازه ارزیابی (Evaluation Interval)، سطح خطر و اقدام متناظر.',
      en: 'Domain-specific condition-action rules specifying numerical thresholds, evaluation intervals, severity grades, and remediation actions.',
    },
    whyExists: {
      fa: 'انسان‌ها نمی‌توانند میلیون‌ها رکورد لاگ را در لحظه رصد کنند؛ سیاست‌ها نگهبانان هوشمند ۲۴ ساعته سیستم هستند.',
      en: 'Human operators cannot manually monitor millions of events per hour; automated policies act as 24/7 autonomous guardians.',
    },
    problemAddressed: {
      fa: 'جلوگیری از غافلگیری در زمان وقوع بحران و اجرای خودکار اقدامات مهارکننده (مانند ایزوله‌سازی سرور یا پاکسازی کش).',
      en: 'Prevents unannounced outages and automatically applies mitigation steps before catastrophic cascades occur.',
    },
    mainComponents: {
      fa: [
        'قوانین نرم‌افزار (استثناهای تکراری، افزایش خطای ۵xx، تاخیر API)',
        'قوانین زیرساخت (مصرف بالای CPU، اشباع حافظه، کانتینر ناسالم)',
        'قوانین شبکه و امنیت (تلاش‌های ناموفق ورود، افت بسته، انقضای TLS)',
        'قوانین دیتابیس (اشباع استخر اتصال، کوئری کند، پر شدن دیسک)',
        'قوانین سخت‌افزار (دمای بحرانی CPU، افت دور فن، خطای پاور)',
      ],
      en: [
        'Software policies (unhandled exceptions, 5xx error spikes, API latency)',
        'Infrastructure policies (CPU overload, memory leaks, unhealthy pods)',
        'Network policies (brute-force logins, packet loss, TLS cert expiry)',
        'Database policies (pool saturation, slow query spikes, NVMe capacity)',
        'Hardware policies (critical thermal thresholds, fan failures, PSU drop)',
      ],
    },
    howItWorks: {
      fa: 'هر سیاست به طور مداوم داده‌های دامنه خود را در پنجره زمانی مشخص ارزیابی کرده و در صورت انطباق با شرط، هشدار ایجاد کرده و اقدام اصلاحی را اجرا می‌کند.',
      en: 'Each policy evaluates sliding-window telemetry; when conditions breach thresholds, alerts fire and configured actions trigger.',
    },
    stepByStepProcess: {
      fa: [
        'تعریف سیاست و تعیین آستانه مجاز (مانند CPU > 85% برای ۳ دقیقه).',
        'ارزیابی متناوب جریان لاگ توسط موتور سیاست‌ها.',
        'ماشه خوردن سیاست (Tripped) در صورت نقض شرط.',
        'افزایش شمارنده اجرا (Execution Count) و ثبت زمان آخرین شلیک.',
        'تولید هشدار در مرکز آلرت‌ها و ارسال پیامک/ایمیل به اپراتور.',
      ],
      en: [
        'Policy configuration with explicit threshold (e.g., CPU > 85% for 3m).',
        'Sliding window evaluation against incoming stream.',
        'Tripping event upon threshold breach.',
        'Incrementing execution counter and updating audit timestamps.',
        'Alert creation and notification dispatch.',
      ],
    },
    inputs: {
      fa: ['متریک‌ها و لاگ‌های جاری', 'قوانین فعال در دیتابیس سیاست‌ها'],
      en: ['Continuous telemetry metrics', 'Active policy rules repository'],
    },
    processingLogic: {
      fa: ['ارزیابی عبارات منطقی جبری و پنجره‌های زمانی میانگین‌گیری'],
      en: ['Boolean threshold logic and sliding-window average calculations'],
    },
    outputs: {
      fa: ['هشدارهای اولویت‌بندی‌شده در مرکز آلرت‌ها', 'ثبت در تاریخچه اجرای سیاست'],
      en: ['Prioritized alerts in Alert Center', 'Policy execution history audit logs'],
    },
    relationships: {
      fa: 'پیونددهنده داده‌های خام بخش ۵ (پایش) به تصمیمات بخش ۷ (مدیریت رخداد).',
      en: 'Bridges raw telemetry from Section 5 to actionable incident decisions in Section 7.',
    },
    realisticExample: {
      fa: 'سیاست "اشباع استخر اتصال PostgreSQL > ۹۰٪" ماشه می‌خورد؛ فوراً هشدار بحرانی صادر شده و درخواست متخصص دیتابیس آماده می‌شود.',
      en: 'Policy "PostgreSQL Pool Saturation > 90%" trips; a critical alert generates and a specialist request draft is instantly assembled.',
    },
    implementationApproach: {
      fa: 'امکان فعال/غیرفعال‌سازی تک‌تک سیاست‌ها و دکمه "تست شبیه‌سازی ماشه" با فیدبک آنی.',
      en: 'Interactive toggle switches and "Simulate Trigger" action with non-blocking toast confirmations.',
    },
    evaluationMethod: {
      fa: 'اطمینان از صفر بودن هشدارهای کاذب با اعمال فواصل بازبینی زمانی مناسب.',
      en: 'Verified with sliding evaluation windows preventing transient false positives.',
    },
  },

  // 7. Incident Management & Lifecycle
  {
    id: 'doc-7-incident',
    groupId: 'G',
    itemNumber: 7,
    title: {
      fa: 'مدیریت رخدادها و چرخه عمر (Incident Management & Lifecycle)',
      en: 'Incident Management & Lifecycle',
    },
    summary: {
      fa: 'چرخه کامل حیات تیکت‌های بحران از شناسایی و تریاژ تا واگذاری به متخصص، حل مسئله و ثبت درس‌آموخته.',
      en: 'Comprehensive crisis ticket lifecycle: from initial detection and triage to expert handoff, resolution, and postmortem.',
    },
    available: true,
    introduction: {
      fa: 'مدیریت رخداد در LogBridge فراتر از یک سیستم تیکتینگ ساده است؛ اینجا تیکت رخداد پلی زنده میان شواهد فنی و افراد مسئول است.',
      en: 'LogBridge incident management is a living bridge correlating technical log evidence directly with responsible operators.',
    },
    definition: {
      fa: 'سامانه تریاژ رخدادهای بحرانی با چرخه وضعیت هشت‌گانه (New, Investigating, Policy Applied, Waiting for Review, Expert Required, In Progress, Resolved, Closed) با قابلیت استخراج شواهد فنی.',
      en: 'Incident triage system supporting an 8-stage state machine (New to Closed) with direct technical evidence correlation.',
    },
    whyExists: {
      fa: 'سازمان‌ها در زمان اختلال دچار سردرگمی می‌شوند؛ ساختار مشخص رخداد مانع از فراموشی اقدامات و سردرگمی مسئولان می‌گردد.',
      en: 'Outages induce chaos; a structured incident timeline ensures accountability and orderly resolution steps.',
    },
    problemAddressed: {
      fa: 'جلوگیری از برخورد جداگانه با تک‌تک لاگ‌ها؛ تجمیع صدها ارور همبسته در قالب یک رخداد مشخص با شناسه یکتا.',
      en: 'Prevents treating each individual log as a separate issue by grouping related errors into one correlated incident.',
    },
    mainComponents: {
      fa: [
        'شماره ردیابی استاندارد رخداد (مانند INC-2026-9842)',
        'خط زمانی رخداد (Timeline) شامل تمام رویدادها از لحظه وقوع تا حل',
        'شواهد لاگ‌های خام اولیه در مقابل لاگ‌های پالایش‌شده',
        'دکمه راهبردی «درخواست متخصص (Request an Expert)» در جزییات تیکت',
      ],
      en: [
        'Standard incident tracking ID (e.g. INC-2026-9842)',
        'Chronological incident event timeline',
        'Raw evidence payload vs. sanitized excerpt comparison',
        'Strategic "Request an Expert" button embedded in incident detail',
      ],
    },
    howItWorks: {
      fa: 'با نقض سیاست‌ها رخداد ایجاد می‌شود؛ کارشناس وضعیت را به Investigating تغییر می‌دهد؛ در صورت نیاز گزینه درخواست متخصص فشرده شده و وارد فرآیند آماده‌سازی پرونده امن می‌شود.',
      en: 'Tripped policies spawn incidents; operators set status to Investigating; if complex, clicking Request an Expert triggers secure case drafting.',
    },
    stepByStepProcess: {
      fa: [
        'تشخیص رخداد به صورت خودکار یا ثبت دستی توسط اپراتور.',
        'تعیین شدت (Critical, High, Medium, Low) و سیستم تحت تاثیر.',
        'ثبت اقدامات انجام‌شده داخلی (Steps Taken).',
        'تغییر وضعیت به Expert Required در صورت نیاز به مشاور بیرونی.',
        'خاتمه رخداد و درج خلاصه راه‌حل (Resolution Summary).',
      ],
      en: [
        'Automated detection or manual operator dispatch.',
        'Severity ranking and affected subsystem tagging.',
        'Logging internal troubleshooting steps taken.',
        'Escalation to Expert Required when external help is needed.',
        'Incident closure and resolution runbook archival.',
      ],
    },
    inputs: {
      fa: ['هشدارهای ماشه‌خورده موتور سیاست‌ها', 'لاگ‌های حاوی خطا با شناسه رهگیری'],
      en: ['Alerts emitted by policy evaluations', 'Correlated error log payloads'],
    },
    processingLogic: {
      fa: ['ماشین حالت رخداد با قوانین انتقال مجاز میان وضعیت‌ها'],
      en: ['Finite State Machine enforcing valid lifecycle status transitions'],
    },
    outputs: {
      fa: ['تیکت رسمی رخداد با جدول زمانی شفاف', 'پیش‌نویس پرونده فنی برای متخصص'],
      en: ['Formal incident ticket with transparent audit timeline', 'Technical case brief draft'],
    },
    relationships: {
      fa: 'مفصل اتصال میان کنسول عملیات (بخش ۵ و ۶) و بازارگاه متخصصان (بخش ۸ و ۹).',
      en: 'The operational hinge connecting telemetry (Sections 5 & 6) to expert collaboration (Sections 8 & 9).',
    },
    realisticExample: {
      fa: 'رخداد INC-2026-4412 با عنوان "افت ۹۰ درصدی تراکنش‌های درگاه بانکی" ایجاد می‌شود؛ کارشناس داخلی پس از ۲۰ دقیقه بررسی، گزینه درخواست متخصص را می‌زند.',
      en: 'Incident INC-2026-4412 titled "90% drop in payment transactions" is created; after 20 minutes, staff flags Expert Required.',
    },
    implementationApproach: {
      fa: 'فرم کامل ثبت رخداد جدید، فیلتر وضعیت و مدال جزییات با امکان تغییر وضعیت زنده.',
      en: 'Complete incident creation modal, severity filters, and live lifecycle status mutators.',
    },
    evaluationMethod: {
      fa: 'ارزیابی بر اساس سرعت انتقال رخداد از وضعیت تشخیص تا تعیین تکلیف نهایی.',
      en: 'Measured by the transition velocity from Detection to final Resolution.',
    },
  },

  // 8. Security, Confidentiality, and Controlled Sharing
  {
    id: 'doc-8-security',
    groupId: 'H',
    itemNumber: 8,
    title: {
      fa: 'امنیت، محرمانگی و اشتراک کنترل‌شده پرونده (Security & Controlled Sharing)',
      en: 'Security, Confidentiality, and Controlled Sharing',
    },
    summary: {
      fa: 'جداسازی قطعی فضای خصوصی سازمان از پرونده پالایش‌شده، مهار نشت توکن‌ها، ماسک‌گذاری IP و تایید دو مرحله‌ای مدیر.',
      en: 'Strict boundary between Private Workspace and Sanitized Case, token redaction, IP pseudonymization, and admin sign-off.',
    },
    available: true,
    introduction: {
      fa: 'بزرگ‌ترین مانع شرکت‌ها برای کمک گرفتن از متخصصان خارجی، ترس موجه از لو رفتن اسرار، پسوردها و معماری محرمانه است؛ LogBridge این مانع را برطرف می‌سازد.',
      en: 'The primary hurdle preventing organizations from consulting external experts is the fear of credential leaks; LogBridge solves this.',
    },
    definition: {
      fa: 'موتور تفکیک داده دوگانه شامل: ۱) فضای خصوصی (Private Workspace) که لاگ‌های خام، IPهای داخلی، نام سرورها و توکن‌ها در آن حبس می‌ماند ۲) پرونده پالایش‌شده (Sanitized Case) که نسخه‌ای پاکسازی‌شده برای دیدن متخصص است.',
      en: 'Dual-workspace data architecture: 1) Private Workspace isolating raw logs, internal hostnames, and credentials 2) Sanitized Case presenting redacted evidence to specialists.',
    },
    whyExists: {
      fa: 'تضمین می‌کند که متخصص خارجی بدون نیاز به دانستن پسوردهای دیتابیس یا IP سرورهای اصلی سازمان، بتواند خطای فنی را تحلیل کند.',
      en: 'Ensures external specialists can diagnose underlying technical root causes without knowing production database passwords or internal IP topology.',
    },
    problemAddressed: {
      fa: 'پایان دادن به خطرات حقوقی، نشت داده‌های مشتریان (GDPR/PII) و حملات زنجیره تامین ناشی از دسترسی‌های غیرضروری.',
      en: 'Mitigates regulatory PII penalties and supply-chain cyber threats stemming from over-privileged external access.',
    },
    mainComponents: {
      fa: [
        'تشخیص‌دهنده الگوهای حساس (RegEx Pattern Detector برای توکن، رمز، IP)',
        'موتور نام‌گذاری مستعار پایدار (مانند 192.168.1.10 -> [INTERNAL_IP_A])',
        'پیش‌نمایش دو ستونه پرونده خصوصی در برابر پرونده پالایش‌شده',
        'درگاه تایید نهایی انتشار پرونده توسط مدیر ارشد سازمان',
      ],
      en: [
        'Sensitive pattern detector (Regex for tokens, passwords, bearer keys, private IPs)',
        'Deterministic pseudonymization engine (e.g. 192.168.1.10 -> [INTERNAL_IP_A])',
        'Side-by-side preview contrasting Private Workspace with Sanitized Case',
        'Organization Admin explicit approval gateway',
      ],
    },
    howItWorks: {
      fa: 'متن لاگ‌ها و علائم خطا از ماژول پالایش عبور می‌کنند؛ فیلدهای حساس جایگزین می‌شوند؛ پیش‌نمایش به مدیر نشان داده می‌شود و تنها پس از کلیک "تایید انتشار"، پرونده عمومی می‌شود.',
      en: 'Log payloads pass through the redactor; sensitive fields get masked with neutral pseudonyms; admin audits the preview and clicks Approve.',
    },
    stepByStepProcess: {
      fa: [
        'انتخاب رخداد و کلیک روی دکمه درخواست متخصص.',
        'اسکن لاگ‌ها و استخراج خودکار علائم خطا.',
        'ماسک‌گذاری خودکار IPها، توکن‌ها و دامنه‌های محرمانه.',
        'بررسی پیش‌نمایش توسط مدیر سازمان (با نمایش فیلدهای سانسورشده).',
        'تایید نهایی و قرارگیری در تالار فرصت‌های متخصصان.',
      ],
      en: [
        'Triggering expert assistance from incident detail.',
        'Scanning log payloads for sensitive token patterns.',
        'Deterministic pseudonymization of internal IPs and secrets.',
        'Executive auditing of the sanitized preview.',
        'Approval sign-off publishing the brief to verified experts.',
      ],
    },
    inputs: {
      fa: ['شواهد و لاگ‌های خام تیکت رخداد', 'فهرست سیاه الگوهای محرمانه سازمان'],
      en: ['Raw incident log evidence', 'Organizational secret pattern blacklists'],
    },
    processingLogic: {
      fa: ['جایگزینی برگشت‌ناپذیر با مقادیر مستعار (One-Way Sanitization)'],
      en: ['Irreversible one-way replacement using pseudonym tokens'],
    },
    outputs: {
      fa: ['نسخه پالایش‌شده پرونده فنی با تضمین عدم نشت اطلاعات'],
      en: ['Certified sanitized technical case brief with zero credential leakage'],
    },
    relationships: {
      fa: 'محافظ اصلی میان کنسول عملیات داخلی و بازارگاه عمومی متخصصان.',
      en: 'The security moat separating internal operations from the public expert network.',
    },
    realisticExample: {
      fa: 'در لاگ دیتابیس عبارت "postgres://admin:SecretPass2026@10.0.4.15/orders" به صورت "[DB_URI_REDACTED] با خطای قفل تراکنش" پالایش می‌شود.',
      en: 'Raw URI "postgres://admin:SecretPass2026@10.0.4.15/orders" is sanitized to "[DB_URI_REDACTED] with transaction deadlock".',
    },
    implementationApproach: {
      fa: 'نمایش پیش‌نمایش مقایسه‌ای در مدال با هشدارهای امنیتی برجسته.',
      en: 'Side-by-side modal comparison with highlighted redacted token counters.',
    },
    evaluationMethod: {
      fa: 'اطمینان از عدم وجود هرگونه IP خصوصی یا کلید مخفی در پرونده نهایی.',
      en: 'Zero residual private IPs or secret tokens verified in the sanitized payload.',
    },
  },

  // 9. Expert Marketplace and Matching
  {
    id: 'doc-9-expert',
    groupId: 'I',
    itemNumber: 9,
    title: {
      fa: 'بازارگاه و تطبیق نیازمحور متخصصان (Expert Marketplace & Matching)',
      en: 'Expert Marketplace and Matching',
    },
    summary: {
      fa: 'تالار شفاف کشف متخصصان مستقل، پروفایل‌های مهارتی، تطبیق بر اساس تخصص مورد نیاز رخداد و ارسال پروپوزال.',
      en: 'Transparent expert marketplace, verified skill profiles, incident-tailored matching, and proposal bidding.',
    },
    available: true,
    introduction: {
      fa: 'بازارگاه متخصصان LogBridge محیطی متفاوت، سبک و کاربرپسند است که برخلاف کنسول پیچیده مانیتورینگ، بر ارتباط انسانی و همکاری تمرکز دارد.',
      en: 'LogBridge Expert Marketplace offers a clean, user-centric collaboration environment distinct from the high-density operations console.',
    },
    definition: {
      fa: 'محیط تبادل خدمات تخصصی مهندسی که متخصصان مستقل بر اساس مهارت‌های اعتبارسنجی‌شده، نرخ ساعتی و کارنامه‌های کاری، به پرونده‌های رخداد تخصیص داده می‌شوند.',
      en: 'Engineering talent exchange where independent specialists are matched with incident cases based on verified competencies, hourly rates, and track records.',
    },
    whyExists: {
      fa: 'سازمان‌ها برای رفع بحران‌های مقطعی نیاز به سرعت در کشف کارشناس زبده دارند؛ جستجو در کانال‌های سنتی روزها زمان می‌برد.',
      en: 'Resolving outages demands immediate access to niche talent; traditional recruitment and headhunting takes weeks.',
    },
    problemAddressed: {
      fa: 'حذف اتلاف وقت در پیدا کردن فرد مناسب و ایجاد سازوکار شفاف قیمت‌گذاری و ارزیابی پروپوزال.',
      en: 'Eliminates wasted time finding the right skill set while establishing transparent milestone-based bidding.',
    },
    mainComponents: {
      fa: [
        'جستجو و فیلتر متخصصان بر اساس حوزه‌های ۵ گانه و برچسب‌های مهارتی',
        'پروفایل‌های کارشناسی با نمایش پروژه‌های انجام‌شده و امتیاز رضایت',
        'موتور تطبیق خودکار بر اساس نیازمندی‌های پرونده فنی رخداد',
        'سامانه ارسال و پذیرش پروپوزال کاری (Bidding System)',
      ],
      en: [
        'Search & filter engine across the 5 domains and specific skill tags',
        'Specialist profiles with verified completed cases and ratings',
        'Incident-to-expert rule-based matching engine',
        'Bid submission and proposal acceptance workflow',
      ],
    },
    howItWorks: {
      fa: 'سازمان پرونده پالایش‌شده را منتشر می‌کند؛ متخصصان واجد شرایط پروپوزال و نرخ ساعتی ارسال می‌کنند؛ سازمان بهترین گزینه را انتخاب کرده و اتاق همکاری فعال می‌شود.',
      en: 'Sanitized cases are listed; qualified experts submit proposals and rates; the organization accepts the best match to activate the collaboration room.',
    },
    stepByStepProcess: {
      fa: [
        'مشاهده فرصت‌های رخداد در کارتابل متخصص.',
        'ارسال پیشنهاد قیمت و زمان‌بندی توسط متخصص.',
        'بررسی رزومه و امتیاز متخصص در پنل سازمان.',
        'پذیرش پیشنهاد و ایجاد خودکار اتاق همکاری مشترک.',
      ],
      en: [
        'Specialist reviews approved cases in their opportunity board.',
        'Submitting a structured proposal with estimated hours and rate.',
        'Organization evaluates proposal and specialist credentials.',
        'Proposal acceptance spawns the shared collaboration room.',
      ],
    },
    inputs: {
      fa: ['پرونده فنی پالایش‌شده رخداد', 'پروفایل و رزومه متخصصان'],
      en: ['Approved sanitized case brief', 'Registered specialist skill profiles'],
    },
    processingLogic: {
      fa: ['محاسبه درصد تطابق مهارتی (Skill Match Percentage)'],
      en: ['Incident-to-specialist competency match score computation'],
    },
    outputs: {
      fa: ['پروپوزال‌های مدون و قرارداد همکاری فعال'],
      en: ['Structured bids and active collaboration project room'],
    },
    relationships: {
      fa: 'پذیرش پیشنهاد در این بخش مستقیماً اتاق همکاری بخش ۱۱ را ایجاد می‌نماید.',
      en: 'Accepting a proposal directly provisions the collaboration room in Section 11.',
    },
    realisticExample: {
      fa: 'برای رخداد بن‌بست دیتابیس، سه پروپوزال از مهندسان ارشد دریافت می‌شود؛ سازمان پیشنهاد کارشناس با امتیاز ۴.۹ را انتخاب و همکاری آغاز می‌شود.',
      en: 'Three proposals arrive for a database deadlock; the organization picks the top-rated expert (4.9 rating) to start the workspace.',
    },
    implementationApproach: {
      fa: 'بخش مستقل با کارت‌های مدرن، جستجوی بلادرنگ مهارتی و دکمه‌های پذیرش پیشنهاد.',
      en: 'Dedicated user-friendly marketplace interface with live search and proposal actions.',
    },
    evaluationMethod: {
      fa: 'سرعت تطبیق متخصص و میانگین رضایت سازمان از کیفیت مشاوران.',
      en: 'Measured by time-to-match and organization satisfaction ratings.',
    },
  },

  // 10. Target Users and Customer Roles
  {
    id: 'doc-10-roles',
    groupId: 'D',
    itemNumber: 10,
    title: {
      fa: 'کاربران هدف، نقش‌ها و ماتریس دسترسی RBAC (Target Users & Access Roles)',
      en: 'Target Users and Customer Roles (RBAC Matrix)',
    },
    summary: {
      fa: 'تحلیل دقیق ۶ دسته مشتری و ماتریس دسترسی نقش‌محور برای مدیران سازمان، اپراتورهای پنج حوزه و متخصصان مستقل.',
      en: 'Analysis of 6 customer segments and the Role-Based Access Control matrix governing admins, 5 operators, and experts.',
    },
    available: true,
    introduction: {
      fa: 'امنیت واقعی با کنترل دقیق دسترسی‌ها آغاز می‌شود؛ در LogBridge هر کاربر دقیقا همان چیزی را می‌بیند که برای وظیفه‌اش نیاز دارد.',
      en: 'True security begins with precise authorization; in LogBridge, each user accesses only the data required for their operational duty.',
    },
    definition: {
      fa: 'ماتریس حاکمیت نقش‌محور (RBAC) شامل ۷ نقش کاربردی: مدیر ارشد سازمان، اپراتور زیرساخت، اپراتور نرم‌افزار، اپراتور شبکه/امنیت، اپراتور پایگاه داده، اپراتور سخت‌افزار و متخصص مستقل.',
      en: 'Role-Based Access Control (RBAC) matrix governing 7 roles: Organization Admin, Infrastructure Operator, Software Operator, Network Operator, Database Operator, Hardware Operator, and Expert.',
    },
    whyExists: {
      fa: 'تضمین ایزوله‌سازی سازمانی و جلوگیری از دسترسی اپراتورهای یک حوزه به اطلاعات یا اعمال تغییرات در سیاست‌های دامنه‌های دیگر.',
      en: 'Guarantees operational segregation, preventing cross-domain policy tampering or unauthorized data inspection.',
    },
    problemAddressed: {
      fa: 'پایان دادن به دسترسی‌های بی‌رویه (Root/Admin over-privileging) که منشا بسیاری از خطاهای انسانی و نشت اطلاعات است.',
      en: 'Eliminates over-privileged admin access, which is the root cause of human errors and unauthorized data disclosures.',
    },
    mainComponents: {
      fa: [
        'مدیر سازمان (Org Admin): دسترسی کامل به تمام حوزه‌ها، سیاست‌ها، اعضا و تایید انتشار پرونده',
        'اپراتورهای حوزه‌های ۵ گانه: دسترسی کامل به تله‌متری و سیاست‌های حوزه خود و حالت ناظر (Read-Only) در سایر حوزه‌ها',
        'متخصص مستقل (Expert): دسترسی انحصاری به بازارگاه، پرونده‌های پالایش‌شده و اتاق همکاری اختصاصی',
        'سوئیچر نقش در هدر برنامه جهت آزمودن دسترسی‌ها در نمونه آموزشی MVP',
      ],
      en: [
        'Organization Admin: Full operational rights, policy authoring, member management, case sharing approval',
        'Domain Operators: Full rights within their domain, audited read-only mode in other domains',
        'External Expert: Scoped exclusively to the marketplace, sanitized cases, and collaboration rooms',
        'Interactive role switcher in app header demonstrating simulated access control',
      ],
    },
    howItWorks: {
      fa: 'با تغییر نقش کاربر، تمام منوهای ناوبری، منابع مانیتورینگ در دسترس، لاگ‌ها و تیکت‌ها به صورت بلادرنگ مطابق ماتریس فیلتر می‌شوند.',
      en: 'Switching roles dynamically recalculates visible navigation items, accessible monitoring sources, logs, and incidents.',
    },
    stepByStepProcess: {
      fa: [
        'انتخاب نقش از سلکتور بالای صفحه.',
        'اعمال فیلترهای مجوز توسط تابع canAccess در کانتکست برنامه.',
        'محدودسازی داده‌های لاگ و شاخص‌های پایش به دامنه مجاز.',
        'نمایش برچسب وضعیت دامنه (Domain Scope Enforced).',
      ],
      en: [
        'Role selection via header dropdown.',
        'Permission evaluation through the centralized canAccess context.',
        'Domain-level telemetry and incident filtering.',
        'Display of domain scope badges when inspecting secondary areas.',
      ],
    },
    inputs: {
      fa: ['هویت و نقش کاربر لاگین‌شده', 'ماتریس دسترسی پلتفرم'],
      en: ['Authenticated user identity and role assignment', 'Platform RBAC permission table'],
    },
    processingLogic: {
      fa: ['ارزیابی شروط دسترسی به پیشوندهای دامنه‌ای (مانند domain:application)'],
      en: ['Permission validation matching domain prefixes (e.g. domain:application)'],
    },
    outputs: {
      fa: ['نمای شخصی‌سازی‌شده و امن برای هر نقش سازمانی'],
      en: ['Personalized, secure workspace tailored to the active role'],
    },
    relationships: {
      fa: 'قاعده‌گذار کلیه تعاملات کاربر در کنسول عملیات و تالار متخصصان.',
      en: 'Governs all interactive operations across both workspaces.',
    },
    realisticExample: {
      fa: 'یک اپراتور سخت‌افزار تنها شاخص‌های سرور فیزیکی را ویرایش می‌کند و در صورت ورود به بخش فرانت‌اند، با بنر "حالت ناظر (Read-Only)" مواجه می‌شود.',
      en: 'A Hardware Operator can manage server policies; navigating to frontend telemetry displays an "Audited Read-Only" banner.',
    },
    implementationApproach: {
      fa: 'پیاده‌سازی زنده تغییر نقش در هدر با به‌روزرسانی آنی دسترسی‌ها و هشدارهای حاکمیتی.',
      en: 'Interactive role selector with dynamic workspace mutation and audit warnings.',
    },
    evaluationMethod: {
      fa: 'بررسی عدم دسترسی غیرمجاز متخصص به کنسول داخلی سازمان و عدم امکان تایید پرونده توسط اپراتورهای عادی.',
      en: 'Verified with zero unauthorized console access by experts and strict admin approval enforcement.',
    },
  },

  // 11. Product Value Proposition and Differentiation
  {
    id: 'doc-11-value',
    groupId: 'F',
    itemNumber: 11,
    title: {
      fa: 'ارزش پیشنهادی و تمایز رقابتی (Value Proposition & Differentiation)',
      en: 'Product Value Proposition and Differentiation',
    },
    summary: {
      fa: 'هم‌افزایی بی‌نظیر مانیتورینگ متمرکز، پالایش اسرار و شبکه متخصصان؛ چرا این ترکیب ارزشی خلق می‌کند که ابزارهای سنتی قادر به آن نیستند.',
      en: 'Synergy of integrated observability, secret redaction, and on-demand expertise creating unprecedented operational value.',
    },
    available: true,
    introduction: {
      fa: 'تمایز واقعی LogBridge در ادعای اختراع مانیتورینگ یا فریلنسری نیست؛ ارزش بنیادی در «پیوند ناگسستنی» میان کشف خطا و حل امن آن نهفته است.',
      en: 'LogBridge differentiation does not lie in reinventing monitoring or freelancing; it lies in the seamless bridge between fault detection and secure expert resolution.',
    },
    definition: {
      fa: 'ارزش پیشنهادی مرکب (Compound Value Proposition): کاهش ۹۰ درصدی زمان رفع بحران‌های عمیق فنی، حذف کامل ریسک افشای اسرار، و ایجاد پایگاه دانش مستند از راه‌حل‌های تاییدشده.',
      en: 'Compound Value Proposition: 90% reduction in MTTR for deep outages, complete mitigation of credential leaks, and continuous postmortem knowledge archival.',
    },
    whyExists: {
      fa: 'ابزارهای موجود یا فقط رصد می‌کنند (مانند زابیکس/دیتاداگ) یا فقط افراد را معرفی می‌کنند (مانند لینکدین/آپ‌ورک)؛ هیچ ابزاری این دو را در یک مسیر امن ادغام نکرده است.',
      en: 'Existing tools either purely monitor (Zabbix/Datadog) or connect people (LinkedIn/Upwork); none integrate the two securely.',
    },
    problemAddressed: {
      fa: 'حل پارادوکس اشتراک اطلاعات: چگونه می‌توان از مشاور خارجی برای بحران کمک گرفت بدون اینکه دیتابیس یا سرورها به خطر بیفتد؟',
      en: 'Resolves the data-sharing paradox: how to get expert assistance during an outage without exposing production infrastructure.',
    },
    mainComponents: {
      fa: [
        'سازگاری و همزیستی با ابزارهای موجود سازمان (عدم نیاز به دور ریختن سیستم‌های قبلی)',
        'جریان کاری رخدادمحور به جای پیام‌رسانی غیررسمی',
        'تطبیق بلادرنگ بر اساس نیازمندی واقعی لاگ خطا',
        'تبدیل خودکار راه‌حل متخصص به مستند پایگاه دانش سازمان',
      ],
      en: [
        'Coexistence with existing telemetry stacks (no rip-and-replace required)',
        'Incident-anchored collaboration replacing informal chat channels',
        'Real-time specialist matching keyed directly to raw error signatures',
        'Automated conversion of specialist postmortems into persistent runbooks',
      ],
    },
    howItWorks: {
      fa: 'سازمان نیاز به جایگزینی ابزارهایش ندارد؛ وب‌هوک‌ها به LogBridge متصل می‌شوند، لاگ‌های بحرانی فیلتر شده و در صورت نیاز مستقیماً به متخصص ارجاع می‌شوند.',
      en: 'Enterprises retain their stacks; alert webhooks ingest into LogBridge where severe anomalies trigger secure specialist escalation.',
    },
    stepByStepProcess: {
      fa: [
        'اتصال خروجی هشدارهای سیستم‌های موجود به LogBridge.',
        'تحلیل و تجمیع رویدادها در سطحی بالاتر.',
        'فراخوانی تخصص متناسب در زمان رخداد بن‌بست.',
        'افزودن تجربه حاصل از حل بحران به دارایی دانشی سازمان.',
      ],
      en: [
        'Streaming webhook alerts into LogBridge.',
        'Higher-level event correlation and policy evaluation.',
        'Targeted specialist engagement upon internal bottlenecks.',
        'Archiving verified solutions into organizational knowledge capital.',
      ],
    },
    inputs: {
      fa: ['سیگنال‌های مانیتورینگ موجود', 'نیازمندی‌های کسب‌وکار به پایداری سرویس'],
      en: ['Existing monitoring signals', 'Business service continuity requirements'],
    },
    processingLogic: {
      fa: ['محاسبه ارزش اقتصادی حاصل از کاهش زمان قطعی سیستم'],
      en: ['Economic value calculation derived from outage avoidance'],
    },
    outputs: {
      fa: ['پایداری تضمین‌شده سیستم‌های حیاتی سازمان با هزینه بسیار کمتر از استخدام دائم'],
      en: ['Guaranteed system resilience at a fraction of permanent full-time payroll'],
    },
    relationships: {
      fa: 'پاسخ صریح به چرایی استفاده سازمان‌ها از پلتفرم و توجیه سرمایه‌گذاری.',
      en: 'Explicitly addresses why organizations adopt LogBridge over legacy alternatives.',
    },
    realisticExample: {
      fa: 'یک فین‌تک برای خطای رمزنگاری خاص کارت‌های بانکی، نیازی به استخدام سالانه متخصص رمزنگاری ندارد؛ با LogBridge ظرف ۲ ساعت از معمار امنیت مشاوره امن می‌گیرد.',
      en: 'A fintech facing HSM cryptographic exceptions does not hire a full-time cryptographer; via LogBridge they consult an expert for 2 hours securely.',
    },
    implementationApproach: {
      fa: 'ارائه تحلیل‌های تفکیکی و قابلیت شبیه‌سازی ارزش در صفحات مستندات.',
      en: 'Detailed analytical breakdowns with interactive value simulators.',
    },
    evaluationMethod: {
      fa: 'مقایسه شاخص‌های TCO (هزینه کل مالکیت) پیش و پس از استقرار پلتفرم.',
      en: 'Benchmarked via Total Cost of Ownership (TCO) comparisons.',
    },
  },

  // 12. Business Model and Revenue Model
  {
    id: 'doc-12-business',
    groupId: 'J',
    itemNumber: 12,
    title: {
      fa: 'مدل کسب‌وکار و جریان‌های درآمدی (Business & Revenue Model)',
      en: 'Business Model and Revenue Model',
    },
    summary: {
      fa: 'تحلیل ۵ جریان درآمدی پایدار: اشتراک ماهانه سازمان‌ها، کارمزد بازارگاه متخصصان، فروش الگوهای آماده سیاست، و خدمات سازمانی.',
      en: 'Analysis of 5 sustainable revenue streams: organizational SaaS subscriptions, marketplace commissions, policy templates, and enterprise services.',
    },
    available: true,
    introduction: {
      fa: 'مدل درآمدی LogBridge بر پایه خلق ارزش متقابل برای سازمان‌ها و متخصصان مستقل طراحی شده و قابلیت گسترش پایدار دارد.',
      en: 'LogBridge revenue model is structured around mutual value creation for organizations and independent specialists, ensuring long-term financial viability.',
    },
    definition: {
      fa: 'مدل درآمدی ترکیبی (Hybrid B2B SaaS + Marketplace Take-Rate): دریافت حق اشتراک ماهیانه برای کنسول عملیات، کارمزد تراکنش از پروژه‌های متخصصان، و ارائه خدمات سازمانی و قالب‌های آماده سیاست‌گذاری.',
      en: 'Hybrid B2B SaaS + Marketplace Take-Rate model: monthly recurring subscriptions for operations consoles, transaction commission on expert billings, and enterprise policy marketplace tiers.',
    },
    whyExists: {
      fa: 'تضمین پایداری مالی پلتفرم و توجیه اقتصادی آن برای دانشگاه، سرمایه‌گذاران و ذی‌نفعان پروژه.',
      en: 'Ensures long-term financial sustainability and justifies the platform thesis for academic evaluators and venture partners.',
    },
    problemAddressed: {
      fa: 'ایجاد تعادل میان هزینه منصفانه برای سازمان‌های کوچک و درآمد جذاب و بدون دغدغه وصول برای متخصصان برتر.',
      en: 'Balances affordable predictability for SMBs with attractive, guaranteed payment mechanisms for top-tier specialists.',
    },
    mainComponents: {
      fa: [
        'جریان ۱: اشتراک ماهیانه مانیتورینگ سازمان (Tiered SaaS: Starter, Pro, Enterprise)',
        'جریان ۲: کارمزد از حق‌الزحمه پروژه‌های متخصصان (۱۰ الی ۱۵ درصد کارمزد امن)',
        'جریان ۳: فروش الگوهای تخصصی سیاست‌ها و ران‌بوک‌های پیشرفته در تالار قوانین',
        'جریان ۴: خدمات استقرار محلی (On-Premises Dedicated Deployments) برای صنایع حساس',
        'جریان ۵: قراردادهای پشتیبانی ویژه با تضمین SLA برای سازمان‌های حیاتی',
      ],
      en: [
        'Stream 1: Monthly SaaS subscriptions for organizational monitoring (Tiered)',
        'Stream 2: Marketplace transaction take-rate (10-15% on expert project billings)',
        'Stream 3: Premium policy templates and automated runbook marketplace',
        'Stream 4: On-premises private cloud dedicated deployments for regulated banks',
        'Stream 5: Enterprise 24/7 SLA escalation support contracts',
      ],
    },
    howItWorks: {
      fa: 'سازمان اشتراک پایه را برای پایش سیستم‌های خود می‌پردازد؛ در زمان استفاده از متخصص، کارمزد به صورت خودکار از فاکتور پروژه کسر می‌شود.',
      en: 'Enterprises pay recurring platform fees for telemetry and policy enforcement; when hiring specialists, platform commission is settled automatically.',
    },
    stepByStepProcess: {
      fa: [
        'ثبت‌نام سازمان و انتخاب بسته اشتراک مانیتورینگ.',
        'استفاده مستمر از پایش، لاگ و اتوماسیون سیاست‌ها.',
        'در صورت استخدام متخصص: پرداخت هزینه به حساب امانی پلتفرم.',
        'تایید انجام کار توسط کارفرما و تسویه حساب با متخصص پس از کسر کارمزد.',
      ],
      en: [
        'Tenant registration and SaaS tier subscription selection.',
        'Continuous utilization of monitoring and automated policies.',
        'Upon hiring an expert: Escrow payment deposit.',
        'Project sign-off and milestone payout minus platform commission.',
      ],
    },
    inputs: {
      fa: ['تعداد منابع متصل سازمان', 'حجم پروژه‌های انجام‌شده در بازارگاه'],
      en: ['Number of connected tenant nodes', 'Total Gross Merchandise Value (GMV) of expert cases'],
    },
    processingLogic: {
      fa: ['محاسبه کارمزد درصدی و صدور صورت‌حساب ادواری خودکار'],
      en: ['Automated commission deduction and recurring billing reconciliation'],
    },
    outputs: {
      fa: ['درآمد پایدار تکرارشونده (ARR) و گزارش‌های مالی شفاف'],
      en: ['Predictable Annual Recurring Revenue (ARR) and audit invoices'],
    },
    relationships: {
      fa: 'تضمین‌کننده بقای اقتصادی تمام اجزای فنی و عملیاتی پلتفرم.',
      en: 'Financial backbone supporting the engineering infrastructure of the platform.',
    },
    realisticExample: {
      fa: 'یک سازمان ماهانه ۳ میلیون تومان برای کنسول مانیتورینگ پرداخت می‌کند و برای حل یک بحران دیتابیس، ۱۰ میلیون تومان به متخصص پرداخت کرده که ۱۵٪ آن سهم پلتفرم است.',
      en: 'A company pays $150/mo for the operations console and hires an Oracle DBA for $1,000 to resolve an outage; LogBridge collects a 15% ($150) commission.',
    },
    implementationApproach: {
      fa: 'تشریح مدل و نمایش جدول سطوح قیمت‌گذاری در مستندات.',
      en: 'Documented pricing tier matrices with transparent distinction between simulated and production models.',
    },
    evaluationMethod: {
      fa: 'محاسبه شاخص‌های مالی LTV (ارزش طول عمر مشتری) و CAC (هزینه جذب مشتری).',
      en: 'Evaluated through SaaS unit economics: Customer Lifetime Value (LTV) to CAC ratio.',
    },
  },

  // 13. Market and Competitor Analysis
  {
    id: 'doc-13-market',
    groupId: 'B',
    itemNumber: 13,
    title: {
      fa: 'تحلیل بازار و مقایسه تفکیکی رقبا (Market & Competitor Analysis)',
      en: 'Market and Competitor Analysis',
    },
    summary: {
      fa: 'دسته‌بندی دقیق رقبای مانیتورینگ، ابزارهای مدیریت رخداد، بازارگاه‌های فریلنسری و شرکت‌های سنتی پشتیبانی IT.',
      en: 'Structured classification of monitoring suites, incident platforms, freelancer exchanges, and traditional IT consultancies.',
    },
    available: true,
    introduction: {
      fa: 'شناخت دقیق بازار نشان می‌دهد که چرا سازمان‌ها با وجود استفاده از زابیکس یا سنتری، همچنان در زمان بحران‌های عمیق مستاصل می‌مانند.',
      en: 'Accurate market analysis highlights why organizations utilizing Zabbix or Sentry remain stranded during complex low-level outages.',
    },
    definition: {
      fa: 'تحلیل مقایسه‌ای چهار گروه رقیب در بازار: ۱) سامانه‌های مانیتورینگ (Zabbix, Datadog) ۲) پلتفرم‌های مدیریت رخداد (PagerDuty) ۳) بازارگاه‌های فریلنسری (Upwork, پونیشا) ۴) شرکت‌های سنتی پیمانکاری IT.',
      en: 'Comparative positioning across four market sectors: 1) Observability suites (Zabbix, Datadog) 2) Incident dispatchers (PagerDuty) 3) Freelancer marketplaces (Upwork, Ponisha) 4) Traditional IT Managed Service Providers.',
    },
    whyExists: {
      fa: 'اثبات این موضوع که LogBridge قصد رقابت منفی یا حذف ابزارهای موجود را ندارد، بلکه حلقه‌های مفقوده زنجیره ارزش را به هم متصل می‌سازد.',
      en: 'Demonstrates that LogBridge does not attempt to displace existing tools, but rather binds missing links in the enterprise value chain.',
    },
    problemAddressed: {
      fa: 'رفع کمبودهای ذاتی هر یک از ۴ گروه موجود: ابزارهای مانیتورینگ متخصص ندارند و بازارگاه‌های فریلنسری فاقد درک فنی و پالایش محرمانگی هستند.',
      en: 'Addresses structural flaws: observability suites lack talent, while freelance boards lack telemetry context and secret redaction.',
    },
    mainComponents: {
      fa: [
        'جدول ماتریس مقایسه ویژگی‌های کلیدی در برابر ۴ رده رقیب',
        'تحلیل موانع ورود و مزیت دفاع‌پذیر (Moat) پلتفرم LogBridge',
        'بررسی وضعیت بازار ایران و خاورمیانه در حوزه خدمات امنیت و عملیات IT',
      ],
      en: [
        'Feature comparison matrix contrasting the 4 competitor categories',
        'LogBridge defensible moat analysis (Redaction + Incident Telemetry context)',
        'Regional market dynamics for secure IT operations and specialized talent',
      ],
    },
    howItWorks: {
      fa: 'ارائه جدول ماتریسی شفاف که نشان می‌دهد چگونه LogBridge با ادغام مانیتورینگ و فیلتر محرمانگی، در نقطه تلاقی منحصر‌به‌فردی قرار می‌گیرد.',
      en: 'Demonstrating via comparison matrices how LogBridge occupies an uncontested niche at the intersection of observability and secure talent collaboration.',
    },
    stepByStepProcess: {
      fa: [
        'شناسایی نیازهای پوشش‌داده‌نشده توسط ابزارهای فعلی سازمان.',
        'مقایسه عملکردی در شاخص‌های سرعت، امنیت، هزینه و دسترسی به خبره.',
        'تعیین جایگاه رقابتی LogBridge به عنوان پلتفرم مکمل و توانمندساز.',
      ],
      en: [
        'Identifying unmet enterprise requirements in current toolchains.',
        'Benchmarking on speed, confidentiality, TCO, and talent access.',
        'Positioning LogBridge as a complementary, enabling orchestrator.',
      ],
    },
    inputs: {
      fa: ['مشخصات ابزارهای مانیتورینگ مطرح دنیا', 'شرایط قراردادهای سنتی پشتیبانی شبکه و سرور'],
      en: ['Feature specs of leading observability suites', 'Traditional IT outsourcing SLA terms'],
    },
    processingLogic: {
      fa: ['تحلیل شکاف بازار (Market Gap Analysis) و اعتبارسنجی فرضیات رقابتی'],
      en: ['Market Gap Analysis and verified competitive positioning logic'],
    },
    outputs: {
      fa: ['ماتریس شفاف تمایز رقابتی برای ارزیابی سرمایه‌گذاران و اساتید دانشگاه'],
      en: ['Comprehensive competitive matrix for academic and investor evaluation'],
    },
    relationships: {
      fa: 'تکمیل‌کننده بخش‌های ۲ (مسئله)، ۱۱ (ارزش پیشنهادی) و ۱۲ (مدل کسب‌وکار).',
      en: 'Complements Section 2 (Problem), Section 11 (Value Proposition), and Section 12 (Business Model).',
    },
    realisticExample: {
      fa: 'یک سازمان با دیتاداگ قطعی سرور را می‌فهمد اما دیتاداگ فردی برای حل آن ندارد؛ با شرکت پیمانکار تماس می‌گیرد که فردا کارشناس اعزام کند؛ با LogBridge ظرف ۳۰ دقیقه مشکل حل می‌شود.',
      en: 'An enterprise detects an outage via Datadog, but Datadog cannot fix it; traditional MSPs take 24 hours to dispatch; LogBridge resolves it within 30 minutes.',
    },
    implementationApproach: {
      fa: 'جداول مقایسه‌ای جامع در مستندات با دسته‌بندی موضوعی و اجتناب از ادعاهای اغراق‌آمیز.',
      en: 'Detailed comparison tables with objective, factual capability demarcations.',
    },
    evaluationMethod: {
      fa: 'بررسی دقت تمایزها و قابلیت دفاع از موضع رقابتی پلتفرم در جلسه داوری.',
      en: 'Audited against factual accuracy during university defense.',
    },
  },

  // 14. MVP Scope and Development Boundaries
  {
    id: 'doc-14-mvp',
    groupId: 'I',
    itemNumber: 14,
    title: {
      fa: 'محدوده نمونه اولیه MVP و مرزهای توسعه (MVP Scope & Development Boundaries)',
      en: 'MVP Scope and Development Boundaries',
    },
    summary: {
      fa: 'مرزبندی شفاف میان قابلیت‌های پیاده‌سازی‌شده فاز ۱، موارد شبیه‌سازی‌شده و نقشه راه توسعه‌های آتی.',
      en: 'Explicit demarcation between functional Phase 1 features, simulated demo components, and future production roadmap.',
    },
    available: true,
    introduction: {
      fa: 'صداقت علمی و مهندسی حکم می‌کند که مرزهای دقیق نمونه اولیه از ادعاهای تولید نهایی به طور شفاف تفکیک شوند.',
      en: 'Engineering integrity requires rigorous separation of functional MVP prototypes from future enterprise-scale integrations.',
    },
    definition: {
      fa: 'سند تفکیک محدوده پروژه فاز ۱ شامل: ۱) ویژگی‌های کاملاً عملیاتی و تعاملی ۲) سازوکارهای شبیه‌سازی‌شده آزمایشی ۳) قابلیت‌های متعلق به فازهای آتی و نقشه راه آینده.',
      en: 'Phase 1 boundary specification detailing: 1) Fully interactive and implemented features 2) Simulated demo mechanisms 3) Future enterprise integrations and roadmap.',
    },
    whyExists: {
      fa: 'تضمین اینکه ارزیاب دانشگاهی یا کاربر به وضوح بداند چه بخش‌هایی در این نسخه کار می‌کند و چه بخش‌هایی برای پرهیز از آسیب به سرورهای واقعی شبیه‌سازی شده است.',
      en: 'Ensures evaluators understand that simulated streaming protects real servers while fully demonstrating the architectural workflow.',
    },
    problemAddressed: {
      fa: 'جلوگیری از ادعاهای غیرواقعی درباره اتصال به اینترنت زنده یا اجرای کدهای مخرب روی زیرساخت مشتری در محیط تست.',
      en: 'Prevents misleading claims about live infrastructure access or privileged remote execution in educational demo environments.',
    },
    mainComponents: {
      fa: [
        'بخش‌های تعاملی پیاده‌سازی‌شده: انیمیشن ۳بعدی هسته لاگ، ۵ دامنه مانیتورینگ، کاوشگر لاگ، موتور سیاست‌ها، تریاژ رخداد، پالایش اسرار و بازارگاه متخصصان',
        'بخش‌های شبیه‌سازی‌شده ایمن: ژنراتور تزریق لاگ بلادرنگ، اکشن‌های اصلاحی سیاست‌ها، احراز هویت نقش‌ها و پیشنهادهای متقابل متخصصان',
        'نقشه راه آینده: ایجنت زنده کرنل eBPF، قرارداد هوشمند امانی بر بلاکچین، و کتابچه‌های خودکار ریشه‌یابی با هوش مصنوعی',
      ],
      en: [
        'Implemented interactive features: 3D Log Animation, 5 domains, live log terminal, policy triggers, incident triage, secret redaction, and expert marketplace',
        'Simulated demo components: In-memory live log generator, non-destructive policy actions, local RBAC, and simulated bids',
        'Future roadmap: eBPF kernel telemetry agents, decentralized escrow contracts, and AI-powered root-cause runbooks',
      ],
    },
    howItWorks: {
      fa: 'کاربر تمام گردش کار واقعی را تجربه می‌کند؛ تغییرات در حافظه محلی ذخیره می‌شوند و تمام برچسب‌های شبیه‌سازی با وضوح بالا نمایش داده می‌شوند.',
      en: 'Users experience the authentic end-to-end workflow; state persists locally in browser storage with prominent demonstration indicators.',
    },
    stepByStepProcess: {
      fa: [
        'آزمودن سوئیچر نقش‌ها و دامنه‌ها در کنسول عملیات.',
        'مشاهده استریم زنده لاگ و تست شبیه‌سازی ماشه سیاست‌ها.',
        'تست فرآیند درخواست متخصص و مشاهده سانسور اطلاعات.',
        'بررسی مستندات تفصیلی در لایه تحلیل کسب‌وکار.',
      ],
      en: [
        'Testing role and domain switchers in the operations console.',
        'Observing live log streams and triggering policy simulations.',
        'Testing expert dispatch with side-by-side redaction previews.',
        'Reviewing in-depth documentation specifications.',
      ],
    },
    inputs: {
      fa: ['تعریف اهداف و فازبندی پروژه دانشگاهی تجارت الکترونیک'],
      en: ['Academic e-commerce project scope criteria and phase boundaries'],
    },
    processingLogic: {
      fa: ['جداسازی منطقی ماژول‌های نمایشی از استقرار سازمانی'],
      en: ['Logical demarcation between demonstrative and enterprise-grade layers'],
    },
    outputs: {
      fa: ['نمونه کارآمد، پایدار و قابل دفاع در روز ارائه پروژه'],
      en: ['Robust, responsive, and academically defensible MVP presentation'],
    },
    relationships: {
      fa: 'تثبیت‌کننده اعتبار علمی و مرزهای عملکردی کل پروژه LogBridge.',
      en: 'Validates the academic credibility and operational integrity of the entire project.',
    },
    realisticExample: {
      fa: 'هنگام اجرای دکمه "تست شبیه‌سازی ماشه"، نوتیفیکیشن با برچسب "اقدام شبیه‌سازی‌شده" نمایش داده می‌شود تا کاربر بداند سرور واقعی ری‌استارت نشده است.',
      en: 'Clicking "Simulate Trigger" displays a "Simulated action executed" toast, reassuring the user that no physical server is restarted.',
    },
    implementationApproach: {
      fa: 'شفافیت کامل در متن تمام صفحات و دکمه بازنشانی شبیه‌ساز (Reset Simulator).',
      en: 'Prominent transparency banners and an accessible Reset Simulator control.',
    },
    evaluationMethod: {
      fa: 'پوشش ۱۰۰ درصدی تمام معیارهای درخواست‌شده در سند پروژه دانشگاهی.',
      en: '100% compliance with university project specifications and rubrics.',
    },
  },
];
