/**
 * UI Controls, Smooth Scrolling, Form Handler, Dark/Light Mode
 */
document.addEventListener('DOMContentLoaded', () => {
    // =====================
    // Dark/Light Mode Toggle
    // =====================
    const themeToggle = document.querySelector('.theme-toggle-btn');
    const themeIcon = themeToggle ? themeToggle.querySelector('.material-symbols-outlined') : null;

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.textContent = 'dark_mode';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.textContent = 'light_mode';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.textContent = 'dark_mode';
            }
        });
    }

    // =====================
    // Navigation active link highlights on scroll
    // =====================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // =====================
    // Mobile hamburger menu toggle
    // =====================
    const hamburger = document.querySelector('.nav-hamburger');
    const navRight = document.querySelector('.nav-right');
    const navOverlay = document.querySelector('.nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.nav-menu .nav-link');

    const closeMobileMenu = () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navRight) navRight.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    const openMobileMenu = () => {
        if (hamburger) hamburger.classList.add('active');
        if (navRight) navRight.classList.add('open');
        if (navOverlay) navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isOpen = navRight && navRight.classList.contains('open');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMobileMenu);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu on window resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeMobileMenu();
        }
    });

    // =====================
    // Smooth scroll for nav links
    // =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =====================
    // Form submission handling via Formsubmit.co
    // =====================
    const form = document.getElementById('partner-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="material-symbols-outlined">hourglass_empty</span> Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(form);
            // Formsubmit.co expects specific field names; map our fields
            const payload = new FormData();
            payload.append('Full Name', formData.get('fullName') || '');
            payload.append('Email', formData.get('email') || '');
            payload.append('Organization', formData.get('organization') || '');
            payload.append('InterestType', formData.get('interestType') || '');
            payload.append('Message', formData.get('message') || '');
            payload.append('_subject', 'New Partnership Inquiry - ClimaAqua Africa Website');
            payload.append('_captcha', 'false');

            fetch('https://formsubmit.co/ajax/climaaquaafrica@gmail.com', {
                method: 'POST',
                body: payload
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Thank you for reaching out to ClimaAqua Africa! We have received your inquiry and will get back to you soon.');
                    form.reset();
                } else {
                    alert('Oops! There was an issue sending your message. Please try again or contact us directly at climaaquaafrica@gmail.com.');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                alert('Oops! There was an issue sending your message. Please try again or contact us directly at climaaquaafrica@gmail.com.');
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});