/* ==========================================================================
   HMTI DIGITAL HUB - MAIN JAVASCRIPT
   Logic: Dark Mode Switcher & Mobile Drawer Navbar Toggle
   ========================================================================== */

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
}

document.addEventListener('componentsLoaded', initMainApp);
document.addEventListener('DOMContentLoaded', initMainApp);
