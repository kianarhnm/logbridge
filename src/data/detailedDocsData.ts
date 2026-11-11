/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DetailedDocumentationItem } from '../types';

export const DETAILED_DOCS_COLLECTION: Record<string, DetailedDocumentationItem> = {
  // ==========================================
  // SECTION 2: 6 OPERATIONAL DIFFICULTIES
  // ==========================================
  'diff-1': {
    id: 'diff-1',
    title: {
      fa: 'محدودیت تخصص فنی داخلی در مواجهه با خطاهای عمیق',
      en: 'Limited Internal Technical Expertise in Deep Outages',
    },
    subtitle: {
      fa: 'عدم توجیه یا دسترسی سازمان‌های متوسط به متخصصان ارشد در تمامی زیرشاخه‌ها',
      en: 'Infeasibility for mid-sized firms to retain senior specialists across all domains',
    },
    badge: {
      fa: 'فرض پژوهشی • تایید میدانی',
      en: 'Hypothesis • Field Verified',
      type: 'validation',
    },
    definition: {
      fa: 'ناتوانی تیم‌های فنی عمومی شرکت‌های متوسط در ریشه‌یابی و حل خطاهای پیچیده و سطح پایین (Low-level) نظیر بن‌بست تراکنش‌های دیتابیس، تخریب ایندکس‌ها، نشت حافظه یا خطاهای خاص کرنل لینوکس.',
      en: 'The inability of generalist internal tech teams in mid-sized firms to isolate and resolve low-level technical disruptions like PostgreSQL deadlocks, kernel panics, or memory leaks.',
    },
    purpose: {
      fa: 'این چالش نقطه شروع توجیه اقتصادی پلتفرم است و اثبات می‌کند چرا یک شرکت ۲۰ تا ۱۰۰ نفره نمی‌تواند برای هر فناوری یک معمار برجسته تمام‌وقت داشته باشد.',
      en: 'Acts as the primary economic justification for the platform, demonstrating why a 20-100 employee company cannot retain full-time principal architects for every technology stack.',
    },
    problemAddressed: {
      fa: 'جلوگیری از تلاش‌های حدسی و آزمون‌وخطای تیم داخلی که به تخریب بیشتر پایگاه داده یا طولانی شدن زمان قطعی سرویس منجر می‌شود.',
      en: 'Prevents counterproductive trial-and-error by generalist teams that risks corrupting production databases or extending service downtime.',
    },
    components: {
      fa: [
        'موتور طبقه‌بندی تخصصی رخداد (دیتابیس، زیرساخت، شبکه، امنیت)',
        'ماتریس ارزیابی عمق تخصص مورد نیاز (Tier 1 Support تا Principal Architect)',
        'نمایه مهارت‌های کمیاب مورد نیاز در لحظه حادثه',
      ],
      en: [
        'Incident domain classifier (Database, Infrastructure, Network, Security)',
        'Expertise tier evaluation matrix (Tier 1 Support up to Principal Architect)',
        'Rare niche skill profiles matched dynamically to the outage symptom',
      ],
    },
    workflow: {
      fa: [
        'ثبت علائم و لاگ‌های خطا توسط مدیر فنی سازمان',
        'تطبیق خودکار دسته‌بندی با بانک تخصص‌های مورد نیاز',
        'تشخیص این که آیا مسئله با راه‌حل‌های داخلی قابل حل است یا نیازمند مشاور ارشد بیرونی است',
        'ارائه خلاصه صلاحیت‌های لازم جهت معرفی متخصص متناسب',
      ],
      en: [
        'Technical lead inputs outage symptoms and diagnostic logs',
        'Domain classifier maps symptoms to required rare skillsets',
        'Automated triage assesses if internal workarounds suffice or external advisory is mandatory',
        'Generates qualification criteria for expert matchmaking',
      ],
    },
    inputs: {
      fa: ['پیام‌های خطای سیستم', 'لاگ‌های استک تریس (Stack Traces)', 'فهرست مهارت‌های پرسنل داخلی'],
      en: ['System error strings', 'Stack trace logs', 'Internal team skill matrix'],
    },
    processing: {
      fa: [
        'تحلیل کلمات کلیدی خطا و تطبیق با تاکسونومی مهندسی نرم‌افزار',
        'محاسبه درجه سختی حادثه بر مبنای سوابق مشابه',
      ],
      en: [
        'Keyword extraction and taxonomy mapping across software engineering domains',
        'Incident complexity scoring against historical incident benchmarks',
      ],
    },
    outputs: {
      fa: ['شناسنامه فنی رخداد', 'تعیین سطح ارشدیت لازم برای کارشناس حل مسئله', 'توصیه‌های تریاژ اولیه'],
      en: ['Technical incident passport', 'Required seniority tier specification', 'Immediate triage guidelines'],
    },
    implementationApproach: {
      fa: 'پیاده‌سازی یک کاتالوگ طبقه‌بندی سلسله‌مراتبی حوادث همراه با فرم استاندارد سناریوی SC-01 در سمت کلاینت با اعتبارسنجی تایپ‌اسکریپت.',
      en: 'Implemented via a hierarchical incident taxonomy catalog paired with the SC-01 client intake form with strict TypeScript validation.',
    },
    executionProcess: {
      fa: 'مدیر فناوری در مواجهه با قطعی، به جای تماس‌های سردرگم، فرم ساختاریافته را پر کرده و پلتفرم نیازمندی تخصصی دقیق را مشخص می‌کند.',
      en: 'During an outage, the IT Lead fills out the structured intake form instead of making frantic phone calls, immediately clarifying the exact domain required.',
    },
    relationships: {
      fa: 'با مؤلفه تریاژ حادثه (SC-01) و لایه ذخیره‌سازی پرونده‌های فنی تعامل مستقیم دارد.',
      en: 'Interacts directly with the Incident Intake Controller (SC-01) and the Initial Data Layer.',
    },
    requirements: {
      fa: ['مشخص بودن عنوان و سیستم متأثر', 'شرح حداقل ۱۵ کاراکتری از علائم', 'دسترسی مرورگر به پلتفرم'],
      en: ['Defined title and affected component', 'Minimum 15-character symptom log', 'Browser access to platform UI'],
    },
    validation: {
      fa: 'آزمون موفق ثبت تیکت با دسته‌بندی‌های مختلف (PostgreSQL, Nginx, Kubernetes) در محیط MVP فاز ۱.',
      en: 'Successful validation through testing multi-category incident submissions in the Phase 1 MVP workspace.',
    },
    currentStatus: {
      fa: 'پیاده‌سازی‌شده در فاز ۱ در قالب سناریوی SC-01 و کاتالوگ دسته‌بندی‌های ۸ گانه.',
      en: 'Fully implemented in Phase 1 via Scenario SC-01 and the 8-category domain taxonomy.',
    },
  },

  'diff-2': {
    id: 'diff-2',
    title: {
      fa: 'دشواری یافتن متخصص بیرونی مطمئن در لحظات بحران',
      en: 'Difficulty Finding Qualified External Experts During Outages',
    },
    subtitle: {
      fa: 'فقدان کانال دسترسی سریع و اعتبارسنجی‌شده در ساعات خارج از وقت اداری',
      en: 'Lack of rapid, pre-vetted access channels during off-hours and midnight incidents',
    },
    badge: {
      fa: 'فرض پژوهشی • نیازمند اعتبارسنجی',
      en: 'Hypothesis • Field Validation',
      type: 'validation',
    },
    definition: {
      fa: 'فرآیند طاقت‌فرسا، پرریسک و اتکای تصادفی به گروه‌های چت یا تماس‌های تلفنی شخصی برای پیدا کردن فردی که ادعای تسلط بر زیرساخت آسیب‌دیده را دارد.',
      en: 'The chaotic, slow reliance on informal chat groups or personal Rolodexes to locate an engineer claiming proficiency in the failing system.',
    },
    purpose: {
      fa: 'اثبات لزوم وجود یک شبکه از پیش ارزیابی‌شده (Pre-vetted Expert Network) با توافق‌نامه‌های سطح دسترسی (SLA) مشخص.',
      en: 'Justifies the necessity of a pre-vetted, on-demand expert network with binding availability SLAs.',
    },
    problemAddressed: {
      fa: 'کاهش زمان کشف متخصص از چندین ساعت یا روز به چند دقیقه در شرایط اضطراری سازمان.',
      en: 'Reduces expert discovery latency from several hours or days to minutes during operational emergencies.',
    },
    components: {
      fa: [
        'پروفایل‌های تأیید هویت و تخصص مهندسان ارشد',
        'نظام ارزیابی سوابق فنی و آزمون‌های سنجش مهارت عملی',
        'موتور تطبیق متادیتا بر اساس برچسب‌های فناوری رخداد',
      ],
      en: [
        'Verified expert credential and competency repositories',
        'Technical assessment and real-world troubleshooting verification',
        'Metadata matching engine pairing incident tags with engineer track records',
      ],
    },
    workflow: {
      fa: [
        'ارسال برچسب‌های حادثه به موتور انطباق',
        'فیلتر کردن کارشناسانی که دارای صلاحیت رسمی در پشته نرم‌افزاری مربوطه هستند',
        'بررسی وضعیت آنلاین بودن و آمادگی پذیرش ماموریت اضطراری',
        'ارسال دعوت‌نامه بدون افشای هویت سازمان متقاضی',
      ],
      en: [
        'Incident tags dispatched to matching service',
        'Filters specialists with certified tenure on matching stacks',
        'Pings available on-call engineers for emergency response',
        'Transmits invitation without revealing requester identity',
      ],
    },
    inputs: {
      fa: ['پشته فناوری حادثه (مانند Redis Cluster, Kafka)', 'درجه فوریت (P1 تا P4)', 'زبان و منطقه زمانی'],
      en: ['Incident tech stack (e.g. Redis Cluster, Kafka)', 'Severity level (P1 to P4)', 'Language & timezone'],
    },
    processing: {
      fa: [
        'امتیازدهی ترکیبی بر اساس مهارت تخصصی، امتیاز مأموریت‌های پیشین و سرعت پاسخگویی',
      ],
      en: [
        'Multi-factor scoring based on stack proficiency, past resolution ratings, and response latency',
      ],
    },
    outputs: {
      fa: ['لیست کوتاه ۳ کارشناس برتر', 'برآورد زمان ورود به جلسه امن همکاری'],
      en: ['Shortlist of top 3 vetted specialists', 'Estimated time-to-session arrival'],
    },
    implementationApproach: {
      fa: 'در فاز ۱ به صورت مفهومی در معماری و گردش کار مدل‌سازی شده؛ در فاز ۳ در قالب ماژول تطبیق و بازارچه پیاده‌سازی خواهد شد.',
      en: 'Modeled conceptually in Phase 1 architecture and workflow diagrams; slated for full implementation in Phase 3.',
    },
    executionProcess: {
      fa: 'مدیر IT به محض ثبت رخداد گزینه‌های معتبر را مشاهده کرده و نیازی به جستجو در لینکدین یا کانال‌های تلگرام نخواهد داشت.',
      en: 'Upon incident triage, the IT Lead immediately receives pre-vetted recommendations without resorting to random networking channels.',
    },
    relationships: {
      fa: 'دریافت‌کننده تگ‌های فنی از ماژول تریاژ حادثه و متصل به درگاه امانت‌داری مالی (Escrow).',
      en: 'Receives technical tags from Incident Triage and connects with the Escrow Payment Gateway.',
    },
    requirements: {
      fa: ['بانک اطلاعاتی کارشناسان تأییدصلاحیت‌شده', 'قرارداد محرمانگی اولیه امضا شده توسط متخصصان'],
      en: ['Vetted expert database', 'Standardized master NDA signed by all participating specialists'],
    },
    validation: {
      fa: 'نظرسنجی میدانی از ۲۰ مدیر IT درباره میانگین زمان پیدا کردن مشاور خارجی در بحران‌های واقعی.',
      en: 'Empirical survey with 20 IT managers measuring average discovery time for crisis consultants.',
    },
    currentStatus: {
      fa: 'طراحی مفهومی در فاز ۱؛ پیاده‌سازی هسته تطبیق به فاز ۳ موکول شده است.',
      en: 'Conceptual design in Phase 1; algorithmic matching deferred to Phase 3.',
    },
  },

  'diff-5': {
    id: 'diff-5',
    title: {
      fa: 'ریسک افشای ناخواسته داده‌های محرمانه و اعتبارسنجی',
      en: 'Risk of Inadvertent Disclosure of Sensitive Infrastructure Data',
    },
    subtitle: {
      fa: 'ترس سازمان‌ها از نشت پسوردها، کلیدهای API و ساختار شبکه هنگام کمک خواستن',
      en: 'Organizational hesitation to share logs due to passwords, API tokens, and internal IPs',
    },
    badge: {
      fa: 'راه‌حل محوری • هسته ارزشی',
      en: 'Core Solution • Value Anchor',
      type: 'implemented',
    },
    definition: {
      fa: 'خطر امنیتی ناشی از ارسال مستقیم فایل‌های پیکربندی (config.json)، گزارش‌های استک‌تریس و دامپ‌های حافظه حاوی رشته‌های اتصال (Connection Strings)، اطلاعات مشتریان و آدرس‌های خصوصی IP به افراد برون‌سازمانی.',
      en: 'Security risk stemming from raw transfer of configs, stack traces, and crash dumps containing credentials, API tokens, customer PII, and private IPs to external third parties.',
    },
    purpose: {
      fa: 'فراهم‌سازی لایه حائل و فیلتر پالایش‌کننده که امکان همکاری فنی با مشاور بیرونی را بدون نقض حریم خصوصی و امنیت سایبری سازمان میسر می‌سازد.',
      en: 'Provides a protective buffer that enables technical debugging with external consultants without compromising cybersecurity or compliance mandates.',
    },
    problemAddressed: {
      fa: 'از میان برداشتن بزرگ‌ترین مانع سازمان‌های ایرانی و بین‌المللی برای برون‌سپاری حوادث فنی: ترس منطقی از افشای اسرار تجاری.',
      en: 'Eliminates the single greatest barrier to technical incident outsourcing: justifiable fear of confidential data exposure.',
    },
    components: {
      fa: [
        'موتور پالایش عبارات باقاعده (Regex Token Redaction Engine)',
        'ماژول هشینگ و جایگزینی برگشت‌پذیر متغیرها (Token Anonymizer)',
        'پنل تایید پیش‌نمایش توسط مدیر سازمان قبل از اشتراک‌گذاری',
      ],
      en: [
        'Regex token redaction pattern engine',
        'Pseudonymization and token mapping controller',
        'Mandatory client preview & approval gate before data leaves organizational control',
      ],
    },
    workflow: {
      fa: [
        'ورود لاگ‌های خام یا متن خطای فنی توسط کاربر',
        'اسکن در مرورگر برای کشف الگوهای رمزی (پسوردها، توکن JWT، کلید AWS، آدرس‌های 192.168.x.x)',
        'جایگزینی مقادیر حساس با برچسب‌های عمومی نظیر [REDACTED_SECRET_01]',
        'نمایش تفکیکی داده‌های خصوصی در برابر داده‌های مجاز برای اشتراک',
        'ارسال فقط نسخه پالایش‌شده به محیط مشاور',
      ],
      en: [
        'User pastes raw stack trace or log dump',
        'Client-side parser scans for secrets (passwords, JWTs, API keys, private CIDR IPs)',
        'Replaces identified tokens with generic placeholders (e.g. [REDACTED_SECRET_01])',
        'Displays side-by-side diff between private originals and shareable payloads',
        'Transmits strictly sanitized data to external collaboration workspace',
      ],
    },
    inputs: {
      fa: ['متن خام لاگ حادثه', 'فایل‌های پیکربندی سیستم', 'قوانین خط‌مشی‌های حریم خصوصی سازمان'],
      en: ['Raw incident text log', 'System configuration excerpts', 'Enterprise privacy policy rulesets'],
    },
    processing: {
      fa: [
        'اسکن بر مبنای عبارات منظم (Regular Expressions) از پیش تعریف‌شده',
        'تشخیص خودکار کلیدواژه‌های password=, token=, bearer, api_key=',
        'نگاشت کلیدها در جدول نگاشت موقت ایزوله محلی',
      ],
      en: [
        'High-performance client-side regex parsing against security signature dictionaries',
        'Automatic detection of password=, token=, Bearer, Authorization headers',
        'Transient in-memory mapping preserving operational context for debugging',
      ],
    },
    outputs: {
      fa: ['متن لاگ پالایش‌شده و امن', 'گزارش توکن‌های ماسک‌شده', 'امکان اشتراک امن با مشاور'],
      en: ['Sanitized, debuggable log artifact', 'Redaction audit report', 'Secure external export payload'],
    },
    implementationApproach: {
      fa: 'در فاز ۱ در مدل مصورسازی سه‌بعدی گردش کار و تفکیک مفهومی داده‌های محرمانه پیاده‌سازی شده و فرم ثبت SC-01 ساختار ایزوله آن را آماده کرده است.',
      en: 'Implemented in Phase 1 via the 3D workflow privacy demarcation view and isolated client-side storage architecture.',
    },
    executionProcess: {
      fa: 'متخصص بیرونی لاگ‌ها را به صورت کامل و معنادار می‌بیند اما تمام رشته‌های حساس با متغیرهای ساختگی جایگزین شده‌اند.',
      en: 'The external specialist receives meaningful, structural error logs with all sensitive credentials fully replaced by safe placeholders.',
    },
    relationships: {
      fa: 'پل ارتباطی حیاتی میان پرونده داخلی حادثه و فضای همکاری با متخصص بیرونی.',
      en: 'Forms the critical bridge between the internal incident record and the external collaboration sandbox.',
    },
    requirements: {
      fa: ['اجرای پردازش در سمت مرورگر (Client-Side) بدون ارسال لاگ خام به سرور ما'],
      en: ['Client-side execution ensuring zero raw unmasked data touches intermediate servers'],
    },
    validation: {
      fa: 'تست موفق سناریوی تفکیک داده در ماژول WorkflowVisualization با نمایش آیتم‌های محرمانه در برابر مجاز.',
      en: 'Validated in the WorkflowVisualization component demonstrating clear separation of private vs sharable artifacts.',
    },
    currentStatus: {
      fa: 'مدل مفهومی و تفکیک داده‌ای در فاز ۱ فعال است؛ جعبه‌ابزار خودکار ماسک در فاز ۲ استقرار می‌یابد.',
      en: 'Conceptual boundary active in Phase 1; automated redaction sandbox targeted for Phase 2.',
    },
  },

  'diff-6': {
    id: 'diff-6',
    title: {
      fa: 'از دست رفتن دانش فنی پس از رفع بحران',
      en: 'Loss of Troubleshooting Knowledge After Outage Resolution',
    },
    subtitle: {
      fa: 'تکرار مکرر یک خطا به دلیل عدم مستندسازی ساختاریافته ریشه‌یابی و راهکارها',
      en: 'Recurrence of identical outages because troubleshooting steps were never preserved',
    },
    badge: {
      fa: 'ارزش پایدار • حفظ دانش',
      en: 'Sustainable Value • Knowledge Base',
      type: 'conceptual',
    },
    definition: {
      fa: 'خروج مشاور بیرونی پس از دریافت دستمزد بدون به جای گذاشتن ران‌بوک (Runbook) یا گزارش ریشه‌یابی (Post-Mortem)، که سازمان را وابسته نگه داشته و موجب تکرار همان مشکل در ماه‌های آتی می‌شود.',
      en: 'The departure of consultants immediately upon symptom resolution without leaving post-mortem runbooks, leaving the enterprise perpetually dependent.',
    },
    purpose: {
      fa: 'تبدیل حوادث پرهزینه به دارایی‌های دانشی ماندگار و خودکارسازی راهکارهای آینده سازمان.',
      en: 'Transforms expensive operational outages into persistent organizational knowledge assets and future automated runbooks.',
    },
    problemAddressed: {
      fa: 'قطع چرخه هزینه‌های تکراری و توانمندسازی پرسنل جوان داخلی برای مهار خطاهای مشابه در آینده.',
      en: 'Breaks the cycle of recurring consulting expenditure and empowers junior staff to manage identical issues autonomously.',
    },
    components: {
      fa: [
        'قالب استاندارد گزارش پس از رخداد (Incident Post-Mortem Template)',
        'پایگاه دانش محرمانه سازمانی (Internal Knowledge Base)',
        'سامانه تبدیل راهکار به خط‌مشی‌های پیشگیرانه (Policy Generator)',
      ],
      en: [
        'Standardized post-mortem incident template',
        'Confidential enterprise knowledge base repository',
        'Solution-to-policy conversion generator for future incident prevention',
      ],
    },
    workflow: {
      fa: [
        'ثبت موفقیت‌آمیز بودن راهکار توسط سازمان و متخصص',
        'تولید خودکار پیش‌نویس ران‌بوک بر مبنای اقدامات انجام‌شده',
        'تایید و ویرایش نهایی توسط مدیر فنی سازمان',
        'ذخیره در آرشیو خصوصی سازمان جهت جستجو در حوادث آتی',
      ],
      en: [
        'Both parties confirm successful incident resolution',
        'System automatically compiles draft runbook from troubleshooting audit trail',
        'Technical lead reviews and approves sanitized documentation',
        'Archived in private enterprise knowledge repository for future retrieval',
      ],
    },
    inputs: {
      fa: ['شرح اولیه حادثه', 'لاگ دستورات و تنظیمات اصلاحی مشاور', 'تاییدیه رفع مشکل'],
      en: ['Original incident report', 'Specialist terminal commands & remediation logs', 'Resolution verification'],
    },
    processing: {
      fa: [
        'خلاصه‌سازی گام‌های حل مسئله و استخراج دستورات موثر',
        'فهرست‌نویسی متادیتا برای موتور جستجوی داخلی',
      ],
      en: [
        'Remediation step summarization and command extraction',
        'Metadata indexing for instant natural-language search during subsequent outages',
      ],
    },
    outputs: {
      fa: ['پرونده ران‌بوک استاندارد', 'کاهش زمان MTTR در حوادث مشابه بعدی'],
      en: ['Standardized Runbook document', 'Dramatically reduced MTTR on recurring incidents'],
    },
    implementationApproach: {
      fa: 'در فاز ۱ فیلد اقدامات انجام‌شده (Steps Taken) در فرم SC-01 پیش‌بینی شده و در فاز ۴ به پایگاه دانش کامل تبدیل خواهد شد.',
      en: 'Seeded in Phase 1 through the "Steps Already Taken" field in SC-01; expanded into an automated knowledge base in Phase 4.',
    },
    executionProcess: {
      fa: 'هر بار که مشکلی حل می‌شود، سازمان یک گام به خودکفایی نزدیک‌تر می‌گردد.',
      en: 'Every resolved crisis permanently elevates organizational self-sufficiency.',
    },
    relationships: {
      fa: 'به عنوان آخرین گام در چرخه حیات رخداد فنی و تغذیه‌کننده موتور خط‌مشی‌ها عمل می‌کند.',
      en: 'Serves as the concluding step in the incident lifecycle, feeding the future automated policy engine.',
    },
    requirements: {
      fa: ['همکاری متخصص در تشریح علیت ریشه‌ای', 'تایید صحت تست‌های نهایی توسط سازمان'],
      en: ['Specialist compliance in root-cause disclosure', 'Requester validation of operational recovery'],
    },
    validation: {
      fa: 'آزمون ذخیره و بازخوانی فیلد اقدامات اولیه در سناریوی SC-01 در LocalStorage.',
      en: 'Validated through storing and retrieving preliminary troubleshooting steps in LocalStorage.',
    },
    currentStatus: {
      fa: 'پروتوتایپ فیلد اولیه در فاز ۱ فعال است؛ آرشیو پیشرفته در فازهای آتی استقرار می‌یابد.',
      en: 'Prototype field active in Phase 1 SC-01; full knowledge system deferred to Phase 4.',
    },
  },

  // ==========================================
  // SECTION 4: INNOVATION CLASSIFICATIONS
  // ==========================================
  'model-combined': {
    id: 'model-combined',
    title: {
      fa: 'نوآوری ترکیبی (Combined Innovation Model)',
      en: 'Combined Innovation Model',
    },
    subtitle: {
      fa: 'هم‌افزایی هوشمندانه سه فناوری بالغ برای حل یک چالش ساختاری',
      en: 'Synergistic synthesis of three proven paradigms to solve a systemic problem',
    },
    badge: {
      fa: 'مدل منتخب • ستون معماری',
      en: 'Selected Model • Architectural Pillar',
      type: 'implemented',
    },
    definition: {
      fa: 'مدلی از نوآوری که به جای اختراع چرخ از پایه، سه فناوری و کارکرد اثبات‌شده را در قالب یک گردش کار واحد یکپارچه می‌سازد: ۱) سامانه‌های ردیابی و مستندسازی حوادث (ITSM)، ۲) دروازه‌های پالایش و حذف داده‌های محرمانه (DLP/Sanitizer)، و ۳) پلتفرم‌های دوسویه ارجاع کار تخصصی (Specialist Marketplace).',
      en: 'An innovation model that, rather than reinventing foundational tech, seamlessly binds three established paradigms: 1) incident management & ITSM, 2) data loss prevention & secret redaction, and 3) two-sided vetted technical service routing.',
    },
    purpose: {
      fa: 'کاهش ریسک R&D و صرفه‌جویی در زمان توسعه، با بهره‌گیری از استانداردهای پذیرفته‌شده صنعت فناوری اطلاعات.',
      en: 'Minimizes R&D risks and accelerates time-to-market by building upon established IT industry standards.',
    },
    problemAddressed: {
      fa: 'سامانه‌های موجود یا فقط تیکتینگ داخلی هستند (مانند Jira) و امکان همکاری امن با کارشناس خارجی را ندارند، یا فقط فریلنسری عمومی هستند (مانند پونیشا یا Upwork) و امنیت لاگ‌های سازمانی را نادیده می‌گیرند.',
      en: 'Addresses the disconnect where existing tools are either purely internal ticketing (Jira) lacking external expert gateways, or generalist freelancer sites lacking security sanitization.',
    },
    components: {
      fa: [
        'لایه تریاژ و فرمت‌بندی تیکت‌های فنی',
        'موتور پالایش خودکار اسرار زیرساخت',
        'محیط امن تعامل و قراردادهای حل مسئله',
      ],
      en: [
        'Technical incident structuring and triage layer',
        'Automated credential and infrastructure secret redaction engine',
        'Secure external collaboration workspace with non-circumvention policies',
      ],
    },
    workflow: {
      fa: [
        'ثبت رخداد در لایه اول',
        'پالایش خودکار اطلاعات در لایه دوم',
        'انتشار فرصت مأموریت در لایه سوم شبکه متخصصان',
        'حل رخداد و بستن چرخه با مستندسازی',
      ],
      en: [
        'Incident recorded in Presentation/Intake layer',
        'Automated client-side masking in Redaction layer',
        'Anonymous task matching in Expert Network layer',
        'Resolution finalized with runbook archival',
      ],
    },
    inputs: {
      fa: ['الگوهای طراحی ITSM', 'امضاهای امنیتی تشخیص نشت داده', 'مدل‌های اقتصادی پلتفرم‌های دوسویه'],
      en: ['ITSM design patterns', 'DLP secret detection signatures', 'Two-sided platform economic models'],
    },
    processing: {
      fa: [
        'یکپارچه‌سازی فرآیندی داده‌ها میان لایه کاربری، اعتبارسنجی و موتور ارتباط با مشاور',
      ],
      en: [
        'Workflow orchestration harmonizing client intake, validation logic, and expert access control',
      ],
    },
    outputs: {
      fa: ['پلتفرم یکپارچه عملیات امن فاوا با بهره‌وری چندبرابری نسبت به سیستم‌های جزیره‌ای'],
      en: ['Unified SecOps platform delivering exponential efficiency over fragmented point solutions'],
    },
    implementationApproach: {
      fa: 'معماری مدولار با استفاده از کامپوننت‌های مستقل ری‌اکت و جریان یک‌طرفه داده‌ها (Unidirectional Data Flow).',
      en: 'Modular architecture leveraging decoupled React components and strict unidirectional state flow.',
    },
    executionProcess: {
      fa: 'کاربر به جای جابجایی میان ۵ ابزار مختلف، کل فرآیند از ثبت تا رفع را در یک زنجیره پیوسته طی می‌کند.',
      en: 'Instead of switching between 5 disconnected tools, users traverse the entire lifecycle within a single cohesive workflow.',
    },
    relationships: {
      fa: 'پایه‌گذار تعامل تمامی ۷ مؤلفه معماری مفهومی سیستم.',
      en: 'Underpins the synergy between all 7 components of the conceptual system architecture.',
    },
    requirements: {
      fa: ['تفکیک دقیق مرزهای امنیتی بین کلاینت و سرور', 'طراحی استانداردهای تبادل داده JSON'],
      en: ['Strict client-server security boundaries', 'Standardized JSON data interchange schemas'],
    },
    validation: {
      fa: 'انطباق ساختار پروژه با سرفصل‌های علمی درس تجارت الکترونیک دانشگاه در حوزه مدل‌های ترکیبی.',
      en: 'Validated against academic e-commerce course literature covering hybrid innovation models.',
    },
    currentStatus: {
      fa: 'چارچوب اصلی فاز ۱؛ منطق ترکیبی در دیاگرام معماری و پروتوتایپ SC-01 پیاده‌سازی شده است.',
      en: 'Core foundation of Phase 1; demonstrated in the architecture diagram and functional SC-01 MVP.',
    },
  },

  'model-adaptive': {
    id: 'model-adaptive',
    title: {
      fa: 'نوآوری انطباقی (Adaptive Innovation Model)',
      en: 'Adaptive Innovation Model',
    },
    subtitle: {
      fa: 'بومی‌سازی مدل برای شرایط ساختاری و محدودیت‌های شرکت‌های داخلی',
      en: 'Tailoring the solution to the institutional constraints of domestic mid-sized businesses',
    },
    badge: {
      fa: 'بومی‌سازی • تحلیل بستر',
      en: 'Localization • Contextual Analysis',
      type: 'implemented',
    },
    definition: {
      fa: 'تطبیق یک الگوی موفق جهانی با اقتضائات اقتصادی، قانونی و رفتاری کسب‌وکارهای ایرانی، شامل پرداخت‌های ریالی، قراردادهای رسمی قابل استناد، و برطرف ساختن کمبود تخصص ناشی از مهاجرت نخبگان.',
      en: 'Adapting proven global models to domestic economic, legal, and operational realities: local currency billing, legally binding NDAs, and mitigating senior engineer brain-drain.',
    },
    purpose: {
      fa: 'اطمینان از قابلیت زیست‌پذیری تجاری در محیط واقعی و جلوگیری از شکست ناشی از کپی‌برداری صِرف پلتفرم‌های خارجی مانند PagerDuty یا Upwork.',
      en: 'Ensures commercial viability in the local market, preventing failure caused by naive cloning of foreign SaaS tools.',
    },
    problemAddressed: {
      fa: 'تحریم‌های بین‌المللی، عدم امکان پرداخت دلاری با ویزا/مسترکارت برای مشاوران خارجی، و عدم پذیرش داده‌های حقوقی در مراجع قضایی داخلی.',
      en: 'Bypasses barriers of foreign credit cards, international sanctions, and non-enforceability of foreign terms in domestic commercial arbitration.',
    },
    components: {
      fa: [
        'سازگاری کامل با تقویم شمسی و رابط کاربری فارسی RTL',
        'قالب قراردادهای محرمانگی منطبق با قانون تجارت الکترونیک ایران',
        'مدل تسویه حساب ریالی مبتنی بر سقف‌های مالیاتی قانونی',
      ],
      en: [
        'Full Jalali calendar and native Persian RTL typography integration',
        'Standardized NDA templates compliant with domestic commercial law',
        'Local currency settlement models aligned with statutory tax frameworks',
      ],
    },
    workflow: {
      fa: [
        'ارائه رابط کاملاً بومی و استاندارد به زبان فارسی',
        'تنظیم خودکار سررسیدها بر مبنای ساعات کاری محلی',
        'تسهیل همکاری میان شرکت‌ها و کارشناسان نخبه مقیم داخل کشور',
      ],
      en: [
        'Presents fully localized RTL Persian experience',
        'Aligns incident SLA windows with domestic business hours',
        'Connects domestic enterprises with top-tier local engineering talent',
      ],
    },
    inputs: {
      fa: ['قانون تجارت الکترونیک مصوب ۱۳۸۲', 'نیازهای زبانی و فرهنگی مهندسان فاوا در ایران'],
      en: ['Domestic Electronic Commerce Law', 'Linguistic and operational norms of local IT leads'],
    },
    processing: {
      fa: [
        'تبدیل و نمایش استاندارد تاریخ‌ها و تقویم به هجری شمسی و میلادی',
        'پشتیبانی دوطرفه از الگوهای نوشتاری چپ‌به‌راست و راست‌به‌چپ',
      ],
      en: [
        'Bi-directional Persian RTL / English LTR DOM synchronization',
        'Dual Jalali and Gregorian timestamp formatting',
      ],
    },
    outputs: {
      fa: ['سامانه‌ای کاملاً پذیرفتنی برای مدیران فناوری در سازمان‌های ایرانی و منطقه‌ای'],
      en: ['Culturally and legally viable platform for domestic and regional IT managers'],
    },
    implementationApproach: {
      fa: 'استفاده از فونت استاندارد وزیرمتن (Vazirmatn)، دایرکشن پویا (dir="rtl") و تایم‌استمپ‌های دوگانه در لایه context.',
      en: 'Engineered with Vazirmatn typography, dynamic dir="rtl" context management, and localized string helpers.',
    },
    executionProcess: {
      fa: 'کاربر بدون احساس بیگانگی، تمامی اصطلاحات فنی را با تعاریف دقیق فارسی و معادل انگلیسی دریافت می‌کند.',
      en: 'Users experience native technical phrasing with accurate Persian definitions paired with English terms.',
    },
    relationships: {
      fa: 'به عنوان لایه زیربنایی در سیستم مدیریت زبان و قالب‌های مستندسازی پلتفرم عمل می‌کند.',
      en: 'Operates as the underlying framework across the Language context and documentation renderers.',
    },
    requirements: {
      fa: ['پشتیبانی کامل مرورگر از استاندارد یونیکد فارسی و چیدمان RTL'],
      en: ['Full browser compliance with Persian Unicode and CSS logical properties'],
    },
    validation: {
      fa: 'آزمون موفق سوئیچینگ زنده زبان در نوار ناوبری پایین صفحه بدون رفرش و با حفظ حالت داده‌ها.',
      en: 'Validated through seamless runtime language toggles via BottomNav preserving all application state.',
    },
    currentStatus: {
      fa: 'کاملاً پیاده‌سازی‌شده در فاز ۱ با پشتیبانی ۱۰۰ درصدی دوزبانه.',
      en: '100% implemented in Phase 1 across all views and modals.',
    },
  },

  // ==========================================
  // SECTION 6: 7 CONCEPTUAL ARCHITECTURE COMPONENTS
  // ==========================================
  'arch-ui': {
    id: 'arch-ui',
    title: { fa: 'لایه ارائه و تعامل کاربری (Client UI & Presentation)', en: 'Client UI & Presentation Layer' },
    subtitle: { fa: 'دروازه دسترسی سازمان‌ها و متخصصان از طریق مرورگر وب', en: 'Web browser access gateway for organizations and specialists' },
    badge: { fa: 'پیاده‌سازی در فاز ۱', en: 'Phase 1 Implemented', type: 'implemented' },
    definition: {
      fa: 'لایه گرافیکی تعاملی مبتنی بر وب که مسئول ارائه نماها، دریافت ورودی‌های کاربر و مدیریت بصری وضعیت سیستم است.',
      en: 'The interactive web-based presentation layer rendering views, capturing user inputs, and managing application state visualization.',
    },
    purpose: {
      fa: 'ایجاد تجربه کاربری ساده، سریع و متمرکز بر آرامش روانی مدیران در شرایط بحرانی قطعی زیرساخت.',
      en: 'Delivers a calm, rapid, frictionless user experience designed for stressed IT managers facing operational downtime.',
    },
    problemAddressed: {
      fa: 'رفع پراکندگی ابزارها و ایجاد درگاه واحد برای ثبت حادثه، مشاهده تحلیل‌ها و ارتباط با متخصصان.',
      en: 'Eliminates tool fragmentation by centralizing incident intake, documentation analysis, and expert communication in one hub.',
    },
    components: {
      fa: ['هدر سامانه و نشانگر بخش‌ها', 'نوار ناوبری پایدار ۴ جزئی (BottomNav)', 'کارت‌ها و مدال‌های تعاملی مستندات'],
      en: ['System header and breadcrumbs', 'Persistent 4-control Bottom Navigation', 'Interactive documentation cards and modals'],
    },
    workflow: {
      fa: [
        'بارگذاری برنامه در مرورگر کلاینت',
        'تشخیص زبان و تم ترجیحی از LocalStorage',
        'رندر ماژول فعال (تحلیل پروژه یا پروتوتایپ MVP)',
        'پاسخ فوری به کلیک‌های کاربر و نمایش جزئیات',
      ],
      en: [
        'Application initializes in browser viewport',
        'Restores language and theme preferences from LocalStorage',
        'Renders active workspace (Project Explanation or MVP)',
        'Dispatches user interaction events to state controllers',
      ],
    },
    inputs: {
      fa: ['رویدادهای کلیک، تایپ فرم‌ها و تعاملات لمسی کاربر'],
      en: ['Click events, form inputs, and viewport interactions'],
    },
    processing: {
      fa: ['تبدیل تعاملات به وضعیت‌های React', 'مدیریت کلاس‌های تم تیره/روشن و جهات RTL/LTR'],
      en: ['State mutations via React hooks', 'Dynamic RTL/LTR and Dark/Light CSS variant management'],
    },
    outputs: {
      fa: ['رابط بصری واکنش‌گرا و پویا در تمامی ابعاد نمایشگر'],
      en: ['Fully responsive, high-contrast visual interface across desktop and mobile'],
    },
    implementationApproach: {
      fa: 'طراحی با React 19، Tailwind CSS v4، آیکون‌های Lucide و بدون استفاده از قالب‌های آماده تجاری.',
      en: 'Engineered using React 19, Tailwind CSS v4, Lucide icons, with zero generic commercial templates.',
    },
    executionProcess: {
      fa: 'به عنوان کلاینت Single Page Application (SPA) سریعاً در حافظه محلی مرورگر اجرا می‌شود.',
      en: 'Executes as a lightning-fast Single Page Application directly within the client browser.',
    },
    relationships: {
      fa: 'پوشش‌دهنده و ارائه‌کننده خروجی تمامی ۶ مؤلفه زیرین معماری سیستم.',
      en: 'Hosts and displays inputs and outputs from all remaining 6 architectural components.',
    },
    requirements: {
      fa: ['مرورگر مدرن با پشتیبانی از ES2022 و Flexbox/Grid'],
      en: ['Modern browser supporting ES2022 and modern CSS Grid/Flexbox standards'],
    },
    validation: {
      fa: 'تست رندر کامل در حالت روشن و تیره و سوئیچینگ بدون اختلال زبان بین فارسی و انگلیسی.',
      en: 'Validated through seamless Light/Dark mode transitions and live bilingual state preservation.',
    },
    currentStatus: {
      fa: 'کاملاً پیاده‌سازی‌شده در فاز ۱ با طراحی سفارشی خاکستری و سبز زمردی.',
      en: '100% implemented in Phase 1 with a bespoke gray and emerald green palette.',
    },
  },

  'arch-explanation': {
    id: 'arch-explanation',
    title: { fa: 'موتور تحلیل پروژه (Project Explanation Engine)', en: 'Project Explanation Engine' },
    subtitle: { fa: 'ارائه علمی و ساختاریافته مبانی کسب‌وکار، فرضیات و مدل مفهومی', en: 'Structured delivery of business analysis, maturity criteria, and conceptual models' },
    badge: { fa: 'پیاده‌سازی در فاز ۱', en: 'Phase 1 Implemented', type: 'implemented' },
    definition: {
      fa: 'ماژول نرم‌افزاری اختصاصی برای بازنمایی مستندات دانشگاهی، تفکیک فرضیات از شواهد، و ارزیابی عمیق پایداری مدل تجاری.',
      en: 'The core documentation subsystem presenting academic analyses, distinguishing hypotheses from facts, and structuring business viability.',
    },
    purpose: {
      fa: 'پاسخگویی به الزامات دقیق درس تجارت الکترونیک در خصوص مستندسازی کامل و تعاملی ابعاد کسب‌وکار.',
      en: 'Fulfills rigorous e-commerce academic criteria requiring exhaustive, clickable documentation for every field.',
    },
    problemAddressed: {
      fa: 'جلوگیری از ایجاد یک لندینگ‌پیج سطحی با متن‌های کلی، و تبدیل سامانه به یک مرجع غنی مهندسی محصول.',
      en: 'Prevents shallow landing page summaries by elevating the interface into an exhaustive engineering reference.',
    },
    components: {
      fa: [
        'تب‌های دسترسی به ۶ بخش اصلی تحلیل',
        'ماژول مصورسازی سه‌بعدی گردش کار',
        'موتور دیالوگ ۱۴ جنبه‌ای مستندات تفصیلی',
      ],
      en: [
        '6-section analytical navigation tabs',
        '3D/isometric workflow visualization sandbox',
        '14-aspect deep documentation inspection dialog',
      ],
    },
    workflow: {
      fa: [
        'انتخاب بخش تحلیلی مورد نظر توسط کاربر',
        'نمایش کارت‌های خلاصه تحلیلی اولیه',
        'کلیک روی هر فیلد یا کارت جهت باز شدن مدال توضیحات ۱۴ گانه',
        'ارائه نمودارها، مقایسه‌ها و شواهد اعتبارسنجی',
      ],
      en: [
        'User selects analysis section',
        'Renders concise overview cards',
        'User clicks any field to open the full 14-aspect documentation modal',
        'Displays comparative tables, workflows, and validation evidence',
      ],
    },
    inputs: {
      fa: ['پایگاه داده ساختاریافته مستندات فاز ۱', 'رویدادهای کلیک بر روی کارت‌ها و فیلدهای تحلیلی'],
      en: ['Structured Phase 1 analytical datasets', 'Card and field selection events'],
    },
    processing: {
      fa: ['فیلتر و واکشی رکورد مستندات بر مبنای کلید شناسه', 'فرمت‌بندی و تفکیک بخش‌های چهارگانه مدال'],
      en: ['Keyed lookup of documentation records', 'Formatting into the 4 structured modal subsections'],
    },
    outputs: {
      fa: ['مدال‌های تشریحی غنی شامل تعاریف، ورودی‌ها، پردازش و روش‌های اعتبارسنجی'],
      en: ['Exhaustive documentation modals detailing definitions, dataflows, and validation criteria'],
    },
    implementationApproach: {
      fa: 'جداسازی داده‌های متنی در فایل‌های داده تایپ‌شده و رندر از طریق کامپوننت اشتراکی DocumentationModal.',
      en: 'Strict data decoupling into typed repository files rendered through the shared DocumentationModal component.',
    },
    executionProcess: {
      fa: 'کاربر برای هر بخش پروژه، تمام جزئیات مهندسی را بدون نیاز به فایل‌های بیرونی یا توضیحات شفاهی درک می‌کند.',
      en: 'Users comprehend the full engineering depth of every component entirely within the application.',
    },
    relationships: {
      fa: 'پشتوانه تئوریک و مبنای توجیهی برای کلیه قابلیت‌های پیاده‌شده در محیط MVP.',
      en: 'Provides the theoretical foundation and architectural justification for the MVP Workspace.',
    },
    requirements: {
      fa: ['داده‌های جامع دوزبانه برای تمام حوزه‌ها', 'پیمایش روان و دسترسی سریع بدون تاخیر'],
      en: ['Comprehensive bilingual data arrays', 'Instantaneous modal mounting with zero network lag'],
    },
    validation: {
      fa: 'بررسی پوشش کامل ۱۴ معیار درخواستی برای کلیه عناصر تحلیلی فاز ۱.',
      en: 'Validated by verifying that all 14 requested criteria are comprehensively articulated.',
    },
    currentStatus: {
      fa: 'کاملاً پیاده‌سازی‌شده در فاز ۱ با پوشش کامل ۶ بخش اصلی.',
      en: '100% implemented in Phase 1 across all 6 business analysis sections.',
    },
  },

  'arch-mvp': {
    id: 'arch-mvp',
    title: { fa: 'محیط عملیاتی پروتوتایپ (MVP Prototype Workspace)', en: 'MVP Prototype Workspace' },
    subtitle: { fa: 'اجرای سناریوی اولیه کاربری SC-01 در قالب یک محصول کارا', en: 'Functional execution of Scenario SC-01 in a working product prototype' },
    badge: { fa: 'پیاده‌سازی در فاز ۱', en: 'Phase 1 Implemented', type: 'implemented' },
    definition: {
      fa: 'فضای تعاملی که به کاربر اجازه می‌دهد سناریوی هسته‌ای محصول (ثبت، دسته‌بندی و پایداری رخداد فنی) را به صورت واقعی تجربه و آزمون کند.',
      en: 'The operational environment allowing users to experience and test the core product scenario (incident intake, categorization, and persistence).',
    },
    purpose: {
      fa: 'اثبات کارایی عملیاتی ایده و امکان اعتبارسنجی فرضیات فرم ثبت در فاز اول پروژه دانشگاهی.',
      en: 'Proves the tangible viability of the concept and validates incident intake assumptions in Phase 1.',
    },
    problemAddressed: {
      fa: 'تبدیل پروژه از یک ایده ذهنی صرف به یک محصول نرم‌افزاری واقعی با قابلیت لمس و ارزیابی توسط ارزیاب دانشگاهی.',
      en: 'Elevates the university project from an abstract proposal into a concrete, evaluable software prototype.',
    },
    components: {
      fa: [
        'داشبورد شاخص‌های کلیدی فاز ۱ (تعداد تیکت‌ها، وضعیت پایداری، سناریوی SC-01)',
        'فرم استاندارد ثبت رخداد فنی با اعتبارسنجی زنده فیلدها',
        'فهرست و بایگانی رخدادها با فیلتر دسته‌بندی، اولویت و جستجو',
        'مدال مشاهده کامل شناسنامه تیکت و اقدامات انجام‌شده',
      ],
      en: [
        'Phase 1 metric cards (Ticket counts, storage health, SC-01 indicator)',
        'Standardized technical incident intake form with live field validation',
        'Searchable incident registry with category, severity, and text filters',
        'Detailed incident passport modal displaying preliminary troubleshooting logs',
      ],
    },
    workflow: {
      fa: [
        'مشاهده وضعیت سیستم در داشبورد MVP',
        'تکمیل فرم سناریوی SC-01 توسط کاربر با مقادیر دلخواه',
        'اعتبارسنجی ورودی‌ها و تولید شماره تیکت یکتا (INC-2026-XXXX)',
        'ذخیره در مخزن و نمایش فوری در فهرست تیکت‌ها با برچسب مشخص',
        'امکان کلیک و بازبینی پرونده ثبت‌شده',
      ],
      en: [
        'User inspects MVP dashboard metrics',
        'Fills out the SC-01 incident form with custom outage parameters',
        'Validates fields and auto-generates unique ticket identifier',
        'Persists to client storage and updates registry with user-logged badge',
        'User clicks any record to review the full technical passport',
      ],
    },
    inputs: {
      fa: ['عنوان، دسته‌بندی، درجه فوریت، سرویس متأثر، شرح خطا و اقدامات اولیه'],
      en: ['Title, technical category, severity tier, affected service, error logs, and steps taken'],
    },
    processing: {
      fa: [
        'بررسی حداقل طول کاراکترها و فیلدهای اجباری',
        'الصاق متادیتای زمانی بومی (شمسی/میلادی) و وضعیت Submitted',
        'بروزرسانی آرایه پرونده‌ها در حافظه محلی',
      ],
      en: [
        'Character length and required field boundary enforcement',
        'Enrichment with localized timestamps and default "Submitted" status',
        'Atomic synchronization with browser LocalStorage',
      ],
    },
    outputs: {
      fa: ['تیکت فنی پایدار، اعلان موفقیت‌آمیز بودن ثبت، پرونده‌های قابل جستجو'],
      en: ['Persisted incident ticket, confirmation alert, and searchable registry records'],
    },
    implementationApproach: {
      fa: 'پیاده‌سازی کامپوننت‌های IncidentForm و IncidentList با ارتباط از طریق AppContext مشترک.',
      en: 'Engineered via decoupled IncidentForm and IncidentList connected through reactive AppContext.',
    },
    executionProcess: {
      fa: 'کاربر می‌تواند با وارد کردن داده‌های واقعی سازمان خود، بلافاصله رفتار سیستم را مشاهده کند.',
      en: 'Users enter real-world operational logs to observe system response and persistence immediately.',
    },
    relationships: {
      fa: 'در تعامل مستقیم با کنترلر منطق حوادث و لایه ذخیره‌سازی داده‌های اولیه.',
      en: 'Directly orchestrated by the Incident Management Controller and the Initial Data Layer.',
    },
    requirements: {
      fa: ['امکان نوشتن و خواندن در localStorage مرورگر'],
      en: ['Browser permission to read/write to localStorage API'],
    },
    validation: {
      fa: 'ثبت تیکت، رفرش مرورگر، و مشاهده عدم از دست رفتن رکورد ثبت‌شده.',
      en: 'Validated through logging tickets, refreshing the browser, and confirming zero data loss.',
    },
    currentStatus: {
      fa: 'کاملاً پیاده‌سازی‌شده در فاز ۱ در قالب سناریوی SC-01.',
      en: '100% implemented in Phase 1 fulfilling Scenario SC-01.',
    },
  },

  'arch-incident-mgmt': {
    id: 'arch-incident-mgmt',
    title: { fa: 'کنترلر منطق مدیریت حوادث (Incident Management Logic)', en: 'Incident Management Logic' },
    subtitle: { fa: 'موتور قوانین تجاری، اعتبارسنجی الگوها و مدیریت چرخه حیات تیکت', en: 'Business rules engine, schema validation, and incident lifecycle management' },
    badge: { fa: 'پیاده‌سازی در فاز ۱', en: 'Phase 1 Implemented', type: 'implemented' },
    definition: {
      fa: 'لایه منطقی هسته که قواعد حاکم بر پذیرش، اعتبارسنجی، تولید شناسه و انتقال وضعیت پرونده‌های حوادث فنی را کنترل می‌کند.',
      en: 'The core business logic layer enforcing ingestion rules, schema validations, ID generation, and lifecycle state transitions.',
    },
    purpose: {
      fa: 'تضمین صحت و کیفیت داده‌های ورودی و جلوگیری از ورود گزارش‌های ناقص یا نامعتبر به چرخه رفع بحران.',
      en: 'Guarantees structural data integrity, preventing incomplete or ambiguous reports from entering the resolution pipeline.',
    },
    problemAddressed: {
      fa: 'حل معضل گزارش‌های گنگ مانند «سایت کار نمی‌کند» از طریق الزام به مشخص کردن سیستم متأثر و شرح جزئیات لاگ.',
      en: 'Resolves the ubiquitous problem of vague reports ("the website is down") by enforcing structured service identifiers and diagnostic descriptions.',
    },
    components: {
      fa: [
        'ماژول اعتبارسنجی قوانین فیلدها (Field Validator)',
        'تولیدکننده شناسه‌های استاندارد تیکت (Ticket ID Generator)',
        'مدیریت‌کننده وضعیت چرخه حیات (Lifecycle State Manager)',
      ],
      en: [
        'Field validation rule executor',
        'Standardized unique ticket ID generator',
        'Incident lifecycle state transition manager',
      ],
    },
    workflow: {
      fa: [
        'دریافت شیء خام از فرم کاربری',
        'اعمال قوانین اعتبارسنجی (طول عنوان >= ۵، طول شرح >= ۱۵)',
        'تولید شناسه رندوم ۴ رقمی با پیشوند INC-2026-',
        'تخصیص برچسب نمونه در برابر داده واقعی کاربر',
        'تحویل آبجکت استاندارد به لایه انتزاع داده',
      ],
      en: [
        'Receives raw object payload from client form',
        'Applies boundary validations (title length >= 5, description >= 15)',
        'Generates randomized 4-digit token prefixed with INC-2026-',
        'Tags sample seed vs authentic user-logged origin',
        'Dispatches enriched domain entity to the data abstraction repository',
      ],
    },
    inputs: {
      fa: ['فیلدهای ثبت حادثه ارسال‌شده از فرم SC-01'],
      en: ['Incident registration fields submitted from the SC-01 intake form'],
    },
    processing: {
      fa: [
        'پاک‌سازی فواصل اضافی (trim)',
        'تولید مهر زمانی با فرمت تقویم زبان فعال',
        'تولید ساختار داده‌ای استاندارد مطابق تایپ Incident',
      ],
      en: [
        'Whitespace trimming and sanitization',
        'Localized timestamp generation matching active locale',
        'Type-safe object mapping enforcing the Incident interface schema',
      ],
    },
    outputs: {
      fa: ['مدل معتبر تیکت آماده ذخیره‌سازی و پردازش'],
      en: ['Validated, typed Incident domain model ready for persistent storage'],
    },
    implementationApproach: {
      fa: 'توابع خالص جاوااسکریپت در متد createIncident داخل AppContext با کنترل خطای درون‌برنامه‌ای.',
      en: 'Pure TypeScript routines in createIncident within AppContext with internal error safety.',
    },
    executionProcess: {
      fa: 'در کسری از میلی‌ثانیه بدون هیچ‌گونه سربار محاسباتی اجرا می‌شود.',
      en: 'Executes synchronously in sub-millisecond time with zero computational overhead.',
    },
    relationships: {
      fa: 'واسط میان کامپوننت فرم ورودی و تابع ذخیره‌سازی لایه داده.',
      en: 'Intermediary between the intake form component and the persistent storage repository.',
    },
    requirements: {
      fa: ['تطابق فرمت ورودی با شیء تایپ‌شده'],
      en: ['Input compliance with TypeScript domain types'],
    },
    validation: {
      fa: 'آزمون اعتبارسنجی با وارد کردن متن کوتاه و مشاهده پیام‌های خطای تفکیک‌شده.',
      en: 'Validated by inputting sub-boundary strings and observing localized error callouts.',
    },
    currentStatus: {
      fa: 'کاملاً پیاده‌سازی‌شده در فاز ۱ با مدیریت کامل خطاهای فرم.',
      en: '100% implemented in Phase 1 with comprehensive inline validation.',
    },
  },

  'arch-data-layer': {
    id: 'arch-data-layer',
    title: { fa: 'لایه انتزاع دسترسی به داده (Initial Data Layer)', en: 'Initial Data Layer Repository' },
    subtitle: { fa: 'جداسازی منطق نرم‌افزار از رسانه فیزیکی ذخیره‌سازی', en: 'Decoupling application business logic from physical storage media' },
    badge: { fa: 'پیاده‌سازی در فاز ۱', en: 'Phase 1 Implemented', type: 'implemented' },
    definition: {
      fa: 'الگوی طراحی مخزن (Repository Pattern) که عملیات خواندن، نوشتن و بازنشانی پرونده‌ها را مدیریت کرده و کامپوننت‌های رابط کاربری را از جزئیات فنی LocalStorage یا دیتابیس جدا می‌کند.',
      en: 'A repository pattern abstraction managing data CRUD operations, insulating UI components from direct coupling with browser storage or remote databases.',
    },
    purpose: {
      fa: 'آماده‌سازی پروژه برای مهاجرت بدون بازنویسی کد به دیتابیس ابری (مانند PostgreSQL یا Supabase) در فازهای بعدی.',
      en: 'Future-proofs the codebase for zero-rewrite migration to cloud databases (PostgreSQL/Supabase) in subsequent phases.',
    },
    problemAddressed: {
      fa: 'جلوگیری از درهم‌تنیدگی مستقیم کدهای رابط کاربری با API های LocalStorage و کاهش هزینه‌های ریفکتورینگ در آینده.',
      en: 'Prevents tight coupling between UI components and browser storage APIs, drastically reducing downstream refactoring debt.',
    },
    components: {
      fa: [
        'ماژول همگام‌سازی (Storage Synchronizer)',
        'مخزن داده‌های اولیه بذر (Initial Seed Hydrator)',
        'سیستم اشتراک واکنشی (Reactive State Dispatcher)',
      ],
      en: [
        'Storage synchronization manager',
        'Sample seed data hydration module',
        'Reactive React state dispatcher',
      ],
    },
    workflow: {
      fa: [
        'بررسی وجود داده قبلی در حافظه مرورگر در زمان راه‌اندازی',
        'تزریق رکوردهای نمونه در صورت خالی بودن مخزن',
        'مدیریت افزودن رکورد جدید به آرایه جاری',
        'پایداری یکپارچه کل آرایه در دیسک محلی',
        'اطلاع‌رسانی به تمامی کامپوننت‌های شنونده',
      ],
      en: [
        'Checks browser storage presence on initial app mount',
        'Hydrates default seed cases if storage is unpopulated',
        'Appends new incident models to the in-memory array',
        'Atomically writes serialized array to browser disk',
        'Notifies all subscriber components for instantaneous UI updates',
      ],
    },
    inputs: {
      fa: ['درخواست‌های درج تیکت جدید، فیلترهای جستجو، فرمان بازنشانی داده‌ها'],
      en: ['New incident insert payloads, search criteria, and reset-to-seed triggers'],
    },
    processing: {
      fa: [
        'سریال‌سازی JSON و ذخیره‌سازی امن',
        'مدیریت خطا در صورت خرابی حافظه کلاینت',
      ],
      en: [
        'JSON serialization and deserialization with try/catch fallback guards',
        'State array immutability management',
      ],
    },
    outputs: {
      fa: ['آرایه‌ای از رکوردهای حادثه، وضعیت پایداری، بازخورد تایید عملیات'],
      en: ['Array of synchronized incident models, persistence health status, and reset confirmations'],
    },
    implementationApproach: {
      fa: 'پیاده‌سازی در کانتکست AppContext همراه با ذخیره‌سازی تحت کلید مجزای secops_p1_incidents.',
      en: 'Implemented within AppContext persisting under the isolated key secops_p1_incidents.',
    },
    executionProcess: {
      fa: 'به عنوان لایه مخزن ایزوله در سراسر برنامه در دسترس است.',
      en: 'Acts as an isolated in-memory repository accessible universally across the app.',
    },
    relationships: {
      fa: 'پل واسط میان کنترلر مدیریت حوادث و حافظه فیزیکی LocalStorage.',
      en: 'Bridges the Incident Management Logic with physical browser LocalStorage.',
    },
    requirements: {
      fa: ['حجم حافظه مجاز در کلاینت (حداقل ۵ مگابایت استاندارد مرورگر)'],
      en: ['Standard browser quota allocation for origin localStorage'],
    },
    validation: {
      fa: 'آزمون کلید «بازنشانی به داده‌های نمونه اولیه» در هدر داشبورد MVP و بازیابی موفق نمونه‌ها.',
      en: 'Validated through the "Reset to Seed Data" action in the MVP header successfully restoring baseline cases.',
    },
    currentStatus: {
      fa: 'کاملاً پیاده‌سازی‌شده در فاز ۱ با پشتیبانی کامل از عملیات بازنشانی.',
      en: '100% implemented in Phase 1 with complete seed hydration and reset capabilities.',
    },
  },

  'arch-storage': {
    id: 'arch-storage',
    title: { fa: 'رسانه ذخیره‌سازی محلی (LocalStorage / Mock Data)', en: 'LocalStorage / Mock Data Media' },
    subtitle: { fa: 'پایداری داده‌ها در مرورگر بدون وابستگی به سرور در فاز ۱', en: 'Zero-loss client-side persistence requiring no backend server in Phase 1' },
    badge: { fa: 'پیاده‌سازی در فاز ۱', en: 'Phase 1 Implemented', type: 'implemented' },
    definition: {
      fa: 'رسانه فیزیکی ذخیره‌سازی کلید-مقدار در مرورگر کلاینت که تضمین می‌کند داده‌های ثبت‌شده توسط کاربر پس از بستن تب یا رفرش صفحه از بین نروند.',
      en: 'The client-side browser key-value storage medium ensuring zero data loss across page refreshes and browser restarts.',
    },
    purpose: {
      fa: 'فراهم ساختن یک پروتوتایپ کاملاً خوداتکا و قابل ارزیابی مستقل برای استاد و دانشجویان بدون نیاز به اتصال دیتابیس خارجی یا پرداخت هزینه‌های ابری.',
      en: 'Provides a self-contained, standalone runnable prototype for academic evaluation requiring zero remote infrastructure.',
    },
    problemAddressed: {
      fa: 'رفع مشکل قطعی یا عدم دسترسی به دیتابیس‌های ابری خارجی در زمان ارائه پروژه دانشگاهی.',
      en: 'Eliminates reliance on external cloud databases that might fail or be blocked during university project presentations.',
    },
    components: {
      fa: [
        'کلید ذخیره‌سازی زبان ترجیحی (secops_p1_lang)',
        'کلید ذخیره‌سازی تم تیره/روشن (secops_p1_theme)',
        'کلید ذخیره‌سازی پرونده‌های حوادث (secops_p1_incidents)',
      ],
      en: [
        'Language preference storage key (secops_p1_lang)',
        'Theme preference storage key (secops_p1_theme)',
        'Incident registry JSON storage key (secops_p1_incidents)',
      ],
    },
    workflow: {
      fa: [
        'نوشتن رشته متنی فرمت‌شده با JSON.stringify',
        'بازیابی رشته و تبدیل به آبجکت در راه‌اندازی با JSON.parse',
        'کنترل خطاهای عدم تطابق ساختار داده‌ای',
      ],
      en: [
        'Serializes data objects via JSON.stringify into targeted storage keys',
        'Hydrates objects on initial bootstrap via JSON.parse',
        'Guards against corrupted schemas with defensive fallback defaults',
      ],
    },
    inputs: {
      fa: ['رشته‌های سریال‌شده JSON پرونده‌های تیکت‌ها و ترجیحات کاربری'],
      en: ['Serialized JSON strings representing incident records and user settings'],
    },
    processing: {
      fa: [
        'نوشتن مستقیم روی هارد کلاینت از طریق API بومی window.localStorage',
      ],
      en: [
        'Synchronous disk write mediated by the browser runtime engine',
      ],
    },
    outputs: {
      fa: ['ماندگاری کامل اطلاعات در کلاینت بدون اتلاف حتی ۱ بایت از اطلاعات'],
      en: ['100% data durability across restarts without losing a single logged event'],
    },
    implementationApproach: {
      fa: 'استفاده مستقیم از وب‌ای‌پی‌آی با مدیریت ایمن در هوک‌های useEffect و مقادیر پیش‌فرض هوشمند.',
      en: 'Built on native web storage APIs managed safely inside useEffect hooks with defensive defaults.',
    },
    executionProcess: {
      fa: 'در تمام طول کار با سامانه در پس‌زمینه به صورت بلادرنگ همگام می‌ماند.',
      en: 'Maintains real-time continuous synchronization in the background during user sessions.',
    },
    relationships: {
      fa: 'پایین‌ترین لایه سخت‌افزاری در نمودار معماری که داده‌های لایه انتزاع را در خود نگاه می‌دارد.',
      en: 'The lowest persistence layer in the architecture diagram storing payloads from the Data Layer.',
    },
    requirements: {
      fa: ['فعال بودن قابلیت ذخیره‌سازی محلی در تنظیمات مرورگر کاربر'],
      en: ['LocalStorage enabled in browser client settings'],
    },
    validation: {
      fa: 'آزمون خروج از صفحه و بازگشت مجدد و تایید ماندگاری تیکت‌های جدید.',
      en: 'Validated by closing the browser tab, reopening, and confirming the persisted tickets remain intact.',
    },
    currentStatus: {
      fa: 'کاملاً پیاده‌سازی‌شده در فاز ۱ با پشتیبانی از ذخیره زبان، تم و حوادث.',
      en: '100% implemented in Phase 1 storing language, theme, and incident registry states.',
    },
  },

  'arch-future': {
    id: 'arch-future',
    title: { fa: 'نقاط اتصال و یکپارچگی فازهای آتی (Future Integration Slots)', en: 'Future Integration Slots' },
    subtitle: { fa: 'درگاه‌های معمارانه برای اتصال مانیتورینگ زنده، بازارچه و امانت‌داری مالی', en: 'Architectural sockets prepared for live monitoring, expert matching, and escrow' },
    badge: { fa: 'طراحی مفهومی • فازهای ۲ تا ۴', en: 'Conceptual • Post-Phase 1', type: 'deferred' },
    definition: {
      fa: 'شکاف‌های معمارانه و رابط‌های برنامه‌نویسی استاندارد (API Interfaces) که ساختار داده را از هم‌اکنون برای اتصال سرویس‌های فازهای ۲ تا ۴ آماده می‌سازند.',
      en: 'Architectural extension sockets and standardized interface contracts designed in Phase 1 to accommodate Phase 2–4 services without rewrites.',
    },
    purpose: {
      fa: 'تضمین قابلیت گسترش‌پذیری (Scalability) و اثبات این که طراحی فاز ۱ یک بن‌بست نرم‌افزاری نیست بلکه مرحله اول یک نقشه راه مهندسی است.',
      en: 'Guarantees architectural scalability, proving that Phase 1 is a deliberate initial milestone rather than a technical dead-end.',
    },
    problemAddressed: {
      fa: 'جلوگیری از دور ریخته شدن کدهای فاز ۱ هنگام افزودن قابلیت‌های تجاری پیچیده در مراحل بعدی رشد استارتاپ.',
      en: 'Prevents Phase 1 code obsolescence when enterprise modules are layered on in future project growth phases.',
    },
    components: {
      fa: [
        'درگاه اتصال ایجنت‌های تله‌متری مانیتورینگ (Zabbix/Prometheus Webhooks)',
        'سوکت اتصال به بازارچه تطبیق متخصصان و الگوریتم‌های امتیازی',
        'رابط اتصال به سیستم پرداخت امانی (Escrow Milestone Gateway)',
      ],
      en: [
        'Live telemetry probe webhook receiver (Prometheus/Zabbix)',
        'Expert matching engine and reputation scoring socket',
        'Milestone-based escrow payment gateway interface',
      ],
    },
    workflow: {
      fa: [
        'آماده‌باش برای دریافت فراخوانی‌های وب‌هوک در فازهای آتی',
        'امکان ارسال پرونده‌های پالایش‌شده به مایکروسرویس‌های خارجی',
        'تسهیل استقرار در کلاودهای سازمانی بدون تغییر معماری پایه',
      ],
      en: [
        'Prepared to ingest incoming telemetry alerts in future milestones',
        'Ready to dispatch sanitized incidents to external matching microservices',
        'Facilitates cloud deployments without foundational architecture refactoring',
      ],
    },
    inputs: {
      fa: ['آلرت‌های سروری از طریق Webhook', 'پیشنهادهای همکاری مشاوران', 'تاییدیه‌های تراکنش بانکی'],
      en: ['Server monitoring alert payloads', 'Specialist mission bids', 'Banking escrow release webhooks'],
    },
    processing: {
      fa: [
        'تعریف تایپ‌های داده‌ای انتزاعی در کدهای منبع جهت اتصال یکپارچه در آینده',
      ],
      en: [
        'Abstract domain interface definitions in source code allowing seamless future binding',
      ],
    },
    outputs: {
      fa: ['یک اکوسیستم جامع ابری برای عملیات فوق‌امن فناوری اطلاعات و شبکه متخصصان'],
      en: ['A comprehensive enterprise cloud ecosystem for secure IT operations and expert networking'],
    },
    implementationApproach: {
      fa: 'تعریف دقیق مرزهای مفهومی و کپسوله‌سازی ماژول‌ها جهت اتصال از طریق REST یا GraphQL در آینده.',
      en: 'Modeled conceptually in Phase 1 with modular encapsulation ready for future REST/GraphQL adapters.',
    },
    executionProcess: {
      fa: 'در فاز ۱ صرفاً به عنوان نقطه اتصال نشان داده شده و صراحتاً به عنوان قابلیت‌های آتی معرفی می‌شود.',
      en: 'Explicitly marked in Phase 1 as future roadmap milestones without false claims of present implementation.',
    },
    relationships: {
      fa: 'نقطه اتکای توسعه تمامی فازهای ۲، ۳ و ۴ بر روی بستر فاز ۱.',
      en: 'The extension launchpad for all future Phase 2, 3, and 4 roadmap capabilities.',
    },
    requirements: {
      fa: ['استقرار بک‌اند سرور در فازهای بعد', 'احراز هویت چندعاملی برای دسترسی به سرورهای مشتری'],
      en: ['Dedicated backend server infrastructure in future phases', 'Multi-factor authentication protocols'],
    },
    validation: {
      fa: 'بررسی در بخش مرزهای فاز ۱ و تایید تفکیک شفاف قابلیت‌های پیاده‌شده از ایده‌های آینده.',
      en: 'Validated in the Scope Boundary view confirming clear segregation between current deliverables and future roadmap.',
    },
    currentStatus: {
      fa: 'مفهومی و پیش‌بینی‌شده برای فازهای ۲ تا ۴؛ هیچ ادعای پیاده‌سازی زودهنگام در فاز ۱ نمی‌شود.',
      en: 'Conceptual roadmap for Phases 2–4; zero false claims of premature implementation in Phase 1.',
    },
  },
};

