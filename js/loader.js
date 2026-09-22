// /* ==========================================================================
//    HMTI DIGITAL HUB - COMPONENT LOADER
//    Loads modular HTML files from components/ into index.html placeholders
//    ========================================================================== */

// async function loadComponent(containerId, filePath) {
//   try {
//     const response = await fetch(filePath);
//     if (!response.ok) throw new Error(`HTTP error ${response.status}`);
//     const htmlText = await response.text();
//     const container = document.getElementById(containerId);
//     if (container) {
//       container.innerHTML = htmlText;
//     }
//   } catch (error) {
//     console.error(`Error loading component ${filePath}:`, error);
//   }
// }

// document.addEventListener('DOMContentLoaded', async () => {
//   // 1. Load all component HTML files sequentially
//   await loadComponent('navbar-app', './components/navbar.html');
//   await loadComponent('hero-app', './components/hero.html');
//   await loadComponent('tentang-app', './components/tentang.html');
//   await loadComponent('kegiatan-app', './components/kegiatan.html');
//   await loadComponent('artikel-app', './components/artikel.html');
//   await loadComponent('kontak-app', './components/kontak.html');
//   await loadComponent('footer-app', './components/footer.html');

//   // 2. Dispatch custom event to notify child scripts that DOM is fully populated
//   document.dispatchEvent(new Event('componentsLoaded'));
// });
