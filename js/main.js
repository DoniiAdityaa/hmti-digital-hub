
//    HMTI DIGITAL HUB - MAIN JAVASCRIPT
//    Logic: Dark Mode Switcher, Mobile Drawer Toggle, Scroll Morphing, & ScrollSpy Active Link


function initMainApp() {
    // 1. Dark Mode Switcher Logic
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        htmlElement.classList.remove('dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const isDark = htmlElement.classList.contains('dark');

            if (isDark) {
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
                localStorage.setItem('theme', 'dark');
            } else {
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // 2. Mobile Drawer Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-xmark');
                }
            } else {
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // 3. Active Nav Link Underline Indicator (ScrollSpy)
    const sections = document.querySelectorAll('section[id], footer[id]');
    const desktopNavLinks = document.querySelectorAll('.nav-link');

    function updateActiveNavLink() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 140;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                desktopNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            desktopNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 4. Scroll Morphing Navbar Effect
const mainNav = document.getElementById('mainNav');

if (mainNav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            mainNav.classList.remove('max-w-6xl', 'py-2.5', 'px-4');
            mainNav.classList.add('max-w-4xl', 'py-1.5', 'px-3.5', 'shadow-2xl');
        } else {
            mainNav.classList.remove('max-w-4xl', 'py-1.5', 'px-3.5', 'shadow-2xl');
            mainNav.classList.add('max-w-6xl', 'py-2.5', 'px-4');
        }
    });
}

// Run script on DOM ready
document.addEventListener('DOMContentLoaded', initMainApp);
