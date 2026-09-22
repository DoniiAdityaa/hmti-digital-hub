/* ==========================================================================
   DATA KEGIATAN & ARTIKEL HMTI (DATA STORE)
   ========================================================================== */

// Data Kegiatan HMTI UDINUS
const listKegiatan = [
  {
    id: 1,
    nama: "Web Development Bootcamp 2026",
    kategori: "workshop",
    tanggal: "15 Oktober 2026",
    waktu: "09.00 - 15.00 WIB",
    lokasi: "Lab Komputer Gedung D.2.A UDINUS",
    penyelenggara: "Divisi IPTEK HMTI",
    status: "Open Registration",
    kuota: "50 Peserta",
    deskripsi: "Pelatihan intensif pengembangan website modern menggunakan HTML, Tailwind CSS, dan JavaScript dasar hingga membuat portofolio siap deploy.",
    gambar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    nama: "Seminar Nasional TechTrend: AI & Cyber Security",
    kategori: "seminar",
    tanggal: "28 November 2026",
    waktu: "08.00 - 12.30 WIB",
    lokasi: "Aula Gedung E Lantai 3 UDINUS & Zoom",
    penyelenggara: "Divisi Humas & IPTEK HMTI",
    status: "Open Registration",
    kuota: "200 Peserta",
    deskripsi: "Menghadirkan praktisi industri cybersecurity dan AI engineer untuk membahas masa depan teknologi dan tantangan karir mahasiswa IT.",
    gambar: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    nama: "Makrab & Bonding Informatika 2026",
    kategori: "sosial",
    tanggal: "12 - 13 Desember 2026",
    waktu: "2 Hari 1 Malam",
    lokasi: "Villa Bandungan, Kabupaten Semarang",
    penyelenggara: "Divisi PSDM HMTI",
    status: "Coming Soon",
    kuota: "120 Peserta",
    deskripsi: "Malam keakraban antar angkatan mahasiswa Teknik Informatika untuk mempererat persaudaraan, game seru, dan sharing session dengan alumni.",
    gambar: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    nama: "Competitive Programming HackFest",
    kategori: "workshop",
    tanggal: "20 Januari 2027",
    waktu: "08.00 - 17.00 WIB",
    lokasi: "Lab Algoritma Gedung D UDINUS",
    penyelenggara: "Divisi IPTEK & Litbang HMTI",
    status: "Coming Soon",
    kuota: "40 Tim",
    deskripsi: "Kompetisi pemecahan masalah algoritma dan struktur data antar mahasiswa Informatika dengan total hadiah jutaan rupiah.",
    gambar: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  }
];

// Data Artikel / Informasi IT HMTI
const listArtikel = [
  {
    id: 1,
    judul: "Roadmap Belajar Web Development untuk Pemula 2026",
    kategori: "Edukasi IT",
    penulis: "Divisi IPTEK HMTI",
    tanggal: "18 September 2026",
    waktuBaca: "5 menit baca",
    ringkasan: "Pelajari roadmap belajar HTML, CSS semantik, JavaScript ES6+, dan pemanfaatan Tailwind CSS untuk membangun portofolio web pertamamu.",
    konten: `
      <p class="mb-3">Dunia pengembangan web terus berkembang pesat. Sebagai mahasiswa Teknik Informatika UDINUS, menguasai fondasi pengembangan front-end adalah langkah awal yang sangat krusial.</p>
      <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">1. Fondasi HTML5 Semantik</h4>
      <p class="mb-3">Manfaatkan tag semantik seperti &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, dan &lt;article&gt; untuk aksesibilitas dan SEO yang baik.</p>
      <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">2. Tailwind CSS Utility Classes</h4>
      <p class="mb-3">Tailwind CSS memungkinkan kita membangun tampilan yang kustom dan responsif dengan sangat cepat langsung pada class elemen HTML.</p>
      <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">3. Interaktivitas JavaScript</h4>
      <p>Pahami manipulasi DOM, Event Handling, dan Array Methods (seperti filter & map) untuk membuat web interaktif.</p>
    `,
    gambar: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    judul: "Mengapa Git & GitHub Wajib Dikuasai Mahasiswa IT?",
    kategori: "Karir & Tooling",
    penulis: "Redaksi HMTI Hub",
    tanggal: "10 September 2026",
    waktuBaca: "4 menit baca",
    ringkasan: "Git bukan sekadar tempat menyimpan tugas. Git adalah fondasi kolaborasi tim pengembangan software profesional di industri global.",
    konten: `
      <p class="mb-3">Banyak mahasiswa baru yang mengira Git hanyalah tempat membackup file. Padahal, Git adalah Version Control System yang mencatat setiap riwayat perubahan kode secara terstruktur.</p>
      <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">Manfaat Utama Git:</h4>
      <ul class="list-disc pl-5 mb-3 space-y-1">
        <li><strong>Melacak Riwayat:</strong> Kamu bisa kembali ke versi kode sebelumnya jika terjadi error.</li>
        <li><strong>Fitur Branching:</strong> Memungkinkan fitur baru dibuat tanpa mengganggu kode utama.</li>
        <li><strong>Portofolio GitHub:</strong> Recruiter industri IT melihat aktivitas commit GitHub sebagai bukti nyata keahlianmu.</li>
      </ul>
    `,
    gambar: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    judul: "Tips Menyeimbangkan Akademik dan Aktivitas Organisasi HMTI",
    kategori: "Tips Kampus",
    penulis: "Divisi PSDM HMTI",
    tanggal: "02 September 2026",
    waktuBaca: "6 menit baca",
    ringkasan: "Aktif di HMTI melatih soft-skill kepemimpinan dan relasi, namun pastikan IPK dan tugas kuliah utama tetap terjaga dengan manajemen waktu yang tepat.",
    konten: `
      <p class="mb-3">Menjadi pengurus atau anggota aktif HMTI memberikan banyak pengalaman berharga, mulai dari manajemen event, kerja sama tim, hingga networking dengan alumni IT.</p>
      <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">3 Kunci Manajemen Waktu:</h4>
      <ol class="list-decimal pl-5 space-y-1">
        <li>Gunakan Google Calendar / Notion untuk menyusun jadwal tugas dan rapat.</li>
        <li>Terapkan skala prioritas Eisenhower Matrix (Penting & Mendesak).</li>
        <li>Manfaatkan kelompok belajar sesama mahasiswa Informatika di HMTI.</li>
      </ol>
    `,
    gambar: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  }
];
