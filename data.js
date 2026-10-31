/**
 * ============================================================
 *  DATA.JS — Single source of truth for portfolio content
 *  Edit this file to update the site without touching layout.
 * ============================================================
 */

const PORTFOLIO_DATA = {

  /* ── PERSONAL INFO ─────────────────────────────────────── */
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

  /* ── SOCIAL / PLATFORM LINKS ──────────────────────────── */
  links: {
    linkedin:  "https://www.linkedin.com/in/mustafa-atta-mis/",
    upwork:    "[ADD: https://www.upwork.com/freelancers/~your-profile]",
    khamsat:   "https://khamsat.com/user/mustafa20222atta",
    mostaql:   "https://mostaql.com/u/Mustafa20222",
    fiverr:    "https://www.fiverr.com/mustafa_atta1",
    github:    "https://github.com/mustafaatta20012",
    formspree: "[ADD: https://formspree.io/f/your-form-id]",
  },

  /* ── HERO STATS ───────────────────────────────────────── */
  stats: [
    { labelEn: "Accuracy Rate",       labelAr: "معدل الدقة",            target: 99,  suffix: "%" },
    { labelEn: "Projects Completed",  labelAr: "مشروع مُنجز",           target: 50,  suffix: "+" },
    { labelEn: "WPM Typing (EN)",     labelAr: "كلمة/دقيقة (إنجليزي)", target: 60,  suffix: ""  },
    { labelEn: "Hours of Experience", labelAr: "ساعة خبرة",             target: 500, suffix: "+" },
  ],

  /* ── SERVICES ─────────────────────────────────────────── */
  services: [
    { icon: "⌨️", titleEn: "Manual Data Entry",           titleAr: "إدخال البيانات يدويًا",           descEn: "Accurate typing from any source into your system, spreadsheet, or database.",                                                          descAr: "كتابة دقيقة من أي مصدر إلى نظامك أو جدول البيانات أو قاعدة البيانات." },
    { icon: "📄", titleEn: "PDF / Scan / Image Entry",     titleAr: "إدخال بيانات PDF والصور",          descEn: "Extract and type data from scanned documents, PDFs, images, and handwritten forms.",                                                   descAr: "استخراج وكتابة البيانات من المستندات الممسوحة ضوئيًا وملفات PDF والصور والنماذج المكتوبة بخط اليد." },
    { icon: "📊", titleEn: "Excel & Sheets Cleaning",      titleAr: "تنظيف وتنسيق Excel وSheets",       descEn: "Remove duplicates, fix inconsistencies, apply formatting, formulas, and pivot tables.",                                                 descAr: "إزالة التكرارات وإصلاح التناقضات وتطبيق التنسيق والصيغ والجداول المحورية." },
    { icon: "🗄️", titleEn: "Database Entry",               titleAr: "إدخال قواعد البيانات",             descEn: "Populate CRMs, ERPs, Airtable, Notion, Google Forms, or any custom system accurately.",                                              descAr: "ملء أنظمة CRM وERP وAirtable وNotion وGoogle Forms أو أي نظام مخصص بدقة." },
    { icon: "🔍", titleEn: "Web Research & Copy-Paste",    titleAr: "البحث على الويب والنسخ واللصق",    descEn: "Collect, organize, and enter data from websites, directories, and online sources.",                                                    descAr: "جمع البيانات وتنظيمها وإدخالها من المواقع الإلكترونية والأدلة والمصادر عبر الإنترنت." },
    { icon: "📝", titleEn: "Document & Form Processing",   titleAr: "معالجة المستندات والنماذج",        descEn: "Process and organize paperwork, applications, surveys, and administrative forms.",                                                     descAr: "معالجة وتنظيم الأوراق والطلبات والاستطلاعات والنماذج الإدارية." },
    { icon: "🎙️", titleEn: "Transcription (AR/EN)",        titleAr: "التفريغ النصي (عربي/إنجليزي)",     descEn: "Transcribe audio, video, or handwritten content in Arabic and English accurately.",                                                     descAr: "تفريغ المحتوى الصوتي أو المرئي أو المكتوب بخط اليد باللغتين العربية والإنجليزية بدقة." },
    { icon: "📑", titleEn: "Word & PowerPoint Formatting", titleAr: "تنسيق Word وPowerPoint",            descEn: "Professional formatting of reports, CVs, presentations, and documents to a consistent standard.",                                      descAr: "التنسيق الاحترافي للتقارير والسيرة الذاتية والعروض التقديمية والمستندات وفق معايير متسقة." },
    { icon: "✅", titleEn: "Data Verification & QC",       titleAr: "التحقق من البيانات ومراقبة الجودة", descEn: "Cross-check, validate, and clean datasets to eliminate errors and ensure consistency.",                                                descAr: "التدقيق والتحقق من مجموعات البيانات وتنظيفها للقضاء على الأخطاء وضمان الاتساق." },
    { icon: "🏥", titleEn: "Medical & Academic Data Entry", titleAr: "إدخال البيانات الطبية والأكاديمية", descEn: "Handle sensitive patient records, research data, and academic information with strict confidentiality.",                                descAr: "التعامل مع سجلات المرضى وبيانات البحث والمعلومات الأكاديمية بسرية تامة." },
  ],

  /* ── SKILLS ───────────────────────────────────────────── */
  skills: [
    { group: "Software & Tools",    groupAr: "البرامج والأدوات",   items: [
      { nameEn: "Microsoft Excel",          nameAr: "مايكروسوفت إكسل",      pct: 95 },
      { nameEn: "Google Sheets",            nameAr: "جوجل شيتس",             pct: 92 },
      { nameEn: "Microsoft Word",           nameAr: "مايكروسوفت وورد",       pct: 93 },
      { nameEn: "Microsoft PowerPoint",     nameAr: "مايكروسوفت بوربوينت",   pct: 90 },
      { nameEn: "PDF Tools (Adobe/Foxit)",  nameAr: "أدوات PDF (Adobe/Foxit)",pct: 85 },
      { nameEn: "OCR & Data Extraction",   nameAr: "أدوات استخراج البيانات", pct: 82 },
    ]},
    { group: "Data Skills",         groupAr: "مهارات البيانات",    items: [
      { nameEn: "Data Cleaning & Formatting",  nameAr: "تنظيف البيانات وتنسيقها",    pct: 95 },
      { nameEn: "Duplicate Removal",           nameAr: "إزالة التكرارات",             pct: 97 },
      { nameEn: "VLOOKUP / XLOOKUP / IF",     nameAr: "VLOOKUP / XLOOKUP / IF",      pct: 88 },
      { nameEn: "Pivot Tables & Charts",       nameAr: "الجداول والرسوم المحورية",    pct: 85 },
      { nameEn: "Data Validation Rules",       nameAr: "قواعد التحقق من البيانات",   pct: 90 },
      { nameEn: "Conditional Formatting",      nameAr: "التنسيق الشرطي",             pct: 88 },
    ]},
    { group: "Typing & Language",   groupAr: "الكتابة واللغة",     items: [
      { nameEn: "English Typing Speed",    nameAr: "سرعة الكتابة بالإنجليزية",  pct: 75 },
      { nameEn: "Arabic Typing Speed",     nameAr: "سرعة الكتابة بالعربية",     pct: 80 },
      { nameEn: "Arabic Language",         nameAr: "اللغة العربية",             pct: 100 },
      { nameEn: "English Language",        nameAr: "اللغة الإنجليزية",         pct: 78 },
    ]},
    { group: "Professional Skills", groupAr: "المهارات المهنية",   items: [
      { nameEn: "Attention to Detail",     nameAr: "الانتباه للتفاصيل",      pct: 98 },
      { nameEn: "Time Management",         nameAr: "إدارة الوقت",             pct: 93 },
      { nameEn: "Confidentiality & NDA",  nameAr: "السرية واتفاقيات NDA",   pct: 100 },
      { nameEn: "Client Communication",    nameAr: "التواصل مع العملاء",     pct: 88 },
      { nameEn: "Deadline Adherence",      nameAr: "الالتزام بالمواعيد",     pct: 96 },
    ]},
  ],

  /* ── TOOLS ────────────────────────────────────────────── */
  tools: [
    { icon: "📊", name: "Excel",           nameAr: "إكسل" },
    { icon: "📋", name: "Google Sheets",   nameAr: "جوجل شيتس" },
    { icon: "📝", name: "Word",            nameAr: "وورد" },
    { icon: "📽️", name: "PowerPoint",      nameAr: "بوربوينت" },
    { icon: "📬", name: "Google Forms",    nameAr: "جوجل فورمز" },
    { icon: "🗃️", name: "Airtable",        nameAr: "إيرتيبل" },
    { icon: "📓", name: "Notion",          nameAr: "نوشن" },
    { icon: "🔡", name: "OCR Tools",       nameAr: "أدوات OCR" },
    { icon: "📎", name: "PDF Tools",       nameAr: "أدوات PDF" },
    { icon: "🤖", name: "ChatGPT / Claude",nameAr: "ChatGPT / Claude" },
    { icon: "☁️", name: "Google Drive",    nameAr: "جوجل درايف" },
    { icon: "💾", name: "OneDrive",        nameAr: "ون درايف" },
    { icon: "📧", name: "Gmail",           nameAr: "جيميل" },
    { icon: "🔍", name: "WPS Office",      nameAr: "WPS أوفيس" },
    { icon: "🧹", name: "Power Query",     nameAr: "باور كويري" },
  ],

  /* ── EXPERIENCE ───────────────────────────────────────── */
  experience: [
    {
      period: "2022 – Present",
      roleEn: "Freelance Data Entry Specialist",
      roleAr: "متخصص إدخال بيانات مستقل",
      companyEn: "Self-Employed — Remote (Khamsat · Mostaql · Fiverr · LinkedIn)",
      companyAr: "عمل حر — عن بُعد (خمسات · مستقل · فايفر · لينكد إن)",
      tasksEn: [
        "Deliver accurate data entry, Excel cleaning, and document formatting projects for clients across healthcare, retail, and academic sectors.",
        "Clean and restructure large datasets (1,000–5,000+ rows) from PDF and scanned sources into organized Excel/Google Sheets files.",
        "Create professional Arabic RTL PowerPoint presentations for medical and academic clients with full formatting consistency.",
        "Maintain 99%+ accuracy rate across all deliverables through a rigorous double-check process before every submission.",
        "Handle sensitive client data with strict confidentiality — NDA available on request.",
      ],
      tasksAr: [
        "تقديم خدمات إدخال بيانات دقيقة وتنظيف Excel وتنسيق مستندات لعملاء في قطاعات الرعاية الصحية والتجزئة والأكاديمية.",
        "تنظيف وإعادة هيكلة مجموعات البيانات الكبيرة (1,000–5,000+ صف) من مصادر PDF والمسح الضوئي إلى ملفات Excel / Google Sheets منظّمة.",
        "إنشاء عروض PowerPoint عربية RTL احترافية للعملاء الطبيين والأكاديميين مع تنسيق متسق بالكامل.",
        "الحفاظ على معدل دقة 99%+ في جميع المُخرجات من خلال عملية تدقيق مزدوجة قبل كل تسليم.",
        "التعامل مع بيانات العملاء الحساسة بسرية تامة — اتفاقية NDA متاحة عند الطلب.",
      ],
      tags: ["Data Entry", "Excel Cleaning", "PowerPoint", "PDF Processing", "Arabic RTL", "Remote"],
    },
    {
      period: "2018 – 2022",
      roleEn: "Academic Research & Data Analyst",
      roleAr: "باحث أكاديمي ومحلل بيانات",
      companyEn: "Faculty of Computers & Information — Egypt",
      companyAr: "كلية الحاسبات والمعلومات — مصر",
      tasksEn: [
        "Managed, entered, and analyzed research datasets for academic projects and graduation thesis using Excel and database tools.",
        "Produced structured, formatted data reports and presentations for university projects with consistent professional standards.",
        "Applied data validation, VLOOKUP, and pivot table techniques to process and summarize large academic datasets.",
        "Graduated with Distinction (امتياز) — BSc Management Information Systems (2018–2022).",
      ],
      tasksAr: [
        "إدارة وإدخال وتحليل مجموعات بيانات البحث للمشاريع الأكاديمية وأطروحة التخرج باستخدام Excel وأدوات قواعد البيانات.",
        "إنتاج تقارير بيانات ومستندات عروض منسقة ومنظّمة للمشاريع الجامعية وفق معايير احترافية متسقة.",
        "تطبيق تقنيات التحقق من البيانات وVLOOKUP والجداول المحورية لمعالجة مجموعات البيانات الأكاديمية الكبيرة وتلخيصها.",
        "التخرج بتقدير امتياز — بكالوريوس نظم المعلومات الإدارية (2018–2022).",
      ],
      tags: ["Excel", "Data Analysis", "Research", "Academic", "MIS"],
    },
  ],

  /* ── TRAINING & COURSES ────────────────────────────────── */
  courses: [
    {
      category: "Excel",
      nameEn: "Microsoft Excel — From Beginner to Advanced",
      nameAr: "مايكروسوفت إكسل — من المبتدئ إلى المحترف",
      providerEn: "Udemy",
      providerAr: "يوديمي",
      year: "2023",
      hours: "20 hours",
      certUrl: "[ADD: paste your Udemy certificate link here]",
    },
    {
      category: "Excel",
      nameEn: "Excel for Data Analysis & Data Cleaning",
      nameAr: "إكسل لتحليل البيانات وتنظيفها",
      providerEn: "[ADD: Provider — e.g. Coursera / Udemy / ITI]",
      providerAr: "[ADD: اسم مزود الكورس]",
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
      providerEn: "Self-practice via TypingClub / 10FastFingers",
      providerAr: "تدريب ذاتي عبر TypingClub / 10FastFingers",
      year: "2022",
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
      nameAr: "العمل الحر وكيفية الفوز بالعملاء عبر الإنترنت",
      providerEn: "[ADD: Provider — e.g. Khamsat Academy / YouTube / Udemy]",
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
      certUrl: "[ADD: your Google certificate link]",
    },
  ],

  /* ── PORTFOLIO SAMPLES ─────────────────────────────────── */
  samples: [
    {
      id: "s1",
      category: "presentations",
      titleEn: "Dental Orthodontics Lecture — Arabic RTL PowerPoint (10 Slides)",
      titleAr: "محاضرة تقويم الأسنان — عرض بوربوينت عربي RTL (10 شرائح)",
      descEn: "Professional 10-slide Arabic RTL PowerPoint for a dental orthodontics lecture. Full right-to-left layout, consistent medical formatting, branded design, and professional animations.",
      descAr: "عرض بوربوينت عربي احترافي من 10 شرائح لمحاضرة في تقويم الأسنان. تخطيط RTL كامل، تنسيق طبي متسق، تصميم متميز، ورسوم متحركة احترافية.",
      featured: true,
      image: "assets/samples/preview-orthodontics-ppt.png",
      link: "assets/samples/orthodontics-lecture.pptx",
    },
    {
      id: "s2",
      category: "data-cleaning",
      titleEn: "Customer Database — Full Cleaning & Restructuring",
      titleAr: "قاعدة بيانات العملاء — تنظيف وإعادة هيكلة كاملة",
      descEn: "Raw customer data from a PDF transformed into a clean Excel file: duplicates removed, phone numbers and dates standardized, city names corrected, 100% data integrity ensured.",
      descAr: "بيانات عملاء خام من PDF تحوّلت إلى Excel نظيف: إزالة التكرارات، توحيد الأرقام والتواريخ، تصحيح أسماء المدن، وضمان دقة البيانات 100%.",
      featured: false,
      image: "assets/samples/preview-customer-data.png",
      link: "assets/samples/Customer_Data_AFTER_Cleaning.xlsx",
      linkBefore: "assets/samples/Customer_Data_BEFORE_Cleaning.pdf",
    },
    {
      id: "s3",
      category: "excel",
      titleEn: "Pharmacy Inventory — 1,200+ Rows Cleaned & Formatted",
      titleAr: "مخزون الصيدلية — تنظيف وتنسيق أكثر من 1,200 صف",
      descEn: "Pharmacy inventory dataset (1,200+ rows) cleaned from a raw PDF: product names organized in Arabic & English, SKU codes unified, expiry dates corrected, categories added, formatted for easy filtering.",
      descAr: "تنظيف بيانات مخزون صيدلية (1,200+ صف) من PDF خام: تنظيم أسماء المنتجات بالعربية والإنجليزية، توحيد رموز SKU، تصحيح تواريخ الانتهاء، إضافة التصنيفات، وتنسيق الملف للتصفية السهلة.",
      featured: false,
      image: "assets/samples/preview-pharma-inventory.png",
      link: "assets/samples/Pharma_Inventory_AFTER_Cleaning.xlsx",
      linkBefore: "assets/samples/Pharma_Inventory_BEFORE_Cleaning.pdf",
    },
  ],

  /* ── PROCESS STEPS ─────────────────────────────────────── */
  process: [
    { step: "01", icon: "💬", titleEn: "Requirements",   titleAr: "تحديد المتطلبات", descEn: "We discuss the project scope, file formats, deadlines, and any specific formatting rules.",  descAr: "نناقش نطاق المشروع وصيغ الملفات والمواعيد النهائية وأي قواعد تنسيق محددة." },
    { step: "02", icon: "⚙️", titleEn: "Setup & Review", titleAr: "الإعداد والمراجعة", descEn: "I review the source materials, set up the target files, and confirm the data structure.",   descAr: "أراجع المواد المصدرية وأُعدّ الملفات المستهدفة وأؤكد بنية البيانات." },
    { step: "03", icon: "⌨️", titleEn: "Data Entry",     titleAr: "إدخال البيانات",  descEn: "Careful, methodical entry or processing with consistent formatting throughout.",             descAr: "إدخال أو معالجة دقيقة ومنهجية مع تنسيق متسق طوال المشروع." },
    { step: "04", icon: "🔍", titleEn: "Quality Check",  titleAr: "مراجعة الجودة",  descEn: "Every entry is cross-checked against the source. Errors corrected before delivery.",         descAr: "يتم التحقق من كل إدخال مقابل المصدر وتصحيح الأخطاء قبل التسليم." },
    { step: "05", icon: "📦", titleEn: "Delivery",       titleAr: "التسليم",         descEn: "Clean, formatted files delivered in your preferred format — on or before the deadline.",      descAr: "تسليم ملفات نظيفة ومنسقة بالصيغة التي تفضلها — في الموعد المحدد أو قبله." },
  ],

  /* ── TESTIMONIALS ─────────────────────────────────────── */
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

  /* ── FAQ ──────────────────────────────────────────────── */
  faq: [
    {
      qEn: "How quickly can you complete a data entry project?",
      qAr: "كم من الوقت تستغرق لإنجاز مشروع إدخال البيانات؟",
      aEn: "Turnaround depends on project size and complexity. Small tasks (up to 100 rows) are typically delivered within 24 hours. Larger datasets are discussed individually — I always provide an honest timeline before starting.",
      aAr: "تعتمد مدة التسليم على حجم المشروع وتعقيده. تُسلَّم المهام الصغيرة (حتى 100 صف) عادةً خلال 24 ساعة. تُناقَش مجموعات البيانات الأكبر بشكل فردي — أُقدّم دائمًا جدولًا زمنيًا واقعيًا قبل البدء.",
    },
    {
      qEn: "How do you ensure confidentiality?",
      qAr: "كيف تضمن السرية؟",
      aEn: "I treat all client data as strictly confidential. I do not share, publish, or reuse any data. I am happy to sign a Non-Disclosure Agreement (NDA) for sensitive projects. Files are transferred securely and deleted from my system upon delivery confirmation.",
      aAr: "أتعامل مع جميع بيانات العملاء بسرية تامة. لا أشارك أي بيانات أو أنشرها أو أُعيد استخدامها. يسعدني توقيع اتفاقية عدم إفصاح (NDA) للمشاريع الحساسة. تُنقل الملفات بأمان وتُحذف من نظامي بعد تأكيد التسليم.",
    },
    {
      qEn: "What file formats do you accept and deliver?",
      qAr: "ما صيغ الملفات التي تقبلها وتسلّمها؟",
      aEn: "I accept almost any format: PDF, DOCX, XLSX, CSV, JPG, PNG, scanned documents, or direct system access. I deliver in whatever format you need — Excel, Google Sheets, Word, CSV, or others.",
      aAr: "أقبل أي صيغة تقريبًا: PDF وDOCX وXLSX وCSV وJPG وPNG والمستندات الممسوحة ضوئيًا أو الوصول المباشر للنظام. أُسلّم بالصيغة التي تحتاجها — Excel أو Google Sheets أو Word أو CSV أو غيرها.",
    },
    {
      qEn: "How is pricing determined?",
      qAr: "كيف يتم تحديد السعر؟",
      aEn: "Pricing is based on volume, complexity, urgency, and required accuracy level. I offer per-row, per-page, per-hour, and fixed-project pricing. Contact me with your requirements for a free custom quote.",
      aAr: "يُحدَّد السعر بناءً على حجم البيانات والتعقيد والإلحاح ومستوى الدقة المطلوب. أقدّم أسعارًا لكل صف أو صفحة أو ساعة أو مشروع ثابت. تواصل معي لتلقي عرض سعر مجاني.",
    },
    {
      qEn: "Do you offer revisions?",
      qAr: "هل تقدم تعديلات على العمل؟",
      aEn: "Absolutely. If there is any error or inconsistency on my part, I will correct it at no extra charge. Client satisfaction is my top priority.",
      aAr: "بالتأكيد. إذا كان هناك أي خطأ أو تناقض من جانبي، فسأصحّحه دون أي رسوم إضافية. رضا العميل هو أولويتي القصوى.",
    },
    {
      qEn: "Can you work with Arabic data and RTL documents?",
      qAr: "هل يمكنك العمل مع البيانات العربية والمستندات RTL؟",
      aEn: "Yes — Arabic is my native language. I handle Arabic data entry, RTL document formatting, bilingual (Arabic/English) spreadsheets, and Arabic transcription with full proficiency.",
      aAr: "نعم — العربية هي لغتي الأم. أتعامل مع إدخال البيانات بالعربية، وتنسيق المستندات RTL، وجداول البيانات ثنائية اللغة (عربي/إنجليزي)، والتفريغ النصي العربي بكفاءة كاملة.",
    },
  ],

};
