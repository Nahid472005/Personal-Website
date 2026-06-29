/* =========================================================
   Nahidul Islam — Portfolio JavaScript
   Handles: data rendering, theme, nav, animations, form
   ========================================================= */

/* ---------- Data ---------- */

// SVG icon set (stroke-based, inherits currentColor)
const icons = {
  marketing: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  seo: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  smo: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
  design: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a10 10 0 1 1 8-4c-1.5 2-4 1-5 0a2 2 0 0 0-3 1 2 2 0 0 1-2 3z"/></svg>',
  card: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>',
  id: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h3M15 12h3M6 16c0-1.7 1.3-3 3-3s3 1.3 3 3"/></svg>',
  flyer: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16v18l-8-4-8 4z"/><path d="M8 8h8M8 12h5"/></svg>',
  brochure: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h6v14H3zM9 5h6v14H9zM15 5h6v14h-6z"/></svg>',
  wordpress: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M6 6.5h.01M9 6.5h.01"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/></svg>',
};

const services = [
  { icon: "marketing", title: "Digital Marketing", desc: "Full-funnel campaigns that attract, engage and convert your ideal audience." },
  { icon: "seo", title: "Search Engine Optimization", desc: "On-page, off-page and technical SEO to rank you higher on Google." },
  { icon: "smo", title: "Social Media Optimization", desc: "Grow and engage your audience across all major social platforms." },
  { icon: "design", title: "Graphic Design", desc: "Modern, brand-aligned visuals that make your business stand out." },
  { icon: "card", title: "Business Card Design", desc: "Memorable, professional cards that leave a lasting first impression." },
  { icon: "id", title: "ID Card Design", desc: "Clean, secure and consistent identity cards for your organization." },
  { icon: "flyer", title: "Flyer Design", desc: "Eye-catching promotional flyers built to drive real engagement." },
  { icon: "brochure", title: "Brochure Design", desc: "Informative, elegant brochures that tell your brand story." },
  { icon: "wordpress", title: "WordPress Website Design", desc: "Fast, responsive and SEO-ready WordPress websites." },
  { icon: "youtube", title: "YouTube SEO", desc: "Optimize videos and channels to maximize reach and watch time." },
];

const skills = [
  { name: "SEO", value: 95 },
  { name: "Digital Marketing", value: 95 },
  { name: "Social Media Marketing", value: 90 },
  { name: "WordPress", value: 85 },
  { name: "Graphic Design", value: 90 },
];

const projects = [
  { cat: "Business Card", img: "assets/portfolio-business-card.png", title: "Corporate Business Card", desc: "Minimal navy & gold identity for a consulting firm." },
  { cat: "ID Card", img: "assets/portfolio-id-card.png", title: "Employee ID System", desc: "Branded ID cards with lanyard for a tech company." },
  { cat: "Flyer", img: "assets/portfolio-flyer.png", title: "Promotional Flyer", desc: "High-impact marketing flyer for a product launch." },
  { cat: "Graphic Design", img: "assets/portfolio-brochure.png", title: "Trifold Brochure", desc: "Elegant corporate brochure with clean layout." },
  { cat: "SEO", img: "assets/portfolio-seo.png", title: "SEO Growth Campaign", desc: "Tripled organic traffic in 6 months for an e-commerce store." },
  { cat: "WordPress", img: "assets/portfolio-wordpress.png", title: "Business WordPress Site", desc: "Responsive, SEO-ready website for a service brand." },
];

const why = [
  { num: "01", title: "Professional Service", desc: "Reliable, communicative and detail-obsessed on every project." },
  { num: "02", title: "Fast Delivery", desc: "On-time delivery without ever compromising on quality." },
  { num: "03", title: "100% Client Satisfaction", desc: "Unlimited revisions until you are completely happy." },
  { num: "04", title: "SEO Optimized Solutions", desc: "Everything built with search visibility in mind." },
  { num: "05", title: "Affordable Pricing", desc: "Premium results at rates that fit your budget." },
];

const testimonials = [
  { name: "Sarah Johnson", role: "Founder, BloomCo", text: "Nahidul transformed our online presence. Our organic traffic doubled within months and the new branding looks incredible." },
  { name: "David Chen", role: "Marketing Lead, NovaTech", text: "Professional, fast and genuinely talented. The WordPress site he built is fast, clean and ranks beautifully on Google." },
  { name: "Aisha Rahman", role: "Owner, Glow Studio", text: "From flyers to full SEO campaigns, every deliverable exceeded expectations. Highly recommended for any business." },
];

/* ---------- Render helpers ---------- */
const $ = (sel) => document.querySelector(sel);

function renderServices() {
  $("#servicesGrid").innerHTML = services.map((s) => `
    <article class="service-card glass reveal">
      <div class="service-card__icon">${icons[s.icon]}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </article>`).join("");
}

function renderSkills() {
  $("#skillsGrid").innerHTML = skills.map((s) => `
    <div class="skill reveal">
      <div class="skill__top"><span>${s.name}</span><span>${s.value}%</span></div>
      <div class="skill__bar"><div class="skill__fill" data-value="${s.value}"></div></div>
    </div>`).join("");
}

function renderPortfolio() {
  const cats = ["All", ...new Set(projects.map((p) => p.cat))];
  $("#portfolioFilters").innerHTML = cats.map((c, i) =>
    `<button class="filter-btn ${i === 0 ? "is-active" : ""}" data-filter="${c}">${c}</button>`).join("");

  $("#portfolioGrid").innerHTML = projects.map((p) => `
    <article class="project reveal" data-cat="${p.cat}">
      <div class="project__img"><img src="${p.img}" alt="${p.title} — ${p.cat} project by Nahidul Islam" loading="lazy" /></div>
      <div class="project__body">
        <span class="project__cat">${p.cat}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    </article>`).join("");

  // Filtering
  $("#portfolioFilters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".project").forEach((card) => {
      const show = filter === "All" || card.dataset.cat === filter;
      card.style.display = show ? "" : "none";
    });
  });
}

function renderWhy() {
  $("#whyGrid").innerHTML = why.map((w) => `
    <article class="why-card glass reveal">
      <div class="why-card__num">${w.num}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </article>`).join("");
}

function renderTestimonials() {
  $("#testimonialsGrid").innerHTML = testimonials.map((t) => `
    <article class="testimonial glass reveal">
      <div class="testimonial__stars">★★★★★</div>
      <p class="testimonial__quote">"${t.text}"</p>
      <div class="testimonial__author">
        <div class="testimonial__avatar">${t.name.charAt(0)}</div>
        <div><strong>${t.name}</strong><span>${t.role}</span></div>
      </div>
    </article>`).join("");
}

/* ---------- Theme toggle (persisted) ---------- */
function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* ---------- Navigation: scroll state, mobile menu, active link ---------- */
function initNav() {
  const nav = $("#nav");
  const burger = $("#navBurger");
  const links = $("#navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 30);
    $("#scrollTop").classList.toggle("is-visible", window.scrollY > 500);
  });

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
  });

  links.querySelectorAll(".nav__link").forEach((link) =>
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  // Active link highlighting via IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll(".nav__link").forEach((l) =>
          l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => navObserver.observe(s));

  $("#scrollTop").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Reveal animations + animated skill bars ---------- */
function initReveal() {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        // Trigger skill bars when their container reveals
        entry.target.querySelectorAll?.(".skill__fill").forEach((fill) => {
          fill.style.width = fill.dataset.value + "%";
        });
        if (entry.target.classList.contains("skill")) {
          entry.target.querySelector(".skill__fill").style.width =
            entry.target.querySelector(".skill__fill").dataset.value + "%";
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

/* ---------- Contact form validation ---------- */
function initForm() {
  const form = $("#contactForm");
  const success = $("#formSuccess");

  const setError = (field, msg) => {
    const el = form.querySelector(`.form__error[data-for="${field}"]`);
    if (el) el.textContent = msg || "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const data = Object.fromEntries(new FormData(form));

    if (!data.name.trim()) { setError("name", "Please enter your name."); valid = false; } else setError("name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { setError("email", "Enter a valid email."); valid = false; } else setError("email");
    if (!data.subject.trim()) { setError("subject", "Please add a subject."); valid = false; } else setError("subject");
    if (data.message.trim().length < 10) { setError("message", "Message must be at least 10 characters."); valid = false; } else setError("message");

    if (valid) {
      console.log("[v0] Contact form submitted:", data);
      form.reset();
      success.hidden = false;
      setTimeout(() => { success.hidden = true; }, 5000);
    }
  });
}

/* ---------- Page loader ---------- */
function initLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => $("#loader").classList.add("is-hidden"), 500);
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderSkills();
  renderPortfolio();
  renderWhy();
  renderTestimonials();

  // mark hero content for reveal too (before observer is set up)
  document.querySelectorAll(".hero__content, .hero__media, .section__head, .about__text, .about__card")
    .forEach((el) => el.classList.add("reveal"));

  initTheme();
  initNav();
  initReveal();
  initForm();
  initLoader();
});
