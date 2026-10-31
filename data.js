/**
 * ============================================================
 *  DATA.JS — Single source of truth for portfolio content
 *  Edit this file to update the site without touching HTML/CSS.
 * ============================================================
 */

const PORTFOLIO_DATA = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  personal: {
    nameEn: "Mustafa Abu El-Ata",
    nameAr: "مصطفى أبو العطا",
    titleEn: "Data Entry Specialist",
    titleAr: "متخصص إدخال البيانات",
    taglineEn: "Accurate · Fast · Confidential",
    taglineAr: "دقيق · سريع · موثوق",
    valuePropEn: "Delivering error-free data entry, clean spreadsheets, and perfectly formatted documents — on time, every time.",
    valuePropAr: "أُقدّم خدمات إدخال بيانات خالية من الأخطاء، وجداول بيانات منظّمة، ومستندات مُنسّقة باحترافية — في الوقت المحدد دائمًا.",
    email: "",
    phone: "+20 110 158 7881",
    whatsapp: "https://wa.me/201101587881",
    location: "Egypt 🇪🇬",
    locationAr: "مصر 🇪🇬",
    availabilityEn: "Available for remote & freelance worldwide",
    availabilityAr: "متاح للعمل عن بُعد والمستقل عالميًا",
    cvPath: "assets/cv.pdf",
  },

  /* ── LINKS ──────────────────────────────────────────────── */
  links: {
    linkedin:  "https://www.linkedin.com/in/mustafa-atta-mis/",
    upwork:    "[ADD: https://www.upwork.com/freelancers/~your-profile]",
    khamsat:   "https://khamsat.com/user/mustafa20222atta",
    mostaql:   "https://mostaql.com/u/Mustafa20222",
    fiverr:    "https://www.fiverr.com/mustafa_atta1",
    github:    "https://github.com/mustafaatta20012",
    formspree: "[ADD: https://formspree.io/f/your-form-id]",
  },

  /* ── HERO STATS ─────────────────────────────────────────── */
  stats: [
    { labelEn: "Accuracy Rate",       labelAr: "معدل الدقة",            target: 99,  suffix: "%" },
    { labelEn: "Projects Completed",  labelAr: "مشروع مُنجز",           target: 50,  suffix: "+" },
    { labelEn: "WPM Typing (EN)",     labelAr: "كلمة/دقيقة إنجليزي",   target: 60,  suffix: ""  },
    { labelEn: "Hours of Experience", labelAr: "ساعة خبرة",             target: 500, suffix: "+" },
  ],

  /* ── SERVICES ───────────────────────────────────────────── */
  services: [
    {
      icon: "keyboard",
      titleEn: "Manual Data Entry",
      titleAr: "إدخال البيانات يدويًا",
      descEn: "Fast and accurate manual data entry from any source — paper forms, PDFs, images, or handwritten documents — into Excel, Google Sheets, Word, databases, or any custom system. Ideal for bulk data entry projects requiring high accuracy and consistent formatting.",
      descAr: "إدخال بيانات يدوي سريع ودقيق من أي مصدر — نماذج ورقية أو PDF أو صور أو مستندات مكتوبة بخط اليد — إلى Excel أو Google Sheets أو Word أو قواعد البيانات أو أي نظام مخصص.",
    },
    {
      icon: "scan-pdf",
      titleEn: "PDF / Scan / Image Data Entry",
      titleAr: "إدخال بيانات PDF والصور الممسوحة",
      descEn: "Extract and type data from scanned documents, PDF files, images, and photo-captured forms with 99%+ accuracy. Handles Arabic and English content, OCR-assisted extraction, and complex table structures.",
      descAr: "استخراج وكتابة البيانات من المستندات الممسوحة ضوئيًا وملفات PDF والصور والنماذج الملتقطة بالكاميرا بدقة 99%+. يعالج المحتوى العربي والإنجليزي وهياكل الجداول المعقدة.",
    },
    {
      icon: "spreadsheet",
      titleEn: "Excel & Google Sheets Cleaning",
      titleAr: "تنظيف وتنسيق Excel وGoogle Sheets",
      descEn: "Professional Excel and Google Sheets data cleaning: remove duplicates, fix inconsistencies, standardize date and phone formats, apply conditional formatting, build VLOOKUP/XLOOKUP formulas, create pivot tables, and structure messy datasets into clean, analysis-ready files.",
      descAr: "تنظيف بيانات Excel وGoogle Sheets باحترافية: إزالة التكرارات، إصلاح التناقضات، توحيد صيغ التواريخ والأرقام، تطبيق التنسيق الشرطي، بناء صيغ VLOOKUP وXLOOKUP، إنشاء جداول محورية.",
    },
    {
      icon: "database",
      titleEn: "Database & CRM Data Entry",
      titleAr: "إدخال قواعد البيانات وأنظمة CRM",
      descEn: "Accurate population of CRMs, ERPs, Airtable, Notion, Google Forms, or any custom database system. Handles bulk imports, form submissions, contact lists, inventory records, and patient databases with strict attention to data integrity.",
      descAr: "ملء دقيق لأنظمة CRM وERP وAirtable وNotion وGoogle Forms أو أي نظام قاعدة بيانات مخصص. يتعامل مع الاستيراد بالجملة وقوائم جهات الاتصال وسجلات المخزون.",
    },
    {
      icon: "search-web",
      titleEn: "Web Research & Data Collection",
      titleAr: "البحث على الويب وجمع البيانات",
      descEn: "Systematic web research and data collection from websites, directories, LinkedIn, and online databases. Compile, verify, and organize data into structured Excel or Google Sheets files ready for analysis or outreach.",
      descAr: "بحث منهجي على الويب وجمع بيانات من المواقع الإلكترونية والأدلة وLinkedIn وقواعد البيانات. تجميع البيانات والتحقق منها وتنظيمها في ملفات Excel أو Google Sheets منظّمة.",
    },
    {
      icon: "clipboard",
      titleEn: "Document & Form Processing",
      titleAr: "معالجة المستندات والنماذج الإدارية",
      descEn: "Process, organize, and digitize paperwork, applications, surveys, contracts, and administrative forms. Convert physical documents to structured digital records with consistent formatting and accurate data capture.",
      descAr: "معالجة وتنظيم ورقمنة الأوراق والطلبات والاستطلاعات والعقود والنماذج الإدارية. تحويل المستندات الورقية إلى سجلات رقمية منظّمة.",
    },
    {
      icon: "microphone",
      titleEn: "Transcription — Arabic & English",
      titleAr: "التفريغ النصي — عربي وإنجليزي",
      descEn: "Accurate transcription of audio recordings, video content, meetings, lectures, and interviews in Arabic and English. Produces clean, properly formatted text documents with timestamps available on request.",
      descAr: "تفريغ نصي دقيق للتسجيلات الصوتية ومحتوى الفيديو والاجتماعات والمحاضرات والمقابلات باللغتين العربية والإنجليزية. ينتج مستندات نصية نظيفة ومنسقة بشكل صحيح.",
    },
    {
      icon: "format-doc",
      titleEn: "Word & PowerPoint Formatting",
      titleAr: "تنسيق Word وPowerPoint",
      descEn: "Professional formatting of Word documents, reports, CVs, and PowerPoint presentations. Apply consistent styles, headings, tables, and layouts. Specializes in Arabic RTL documents and bilingual Arabic/English presentations.",
      descAr: "التنسيق الاحترافي لمستندات Word والتقارير والسيرة الذاتية وعروض PowerPoint. تطبيق أنماط وعناوين وجداول وتخطيطات متسقة. متخصص في مستندات RTL العربية وعروض ثنائية اللغة.",
    },
    {
      icon: "shield-check",
      titleEn: "Data Verification & Quality Control",
      titleAr: "التحقق من البيانات ومراقبة الجودة",
      descEn: "Cross-check, validate, and audit datasets to identify and eliminate errors, duplicates, and inconsistencies. Every deliverable passes a rigorous two-stage quality check before submission — zero errors guaranteed.",
      descAr: "التدقيق والتحقق من مجموعات البيانات للكشف عن الأخطاء والتكرارات وعدم الاتساق والقضاء عليها. كل مُخرَج يجتاز مراجعة جودة صارمة من مرحلتين قبل التسليم.",
    },
    {
      icon: "medical-plus",
      titleEn: "Medical & Academic Data Entry",
      titleAr: "إدخال البيانات الطبية والأكاديمية",
      descEn: "Handle sensitive patient records, clinical data, research datasets, and academic information with strict confidentiality. NDA available. Experienced with medical terminology in Arabic and English.",
      descAr: "التعامل مع سجلات المرضى الحساسة والبيانات السريرية ومجموعات بيانات البحث والمعلومات الأكاديمية بسرية تامة. اتفاقية NDA متاحة. خبرة بالمصطلحات الطبية عربياً وإنجليزياً.",
    },
  ],

  /* ── SKILLS ─────────────────────────────────────────────── */
  skills: [
    { group: "Software & Tools",    groupAr: "البرامج والأدوات",   items: [
      { nameEn: "Microsoft Excel",          nameAr: "مايكروسوفت إكسل",       pct: 95 },
      { nameEn: "Google Sheets",            nameAr: "جوجل شيتس",              pct: 92 },
      { nameEn: "Microsoft Word",           nameAr: "مايكروسوفت وورد",        pct: 93 },
      { nameEn: "Microsoft PowerPoint",     nameAr: "مايكروسوفت بوربوينت",    pct: 90 },
      { nameEn: "Adobe Acrobat / PDF",      nameAr: "أدوبي أكروبات / PDF",    pct: 85 },
      { nameEn: "OCR & Data Extraction",    nameAr: "استخراج البيانات OCR",    pct: 82 },
    ]},
    { group: "Data Skills",         groupAr: "مهارات البيانات",    items: [
      { nameEn: "Data Cleaning & Formatting",    nameAr: "تنظيف البيانات وتنسيقها",   pct: 95 },
      { nameEn: "Duplicate Detection & Removal", nameAr: "كشف التكرارات وإزالتها",    pct: 97 },
      { nameEn: "VLOOKUP / XLOOKUP / IF",       nameAr: "VLOOKUP / XLOOKUP / IF",     pct: 88 },
      { nameEn: "Pivot Tables & Charts",         nameAr: "الجداول والرسوم المحورية",   pct: 85 },
      { nameEn: "Data Validation & Rules",       nameAr: "التحقق من البيانات",         pct: 90 },
      { nameEn: "Conditional Formatting",        nameAr: "التنسيق الشرطي",             pct: 88 },
    ]},
    { group: "Typing & Language",   groupAr: "الكتابة واللغة",     items: [
      { nameEn: "English Typing Speed",  nameAr: "سرعة الكتابة بالإنجليزية",  pct: 75 },
      { nameEn: "Arabic Typing Speed",   nameAr: "سرعة الكتابة بالعربية",     pct: 80 },
      { nameEn: "Arabic Language",       nameAr: "اللغة العربية",             pct: 100 },
      { nameEn: "English Language",      nameAr: "اللغة الإنجليزية",         pct: 78 },
    ]},
    { group: "Professional Skills", groupAr: "المهارات المهنية",   items: [
      { nameEn: "Attention to Detail",    nameAr: "الانتباه للتفاصيل",     pct: 98 },
      { nameEn: "Time Management",        nameAr: "إدارة الوقت",            pct: 93 },
      { nameEn: "Confidentiality & NDA", nameAr: "السرية واتفاقيات NDA",  pct: 100 },
      { nameEn: "Client Communication",   nameAr: "التواصل مع العملاء",    pct: 88 },
      { nameEn: "Deadline Adherence",     nameAr: "الالتزام بالمواعيد",    pct: 96 },
    ]},
  ],

  /* ── TOOLS ──────────────────────────────────────────────── */
  tools: [
    { slug: "microsoftexcel",       name: "Microsoft Excel",     nameAr: "مايكروسوفت إكسل"   },
    { slug: "googlesheets",         name: "Google Sheets",       nameAr: "جوجل شيتس"          },
    { slug: "microsoftword",        name: "Microsoft Word",      nameAr: "مايكروسوفت وورد"    },
    { slug: "microsoftpowerpoint",  name: "PowerPoint",          nameAr: "بوربوينت"            },
    { slug: "microsoftoutlook",     name: "Microsoft Outlook",   nameAr: "أوتلوك"             },
    { slug: "googleforms",          name: "Google Forms",        nameAr: "جوجل فورمز"         },
    { slug: "googledrive",          name: "Google Drive",        nameAr: "جوجل درايف"         },
    { slug: "microsoftonedrive",    name: "OneDrive",            nameAr: "ون درايف"           },
    { slug: "gmail",                name: "Gmail",               nameAr: "جيميل"              },
    { slug: "adobeacrobatreader",   name: "Adobe Acrobat PDF",   nameAr: "أدوبي PDF"          },
    { slug: "airtable",             name: "Airtable",            nameAr: "إيرتيبل"            },
    { slug: "notion",               name: "Notion",              nameAr: "نوشن"               },
    { slug: "openai",               name: "ChatGPT / AI",        nameAr: "ChatGPT / AI"       },
    { slug: "microsoftpowerbi",     name: "Power Query",         nameAr: "باور كويري"         },
    { slug: "wps",                  name: "WPS Office",          nameAr: "WPS أوفيس"          },
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  experience: [
    {
      period: "2022 – Present",
      roleEn: "Freelance Data Entry Specialist",
      roleAr: "متخصص إدخال بيانات مستقل",
      companyEn: "Self-Employed — Remote (Khamsat · Mostaql · Fiverr · LinkedIn)",
      companyAr: "عمل حر — عن بُعد (خمسات · مستقل · فايفر · لينكد إن)",
      tasksEn: [
        "Deliver accurate data entry, Excel cleaning, and document formatting projects for clients across healthcare, retail, pharmacy, and academic sectors.",
        "Clean and restructure large datasets (1,000–5,000+ rows) extracted from PDF and scanned sources into organized, analysis-ready Excel/Google Sheets files.",
        "Create professional Arabic RTL PowerPoint presentations for medical and academic clients — including a 10-slide dental orthodontics lecture.",
        "Maintain 99%+ accuracy across all deliverables through a systematic two-stage quality check before every submission.",
        "Handle sensitive client data with strict confidentiality — NDA available on request for all projects.",
      ],
      tasksAr: [
        "تقديم خدمات إدخال بيانات دقيقة وتنظيف Excel وتنسيق مستندات لعملاء في قطاعات الرعاية الصحية والتجزئة والصيدلة والأكاديمية.",
        "تنظيف وإعادة هيكلة مجموعات البيانات الكبيرة (1,000–5,000+ صف) من مصادر PDF والمسح الضوئي إلى ملفات Excel/Google Sheets منظّمة وجاهزة للتحليل.",
        "إنشاء عروض PowerPoint عربية RTL احترافية للعملاء الطبيين والأكاديميين — بما في ذلك محاضرة تقويم الأسنان من 10 شرائح.",
        "الحفاظ على دقة 99%+ في جميع المُخرجات من خلال مراجعة جودة منهجية من مرحلتين قبل كل تسليم.",
        "التعامل مع بيانات العملاء الحساسة بسرية تامة — اتفاقية NDA متاحة عند الطلب لجميع المشاريع.",
      ],
      tags: ["Data Entry", "Excel Cleaning", "PowerPoint RTL", "PDF Processing", "Arabic/English", "Remote"],
    },
    {
      period: "2018 – 2022",
      roleEn: "Academic Research & Data Management",
      roleAr: "بحث أكاديمي وإدارة البيانات",
      companyEn: "Faculty of Computers & Information — Egypt",
      companyAr: "كلية الحاسبات والمعلومات — مصر",
      tasksEn: [
        "Managed, entered, and analyzed research datasets for academic projects and graduation thesis using Excel and database tools.",
        "Built structured, formatted data reports and presentations for university projects with consistent, professional standards.",
        "Applied VLOOKUP, pivot tables, and data validation techniques to process and summarize large academic datasets.",
        "Graduated with Distinction — BSc Management Information Systems (2018–2022).",
      ],
      tasksAr: [
        "إدارة وإدخال وتحليل مجموعات بيانات البحث للمشاريع الأكاديمية وأطروحة التخرج باستخدام Excel وأدوات قواعد البيانات.",
        "بناء تقارير بيانات ومستندات عروض منسقة ومنظّمة للمشاريع الجامعية وفق معايير احترافية متسقة.",
        "تطبيق تقنيات VLOOKUP والجداول المحورية والتحقق من البيانات لمعالجة مجموعات البيانات الأكاديمية الكبيرة وتلخيصها.",
        "التخرج بتقدير امتياز — بكالوريوس نظم المعلومات الإدارية (2018–2022).",
      ],
      tags: ["Excel", "Data Analysis", "Research", "Academic", "MIS"],
    },
  ],

  /* ── TRAINING & COURSES ─────────────────────────────────── */
  courses: [
    {
      category: "Excel",
      nameEn: "Microsoft Excel — From Beginner to Advanced",
      nameAr: "مايكروسوفت إكسل — من المبتدئ إلى المحترف",
      providerEn: "Udemy",
      providerAr: "يوديمي",
      year: "2023",
      hours: "20 hours",
      certUrl: "[ADD: Udemy certificate link]",
    },
    {
      category: "Excel",
      nameEn: "Excel Data Cleaning & Power Query",
      nameAr: "تنظيف البيانات في Excel وباور كويري",
      providerEn: "[ADD: Provider]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: year]",
      hours: "[ADD: hours]",
      certUrl: "[ADD: certificate link]",
    },
    {
      category: "Data Entry",
      nameEn: "Professional Data Entry — Speed & Accuracy",
      nameAr: "إدخال البيانات الاحترافي — السرعة والدقة",
      providerEn: "[ADD: Provider]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: year]",
      hours: "[ADD: hours]",
      certUrl: "[ADD: certificate link]",
    },
    {
      category: "Typing",
      nameEn: "Professional Typing — Arabic & English",
      nameAr: "الكتابة الاحترافية — عربي وإنجليزي",
      providerEn: "TypingClub / 10FastFingers (self-practice)",
      providerAr: "TypingClub / 10FastFingers (تدريب ذاتي)",
      year: "Ongoing",
      hours: "Ongoing",
      certUrl: "",
    },
    {
      category: "English",
      nameEn: "English for Professional Communication",
      nameAr: "الإنجليزية للتواصل المهني",
      providerEn: "[ADD: Provider — e.g. British Council / Coursera]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: year]",
      hours: "[ADD: hours]",
      certUrl: "[ADD: certificate link]",
    },
    {
      category: "Freelancing",
      nameEn: "Freelancing & Winning Clients Online",
      nameAr: "العمل الحر وكيفية الفوز بالعملاء",
      providerEn: "[ADD: Provider]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: year]",
      hours: "[ADD: hours]",
      certUrl: "",
    },
    {
      category: "Digital Skills",
      nameEn: "Google Digital Garage — Fundamentals of Digital Marketing",
      nameAr: "Google Digital Garage — أساسيات التسويق الرقمي",
      providerEn: "Google",
      providerAr: "جوجل",
      year: "[ADD: year]",
      hours: "40 hours",
      certUrl: "[ADD: Google certificate link]",
    },
  ],

  /* ── PORTFOLIO SAMPLES ──────────────────────────────────── */
  samples: [
    {
      id: "s1",
      category: "presentations",
      titleEn: "Dental Orthodontics Lecture — Professional Arabic RTL PowerPoint (10 Slides)",
      titleAr: "محاضرة تقويم الأسنان — عرض بوربوينت عربي RTL احترافي (10 شرائح)",
      descEn: "Real project: 10-slide Arabic RTL PowerPoint presentation for a dental orthodontics medical lecture. Includes fully right-to-left layout, professional medical formatting, consistent branded design, and smooth animations. Delivered to a medical professional client.",
      descAr: "مشروع حقيقي: عرض بوربوينت عربي RTL احترافي من 10 شرائح لمحاضرة طبية في تقويم الأسنان. يتضمن تخطيط RTL كامل، تنسيق طبي احترافي، تصميم متميز متسق، وانتقالات سلسة.",
      featured: true,
      image: "assets/samples/preview-orthodontics-ppt.png",
      link: "assets/samples/orthodontics-lecture.pptx",
    },
    {
      id: "s2",
      category: "data-cleaning",
      titleEn: "Customer Database — Before & After Data Cleaning (PDF → Excel)",
      titleAr: "قاعدة بيانات العملاء — قبل وبعد التنظيف (PDF ← Excel)",
      descEn: "Real project: Messy customer data extracted from a raw PDF source, fully cleaned and restructured into a professional Excel file. Tasks included: removing duplicates, standardizing phone number and date formats, correcting inconsistent city names, and ensuring 100% data integrity.",
      descAr: "مشروع حقيقي: بيانات عملاء فوضوية مُستخرجة من مصدر PDF خام، نُظِّفت بالكامل وأُعيد هيكلتها في ملف Excel احترافي. تضمّن المشروع: إزالة التكرارات، توحيد صيغ الأرقام والتواريخ، تصحيح أسماء المدن، وضمان دقة البيانات 100%.",
      featured: false,
      image: "assets/samples/preview-customer-data.png",
      link: "assets/samples/Customer_Data_AFTER_Cleaning.xlsx",
      linkBefore: "assets/samples/Customer_Data_BEFORE_Cleaning.pdf",
    },
    {
      id: "s3",
      category: "excel",
      titleEn: "Pharmacy Inventory — 1,200+ Rows Cleaned, Structured & Formatted",
      titleAr: "مخزون الصيدلية — تنظيف وهيكلة أكثر من 1,200 صف",
      descEn: "Real project: Large pharmacy inventory dataset (1,200+ rows) extracted from a raw PDF. Fully cleaned and restructured: organized Arabic & English product names, unified SKU codes, corrected expiry dates, added category classification, and formatted the entire file for easy filtering and reporting in Excel.",
      descAr: "مشروع حقيقي: مجموعة بيانات مخزون صيدلية كبيرة (1,200+ صف) مُستخرجة من PDF خام. نُظِّفت بالكامل وأُعيد هيكلتها: تنظيم أسماء المنتجات بالعربية والإنجليزية، توحيد رموز SKU، تصحيح تواريخ الانتهاء، إضافة تصنيف الفئات، وتنسيق كامل الملف للتصفية والتقارير.",
      featured: false,
      image: "assets/samples/preview-pharma-inventory.png",
      link: "assets/samples/Pharma_Inventory_AFTER_Cleaning.xlsx",
      linkBefore: "assets/samples/Pharma_Inventory_BEFORE_Cleaning.pdf",
    },
  ],

  /* ── PROCESS STEPS ──────────────────────────────────────── */
  process: [
    { step: "01", icon: "💬", titleEn: "Discuss Requirements",  titleAr: "مناقشة المتطلبات", descEn: "We discuss your project scope, source file formats, target format, deadline, and any specific formatting or accuracy requirements.", descAr: "نناقش نطاق مشروعك وصيغ الملفات المصدرية والمستهدفة والموعد النهائي وأي متطلبات تنسيق أو دقة محددة." },
    { step: "02", icon: "⚙️", titleEn: "Setup & Planning",     titleAr: "الإعداد والتخطيط", descEn: "I review all source materials, set up the target file structure, confirm column headers and data rules, then provide a realistic timeline.", descAr: "أراجع جميع المواد المصدرية وأُعدّ هيكل الملف المستهدف وأؤكد رؤوس الأعمدة وقواعد البيانات، ثم أُقدّم جدولاً زمنياً واقعياً." },
    { step: "03", icon: "⌨️", titleEn: "Data Entry & Processing", titleAr: "الإدخال والمعالجة", descEn: "Careful, methodical data entry or processing with consistent formatting throughout — no shortcuts, no assumptions.", descAr: "إدخال أو معالجة بيانات دقيقة ومنهجية مع تنسيق متسق طوال المشروع — بدون اختصارات أو افتراضات." },
    { step: "04", icon: "🔍", titleEn: "Quality Check (2-Stage)", titleAr: "مراجعة الجودة (مرحلتان)", descEn: "Every entry cross-checked against the source. Stage 1: automated checks for duplicates and format errors. Stage 2: manual row-by-row review. Errors corrected before delivery.", descAr: "كل إدخال يُتحقق منه مقابل المصدر. المرحلة 1: فحص آلي للتكرارات وأخطاء التنسيق. المرحلة 2: مراجعة يدوية صف بصف. تصحيح الأخطاء قبل التسليم." },
    { step: "05", icon: "📦", titleEn: "Delivery & Revisions",  titleAr: "التسليم والتعديلات", descEn: "Clean, formatted files delivered in your preferred format on or before the deadline. Free revisions included if any error is found on my part.", descAr: "تسليم ملفات نظيفة ومنسقة بالصيغة التي تفضلها في الموعد المحدد أو قبله. تعديلات مجانية إذا وُجد أي خطأ من جانبي." },
  ],

  /* ── TESTIMONIALS ───────────────────────────────────────── */
  testimonials: [
    {
      nameEn: "[ADD: Client Name]",
      nameAr: "[ADD: اسم العميل]",
      roleEn: "[ADD: e.g. Business Owner — Khamsat]",
      roleAr: "[ADD: مثال: صاحب عمل — خمسات]",
      quoteEn: "[ADD: Paste the client review text here after receiving it from Khamsat, Mostaql, Fiverr, or LinkedIn]",
      quoteAr: "[ADD: الصق نص تقييم العميل هنا بعد استلامه من خمسات أو مستقل أو فايفر أو لينكد إن]",
      rating: 5,
    },
  ],

  /* ── FAQ ────────────────────────────────────────────────── */
  faq: [
    {
      qEn: "How quickly can you complete a data entry project?",
      qAr: "كم من الوقت تستغرق لإنجاز مشروع إدخال البيانات؟",
      aEn: "Turnaround depends on project size and complexity. Small tasks (up to 100 rows) are typically delivered within 24 hours. Larger datasets are discussed individually — I always provide an honest timeline before starting.",
      aAr: "تعتمد مدة التسليم على حجم المشروع وتعقيده. تُسلَّم المهام الصغيرة (حتى 100 صف) عادةً خلال 24 ساعة. تُناقَش مجموعات البيانات الأكبر بشكل فردي.",
    },
    {
      qEn: "How do you ensure data confidentiality?",
      qAr: "كيف تضمن سرية البيانات؟",
      aEn: "All client data is treated as strictly confidential. I never share, publish, or reuse any data. I'm happy to sign an NDA for sensitive projects. Files are securely transferred and deleted from my system after delivery confirmation.",
      aAr: "أتعامل مع جميع بيانات العملاء بسرية تامة. لا أشارك أي بيانات أو أنشرها. يسعدني توقيع اتفاقية NDA للمشاريع الحساسة. تُحذف الملفات من نظامي بعد تأكيد التسليم.",
    },
    {
      qEn: "What file formats do you accept and deliver?",
      qAr: "ما صيغ الملفات التي تقبلها وتسلّمها؟",
      aEn: "I accept any format: PDF, DOCX, XLSX, CSV, JPG, PNG, scanned documents, or direct system access. I deliver in Excel, Google Sheets, Word, CSV, PDF, or any format you need.",
      aAr: "أقبل أي صيغة: PDF وDOCX وXLSX وCSV وJPG وPNG والمستندات الممسوحة ضوئيًا. أُسلّم بأي صيغة تحتاجها.",
    },
    {
      qEn: "How is pricing determined?",
      qAr: "كيف يتم تحديد السعر؟",
      aEn: "Pricing depends on volume, complexity, urgency, and accuracy requirements. I offer per-row, per-page, per-hour, and fixed-project rates. Contact me for a free custom quote.",
      aAr: "يُحدَّد السعر بناءً على حجم البيانات والتعقيد والإلحاح. أقدّم أسعارًا لكل صف أو صفحة أو ساعة أو مشروع. تواصل معي لتلقي عرض سعر مجاني.",
    },
    {
      qEn: "Do you offer free revisions?",
      qAr: "هل تقدم تعديلات مجانية؟",
      aEn: "Absolutely. If any error or inconsistency is on my part, I correct it at no extra charge. Your satisfaction is my priority.",
      aAr: "بالتأكيد. إذا كان هناك أي خطأ من جانبي، فسأصحّحه دون رسوم إضافية. رضاك هو أولويتي.",
    },
    {
      qEn: "Can you handle Arabic data and RTL documents?",
      qAr: "هل يمكنك العمل مع البيانات العربية ومستندات RTL؟",
      aEn: "Yes — Arabic is my native language. I handle Arabic data entry, RTL formatting, bilingual Arabic/English spreadsheets, and Arabic transcription with full proficiency.",
      aAr: "نعم — العربية هي لغتي الأم. أتعامل مع إدخال البيانات بالعربية وتنسيق RTL وجداول البيانات ثنائية اللغة والتفريغ النصي العربي بكفاءة كاملة.",
    },
  ],

};
