# Mustafa Abu El-Ata — Data Entry Specialist Portfolio

**Live site:** https://mustafaatta20012.github.io/portfolio/

Plain HTML + CSS + Vanilla JS. No build step. Deploys directly to GitHub Pages.

---

## File Structure

```
portfolio/
├── index.html          # Home: Hero, About, Services preview, CTA
├── services.html       # Services, Skills, Tools, Process
├── experience.html     # Experience timeline, Training & Courses
├── portfolio.html      # Work samples gallery, Featured PPT, Testimonials
├── contact.html        # Contact form, FAQ, Social links
├── style.css           # Shared design system (all pages)
├── app.js              # Shared JavaScript (all pages)
├── data.js             # ← ALL EDITABLE CONTENT IS HERE
├── sitemap.xml
├── robots.txt
└── assets/
    ├── cv.pdf          # ← Replace with your real CV
    ├── og-image.png    # ← Replace with a real OG image (1200×630)
    └── samples/        # ← Put your sample screenshots here (.webp)
```

---

## How to Edit Content (`data.js`)

**All text content, links, stats, services, skills, courses, samples, testimonials, and FAQ are in `data.js`.** You never need to touch the HTML files for content changes.

### Quick-start editing steps:

1. **Open `data.js`** in any text editor.
2. Search for `[ADD:` to find every placeholder that needs your real info.
3. Replace the placeholder text with your real content.
4. Save the file and push to GitHub — done.

### Key sections in `data.js`:

| Section | What to fill in |
|---------|----------------|
| `personal` | Your email, phone, WhatsApp link |
| `links` | Upwork profile URL, Formspree endpoint |
| `stats` | Your real accuracy %, projects completed, WPM |
| `experience[]` | Job titles, companies, dates, tasks, tags |
| `courses[]` | Course names, providers, years, hours, certificate URLs |
| `samples[]` | Work sample titles, descriptions, image paths, links |
| `testimonials[]` | Client names, roles, quotes |

---

## How to Add a Work Sample

1. Export a screenshot of your work as a `.webp` file (recommended size: 600×400px).
2. Place it in `assets/samples/` — e.g. `assets/samples/excel-cleanup.webp`.
3. In `data.js`, find the relevant entry in the `samples[]` array (or add a new object):

```js
{
  id: "s5",
  category: "excel",            // excel | presentations | documents | data-cleaning
  titleEn: "Customer Database Cleanup",
  titleAr: "تنظيف قاعدة بيانات العملاء",
  descEn: "Removed 200+ duplicates and standardized formatting across 1,500 rows.",
  descAr: "إزالة 200+ تكرار وتوحيد التنسيق عبر 1500 صف.",
  featured: false,
  image: "/portfolio/assets/samples/excel-cleanup.webp",
  link: "https://docs.google.com/spreadsheets/d/your-sheet-id",
},
```

---

## How to Add a Course / Certificate

In `data.js`, find the `courses[]` array and add or edit an entry:

```js
{
  category: "Excel",                          // Excel | Data Entry | Typing | English | Freelancing | Digital Skills
  nameEn:    "Excel from Beginner to Advanced",
  nameAr:    "إكسل من المبتدئ إلى المحترف",
  providerEn: "Udemy",
  providerAr: "يوديمي",
  year:      "2024",
  hours:     "12 hours",
  certUrl:   "https://www.udemy.com/certificate/UC-xxxxxxxx/",
},
```

---

## How to Set Up the Contact Form (Formspree)

1. Go to **https://formspree.io** and create a free account.
2. Create a new form — you'll get an endpoint like `https://formspree.io/f/xpwdvqbk`.
3. Open `data.js` and replace the placeholder in `links.formspree`:

```js
formspree: "https://formspree.io/f/xpwdvqbk",
```

---

## How to Add Your CV

1. Export your CV as a PDF.
2. Rename it `cv.pdf`.
3. Place it in `assets/cv.pdf`.
4. The "Download CV" button on the homepage will automatically link to it.

---

## How to Deploy to GitHub Pages

The site is already a plain HTML project — no build step needed.

```bash
# In the portfolio folder:
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Pages will serve it automatically from `main` branch at:
`https://mustafaatta20012.github.io/portfolio/`

---

## Dark Mode & Language Toggle

- **Dark/Light mode** is saved in `localStorage` and respects system preference on first load.
- **Arabic/English toggle** switches all text, flips the layout to full RTL (Arabic), and saves the choice.
- Both toggles appear in the navbar on every page.

---

## Browser Support

Chrome, Edge, Firefox, Safari — all modern versions. No polyfills needed.

---

## Performance Tips

- Convert all sample images to `.webp` format (smaller file size).
- The CV PDF should be under 2MB.
- The OG image (`og-image.png`) should be exactly 1200×630px.
