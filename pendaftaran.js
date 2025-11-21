/* =================================================================== */
/* --- FILE: pendaftaran.js (DENGAN FITUR AUTO-SAVE)               --- */
/* =================================================================== */
const divisionNames = {
  edtech: "Education Technology",
  data_scientist: "Python Data Scientists",
  pentester: "Cybersecurity (Penetration Tester)",
  pm: "Tech Project Management",
  web_uiux: "Web Dev & UI/UX",
  hr: "Human Resources (SDM) Analyst",
  legal: "Legal Analyst (Tech Law)",
  cyber_investigator: "Cybersecurity Investigator",
  fin_analyst: "Financial Market Analyst",
  pr: "Digital Public Diplomacy",
  social_media: "Digital & Social Media Marketing",
  biz_digital: "Bisnis Digital",
  brand_design: "Brand Design & Marketing",
  data_analyst: "Data Analyst",
  machine_learning: "Python Machine Learning",
  eth_hacker: "Ethical Hacker (Cybersecurity)",
  admin: "Business Admin & Tech Operation",
  bank_finance: "Banking & Finance",
  asset_mgt: "Asset & Liabilities Management",
  ut: "Divisi Universitas Terbuka",
  general_placement: "Program Penempatan Sesuai Jurusan",
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Load Data yang Tersimpan (Auto-Fill)
  loadFormData();
  prefillFromURL();

  // 2. Tambahkan Event Listener untuk Auto-Save
  // Setiap kali user mengetik atau memilih, data langsung disimpan
  const form = document.getElementById("registration-form");
  if (form) {
    form.addEventListener("input", saveFormData);
    form.addEventListener("change", saveFormData);
  }

  // 3. Efek Bintang Background
  const space = document.getElementById("space");
  if (space) {
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDuration = Math.random() * 3 + 2 + "s";
      star.style.animationDelay = Math.random() * 3 + "s";
      space.appendChild(star);
    }
  }

  // 4. Proteksi Input Angka (Semester)
  const numberInput = document.getElementById("input-semester");
  if (numberInput) {
    numberInput.addEventListener("keydown", (e) => {
      const invalidChars = ["e", "E", "+", "-", "."];
      if (invalidChars.includes(e.key)) e.preventDefault();
    });
    numberInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
  }
});
/* ============================================================ */
/* ==   LOGIKA KHUSUS: RADIO BUTTON BISA DI-UNCHECK (TOGGLE) == */
/* ============================================================ */

// 1. Ambil semua radio button cicilan
const cicilanRadios = document.querySelectorAll('input[name="cicilan_ke"]');
let lastCicilanChecked = null; // Variabel untuk menyimpan status terakhir

cicilanRadios.forEach((radio) => {
  radio.addEventListener("click", function (e) {
    // Cek apakah tombol ini adalah yang terakhir kali diklik/aktif
    if (lastCicilanChecked === this) {
      // JIKA YA: Matikan (Uncheck)
      this.checked = false;
      lastCicilanChecked = null;
      e.target.blur(); // Hilangkan fokus
    } else {
      // JIKA TIDAK: Aktifkan dan simpan statusnya
      lastCicilanChecked = this;
    }
  });
});

// 2. Logika Tambahan: Jika User pilih "Lunas", reset pilihan cicilan
const skemaRadios = document.querySelectorAll('input[name="skema_bayar"]');

skemaRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.value === "lunas") {
      // Reset semua pilihan cicilan
      cicilanRadios.forEach((c) => (c.checked = false));
      lastCicilanChecked = null; // Reset status memori
    }
  });
});

/* =============================================================== */
/* --- FUNGSI AUTO-SAVE & LOAD (LOCAL STORAGE)                 --- */
/* =============================================================== */

const STORAGE_KEY = "vinix_registration_data";

function saveFormData() {
  const formData = {};

  // 1. Simpan Input Text, Email, Tel, Number, Textarea
  const inputs = document.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='tel'], input[type='number'], textarea"
  );
  inputs.forEach((input) => {
    // Gunakan ID sebagai key jika ada, atau placeholder sebagai fallback unik
    const key = input.id || input.getAttribute("placeholder");
    if (key) formData[key] = input.value;
  });

  // 2. Simpan Radio Buttons
  // Kita cari semua grup radio button berdasarkan 'name'
  const radioNames = [
    "konversi_sks",
    "izin_kaprodi",
    "jenis_izin",
    "hubungi_kaprodi",
    "divisi",
    "program_type",
    "durasi",
    "paket_fasilitas",
    "skema_bayar",
    "cicilan_ke",
    "payment_method",
  ];

  radioNames.forEach((name) => {
    const checkedEl = document.querySelector(`input[name="${name}"]:checked`);
    if (checkedEl) {
      formData[`radio_${name}`] = checkedEl.value;
    }
  });

  // Simpan ke Local Storage browser
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return; // Tidak ada data tersimpan

  const formData = JSON.parse(savedData);

  // 1. Load Input Text, Email, dll
  const inputs = document.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='tel'], input[type='number'], textarea"
  );
  inputs.forEach((input) => {
    const key = input.id || input.getAttribute("placeholder");
    if (key && formData[key] !== undefined) {
      input.value = formData[key];
    }
  });

  // 2. Load Radio Buttons
  Object.keys(formData).forEach((key) => {
    if (key.startsWith("radio_")) {
      const name = key.replace("radio_", "");
      const value = formData[key];
      const radioBtn = document.querySelector(
        `input[name="${name}"][value="${value}"]`
      );
      if (radioBtn) {
        radioBtn.checked = true;
      }
    }
  });

  // Catatan: File upload (input type="file") TIDAK BISA di-restore karena alasan keamanan browser.
}

function clearFormData() {
  localStorage.removeItem(STORAGE_KEY);
}

/* =============================================================== */
/* --- FUNGSI NAVIGASI & LOGIKA LAINNYA (TETAP SAMA)           --- */
/* =============================================================== */

// ... (Bagian ini tidak berubah dari sebelumnya, tapi saya tulis ulang agar file Anda utuh)

// Navigasi Step
function nextStep(targetStep) {
  // Tentukan langkah saat ini (Langkah sebelum target)
  const currentStep = targetStep - 1;

  // 1. JALANKAN VALIDASI DULU!
  // Jika validasi gagal (return false), hentikan proses (jangan pindah halaman)
  if (!validateStep(currentStep)) {
    return;
  }

  // 2. Jika Lolos Validasi, Lanjut Pindah Halaman
  document
    .querySelectorAll(".form-step")
    .forEach((step) => step.classList.add("hidden"));

  const targetEl = document.getElementById(`step-${targetStep}`);
  if (targetEl) targetEl.classList.remove("hidden");

  updateProgress(targetStep);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* --- FUNGSI VALIDASI STEP (UPGRADE DENGAN POPUP) --- */
function validateStep(stepNumber) {
  let isValid = true;
  let errorLabels = []; // Array untuk menyimpan nama kolom yang error

  const stepContainer = document.getElementById(`step-${stepNumber}`);

  // Reset error lama
  stepContainer
    .querySelectorAll(".input-error, .radio-error, .shake")
    .forEach((el) => {
      el.classList.remove("input-error", "radio-error", "shake");
    });

  // Helper untuk mencatat error
  const recordError = (element, labelSelector = "label") => {
    // Cari teks label terdekat untuk pesan error
    let labelText = "Kolom Wajib Diisi";
    const parentGroup =
      element.closest(".form-group") || element.closest(".form-section");

    if (parentGroup) {
      const labelEl = parentGroup.querySelector(labelSelector);
      if (labelEl) labelText = labelEl.innerText.replace("*", "").trim();
      // Khusus untuk section judul (seperti Pilihan Divisi)
      else if (parentGroup.querySelector("h3"))
        labelText = parentGroup.querySelector("h3").innerText;
    }

    if (!errorLabels.includes(labelText)) {
      errorLabels.push(labelText);
    }
  };

  // 1. VALIDASI INPUT BIASA
  const inputs = stepContainer.querySelectorAll(
    'input[type="text"][required], input[type="email"][required], input[type="tel"][required], input[type="number"][required], textarea[required]'
  );
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("input-error", "shake");
      recordError(input);
    }
  });

  // 2. VALIDASI RADIO BUTTONS
  const radioInputs = stepContainer.querySelectorAll('input[type="radio"]');
  const radioNames = new Set();
  radioInputs.forEach((radio) => radioNames.add(radio.name));

  radioNames.forEach((name) => {
    const isChecked = stepContainer.querySelector(
      `input[name="${name}"]:checked`
    );

    // Pengecualian: Cicilan boleh kosong jika pilih Lunas
    if (name === "cicilan_ke") {
      const skema = document.querySelector('input[name="skema_bayar"]:checked');
      if (skema && skema.value === "lunas") return;
    }

    if (!isChecked) {
      isValid = false;
      const radios = stepContainer.querySelectorAll(`input[name="${name}"]`);
      if (radios.length > 0) {
        // Tandai visual error
        radios.forEach((radio) => {
          const parentCard =
            radio.closest(".radio-card") ||
            radio.closest(".division-card") ||
            radio.closest(".program-card") ||
            radio.closest(".package-card") ||
            radio.closest(".method-card");
          if (parentCard) parentCard.classList.add("radio-error", "shake");
        });

        // Catat nama field error
        // Cari label utama grup (biasanya di atas radio group)
        const firstRadio = radios[0];
        // Cek h3 dulu (untuk Divisi/Program yang judulnya h3)
        const sectionTitle = firstRadio
          .closest(".form-section")
          .querySelector("h3");
        const groupLabel = firstRadio
          .closest(".form-group")
          ?.querySelector("label");

        if (groupLabel) {
          if (!errorLabels.includes(groupLabel.innerText))
            errorLabels.push(groupLabel.innerText);
        } else if (sectionTitle) {
          // Bersihkan ikon fontawesome dari teks
          const cleanTitle = sectionTitle.innerText.trim();
          if (!errorLabels.includes(cleanTitle)) errorLabels.push(cleanTitle);
        }
      }
    }
  });

  // 3. VALIDASI FILE
  const fileInputs = stepContainer.querySelectorAll(
    'input[type="file"][required]'
  );
  fileInputs.forEach((fileInput) => {
    if (fileInput.files.length === 0) {
      isValid = false;
      const box = fileInput.closest(".file-upload-box");
      if (box) box.classList.add("input-error", "shake");
      recordError(fileInput);
    }
  });

  // 4. VALIDASI CHECKBOX
  const checkboxes = stepContainer.querySelectorAll(
    'input[type="checkbox"][required]'
  );
  checkboxes.forEach((cb) => {
    if (!cb.checked) {
      isValid = false;
      const label = cb.nextElementSibling;
      if (label) {
        label.style.color = "#ff5252";
        label.classList.add("shake");
        setTimeout(() => (label.style.color = ""), 2000);
        errorLabels.push("Persetujuan Syarat & Ketentuan");
      }
    }
  });

  // --- JIKA TIDAK VALID, TAMPILKAN POPUP ---
  if (!isValid) {
    showErrorModal(errorLabels);
  }

  return isValid;
}

/* --- HELPER MODAL ERROR --- */
function showErrorModal(errors) {
  const list = document.getElementById("error-list");
  list.innerHTML = ""; // Bersihkan list lama

  errors.forEach((err) => {
    const li = document.createElement("li");
    li.innerText = err;
    list.appendChild(li);
  });

  const modal = document.getElementById("error-modal");
  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeErrorModal() {
  const modal = document.getElementById("error-modal");
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

function prevStep(targetStep) {
  document
    .querySelectorAll(".form-step")
    .forEach((step) => step.classList.add("hidden"));

  const targetEl = document.getElementById(`step-${targetStep}`);
  if (targetEl) targetEl.classList.remove("hidden");

  updateProgress(targetStep);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* --- FUNGSI UPDATE PROGRESS (SEGMENTED) --- */
function updateProgress(stepNumber) {
  const headerTitle = document.querySelector(".form-header p");

  // 1. Update Teks Judul
  let stepTitle = "";
  switch (stepNumber) {
    case 1:
      stepTitle = "Data Diri & Pilihan Program";
      break;
    case 2:
      stepTitle = "Motivasi & Durasi";
      break;
    case 3:
      stepTitle = "Tugas Media Sosial";
      break;
    case 4:
      stepTitle = "Fasilitas & Pembayaran";
      break;
    case 5:
      stepTitle = "Konfirmasi Akhir";
      break;
  }
  if (headerTitle)
    headerTitle.innerText = `Langkah ${stepNumber} dari 5: ${stepTitle}`;

  // 2. Update Bar (Segmented Logic)
  // Logic: Bar terisi JIKA step tersebut SUDAH LEWAT.
  // Step 1: 0 bar isi.
  // Step 2: Bar 1 isi.
  // Step 3: Bar 1, 2 isi.
  // Dst.

  for (let i = 1; i <= 6; i++) {
    const bar = document.getElementById(`prog-${i}`);
    if (bar) {
      // Reset class dulu
      bar.className = "progress-step";

      if (i < stepNumber) {
        // Jika index batang lebih kecil dari step sekarang -> ISI (Filled)
        bar.classList.add("filled");
      } else if (i === stepNumber) {
        // Jika index batang sama dengan step sekarang -> AKTIF (Sedang berlangsung)
        // (Opsional: kalau mau step 1 benar-benar kosong, hapus bagian 'active' ini)
        // bar.classList.add("active");
      }
    }
  }

  // Khusus Step 5 (Selesai): Semua bar harus penuh
  // (Karna step 5 adalah 'finish', logikanya semua tahap sebelumnya sudah beres)
  if (stepNumber === 5) {
    // Opsional: Jika ingin di layar akhir semua bar menyala hijau
    // document.querySelectorAll('.progress-step').forEach(b => {
    //    b.classList.add('filled');
    //    b.style.background = "#4ade80"; // Hijau sukses
    // });
    // TAPI, sesuai logika "step 1 kosong di awal",
    // maka di step 5, bar 1-4 harusnya filled.
  }
}

// Fitur Step 3 (Copy & Preview)
function copyBroadcast(labelElement) {
  const textArea = document.getElementById("wa-text");
  const labelSpan = document.getElementById("label-text");
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textArea.value).then(() => {
    const originalContent =
      '<i class="fa-regular fa-copy"></i> Klik di sini untuk Salin Teks Broadcast';
    labelSpan.innerHTML =
      '<i class="fa-solid fa-check"></i> Teks Berhasil Disalin!';
    labelElement.style.color = "#4ade80";
    labelElement.style.borderColor = "#4ade80";
    setTimeout(() => {
      labelSpan.innerHTML = originalContent;
      labelElement.style.color = "";
      labelElement.style.borderColor = "";
    }, 2000);
  });
}

function previewFileGeneric(input, previewId) {
  const previewContainer = document.getElementById(previewId);
  if (input.files && input.files[0]) {
    const fileName = input.files[0].name;
    previewContainer.innerHTML = `
      <i class="fa-solid fa-circle-check" style="color: #4ade80; font-size: 24px; margin-bottom: 5px;"></i>
      <span style="color: #4ade80; font-weight: bold;">File Dipilih:</span>
      <span style="font-size: 12px; word-break: break-all;">${fileName}</span>
    `;
  }
}

// Fitur Step 4 (Promo & Preview Bukti Bayar)
function cekPromo() {
  const code = document.getElementById("promo-code").value.toUpperCase();
  if (code === "") {
    alert("Masukkan kode promo terlebih dahulu.");
    return;
  }
  alert(`Kode ${code} berhasil diterapkan! (Simulasi)`);
}

function previewFile() {
  const input = document.getElementById("bukti-bayar");
  const previewContainer = document.getElementById("upload-preview-content");
  if (input.files && input.files[0]) {
    const fileName = input.files[0].name;
    previewContainer.innerHTML = `
      <i class="fa-solid fa-check-circle" style="color: #4ade80;"></i>
      <span style="color: #4ade80; font-weight: bold;">File Terpilih:</span>
      <span>${fileName}</span>
      <small>Siap untuk diupload</small>
    `;
  }
}

// Fitur Step 5 (Review Data)
function populateFinalReview() {
  const getValue = (selector) => {
    const el = document.querySelector(selector);
    return el ? el.value : "-";
  };

  // Data Diri
  document.getElementById("rev-nama").innerText = getValue(
    'input[placeholder="Masukkan nama lengkap"]'
  );

  // Divisi
  const divId = document.getElementById("selected-divisi-input").value;

  if (divId && divisionNames[divId]) {
    // Terjemahkan ID (misal 'web_uiux') jadi Nama ('Web Dev & UI/UX')
    document.getElementById("rev-divisi").innerText = divisionNames[divId];
  } else {
    document.getElementById("rev-divisi").innerText =
      "- (Error: Divisi Tidak Valid)";
  }

  // Paket & Harga
  const paketEl = document.querySelector(
    'input[name="paket_fasilitas"]:checked'
  );
  let hargaText = "-";
  if (paketEl) {
    const card = paketEl.closest(".package-card");
    document.getElementById("rev-paket").innerText =
      card.querySelector(".pkg-name").innerText;
    hargaText = card.querySelector(".pkg-price").innerText;
  } else {
    document.getElementById("rev-paket").innerText = "-";
  }

  // Skema
  const skemaEl = document.querySelector('input[name="skema_bayar"]:checked');
  const skemaVal = skemaEl ? skemaEl.value : "";
  let skemaText = "-";
  if (skemaVal === "lunas") skemaText = "Lunas (Full)";
  else if (skemaVal === "cicilan") {
    const cicilanKe = document.querySelector(
      'input[name="cicilan_ke"]:checked'
    );
    const ke = cicilanKe ? cicilanKe.value : "?";
    skemaText = `Cicilan 3x (Pembayaran Ke-${ke})`;
  }

  document.getElementById("rev-skema").innerText = skemaText;
  document.getElementById("rev-total").innerText = hargaText;
}

// Handle Submit Form
const form = document.getElementById("registration-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const payBtn = document.querySelector(".pay-btn-final");

    payBtn.innerHTML =
      '<i class="fa-solid fa-circle-notch fa-spin"></i> Memproses...';
    payBtn.style.opacity = "0.7";

    setTimeout(() => {
      document.getElementById("review-ui").classList.add("hidden"); // Hide Review
      document.getElementById("success-ui").classList.remove("hidden"); // Show Success

      window.scrollTo({ top: 0, behavior: "smooth" });
      const progBar = document.querySelector(".segmented-progress");
      if (progBar) progBar.style.display = "none";

      // Sembunyikan Teks "Langkah 5 dari 5"
      const stepText = document.querySelector(".form-header p");
      if (stepText) stepText.style.display = "none";

      // Ubah Judul Utama (Opsional, agar lebih relevan)
      const headerTitle = document.querySelector(".form-header h1");
      if (headerTitle) headerTitle.innerText = "Selamat Bergabung!";
      // PENTING: HAPUS DATA DARI LOCAL STORAGE SETELAH SUKSES
      clearFormData();
    }, 2000);
  });
}

/* --- FUNGSI AUTO-SELECT DARI URL --- */
/* --- FUNGSI AUTO-SELECT DARI URL (UPDATE) --- */
function prefillFromURL() {
  // 1. Ambil parameter '?divisi=...' dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const divisiParam = urlParams.get("divisi");

  // 2. Elemen target di HTML
  const displayEl = document.getElementById("display-divisi-name");
  const inputEl = document.getElementById("selected-divisi-input");

  if (divisiParam && divisionNames[divisiParam]) {
    // JIKA ADA ID DI URL: Tampilkan Namanya
    const realName = divisionNames[divisiParam];
    displayEl.innerText = realName;
    inputEl.value = divisiParam; // Simpan ID di hidden input
  } else {
    // JIKA TIDAK ADA (User buka langsung): Arahkan pilih dulu atau default
    displayEl.innerText = "Belum Memilih Divisi";
    displayEl.style.color = "#ff5252"; // Merah
    // Opsional: Redirect ke halaman divisi jika wajib
    // window.location.href = "divisi.html";
  }
}

const radioInputs = stepContainer.querySelectorAll('input[type="radio"]');
const radioNames = new Set();
radioInputs.forEach((radio) => radioNames.add(radio.name));

radioNames.forEach((name) => {
  // Cek apakah ada salah satu yang dicentang
  const isChecked = stepContainer.querySelector(
    `input[name="${name}"]:checked`
  );

  // Pengecualian Logika Khusus (Optional Fields)
  if (name === "cicilan_ke") {
    const skema = document.querySelector('input[name="skema_bayar"]:checked');
    if (skema && skema.value === "lunas") return; // Skip validasi cicilan jika lunas
  }

  if (!isChecked) {
    isValid = false;
    // Cari semua elemen pembungkus (label/card) untuk diberi warna merah
    const radios = stepContainer.querySelectorAll(`input[name="${name}"]`);
    radios.forEach((radio) => {
      // Tambahkan class error ke parent elemen visualnya (label atau card)
      const parentCard =
        radio.closest(".radio-card") ||
        radio.closest(".division-card") ||
        radio.closest(".program-card") ||
        radio.closest(".package-card") ||
        radio.closest(".method-card");
      if (parentCard) {
        parentCard.classList.add("radio-error", "shake");
      }
    });
  }
});
