/* ==========================================================================
   HMTI DIGITAL HUB - FORM VALIDATION SCRIPT
   Logic: Client-side Input Validation & Feedback Toast Modal
   ========================================================================== */

function initFormApp() {
  const oprecForm = document.getElementById('oprecForm');
  const toastSuccess = document.getElementById('toastSuccess');
  const toastMessage = document.getElementById('toastMessage');

  if (!oprecForm) return;

  oprecForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const namaInput = document.getElementById('nama');
    const nimInput = document.getElementById('nim');
    const emailInput = document.getElementById('email');
    const waInput = document.getElementById('wa');
    const acaraSelect = document.getElementById('acara');

    const namaError = document.getElementById('namaError');
    const nimError = document.getElementById('nimError');
    const emailError = document.getElementById('emailError');
    const waError = document.getElementById('waError');

    let isValid = true;

    [namaInput, nimInput, emailInput, waInput].forEach(el => {
      if (el) el.classList.remove('border-rose-500');
    });
    [namaError, nimError, emailError, waError].forEach(el => {
      if (el) el.classList.add('hidden');
    });

    if (!namaInput.value.trim() || namaInput.value.trim().length < 3) {
      namaError.textContent = 'Nama lengkap minimal 3 karakter.';
      namaError.classList.remove('hidden');
      namaInput.classList.add('border-rose-500');
      isValid = false;
    }

    const nimVal = nimInput.value.trim();
    if (!nimVal || nimVal.length < 8) {
      nimError.textContent = 'NIM tidak valid. Masukkan NIM UDINUS lengkap (contoh: A11.2024.15000).';
      nimError.classList.remove('hidden');
      nimInput.classList.add('border-rose-500');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Alamat email tidak valid.';
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-rose-500');
      isValid = false;
    }

    const waVal = waInput.value.trim();
    if (!waVal || waVal.length < 10 || !/^\+?[0-9\s-]+$/.test(waVal)) {
      waError.textContent = 'Nomor WhatsApp tidak valid (minimal 10 digit).';
      waError.classList.remove('hidden');
      waInput.classList.add('border-rose-500');
      isValid = false;
    }

    if (isValid) {
      const acaraNama = acaraSelect ? acaraSelect.options[acaraSelect.selectedIndex].text : 'Kegiatan HMTI';
      
      if (toastMessage) {
        toastMessage.innerHTML = `Selamat <strong>${namaInput.value}</strong>! Pendaftaran kamu untuk <strong>${acaraNama}</strong> berhasil dikirim. Panitia akan menghubungimu via WhatsApp.`;
      }

      if (toastSuccess) {
        toastSuccess.classList.remove('hidden');
        toastSuccess.classList.add('flex');
        toastSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      oprecForm.reset();
    }
  });
}

document.addEventListener('componentsLoaded', initFormApp);
document.addEventListener('DOMContentLoaded', initFormApp);

window.closeToast = function() {
  const toastSuccess = document.getElementById('toastSuccess');
  if (toastSuccess) {
    toastSuccess.classList.add('hidden');
    toastSuccess.classList.remove('flex');
  }
};
