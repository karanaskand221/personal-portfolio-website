// script.js - Portfolio JavaScript (Small & Readable)

// 1. Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Back to Top Button
function createBackToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'back-to-top';
    btn.title = 'Back to Top';
    document.body.appendChild(btn);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });

    // Scroll to top when clicked
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 3. Scroll Reveal Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Exclude #activity and its inner cards from reveal animations
    document
        .querySelectorAll('.section:not(#activity), .card:not(#activity .card), .skill-card, .education-item, .contact-item')
        .forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
}



// 4. Navbar Scroll Effects
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
}

// 5. Contact Form Handler
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        // Remove the preventDefault block.
        // Let the form post to FormSubmit / backend normally.
    }
}


// 6. Hero Typing Effect (Optional - Simple version)
function initTypingEffect() {
    const tagline = document.querySelector('.hero-tagline');
    if (!tagline) return;

    const text = tagline.textContent;
    tagline.textContent = '';
    tagline.style.overflow = 'hidden';

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 500);
}

// 7. Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    createBackToTopButton();
    initScrollAnimations();
    initNavbarEffects();
    initContactForm();
    initTypingEffect();

    console.log('✅ Portfolio JS loaded successfully!');
});

// 8. Mobile Menu Toggle (Future-ready)
function initMobileMenu() {
    // Add hamburger button to HTML first:
    // <button class="mobile-menu-toggle">☰</button>
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}