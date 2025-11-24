// DATABASE SILABUS LENGKAP (21 DIVISI)
// Pastikan ID di sini SAMA PERSIS dengan ID di file divisi.js

const divisionsData = {
  // 1. Education Technology
  edtech: {
    title: "Divisi Education Technology (Pendidikan)",
    lead: "Program ini dirancang untuk menjembatani dunia pendidikan dan teknologi. Peserta akan mempelajari cara merancang kurikulum digital, pengelolaan Learning Management System (LMS), dan pembuatan konten pembelajaran interaktif yang efektif dan menarik bagi pengguna.",

    // IKON (Ganti link gambar dengan class FontAwesome)
    iconPeluang: "fa-solid fa-laptop-file",
    peluangDesc:
      "Cocok untuk mahasiswa jurusan Teknologi Pendidikan, Ilmu Komputer, Psikologi, dan Keguruan yang ingin berkarir di startup EdTech, institusi pendidikan modern, atau divisi pelatihan perusahaan (L&D).",
    posisi: [
      "Instructional Designer",
      "LMS Administrator",
      "E-Learning Developer",
      "EdTech Specialist",
    ],

    iconKegiatan: "fa-solid fa-chalkboard-user",
    kegiatan: [
      "Pengenalan Ekosistem EdTech & Tren Pendidikan Digital.",
      "Dasar Instructional Design (ADDIE & SAM Model).",
      "Psikologi Pembelajaran & User Experience dalam Edukasi.",
      "Penyusunan Kurikulum & Storyboarding Konten.",
      "Pengembangan Media Pembelajaran Interaktif (Video/Kuis).",
      "Pengelolaan Learning Management System (Moodle/Canvas).",
      "Gamifikasi dalam Pembelajaran.",
      "Asesmen & Evaluasi Hasil Belajar Digital.",
      "Implementasi Kelas Virtual & Webinar.",
      "Proyek Akhir: Merancang Modul Pembelajaran Online Lengkap.",
    ],

    iconTarget: "fa-solid fa-certificate",
    target: [
      "Memahami prinsip desain instruksional modern.",
      "Mampu mengoperasikan dan mengelola LMS.",
      "Mampu membuat konten e-learning yang interaktif.",
      "Memiliki portofolio silabus dan modul pembelajaran digital.",
    ],
    detail:
      "Pembelajaran dimulai dengan memahami bagaimana orang belajar di era digital, dilanjutkan dengan teknik merancang kurikulum yang sistematis. Peserta akan diajarkan menggunakan tools pembuatan konten dan manajemen kelas online. Fokus utama mencakup: teori instruksional, pembuatan storyboard, manajemen LMS, teknik gamifikasi, dan evaluasi efektivitas materi ajarr",
  },

  // 2. Python Data Scientists
  data_scientist: {
    title: "Divisi Python Data Scientists",
    lead: "Divisi ini fokus mencetak talenta data yang mampu mengolah data mentah menjadi wawasan bisnis menggunakan bahasa pemrograman Python. Peserta akan belajar siklus lengkap data science, mulai dari cleaning, eksplorasi, hingga pemodelan dasar.",
    iconPeluang: "fa-solid fa-magnifying-glass-chart",
    peluangDesc:
      "Sangat sesuai untuk mahasiswa Statistika, Matematika, Ilmu Komputer, dan Ekonomi yang ingin terjun ke dunia Big Data, startup teknologi, perbankan, dan riset pasar.",
    posisi: [
      "Data Scientist",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Python Developer",
    ],
    iconKegiatan: "fa-brands fa-python",
    kegiatan: [
      "Fundamental Python untuk Data Science (Variable, Loop, Function).",
      "Manipulasi Data dengan Pandas & NumPy.",
      "Data Cleaning & Preprocessing (Handling Missing Values).",
      "Exploratory Data Analysis (EDA) & Statistik Dasar.",
      "Visualisasi Data dengan Matplotlib & Seaborn.",
      "Pengenalan Machine Learning (Supervised vs Unsupervised).",
      "Model Regresi & Klasifikasi Sederhana (Scikit-Learn).",
      "Evaluasi Model & Metrik Performa.",
      "Storytelling with Data & Reporting.",
      "Proyek Akhir: Analisis Prediktif pada Dataset Bisnis Riil.",
    ],
    iconTarget: "fa-solid fa-brain",
    target: [
      "Menguasai sintaks Python untuk manipulasi data.",
      "Mampu membersihkan dan menyiapkan dataset yang valid.",
      "Mampu membuat visualisasi data yang informatif.",
      "Memahami dasar-dasar pemodelan Machine Learning.",
    ],
    detail:
      "Peserta akan dibimbing dari nol dalam pemrograman Python, berfokus pada library utama seperti Pandas dan NumPy. Pembelajaran ditekankan pada praktik langsung mengolah dataset nyata untuk menemukan pola tersembunyi. Materi mencakup: struktur data Python, teknik wrangling data, visualisasi statis dan interaktif, dasar statistik, serta pengantar algoritma pembelajaran mesin untuk prediksi sederhana.",
  },

  // 3. Cybersecurity Pentester
  pentester: {
    title: "Divisi Cybersecurity (Penetration Tester)",
    lead: "Divisi ini melatih peserta untuk berpikir seperti seorang peretas demi tujuan pertahanan (Ethical Hacking). Peserta akan mempelajari teknik, alat, dan metodologi untuk menemukan celah keamanan pada jaringan dan aplikasi web sebelum dieksploitasi oleh pihak tidak bertanggung jawab.",
    iconPeluang: "fa-solid fa-user-secret",
    peluangDesc:
      "Ideal untuk mahasiswa Teknik Informatika, Sistem Komputer, atau Cyber Security yang berminat bekerja di konsultan keamanan, perbankan, pemerintahan, dan perusahaan teknologi.",
    posisi: [
      "Penetration Tester (Ethical Hacker)",
      "Security Analyst",
      "Vulnerability Assessor",
      "Cyber Security Engineer",
    ],
    iconKegiatan: "fa-solid fa-bug",
    kegiatan: [
      "Konsep Dasar Keamanan Informasi (CIA Triad) & Etika Hacking.",
      "Jaringan Komputer Dasar & Protokol (TCP/IP, DNS, HTTP).",
      "Pengenalan Linux & Command Line untuk Security.",
      "Information Gathering & Reconnaissance (OSINT).",
      "Scanning & Enumeration (Nmap, Wireshark).",
      "Vulnerability Assessment (Nessus/OpenVAS).",
      "Web Application Penetration Testing (OWASP Top 10).",
      "Exploitation Techniques (Metasploit Framework).",
      "Post-Exploitation & Privilege Escalation.",
      "Reporting & Documentation (Menulis Laporan Pentest).",
      "Proyek Akhir: Simulasi Pentest pada Target Lab & Laporan.",
    ],
    iconTarget: "fa-solid fa-shield-halved",
    target: [
      "Memahami metodologi penetration testing standar industri.",
      "Mampu menggunakan alat-alat hacking standar (Kali Linux).",
      "Mampu mengidentifikasi celah keamanan web dan jaringan.",
      "Mampu menyusun laporan rekomendasi perbaikan keamanan.",
    ],
    detail:
      "Pembelajaran berfokus pada hands-on labs menggunakan lingkungan aman (Virtual Machines). Peserta akan diajarkan tahapan peretasan etis mulai dari pengumpulan informasi hingga pelaporan. Topik utama meliputi: penggunaan Kali Linux, analisis paket jaringan, teknik scanning, eksploitasi kerentanan web seperti SQL Injection dan XSS, serta cara mendokumentasikan temuan secara profesional.",
  },

  // 4. Project Management
  pm: {
    title: "Divisi Tech Project Management",
    lead: "Divisi ini mempersiapkan peserta untuk menjadi jembatan antara tim bisnis dan tim teknis. Program ini mengajarkan metodologi pengelolaan proyek perangkat lunak modern (Agile/Scrum) untuk memastikan produk digital selesai tepat waktu, sesuai budget, dan berkualitas tinggi.",
    iconPeluang: "fa-solid fa-users-gear",
    peluangDesc:
      "Cocok untuk mahasiswa Sistem Informasi, Manajemen Bisnis, atau Teknik Industri yang memiliki kemampuan komunikasi baik dan ingin memimpin tim di lingkungan software development.",
    posisi: [
      "IT Project Manager",
      "Scrum Master",
      "Product Owner",
      "Agile Coach",
    ],
    iconKegiatan: "fa-solid fa-list-check",
    kegiatan: [
      "Pengantar Project Management & Software Development Life Cycle (SDLC).",
      "Mindset Agile vs Waterfall dalam Proyek Tech.",
      "Framework Scrum: Peran, Artifacts, dan Events.",
      "Inisiasi Proyek: Project Charter & Stakeholder Analysis.",
      "Perencanaan: Scope, WBS, dan Timeline (Gantt Chart).",
      "Tools Manajemen Proyek (Jira/Trello/Asana).",
      "Manajemen Backlog & User Stories.",
      "Eksekusi Proyek: Sprint Planning & Daily Standup",
      "Manajemen Risiko & Kualitas Proyek.",
      "Monitoring, Closing, & Retrospective.",
      "Proyek Akhir: Simulasi Memimpin Proyek Pengembangan Aplikasi.",
    ],
    iconTarget: "fa-solid fa-rocket",
    target: [
      "Memahami siklus hidup pengembangan software (SDLC).",
      "Menguasai kerangka kerja Agile dan Scrum.",
      "Mampu menggunakan tools manajemen proyek modern.",
      "Mampu membuat dokumen perencanaan proyek teknis.",
    ],
    detail:
      "Peserta akan belajar bagaimana mengelola proyek teknologi dari inisiasi hingga penutupan. Penekanan diberikan pada metodologi Agile yang banyak digunakan startup saat ini. Materi mencakup: pembuatan project charter, teknik estimasi waktu, pengelolaan tim lintas fungsi, penggunaan tools seperti Jira, mitigasi risiko proyek, dan simulasi peran sebagai Scrum Master.",
  },

  // 5. Web Dev & UI/UX
  web_uiux: {
    title: "Divisi Web Dev & UI/UX",
    lead: "Divisi Web Developer & UI/UX Design dirancang untuk membekali mahasiswa dengan kemampuan membangun produk digital lengkap—mulai dari riset pengguna, desain tampilan, hingga membuat website fungsional yang siap digunakan publik. Program ini menggabungkan skills teknis web development, pola pikir startup, dan human-centered design, sehingga peserta tidak hanya mampu membuat website, tetapi juga memahami kebutuhan pengguna dan solusi bisnis.",
    iconPeluang: "fa-solid fa-laptop-code",
    peluangDesc:
      "Cocok untuk mahasiswa dari berbagai jurusan—terutama teknologi, bisnis, komunikasi, desain, dan kreatif—yang ingin membangun karier di perusahaan dengan asset digital, perbankan, lembaga pemerintah, perusahaan dengan produk digital, startup, software house dan perusahaan teknologi masa depan.",
    posisi: ["Web Developer", "UI/UX Designer"],
    iconKegiatan: "fa-brands fa-figma",
    kegiatan: [
      "Mindset Startup & Problem Solving",
      "Dasar UI/UX & Design Thinking",
      "User Research & Persona",
      "Wireframing & User Flow",
      "UI Design & Prototyping",
      "Mindset Startup & Problem Solving",
      "Dasar HTML untuk Landing Page",
      "Dasar CSS & Styling Halaman",
      "Website Builder No-Code/LowCode/Coding with AI",
      "Usability Testing & Iterasi Desain",
      "Hosting, Domain, dan Deployment Website",
      "Proyek Akhir: Website Startup Digital",
    ],
    iconTarget: "fa-solid fa-layer-group",
    target: [
      "Memahami proses lengkap pengembangan produk digital.",
      "Mahir menggunakan Figma untuk desain antarmuka tingkat lanjut (High-Fidelity).",
      "Mampu mengubah desain menjadi kode HTML/CSS yang fungsional.",
      "Memiliki portofolio proyek website yang live (dapat diakses online).",
    ],
    detail:
      "Pembelajaran dimulai dari sisi humanis (Riset & Desain) sebelum masuk ke sisi teknis (Coding). Peserta akan diajak memahami bahwa kode yang baik berawal dari desain yang memecahkan masalah pengguna. Topik mencakup: prinsip Gestalt dalam desain, penggunaan Flexbox/Grid di CSS, teknik hand-off desain ke developer, dan hosting website gratis (Netlify/Vercel).",
  },

  // 6. HR Analyst
  hr: {
    title: "Divisi Human Resources (SDM) Analyst",
    lead: "Divisi ini menggabungkan ilmu manajemen SDM dengan analisis data. Peserta tidak hanya belajar administrasi HR, tetapi juga bagaimana menggunakan data untuk merekrut talenta terbaik, mengelola kinerja, dan meningkatkan keterlibatan karyawan di era digital.",
    iconPeluang: "fa-solid fa-people-group",
    peluangDesc:
      "Sangat tepat untuk mahasiswa Psikologi, Manajemen SDM, Hukum, atau Administrasi Bisnis yang ingin berkarir di departemen HR modern berbasis data.",
    posisi: [
      "HR Analyst",
      "Performance Management Officer",
      "Talent Acquisition Specialist",
      "HR Generalist",
    ],
    iconKegiatan: "fa-solid fa-magnifying-glass-plus",
    kegiatan: [
      "Fundamental Manajemen SDM & Transformasi Digital HR.",
      "Talent Acquisition: Sourcing & Employer Branding.",
      "Teknik Interview & Psikotes Dasar.",
      "Onboarding & Employee Experience.",
      "Manajemen Kinerja (KPI & OKR).",
      "Learning & Development (L&D) Dasar.",
      "Administrasi HR & Hubungan Industrial Dasar.",
      "Pengantar People Analytics: Mengolah Data Karyawan.",
      "Penggunaan HRIS (Human Resource Information System).",
      "Retensi Karyawan & Budaya Perusahaan.",
      "Proyek Akhir: Audit HR Sederhana & Perencanaan Rekrutmen.",
    ],
    iconTarget: "fa-solid fa-handshake",
    target: [
      "Memahami fungsi end-to-end operasional HR.",
      "Mampu menyusun strategi rekrutmen yang efektif.",
      "Memahami dasar analisis data kinerja karyawan.",
      "Mengenal penggunaan teknologi/software HRIS.",
    ],
    detail:
      "Pembelajaran mencakup spektrum luas tugas HR dengan pendekatan modern. Peserta diajak memahami bagaimana teknologi mengubah cara pengelolaan SDM. Topik spesifik meliputi: strategi hiring, penyusunan KPI/OKR, manajemen database karyawan, dasar hukum ketenagakerjaan, analisis tingkat turnover, dan strategi membangun budaya kerja yang positif",
  },

  // 7. Legal Analyst
  legal: {
    title: "Divisi Legal Analyst (Tech Law)",
    lead: "Divisi ini mempersiapkan mahasiswa hukum untuk menghadapi tantangan era digital. Program ini fokus pada aspek hukum teknologi, mulai dari perlindungan data pribadi (PDP), hak kekayaan intelektual (HKI) dalam produk digital, hingga penyusunan kontrak bisnis teknologi.",
    iconPeluang: "fa-solid fa-scale-balanced",
    peluangDesc:
      "Sangat direkomendasikan untuk mahasiswa Hukum yang ingin memiliki spesialisasi di bidang teknologi, bekerja di firma hukum korporat, startup, atau sebagai In-House Counsel perusahaan teknologi.",
    posisi: [
      "Legal Tech Specialist",
      "Compliance Officer",
      "Contract Drafter",
      "Data Privacy Officer",
    ],
    iconKegiatan: "fa-solid fa-file-contract",
    kegiatan: [
      "Pengantar Hukum Siber & UU ITE.",
      "Perlindungan Data Pribadi (UU PDP & GDPR Compliance).",
      "Hak Kekayaan Intelektual (HKI) di Era Digital (Hak Cipta Software, Merek).",
      "Legal Drafting: Penyusunan Kontrak Kerjasama (MOU/PKS).",
      "Term of Service (ToS) & Privacy Policy Drafting.",
      "Hukum Startup & Venture Capital (Perjanjian Investasi).",
      "E-Commerce & Perlindungan Konsumen Digital.",
      "Tanda Tangan Digital & Smart Contracts.",
      "Audit Kepatuhan Hukum Perusahaan (Legal Due Diligence).",
      "Proyek Akhir: Menyusun Paket Dokumen Legal untuk Startup Baru.",
    ],
    iconTarget: "fa-solid fa-gavel",
    target: [
      "Memahami regulasi hukum yang berlaku di industri teknologi.",
      "Mampu menyusun kontrak dan dokumen legal digital.",
      "Memahami aspek perlindungan data pribadi.",
      "Mampu memberikan opini hukum terkait isu teknologi.",
    ],
    detail:
      "Peserta akan mempelajari irisan antara hukum dan teknologi. Fokus utamanya adalah bagaimana memitigasi risiko hukum bagi perusahaan teknologi melalui dokumen yang tepat. Materi meliputi: analisis regulasi privasi data, teknik drafting kontrak kerja sama IT, pendaftaran merek/paten, dan penanganan sengketa digital.",
  },

  // 8. Cyber Investigator
  cyber_investigator: {
    title: "Divisi Cybersecurity Investigator (Forensic & Digital Evidence)",
    lead: "Berbeda dengan pentester yang menyerang, divisi ini melatih peserta menjadi 'detektif digital'. Peserta akan belajar cara menangani insiden siber, mengamankan bukti digital, dan menganalisis jejak kejahatan siber untuk keperluan investigasi dan hukum.",
    iconPeluang: "fa-solid fa-fingerprint",
    peluangDesc:
      "Cocok untuk mahasiswa IT, Kriminologi, atau Hukum yang tertarik pada investigasi teknis. Karir terbuka di kepolisian siber, badan intelijen, SOC (Security Operations Center), dan konsultan forensik.",
    posisi: [
      "Digital Forensic Analyst",
      "Incident Responder",
      "SOC Analyst",
      "Cyber Crime Investigator",
    ],
    iconKegiatan: "fa-solid fa-microscope",
    kegiatan: [
      "Dasar Digital Forensics & Incident Response (DFIR).",
      "Prosedur Penanganan Bukti Digital & Chain of Custody.",
      "Teknik Akuisisi Data (Disk Imaging & Cloning).",
      "Analisis Sistem Operasi Windows (Registry, Event Logs).",
      "Analisis Sistem File & Recovery Data Terhapus.",
      "Network Forensics: Menganalisis Trafik Jaringan (Wireshark).",
      "Analisis Malware Dasar (Static Analysis).",
      "Penggunaan Tools Forensik (Autopsy, FTK Imager).",
      "Penulisan Laporan Investigasi Hukum.",
      "Proyek Akhir: Investigasi Kasus Simulasi Ransomware/Data Breach.",
    ],
    iconTarget: "fa-solid fa-file-shield",
    target: [
      "Memahami prosedur hukum penanganan barang bukti digital.",
      "Mampu melakukan akuisisi dan analisis forensik pada komputer.",
      "Mampu menggunakan tools standar industri seperti Autopsy.",
      "Mampu menyusun laporan forensik yang valid secara hukum.",
    ],
    detail:
      "Pembelajaran menekankan pada ketelitian dan prosedur. Peserta akan diajarkan cara 'membekukan' TKP digital, mengekstrak data tanpa merusaknya, dan merekonstruksi kejadian serangan siber. Topik utama: manajemen bukti, analisis log sistem, pemulihan file, analisis memori, dan pelaporan insiden.",
  },

  // 9. Financial Analyst
  fin_analyst: {
    title: "Divisi Financial Market Analyst",
    lead: "Divisi ini melatih peserta untuk membaca denyut nadi ekonomi global. Peserta akan belajar menganalisis pasar keuangan (saham, forex, komoditas) menggunakan analisis teknikal dan fundamental untuk mengambil keputusan investasi yang tepat.",
    iconPeluang: "fa-solid fa-chart-line",
    peluangDesc:
      "Ideal untuk mahasiswa Ekonomi, Keuangan, Matematika, atau siapa pun yang tertarik dengan pasar modal. Karir di sekuritas, dana pensiun, perbankan investasi, atau sebagai trader profesional.",
    posisi: [
      "Investment Analyst",
      "Equity Research Analyst",
      "Technical Analyst",
      "Portfolio Manager",
    ],
    iconKegiatan: "fa-solid fa-arrow-trend-up",
    kegiatan: [
      "Pengantar Pasar Modal Global & Instrumen Keuangan.",
      "Makroekonomi: Inflasi, Suku Bunga, & Kebijakan Bank Sentral.",
      "Analisis Fundamental: Membedah Laporan Keuangan Emiten.",
      "Analisis Teknikal Dasar: Tren, Support, Resistance.",
      "Indikator Teknikal (RSI, MACD, Moving Average).",
      "Price Action & Chart Pattern Analysis.",
      "Manajemen Risiko & Psikologi Trading.",
      "Penggunaan Platform Analisis (TradingView/Bloomberg Terminal Basic).",
      "Menyusun Jurnal Trading & Portofolio.",
      "Sentimen Pasar & Analisis Berita.",
      "Proyek Akhir: Presentasi Rekomendasi Investasi Saham/Forex.",
    ],
    iconTarget: "fa-solid fa-sack-dollar",
    target: [
      "Mampu membaca dan menganalisis grafik harga pasar.",
      "Memahami dampak berita ekonomi terhadap pasar.",
      "Mampu menghitung risiko dan reward investasi.",
      "Mampu menyusun laporan rekomendasi 'Buy/Sell/Hold'.",
    ],
    detail:
      "Peserta akan digembleng untuk memahami dua sisi mata uang analisis: Teknikal (grafik) dan Fundamental (berita/laporan keuangan). Materi mencakup: pembacaan candlestick, penggunaan indikator, interpretasi laporan keuangan perusahaan, manajemen portofolio, dan pengendalian emosi dalam berinvestasi.",
  },

  // 10. PR
  pr: {
    title: "Divisi Digital Public Diplomacy",
    lead: "Divisi ini menggabungkan ilmu Hubungan Internasional dengan strategi Public Relations modern. Peserta akan belajar bagaimana membangun citra organisasi/negara, melakukan negosiasi, dan mengelola komunikasi lintas budaya di era digital.",
    iconPeluang: "fa-solid fa-bullhorn",
    peluangDesc:
      "Cocok untuk mahasiswa Hubungan Internasional, Komunikasi, Ilmu Politik, dan Bahasa Asing. Peluang karir di kedutaan besar, NGO internasional, MNC (Multinational Corp), dan agensi PR.",
    posisi: [
      "Public Relations Specialist",
      "Digital Diplomat",
      "Corporate Communication",
      "Government Relations Officer",
    ],
    iconKegiatan: "fa-solid fa-newspaper",
    kegiatan: [
      "Dasar Public Relations & Diplomasi Publik Digital.",
      "Komunikasi Lintas Budaya & Protokoler Internasional.",
      "Penyusunan Press Release & Media Kit.",
      "Strategi Branding Negara/Organisasi (Nation Branding).",
      "Manajemen Krisis Komunikasi di Media Sosial.",
      "Copywriting & Storytelling untuk Kampanye Publik.",
      "Stakeholder Mapping & Engagement.",
      "Monitoring Media & Analisis Sentimen Publik.",
      "Teknik Negosiasi & Lobbying Dasar.",
      "Event Management (Konferensi Pers/Webinar Internasional).",
      "Proyek Akhir: Merancang Kampanye Diplomasi Publik Digital.",
    ],
    iconTarget: "fa-solid fa-globe",
    target: [
      "Memahami strategi komunikasi publik di level internasional.",
      "Mampu menulis rilis media yang standar dan efektif.",
      "Mampu merancang strategi penanganan krisis komunikasi.",
      "Memiliki kemampuan dasar negosiasi dan protokoler.",
    ],
    detail:
      "Peserta akan belajar bagaimana narasi dibangun dan disebarkan di era internet untuk mempengaruhi persepsi publik global. Topik mencakup: penulisan strategis, manajemen reputasi, diplomasi siber, etika komunikasi internasional, dan penggunaan media sosial sebagai alat soft power.",
  },

  // 11. Social Media
  social_media: {
    title: "Divisi Digital & Social Media Marketing",
    lead: "Divisi ini fokus pada strategi pemasaran modern. Peserta akan mempelajari cara membangun brand awareness, meningkatkan engagement, dan mengubah followers menjadi pelanggan melalui konten kreatif dan strategi berbasis data.",
    iconPeluang: "fa-solid fa-hashtag",
    peluangDesc:
      "Sangat luas dan terbuka untuk semua jurusan, terutama Bisnis, Komunikasi, dan DKV. Karir di agensi digital, startup, e-commerce, dan brand ternama.",
    posisi: [
      "Social Media Specialist",
      "Content Strategist",
      "Digital Marketing Officer",
      "Copywriter",
    ],
    iconKegiatan: "fa-solid fa-photo-film",
    kegiatan: [
      "Fundamental Digital Marketing & Customer Journey.",
      "Strategi Media Sosial (Instagram, TikTok, LinkedIn).",
      "Content Pillar & Editorial Plan (Content Calendar).",
      "Teknik Copywriting (AIDA Formula, Headline).",
      "Dasar SEO (Search Engine Optimization) & SEM.",
      "Social Media Analytics & Reporting (Metrik Engagement).",
      "Paid Ads Basic (Meta Ads & TikTok Ads).",
      "Influencer Marketing & KOL Management.",
      "Community Management & CRM.",
      "Tools Marketing (Canva, CapCut, Hootsuite, Google Analytics).",
      "Proyek Akhir: Menjalankan Kampanye Media Sosial Terpadu.",
    ],
    iconTarget: "fa-solid fa-thumbs-up",
    target: [
      "Mampu menyusun strategi konten media sosial yang terencana.",
      "Mampu membuat copy yang menarik dan menjual.",
      "Memahami cara membaca data analitik untuk optimasi konten.",
      "Mampu mengelola akun media sosial bisnis secara profesional.",
    ],
    detail:
      "Pembelajaran bersifat sangat praktis dan dinamis mengikuti tren algoritma terbaru. Peserta tidak hanya belajar membuat konten, tapi juga memahami 'mengapa' konten tersebut bekerja. Materi meliputi: riset audiens, perencanaan konten bulanan, teknik storytelling, analisis performa konten, dan dasar-dasar periklanan digital berbayar.",
  },

  // 12. Bisnis Digital
  biz_digital: {
    title: "Divisi Bisnis Digital",
    lead: "Divisi ini mencetak entrepreneur dan strategist digital masa depan. Peserta akan mempelajari bagaimana mentransformasi bisnis konvensional ke digital, merancang model bisnis inovatif (seperti SaaS atau Marketplace), dan mengelola operasional bisnis berbasis teknologi.",
    iconPeluang: "fa-solid fa-briefcase",
    peluangDesc:
      "Sangat cocok untuk mahasiswa Manajemen, Bisnis, Ekonomi, atau Teknik Industri yang ingin membangun startup sendiri atau bekerja sebagai pengembang bisnis di perusahaan teknologi.",
    posisi: [
      "Business Development (BizDev)",
      "Digital Strategist",
      "Product Manager",
      "E-Commerce Manager",
    ],
    iconKegiatan: "fa-solid fa-lightbulb",
    kegiatan: [
      "Ekosistem Ekonomi Digital & Tren Startup Global.",
      "Perancangan Model Bisnis (Business Model Canvas & Lean Canvas).",
      "Validasi Ide Bisnis & Market Research.",
      "Strategi Go-to-Market & Product-Market Fit.",
      "Digital Revenue Stream & Pricing Strategy.",
      "Manajemen Operasional E-Commerce & Marketplace.",
      "Customer Relationship Management (CRM) Digital.",
      "Dasar-dasar Financial Modeling untuk Startup.",
      "Pitch Deck: Teknik Presentasi ke Investor.",
      "Growth Hacking: Strategi Pertumbuhan Pengguna Cepat.",
      "Proyek Akhir: Merancang Proposal Bisnis Startup Digital Lengkap.",
    ],
    iconTarget: "fa-solid fa-chess",
    target: [
      "Mampu merancang Business Model Canvas yang valid.",
      "Memahami strategi monetisasi produk digital.",
      "Mampu menyusun Pitch Deck standar investor.",
      "Memahami operasional bisnis online end-to-end.",
    ],
    detail:
      "Peserta akan diajak berpikir strategis layaknya CEO startup. Pembelajaran tidak hanya teori, tapi juga simulasi membangun bisnis dari nol, mulai dari validasi ide hingga strategi peluncuran produk. Topik meliputi: analisis kompetitor, strategi harga, manajemen churn rate, dan penggunaan teknologi untuk efisiensi operasional bisnis.",
  },

  // 13. Brand Design
  brand_design: {
    title: "Divisi Brand Design & Marketing",
    lead: "Lebih dari sekadar desain grafis, divisi ini mengajarkan cara membangun Identitas Brand yang kuat. Peserta akan belajar menerjemahkan nilai perusahaan menjadi aset visual (Logo, Warna, Tipografi) yang memiliki karakter dan mudah diingat oleh pasar.",
    iconPeluang: "fa-solid fa-palette",
    peluangDesc:
      "Ideal untuk mahasiswa DKV, Desain Grafis, Seni Rupa, atau Komunikasi Visual yang ingin spesialisasi di bidang branding dan identitas korporat.",
    posisi: [
      "Brand Designer",
      "Graphic Designer",
      "Art Director",
      "Creative Director",
    ],
    iconKegiatan: "fa-solid fa-pen-nib",
    kegiatan: [
      "Fundamental Branding: Brand vs Logo vs Identity.",
      "Psikologi Warna & Tipografi dalam Branding.",
      "Merancang Logo: Filosofi, Sketsa, & Digitalisasi (Vector).",
      "Menyusun Brand Guidelines (Graphic Standard Manual).",
      "Desain Aset Marketing (Social Media, Banner, Merchandise).",
      "Layout & Komposisi Visual (Grid System).",
      "Packaging Design Basics (Desain Kemasan).",
      "Visual Storytelling & Moodboard.",
      "Rebranding: Studi Kasus & Strategi Peremajaan Merek.",
      "Proyek Akhir: Pembuatan Identitas Visual Brand (Logo + Panduan).",
    ],
    iconTarget: "fa-solid fa-eye",
    target: [
      "Mampu menciptakan logo yang filosofis dan fungsional.",
      "Mampu menyusun Brand Guideline Book yang profesional.",
      "Menguasai software desain vektor (Illustrator/Corel).",
      "Memahami konsistensi visual lintas platform.",
    ],
    detail:
      "Fokus pembelajaran adalah pada konsep dan eksekusi visual. Peserta akan belajar bahwa desain yang baik bukan hanya 'bagus dilihat', tapi juga 'mengkomunikasikan pesan'. Materi mencakup: teori warna, hierarki visual, teknik vektor, mockup produk, dan standarisasi elemen visual perusahaan.",
  },

  // 14. Data Analyst
  data_analyst: {
    title: "Divisi Data Analyst",
    lead: "Jika Data Scientist memprediksi masa depan, Data Analyst menjelaskan masa kini dan masa lalu. Divisi ini fokus melatih peserta untuk membersihkan, menganalisis, dan memvisualisasikan data historis guna membantu perusahaan mengambil keputusan bisnis yang tepat.",
    iconPeluang: "fa-solid fa-chart-pie",
    peluangDesc:
      "Cocok untuk mahasiswa Sistem Informasi, Bisnis, Akuntansi, atau Statistik yang teliti dan suka mencari pola. Posisi ini dibutuhkan di hampir semua industri (Bank, Retail, Startup).",
    posisi: [
      "Data Analyst",
      "Business Intelligence (BI) Developer",
      "Reporting Specialist",
      "Marketing Analyst",
    ],
    iconKegiatan: "fa-solid fa-table",
    kegiatan: [
      "Pengantar Data Analytics & Siklus Hidup Data.",
      "SQL Fundamental (SELECT, JOIN, Aggregate Functions).",
      "SQL Intermediate (Subqueries, Window Functions).",
      "Data Cleaning & Validation dengan Spreadsheet (Excel/GSheets).",
      "Visualisasi Data & Dashboarding dengan Tableau/Power BI.",
      "Desain Dashboard yang Efektif (User-Centric Reporting).",
      "Analisis Deskriptif & Diagnostik.",
      "Business Acumen: Menerjemahkan Data menjadi Strategi Bisnis.",
      "Automasi Laporan Sederhana.",
      "Studi Kasus: Analisis Penualan & Perilaku Pelanggan.",
      "Proyek Akhir: Membuat Interactive Business Dashboard Lengkap.",
    ],
    iconTarget: "fa-solid fa-magnifying-glass-chart",
    target: [
      "Mahir menggunakan SQL untuk menarik data (Query).",
      "Mampu membuat dashboard interaktif (Tableau/Power BI).",
      "Mampu menyajikan insight bisnis yang dapat ditindaklanjuti.",
      "Memiliki portofolio analisis data bisnis nyata.",
    ],
    detail:
      "Peserta akan diajarkan tools wajib industri: SQL untuk database dan BI Tools (Tableau/Power BI) untuk visualisasi. Fokusnya adalah 'Business Intelligence', yaitu mengubah angka menjadi keputusan. Topik mencakup: kueri database, pembersihan data kotor, pemilihan jenis grafik yang tepat, dan teknik presentasi data kepada manajemen.",
  },

  // 15. Machine Learning
  machine_learning: {
    title: "Divisi Python Machine Learning",
    lead: "Ini adalah divisi tingkat lanjut bagi mereka yang ingin membangun sistem cerdas. Peserta akan belajar algoritma Artificial Intelligence (AI) yang memungkinkan komputer belajar dari data, mulai dari pengenalan pola hingga Deep Learning.",
    iconPeluang: "fa-solid fa-robot",
    peluangDesc:
      "Ideal untuk mahasiswa Informatika, Matematika, atau Fisika yang memiliki dasar logika pemrograman kuat dan tertarik pada AI/Robotika.",
    posisi: [
      "Machine Learning Engineer",
      "AI Specialist",
      "NLP Engineer",
      "Computer Vision Engineer",
    ],
    iconKegiatan: "fa-solid fa-network-wired",
    kegiatan: [
      "Review Python & Matematika untuk ML (Aljabar Linear/Kalkulus).",
      "Konsep Dasar Machine Learning: Training vs Testing.",
      "Supervised Learning (Regression, Decision Trees, SVM).",
      "Unsupervised Learning (K-Means Clustering, PCA).",
      "Evaluasi Model: Accuracy, Precision, Recall, F1-Score.",
      "Feature Engineering & Selection.",
      "Pengantar Deep Learning & Neural Networks.",
      "Framework ML: Scikit-Learn, TensorFlow, atau PyTorch.",
      "Model Deployment: Menyimpan & Menggunakan Model (Pickle/Flask).",
      "Etika AI & Bias Algoritma.",
      "Proyek Akhir: Membangun Model Prediksi/Klasifikasi Siap Pakai.",
    ],
    iconTarget: "fa-solid fa-microchip",
    target: [
      "Memahami berbagai algoritma ML dan kapan menggunakannya.",
      "Mampu melatih, menguji, dan mengoptimalkan model AI.",
      "Menguasai library Scikit-Learn dan dasar Deep Learning.",
      "Mampu men-deploy model ML ke dalam aplikasi sederhana.",
    ],
    detail:
      "Pembelajaran akan sangat teknis dan matematis. Peserta tidak hanya menggunakan library, tapi memahami logika di balik algoritma. Materi meliputi: tuning hyperparameter, penanganan overfitting/underfitting, jaringan saraf tiruan (ANN), dan implementasi model untuk kasus nyata seperti deteksi penipuan atau prediksi harga.",
  },

  // 16. Ethical Hacker
  eth_hacker: {
    title: "Divisi Ethical Hacker (Cybersecurity)",
    lead: "Divisi ini fokus pada metodologi peretasan yang komprehensif dan terstruktur (selaras dengan sertifikasi CEH). Peserta akan belajar mengenali vektor serangan, melakukan scanning jaringan, hingga teknik social engineering untuk menguji ketahanan sistem manusia dan komputer.",
    iconPeluang: "fa-solid fa-user-ninja",
    peluangDesc:
      "Cocok untuk mahasiswa yang ingin mendalami keamanan siber secara menyeluruh, baik dari sisi teknis maupun kebijakan. Karir di bidang audit keamanan dan konsultasi.",
    posisi: [
      "Ethical Hacker",
      "Security Consultant",
      "Red Teamer",
      "Security Auditor",
    ],
    iconKegiatan: "fa-solid fa-laptop-medical",
    kegiatan: [
      "Metodologi Ethical Hacking (Footprinting, Scanning, Enumeration).",
      "System Hacking: Password Cracking & Escalating Privileges.",
      "Malware Threats: Virus, Worm, Trojan, & Ransomware Analysis.",
      "Sniffing: Man-in-the-Middle Attacks.",
      "Social Engineering: Phishing & Human Hacking.",
      "Denial-of-Service (DoS/DDoS) Attacks & Botnets.",
      "Session Hijacking Techniques.",
      "Hacking Web Servers & Web Applications.",
      "SQL Injection & Cross-Site Scripting (XSS) Deep Dive.",
      "Wireless Network Hacking (Wi-Fi Security).",
      "Proyek Akhir: Capture The Flag (CTF) Challenge & Security Audit Report.",
    ],
    iconTarget: "fa-solid fa-flag",
    target: [
      "Memahami pola pikir dan teknik yang digunakan penyerang (Black Hat).",
      "Mampu melakukan audit keamanan menyeluruh.",
      "Memahami cara kerja malware dan serangan jaringan.",
      "Mampu memberikan rekomendasi mitigasi (pencegahan).",
    ],
    detail:
      "Pembelajaran mencakup simulasi serangan di lingkungan lab yang aman. Peserta akan belajar menggunakan berbagai tools standar industri untuk mengeksploitasi kelemahan sistem. Topik mencakup: teknik pengelabuan (sosial), pembobolan password, penyadapan jaringan, serangan nirkabel, dan injeksi kode berbahaya.",
  },

  // 17. Admin Excel
  admin: {
    title: "Divisi Business Admin & Tech Operation",
    lead: "Divisi ini melatih peserta untuk menjadi tulang punggung operasional perusahaan modern. Fokus utamanya adalah penguasaan Microsoft Excel tingkat lanjut untuk automasi administrasi, pengelolaan database operasional, dan efisiensi alur kerja bisnis berbasis teknologi.",
    iconPeluang: "fa-solid fa-file-excel",
    peluangDesc: "Semua jurusan.",
    posisi: [
      "Administrative Officer",
      "Operations Specialist",
      "Data Entry & Processing Staff",
      "Executive Assistant",
    ],
    iconKegiatan: "fa-solid fa-table-list",
    kegiatan: [
      "Manajemen Administrasi Perkantoran Modern (Digital Filing).",
      "Microsoft Excel Fundamental (Formatting, Basic Formula).",
      "Pengolahan Data Lanjut: IF, VLOOKUP, HLOOKUP, XLOOKUP.",
      "Analisis Data dengan Pivot Table & Slicers.",
      "Visualisasi Data Operasional (Excel Dashboarding).",
      "Automasi Dokumen (Mail Merge & Integration).",
      "Manajemen Database Sederhana & Validasi Data.",
      "Google Workspace for Business (Docs, Sheets, Slides, Forms).",
      "Standard Operating Procedure (SOP) Development.",
      "Business Correspondence & Email Etiquette.",
      "Proyek Akhir: Membangun Sistem Dashboard Operasional Otomatis.",
    ],
    iconTarget: "fa-solid fa-check-double",
    target: [
      "Menguasai Excel tingkat lanjut (termasuk rumus kompleks).",
      "Mampu membuat dashboard monitoring operasional.",
      "Memahami manajemen arsip digital yang rapi.",
      "Mampu menyusun SOP operasional yang efektif.",
    ],
    detail:
      "o	Peserta akan dilatih untuk tidak sekadar 'bisa mengetik', tetapi bisa 'mengelola data'. Pembelajaran fokus pada efisiensi kerja menggunakan teknologi. Materi mencakup: studi kasus administrasi kantor, pembersihan data yang berantakan, pembuatan laporan otomatis, dan teknik presentasi data operasional.",
  },

  // 18. Banking Finance
  bank_finance: {
    title: "Divisi Banking & Finance",
    lead: "Divisi ini adalah tempat bagi calon bankir dan analis keuangan korporat. Peserta akan mendalami cara menilai kesehatan sebuah perusahaan, menghitung valuasi bisnis (seberapa mahal harga perusahaan), dan memahami struktur kredit perbankan.",
    iconPeluang: "fa-solid fa-building-columns",
    peluangDesc:
      "Ideal untuk mahasiswa Akuntansi, Manajemen Keuangan, atau Perbankan yang menargetkan karir di bank (MT Program), firma sekuritas, atau konsultan keuangan.",
    posisi: [
      "Credit Analyst",
      "Corporate Finance Staff",
      "Investment Banking Analyst",
      "Valuation Specialist",
    ],
    iconKegiatan: "fa-solid fa-calculator",
    kegiatan: [
      "Lanskap Industri Perbankan & Lembaga Keuangan.",
      "Analisis Laporan Keuangan (Financial Statement Analysis).",
      "Rasio Keuangan Kunci (Likuiditas, Solvabilitas, Profitabilitas).",
      "Konsep Time Value of Money.",
      "Metode Valuasi: Discounted Cash Flow (DCF).",
      "Metode Valuasi: Relative Valuation (Market Multiples).",
      "Analisis Kredit Korporasi (5C's of Credit).",
      "Financial Modeling Dasar di Excel.",
      "Merger & Acquisition (M&A) Overview.",
      "Studi Kasus: Valuasi Startup vs Perusahaan Tbk.",
      "Proyek Akhir: Laporan Valuasi Lengkap Sebuah Perusahaan.",
    ],
    iconTarget: "fa-solid fa-money-bill-trend-up",
    target: [
      "Mampu membaca dan membedah laporan keuangan (Neraca, Laba Rugi).",
      "Mampu membangun model keuangan (Financial Model) di Excel.",
      "Memahami cara menghitung nilai wajar saham/perusahaan.",
      "Memahami kriteria kelayakan kredit bank.",
    ],
    detail:
      "Pembelajaran bersifat analitis dan penuh hitungan. Peserta diajarkan teknik yang digunakan oleh analis investasi di dunia nyata. Topik meliputi: proyeksi arus kas (forecasting), penentuan discount rate (WACC), analisis risiko kredit, dan penyusunan memo investasi.",
  },

  // 19. Asset Mgt
  asset_mgt: {
    title: "Divisi Asset & Liabilities Management",
    lead: "Ini adalah divisi spesialis 'Jantung Perbankan'. Peserta akan belajar bagaimana bank mengelola risiko neraca mereka—menyeimbangkan antara dana yang dihimpun (tabungan/deposito) dan dana yang disalurkan (kredit) agar bank tetap likuid dan profit di tengah fluktuasi bunga.",
    iconPeluang: "fa-solid fa-scale-unbalanced",
    peluangDesc:
      "Sangat spesifik dan high-demand untuk mahasiswa Keuangan, Aktuaria, atau Ekonomi yang ingin berkarir di bagian Treasury atau Risk Management perbankan.",
    posisi: [
      "ALM Analyst",
      "Treasury Dealer/Staff",
      "Market Risk Analyst",
      "Liquidity Manager",
    ],
    iconKegiatan: "fa-solid fa-bank",
    kegiatan: [
      "Konsep Dasar ALM & Neraca Bank.",
      "Risiko Suku Bunga (Interest Rate Risk) & Repricing Gap.",
      "Risiko Likuiditas (Liquidity Risk) & LCR/NSFR.",
      "Manajemen Dana Pihak Ketiga (Funding Strategy).",
      "Transfer Pricing (FTP) dalam Bank.",
      "Strategi Pengelolaan Aset (Investment Portfolio).",
      "Regulasi Perbankan (Basel III Overview).",
      "Simulasi Rapat ALCO (Asset-Liability Committee).",
      "Analisis Sensitivitas & Stress Testing.",
      "Hedging Dasar (Lindung Nilai).",
      "Proyek Akhir: Simulasi Strategi ALM untuk Bank Virtual.",
    ],
    iconTarget: "fa-solid fa-chart-area",
    target: [
      "Memahami profil risiko neraca bank.",
      "Mampu menghitung Gap Analysis (selisih aset-liabilitas).",
      "Memahami instrumen Treasury dasar.",
      "Mampu menyusun rekomendasi strategi likuiditas.",
    ],
    detail:
      "Materi ini jarang diajarkan secara mendalam di kuliah umum. Peserta akan memahami bagaimana bank 'mencetak uang' dengan aman, Topik mencakup: manajemen cash flow bank, dampak kenaikan suku bunga BI, kepatuhan regulasi likuiditas internasional, dan strategi optimalisasi margin bunga bersih (NIM).",
  },

  // 20. Univ Terbuka
  ut: {
    title: "Divisi Universitas Terbuka",
    lead: "Divisi khusus ini dirancang untuk memfasilitasi operasional, layanan mahasiswa, dan pengembangan program kemitraan strategis. Peserta akan belajar manajemen pendidikan jarak jauh, layanan akademik digital, dan administrasi kemahasiswaan khusus ekosistem UT.",
    iconPeluang: "fa-solid fa-school",
    peluangDesc:
      "Cocok untuk mahasiswa Administrasi Pendidikan, Ilmu Komunikasi, atau Manajemen yang tertarik pada tata kelola institusi pendidikan tinggi jarak jauh.",
    posisi: [
      "Academic Support Staff",
      "Student Service Officer",
      "Education Program Coordinator",
      "Partnership Administrator",
    ],
    iconKegiatan: "fa-solid fa-headset",
    kegiatan: [
      "Sistem Pendidikan Jarak Jauh (Distance Learning).",
      "Manajemen Layanan Mahasiswa Online.",
      "Administrasi Akademik Digital.",
      "Komunikasi Efektif dalam Layanan Publik.",
      "Pengelolaan Event Kemahasiswaan Virtual.",
      "Database Management untuk Data Mahasiswa.",
      "Problem Solving dalam Layanan Akademik.",
      "Kolaborasi & Manajemen Kemitraan Kampus.",
      "Literasi Digital untuk Pendukung Akademik.",
      "Reporting & Evaluasi Program.",
      "Proyek Akhir: Perancangan Peningkatan Layanan Mahasiswa.",
    ],
    iconTarget: "fa-solid fa-users-viewfinder",
    target: [
      "o	Memahami alur operasional pendidikan jarak jauh.",
      "o	Mampu menangani keluhan dan kebutuhan administrasi mahasiswa.",
      "o	Memiliki kemampuan organisasi event akademik.",
      "o	Menguasai administrasi perkantoran berbasis universitas.",
    ],
    detail:
      "Peserta akan terjun langsung dalam simulasi pengelolaan layanan akademik yang efisien dan responsif. Fokus utama: manajemen ticketing layanan, komunikasi persuasif, pengarsipan digital, dan strategi pelibatan (engagement) mahasiswa jarak jauh.",
  },

  // 21. General
  general_placement: {
    title: "Program Penempatan Sesuai Jurusan",
    lead: "Program fleksibel ini dirancang untuk mahasiswa dengan jurusan spesifik yang tidak tercakup dalam 19 divisi lainnya (misal: Pertanian, Teknik Sipil, Sastra, dll). Kurikulum akan disesuaikan (tailor-made) untuk menerapkan ilmu kuliah Anda ke dalam konteks industri teknologi dan bisnis modern.",
    iconPeluang: "fa-solid fa-user-graduate",
    peluangDesc:
      "Terbuka untuk SEMUA Jurusan. Kami akan mencarikan mentor dan proyek yang relevan dengan latar belakang akademis Anda atau minat eksplorasi baru Anda.",
    posisi: [
      "Management Trainee",
      "Project Officer (General)",
      "Subject Matter Specialist",
      "Research Assistant",
    ],
    iconKegiatan: "fa-solid fa-puzzle-piece",
    kegiatan: [
      "Assessment Kompetensi & Minat Awal.",
      "Penyusunan Individual Learning Plan (ILP).",
      "Adaptasi Ilmu Jurusan ke Industri Digital (Digital Mindset).",
      "Project Management Dasar & Soft Skills.",
      "Penugasan Proyek Lintas Divisi (Cross-Functional).",
      "Mentoring Spesifik sesuai Bidang Peminatan.",
      "Riset & Analisis sesuai Latar Belakang Studi.",
      "Kolaborasi Tim & Komunikasi Profesional.c",
      "Problem Solving & Critical Thinking.",
      "Career Coaching & CV Review.",
      "Proyek Akhir: Inovasi Bidang Studi Anda dalam Ekosistem Digital.",
    ],
    iconTarget: "fa-solid fa-star",
    target: [
      "Mampu menerapkan teori jurusan dalam konteks kerja nyata.",
      "Memiliki portofolio proyek yang relevan dengan prodi.",
      "Mengembangkan soft skill profesional (kerjasama, komunikasi).",
      "Memiliki pemahaman digital yang kuat di bidangnya.",
    ],
    detail:
      "Kurikulum bersifat adaptif. Peserta akan diajak berdiskusi dengan mentor untuk menentukan output magang yang linier dengan syarat konversi SKS jurusan masing-masing. Contoh: Mahasiswa Pertanian bisa ditempatkan di proyek AgriTech, Mahasiswa Sastra di Content/Translation, Mahasiswa Teknik Sipil di Project Planning/Asset.",
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
