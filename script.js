/* =========================================================
   Sherzad Oryakhil — Portfolio
   Vanilla JS: theme, navbar, scrollspy, reveal animations,
   terminal typing effect, contact form validation, i18n.
   ========================================================= */

/* ---------------- Translations ----------------
   Three languages: English (default), Dari (prs), Pashto (ps).
   Dari and Pashto are right-to-left; applyLanguage() below flips
   <html dir> and swaps in Bootstrap's official RTL build. */
const translations = {
  en: {
    nav: { about: "about", skills: "skills", projects: "projects", experience: "experience", contact: "contact" },
    hero: {
      eyebrow: "$ software engineer · kabul, afghanistan",
      title: `Hi, I'm Sherzad Oryakhil.<br /><span class="accent">Full-Stack | Mobile Apps | Machine Learning Engineer</span>`,
      lead: "I design and build websites, databases, and mobile applications for Android and iOS.",
      cta_work: "View Work",
      cta_contact: "Contact Me",
      stat_years: "years building software",
      stat_project: "shipped client project",
      stat_stack: "languages & frameworks",
      term_role: "Software Engineer, Full Stack Web Developer, Mobile Applications Developer, Database Developer",
    },
    about: {
      eyebrow: "// about",
      heading: "About Me",
      p1: "I'm building websites, databases, and mobile applications for Android and iOS, developing reliable software solutions along the way.",
      p2: "I enjoy turning ideas into clean, efficient, and user-friendly products.",
      p3: "I'm passionate about learning new technologies and currently focusing on Python, AI, and Machine Learning.",
      fact_location: '"Kabul, Afghanistan"',
      fact_experience: '"2+ years"',
      fact_student: '"CS Student"',
      fact_focus: '"Web Dev, Mobile Dev → Machine Learning Engineering"',
    },
    skills: {
      eyebrow: "// skills",
      heading: "Skills & Tools",
      subheading: "Grouped by where each one fits in my day-to-day work.",
      group_languages: "Programming & Machine Learning",
      group_frontend: "Frontend Development",
      group_backend: "Backend & Databases",
      group_mobile: "Mobile Development",
      group_tools: "Development Tools",
    },
    projects: {
      eyebrow: "// projects",
      heading: "Projects",
      subheading: "A look at what I've shipped.",
      title1: "Pamircola Group of Companies",
      desc1: "A frontend website built for Pamircola Group of Companies, focused on a clean presentation of the company's services.",
      see_details: "See details",
      more_note: "More projects are on the way — check back soon, or take a look at my",
      more_link: "GitHub profile",
      more_note_end: " in the meantime.",
    },
    experience: {
      eyebrow: "// experience",
      heading: "Experience",
      tag: "Ongoing",
      role: "Computer Science Student",
      desc: "Currently studying and deepening my knowledge of software development while building a range of personal and client projects along the way.",
    },
    contact: {
      eyebrow: "// contact",
      heading: "Contact Me",
      subheading: "Have a project in mind, or just want to say hi? Reach out.",
      info_heading: "Contact Information",
      location: "Kabul, Afghanistan",
      follow_heading: "Follow Me On",
      form_heading: "Send a Message",
      label_name: "Name",
      label_email: "Email",
      label_message: "Message",
      error_name: "Please enter your name.",
      error_email: "Please enter a valid email address.",
      error_message: "Please enter a message.",
      submit: "Send Message",
      status_fix: "Please fix the highlighted fields before sending.",
      status_preparing: "Preparing your message…",
      status_success: "Opening your email app to send the message. Thanks, {name}!",
    },
    footer: { rights: "Sherzad Oryakhil 2026. All rights reserved.", built_with: "Built with HTML, CSS & JavaScript." },
    theme: { to_dark: "Switch to dark mode", to_light: "Switch to light mode" },
    lang: { change: "Change language" },
    meta: {
      title: "Sherzad Oryakhil — Software Engineer",
      description: "Portfolio of Sherzad Oryakhil, a software engineer in Kabul, Afghanistan building web applications with Python, JavaScript, PHP and React — now moving toward AI engineering.",
    },
    project: {
      meta: {
        title: "Pamircola Group of Companies — Sherzad Oryakhil",
        description: "A closer look at the frontend website Sherzad Oryakhil built for Pamircola Group of Companies.",
      },
      nav_back: "Back to Projects",
      eyebrow: "// project details",
      overview_heading: "Overview",
      overview_text: "A frontend website built for Pamircola Group of Companies, focused on a clean, easy-to-navigate presentation of the company's services. Layout and styling are built with HTML5, CSS3, and Bootstrap, with JavaScript and jQuery handling interactivity.",
      stack_heading: "Tech Stack",
      cta_heading: "Have a similar project in mind?",
      cta_text: "I'd love to hear about it — reach out and let's talk.",
      cta_button: "Contact Me",
    },
  },

  prs: {
    nav: { about: "درباره", skills: "مهارت‌ها", projects: "پروژه‌ها", experience: "تجربه", contact: "تماس" },
    hero: {
      eyebrow: "$ انجینر سافت‌ویر · کابل، افغانستان",
      title: `سلام، من شیرزاد اوریاخیل هستم.<br /><span class="accent">فول‌استک | اپلیکیشن‌های موبایل | انجینر یادگیری ماشین</span>`,
      lead: "من وب‌سایت‌ها، دیتابیس‌ها و اپلیکیشن‌های موبایل را برای اندروید و آی‌اواس طراحی و می‌سازم.",
      cta_work: "دیدن کارها",
      cta_contact: "تماس با من",
      stat_years: "سال تجربه در ساخت سافت‌ویر",
      stat_project: "پروژه تکمیل‌شده برای مشتری",
      stat_stack: "زبان و فریم‌ورک",
      term_role: "انجینر سافت‌ویر، دیولوپر فول‌استک وب، دیولوپر اپلیکیشن‌های موبایل، دیولوپر دیتابیس",
    },
    about: {
      eyebrow: "// درباره",
      heading: "درباره من",
      p1: "من در حال ساختن وب‌سایت‌ها، دیتابیس‌ها و اپلیکیشن‌های موبایل برای اندروید و آی‌اواس هستم و در این مسیر راه‌حل‌های سافت‌ویری قابل‌اعتماد توسعه می‌دهم.",
      p2: "من از تبدیل کردن ایده‌ها به محصولاتی تمیز، کارآمد و کاربرپسند لذت می‌برم.",
      p3: "من به یادگیری تکنالوژی‌های جدید علاقه‌مند هستم و در حال حاضر روی پایتون، هوش مصنوعی و یادگیری ماشین تمرکز دارم.",
      fact_location: '"کابل، افغانستان"',
      fact_experience: '"بیش از ۲ سال"',
      fact_student: '"محصل کمپیوترساینس"',
      fact_focus: '"ویب‌دیولوپمنت، موبایل‌دیولوپمنت ← انجینری یادگیری ماشین"',
    },
    skills: {
      eyebrow: "// مهارت‌ها",
      heading: "مهارت‌ها و ابزارها",
      subheading: "بر اساس نقشی که هرکدام در کار روزمره‌ام دارند دسته‌بندی شده‌اند.",
      group_languages: "برنامه‌نویسی و یادگیری ماشین",
      group_frontend: "توسعه فرانت‌اند",
      group_backend: "بک‌اند و دیتابیس",
      group_mobile: "توسعه موبایل",
      group_tools: "ابزارهای توسعه",
    },
    projects: {
      eyebrow: "// پروژه‌ها",
      heading: "پروژه‌ها",
      subheading: "نگاهی به کارهایی که تکمیل کرده‌ام.",
      title1: "شرکت گروپ پامیرکولا",
      desc1: "یک وب‌سایت فرانت‌اند که برای گروپ شرکت‌های پامیرکولا ساخته شده و روی نمایش شفاف خدمات شرکت تمرکز دارد.",
      see_details: "جزئیات بیشتر",
      more_note: "پروژه‌های بیشتر به‌زودی اضافه می‌شوند — دوباره سر بزنید، یا در همین حال نگاهی به",
      more_link: "پروفایل گیت‌هاب من",
      more_note_end: " بیندازید.",
    },
    experience: {
      eyebrow: "// تجربه",
      heading: "تجربه",
      tag: "در حال جریان",
      role: "محصل کمپیوترساینس",
      desc: "در حال حاضر مصروف آموزش و تعمیق دانشم در زمینه‌ی توسعه‌ی سافت‌ویر هستم و در همین مسیر پروژه‌های شخصی و مشتریان مختلفی می‌سازم.",
    },
    contact: {
      eyebrow: "// تماس",
      heading: "با من در تماس شوید",
      subheading: "پروژه‌ای در ذهن دارید، یا فقط می‌خواهید سلام بگویید؟ با من در تماس شوید.",
      info_heading: "معلومات تماس",
      location: "کابل، افغانستان",
      follow_heading: "من را دنبال کنید",
      form_heading: "ارسال پیام",
      label_name: "نام",
      label_email: "ایمیل",
      label_message: "پیام",
      error_name: "لطفاً نام‌تان را وارد کنید.",
      error_email: "لطفاً یک ایمیل معتبر وارد کنید.",
      error_message: "لطفاً پیام‌تان را بنویسید.",
      submit: "ارسال پیام",
      status_fix: "لطفاً پیش از ارسال، بخش‌های نشان‌شده را تصحیح کنید.",
      status_preparing: "در حال آماده‌سازی پیام شما…",
      status_success: "برنامه ایمیل شما باز می‌شود تا پیام ارسال شود. متشکرم، {name}!",
    },
    footer: { rights: "شیرزاد اوریاخیل ۲۰۲۶ . تمام حقوق محفوظ است.", built_with: "ساخته‌شده با HTML، CSS و جاوااسکریپت." },
    theme: { to_dark: "رفتن به حالت تاریک", to_light: "رفتن به حالت روشن" },
    lang: { change: "تغییر زبان" },
    meta: {
      title: "شیرزاد اوریاخیل — انجینر سافت‌ویر",
      description: "پروفایل شیرزاد اوریاخیل، انجینر سافت‌ویر در کابل، افغانستان که با پایتون، جاوااسکریپت، پی‌اچ‌پی و ری‌اکت اپلیکیشن‌های وب می‌سازد — و اکنون به‌سوی انجینری هوش مصنوعی در حرکت است.",
    },
    project: {
      meta: {
        title: "شرکت گروپ پامیرکولا — شیرزاد اوریاخیل",
        description: "نگاهی دقیق‌تر به وب‌سایت فرانت‌اندی که شیرزاد اوریاخیل برای گروپ شرکت‌های پامیرکولا ساخته است.",
      },
      nav_back: "بازگشت به پروژه‌ها",
      eyebrow: "// جزئیات پروژه",
      overview_heading: "معرفی",
      overview_text: "یک وب‌سایت فرانت‌اند که برای گروپ شرکت‌های پامیرکولا ساخته شده، با تمرکز بر نمایش ساده و قابل‌فهم خدمات شرکت. طرح و ظاهر آن با HTML5، CSS3 و بوت‌استرپ ساخته شده، و تعامل‌پذیری آن را جاوااسکریپت و جی‌کوئری فراهم می‌کند.",
      stack_heading: "تکنالوژی‌های استفاده‌شده",
      cta_heading: "پروژه‌ای مشابه در ذهن دارید؟",
      cta_text: "خوشحال می‌شوم درباره‌اش بشنوم — با من در تماس شوید.",
      cta_button: "تماس با من",
    },
  },

  ps: {
    nav: { about: "زما په اړه", skills: "مهارتونه", projects: "پروژې", experience: "تجربه", contact: "اړیکه" },
    hero: {
      eyebrow: "$ د سافټویر انجینر · کابل، افغانستان",
      title: `سلام، زه شیرزاد اوریاخېل یم.<br /><span class="accent">فول سټیک | د موبایل اپلیکیشنونه | د ماشین زده‌کړې انجینر</span>`,
      lead: "زه د اېنډرایډ او iOS لپاره ویب پاڼې، ډیټابیسونه، او د موبایل اپلیکیشنونه ډیزاین کوم او جوړوم.",
      cta_work: "کارونه وګورئ",
      cta_contact: "زما سره اړیکه ونیسئ",
      stat_years: "کاله د سافټویر جوړونې تجربه",
      stat_project: "بشپړ شوی پروژه د پیرودونکي لپاره",
      stat_stack: "ژبې او چوکاټونه",
      term_role: "د سافټویر انجینر، د فول سټیک ویب ډیویلوپر، د موبایل اپلیکیشنونو ډیویلوپر، د ډیټابیس ډیویلوپر",
    },
    about: {
      eyebrow: "// زما په اړه",
      heading: "زما په اړه",
      p1: "زه د اېنډرایډ او iOS لپاره ویب پاڼې، ډیټابیسونه، او د موبایل اپلیکیشنونه جوړوم، او په دې لار کې د باور وړ سافټویري حلونه رامنځته کوم.",
      p2: "زه د نظرونو د پاکو، اغیزمنو، او کاروونکي‌دوستانه محصولاتو ته د اړولو څخه خوند اخلم.",
      p3: "زه د نویو ټکنالوژیو زده کولو ته لیوال یم او اوس مهال په پایتون، مصنوعي ځیرکتیا، او د ماشین زده‌کړې باندې تمرکز کوم.",
      fact_location: '"کابل، افغانستان"',
      fact_experience: '"له ۲ کلونو ډېره"',
      fact_student: '"د کمپیوټر ساینس زده‌کوونکی"',
      fact_focus: '"د ویب پراختیا، د موبایل پراختیا ← د ماشین زده‌کړې انجینري"',
    },
    skills: {
      eyebrow: "// مهارتونه",
      heading: "مهارتونه او وسایل",
      subheading: "د هغه رول له مخې ډلبندي شوي چې هر یو یې زما په ورځني کار کې لري.",
      group_languages: "پروګرامینګ او د ماشین زده‌کړه",
      group_frontend: "فرنت‌اند پراختیا",
      group_backend: "بیک‌اند او ډیټابیسونه",
      group_mobile: "موبایل پراختیا",
      group_tools: "د پراختیا وسایل",
    },
    projects: {
      eyebrow: "// پروژې",
      heading: "پروژې",
      subheading: "هغه کارونه چې مې بشپړ کړي دي.",
      title1: "د پامیرکولا شرکتونو ګروپ",
      desc1: "یوه فرنت‌اند ویب پاڼه چې د پامیرکولا شرکتونو ګروپ لپاره جوړه شوې، او د شرکت خدماتو په روښانه وړاندې کولو تمرکز لري.",
      see_details: "نور معلومات وګورئ",
      more_note: "نورې پروژې ډېر ژر اضافه کیږي — بیرته وګورئ، یا تر هغه وخته زما",
      more_link: "زما د ګیتهب پروفایل",
      more_note_end: " وګورئ.",
    },
    experience: {
      eyebrow: "// تجربه",
      heading: "تجربه",
      tag: "روان دی",
      role: "د کمپیوټر ساینس زده‌کوونکی",
      desc: "اوس مهال زه د سافټویر پراختیا په اړه خپله پوهه ژوروم او سره له دې شخصي او د پیرودونکو ډېرې پروژې جوړوم.",
    },
    contact: {
      eyebrow: "// اړیکه",
      heading: "زما سره اړیکه ونیسئ",
      subheading: "پروژه لرئ، یا یوازې غواړئ سلام ووایاست؟ زموږ سره اړیکه ونیسئ.",
      info_heading: "د اړیکې معلومات",
      location: "کابل، افغانستان",
      follow_heading: "زما تعقیب کړئ",
      form_heading: "پیغام واستوئ",
      label_name: "نوم",
      label_email: "بریښنالیک",
      label_message: "پیغام",
      error_name: "مهرباني وکړئ خپل نوم ولیکئ.",
      error_email: "مهرباني وکړئ یو سم بریښنالیک ولیکئ.",
      error_message: "مهرباني وکړئ خپل پیغام ولیکئ.",
      submit: "پیغام واستوئ",
      status_fix: "مهرباني وکړئ د لیږلو دمخه نښه‌شوي برخې سمې کړئ.",
      status_preparing: "ستاسو پیغام چمتو کیږي…",
      status_success: "ستاسو د بریښنالیک اپلیکیشن به خلاص شي ترڅو پیغام ولیږل شي. مننه، {name}!",
    },
    footer: { rights: "شیرزاد اوریاخېل ۲۰۲۶ . ټول حقونه خوندي دي.", built_with: "د HTML، CSS، او جاواسکریپټ په مرسته جوړ شوی." },
    theme: { to_dark: "تیاره حالت ته لاړ شئ", to_light: "روښانه حالت ته لاړ شئ" },
    lang: { change: "ژبه بدله کړئ" },
    meta: {
      title: "شیرزاد اوریاخېل — د سافټویر انجینر",
      description: "د شیرزاد اوریاخېل پروفایل، د سافټویر انجینر په کابل، افغانستان کې چې د پایتون، جاواسکریپټ، PHP، او ری‌اکټ په مرسته ویب اپلیکیشنونه جوړوي — اوس د AI انجینرۍ په لور روان دی.",
    },
    project: {
      meta: {
        title: "د پامیرکولا شرکتونو ګروپ — شیرزاد اوریاخېل",
        description: "د هغه فرنت‌اند ویب پاڼې نږدې کتنه چې شیرزاد اوریاخېل یې د پامیرکولا شرکتونو ګروپ لپاره جوړه کړې.",
      },
      nav_back: "پروژو ته بېرته ورشئ",
      eyebrow: "// د پروژې جزئیات",
      overview_heading: "لنډیز",
      overview_text: "یوه فرنت‌اند ویب پاڼه چې د پامیرکولا شرکتونو ګروپ لپاره جوړه شوې، او په ساده او د پوهېدو وړ ډول د شرکت خدماتو ښودلو باندې تمرکز لري. بڼه یې د HTML5، CSS3 او بوټسټراپ په مرسته جوړه شوې، او متقابل والی یې جاواسکریپټ او jQuery رامنځته کوي.",
      stack_heading: "کارول شوې ټکنالوژۍ",
      cta_heading: "ورته پروژه لرئ؟",
      cta_text: "خوشحاله به شم چې دې اورم — زما سره اړیکه ونیسئ.",
      cta_button: "زما سره اړیکه ونیسئ",
    },
  },
};

const RTL_LANGS = ["prs", "ps"];

function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

function applyLanguage(lang) {
  const dict = translations[lang] ? lang : "en";
  const t = translations[dict];
  const isRtl = RTL_LANGS.includes(dict);

  document.documentElement.setAttribute("lang", dict);
  document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");

  // Swap in Bootstrap's official RTL build so its grid/utility classes
  // (margins, text alignment, dropdown position, etc.) mirror correctly.
  const bsLink = document.getElementById("bootstrapCss");
  if (bsLink) {
    const wanted = isRtl ? bsLink.dataset.rtlHref : bsLink.dataset.ltrHref;
    if (bsLink.getAttribute("href") !== wanted) {
      bsLink.setAttribute("href", wanted);
    }
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getNested(t, el.getAttribute("data-i18n"));
    if (value !== null) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = getNested(t, el.getAttribute("data-i18n-html"));
    if (value !== null) el.innerHTML = value;
  });

  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = dict === "en" ? "EN" : dict === "prs" ? "دری" : "پښتو";

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === dict);
    btn.setAttribute("aria-current", btn.getAttribute("data-lang") === dict ? "true" : "false");
  });

  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.setAttribute("aria-label", t.lang.change);

  const themeToggleBtn = document.getElementById("themeToggle");
  if (themeToggleBtn) {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    themeToggleBtn.setAttribute("aria-label", isDark ? t.theme.to_light : t.theme.to_dark);
  }

  const metaKey = document.body.dataset.metaKey;
  const metaObj = (metaKey && getNested(t, metaKey)) || t.meta;
  document.title = metaObj.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", metaObj.description);

  document.documentElement.dataset.lang = dict;
  localStorage.setItem("lang", dict);
}

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------- Language switcher ---------------- */
  try {
    const savedLang = localStorage.getItem("lang");
    applyLanguage(savedLang && translations[savedLang] ? savedLang : "en");

    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });
  } catch (err) {
    console.error("Language switcher disabled, defaulting to English:", err);
  }

  /* ---------------- Theme toggle ---------------- */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const html = document.documentElement;

  function getPreferredTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function currentDict() {
    const lang = html.getAttribute("lang");
    return translations[lang] ? translations[lang] : translations.en;
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    if (themeIcon) {
      themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
    if (themeToggle) {
      const t = currentDict();
      themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      themeToggle.setAttribute("aria-label", theme === "dark" ? t.theme.to_light : t.theme.to_dark);
    }
  }

  applyTheme(getPreferredTheme());

  themeToggle?.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  /* ---------------- Navbar scrolled state ---------------- */
  const navbar = document.querySelector(".navbar");
  function onScroll() {
    if (window.scrollY > 40) {
      navbar?.classList.add("is-scrolled");
    } else {
      navbar?.classList.remove("is-scrolled");
    }
    toggleBackToTop();
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Close mobile menu on link click ---------------- */
  const collapseEl = document.getElementById("primaryNav");
  const bsCollapse =
    collapseEl && window.bootstrap
      ? window.bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false })
      : null;

  document.querySelectorAll("#primaryNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (collapseEl?.classList.contains("show")) {
        bsCollapse?.hide();
      }
    });
  });

  /* ---------------- Smooth scroll with fixed-nav offset ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar?.offsetHeight || 72;
      window.scrollTo({
        top: target.offsetTop - navHeight + 1,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      history.pushState(null, "", targetId);
    });
  });

  /* ---------------- Scrollspy (active nav link) ---------------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll("#primaryNav .nav-link");

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", isActive);
            if (isActive) {
              link.setAttribute("aria-current", "page");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => spyObserver.observe(section));

  /* ---------------- Reveal on scroll ----------------
     CSS shows .reveal elements by default (see style.css). Only if
     this block runs successfully do we opt into the hidden+animate
     state, so a JS failure here can never hide page content. */
  try {
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      const revealEls = document.querySelectorAll(".reveal");
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
        revealObserver.observe(el);
      });
      // Opt in only now that the observer is wired up.
      document.body.classList.add("reveal-ready");

      // Safety net: if any element is somehow never intersected
      // (e.g. it's already off-screen in an unusual layout), force
      // it visible after a short delay rather than leaving it hidden.
      setTimeout(() => {
        revealEls.forEach((el) => el.classList.add("is-visible"));
      }, 2500);
    }
  } catch (err) {
    // If anything above fails, body never gets "reveal-ready",
    // so the CSS default (fully visible) simply stays in effect.
    console.error("Reveal-on-scroll disabled:", err);
  }

  /* ---------------- Terminal tilt-on-hover ----------------
     A small 3D tilt that follows the cursor — desktop with a
     precise pointer only, and only when motion is allowed. */
  try {
    const canTilt =
      !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches;
    const terminalEl = document.querySelector(".terminal");
    if (canTilt && terminalEl) {
      const maxTilt = 7;
      terminalEl.addEventListener("mousemove", (e) => {
        const rect = terminalEl.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        terminalEl.style.transform = `rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg)`;
      });
      terminalEl.addEventListener("mouseleave", () => {
        terminalEl.style.transform = "";
      });
    }
  } catch (err) {
    console.error("Terminal tilt effect disabled:", err);
  }

  /* ---------------- Hero terminal typing effect ---------------- */
  try {
  const terminalBody = document.getElementById("terminalBody");
  if (terminalBody && !prefersReducedMotion) {
    function buildScript() {
      // Terminal card always displays English, even in Dari/Pashto
      const t = translations.en;
      return [
        { type: "prompt", text: "whoami" },
        { type: "output", text: "Sherzad Oryakhil" },
        { type: "prompt", text: "role" },
        { type: "output", text: t.hero.term_role },
        { type: "prompt", text: "stack" },
        { type: "output", text: "Python · JavaScript · PHP · Flutter" },
      ];
    }

    terminalBody.innerHTML = "";
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = null;
    let script = [];

    function typeNext() {
      if (lineIndex >= script.length) return;
      const step = script[lineIndex];

      if (charIndex === 0) {
        currentLine = document.createElement("p");
        currentLine.className =
          step.type === "prompt" ? "terminal-line" : "terminal-line terminal-output";
        if (step.type === "prompt") {
          const promptSpan = document.createElement("span");
          promptSpan.className = "terminal-prompt";
          promptSpan.textContent = "$ ";
          currentLine.appendChild(promptSpan);
        }
        const textSpan = document.createElement("span");
        currentLine.appendChild(textSpan);
        const cursor = document.createElement("span");
        cursor.className = "terminal-cursor";
        currentLine.appendChild(cursor);
        terminalBody.appendChild(currentLine);
      }

      const textSpan = currentLine.querySelector("span:not(.terminal-prompt):not(.terminal-cursor)");
      if (charIndex < step.text.length) {
        textSpan.textContent += step.text[charIndex];
        charIndex++;
        setTimeout(typeNext, step.type === "prompt" ? 45 : 18);
      } else {
        currentLine.querySelector(".terminal-cursor")?.remove();
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, 260);
      }
    }

    // Start typing once the hero terminal scrolls into view
    const heroObserver = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          script = buildScript();
          typeNext();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    heroObserver.observe(terminalBody);
  }
  } catch (err) {
    console.error("Terminal typing effect disabled:", err);
  }

  /* ---------------- Back to top ---------------- */
  const backToTop = document.getElementById("backToTop");
  function toggleBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
  }
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
