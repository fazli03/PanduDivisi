// Layar
const quizStartScreen = document.getElementById("quiz-start-screen");
const quizIntroBasicScreen = document.getElementById("quiz-intro-basic");
const quizActiveScreen = document.getElementById("quiz-active-screen");
const quizIntroSpecificScreen = document.getElementById("quiz-intro-specific");
const quizResultsScreen = document.getElementById("quiz-results-screen");

// Tombol
const startQuizBtn = document.getElementById("start-quiz-btn");
const continueToBasicBtn = document.getElementById("continue-to-basic-btn");
const continueToSpecificBtn = document.getElementById(
  "continue-to-specific-btn"
);

// Elemen Aktif
const questionCountText = document.getElementById("question-count");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const answerOptionsContainer = document.getElementById(
  "answer-options-container"
);
const quizTimer = document.getElementById("quiz-timer");

// Elemen Hasil
const secondaryResultsList = document.getElementById("secondary-results-list");

// Variabel Status
let currentCategory = "default";
let quizData = [];
let scores = {};
let basicScores = {}; // Menyimpan skor tahap 1
let resultData = {};

let currentQuestionIndex = 0;
let timerInterval;
let timeRemaining = 300;
const totalTime = 300;

const timerColorDefault = "#667eea";
const timerColorLow = "#FF5252";

/* =================================================================== */
/* --- (BAGIAN 2): DATA MASTER --- */
/* =================================================================== */

const categoryMap = {
  general: {
    title: "Pandu Saya! (Tes Minat)",
    description: "Jawab kuis ini untuk mendapatkan rekomendasi kategori.",
  },
  software: {
    title: "Software & Development",
    description: "Jawab pertanyaan seputar programming, UI/UX, dan EdTech.",
  },
  data: {
    title: "Data & AI",
    description: "Jawab pertanyaan seputar analisis data, Python, dan ML.",
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Jawab pertanyaan seputar ethical hacking dan forensik.",
  },
  marketing: {
    title: "Marketing & Komunikasi",
    description: "Jawab pertanyaan seputar branding, sosmed, dan PR.",
  },
  finance: {
    title: "Finance & Perbankan",
    description: "Jawab pertanyaan seputar analisis keuangan dan pasar modal.",
  },
  business: {
    title: "Bisnis & Operasional",
    description: "Jawab pertanyaan seputar manajemen proyek dan strategi.",
  },
  default: {
    title: "Kategori Quiz",
    description: "Jawab pertanyaan untuk menemukan divisi yang cocok.",
  },
};

const masterResultData = {
  web_uiux: {
    name: "Web Dev & UIUX",
    description: "Anda seimbang antara logika coding dan empati pengguna.",
  },
  ed_tech: {
    name: "Education Technology",
    description: "Anda memiliki passion di teknologi sekaligus pendidikan.",
  },
  data_scientist: {
    name: "Python Data Scientists",
    description: "Anda seorang problem solver analitis dengan model statistik.",
  },
  data_analyst: {
    name: "Data Analyst",
    description: "Anda rapi, detail, dan jago visualisasi data.",
  },
  machine_learning: {
    name: "Python Machine Learning",
    description: "Anda adalah arsitek AI yang membangun algoritma cerdas.",
  },
  pentester: {
    name: "Cybersecurity (Penetration Tester)",
    description: "Anda adalah detektif ofensif yang mencari celah keamanan.",
  },
  investigator: {
    name: "Cybersecurity Investigator",
    description: "Anda adalah forensik defensif yang melacak jejak digital.",
  },
  eth_hacker: {
    name: "Ethical Hacker",
    description:
      "Anda memiliki mindset kreatif untuk memperkuat keamanan sistem.",
  },
  pr_diplomacy: {
    name: "Digital Public Diplomacy",
    description: "Anda ahli komunikasi dan membangun citra positif.",
  },
  social_media: {
    name: "Digital & Social Media Marketing",
    description: "Anda paham tren dan jago membangun komunitas online.",
  },
  brand_design: {
    name: "Brand Design & Marketing",
    description: "Anda menentukan identitas visual dan rasa dari sebuah brand.",
  },
  fin_analyst: {
    name: "Financial Market Analyst",
    description: "Anda menganalisis tren pasar untuk keputusan investasi.",
  },
  bank_finance: {
    name: "Banking & Finance",
    description: "Anda ahli membedah laporan keuangan untuk valuasi bisnis.",
  },
  asset_mgt: {
    name: "Asset & Liabilities Management",
    description: "Anda manajer risiko yang menyeimbangkan aset bank.",
  },
  pm: {
    name: "Tech Project Management",
    description: "Anda kapten tim yang memastikan proyek tepat waktu.",
  },
  hr: {
    name: "Human Resources Analyst",
    description: "Anda fokus pada pengembangan dan kesejahteraan karyawan.",
  },
  legal: {
    name: "Legal Analyst (Tech Law)",
    description: "Anda perisai perusahaan dalam aspek hukum dan regulasi.",
  },
  biz_digital: {
    name: "Bisnis Digital",
    description: "Anda ahli strategi pertumbuhan dan model bisnis baru.",
  },
  admin: {
    name: "Business Admin & Tech Ops",
    description: "Anda tulang punggung operasional yang sangat teliti.",
  },
};

const masterQuizData = {
  // --- Kategori general (Pandu Saya!) ---
  // Poinnya mengarah ke NAMA KATEGORI (software, data, dll)
  general: [
    // --- 5 Pertanyaan Dasar (Minat) ---
    {
      question: "Aktivitas apa yang paling Anda nikmati?",
      answers: [
        {
          text: "Mengatur dan menganalisis data dalam spreadsheet.",
          points: { data: 2, finance: 2 },
        },
        {
          text: "Memecahkan teka-teki logika atau menulis kode.",
          points: { software: 2, cybersecurity: 1 },
        },
        {
          text: "Mendesain poster atau layout yang indah.",
          points: { marketing: 2 },
        },
        {
          text: "Berbicara, bernegosiasi, atau memimpin tim.",
          points: { business: 2, marketing: 1 },
        },
      ],
    },
    {
      question: "Anda lebih suka bekerja dengan...",
      answers: [
        {
          text: "Angka dan Laporan.",
          points: { data: 2, finance: 2, business: 1 },
        },
        {
          text: "Sistem, Kode, dan Komputer.",
          points: { software: 2, cybersecurity: 2 },
        },
        {
          text: "Orang dan Ide.",
          points: { business: 2, marketing: 2, software: 1 },
        },
      ],
    },
    {
      question: "Tool apa yang paling menarik bagi Anda?",
      answers: [
        { text: "Code Editor (misal: VS Code)", points: { software: 3 } },
        {
          text: "Spreadsheet (misal: Excel, Google Sheets)",
          points: { data: 2, finance: 1, business: 1 },
        },
        {
          text: "Desain (misal: Figma, Canva)",
          points: { software: 1, marketing: 2 },
        },
        { text: "Terminal / Command Line", points: { cybersecurity: 3 } },
      ],
    },
    {
      question: "Masalah apa yang paling ingin Anda pecahkan?",
      answers: [
        {
          text: "Bagaimana cara melindungi sistem ini dari hacker?",
          points: { cybersecurity: 3 },
        },
        {
          text: "Bagaimana cara membuat produk ini lebih mudah digunakan?",
          points: { software: 3 },
        },
        {
          text: "Bagaimana cara membuat produk ini laku terjual?",
          points: { marketing: 3 },
        },
        {
          text: "Bagaimana cara membuat tim ini bekerja lebih efisien?",
          points: { business: 3 },
        },
      ],
    },
    {
      question: "Lingkungan kerja ideal Anda adalah...",
      answers: [
        {
          text: "Tenang, fokus, dan mendalam (deep work) pada satu masalah.",
          points: { software: 2, data: 2 },
        },
        {
          text: "Dinamis, cepat, dan kolaboratif dengan banyak orang.",
          points: { business: 2, marketing: 2 },
        },
        {
          text: "Analitis, penuh investigasi, dan penuh teka-teki.",
          points: { cybersecurity: 2, data: 1 },
        },
        {
          text: "Struktur, aturan, dan angka yang jelas.",
          points: { finance: 3, business: 1 },
        },
      ],
    },
    // --- 6 Pertanyaan Spesifik (Pengetahuan) ---
    {
      question: "Apa fungsi utama dari HTML?",
      answers: [
        {
          text: "Struktur dan konten dasar halaman web.",
          points: { software: 3 },
        },
        { text: "Membuat database.", points: { data: 1 } },
        { text: "Mendesain logo.", points: { marketing: 0 } },
      ],
    },
    {
      question: "Apa kepanjangan dari 'SQL'?",
      answers: [
        { text: "Structured Query Language.", points: { data: 3 } },
        { text: "Software Quality Logic.", points: { software: 0 } },
        { text: "System Quota Limit.", points: { cybersecurity: 0 } },
      ],
    },
    {
      question: "Apa yang dimaksud dengan 'Phishing'?",
      answers: [
        {
          text: "Upaya penipuan untuk mencuri data sensitif.",
          points: { cybersecurity: 3 },
        },
        { text: "Proses mencari ikan di data.", points: { data: 0 } },
        { text: "Teknik marketing.", points: { marketing: 0 } },
      ],
    },
    {
      question: "Apa itu 'SEO' dalam marketing?",
      answers: [
        {
          text: "Optimasi mesin pencari (agar muncul di Google).",
          points: { marketing: 3 },
        },
        { text: "Strategi Email Resmi.", points: { business: 0 } },
        { text: "Standar Keamanan Operasional.", points: { cybersecurity: 0 } },
      ],
    },
    {
      question: "Apa itu 'ROI' dalam bisnis?",
      answers: [
        {
          text: "Return on Investment (Laba atas Investasi).",
          points: { finance: 3, business: 2 },
        },
        { text: "Risk of Inflation.", points: { finance: 0 } },
        { text: "Rules of Interaction.", points: { marketing: 0 } },
      ],
    },
    {
      question: "Apa yang dimaksud 'Gantt Chart'?",
      answers: [
        {
          text: "Grafik untuk visualisasi jadwal proyek.",
          points: { business: 3 },
        },
        { text: "Grafik keuangan.", points: { finance: 0 } },
        { text: "Jenis font.", points: { marketing: 0 } },
      ],
    },
  ],

  // --- Kategori software ---
  software: [
    // --- 5 Pertanyaan Dasar (Minat) ---
    {
      question:
        "Apa yang paling membuat Anda puas dalam sebuah proyek digital?",
      answers: [
        {
          text: "Membangun alur yang logis dan fungsional (coding).",
          points: { web_uiux: 2 },
        },
        {
          text: "Memastikan pengguna merasa nyaman dan mudah (UX).",
          points: { web_uiux: 3, ed_tech: 1 },
        },
        {
          text: "Merancang materi agar mudah dipahami pelajar.",
          points: { ed_tech: 3, web_uiux: 1 },
        },
      ],
    },
    {
      question: "Saat mendesain, apa prioritas utama Anda?",
      answers: [
        {
          text: "Tampilan visual (UI) yang estetik dan menarik.",
          points: { web_uiux: 2 },
        },
        {
          text: "Alur pengguna (UX) yang intuitif dan logis.",
          points: { web_uiux: 3 },
        },
        {
          text: "Kejelasan materi (Instructional Design) agar tidak bingung.",
          points: { ed_tech: 3 },
        },
      ],
    },
    {
      question: "Apa fokus Anda saat membuat website?",
      answers: [
        {
          text: "Arsitektur kode yang bersih dan database yang efisien.",
          points: { web_uiux: 3 },
        },
        {
          text: "Desain responsif dan aksesibilitas untuk semua pengguna.",
          points: { web_uiux: 2, ed_tech: 1 },
        },
        {
          text: "Kurikulum pembelajaran yang terstruktur di dalam platform.",
          points: { ed_tech: 3 },
        },
      ],
    },
    {
      question: "Masalah apa yang paling menarik untuk Anda pecahkan?",
      answers: [
        {
          text: "Situs web lambat atau memiliki banyak bug.",
          points: { web_uiux: 3 },
        },
        {
          text: "Pengguna bingung saat memakai aplikasi (High Bounce Rate).",
          points: { web_uiux: 3, ed_tech: 1 },
        },
        {
          text: "Siswa/pelajar merasa bosan dengan materi e-learning.",
          points: { ed_tech: 3 },
        },
      ],
    },
    {
      question: "Dalam tim, Anda lebih suka...",
      answers: [
        { text: "Menjadi programmer yang handal.", points: { web_uiux: 3 } },
        {
          text: "Menjadi 'pembela' pengguna (UX researcher).",
          points: { web_uiux: 3 },
        },
        {
          text: "Menjadi 'guru' yang merancang materi.",
          points: { ed_tech: 3 },
        },
      ],
    },
    // --- 6 Pertanyaan Spesifik (Pengetahuan) ---
    {
      question: "Apa fungsi utama dari CSS?",
      answers: [
        {
          text: "Memberi style (warna, layout, font) pada HTML.",
          points: { web_uiux: 3 },
        },
        { text: "Menyimpan data pengguna.", points: { web_uiux: 0 } },
        { text: "Membuat kurikulum belajar.", points: { ed_tech: 0 } },
      ],
    },
    {
      question: "Apa itu 'Wireframe' dalam konteks UI/UX?",
      answers: [
        {
          text: "Kerangka dasar / blueprint sebuah halaman (low-fidelity).",
          points: { web_uiux: 3 },
        },
        {
          text: "Desain final yang sudah berwarna (high-fidelity).",
          points: { web_uiux: 1 },
        },
        { text: "Kode JavaScript untuk website.", points: { web_uiux: 0 } },
      ],
    },
    {
      question: "Manakah tool yang paling umum digunakan untuk UI/UX Design?",
      answers: [
        { text: "Figma atau Sketch.", points: { web_uiux: 3 } },
        { text: "Visual Studio Code.", points: { web_uiux: 1 } },
        { text: "Moodle.", points: { ed_tech: 1 } },
      ],
    },
    {
      question: "Apa kepanjangan dari 'LMS'?",
      answers: [
        { text: "Learning Management System.", points: { ed_tech: 3 } },
        { text: "Layout Mobile System.", points: { web_uiux: 0 } },
        { text: "Logic Mainframe Server.", points: { web_uiux: 0 } },
      ],
    },
    {
      question: "Apa yang dimaksud dengan 'Instructional Design'?",
      answers: [
        {
          text: "Proses merancang pengalaman belajar yang efektif.",
          points: { ed_tech: 3 },
        },
        { text: "Proses mendesain database.", points: { web_uiux: 0 } },
        {
          text: "Proses memberi instruksi pada server.",
          points: { web_uiux: 0 },
        },
      ],
    },
    {
      question: "Apa itu 'Gamification' dalam konteks EdTech?",
      answers: [
        {
          text: "Menerapkan elemen game (skor, lencana) ke dalam proses belajar.",
          points: { ed_tech: 3 },
        },
        { text: "Membuat game dari nol.", points: { ed_tech: 0 } },
        { text: "Menguji keamanan sebuah game.", points: { web_uiux: 0 } },
      ],
    },
  ],

  // --- Kategori data ---
  data: [
    // --- 5 Pertanyaan Dasar (Minat) ---
    {
      question: "Pertanyaan apa yang paling menarik bagi Anda?",
      answers: [
        {
          text: "'Apa yang terjadi?' (Laporan penjualan, data historis)",
          points: { data_analyst: 3 },
        },
        {
          text: "'Mengapa ini terjadi?' (Analisis regresi, korelasi)",
          points: { data_scientist: 3 },
        },
        {
          text: "'Apa yang akan terjadi selanjutnya?' (Prediksi, forecasting)",
          points: { machine_learning: 3, data_scientist: 2 },
        },
      ],
    },
    {
      question: "Tool apa yang paling Anda sukai?",
      answers: [
        {
          text: "SQL dan tools BI (Tableau/Power BI).",
          points: { data_analyst: 3, data_scientist: 1 },
        },
        {
          text: "Python (Pandas, Scikit-learn).",
          points: { data_scientist: 3, machine_learning: 1 },
        },
        {
          text: "Python (TensorFlow, PyTorch).",
          points: { machine_learning: 3, data_scientist: 1 },
        },
      ],
    },
    {
      question: "Apa output akhir yang paling memuaskan?",
      answers: [
        {
          text: "Dashboard real-time yang jelas untuk manajer.",
          points: { data_analyst: 3 },
        },
        {
          text: "Model prediktif yang akurat dalam laporan riset.",
          points: { data_scientist: 3 },
        },
        {
          text: "Sistem rekomendasi (spt Netflix) yang berfungsi cerdas.",
          points: { machine_learning: 3 },
        },
      ],
    },
    {
      question: "Saat melihat dataset, apa yang pertama Anda lakukan?",
      answers: [
        {
          text: "Membersihkan data (cleaning) dan mencari insight cepat.",
          points: { data_analyst: 3 },
        },
        {
          text: "Melakukan 'feature engineering' untuk model statistik.",
          points: { data_scientist: 3 },
        },
        {
          text: "Mempersiapkan data (preprocessing) untuk dilatih oleh model AI.",
          points: { machine_learning: 3 },
        },
      ],
    },
    {
      question: "Mana yang lebih Anda sukai?",
      answers: [
        {
          text: "Membuat visualisasi data yang bercerita (storytelling).",
          points: { data_analyst: 3 },
        },
        {
          text: "Mencari pola tersembunyi dengan matematika.",
          points: { data_scientist: 3 },
        },
        {
          text: "Membangun 'otak' yang bisa berpikir sendiri.",
          points: { machine_learning: 3 },
        },
      ],
    },
    // --- 6 Pertanyaan Spesifik (Pengetahuan) ---
    {
      question:
        "Perintah SQL apa yang digunakan untuk mengambil data dari tabel?",
      answers: [
        { text: "SELECT", points: { data_analyst: 3, data_scientist: 3 } },
        { text: "UPDATE", points: { data_analyst: 0 } },
        { text: "INSERT", points: { data_analyst: 0 } },
      ],
    },
    {
      question: "Apa fungsi 'Pivot Table' di Excel?",
      answers: [
        {
          text: "Meringkas, mengelompokkan, dan menganalisis data.",
          points: { data_analyst: 3 },
        },
        { text: "Membuat grafik 3D.", points: { data_analyst: 0 } },
        { text: "Menulis kode Python.", points: { data_scientist: 0 } },
      ],
    },
    {
      question: "Apa itu 'Regresi' dalam statistik?",
      answers: [
        {
          text: "Teknik untuk memodelkan hubungan antara variabel.",
          points: { data_scientist: 3 },
        },
        {
          text: "Proses mengembalikan data yang terhapus.",
          points: { data_analyst: 0 },
        },
        { text: "Nama sebuah database.", points: { data_analyst: 0 } },
      ],
    },
    {
      question: "Apa itu 'Feature Engineering'?",
      answers: [
        {
          text: "Proses memilih dan mengubah variabel data mentah untuk model.",
          points: { data_scientist: 3, machine_learning: 2 },
        },
        {
          text: "Mendesain fitur baru untuk aplikasi.",
          points: { data_analyst: 0 },
        },
        {
          text: "Menambahkan fitur ke dashboard.",
          points: { data_analyst: 0 },
        },
      ],
    },
    {
      question:
        "Apa contoh 'Unsupervised Learning' (Pembelajaran Tak Terarah)?",
      answers: [
        {
          text: "Clustering (Mengelompokkan pelanggan serupa).",
          points: { machine_learning: 3, data_scientist: 1 },
        },
        {
          text: "Klasifikasi (Memprediksi 'spam' atau 'bukan spam').",
          points: { machine_learning: 0 },
        },
        { text: "Membuat laporan penjualan.", points: { data_analyst: 0 } },
      ],
    },
    {
      question: "Apa itu 'TensorFlow' atau 'PyTorch'?",
      answers: [
        {
          text: "Library (pustaka) untuk Deep Learning / AI.",
          points: { machine_learning: 3 },
        },
        { text: "Alat untuk membuat dashboard.", points: { data_analyst: 0 } },
        { text: "Database SQL.", points: { data_analyst: 0 } },
      ],
    },
  ],

  // --- Kategori cybersecurity ---
  cybersecurity: [
    // --- 5 Pertanyaan Dasar (Minat) ---
    {
      question:
        "Saat terjadi 'insiden keamanan', peran apa yang ingin Anda ambil?",
      answers: [
        {
          text: "Mencari celah keamanan sebelum orang jahat menemukannya (Ofensif).",
          points: { pentester: 3, eth_hacker: 3 },
        },
        {
          text: "Mencari tahu siapa pelakunya dan bagaimana dia masuk (Forensik/Defensif).",
          points: { investigator: 3 },
        },
        {
          text: "Menulis kode untuk menambal lubang keamanan (Defensif).",
          points: { eth_hacker: 1, pentester: 1 },
        },
      ],
    },
    {
      question: "Metodologi apa yang paling Anda sukai?",
      answers: [
        {
          text: "Melakukan uji coba 'serangan' formal pada aplikasi web/jaringan.",
          points: { pentester: 3 },
        },
        {
          text: "Mengkloning hard drive dan menganalisis 'image' untuk bukti digital.",
          points: { investigator: 3 },
        },
        {
          text: "Menggunakan 'Social Engineering' atau 'Red Teaming' yang kreatif.",
          points: { eth_hacker: 3 },
        },
      ],
    },
    {
      question: "Apa motivasi utama Anda?",
      answers: [
        {
          text: "Sensasi 'menang' saat berhasil membobol sistem yang sulit.",
          points: { eth_hacker: 3, pentester: 2 },
        },
        {
          text: "Keinginan untuk 'keadilan' dan menemukan kebenaran (mencari bukti).",
          points: { investigator: 3 },
        },
        {
          text: "Keinginan untuk 'melindungi' dan membuat sistem lebih kuat.",
          points: { pentester: 2, eth_hacker: 1 },
        },
      ],
    },
    {
      question: "Fokus Anda adalah...",
      answers: [
        {
          text: "Aplikasi Web dan API.",
          points: { pentester: 3 },
        },
        {
          text: "Jaringan dan infrastruktur.",
          points: { eth_hacker: 2, pentester: 1 },
        },
        {
          text: "Sistem Operasi dan File (Jejak digital).",
          points: { investigator: 3 },
        },
      ],
    },
    {
      question: "Anda lebih suka...",
      answers: [
        {
          text: "Menjadi 'penyerang' yang etis.",
          points: { pentester: 3, eth_hacker: 3 },
        },
        { text: "Menjadi 'penyelidik' digital.", points: { investigator: 3 } },
      ],
    },
    // --- 6 Pertanyaan Spesifik (Pengetahuan) ---
    {
      question: "Apa itu 'Nmap'?",
      answers: [
        {
          text: "Alat untuk memindai port dan menemukan host di jaringan.",
          points: { pentester: 3, eth_hacker: 3 },
        },
        {
          text: "Alat untuk menganalisis malware.",
          points: { investigator: 1 },
        },
        { text: "Alat untuk membuat laporan.", points: { pentester: 0 } },
      ],
    },
    {
      question: "Apa itu 'Metasploit'?",
      answers: [
        {
          text: "Framework untuk mengembangkan dan mengeksekusi 'exploit'.",
          points: { pentester: 3, eth_hacker: 3 },
        },
        { text: "Antivirus.", points: { pentester: 0 } },
        { text: "Alat forensik digital.", points: { investigator: 0 } },
      ],
    },
    {
      question: "Apa fungsi utama 'Burp Suite'?",
      answers: [
        {
          text: "Mencegat dan memanipulasi lalu lintas web (HTTP).",
          points: { pentester: 3 },
        },
        { text: "Memulihkan file yang terhapus.", points: { investigator: 0 } },
        { text: "Membuat firewall.", points: { eth_hacker: 0 } },
      ],
    },
    {
      question: "Apa itu 'Chain of Custody' dalam forensik?",
      answers: [
        {
          text: "Dokumentasi kronologis siapa yang memegang barang bukti.",
          points: { investigator: 3 },
        },
        { text: "Rantai perintah di militer.", points: { investigator: 0 } },
        { text: "Urutan serangan hacker.", points: { eth_hacker: 0 } },
      ],
    },
    {
      question: "Apa itu 'Autopsy' dalam konteks digital?",
      answers: [
        {
          text: "Platform forensik digital untuk menganalisis disk image.",
          points: { investigator: 3 },
        },
        { text: "Proses mematikan server.", points: { pentester: 0 } },
        { text: "Membedah kode program.", points: { eth_hacker: 0 } },
      ],
    },
    {
      question: "Apa itu 'Social Engineering'?",
      answers: [
        {
          text: "Seni memanipulasi psikologi manusia untuk mendapatkan akses.",
          points: { eth_hacker: 3 },
        },
        {
          text: "Merancang perangkat lunak sosial.",
          points: { eth_hacker: 0 },
        },
        { text: "Meretas akun media sosial.", points: { eth_hacker: 1 } },
      ],
    },
  ],

  // --- Kategori marketing ---
  marketing: [
    // --- 5 Pertanyaan Dasar (Minat) ---
    {
      question: "Bagaimana cara terbaik membangun 'citra' sebuah perusahaan?",
      answers: [
        {
          text: "Melalui identitas visual (logo, warna) yang konsisten.",
          points: { brand_design: 3, social_media: 1 },
        },
        {
          text: "Melalui interaksi harian yang otentik di media sosial.",
          points: { social_media: 3, pr_diplomacy: 1 },
        },
        {
          text: "Melalui rilis pers dan menjalin hubungan baik dengan media.",
          points: { pr_diplomacy: 3 },
        },
      ],
    },
    {
      question: "Tool apa yang paling sering Anda buka?",
      answers: [
        {
          text: "Adobe Illustrator atau Figma untuk membuat aset visual.",
          points: { brand_design: 3 },
        },
        {
          text: "Hootsuite atau Meta Business Suite untuk menjadwalkan konten.",
          points: { social_media: 3 },
        },
        {
          text: "Platform monitoring media (Meltwater) atau email client.",
          points: { pr_diplomacy: 3 },
        },
      ],
    },
    {
      question: "Apa metrik kesuksesan utama bagi Anda?",
      answers: [
        {
          text: "Brand Recall (Seberapa banyak orang ingat brand kita).",
          points: { brand_design: 3, pr_diplomacy: 1 },
        },
        {
          text: "Engagement Rate (Likes, Comments, Shares).",
          points: { social_media: 3 },
        },
        {
          text: "Media Mentions (Seberapa sering media meliput kita).",
          points: { pr_diplomacy: 3 },
        },
      ],
    },
    {
      question: "Saat terjadi krisis reputasi, apa yang Anda lakukan?",
      answers: [
        {
          text: "Menyiapkan 'holding statement' dan menjadi juru bicara.",
          points: { pr_diplomacy: 3 },
        },
        {
          text: "Memonitor sentimen di media sosial dan merespon keluhan.",
          points: { social_media: 3 },
        },
        {
          text: "Mendesain ulang 'image' brand agar terlihat baru (rebranding).",
          points: { brand_design: 3 },
        },
      ],
    },
    {
      question: "Mana yang lebih penting?",
      answers: [
        { text: "Konsistensi Visual (Estetika).", points: { brand_design: 3 } },
        {
          text: "Konsistensi Suara (Tone & Voice).",
          points: { social_media: 2, pr_diplomacy: 2 },
        },
        {
          text: "Konsistensi Narasi (Cerita Brand).",
          points: { pr_diplomacy: 2, brand_design: 1 },
        },
      ],
    },
    // --- 6 Pertanyaan Spesifik (Pengetahuan) ---
    {
      question: "Apa itu 'Brand Guidelines'?",
      answers: [
        {
          text: "Buku aturan tentang cara menggunakan logo, font, dan warna brand.",
          points: { brand_design: 3 },
        },
        { text: "Panduan hukum perusahaan.", points: { brand_design: 0 } },
        { text: "Jadwal posting media sosial.", points: { social_media: 0 } },
      ],
    },
    {
      question: "Apa itu 'Typography'?",
      answers: [
        {
          text: "Seni menata huruf agar mudah dibaca dan menarik.",
          points: { brand_design: 3 },
        },
        { text: "Peta topografi.", points: { brand_design: 0 } },
        { text: "Jenis fotografi.", points: { brand_design: 0 } },
      ],
    },
    {
      question: "Apa itu 'Engagement Rate'?",
      answers: [
        {
          text: "Persentase audiens yang berinteraksi (like, comment) dengan konten.",
          points: { social_media: 3 },
        },
        { text: "Biaya iklan.", points: { social_media: 0 } },
        { text: "Tingkat pertunangan karyawan.", points: { social_media: 0 } },
      ],
    },
    {
      question: "Apa itu 'Editorial Calendar'?",
      answers: [
        {
          text: "Jadwal perencanaan untuk publikasi konten.",
          points: { social_media: 3, pr_diplomacy: 1 },
        },
        { text: "Kalender libur nasional.", points: { social_media: 0 } },
        { text: "Nama editor.", points: { social_media: 0 } },
      ],
    },
    {
      question: "Apa itu 'Press Release'?",
      answers: [
        {
          text: "Pernyataan resmi yang dikirim ke media untuk disiarkan.",
          points: { pr_diplomacy: 3 },
        },
        { text: "Poster film.", points: { brand_design: 0 } },
        {
          text: "Tombol 'publish' di media sosial.",
          points: { social_media: 0 },
        },
      ],
    },
    {
      question: "Apa peran 'Public Relations' (PR)?",
      answers: [
        {
          text: "Mengelola citra dan reputasi perusahaan di mata publik.",
          points: { pr_diplomacy: 3 },
        },
        {
          text: "Menjual produk secara langsung.",
          points: { pr_diplomacy: 0 },
        },
        { text: "Mendesain logo.", points: { brand_design: 0 } },
      ],
    },
  ],

  // --- Kategori finance ---
  finance: [
    // --- 5 Pertanyaan Dasar (Minat) ---
    {
      question: "Analisis keuangan apa yang paling menarik bagi Anda?",
      answers: [
        {
          text: "Memprediksi pergerakan pasar saham & forex (Market).",
          points: { fin_analyst: 3 },
        },
        {
          text: "Menghitung nilai wajar (valuasi) sebuah perusahaan.",
          points: { bank_finance: 3 },
        },
        {
          text: "Mengelola portofolio aset & liabilitas bank (Risk).",
          points: { asset_mgt: 3 },
        },
      ],
    },
    {
      question: "Lingkungan kerja seperti apa yang Anda sukai?",
      answers: [
        {
          text: "Cepat (fast-paced), penuh adrenalin, memantau berita global.",
          points: { fin_analyst: 3 },
        },
        {
          text: "Analitis (deep-dive), fokus pada laporan keuangan & model Excel.",
          points: { bank_finance: 3, asset_mgt: 1 },
        },
        {
          text: "Strategis, penuh regulasi, dan fokus jangka panjang.",
          points: { asset_mgt: 3, bank_finance: 1 },
        },
      ],
    },
    {
      question: "Pertanyaan apa yang ingin Anda jawab?",
      answers: [
        {
          text: "'Kapan waktu terbaik untuk membeli atau menjual aset ini?'",
          points: { fin_analyst: 3 },
        },
        {
          text: "'Berapa harga yang pantas untuk perusahaan ini jika dijual?'",
          points: { bank_finance: 3 },
        },
        {
          text: "'Bagaimana jika suku bunga naik? Apakah bank kita aman?'",
          points: { asset_mgt: 3 },
        },
      ],
    },
    {
      question: "Fokus Anda adalah...",
      answers: [
        {
          text: "Pasar Eksternal (Ekonomi Makro).",
          points: { fin_analyst: 3 },
        },
        {
          text: "Perusahaan Spesifik (Ekonomi Mikro/Valuasi).",
          points: { bank_finance: 3 },
        },
        { text: "Internal Bank (Manajemen Risiko).", points: { asset_mgt: 3 } },
      ],
    },
    {
      question: "Mana yang lebih Anda sukai?",
      answers: [
        {
          text: "Trading dan analisis teknikal/fundamental.",
          points: { fin_analyst: 3 },
        },
        {
          text: "Membaca laporan keuangan (Balance Sheet, Income Statement).",
          points: { bank_finance: 3 },
        },
        { text: "Membuat model mitigasi risiko.", points: { asset_mgt: 3 } },
      ],
    },
    // --- 6 Pertanyaan Spesifik (Pengetahuan) ---
    {
      question: "Apa itu 'Forex'?",
      answers: [
        {
          text: "Pasar valuta asing (foreign exchange).",
          points: { fin_analyst: 3 },
        },
        { text: "Empat pameran dagang.", points: { fin_analyst: 0 } },
        { text: "Analisis empat faktor.", points: { fin_analyst: 0 } },
      ],
    },
    {
      question: "Apa itu 'Market Capitalization' (Kapitalisasi Pasar)?",
      answers: [
        {
          text: "Total nilai pasar dari saham perusahaan (Harga Saham x Jumlah Saham).",
          points: { fin_analyst: 3, bank_finance: 1 },
        },
        { text: "Modal awal perusahaan.", points: { fin_analyst: 0 } },
        { text: "Total utang perusahaan.", points: { fin_analyst: 0 } },
      ],
    },
    {
      question: "Apa itu 'EBITDA'?",
      answers: [
        {
          text: "Laba sebelum Bunga, Pajak, Depresiasi, dan Amortisasi.",
          points: { bank_finance: 3 },
        },
        { text: "Nama bursa saham Eropa.", points: { fin_analyst: 0 } },
        { text: "Gaya trading.", points: { fin_analyst: 0 } },
      ],
    },
    {
      question: "Metode 'DCF (Discounted Cash Flow)' digunakan untuk apa?",
      answers: [
        {
          text: "Menghitung nilai intrinsik sebuah perusahaan (Valuasi).",
          points: { bank_finance: 3 },
        },
        { text: "Membayar utang.", points: { asset_mgt: 0 } },
        {
          text: "Menganalisis pergerakan saham harian.",
          points: { fin_analyst: 0 },
        },
      ],
    },
    {
      question: "Apa itu 'Asset-Liability Management (ALM)'?",
      answers: [
        {
          text: "Proses mengelola aset dan utang untuk mengelola risiko suku bunga.",
          points: { asset_mgt: 3 },
        },
        {
          text: "Manajemen aset fisik (gedung, komputer).",
          points: { asset_mgt: 0 },
        },
        { text: "Menjual aset.", points: { asset_mgt: 0 } },
      ],
    },
    {
      question: "Apa itu 'Liquidity Risk' (Risiko Likuiditas) bagi bank?",
      answers: [
        {
          text: "Risiko bank tidak memiliki cukup uang tunai untuk membayar nasabah.",
          points: { asset_mgt: 3 },
        },
        { text: "Risiko bank dirampok.", points: { asset_mgt: 0 } },
        { text: "Risiko nilai sahamnya turun.", points: { fin_analyst: 0 } },
      ],
    },
  ],

  // --- Kategori business ---
  business: [
    // --- 5 Pertanyaan Dasar (Minat) ---
    {
      question:
        "Dalam sebuah tim proyek, masalah apa yang pertama Anda selesaikan?",
      answers: [
        { text: "Proyek 'molor' dari jadwal (Deadline).", points: { pm: 3 } },
        { text: "Konflik antar anggota tim (Manusia).", points: { hr: 3 } },
        { text: "Risiko kontrak atau aturan (Hukum).", points: { legal: 3 } },
        {
          text: "Data operasional berantakan (Administrasi).",
          points: { admin: 3 },
        },
        {
          text: "Target penjualan tidak tercapai (Strategi).",
          points: { biz_digital: 3 },
        },
      ],
    },
    {
      question: "Tool apa yang paling Anda kuasai?",
      answers: [
        {
          text: "Jira, Asana, atau Trello untuk manajemen tugas.",
          points: { pm: 3 },
        },
        {
          text: "Platform HRIS atau survei kepuasan karyawan.",
          points: { hr: 3 },
        },
        {
          text: "Draft dokumen legal atau platform 'e-discovery'.",
          points: { legal: 3 },
        },
        {
          text: "Excel/Google Sheets (Pivot Table, VLOOKUP).",
          points: { admin: 3, biz_digital: 1 },
        },
        {
          text: "Google Analytics atau alat riset pasar.",
          points: { biz_digital: 3 },
        },
      ],
    },
    {
      question: "Apa definisi 'sukses' bagi Anda dalam pekerjaan?",
      answers: [
        {
          text: "Proyek diluncurkan tepat waktu dan sesuai anggaran.",
          points: { pm: 3 },
        },
        {
          text: "Karyawan merasa senang, produktif, dan berkembang.",
          points: { hr: 3 },
        },
        {
          text: "Perusahaan terlindungi dari semua risiko hukum.",
          points: { legal: 3 },
        },
        {
          text: "Semua laporan administrasi 100% akurat dan rapi.",
          points: { admin: 3 },
        },
        {
          text: "Menemukan sumber pendapatan atau pasar baru.",
          points: { biz_digital: 3 },
        },
      ],
    },
    {
      question: "Anda lebih condong ke...",
      answers: [
        { text: "Proses & Struktur (Mengatur).", points: { pm: 2, admin: 2 } },
        { text: "Manusia & Empati (Mendengar).", points: { hr: 3 } },
        { text: "Aturan & Kepatuhan (Menganalisis).", points: { legal: 3 } },
        {
          text: "Peluang & Pertumbuhan (Berinovasi).",
          points: { biz_digital: 3 },
        },
      ],
    },
    {
      question: "Saat rapat, Anda adalah orang yang...",
      answers: [
        {
          text: "Mencatat 'action items' dan 'next steps'.",
          points: { pm: 3 },
        },
        {
          text: "Memastikan semua orang didengar pendapatnya.",
          points: { hr: 3 },
        },
        {
          text: "Menilai apakah ide tersebut melanggar aturan.",
          points: { legal: 3 },
        },
        {
          text: "Menyimpan data dan 'minutes of meeting' (MoM).",
          points: { admin: 3 },
        },
        {
          text: "Membahas strategi 'big picture' dan target.",
          points: { biz_digital: 3 },
        },
      ],
    },
    // --- 6 Pertanyaan Spesifik (Pengetahuan) ---
    {
      question: "Apa itu 'Agile' dalam Project Management?",
      answers: [
        {
          text: "Metodologi kerja iteratif dan fleksibel (e.g., Scrum).",
          points: { pm: 3 },
        },
        { text: "Kemampuan bergerak cepat.", points: { pm: 0 } },
        { text: "Jenis software.", points: { pm: 0 } },
      ],
    },
    {
      question: "Apa itu 'Gantt Chart'?",
      answers: [
        {
          text: "Grafik batang visual untuk menunjukkan jadwal dan progres proyek.",
          points: { pm: 3 },
        },
        { text: "Bagan organisasi perusahaan.", points: { hr: 0 } },
        { text: "Laporan keuangan.", points: { admin: 0 } },
      ],
    },
    {
      question: "Apa itu 'Employee Onboarding'?",
      answers: [
        {
          text: "Proses integrasi karyawan baru ke dalam perusahaan.",
          points: { hr: 3 },
        },
        { text: "Proses memecat karyawan.", points: { hr: 0 } },
        { text: "Proses absensi.", points: { admin: 0 } },
      ],
    },
    {
      question: "Apa itu 'NDA' (Non-Disclosure Agreement)?",
      answers: [
        {
          text: "Kontrak hukum untuk menjaga kerahasiaan informasi.",
          points: { legal: 3 },
        },
        { text: "Analisis data baru.", points: { biz_digital: 0 } },
        { text: "Nama divisi.", points: { hr: 0 } },
      ],
    },
    {
      question: "Apa itu 'Business Model Canvas'?",
      answers: [
        {
          text: "Template visual untuk mengembangkan atau memetakan model bisnis.",
          points: { biz_digital: 3 },
        },
        { text: "Kanvas untuk melukis.", points: { biz_digital: 0 } },
        { text: "Laporan administrasi.", points: { admin: 0 } },
      ],
    },
    {
      question: "Fungsi 'VLOOKUP' di Excel digunakan untuk apa?",
      answers: [
        {
          text: "Mencari nilai di satu kolom dan mengambil nilai dari kolom lain.",
          points: { admin: 3 },
        },
        { text: "Menghitung total.", points: { admin: 0 } },
        { text: "Membuat video.", points: { admin: 0 } },
      ],
    },
  ],
  general: [
    // --- 5 Pertanyaan Dasar (Minat) ---
    {
      question: "Aktivitas apa yang paling Anda nikmati?",
      answers: [
        {
          text: "Mengatur dan menganalisis data dalam spreadsheet.",
          points: { data: 2, finance: 2 },
        },
        {
          text: "Memecahkan teka-teki logika atau menulis kode.",
          points: { software: 2, cybersecurity: 1 },
        },
        {
          text: "Mendesain poster atau layout yang indah.",
          points: { marketing: 2 },
        },
        {
          text: "Berbicara, bernegosiasi, atau memimpin tim.",
          points: { business: 2, marketing: 1 },
        },
      ],
    },
    {
      question: "Anda lebih suka bekerja dengan...",
      answers: [
        {
          text: "Angka dan Laporan.",
          points: { data: 2, finance: 2, business: 1 },
        },
        {
          text: "Sistem, Kode, dan Komputer.",
          points: { software: 2, cybersecurity: 2 },
        },
        {
          text: "Orang dan Ide.",
          points: { business: 2, marketing: 2, software: 1 },
        },
      ],
    },
    {
      question: "Tool apa yang paling menarik bagi Anda?",
      answers: [
        { text: "Code Editor (misal: VS Code)", points: { software: 3 } },
        {
          text: "Spreadsheet (misal: Excel, Google Sheets)",
          points: { data: 2, finance: 1, business: 1 },
        },
        {
          text: "Desain (misal: Figma, Canva)",
          points: { software: 1, marketing: 2 },
        },
        { text: "Terminal / Command Line", points: { cybersecurity: 3 } },
      ],
    },
    {
      question: "Masalah apa yang paling ingin Anda pecahkan?",
      answers: [
        {
          text: "Bagaimana cara melindungi sistem ini dari hacker?",
          points: { cybersecurity: 3 },
        },
        {
          text: "Bagaimana cara membuat produk ini lebih mudah digunakan?",
          points: { software: 3 },
        },
        {
          text: "Bagaimana cara membuat produk ini laku terjual?",
          points: { marketing: 3 },
        },
        {
          text: "Bagaimana cara membuat tim ini bekerja lebih efisien?",
          points: { business: 3 },
        },
      ],
    },
    {
      question: "Lingkungan kerja ideal Anda adalah...",
      answers: [
        {
          text: "Tenang, fokus, dan mendalam (deep work) pada satu masalah.",
          points: { software: 2, data: 2 },
        },
        {
          text: "Dinamis, cepat, dan kolaboratif dengan banyak orang.",
          points: { business: 2, marketing: 2 },
        },
        {
          text: "Analitis, penuh investigasi, dan penuh teka-teki.",
          points: { cybersecurity: 2, data: 1 },
        },
        {
          text: "Struktur, aturan, dan angka yang jelas.",
          points: { finance: 3, business: 1 },
        },
      ],
    },
    // --- 6 Pertanyaan Spesifik (Pengetahuan Umum) ---
    // Ini menguji pengetahuan umum di SEMUA bidang
    {
      question: "Apa fungsi utama dari HTML?",
      answers: [
        {
          text: "Struktur dan konten dasar halaman web.",
          points: { software: 3 },
        },
        { text: "Membuat database.", points: { data: 1 } },
        { text: "Mendesain logo.", points: { marketing: 0 } },
      ],
    },
    {
      question: "Apa kepanjangan dari 'SQL'?",
      answers: [
        { text: "Structured Query Language.", points: { data: 3 } },
        { text: "Software Quality Logic.", points: { software: 0 } },
        { text: "System Quota Limit.", points: { cybersecurity: 0 } },
      ],
    },
    {
      question: "Apa yang dimaksud dengan 'Phishing'?",
      answers: [
        {
          text: "Upaya penipuan untuk mencuri data sensitif.",
          points: { cybersecurity: 3 },
        },
        { text: "Proses mencari ikan di data.", points: { data: 0 } },
        { text: "Teknik marketing.", points: { marketing: 0 } },
      ],
    },
    {
      question: "Apa itu 'SEO' dalam marketing?",
      answers: [
        {
          text: "Optimasi mesin pencari (agar muncul di Google).",
          points: { marketing: 3 },
        },
        { text: "Strategi Email Resmi.", points: { business: 0 } },
        { text: "Standar Keamanan Operasional.", points: { cybersecurity: 0 } },
      ],
    },
    {
      question: "Apa itu 'ROI' dalam bisnis?",
      answers: [
        {
          text: "Return on Investment (Laba atas Investasi).",
          points: { finance: 3, business: 2 },
        },
        { text: "Risk of Inflation.", points: { finance: 0 } },
        { text: "Rules of Interaction.", points: { marketing: 0 } },
      ],
    },
    {
      question: "Apa yang dimaksud 'Gantt Chart'?",
      answers: [
        {
          text: "Grafik untuk visualisasi jadwal proyek.",
          points: { business: 3 },
        },
        { text: "Grafik keuangan.", points: { finance: 0 } },
        { text: "Jenis font.", points: { marketing: 0 } },
      ],
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Setup Kategori
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");

  if (categoryParam && masterQuizData[categoryParam]) {
    currentCategory = categoryParam;
    quizData = masterQuizData[currentCategory];
    resultData = masterResultData;
  } else {
    currentCategory = "software";
    quizData = masterQuizData["software"]; // Fallback agar tidak error
    resultData = masterResultData;
  }

  // 2. Update Tampilan Awal
  const categoryInfo = categoryMap[currentCategory] || categoryMap.default;
  document.getElementById("quiz-category-title").innerText = categoryInfo.title;
  document.getElementById("quiz-category-description").innerText =
    categoryInfo.description;

  // 3. Event Listeners
  if (startQuizBtn) startQuizBtn.addEventListener("click", startQuiz);
  if (continueToBasicBtn)
    continueToBasicBtn.addEventListener("click", showFirstQuestion);
  if (continueToSpecificBtn)
    continueToSpecificBtn.addEventListener("click", showSpecificQuestion);

  loadStars();
});

function startQuiz() {
  // Hanya tampilkan Intro Dasar
  quizStartScreen.classList.add("hidden");
  quizIntroBasicScreen.classList.remove("hidden");

  currentQuestionIndex = 0;
  scores = {};
  basicScores = {};
  progressBar.style.width = "0%";
}

function showFirstQuestion() {
  quizIntroBasicScreen.classList.add("hidden");
  quizActiveScreen.classList.remove("hidden");

  // Mulai Timer
  timeRemaining = 300;
  quizTimer.innerText = "05:00";
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);

  // Reset Visual Timer
  quizTimer.style.setProperty("--timer-progress", "360deg");
  quizTimer.style.setProperty("--timer-color", timerColorDefault);
  quizTimer.classList.remove("low-time");

  showQuestion();
}

function showSpecificQuestion() {
  quizIntroSpecificScreen.classList.add("hidden");
  quizActiveScreen.classList.remove("hidden");
  showQuestion(); // Lanjut ke soal berikutnya (no 6)
}

function showQuestion() {
  if (!quizData || quizData.length === 0) {
    console.error("Data kuis kosong!");
    return;
  }

  const q = quizData[currentQuestionIndex];
  questionText.innerText = q.question;

  const progressPercent = (currentQuestionIndex / quizData.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  questionCountText.innerText = `Pertanyaan ${currentQuestionIndex + 1} dari ${
    quizData.length
  }`;

  answerOptionsContainer.innerHTML = "";
  q.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(answer.points));
    answerOptionsContainer.appendChild(button);
  });
}

function selectAnswer(points) {
  // Tambah skor
  for (const division in points) {
    if (scores[division]) scores[division] += points[division];
    else scores[division] = points[division];
  }

  // Simpan skor dasar setelah soal ke-5
  if (currentQuestionIndex === 4) {
    basicScores = { ...scores };
  }

  currentQuestionIndex++;

  // Cek Logika Pindah Halaman
  const SOAL_DASAR_SELESAI = 5;

  if (currentQuestionIndex === SOAL_DASAR_SELESAI) {
    // Jeda: Tampilkan Intro Spesifik
    quizActiveScreen.classList.add("hidden");
    quizIntroSpecificScreen.classList.remove("hidden");
  } else if (currentQuestionIndex < quizData.length) {
    // Lanjut soal biasa
    showQuestion();
  } else {
    // Selesai
    clearInterval(timerInterval);
    showResults();
  }
}

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  quizTimer.innerText = `${minutes}:${seconds}`;

  const progressPercentage = timeRemaining / totalTime;
  const progressInDegrees = progressPercentage * 360;

  if (timeRemaining <= 30) {
    quizTimer.style.setProperty("--timer-color", timerColorLow);
    quizTimer.classList.add("low-time");
  } else {
    quizTimer.style.setProperty("--timer-color", timerColorDefault);
    quizTimer.classList.remove("low-time");
  }
  quizTimer.style.setProperty("--timer-progress", `${progressInDegrees}deg`);

  timeRemaining--;
  if (timeRemaining < 0) {
    clearInterval(timerInterval);
    showResults();
  }
}

function showResults() {
  clearInterval(timerInterval);
  quizActiveScreen.classList.add("hidden");
  quizResultsScreen.classList.remove("hidden");

  // Helper: Analisis Skor
  const analyzeScores = (scoreObject) => {
    let topKey = "";
    let topScore = -1;
    let totalPoints = 0;
    for (const key in scoreObject) {
      totalPoints += scoreObject[key];
      if (scoreObject[key] > topScore) {
        topScore = scoreObject[key];
        topKey = key;
      }
    }
    const percentage = Math.round((topScore / totalPoints) * 100) || 0;
    return { topKey, topScore, percentage };
  };

  // Helper: Skor Spesifik
  const getSpecificScores = () => {
    let specific = {};
    for (const key in scores) {
      const basic = basicScores[key] || 0;
      specific[key] = scores[key] - basic;
    }
    return specific;
  };

  const basicAnalysis = analyzeScores(basicScores);
  const specificAnalysis = analyzeScores(getSpecificScores());
  const finalAnalysis = analyzeScores(scores);

  // Output 1 & 2 (Dasar & Spesifik)
  const updateBreakdown = (elementIdScore, elementIdDiv, analysis) => {
    const elScore = document.getElementById(elementIdScore);
    const elDiv = document.getElementById(elementIdDiv);
    if (analysis.topKey && resultData[analysis.topKey]) {
      elScore.innerText = `${analysis.percentage}%`;
      elDiv.innerText = resultData[analysis.topKey].name;
    } else {
      elScore.innerText = "N/A";
      elDiv.innerText = "Data Tidak Cukup";
    }
  };

  updateBreakdown("basic-result-score", "basic-result-division", basicAnalysis);
  updateBreakdown(
    "specific-result-score",
    "specific-result-division",
    specificAnalysis
  );

  // Output 3 (Final) & Tombol
  const secondaryBox = document.querySelector(".secondary-results");
  const boxBtnFinish = document.getElementById("box-btn-finish");

  if (currentCategory === "general") {
    if (secondaryBox) secondaryBox.style.display = "none";
    if (boxBtnFinish) boxBtnFinish.style.display = "none";

    const categoryInfo =
      categoryMap[finalAnalysis.topKey] || categoryMap.default;
    document.getElementById(
      "final-result-score"
    ).innerText = `${finalAnalysis.percentage}%`;
    document.getElementById("final-result-division").innerText =
      categoryInfo.title;
    document.getElementById(
      "final-result-description"
    ).innerText = `Anda menunjukkan minat bakat terkuat di kategori ini.`;

    showGeneralResultsButtons(finalAnalysis.topKey);
  } else {
    if (secondaryBox) secondaryBox.style.display = "block";
    if (boxBtnFinish) boxBtnFinish.style.display = "flex";

    if (finalAnalysis.topKey && resultData[finalAnalysis.topKey]) {
      document.getElementById(
        "final-result-score"
      ).innerText = `${finalAnalysis.percentage}%`;
      document.getElementById("final-result-division").innerText =
        resultData[finalAnalysis.topKey].name;
      document.getElementById("final-result-description").innerText =
        resultData[finalAnalysis.topKey].description;
    } else {
      document.getElementById("final-result-score").innerText = "N/A";
      document.getElementById("final-result-division").innerText =
        "Tidak Ditemukan";
    }

    // Secondary List
    secondaryResultsList.innerHTML = "";
    for (const division in scores) {
      if (division !== finalAnalysis.topKey && resultData[division]) {
        const val =
          Math.round(
            (scores[division] /
              (finalAnalysis.topScore / (finalAnalysis.percentage / 100))) *
              100
          ) || 0;
        const li = document.createElement("li");
        li.innerText = `${resultData[division].name}: ${val}%`;
        secondaryResultsList.appendChild(li);
      }
    }
  }
}

function showGeneralResultsButtons(recommendedCategory) {
  const boxBtnContainer = document.getElementById("box-btn-finish");
  boxBtnContainer.innerHTML = "";

  const startBtn = document.createElement("a");
  startBtn.href = `pdquiz.html?category=${recommendedCategory}`;
  startBtn.className = "cta-button";
  startBtn.innerText = `Mulai Quiz '${categoryMap[recommendedCategory].title}'`;

  const homeBtn = document.createElement("a");
  homeBtn.href = "index.html";
  homeBtn.className = "cta-button secondary";
  homeBtn.innerText = "Kembali ke Home";

  boxBtnContainer.appendChild(homeBtn);
  boxBtnContainer.appendChild(startBtn);
  boxBtnContainer.style.display = "flex";
}

function loadStars() {
  const space = document.getElementById("space");
  if (space) {
    const starCount = 200;
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
}
