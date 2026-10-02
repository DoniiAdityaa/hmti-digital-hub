
//  HMTI DIGITAL HUB - FILTER & RENDER SCRIPT
//  Logic: Live Search, Category Filter for Events, & Dynamic Articles

function initFilterApp() {
  const kegiatanContainer = document.getElementById('kegiatanContainer');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const artikelContainer = document.getElementById('artikelContainer');

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function renderKegiatan() {
    if (!kegiatanContainer) return;

    const filteredData = listKegiatan.filter(item => {
      const matchCategory = currentCategory === 'all' || item.kategori === currentCategory;
      const matchSearch = item.nama.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        item.lokasi.toLowerCase().includes(currentSearchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    if (filteredData.length === 0) {
      kegiatanContainer.innerHTML = `
        <div class="col-span-full text-center py-12 px-4 rounded-3xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
          <i class="fa-solid fa-folder-open text-4xl text-slate-400 mb-3"></i>
          <h3 class="text-base font-bold text-slate-800 dark:text-slate-200">Tidak ada kegiatan ditemukan</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Coba gunakan kata kunci pencarian lain atau ganti kategori filter.</p>
        </div>
      `;
      return;
    }

    kegiatanContainer.innerHTML = filteredData.map(item => `
      <div class="group rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div class="relative h-48 overflow-hidden">
          <img src="${item.gambar}" alt="${item.nama}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          
          <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-md shadow-sm">
            ${item.kategori}
          </span>

          <span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white ${item.status === 'Open Registration' ? 'bg-emerald-500' : 'bg-amber-500'}">
            ${item.status}
          </span>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span class="flex items-center gap-1"><i class="fa-regular fa-calendar text-blue-500"></i> ${item.tanggal}</span>
              <span>•</span>
              <span class="flex items-center gap-1"><i class="fa-solid fa-location-dot text-rose-500"></i> ${item.lokasi}</span>
            </div>

            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
              ${item.nama}
            </h3>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
              ${item.deskripsi}
            </p>
          </div>

      
        </div>
      </div>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderKegiatan();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      });

      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');

      currentCategory = btn.dataset.category;
      renderKegiatan();
    });
  });

  function renderArtikel() {
    if (!artikelContainer) return;

    artikelContainer.innerHTML = listArtikel.map(item => `
      <article class="group rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div class="relative h-44 overflow-hidden">
          <img src="${item.gambar}" alt="${item.judul}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md">
            ${item.kategori}
          </span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2">
              <span><i class="fa-regular fa-pen-to-square mr-1"></i> ${item.penulis}</span>
              <span><i class="fa-regular fa-calendar mr-1"></i> ${item.tanggal}</span>
            </div>
            <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
              ${item.judul}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
              ${item.ringkasan}
            </p>
          </div>
          <button onclick="openArtikelModal(${item.id})" class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:gap-2.5 transition-all cursor-pointer pt-2">
            <span>Baca Selengkapnya</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </article>
    `).join('');
  }

  renderKegiatan();
  renderArtikel();
}

document.addEventListener('componentsLoaded', initFilterApp);
document.addEventListener('DOMContentLoaded', initFilterApp);

// Modal Reader Function
window.openArtikelModal = function (id) {
  const item = listArtikel.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById('artikelModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalBody = document.getElementById('modalBody');

  if (modal && modalTitle && modalMeta && modalBody) {
    modalTitle.textContent = item.judul;
    modalMeta.textContent = `${item.penulis} • ${item.tanggal}`;
    modalBody.innerHTML = `
      <img src="${item.gambar}" alt="${item.judul}" class="w-full h-56 object-cover rounded-2xl mb-4">
      <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${item.konten}</div>
    `;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeArtikelModal = function () {
  const modal = document.getElementById('artikelModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};
