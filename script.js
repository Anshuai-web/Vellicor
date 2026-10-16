// Interactive Logic for Vellicor Technologies Ltd (US Corporate Parent)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Drawer Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // 2. Navbar Scroll Dynamic Shrink Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('py-2');
                navbar.classList.remove('py-3', 'sm:py-4');
            } else {
                navbar.classList.remove('py-2');
                navbar.classList.add('py-3', 'sm:py-4');
            }
        });
    }

    // 3. Contact Form Submission with Anti-Spam & Input Sanitization
    const contactForm = document.getElementById('vellicorContactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Anti-Spam Honeypot Verification
            const botCheck = document.getElementById('botCheck');
            if (botCheck && botCheck.value.trim() !== '') {
                console.warn('Automated submission detected and halted.');
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting Request...`;
            }

            // Input Sanitization against script tags
            const sanitize = (str) => str ? String(str).replace(/[<>]/g, '') : '';
            const payload = {
                fullName: sanitize(document.getElementById('formName')?.value),
                workEmail: sanitize(document.getElementById('formEmail')?.value),
                company: sanitize(document.getElementById('formCompany')?.value),
                title: sanitize(document.getElementById('formTitle')?.value),
                inquiryType: sanitize(document.getElementById('formInquiryType')?.value),
                message: sanitize(document.getElementById('formMessage')?.value)
            };

            // Simulate Enterprise Intake
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.classList.add('hidden');
                }
                if (formSuccess) {
                    formSuccess.classList.remove('hidden');
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 800);
        });
    }
});
