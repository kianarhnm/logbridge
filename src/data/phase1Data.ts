/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  QuestionEvaluation,
  ArchitectureComponent,
  WorkflowNode,
  Incident,
} from '../types';

export const PROJECT_INTRO_DATA = {
  name: {
    fa: 'سامانه مدیریت عملیات امن فناوری اطلاعات و شبکه متخصصان',
    en: 'Secure IT Operations & Expert Network Platform',
  },
  tagline: {
    fa: 'پلتفرم مدیریت حوادث فنی، حفاظت از داده‌های حساس و اتصال هدفمند به متخصصان ارشد در لحظات بحران',
    en: 'A platform for technical incident management, sensitive data protection, and targeted expert connection during operational crises',
  },
  valueProposition: {
    fa: 'سازمان‌های با اندازه متوسط می‌توانند بدون تحمیل هزینه‌های سنگین استخدام دائمی متخصصان در تمامی رشته‌ها، حوادث پیچیده فنی خود را مستند کنند، اطلاعات محرمانه زیرساخت را پالایش نمایند و در بستری امن به کارشناسان تاییدصلاحیت‌شده متصل شوند.',
    en: 'Mid-sized organizations can document complex technical incidents, sanitize sensitive infrastructure data, and connect securely with verified external experts without bearing the prohibitive cost of full-time specialists for every discipline.',
  },
  whatItIs: {
    fa: 'یک پلتفرم تخصصی تجارت الکترونیک B2B که به عنوان واسطه ارزش‌آفرین میان سازمان‌های مواجه با اختلالات فنی و شبکه کارشناسان مستقل عمل می‌کند.',
    en: 'A specialized B2B e-commerce platform operating as a value-creating intermediary between organizations facing technical disruptions and an independent expert network.',
  },
  problemItAddresses: {
    fa: 'کمبود تخصص داخلی در زمان حوادث غیرمنتظره، هزینه‌های گزاف استخدام دائم، ترس از افشای پسوردها و اسرار زیرساخت هنگام درخواست کمک از فریلنسرها، و از بین رفتن تجارب حل مسئله پس از خروج مشاوران.',
    en: 'Internal expertise gaps during unexpected crises, exorbitant full-time hiring costs, security fears of disclosing passwords and infrastructure secrets to unvetted freelancers, and permanent loss of troubleshooting knowledge after consultants leave.',
  },
  intendedUsers: {
    fa: 'مدیران فناوری اطلاعات (IT Managers)، سرپرستان تیم‌های توسعه و DevOps در شرکت‌های متوسط (۲۰ تا ۱۰۰ پرسنل)، و در سمت عرضه: مهندسان و معماران ارشد مستقل لینوکس، شبکه، پایگاه داده و امنیت.',
    en: 'IT Managers, DevOps and Tech Leads at mid-sized organizations (20–100 employees), and on the supply side: verified independent senior engineers and architects in Linux, networking, databases, and cybersecurity.',
  },
  whatItDoes: {
    fa: 'مستندسازی ساختاریافته حادثه، تشخیص و پوشش‌دهی داده‌های حساس (IP، پسورد، توکن)، ایجاد زمینه اتصال به تخصص‌های نادر و ذخیره‌سازی تجارب در پایگاه دانش سازمانی.',
    en: 'Structured incident documentation, detection and masking of sensitive credentials (IPs, passwords, tokens), facilitated connection to rare specialist skills, and knowledge preservation in organizational runbooks.',
  },
  whatItDoesNotReplace: {
    fa: 'این سامانه جایگزین تیم فنی داخلی سازمان، سیستم‌های اختصاصی مانیتورینگ لایو یا خدمات تعمیرات فیزیکی تجهیزات سخت‌افزاری نیست؛ بلکه شتاب‌دهنده واکنش به بحران و لایه حفاظتی برون‌سپاری است.',
    en: 'This platform does not replace an internal technical team, dedicated live monitoring tools, or physical on-site hardware maintenance; it acts as an incident response accelerator and protective intermediary layer.',
  },
  visionVsPhase1: {
    fa: 'چشم‌انداز بلندمدت پلتفرم شامل موتور خط‌مشی‌های اتوماتیک، مانیتورینگ زمان‌حقیقی، داوری هوشمند و تسویه مالی امانی است؛ اما فاز ۱ منحصراً بر تبیین تحلیل کسب‌وکار، مصورسازی مدل فرآیندی و پیاده‌سازی پروتوتایپ سناریوی ثبت حادثه (SC-01) تمرکز دارد.',
    en: 'The long-term vision encompasses automated policy engines, real-time telemetry, dispute arbitration, and escrow settlements; however, Phase 1 strictly focuses on business analysis, conceptual workflow visualization, and the functional incident submission prototype (SC-01).',
  },
};

export const PROBLEM_DEFINITION_DATA = {
  difficulties: [
    {
      id: 'diff-1',
      title: { fa: 'محدودیت تخصص فنی داخلی', en: 'Limited Internal Technical Expertise' },
      desc: {
        fa: 'تیم‌های داخلی در شرکت‌های متوسط معمولاً متشکل از برنامه‌نویسان عمومی یا ادمین‌های شبکه عمومی هستند و دانش عمیق در حوزه‌های نادری چون بن‌بست تراکنش‌های دیتابیس یا پاسخ به رخدادهای نفوذ (Incident Response) ندارند.',
        en: 'Internal teams at mid-sized firms typically comprise generalist developers or sysadmins and lack specialized depth in rare niches like deep database lock contention or cybersecurity incident response.',
      },
    },
    {
      id: 'diff-2',
      title: { fa: 'دشواری یافتن متخصص بیرونی مطمئن', en: 'Difficulty Finding Qualified External Experts' },
      desc: {
        fa: 'در لحظات بحران نیمه‌شب، سازمان‌ها به ارتباطات شخصی یا گروه‌های غیررسمی تلگرام متوسل می‌شوند که فرآیندی تصادفی، غیرقابل اعتماد و زمان‌بر است.',
        en: 'During midnight outages, organizations resort to word-of-mouth or informal chat groups—a chaotic, unvetted, and critically slow discovery process.',
      },
    },
    {
      id: 'diff-3',
      title: { fa: 'هزینه گزاف استخدام تمام‌وقت برای حوادث فصلی', en: 'Cost of Full-Time Specialists for Occasional Needs' },
      desc: {
        fa: 'استخدام تمام‌وقت یک معمار ارشد پایگاه داده یا مهندس امنیت برای شرکتی که شاید ماهی یک‌بار به این تخصص نیاز داشته باشد، توجیه اقتصادی ندارد.',
        en: 'Retaining full-time senior database architects or SecOps specialists is economically unjustifiable for companies needing their expertise only once a month.',
      },
    },
    {
      id: 'diff-4',
      title: { fa: 'پراکندگی اطلاعات و لاگ‌های حادثه', en: 'Fragmented Incident Information' },
      desc: {
        fa: 'شواهد خطا میان اسکرین‌شات‌ها، لاگ‌های سرور و چت‌های اعضای تیم پراکنده شده و تصویری یکپارچه برای تحلیل علیت وجود ندارد.',
        en: 'Technical evidence remains scattered across screenshots, server logs, and team chat threads without a consolidated causality timeline.',
      },
    },
    {
      id: 'diff-5',
      title: { fa: 'ریسک افشای ناخواسته داده‌های محرمانه', en: 'Inability to Share Technical Evidence Securely' },
      desc: {
        fa: 'ارسال مستقیم فایل‌های پیکربندی و لاگ‌های خطا به مشاوران بیرونی خطر لو رفتن پسوردها، آدرس‌های IP داخلی و توکن‌های اتصال درگاه را به همراه دارد.',
        en: 'Sending raw server configuration dumps or logs to external consultants exposes connection strings, internal IPs, and API tokens to severe security risks.',
      },
    },
    {
      id: 'diff-6',
      title: { fa: 'از دست رفتن دانش فنی پس از رفع بحران', en: 'Loss of Knowledge After Incident Resolution' },
      desc: {
        fa: 'مشاور پس از اعمال تغییرات دستمزد می‌گیرد و می‌رود، در حالی که ریشه‌یابی و راهکار استاندارد مستند نشده و مشکل در ماه بعد مجدداً تکرار می‌شود.',
        en: 'Consultants fix the acute symptom and depart without structured root-cause documentation, leaving the company vulnerable to recurrence.',
      },
    },
  ],
  states: {
    current: {
      fa: 'توقف خدمات و سردرگمی اعضای تیم؛ جستجوی تلفنی و نامطمئن مشاور؛ ارسال فایل لاگ حاوی پسوردها در پیام‌رسان‌های عمومی.',
      en: 'Service downtime with team confusion; frantic phone calls to acquaintances; transmitting unredacted logs containing database credentials via public messaging apps.',
    },
    undesirable: {
      fa: 'طولانی شدن زمان قطعی (Downtime) به بیش از ۱۰ ساعت، نشت اطلاعات محرمانه مشتریان، پرداخت مبالغ سلیقه‌ای، و تکرار همان مشکل در کمپین بعدی.',
      en: 'Prolonged outage exceeding 10 hours, confidential customer data leaks, arbitrary consultant billing without warranty, and recurrence during the next promotion.',
    },
    desired: {
      fa: 'ثبت ساختاریافته حادثه در کمتر از ۵ دقیقه؛ پوشش خودکار اطلاعات حساس با نظارت سازمان؛ ارجاع به متخصصان ارزیابی‌شده با تضمین امانی و مستندسازی ماندگار.',
      en: 'Structured incident registration under 5 minutes; automated sensitive token masking with organizational control; referral to vetted specialists with escrow and knowledge preservation.',
    },
  },
  improvements: [
    {
      metric: { fa: 'زمان میانگین بازیابی (MTTR)', en: 'Mean Time to Resolution (MTTR)' },
      target: { fa: 'کاهش فرضی از ۸ ساعت به کمتر از ۹۰ دقیقه', en: 'Hypothetical reduction from 8h to <90min' },
      status: 'requires_validation',
    },
    {
      metric: { fa: 'نرخ افشای داده‌های محرمانه', en: 'Confidential Data Exposure Incidents' },
      target: { fa: 'هدف‌گذاری صفر حادثه نشت در پرونده‌های بررسی‌شده', en: 'Target of 0 leakage incidents in reviewed cases' },
      status: 'proposed',
    },
    {
      metric: { fa: 'هزینه‌های سربار تخصصی سازمان', en: 'Organizational Fixed Specialist Overhead' },
      target: { fa: 'کاهش پیش‌بینی‌شده بیش از ۶۰٪ نسبت به استخدام ثابت', en: 'Projected >60% savings compared to full-time hires' },
      status: 'hypothesis',
    },
  ],
  targetUsers: [
    {
      role: { fa: 'مدیران ارشد فناوری و IT (مدیران تصمیم‌گیر)', en: 'IT & Engineering Managers' },
      desc: {
        fa: 'مسئول مستقیم حفظ پایداری سرویس‌ها (Uptime) و کاهش هزینه‌های پرسنلی؛ متقاضی دسترسی فوری به کارشناسان مطمئن بدون افشای رمزها.',
        en: 'Directly accountable for service uptime and operational payroll; requires vetted expert access without leaking secrets.',
      },
    },
    {
      role: { fa: 'سرپرستان تیم‌های DevOps و توسعه‌دهندگان ارشد', en: 'DevOps Leads & Senior Developers' },
      desc: {
        fa: 'مهندسان خط مقدم در حین قطعی؛ نیازمند همکاری فنی امن، تبادل ساختاریافته شواهد خطا و دریافت بازخورد سریع در نیمه‌شب.',
        en: 'Frontline outage responders needing secure collaboration, structured error triage, and fast midnight turnaround.',
      },
    },
    {
      role: { fa: 'مشاوران و متخصصان مستقل سطح بالا (سمت عرضه)', en: 'Independent Senior Specialists (Supply Side)' },
      desc: {
        fa: 'معماران نخبه سیستم‌ها که مایلند مهارت‌های نادر خود را به صورت پاره‌وقت با درآمد شفاف و قراردادهای امانی حقوقی عرضه کنند.',
        en: 'Elite systems architects monetizing rare skills on-demand via escrow milestone guarantees and clear legal boundaries.',
      },
    },
  ],
};

export const EIGHT_QUESTIONS_DATA: QuestionEvaluation[] = [
  {
    id: 1,
    question: {
      fa: '۱. آیا در حال حاضر تقاضای واقعی و نیاز ملموس در بازار برای این ایده وجود دارد؟',
      en: '1. Is there actual demand and a real need in the current market?',
    },
    shortAnswer: {
      fa: 'بله؛ کمبود فزاینده کارشناسان ارشد زیرساخت و امنیت، تقاضای ملموسی برای خدمات درخواستی (On-demand) ایجاد کرده است.',
      en: 'Yes; the mounting shortage of senior infrastructure and SecOps engineers creates acute demand for on-demand assistance.',
    },
    detailedExplanation: {
      fa: 'در اکوسیستم شرکت‌های نرم‌افزاری و تجارت الکترونیک، بروز خطاهای پیچیده نظیر خرابی کلاستر دیتابیس یا حملات DDoS اجتناب‌ناپذیر است. از آنجا که کسب‌وکارها نمی‌توانند برای هر رخداد موردی حقوق ثابت پرداخت کنند، نیاز به دسترسی منعطف و مطمئن به مهارت‌های نادر وجود دارد.',
      en: 'In modern tech companies, complex downtime events like database deadlocks or DDoS probes are inevitable. Since firms cannot sustain full-time payroll for every rare discipline, flexible access to trusted expertise is an acute operational need.',
    },
    reasoning: {
      fa: 'افزایش پیچیدگی فناوری‌های ابری، کوبرنتیز و پایگاه‌های توزیع‌شده فاصله مهارتی تیم‌های عادی با نیازهای واقعی نگهداری را عمیق‌تر کرده است.',
      en: 'The growing complexity of cloud-native infrastructure, Kubernetes, and distributed databases widens the gap between internal generalists and production triage requirements.',
    },
    currentAssumptions: {
      fa: 'فرض بر این است که حداقل ۷۰ درصد شرکت‌های متوسط حداقل سالی ۲ بار با بحرانی مواجه می‌شوند که تیم داخلی توان حل فوری آن را ندارد.',
      en: 'Assumed that at least 70% of mid-sized firms experience an outage at least twice a year beyond their internal team resolution capacity.',
    },
    neededEvidence: {
      fa: 'پیمایش کمّی و مصاحبه میدانی با ۳۰ مدیر فناوری اطلاعات در شرکت‌های عضو نظام صنفی رایانه‌ای.',
      en: 'Quantitative survey and in-depth interviews with 30 IT Managers across regional tech industry associations.',
    },
    statusLabel: 'requires_validation',
  },
  {
    id: 2,
    question: {
      fa: '۲. آیا ایده پاسخ به یک نیاز واقعی است یا صرفاً بر فرضیات بنیان‌گذار استوار است؟',
      en: '2. Does the idea solve a real need, or is it based only on the founder’s assumptions?',
    },
    shortAnswer: {
      fa: 'ایده بر یک درد مالی ملموس (زیان مستقیم Downtime) استوار است و نه یک علاقه فانتزی یا ارزش حاشیه‌ای.',
      en: 'The idea addresses tangible financial hemorrhage (downtime revenue loss) rather than founder vanity features.',
    },
    detailedExplanation: {
      fa: 'توقف خدمات فنی در یک فروشگاه اینترنتی مستقیماً به معنای لغو سبد خرید و ضرر دقیقه‌ای است. ترس از نشت پسورد هنگام کمک گرفتن نیز دغدغه‌ای حیاتی است که بارها در پرونده‌های واقعی برون‌سپاری سنتی گزارش شده است.',
      en: 'Service downtime in an e-commerce platform converts directly into abandoned carts and revenue loss per minute. Security fear when granting server access is an empirical deterrent reported across IT operations.',
    },
    reasoning: {
      fa: 'ما محصول را برای تفریح یا بهینه‌سازی‌های لوکس طراحی نکرده‌ایم؛ هدف نجات پایداری کسب‌وکار در لحظه بحران با حفظ امنیت است.',
      en: 'The platform is not built for recreational utilities or minor convenience; its purpose is preserving business continuity and infrastructure confidentiality during operational crises.',
    },
    currentAssumptions: {
      fa: 'مدیران فنی ترس از دست دادن اطلاعات را دلیل اصلی عدم مراجعه به پلتفرم‌های عمومی فریلنسری می‌دانند.',
      en: 'IT managers identify security and privacy exposure as the primary reason for avoiding generic freelance platforms.',
    },
    neededEvidence: {
      fa: 'بررسی مستندات سوابق نقض محرمانگی در قراردادهای برون‌سپاری و دریافت فیدبک پیرامون ابزار ماسک‌سازی.',
      en: 'Analysis of past NDA breaches in IT consulting and feedback on the proposed log-sanitization mechanism.',
    },
    statusLabel: 'hypothesis',
  },
  {
    id: 3,
    question: {
      fa: '۳. آیا ایده بنیادی، ترکیبی، یا انطباقی است؟',
      en: '3. Is the idea fundamental, combined, or adaptive?',
    },
    shortAnswer: {
      fa: 'ایده یک نوآوری «ترکیبی و انطباقی (Combined & Adaptive)» است.',
      en: 'The idea represents a "Combined and Adaptive" business innovation.',
    },
    detailedExplanation: {
      fa: 'این طرح فناوری جدیدی در سطح پروتکل‌های شبکه اختراع نمی‌کند (بنیادی نیست)؛ بلکه سه مفهوم شناخته‌شده را ترکیب می‌کند: ۱) سامانه ثبت حادثه، ۲) فیلتر پالایش محرمانگی داده‌ها، ۳) بازارچه خدمات تخصصی برخط، و آن را با شرایط کمبود مهارت در بازار بومی تطبیق می‌دهد.',
      en: 'The platform does not invent novel network protocol primitives (it is not fundamental). Rather, it synthesizes three established concepts: incident ticketing, sensitive data redaction, and on-demand expert matchmaking, adapting them to local talent shortages.',
    },
    reasoning: {
      fa: 'نوآوری‌های ترکیبی ریسک اجرای فنی کمتری نسبت به نوآوری‌های بنیادی دارند و سریع‌تر به تناسب محصول با بازار (Product-Market Fit) می‌رسند.',
      en: 'Combined innovations carry significantly lower technological risk than foundational inventions and validate product-market fit much faster.',
    },
    currentAssumptions: {
      fa: 'ترکیب مکانیزم مدیریت داده با شبکه تخصصی، ارزش پیشنهادی متمایزی ایجاد می‌کند که هیچ‌کدام به تنهایی ندارند.',
      en: 'Synthesizing data sanitization directly with expert dispatch creates a combined value proposition unattainable by standalone tools.',
    },
    neededEvidence: {
      fa: 'آزمودن نسخه پروتوتایپ فاز ۱ با کاربران نمونه و سنجش تمایل آن‌ها به استفاده از کل فرآیند یکپارچه.',
      en: 'Testing the Phase 1 prototype with target IT operators to assess willingness to adopt the combined pipeline.',
    },
    statusLabel: 'proposed',
  },
  {
    id: 4,
    question: {
      fa: '۴. پتانسیل رشد طبیعی و مقیاس‌پذیری آن چگونه است؟',
      en: '4. What is its growth potential and scalability?',
    },
    shortAnswer: {
      fa: 'پتانسیل رشد بر اثرات شبکه‌ای دوطرفه (Two-Sided Network Effects) و انباشت پایگاه دانش استوار است.',
      en: 'Growth potential is driven by two-sided network effects and cumulative knowledge base repositories.',
    },
    detailedExplanation: {
      fa: 'با پیوستن سازمان‌های بیشتر، پروژه‌های بیشتری برای متخصصان ایجاد می‌شود؛ در نتیجه متخصصان بیشتری عضو پلتفرم می‌گردند که زمان پاسخگویی را کاهش می‌دهد. علاوه بر این، تبدیل تجارب حل عارضه به مستندات ماندگار، ارزش پلتفرم را برای کاربران بعدی به صورت نمایی بالا می‌برد.',
      en: 'As more organizations join, case volume attracts verified specialists; a denser talent pool reduces response latency. Concurrently, accumulating sanitized post-mortems into an indexed knowledge base creates non-linear platform utility.',
    },
    reasoning: {
      fa: 'مدل‌های پلتفرمی نسبت به شرکت‌های سنتی مشاوره‌ای، امکان خدمت‌رسانی به هزاران سازمان بدون استخدام خطی نیروی انسانی را فراهم می‌آورند.',
      en: 'Platform models scale to thousands of clients without linear operational headcount growth, unlike traditional IT consulting firms.',
    },
    currentAssumptions: {
      fa: 'افزایش تعداد حوادث ثبت‌شده به مرور زمان هزینه متوسط حل هر بحران را به دلیل وجود سوابق قبلی کاهش خواهد داد.',
      en: 'Increased cumulative incident volume will systematically reduce resolution duration due to indexed prior solutions.',
    },
    neededEvidence: {
      fa: 'مدل‌سازی مالی نسبت هزینه نهایی تراکنش‌ها در فازهای بعدی پس از اعتبارسنجی فرضیات اولیه.',
      en: 'Financial modeling of marginal transaction costs in subsequent phases once baseline assumptions are verified.',
    },
    statusLabel: 'hypothesis',
  },
  {
    id: 5,
    question: {
      fa: '۵. مشتریان دقیقاً حاضرند برای چه چیزی پول بپردازند؟',
      en: '5. What exactly would customers be willing to pay for?',
    },
    shortAnswer: {
      fa: 'کاهش زمان بازیابی از خاموشی (MTTR)، بیمه عدم افشای اطلاعات محرمانه و گارانتی حل مشکل با سپرده امانی.',
      en: 'Downtime reduction (MTTR), confidentiality assurance during evidence sharing, and resolution escrow guarantees.',
    },
    detailedExplanation: {
      fa: 'سازمان‌ها برای ثبت نام اولیه یا فرم‌های خام پول نمی‌دهند؛ ارزش پولی در ۱) حق اشتراک مانیتورینگ امن، ۲) کارمزد اتصال موفق به کارشناس تاییدشده، و ۳) دریافت مستندات استاندارد برای پیشگیری از تکرار حادثه نهفته است.',
      en: 'Organizations do not pay for empty registration forms; monetizable exchange value resides in: 1) secure workspace subscription, 2) transaction commission on verified expert triage, and 3) verified root-cause runbooks.',
    },
    reasoning: {
      fa: 'خسارت ۵۰ میلیون تومانی هر ساعت داون‌تایم در مقایسه با پرداخت چند میلیون تومان دستمزد حل تخصصی، توجیه پرداخت را کاملاً شفاف می‌سازد.',
      en: 'A $1,000/hour downtime loss compared to a $100 expert triage fee creates immediate positive ROI and willingness to transact.',
    },
    currentAssumptions: {
      fa: 'کسب‌وکارها ترجیح می‌دهند مدل پرداخت به ازای استفاده (Pay-per-Incident) را بر اشتراک‌های سالیانه سنگین ترجیح دهند.',
      en: 'Mid-sized businesses favor pay-per-incident or flexible usage fees over heavy fixed annual software lock-ins.',
    },
    neededEvidence: {
      fa: 'طراحی آزمون قیمت‌گذاری و ارزیابی تمایل به پرداخت با مدیران در جلسات دمو فاز ۱.',
      en: 'Pricing preference experiments and willingness-to-pay assessments during Phase 1 demo sessions.',
    },
    statusLabel: 'evidence_needed',
  },
  {
    id: 6,
    question: {
      fa: '۶. آیا ایده از طریق تحقیقات میدانی و بازخورد کاربران قابل ارزیابی است؟',
      en: '6. Can the idea be evaluated through field research and feedback?',
    },
    shortAnswer: {
      fa: 'کاملاً بله؛ از طریق نمایش پروتوتایپ سناریوی SC-01 و آزمون فرآیند پالایش لاگ با مدیران فنی واقعی.',
      en: 'Absolutely; by testing the SC-01 incident scenario prototype and log redaction sandbox with real IT leaders.',
    },
    detailedExplanation: {
      fa: 'پروتوتایپ فاز ۱ دقیقاً به همین منظور ساخته شده است: ایجاد یک ابزار واقعی برای سنجش اینکه آیا فرم ثبت حادثه، دسته‌بندی‌های فنی و مکانیزم پیشنهادی با ادبیات روزمره مهندسان سازمان‌ها همخوانی دارد یا خیر.',
      en: 'The Phase 1 prototype is engineered specifically for this: delivering a functional artifact to measure whether incident categories, severity workflows, and redaction mockups match everyday operator expectations.',
    },
    reasoning: {
      fa: 'بازخورد عینی کاربر روی یک فرم کارآمد و زنده، بسیار دقیق‌تر از پاسخ به سوالات تئوریک و انتزاعی پرسشنامه‌ای است.',
      en: 'Hands-on user feedback on an interactive, working form yields far more dependable insights than abstract hypothetical questionnaires.',
    },
    currentAssumptions: {
      fa: 'ارائه یک پروتوتایپ بدون باگ و دارای پایداری محلی، نرخ مشارکت مدیران در ارائه نقد ساختاریافته را چند برابر می‌کند.',
      en: 'Delivering a stable, bug-free prototype with local persistence triples operator engagement in structured feedback.',
    },
    neededEvidence: {
      fa: 'ثبت حداقل ۱۰ گزارش تست کاربردپذیری با کاربران واقعی در مرحله ارزیابی دانشگاهی.',
      en: 'Recording at least 10 usability test sessions with representative practitioners during academic evaluation.',
    },
    statusLabel: 'proposed',
  },
  {
    id: 7,
    question: {
      fa: '۷. چه سناریوهای جایگزینی در صورت برخورد مدل کسب‌وکار با موانع قابل تصور است؟',
      en: '7. What alternative scenarios exist if the business model encounters obstacles?',
    },
    shortAnswer: {
      fa: 'چرخش به ابزار مدیریت لاگ‌های درون‌سازمانی (Pure Internal Tooling) یا مدل خدمات مشاوره‌ای متمرکز.',
      en: 'Pivoting into an internal-only sanitized log manager or a focused specialist advisory practice.',
    },
    detailedExplanation: {
      fa: 'اگر سازمان‌ها به دلیل مسائل حقوقی از ارتباط با فریلنسرها خودداری کنند، پلتفرم می‌تواند بازارچه دوطرفه را غیرفعال کرده و به عنوان یک نرم‌افزار درون‌سازمانی (On-Premises Incident Sanitizer) برای سامان‌دهی مستندات تیم داخلی فروخته شود.',
      en: 'If organizational legal departments reject open freelancer interactions, the two-sided marketplace can be bypassed, pivoting the software into an on-premises internal incident documentation and sanitization suite.',
    },
    reasoning: {
      fa: 'ماژولار بودن معماری اولیه، استقلال لایه مدیریت حادثه از بازارچه برون‌سپاری را تضمین می‌کند.',
      en: 'The modularity of the Phase 1 architecture ensures the incident management engine operates independently of external matchmaking.',
    },
    currentAssumptions: {
      fa: 'حتی بدون بازارچه کارشناسان، ارزش ابزار ماسک‌سازی و سامان‌دهی حوادث به تنهایی برای جلب مشتریان سازمانی کافی است.',
      en: 'Even without external experts, the sanitization and runbook catalog holds standalone product value for organizations.',
    },
    neededEvidence: {
      fa: 'سنجش نظر مدیران پیرامون جذابیت نسخه خالص درون‌سازمانی (Self-Hosted Edition) در پرسشنامه فاز ۱.',
      en: 'Operator willingness-to-buy interviews for a standalone self-hosted edition in Phase 1 evaluations.',
    },
    statusLabel: 'hypothesis',
  },
  {
    id: 8,
    question: {
      fa: '۸. مشتریان در نبود این پلتفرم در حال حاضر از چه راه‌حل‌های موجودی استفاده می‌کنند؟',
      en: '8. What existing solutions do customers currently use without this platform?',
    },
    shortAnswer: {
      fa: 'پیام‌رسان‌های عمومی (تلگرام/واتس‌اپ)، شرکت‌های سنتی پشتیبانی شبکه و قراردادهای سنگین سالیانه.',
      en: 'Informal chat groups (Telegram/WhatsApp), traditional legacy MSP contracts, and manual unredacted emails.',
    },
    detailedExplanation: {
      fa: 'در حال حاضر، سازمان‌ها یا با شرکت‌های پشتیبانی سنتی (MSP) قراردادهای ماهیانه گزاف می‌بندند که در تخصص‌های نوین لینوکس و ابری کند و ضعیف هستند، یا دسترسی مستقیم SSH سرور را به صورت غیررسمی در گروه‌های گفتگو برای افراد آشنا ارسال می‌کنند.',
      en: 'Currently, firms either pay heavy monthly retainers to legacy MSPs with outdated skills, or unsafely broadcast unredacted credentials to informal contacts in generic chat channels.',
    },
    reasoning: {
      fa: 'شکاف عمیق میان شرکت‌های پرهزینه و کم‌تحرک سنتی و بازارهای عمومی فریلنسری ناامن، موید فرصت جایگزینی راه‌حل ماست.',
      en: 'The wide chasm between rigid, costly legacy MSP retainers and unvetted, insecure freelance boards validates the opportunity.',
    },
    currentAssumptions: {
      fa: 'اکثر سازمان‌ها از هزینه‌ها یا کیفیت خدمات شرکت‌های سنتی پشتیبانی فعلی خود ناراضی هستند.',
      en: 'A majority of organizations are dissatisfied with the response latency and skill relevance of legacy support vendors.',
    },
    neededEvidence: {
      fa: 'بررسی قراردادهای متداول خدمات پشتیبانی شبکه و مصاحبه با مدیرانی که اخیراً داون‌تایم بحرانی داشته‌اند.',
      en: 'Review of standard SLA clauses in traditional maintenance contracts and interviews with recently affected firms.',
    },
    statusLabel: 'requires_validation',
  },
];

export const PROCESS_BOUNDARIES_DATA = {
  online: [
    {
      id: 'on-1',
      title: { fa: 'ثبت و مستندسازی اطلاعات حادثه', en: 'Incident Registration & Documentation' },
      desc: {
        fa: 'ثبت شرح عارضه، سطح اولویت، سیستم‌های آسیب‌دیده و مراحل انجام‌شده در داشبورد تحت وب.',
        en: 'Recording symptom summaries, severity tier, affected services, and attempted steps via the web portal.',
      },
      component: { fa: 'ماژول MVP (SC-01)', en: 'MVP Module (SC-01)' },
    },
    {
      id: 'on-2',
      title: { fa: 'پالایش و ماسک‌سازی داده‌های محرمانه لاگ', en: 'Log Sanitization & Credential Masking' },
      desc: {
        fa: 'شناسایی و جایگزینی اتوماتیک آدرس‌های IP، توکن‌های دسترسی، کلیدهای API و رشته‌های اتصال.',
        en: 'Automated pattern replacement of internal IPs, access tokens, API secrets, and connection strings.',
      },
      component: { fa: 'موتور امنیتی پالایش', en: 'Sanitization Engine' },
    },
    {
      id: 'on-3',
      title: { fa: 'جستجو و تطبیق پروفایل متخصصان', en: 'Expert Search & Skill Matching' },
      desc: {
        fa: 'مشاهده کارشناسان ارزیابی‌شده، سوابق حل بحران و درصد انطباق تخصص با نیازمندی پرونده.',
        en: 'Reviewing vetted engineer profiles, past verified cases, and categorical match metrics.',
      },
      component: { fa: 'بازارچه دیجیتال (فازهای بعدی)', en: 'Digital Marketplace (Future Phases)' },
    },
    {
      id: 'on-4',
      title: { fa: 'انعقاد توافق‌نامه دیجیتال و مفاد محرمانگی', en: 'Digital Agreement & NDA Acceptance' },
      desc: {
        fa: 'تایید شرایط محدوده کار، بودجه و تعهدات عدم افشای اطلاعات به صورت دیجیتال در سامانه.',
        en: 'Online verification of work scope, budget parameters, and legally binding digital NDAs.',
      },
      component: { fa: 'مدیریت قراردادها (فازهای بعدی)', en: 'Contract Manager (Future Phases)' },
    },
    {
      id: 'on-5',
      title: { fa: 'ثبت راهکار نهایی در پایگاه دانش', en: 'Runbook & Knowledge Base Archiving' },
      desc: {
        fa: 'ذخیره‌سازی مستندات علت ریشه‌ای و مراحل برطرف‌سازی در تملک دائمی سازمان.',
        en: 'Persistent archiving of validated root-cause playbooks owned securely by the organization.',
      },
      component: { fa: 'پایگاه دانش سازمانی', en: 'Knowledge Repository' },
    },
  ],
  offline: [
    {
      id: 'off-1',
      title: { fa: 'بررسی فیزیکی تجهیزات سخت‌افزاری سرور', en: 'Physical Server Hardware Inspection' },
      desc: {
        fa: 'عیب‌یابی فیزیکی خرابی منبع تغذیه (Power Supply)، کنترلر RAID، تعویض رم معیوب یا تست کابل‌ها در رک.',
        en: 'Physical diagnosis of failed power supplies, RAID controllers, faulty RAM modules, or rack cabling.',
      },
      reason: {
        fa: 'نیازمند حضور تکنسین در محل دیتاسنتر و دسترسی فیزیکی مستقیم به شاسی سرور است.',
        en: 'Requires physical datacenter access and manual mechanical interaction with server chassis.',
      },
    },
    {
      id: 'off-2',
      title: { fa: 'پچ‌کردن و اتصالات فیزیکی کابل‌کشی شبکه', en: 'On-Site Network Cabling & Patching' },
      desc: {
        fa: 'کابل‌کشی ساخت‌یافته فیبر نوری، جابجایی پورت‌های سوئیچ یا نصب تجهیزات فیزیکی روتر در دیتاسنتر.',
        en: 'Structured fiber cabling, patch-panel rerouting, or physical rack-mounting of router hardware.',
      },
      reason: {
        fa: 'ماهیت سخت‌افزاری دارد و از طریق رابط‌های نرم‌افزاری تحت وب پلتفرم قابل انجام نیست.',
        en: 'Inherently physical in nature and fundamentally outside web-based software operations.',
      },
    },
    {
      id: 'off-3',
      title: { fa: 'تعویض فیزیکی قطعات و گارانتی تجهیزات', en: 'Physical Component Replacement & RMA' },
      desc: {
        fa: 'ارسال هارد دیسک سوخته به شرکت گارانتی، تحویل فیزیکی قطعه یدکی و جاگذاری در سرور.',
        en: 'Returning burned drive units under vendor RMA and physically slotting replacement drives.',
      },
      reason: {
        fa: 'فرآیندی لجستیکی و مبتنی بر اشیاء فیزیکی خارج از کنترل سامانه‌های نرم‌افزاری است.',
        en: 'A logistics and hardware supply-chain activity completely external to software platforms.',
      },
    },
    {
      id: 'off-4',
      title: { fa: 'ممیزی‌های حضوری امنیتی و اتاق سرور', en: 'Physical Datacenter Security Audits' },
      desc: {
        fa: 'بازرسی سیستم‌های اطفای حریق، کنترل دمای اتاق سرور و سیستم‌های احراز هویت بیومتریک ورودی.',
        en: 'On-prem inspection of fire suppression, cooling airflow chambers, and biometric door access.',
      },
      reason: {
        fa: 'مربوط به امنیت فیزیکی محیط دیتاسنتر است و پروتکل‌های نرم‌افزاری در آن دخیل نیستند.',
        en: 'Pertains to environmental and physical facility defense, outside virtual software purview.',
      },
    },
  ],
};

export const ARCHITECTURE_DATA: ArchitectureComponent[] = [
  {
    id: 'arch-ui',
    number: 1,
    name: { fa: 'رابط کاربری تعاملی (User Interface)', en: 'Interactive User Interface' },
    role: {
      fa: 'لایه ارائه، تعامل کاربر، نمایش فرم‌ها، دیاگرام‌ها و هدایت جریان کار',
      en: 'Presentation layer managing user interactions, forms, diagrams, and workflow navigation',
    },
    responsibilities: {
      fa: [
        'ارائه تجربه واکنش‌گرا و سازگار با دسکتاپ و موبایل',
        'پشتیبانی دوطرفه از زبان فارسی (RTL) و انگلیسی (LTR)',
        'تغییر پویای تم تیره و روشن بر اساس اولویت کاربر',
        'اعتبارسنجی اولیه فرم‌ها و نمایش پیام‌های خطای راهنما',
      ],
      en: [
        'Deliver responsive desktop and mobile experiences',
        'Provide bi-directional Persian (RTL) and English (LTR) layouts',
        'Enable dynamic Light/Dark mode transitions',
        'Client-side form validation with actionable error feedback',
      ],
    },
    inputs: {
      fa: ['ورودی‌های تعاملی کاربر (کلیک، داده‌های فرم، تنظیمات تم و زبان)'],
      en: ['User interaction events (clicks, form data, theme and language preferences)'],
    },
    outputs: {
      fa: ['رندرهای صفحه، فرم‌های اعتبارسنجی‌شده، درخواست‌های تغییر لایه داده'],
      en: ['Rendered DOM trees, validated inputs, state mutation requests to data layer'],
    },
    relationships: {
      fa: 'به صورت مستقیم با بخش‌های تحلیل پروژه، محیط MVP و ارائه‌دهنده زمینه (Context) ارتباط دارد.',
      en: 'Directly interfaces with Project Explanation views, MVP Workspace, and App Context.',
    },
    status: 'implemented_phase1',
  },
  {
    id: 'arch-explanation',
    number: 2,
    name: { fa: 'بخش تحلیل پروژه (Project Explanation)', en: 'Project Explanation Engine' },
    role: {
      fa: 'ارائه علمی و ساختاریافته مبانی کسب‌وکار، پرسش‌های بلوغ ایده و مدل مفهومی',
      en: 'Structured presentation of business analysis, maturity evaluation, and conceptual models',
    },
    responsibilities: {
      fa: [
        'نمایش کارت‌های تعاملی تفکیک فرضیات از شواهد اعتبارسنجی',
        'ارائه ۸ پرسش استاندارد ارزیابی ایده با جزئیات کامل تحلیلی',
        'نمایش مقایسه‌ای فرآیندهای برخط در برابر خدمات فیزیکی برون‌پلتفرمی',
        'میزبانی مصورسازی سه‌بعدی و ایزومتریک جریان کار محصول',
      ],
      en: [
        'Display interactive cards distinguishing hypotheses from validated facts',
        'Present the 8 standardized maturity evaluation questions with in-depth reasoning',
        'Showcase comparative online platform vs on-site physical process boundaries',
        'Host the 3D/isometric workflow visualization sandbox',
      ],
    },
    inputs: {
      fa: ['داده‌های ثابت تحلیل پروژه، رویدادهای انتخاب کارت‌ها توسط کاربر'],
      en: ['Static phase 1 analytical datasets, card selection and inspection events'],
    },
    outputs: {
      fa: ['پنل‌های توضیحات تفصیلی، گزارش‌های ساختاریافته امکان‌سنجی'],
      en: ['Detailed explanation modals/drawers, structured feasibility reviews'],
    },
    relationships: {
      fa: 'اطلاعات مفهومی لازم را برای درک اهداف ماژول MVP فراهم می‌سازد.',
      en: 'Supplies conceptual context justifying the implementation parameters of the MVP Workspace.',
    },
    status: 'implemented_phase1',
  },
  {
    id: 'arch-mvp',
    number: 3,
    name: { fa: 'محیط عملیاتی MVP (MVP Workspace)', en: 'MVP Prototype Workspace' },
    role: {
      fa: 'فضای آزمون سناریوی اولیه کاربری و ثبت رخدادهای فنی واقعی',
      en: 'Execution environment for initial functional user scenarios and incident intake',
    },
    responsibilities: {
      fa: [
        'میزبانی داشبورد ساده وضعیت فاز ۱',
        'ارائه سناریوی عملیاتی SC-01 (ثبت حادثه فنی)',
        'نمایش فهرست حوادث ثبت‌شده با تفکیک داده‌های آزمایشی',
        'امکان مشاهده پرونده و جزئیات کامل هر حادثه',
      ],
      en: [
        'Host the Phase 1 prototype dashboard',
        'Execute the functional SC-01 scenario (Create Technical Incident)',
        'Display the incident registry distinguishing sample vs submitted records',
        'Provide structured incident detail inspection views',
      ],
    },
    inputs: {
      fa: ['اطلاعات ورودی فرم ثبت حادثه، فیلترهای جستجو در فهرست حوادث'],
      en: ['Incident intake form inputs, search queries and severity filters'],
    },
    outputs: {
      fa: ['رکورد حادثه جدید، پیام‌های تایید، به‌روزرسانی فهرست پرونده‌ها'],
      en: ['New incident records, confirmation toasts, real-time list updates'],
    },
    relationships: {
      fa: 'مستقیماً با ماژول مدیریت حوادث و لایه داده اولیه در تعامل است.',
      en: 'Interacts directly with Incident Management logic and the Initial Data Layer.',
    },
    status: 'implemented_phase1',
  },
  {
    id: 'arch-incident-mgmt',
    number: 4,
    name: { fa: 'مدیریت حوادث (Incident Management Logic)', en: 'Incident Management Logic' },
    role: {
      fa: 'پردازش منطق تجاری سناریوی SC-01، اعتبارسنجی داده‌ها و تولید شناسه‌های یکتا',
      en: 'Enforces business rules for scenario SC-01, input validation, and unique ID generation',
    },
    responsibilities: {
      fa: [
        'اعتبارسنجی مقادیر عنوان، دسته‌بندی، اولویت و سیستم تحت تاثیر',
        'تولید شناسه استاندارد تیکت با فرمت INC-2026-XXXX',
        'تخصیص وضعیت اولیه «ثبت‌شده (Submitted)» به پرونده‌ها',
        'مدیریت افزودن، بازخوانی و فیلتر کردن پرونده‌های فنی',
      ],
      en: [
        'Validate title length, required categories, severity, and impacted targets',
        'Generate standardized unique ticket identifiers (e.g. INC-2026-XXXX)',
        'Assign initial default status of "Submitted" to incoming incidents',
        'Coordinate intake, retrieval, and sorting of incident models',
      ],
    },
    inputs: {
      fa: ['شیء خام حادثه ارسالی از فرم کاربر'],
      en: ['Raw incident payload submitted from client forms'],
    },
    outputs: {
      fa: ['مدل معتبر حادثه با متادیتا و مهر زمانی استاندارد'],
      en: ['Validated incident domain object enriched with timestamps and unique IDs'],
    },
    relationships: {
      fa: 'داده‌های پردازش‌شده را جهت ذخیره‌سازی به لایه داده ارسال می‌کند.',
      en: 'Dispatches validated objects to the Initial Data Layer for persistence.',
    },
    status: 'implemented_phase1',
  },
  {
    id: 'arch-data-layer',
    number: 5,
    name: { fa: 'لایه داده اولیه (Initial Data Layer)', en: 'Initial Data Layer' },
    role: {
      fa: 'لایه انتزاع دسترسی به داده‌ها، جداسازی منطق برنامه از رسانه ذخیره‌سازی',
      en: 'Data abstraction repository decoupling application logic from physical storage media',
    },
    responsibilities: {
      fa: [
        'مدیریت عملیات CRUD حوادث بدون وابستگی مستقیم کامپوننت‌ها به LocalStorage',
        'تزریق داده‌های بذر اولیه (Seed Data) در اولین اجرای برنامه',
        'مدیریت اشتراک‌های رویدادی (Subscriptions) برای رندر مجدد کلاینت',
        'فراهم‌سازی ساختار آماده برای مهاجرت بدون دردسر به پایگاه داده در فازهای بعد',
      ],
      en: [
        'Manage incident CRUD operations without component coupling to browser storage APIs',
        'Hydrate initial sample seed records on first launch',
        'Provide reactive subscriptions for synchronized client re-renders',
        'Maintain domain contracts ready for painless Supabase/PostgreSQL migration later',
      ],
    },
    inputs: {
      fa: ['درخواست‌های ذخیره، بازیابی و بازنشانی اطلاعات'],
      en: ['Save, retrieve, and reset data operations'],
    },
    outputs: {
      fa: ['آرایه‌ای از حوادث اعتبارسنجی‌شده و داده‌های اولیه تحلیل'],
      en: ['Arrays of typed incident models and analytical reference datasets'],
    },
    relationships: {
      fa: 'پلی ارتباطی میان ماژول مدیریت حوادث و حافظه LocalStorage است.',
      en: 'Bridges incident management controllers with physical browser storage mechanisms.',
    },
    status: 'implemented_phase1',
  },
  {
    id: 'arch-storage',
    number: 6,
    name: { fa: 'ذخیره‌سازی محلی (LocalStorage / Mock Data)', en: 'LocalStorage / Mock Data' },
    role: {
      fa: 'پایداری داده‌ها در مرورگر بدون نیاز به زیرساخت سرور پشتیبان در فاز ۱',
      en: 'Client-side data persistence ensuring zero loss on page refreshes in Phase 1',
    },
    responsibilities: {
      fa: [
        'سریال‌سازی و ذخیره کلیدهای تم، زبان و حوادث در حافظه محلی مرورگر',
        'پایداری اطلاعات پس از رفرش یا بسته شدن تب مرورگر',
        'تفکیک صریح رکوردهای تستی کاربر از نمونه‌های اولیه سامانه',
        'امکان بازنشانی ساده اطلاعات به داده‌های اولیه پروژه',
      ],
      en: [
        'Serialize and store theme, language, and incident collections in browser storage',
        'Preserve session states and user-created incidents across browser reloads',
        'Strictly distinguish user-created incidents from seeded prototype samples',
        'Provide simple reset affordances back to initial default seed state',
      ],
    },
    inputs: {
      fa: ['رشته‌های JSON بسته‌بندی‌شده از لایه داده'],
      en: ['Serialized JSON strings received from the repository layer'],
    },
    outputs: {
      fa: ['داده‌های بازیابی‌شده به هنگام باز شدن صفحه'],
      en: ['Hydrated records loaded upon initial window mounting'],
    },
    relationships: {
      fa: 'منحصراً توسط لایه داده اولیه (Initial Data Layer) فراخوانی می‌شود.',
      en: 'Accessed exclusively by the Initial Data Layer repository abstraction.',
    },
    status: 'implemented_phase1',
  },
  {
    id: 'arch-future',
    number: 7,
    name: { fa: 'نقاط اتصال آینده (Future Integration Points)', en: 'Future Integration Points' },
    role: {
      fa: 'طراحی معماری آینده‌نگر جهت اتصال سرویس‌های خارجی بدون بازنویسی کد فاز ۱',
      en: 'Architectural extension slots prepared for subsequent phase integrations without refactoring',
    },
    responsibilities: {
      fa: [
        'نقطه اتصال به پایگاه داده رابطه‌ای ابری (Supabase / Cloud SQL)',
        'درگاه اتصال به پروکسی مانیتورینگ امن (Zabbix/Prometheus Webhooks)',
        'سرویس‌های اعتبارسنجی هویت متخصصان و تسویه حساب امانی (Escrow)',
        'سرویس‌های توزیع‌شده ثبت نشست‌های فقط‌خواندنی (Audit Proxy)',
      ],
      en: [
        'Pluggable repository interface for cloud relational database migration (Supabase)',
        'Webhook ingestion endpoints for monitoring sensors (Zabbix/Prometheus)',
        'Identity verification and escrow payment gateway providers',
        'Read-only session recording and bastion proxy connectors',
      ],
    },
    inputs: {
      fa: ['وب‌هوک‌های آتی، قراردادهای API برون‌پلتفرمی'],
      en: ['Future telemetry webhooks, external REST/gRPC API payloads'],
    },
    outputs: {
      fa: ['گزارش‌های همگام‌سازی ابری و هشدارهای بلادرنگ'],
      en: ['Cloud synchronization states and real-time incident triage triggers'],
    },
    relationships: {
      fa: 'در حال حاضر به عنوان لایه انتزاعی در کدهای داده و مدل معماری تعبیه شده است.',
      en: 'Embedded conceptually in domain contracts ready for Phase 2/3 activation.',
    },
    status: 'future_phase',
  },
];

export const WORKFLOW_NODES_DATA: WorkflowNode[] = [
  {
    id: 'wf-org',
    order: 1,
    name: { fa: 'سازمان متقاضی', en: 'Organization' },
    shortRole: { fa: 'منبع ایجاد و مالک داده‌های زیرساخت', en: 'Source & owner of infrastructure data' },
    detailedDesc: {
      fa: 'کسب‌وکار یا شرکت متوسطی که با اختلال عملیاتی یا افت کارایی مواجه شده است. این سازمان نیازمند حل عارضه بدون به خطر افتادن امنیت است.',
      en: 'The mid-sized business experiencing an infrastructure slowdown or outage. Needs rapid resolution without security compromise.',
    },
    privacyLevel: 'private',
    privateItems: {
      fa: ['اطلاعات هویتی کامل مشتریان', 'نام کاربری و رمزهای عبور روت', 'توپولوژی داخلی شبکه و IPها', 'قراردادهای داخلی و تراکنش‌های مالی'],
      en: ['Customer PII and user databases', 'Root credentials and private keys', 'Internal network topology and private CIDRs', 'Financial records and commercial contracts'],
    },
  },
  {
    id: 'wf-incident',
    order: 2,
    name: { fa: 'حادثه فنی خام', en: 'Technical Incident' },
    shortRole: { fa: 'رخداد ثبت‌شده شامل لاگ‌ها و شواهد اولیه', en: 'Logged incident with raw error traces' },
    detailedDesc: {
      fa: 'عارضه سیستمی همراه با پیام‌های خطای سرور، کدهای وضعیت ۵۰۰، زمان بروز و فایل‌های پیکربندی اولیه که به صورت محلی در سازمان مستند می‌شوند.',
      en: 'System disruption captured with raw server error logs, HTTP 500 status dumps, timestamps, and active configuration snippets documented internally.',
    },
    privacyLevel: 'private',
    privateItems: {
      fa: ['رشته‌های خام اتصال به پایگاه داده (Connection Strings)', 'کلیدهای فعال API سرور', 'آدرس‌های سرورهای مستقر در دیتاسنتر داخلی'],
      en: ['Raw database connection strings with embedded passwords', 'Production server API keys and secret tokens', 'Internal datacenter hostname identifiers'],
    },
  },
  {
    id: 'wf-analysis',
    order: 3,
    name: { fa: 'تحلیل اولیه عارضه', en: 'Incident Analysis' },
    shortRole: { fa: 'دسته‌بندی فنی و تعیین سطح فوریت', en: 'Categorization and severity assignment' },
    detailedDesc: {
      fa: 'ارزیابی دامنه فنی حادثه (دیتابیس، شبکه، سیستم‌عامل، دواپس) و تخصیص سطح اولویت بر اساس شدت آسیب به خدمات سازمان.',
      en: 'Triage process evaluating technical domain (database, network, OS, cloud) and determining severity impact on business continuity.',
    },
    privacyLevel: 'internal_system',
    sharableItems: {
      fa: ['دسته‌بندی فنی حادثه (مانند Database)', 'سطح اولویت (Critical, High...)', 'محیط کاری کلی (مانند Ubuntu 22.04 / PostgreSQL 15)'],
      en: ['Technical problem category (e.g. Database)', 'Severity tier (Critical, High...)', 'Generic environment specification (e.g. Linux / PostgreSQL 15)'],
    },
  },
  {
    id: 'wf-masking',
    order: 4,
    name: { fa: 'حفاظت و ماسک‌سازی داده حساس', en: 'Data Protection & Redaction' },
    shortRole: { fa: 'موتور پوشش‌دهی آی‌پی، پسورد و توکن‌ها', en: 'Regex redaction of sensitive credentials' },
    detailedDesc: {
      fa: 'فیلتر امنیتی که با جایگزینی مقادیر حساس با برچسب‌های استاندارد، نسخه‌ای پالایش‌شده تولید می‌کند که ساختار فنی خطا را جهت حل حفظ کرده اما اسرار را مخفی می‌سازد.',
      en: 'Security engine replacing sensitive tokens with standard tags, producing a sanitized artifact preserving diagnostic syntax while neutralizing secrets.',
    },
    privacyLevel: 'sanitized_sharable',
    sharableItems: {
      fa: ['متن خطای استک‌تریس پالایش‌شده', 'الگوی عمومی کوری‌های دارای بن‌بست', 'متریک‌های کارایی بدون ارقام حساس تجاری'],
      en: ['Redacted stack trace snippets', 'Abstracted query lock contention patterns', 'Performance latency curves without commercial volume'],
    },
  },
  {
    id: 'wf-expert',
    order: 5,
    name: { fa: 'شناسایی و تطبیق متخصص', en: 'Expert Discovery' },
    shortRole: { fa: 'تطبیق تخصص بر مبنای دسته‌بندی و نشان صلاحیت', en: 'Skill matching & verified vetting' },
    detailedDesc: {
      fa: 'ارجاع نسخه ماسک‌شده پرونده به کارشناسان دارای تاییدیه صلاحیت فنی و امنیتی (Security-Vetted) متناسب با گرایش دقیق خطای رخ‌داده.',
      en: 'Dispatching the sanitized case to vetted technical specialists matching the exact problem domain and certified credentials.',
    },
    privacyLevel: 'sanitized_sharable',
    sharableItems: {
      fa: ['خلاصه شرح فنی مشکل پالایش‌شده', 'مهارت‌های تخصصی مورد نیاز برای پذیرش', 'سقف بودجه و بازه زمانی پیشنهادی سازمان'],
      en: ['Sanitized technical problem overview', 'Required domain skill qualifications', 'Budget scope and turnaround timeline parameters'],
    },
  },
  {
    id: 'wf-collab',
    order: 6,
    name: { fa: 'همکاری و مداخله امن', en: 'Secure Collaboration' },
    shortRole: { fa: 'محیط ایزوله بر بستر تعهدات NDA و دسترسی موقت', en: 'Isolated collaboration under digital NDA' },
    detailedDesc: {
      fa: 'فرآیند حل مسئله تحت توافق‌نامه محرمانگی، اعطای دسترسی‌های فقط‌خواندنی موقت با انقضای خودکار و ثبت نشست‌های ممیزی.',
      en: 'Diagnostic collaboration governed by digital NDAs, temporary read-only permissions with automatic expiry, and audit trails.',
    },
    privacyLevel: 'internal_system',
    privateItems: {
      fa: ['دسترسی‌های همیشگی به سرور (اکیداً ممنوع)', 'پسورد اصلی روت زیرساخت (هرگز افشا نمی‌شود)'],
      en: ['Permanent server credentials (strictly prohibited)', 'Main administrative root passwords (never disclosed)'],
    },
  },
  {
    id: 'wf-res',
    order: 7,
    name: { fa: 'حل ریشه‌ای و ثبت دانش', en: 'Resolution & Runbook' },
    shortRole: { fa: 'بازیابی سرویس، مستندسازی و تسویه امانی', en: 'Service restoration, playbook archiving' },
    detailedDesc: {
      fa: 'تایید رفع کامل عارضه توسط سازمان، ثبت تحلیل علت ریشه‌ای (Root Cause) در پایگاه دانش داخلی شرکت، و تسویه امانی حق‌الزحمه.',
      en: 'Validation of operational recovery by the organization, archiving root-cause runbooks into internal repositories, and escrow fee release.',
    },
    privacyLevel: 'sanitized_sharable',
    sharableItems: {
      fa: ['دستورالعمل استاندارد پیشگیری از تکرار حادثه', 'روش بهینه‌سازی کدهای آسیب‌پذیر در پایگاه دانش'],
      en: ['Standard operating procedure preventing recurrence', 'Sanitized playbook archived in organizational runbooks'],
    },
  },
];

export const INITIAL_SEED_INCIDENTS: Incident[] = [
  {
    id: 'inc-sample-1',
    ticketNumber: 'INC-2026-0104',
    title: 'افت کارایی و اشباع صف اتصالات پایگاه داده PostgreSQL',
    category: 'database',
    severity: 'critical',
    affectedSystem: 'کلاستر اصلی پایگاه داده سفارشات (orders-db-cluster)',
    description: 'در زمان شروع کمپین تخفیف، تعداد اتصالات فعال به مرز حداکثری (۵۰۰ اتصال) رسیده و درخواست‌های تسویه حساب مشتریان با خطای Timeout رد می‌شوند.',
    stepsTaken: 'افزایش موقت max_connections به ۷۵۰ در pgpool و ریستارت وب‌سرورهای بک‌اند که منجر به افت مجدد بعد از ۱۰ دقیقه شد.',
    createdAt: '۱۴۰۵/۰۱/۱۵ ۱۰:۳۰',
    status: 'submitted',
    isSample: true,
  },
  {
    id: 'inc-sample-2',
    ticketNumber: 'INC-2026-0108',
    title: 'انقضای پیش‌بینی‌نشده گواهی SSL و قطعی ارتباط وب‌سرویس پرداخت',
    category: 'infrastructure',
    severity: 'high',
    affectedSystem: 'پروکسی لبه و متعادل‌کننده بار (HAProxy Edge Ingress)',
    description: 'به دلیل خطای کران‌جاب Certbot در چالش HTTP-01، گواهی دامین درگاه بانکی تمدید نشده و مرورگرها اخطار امنیتی صادر می‌کنند.',
    stepsTaken: 'اجرای دستی دستور certbot renew که به دلیل تداخل پورت ۸۰ با سرویس Nginx با خطا متوقف شد.',
    createdAt: '۱۴۰۵/۰۱/۱۶ ۰۱:۱۵',
    status: 'submitted',
    isSample: true,
  },
];
