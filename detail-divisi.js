// DATABASE SILABUS LENGKAP (21 DIVISI)
// Pastikan ID di sini SAMA PERSIS dengan ID di file divisi.js

const divisionsData = {
  // 1. Education Technology
  edtech: {
    title: "Divisi Education Technology (Pendidikan)",
    lead: "Program ini dirancang untuk menjembatani dunia pendidikan dan teknologi. Peserta akan mempelajari cara merancang kurikulum digital, pengelolaan LMS, dan pembuatan konten pembelajaran interaktif.",

    // IKON (Ganti link gambar dengan class FontAwesome)
    iconPeluang: "fa-solid fa-laptop-file",
    peluangDesc:
      "Cocok untuk mahasiswa Teknologi Pendidikan, Ilmu Komputer, Psikologi. Karir di startup EdTech atau L&D perusahaan.",
    posisi: [
      "Instructional Designer",
      "LMS Administrator",
      "E-Learning Developer",
    ],

    iconKegiatan: "fa-solid fa-chalkboard-user",
    kegiatan: [
      "Dasar Instructional Design (ADDIE & SAM Model).",
      "Penyusunan Kurikulum & Storyboarding.",
      "Pengembangan Media Pembelajaran Interaktif.",
      "Pengelolaan Learning Management System (LMS).",
      "Gamifikasi dalam Pembelajaran.",
      "Proyek Akhir: Merancang Modul Pembelajaran Online.",
    ],

    iconTarget: "fa-solid fa-certificate",
    target: [
      "Memahami prinsip desain instruksional.",
      "Mampu mengelola LMS.",
      "Memiliki portofolio modul digital.",
    ],
    detail:
      "Fokus utama mencakup teori instruksional, pembuatan storyboard, manajemen LMS, teknik gamifikasi, dan evaluasi efektivitas materi ajar.",
  },

  // 2. Python Data Scientists
  data_scientist: {
    title: "Divisi Python Data Scientists",
    lead: "Mencetak talenta data yang mampu mengolah data mentah menjadi wawasan bisnis menggunakan Python.",
    iconPeluang: "fa-solid fa-magnifying-glass-chart",
    peluangDesc:
      "Untuk mahasiswa Statistika, Matematika, Ilmu Komputer. Karir di Big Data dan riset.",
    posisi: ["Data Scientist", "Data Analyst", "BI Analyst"],
    iconKegiatan: "fa-brands fa-python",
    kegiatan: [
      "Fundamental Python & Pandas.",
      "Data Cleaning & EDA.",
      "Visualisasi Data (Matplotlib/Seaborn).",
      "Machine Learning Dasar.",
      "Proyek Akhir: Analisis Prediktif Bisnis.",
    ],
    iconTarget: "fa-solid fa-brain",
    target: [
      "Menguasai Python data.",
      "Membersihkan dataset.",
      "Membuat model prediksi.",
    ],
    detail:
      "Dibimbing dari nol dalam Python dengan fokus praktik langsung mengolah dataset nyata.",
  },

  // 3. Cybersecurity Pentester
  pentester: {
    title: "Divisi Cybersecurity (Penetration Tester)",
    lead: "Melatih peserta berpikir seperti peretas demi pertahanan (Ethical Hacking).",
    iconPeluang: "fa-solid fa-user-secret",
    peluangDesc:
      "Ideal untuk mahasiswa IT. Karir di konsultan keamanan dan perbankan.",
    posisi: ["Penetration Tester", "Security Analyst"],
    iconKegiatan: "fa-solid fa-bug",
    kegiatan: [
      "Information Gathering (OSINT).",
      "Vulnerability Assessment.",
      "Web App Pentesting.",
      "Exploitation (Metasploit).",
      "Proyek Akhir: Simulasi Pentest.",
    ],
    iconTarget: "fa-solid fa-shield-halved",
    target: [
      "Metodologi pentesting.",
      "Menggunakan Kali Linux.",
      "Menyusun laporan keamanan.",
    ],
    detail:
      "Hands-on labs di lingkungan aman, mengeksploitasi kerentanan seperti SQL Injection.",
  },

  // 4. Project Management
  pm: {
    title: "Divisi Tech Project Management",
    lead: "Menjadi jembatan antara bisnis dan teknis. Mengajarkan metodologi Agile/Scrum.",
    iconPeluang: "fa-solid fa-users-gear",
    peluangDesc: "Cocok untuk SI/Manajemen. Memimpin tim software development.",
    posisi: ["IT Project Manager", "Scrum Master"],
    iconKegiatan: "fa-solid fa-list-check",
    kegiatan: [
      "SDLC & Agile Mindset.",
      "Scrum Framework.",
      "Perencanaan (Jira/Trello).",
      "Manajemen Risiko.",
      "Proyek Akhir: Simulasi Lead Project.",
    ],
    iconTarget: "fa-solid fa-rocket",
    target: [
      "Menguasai Agile/Scrum.",
      "Menggunakan Jira.",
      "Membuat project charter.",
    ],
    detail:
      "Belajar mengelola proyek dari inisiasi hingga closing, simulasi sebagai Scrum Master.",
  },

  // 5. Web Dev & UI/UX
  web_uiux: {
    title: "Divisi Web Dev & UI/UX",
    lead: "Membangun produk digital lengkap — dari riset pengguna, desain tampilan, hingga coding.",
    iconPeluang: "fa-solid fa-laptop-code",
    peluangDesc: "Cocok untuk jurusan teknologi & desain.",
    posisi: ["Web Developer", "UI/UX Designer"],
    iconKegiatan: "fa-brands fa-figma",
    kegiatan: [
      "Design Thinking & Wireframing.",
      "UI Design (Figma).",
      "HTML & CSS Dasar.",
      "Website Builder No-Code.",
      "Proyek Akhir: Website Startup.",
    ],
    iconTarget: "fa-solid fa-layer-group",
    target: [
      "Fundamental UI/UX.",
      "Desain high-fidelity.",
      "Membangun website.",
    ],
    detail: "Dari mindset startup, riset, desain, hingga implementasi website.",
  },

  // 6. HR Analyst
  hr: {
    title: "Divisi Human Resources (SDM) Analyst",
    lead: "Menggabungkan manajemen SDM dengan analisis data.",
    iconPeluang: "fa-solid fa-people-group",
    peluangDesc: "Untuk Psikologi, Manajemen.",
    posisi: ["HR Analyst", "Recruiter"],
    iconKegiatan: "fa-solid fa-magnifying-glass-plus",
    kegiatan: [
      "Talent Acquisition.",
      "KPI/OKR.",
      "HRIS.",
      "Proyek Akhir: Audit HR.",
    ],
    iconTarget: "fa-solid fa-handshake",
    target: ["Fungsi HR modern.", "Strategi rekrutmen.", "People analytics."],
    detail: "Transformasi digital HR dan penggunaan data personalia.",
  },

  // 7. Legal Analyst
  legal: {
    title: "Divisi Legal Analyst (Tech Law)",
    lead: "Fokus pada hukum teknologi: PDP, HKI, dan kontrak startup.",
    iconPeluang: "fa-solid fa-scale-balanced",
    peluangDesc: "Untuk mahasiswa Hukum.",
    posisi: ["Legal Tech Specialist", "Contract Drafter"],
    iconKegiatan: "fa-solid fa-file-contract",
    kegiatan: [
      "UU ITE & PDP.",
      "Legal Drafting.",
      "Hukum Startup.",
      "Proyek Akhir: Dokumen Legal.",
    ],
    iconTarget: "fa-solid fa-gavel",
    target: ["Regulasi digital.", "Menyusun kontrak.", "Perlindungan data."],
    detail: "Mitigasi risiko hukum bagi perusahaan teknologi.",
  },

  // 8. Cyber Investigator
  cyber_investigator: {
    title: "Divisi Cybersecurity Investigator",
    lead: "Menjadi 'detektif digital' untuk forensik dan insiden siber.",
    iconPeluang: "fa-solid fa-fingerprint",
    peluangDesc: "Untuk IT, Kriminologi.",
    posisi: ["Digital Forensic Analyst", "Incident Responder"],
    iconKegiatan: "fa-solid fa-microscope",
    kegiatan: [
      "Bukti Digital.",
      "Akuisisi Data.",
      "Analisis Malware.",
      "Proyek Akhir: Investigasi.",
    ],
    iconTarget: "fa-solid fa-file-shield",
    target: ["Prosedur bukti.", "Analisis forensik.", "Laporan investigasi."],
    detail: "Ketelitian prosedur 'chain of custody' dan rekonstruksi serangan.",
  },

  // 9. Financial Analyst
  fin_analyst: {
    title: "Divisi Financial Market Analyst",
    lead: "Analisis pasar keuangan (saham, forex) teknikal dan fundamental.",
    iconPeluang: "fa-solid fa-chart-line",
    peluangDesc: "Untuk Ekonomi, Keuangan.",
    posisi: ["Investment Analyst", "Trader"],
    iconKegiatan: "fa-solid fa-arrow-trend-up",
    kegiatan: [
      "Makroekonomi.",
      "Analisis Teknikal.",
      "Manajemen Risiko.",
      "Proyek Akhir: Rekomendasi Investasi.",
    ],
    iconTarget: "fa-solid fa-sack-dollar",
    target: ["Membaca grafik.", "Analisis berita.", "Risk/Reward."],
    detail: "Memahami grafik harga (teknikal) dan laporan keuangan.",
  },

  // 10. PR
  pr: {
    title: "Divisi Digital Public Diplomacy",
    lead: "Strategi PR modern, negosiasi, dan komunikasi digital.",
    iconPeluang: "fa-solid fa-bullhorn",
    peluangDesc: "Untuk HI, Komunikasi.",
    posisi: ["PR Specialist", "Digital Diplomat"],
    iconKegiatan: "fa-solid fa-newspaper",
    kegiatan: [
      "Press Release.",
      "Manajemen Krisis.",
      "Copywriting.",
      "Proyek Akhir: Kampanye PR.",
    ],
    iconTarget: "fa-solid fa-globe",
    target: ["Komunikasi publik.", "Rilis media.", "Manajemen reputasi."],
    detail: "Membangun narasi untuk mempengaruhi persepsi publik global.",
  },

  // 11. Social Media
  social_media: {
    title: "Divisi Digital & Social Media Marketing",
    lead: "Strategi pemasaran medsos, brand awareness, dan engagement.",
    iconPeluang: "fa-solid fa-hashtag",
    peluangDesc: "Semua jurusan (Bisnis/DKV).",
    posisi: ["Social Media Specialist", "Content Strategist"],
    iconKegiatan: "fa-solid fa-photo-film",
    kegiatan: [
      "Content Plan.",
      "Copywriting.",
      "Analytics.",
      "Proyek Akhir: Kampanye Medsos.",
    ],
    iconTarget: "fa-solid fa-thumbs-up",
    target: ["Strategi konten.", "Copy menarik.", "Analisa data."],
    detail: "Membuat konten viral yang menjual.",
  },

  // 12. Bisnis Digital
  biz_digital: {
    title: "Divisi Bisnis Digital",
    lead: "Mencetak entrepreneur digital dan strategist bisnis.",
    iconPeluang: "fa-solid fa-briefcase",
    peluangDesc: "Manajemen, Bisnis.",
    posisi: ["BizDev", "Product Manager"],
    iconKegiatan: "fa-solid fa-lightbulb",
    kegiatan: [
      "Business Model Canvas.",
      "Market Research.",
      "Pitch Deck.",
      "Proyek Akhir: Proposal Bisnis.",
    ],
    iconTarget: "fa-solid fa-chess",
    target: ["Model bisnis.", "Monetisasi.", "Presentasi."],
    detail: "Simulasi membangun bisnis startup dari nol.",
  },

  // 13. Brand Design
  brand_design: {
    title: "Divisi Brand Design & Marketing",
    lead: "Membangun Identitas Brand visual yang kuat.",
    iconPeluang: "fa-solid fa-palette",
    peluangDesc: "DKV, Desain.",
    posisi: ["Brand Designer", "Art Director"],
    iconKegiatan: "fa-solid fa-pen-nib",
    kegiatan: [
      "Logo & Identitas.",
      "Brand Guidelines.",
      "Desain Aset.",
      "Proyek Akhir: Identitas Brand.",
    ],
    iconTarget: "fa-solid fa-eye",
    target: ["Logo filosofis.", "Buku brand.", "Software vektor."],
    detail: "Konsep visual yang mengkomunikasikan pesan brand.",
  },

  // 14. Data Analyst
  data_analyst: {
    title: "Divisi Data Analyst",
    lead: "Analisis data historis untuk keputusan bisnis.",
    iconPeluang: "fa-solid fa-chart-pie",
    peluangDesc: "Sistem Informasi, Akuntansi.",
    posisi: ["Data Analyst", "BI Developer"],
    iconKegiatan: "fa-solid fa-table",
    kegiatan: [
      "SQL.",
      "Data Cleaning.",
      "Tableau/Power BI.",
      "Proyek Akhir: Dashboard Bisnis.",
    ],
    iconTarget: "fa-solid fa-magnifying-glass-chart",
    target: ["SQL query.", "Dashboard interaktif.", "Insight bisnis."],
    detail: "Business Intelligence: mengubah angka jadi keputusan.",
  },

  // 15. Machine Learning
  machine_learning: {
    title: "Divisi Python Machine Learning",
    lead: "Membangun sistem cerdas (AI) dan algoritma.",
    iconPeluang: "fa-solid fa-robot",
    peluangDesc: "Informatika, Matematika.",
    posisi: ["ML Engineer", "AI Specialist"],
    iconKegiatan: "fa-solid fa-network-wired",
    kegiatan: [
      "Supervised Learning.",
      "Deep Learning.",
      "Evaluasi Model.",
      "Proyek Akhir: Model AI.",
    ],
    iconTarget: "fa-solid fa-microchip",
    target: ["Algoritma ML.", "Melatih model.", "Deploy model."],
    detail: "Logika teknis di balik kecerdasan buatan.",
  },

  // 16. Ethical Hacker
  eth_hacker: {
    title: "Divisi Ethical Hacker (Cybersecurity)",
    lead: "Metodologi peretasan komprehensif (CEH).",
    iconPeluang: "fa-solid fa-user-ninja",
    peluangDesc: "Keamanan siber menyeluruh.",
    posisi: ["Ethical Hacker", "Red Teamer"],
    iconKegiatan: "fa-solid fa-laptop-medical",
    kegiatan: [
      "System Hacking.",
      "Social Engineering.",
      "Sniffing.",
      "Proyek Akhir: CTF & Audit.",
    ],
    iconTarget: "fa-solid fa-flag",
    target: ["Pola pikir penyerang.", "Audit keamanan.", "Mitigasi."],
    detail: "Simulasi serangan untuk menguji sistem.",
  },

  // 17. Admin Excel
  admin: {
    title: "Divisi Business Admin & Tech Ops",
    lead: "Tulang punggung operasional. Excel tingkat lanjut.",
    iconPeluang: "fa-solid fa-file-excel",
    peluangDesc: "Semua jurusan.",
    posisi: ["Admin Officer", "Data Entry"],
    iconKegiatan: "fa-solid fa-table-list",
    kegiatan: [
      "Excel Lanjut (Pivot/VLOOKUP).",
      "Arsip Digital.",
      "Automasi.",
      "Proyek Akhir: Dashboard Ops.",
    ],
    iconTarget: "fa-solid fa-check-double",
    target: ["Rumus Excel.", "Dashboard monitoring.", "Administrasi rapi."],
    detail: "Efisiensi kerja operasional via teknologi.",
  },

  // 18. Banking Finance
  bank_finance: {
    title: "Divisi Banking & Finance",
    lead: "Menilai kesehatan perusahaan dan valuasi bisnis.",
    iconPeluang: "fa-solid fa-building-columns",
    peluangDesc: "Akuntansi, Keuangan.",
    posisi: ["Credit Analyst", "Valuation Specialist"],
    iconKegiatan: "fa-solid fa-calculator",
    kegiatan: [
      "Laporan Keuangan.",
      "Valuasi DCF.",
      "Analisis Kredit.",
      "Proyek Akhir: Valuasi Perusahaan.",
    ],
    iconTarget: "fa-solid fa-money-bill-trend-up",
    target: ["Membedah laporan.", "Financial model.", "Nilai wajar."],
    detail: "Analisis investasi perbankan.",
  },

  // 19. Asset Mgt
  asset_mgt: {
    title: "Divisi Asset & Liabilities Management",
    lead: "Mengelola risiko neraca bank dan likuiditas.",
    iconPeluang: "fa-solid fa-scale-unbalanced",
    peluangDesc: "Keuangan, Aktuaria.",
    posisi: ["ALM Analyst", "Risk Analyst"],
    iconKegiatan: "fa-solid fa-bank",
    kegiatan: [
      "Gap Analysis.",
      "Risiko Likuiditas.",
      "Stress Testing.",
      "Proyek Akhir: Strategi ALM.",
    ],
    iconTarget: "fa-solid fa-chart-area",
    target: ["Risiko neraca.", "Gap aset-liabilitas.", "Strategi likuiditas."],
    detail: "Manajemen uang dan risiko bank level makro.",
  },

  // 20. Univ Terbuka
  ut: {
    title: "Divisi Universitas Terbuka",
    lead: "Operasional dan layanan mahasiswa pendidikan jarak jauh.",
    iconPeluang: "fa-solid fa-school",
    peluangDesc: "Pendidikan, Komunikasi.",
    posisi: ["Academic Support", "Student Service"],
    iconKegiatan: "fa-solid fa-headset",
    kegiatan: [
      "Layanan Online.",
      "Admin Akademik.",
      "Event Virtual.",
      "Proyek Akhir: Layanan Mahasiswa.",
    ],
    iconTarget: "fa-solid fa-users-viewfinder",
    target: ["Operasional PJJ.", "Handling mahasiswa.", "Event akademik."],
    detail: "Pengelolaan layanan akademik responsif.",
  },

  // 21. General
  general_placement: {
    title: "Program Penempatan Sesuai Jurusan",
    lead: "Untuk jurusan spesifik. Penerapan ilmu kuliah ke industri digital.",
    iconPeluang: "fa-solid fa-user-graduate",
    peluangDesc: "SEMUA Jurusan lainnya.",
    posisi: ["Management Trainee", "Project Officer"],
    iconKegiatan: "fa-solid fa-puzzle-piece",
    kegiatan: [
      "Adaptasi Digital.",
      "Project Management.",
      "Mentoring.",
      "Proyek Akhir: Inovasi Bidang Studi.",
    ],
    iconTarget: "fa-solid fa-star",
    target: ["Teori ke praktik.", "Portofolio relevan.", "Soft skill."],
    detail: "Kurikulum adaptif sesuai background studi.",
  },
};

// DATA DEFAULT (JIKA ID TIDAK DITEMUKAN)
const defaultDivision = {
  title: "Informasi Divisi",
  lead: "Divisi ini menawarkan pengalaman magang yang mendalam di bidangnya. Anda akan belajar dari mentor ahli dan mengerjakan proyek nyata.",
  imgPeluang: "https://placehold.co/600x400/1e1e2f/fff?text=Vinix+7",
  peluangDesc: "Terbuka untuk mahasiswa dari berbagai jurusan yang relevan.",
  posisi: ["Staff Magang", "Project Officer"],
  kegiatan: [
    "Onboarding.",
    "Pelatihan Teknis.",
    "Proyek Nyata.",
    "Mentoring.",
    "Evaluasi.",
  ],
  target: [
    "Peningkatan Hard Skill.",
    "Pengembangan Soft Skill.",
    "Sertifikat.",
  ],
  detail: "Program dirancang sesuai standar industri.",
};

/// --- LOGIKA RENDER ---
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const divisionId = urlParams.get("id");
  const data = divisionsData[divisionId] || defaultDivision;

  document.title = `${data.title} - Vinix 7`;

  const contentContainer = document.getElementById("detail-content");

  // RENDER HTML DENGAN IKON
  contentContainer.innerHTML = `
    <header class="detail-hero">
      <h1>${data.title}</h1>
      <p class="lead">${data.lead}</p>
    </header>

    <section class="detail-card split-card">
      <div class="card-content">
        <h2><i class="fa-solid fa-briefcase"></i> Peluang Kerja</h2>
        <p>${data.peluangDesc}</p>
        <h3>Contoh Posisi:</h3>
        <ul>
          ${data.posisi.map((p) => `<li>${p}</li>`).join("")}
        </ul>
      </div>
      <div class="card-media-icon">
        <i class="${data.iconPeluang}"></i>
      </div>
    </section>

    <section class="detail-card split-card reverse">
      <div class="card-content">
        <h2><i class="fa-solid fa-list-check"></i> Rincian Kegiatan</h2>
        <ol>
          ${data.kegiatan.map((k) => `<li>${k}</li>`).join("")}
        </ol>
      </div>
      <div class="card-media-icon">
        <i class="${data.iconKegiatan}"></i>
      </div>
    </section>

    <section class="detail-card split-card">
      <div class="card-content">
        <h2><i class="fa-solid fa-bullseye"></i> Target Pembelajaran</h2>
        <ul>
          ${data.target.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </div>
      <div class="card-media-icon">
        <i class="${data.iconTarget}"></i>
      </div>
    </section>

    <section class="detail-card">
      <h2><i class="fa-solid fa-circle-info"></i> Detail Pembelajaran</h2>
      <p>${data.detail}</p>
    </section>
  `;

  const stickyBtn = document.querySelector(".sticky-footer .cta-button");
  if (stickyBtn) {
    stickyBtn.href = `pendaftaran.html?divisi=${divisionId}`;
  }
  
  const stickyTitle = document.getElementById("sticky-divisi-name");
  if (stickyTitle) stickyTitle.innerText = data.title;
});