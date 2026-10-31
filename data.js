/**
 * ============================================================
 *  DATA.JS — Single source of truth for portfolio content
 *  Edit this file to update the site without touching layout.
 *  All [ADD: ...] markers are placeholders — replace with real info.
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
    email: "", // intentionally blank — contact via WhatsApp or Formspree only
    phone: "+20 110 158 7881",
    whatsapp: "https://wa.me/201101587881",
    location: "Egypt 🇪🇬",
    locationAr: "مصر 🇪🇬",
    availabilityEn: "Available for remote & freelance worldwide",
    availabilityAr: "متاح للعمل عن بُعد والمستقل عالميًا",
    cvPath: "/assets/cv.pdf",
  },

  /* ── SOCIAL / PLATFORM LINKS ──────────────────────────── */
  links: {
    linkedin:  "https://www.linkedin.com/in/mustafa-atta-mis/",
    upwork:    "[ADD: https://www.upwork.com/freelancers/~your-profile]",
    khamsat:   "https://khamsat.com/user/mustafa20222atta",
    mostaql:   "https://mostaql.com/u/Mustafa20222",
    fiverr:    "https://www.fiverr.com/mustafa_atta1",
    github:    "https://github.com/mustafaatta20012",
    formspree: "[ADD: https://formspree.io/f/your-form-id]", // Sign up at formspree.io, create a form, paste the endpoint here
  },

  /* ── HERO STATS ───────────────────────────────────────── */
  stats: [
    { valueEn: "99%",  valueAr: "٩٩٪",  labelEn: "Accuracy Rate",     labelAr: "معدل الدقة",         target: 99,  suffix: "%" },
    { valueEn: "50+",  valueAr: "٥٠+",  labelEn: "Projects Completed", labelAr: "مشروع مكتمل",        target: 50,  suffix: "+" },
    { valueEn: "60",   valueAr: "٦٠",   labelEn: "WPM Typing (EN)",    labelAr: "كلمة/دقيقة (إنجليزي)", target: 60,  suffix: "" },
    { valueEn: "[ADD: X]", valueAr: "[ADD: X]", labelEn: "[ADD: Satisfied Clients]", labelAr: "[ADD: عميل راضٍ]", target: 0, suffix: "+" },
  ],

  /* ── ABOUT ────────────────────────────────────────────── */
  about: {
    bioEn: "I am a dedicated Data Entry Specialist with a strong background in Management Information Systems and years of hands-on experience handling large datasets, documents, and spreadsheets with precision. I take pride in zero-error output, fast turnaround, and strict confidentiality on every project.\n\nI work systematically — understanding requirements fully before I begin, maintaining consistent formatting throughout, and performing a quality check on every deliverable before sending it. Whether you need a database populated, a scanned PDF typed up, or a messy Excel sheet cleaned and structured, I bring the same level of care and professionalism to every task.",
    bioAr: "أنا متخصص في إدخال البيانات بخلفية أكاديمية في نظم المعلومات الإدارية وسنوات من الخبرة العملية في التعامل مع مجموعات بيانات ضخمة ومستندات وجداول بيانات بدقة عالية. أفخر بتقديم مخرجات خالية من الأخطاء، مع التزام صارم بالسرية التامة في كل مشروع.\n\nأعمل بمنهجية واضحة — أفهم المتطلبات بالكامل قبل البدء، وأحافظ على تنسيق متسق طوال العمل، وأُجري مراجعة شاملة لكل مُخرَج قبل تسليمه. سواء كنت بحاجة إلى ملء قاعدة بيانات، أو كتابة ملف PDF ممسوح ضوئيًا، أو تنظيف ورقة Excel فوضوية وهيكلتها، فأنا أبذل نفس المستوى من الاهتمام والاحترافية في كل مهمة.",
    workStyleEn: "Methodical · Detail-oriented · Deadline-driven",
    workStyleAr: "منهجي · دقيق في التفاصيل · ملتزم بالمواعيد",
    languages: [
      { lang: "Arabic", level: "Native", levelAr: "لغة أم", langAr: "العربية" },
      { lang: "English", level: "Professional", levelAr: "احترافي", langAr: "الإنجليزية" },
    ],
    educationEn: "BSc Management Information Systems — Distinction · Faculty of Computers & Information, Egypt (2018–2022)",
    educationAr: "بكالوريوس نظم المعلومات الإدارية — امتياز · كلية الحاسبات والمعلومات، مصر (2018–2022)",
  },

  /* ── SERVICES ─────────────────────────────────────────── */
  services: [
    { icon: "⌨️", titleEn: "Manual Data Entry",           titleAr: "إدخال البيانات يدويًا",           descEn: "Accurate typing from any source into your system, spreadsheet, or database.",                          descAr: "كتابة دقيقة من أي مصدر إلى نظامك أو جدول البيانات أو قاعدة البيانات." },
    { icon: "📄", titleEn: "PDF / Scan / Image Entry",     titleAr: "إدخال بيانات PDF والصور",          descEn: "Extract and type data from scanned documents, PDFs, images, and handwritten forms.",                  descAr: "استخراج وكتابة البيانات من المستندات الممسوحة ضوئيًا وملفات PDF والصور والنماذج المكتوبة بخط اليد." },
    { icon: "📊", titleEn: "Excel & Sheets Cleaning",      titleAr: "تنظيف وتنسيق Excel وSheets",       descEn: "Remove duplicates, fix inconsistencies, apply formatting, formulas, and pivot tables.",                descAr: "إزالة التكرارات وإصلاح التناقضات وتطبيق التنسيق والصيغ والجداول المحورية." },
    { icon: "🗄️", titleEn: "Database Entry",               titleAr: "إدخال قواعد البيانات",             descEn: "Populate CRMs, ERPs, Airtable, Notion, Google Forms, or any custom system accurately.",              descAr: "ملء أنظمة CRM وERP وAirtable وNotion وGoogle Forms أو أي نظام مخصص بدقة." },
    { icon: "🔍", titleEn: "Web Research & Copy-Paste",    titleAr: "البحث على الويب والنسخ واللصق",    descEn: "Collect, organize, and enter data from websites, directories, and online sources.",                   descAr: "جمع البيانات وتنظيمها وإدخالها من المواقع الإلكترونية والأدلة والمصادر عبر الإنترنت." },
    { icon: "📝", titleEn: "Document & Form Processing",   titleAr: "معالجة المستندات والنماذج",        descEn: "Process and organize paperwork, applications, surveys, and administrative forms.",                    descAr: "معالجة وتنظيم الأوراق والطلبات والاستطلاعات والنماذج الإدارية." },
    { icon: "🎙️", titleEn: "Transcription (AR/EN)",        titleAr: "التفريغ النصي (عربي/إنجليزي)",     descEn: "Transcribe audio, video, or handwritten content in Arabic and English accurately.",                   descAr: "تفريغ المحتوى الصوتي أو المرئي أو المكتوب بخط اليد باللغتين العربية والإنجليزية بدقة." },
    { icon: "📑", titleEn: "Word & PowerPoint Formatting", titleAr: "تنسيق Word وPowerPoint",            descEn: "Professional formatting of reports, CVs, presentations, and documents to a consistent standard.",     descAr: "التنسيق الاحترافي للتقارير والسيرة الذاتية والعروض التقديمية والمستندات وفق معايير متسقة." },
    { icon: "✅", titleEn: "Data Verification & QC",       titleAr: "التحقق من البيانات ومراقبة الجودة", descEn: "Cross-check, validate, and clean datasets to eliminate errors and ensure consistency.",               descAr: "التدقيق والتحقق من مجموعات البيانات وتنظيفها للقضاء على الأخطاء وضمان الاتساق." },
    { icon: "🏥", titleEn: "Medical & Academic Data Entry", titleAr: "إدخال البيانات الطبية والأكاديمية", descEn: "Handle sensitive patient records, research data, and academic information with strict confidentiality.", descAr: "التعامل مع سجلات المرضى وبيانات البحث والمعلومات الأكاديمية بسرية تامة." },
  ],

  /* ── SKILLS ───────────────────────────────────────────── */
  skills: [
    { group: "Software & Tools",    groupAr: "البرامج والأدوات",       items: [
      { nameEn: "Microsoft Excel",         nameAr: "مايكروسوفت إكسل",   pct: 95 },
      { nameEn: "Google Sheets",           nameAr: "جوجل شيتس",          pct: 92 },
      { nameEn: "Microsoft Word",          nameAr: "مايكروسوفت وورد",    pct: 93 },
      { nameEn: "Microsoft PowerPoint",    nameAr: "مايكروسوفت بوربوينت", pct: 90 },
    ]},
    { group: "Data Skills",         groupAr: "مهارات البيانات",         items: [
      { nameEn: "Data Cleaning & Formatting", nameAr: "تنظيف البيانات وتنسيقها", pct: 94 },
      { nameEn: "VLOOKUP / XLOOKUP / IF",     nameAr: "VLOOKUP / XLOOKUP / IF",  pct: 88 },
      { nameEn: "Pivot Tables",               nameAr: "الجداول المحورية",         pct: 85 },
      { nameEn: "Data Validation",            nameAr: "التحقق من البيانات",       pct: 90 },
    ]},
    { group: "Soft Skills",         groupAr: "المهارات الشخصية",        items: [
      { nameEn: "Attention to Detail",  nameAr: "الانتباه للتفاصيل",   pct: 98 },
      { nameEn: "Time Management",      nameAr: "إدارة الوقت",          pct: 92 },
      { nameEn: "Confidentiality",      nameAr: "الحفاظ على السرية",    pct: 100 },
    ]},
    { group: "Typing Speed",        groupAr: "سرعة الكتابة",            items: [
      { nameEn: "English Typing (WPM)", nameAr: "الكتابة بالإنجليزية (كلمة/دقيقة)", pct: 75 },
      { nameEn: "Arabic Typing (WPM)",  nameAr: "الكتابة بالعربية (كلمة/دقيقة)",    pct: 70 },
    ]},
  ],

  /* ── TOOLS ────────────────────────────────────────────── */
  tools: [
    { icon: "📊", name: "Excel",         nameAr: "إكسل" },
    { icon: "📋", name: "Google Sheets", nameAr: "جوجل شيتس" },
    { icon: "📝", name: "Word",          nameAr: "وورد" },
    { icon: "📽️", name: "PowerPoint",    nameAr: "بوربوينت" },
    { icon: "📬", name: "Google Forms",  nameAr: "جوجل فورمز" },
    { icon: "🗃️", name: "Airtable",      nameAr: "إيرتيبل" },
    { icon: "📓", name: "Notion",        nameAr: "نوشن" },
    { icon: "🔡", name: "OCR Tools",     nameAr: "أدوات OCR" },
    { icon: "📎", name: "PDF Tools",     nameAr: "أدوات PDF" },
    { icon: "🤖", name: "ChatGPT/Claude", nameAr: "ChatGPT/Claude" },
  ],

  /* ── EXPERIENCE ───────────────────────────────────────── */
  experience: [
    {
      period: "[ADD: Month Year – Month Year / Present]",
      roleEn: "[ADD: Job Title / Role]",
      roleAr: "[ADD: المسمى الوظيفي]",
      companyEn: "[ADD: Company / Client Name — City, Country]",
      companyAr: "[ADD: اسم الشركة / العميل — المدينة، الدولة]",
      tasksEn: [
        "[ADD: Key responsibility or task #1]",
        "[ADD: Key responsibility or task #2 with measurable result e.g. Processed 500+ records daily with 99% accuracy]",
        "[ADD: Key responsibility or task #3]",
      ],
      tasksAr: [
        "[ADD: المهمة أو المسؤولية الرئيسية #1]",
        "[ADD: المهمة أو المسؤولية الرئيسية #2 مع نتيجة قابلة للقياس]",
        "[ADD: المهمة أو المسؤولية الرئيسية #3]",
      ],
      tags: ["Data Entry", "Excel", "[ADD: relevant tool]"],
    },
    {
      period: "[ADD: Month Year – Month Year]",
      roleEn: "[ADD: Job Title / Role]",
      roleAr: "[ADD: المسمى الوظيفي]",
      companyEn: "[ADD: Company / Client Name — City, Country]",
      companyAr: "[ADD: اسم الشركة / العميل — المدينة، الدولة]",
      tasksEn: [
        "[ADD: Key responsibility or task #1]",
        "[ADD: Key responsibility or task #2]",
        "[ADD: Key responsibility or task #3]",
      ],
      tasksAr: [
        "[ADD: المهمة أو المسؤولية الرئيسية #1]",
        "[ADD: المهمة أو المسؤولية الرئيسية #2]",
        "[ADD: المهمة أو المسؤولية الرئيسية #3]",
      ],
      tags: ["Data Entry", "Google Sheets", "[ADD: relevant tool]"],
    },
    {
      period: "[ADD: Month Year – Month Year]",
      roleEn: "[ADD: Job Title / Role]",
      roleAr: "[ADD: المسمى الوظيفي]",
      companyEn: "[ADD: Company / Client Name]",
      companyAr: "[ADD: اسم الشركة / العميل]",
      tasksEn: [
        "[ADD: Task #1]",
        "[ADD: Task #2]",
      ],
      tasksAr: [
        "[ADD: المهمة #1]",
        "[ADD: المهمة #2]",
      ],
      tags: ["Transcription", "Arabic/English", "[ADD: tool]"],
    },
  ],

  /* ── TRAINING & COURSES ────────────────────────────────── */
  courses: [
    {
      category: "Excel",
      nameEn: "[ADD: Course Name, e.g. Excel for Data Analysis]",
      nameAr: "[ADD: اسم الكورس بالعربي]",
      providerEn: "[ADD: Provider, e.g. Coursera / Udemy / ITI]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: 202X]",
      hours: "[ADD: XX hours]",
      certUrl: "[ADD: https://link-to-certificate.com or leave blank]",
    },
    {
      category: "Data Entry",
      nameEn: "[ADD: Course Name, e.g. Professional Data Entry Masterclass]",
      nameAr: "[ADD: اسم الكورس بالعربي]",
      providerEn: "[ADD: Provider]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: 202X]",
      hours: "[ADD: XX hours]",
      certUrl: "[ADD: certificate URL]",
    },
    {
      category: "Typing",
      nameEn: "[ADD: Course Name, e.g. Professional Typing Speed — Arabic & English]",
      nameAr: "[ADD: اسم الكورس بالعربي]",
      providerEn: "[ADD: Provider]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: 202X]",
      hours: "[ADD: XX hours]",
      certUrl: "[ADD: certificate URL]",
    },
    {
      category: "English",
      nameEn: "[ADD: Course Name, e.g. Business English Communication]",
      nameAr: "[ADD: اسم الكورس بالعربي]",
      providerEn: "[ADD: Provider, e.g. British Council / Coursera]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: 202X]",
      hours: "[ADD: XX hours]",
      certUrl: "[ADD: certificate URL]",
    },
    {
      category: "Freelancing",
      nameEn: "[ADD: Course Name, e.g. Freelancing on Upwork — Complete Guide]",
      nameAr: "[ADD: اسم الكورس بالعربي]",
      providerEn: "[ADD: Provider]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: 202X]",
      hours: "[ADD: XX hours]",
      certUrl: "[ADD: certificate URL]",
    },
    {
      category: "Digital Skills",
      nameEn: "[ADD: Course Name, e.g. Digital Skills for the Workplace]",
      nameAr: "[ADD: اسم الكورس بالعربي]",
      providerEn: "[ADD: Provider, e.g. Google / Coursera]",
      providerAr: "[ADD: مزود الكورس]",
      year: "[ADD: 202X]",
      hours: "[ADD: XX hours]",
      certUrl: "[ADD: certificate URL]",
    },
  ],

  /* ── PORTFOLIO SAMPLES ─────────────────────────────────── */
  samples: [
    {
      id: "s1",
      category: "presentations",
      titleEn: "Dental Orthodontics Lecture — PowerPoint",
      titleAr: "عرض تقديمي عن تقويم الأسنان",
      descEn: "Featured sample: 10-slide Arabic RTL PowerPoint presentation for a dental orthodontics lecture. Includes professional animations, consistent formatting, and medical imagery.",
      descAr: "نموذج مميز: عرض بوربوينت عربي من 10 شرائح لمحاضرة في تقويم الأسنان. يتضمن رسوم متحركة احترافية وتنسيقًا متسقًا وصورًا طبية.",
      featured: true,
      image: "[ADD: /assets/samples/orthodontics-ppt-preview.webp]",
      link: "[ADD: /assets/samples/orthodontics-lecture.pptx or Google Slides link]",
    },
    {
      id: "s2",
      category: "excel",
      titleEn: "[ADD: Sample Title, e.g. Inventory Data Cleaning — Before & After]",
      titleAr: "[ADD: عنوان النموذج بالعربي]",
      descEn: "[ADD: Brief description of the task, what was done, and the result]",
      descAr: "[ADD: وصف موجز للمهمة وما تم تنفيذه والنتيجة]",
      featured: false,
      image: "[ADD: /assets/samples/excel-sample.webp]",
      link: "[ADD: Google Sheets link or file path]",
    },
    {
      id: "s3",
      category: "documents",
      titleEn: "[ADD: Sample Title, e.g. Business Report Formatting — Word]",
      titleAr: "[ADD: عنوان النموذج بالعربي]",
      descEn: "[ADD: Description]",
      descAr: "[ADD: وصف]",
      featured: false,
      image: "[ADD: /assets/samples/doc-sample.webp]",
      link: "[ADD: link]",
    },
    {
      id: "s4",
      category: "data-cleaning",
      titleEn: "[ADD: Sample Title, e.g. Customer Database Deduplication]",
      titleAr: "[ADD: عنوان النموذج بالعربي]",
      descEn: "[ADD: Description]",
      descAr: "[ADD: وصف]",
      featured: false,
      image: "[ADD: /assets/samples/cleaning-sample.webp]",
      link: "[ADD: link]",
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
      roleEn: "[ADD: Job title / Platform, e.g. Business Owner — Upwork]",
      roleAr: "[ADD: المسمى الوظيفي / المنصة]",
      quoteEn: "[ADD: Paste the client's review or testimonial text here]",
      quoteAr: "[ADD: ألصق نص تقييم العميل هنا]",
      rating: 5,
    },
    {
      nameEn: "[ADD: Client Name]",
      nameAr: "[ADD: اسم العميل]",
      roleEn: "[ADD: Role / Platform]",
      roleAr: "[ADD: الدور / المنصة]",
      quoteEn: "[ADD: Testimonial text]",
      quoteAr: "[ADD: نص التقييم]",
      rating: 5,
    },
    {
      nameEn: "[ADD: Client Name]",
      nameAr: "[ADD: اسم العميل]",
      roleEn: "[ADD: Role / Platform]",
      roleAr: "[ADD: الدور / المنصة]",
      quoteEn: "[ADD: Testimonial text]",
      quoteAr: "[ADD: نص التقييم]",
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
      aEn: "Pricing is based on the volume of data, complexity, urgency, and required accuracy level. I offer per-row, per-page, per-hour, and fixed-project pricing. Contact me with your requirements for a free custom quote.",
      aAr: "يُحدَّد السعر بناءً على حجم البيانات والتعقيد والإلحاح ومستوى الدقة المطلوب. أقدّم أسعارًا لكل صف أو صفحة أو ساعة أو مشروع ثابت. تواصل معي لتلقي عرض سعر مجاني.",
    },
    {
      qEn: "Do you offer revisions?",
      qAr: "هل تقدم تعديلات على العمل؟",
      aEn: "Absolutely. If there is any error or inconsistency on my part, I will correct it at no extra charge. Client satisfaction is my top priority, and I work until you are happy with the result.",
      aAr: "بالتأكيد. إذا كان هناك أي خطأ أو تناقض من جانبي، فسأصحّحه دون أي رسوم إضافية. رضا العميل هو أولويتي القصوى، وأعمل حتى تكون راضيًا عن النتيجة.",
    },
  ],

};
