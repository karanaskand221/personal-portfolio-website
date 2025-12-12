// script.js – Karan Askand Portfolio

// ========== 1. Smooth scrolling for internal links ==========
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", e => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Close mobile menu after click
            const navMenu = document.querySelector(".nav-menu");
            const toggle = document.querySelector(".mobile-menu-toggle");
            if (navMenu && toggle && navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                toggle.classList.remove("active");
            }
        });
    });
}

// ========== 2. Back‑to‑top button ==========
function initBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ========== 3. Scroll reveal animations ==========
function initScrollReveal() {
    const targets = document.querySelectorAll(
        ".section, .card, .skill-card, .timeline-item, .about-layout"
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.18,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    targets.forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
    });
}

// ========== 4. Navbar effects & active link highlight ==========
function initNavbarEffects() {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    if (!navbar) return;

    // Add shadow when scrolled
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });

    // Highlight active section link
    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            });
        }, {
            threshold: 0.45
        }
    );

    sections.forEach(section => sectionObserver.observe(section));
}

// ========== 5. Mobile navigation toggle ==========
function initMobileMenu() {
    const toggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    if (!toggle || !navMenu) return;

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// ========== 6. Typewriter effect for hero subtitle ==========
function initTypewriter() {
    const el = document.querySelector(".typewriter");
    if (!el) return;

    const text = el.textContent.trim();
    el.textContent = "";
    let index = 0;

    function type() {
        if (index <= text.length) {
            el.textContent = text.slice(0, index);
            index += 1;
            setTimeout(type, 45);
        }
    }

    setTimeout(type, 600);
}

// ========== 7. Optional Google Form button ==========
/*
  If you want to avoid the Android iframe crash, add a button like:
  <button class="btn btn-primary"
          data-open-google-form="https://forms.gle/G3q4wvsaF7i9GSRE6">
    Open Contact Form
  </button>
  This code will open the form in a new tab.
*/
function initGoogleFormButton() {
    const btn = document.querySelector("[data-open-google-form]");
    if (!btn) return;

    btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-open-google-form");
        if (url) window.open(url, "_blank");
    });
}

// ========== 8. Initialize everything ==========
document.addEventListener("DOMContentLoaded", () => {
    // Prevent browser from restoring old scroll position
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    initSmoothScroll();
    initBackToTop();
    initScrollReveal();
    initNavbarEffects();
    initMobileMenu();
    initTypewriter();
    initGoogleFormButton();

    console.log("✅ Portfolio JS initialized");
});