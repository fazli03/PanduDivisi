document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("divisi-grid");

  // 1. DATA DIVISI (DENGAN ID YANG BENAR)
  // PENTING: 'id' di sini harus SAMA PERSIS dengan kunci di detail-divisi.js
  const divisions = [
    {
      id: "edtech", // <-- ID INI KUNCINYA
      title: "Divisi Education Technology (Pendidikan)",
      image: "assets/edutech.png",
    },
    {
      id: "data_scientist",
      title: "Divisi Python Data Scientists",
      image: "assets/pythonds.png",
    },
    {
      id: "pentester",
      title: "Divisi Cybersecurity (Penetration Tester)",
      image: "assets/cybersequrity.png",
    },
    {
      id: "pm",
      title: "Divisi Tech Project Management",
      image: "assets/techprojectmanagement.png",
    },
    {
      id: "web_uiux",
      title: "Divisi Web Dev & UIUX",
      image: "assets/webuiux.png",
    },
    {
      id: "hr",
      title: "Divisi Human Resources (SDM) Analyst",
      image: "assets/humanresource.png",
    },
    {
      id: "legal",
      title: "Divisi Legal Analyst (Tech Law)",
      image: "assets/legalauditor.png",
    },
    {
      id: "cyber_investigator",
      title: "Divisi Cybersecurity Investigator",
      image: "assets/cyberinvestig.png",
    },
    {
      id: "fin_analyst",
      title: "Divisi Financial Market Analyst",
      image: "assets/financialmarketanalyst.png",
    },
    {
      id: "pr",
      title: "Divisi Digital Public Diplomacy",
      image: "assets/digitalpublicdiplomacy.png",
    },
    {
      id: "social_media",
      title: "Divisi Digital & Social Media Marketing",
      image: "assets/digital&socialmarketing.png",
    },
    {
      id: "biz_digital",
      title: "Divisi Bisnis Digital",
      image: "assets/bisnisdigital.png",
    },
    {
      id: "brand_design",
      title: "Divisi Brand Design & Marketing",
      image: "assets/branddesgin&marker.png",
    },
    {
      id: "data_analyst",
      title: "Divisi Data Analyst",
      image: "assets/dataanalyst.png",
    },
    {
      id: "machine_learning", // Perhatikan: kuncinya 'machine_learning' bukan 'ml' di data master saya sebelumnya
      title: "Divisi Python Machine Learning",
      image: "assets/pythonmachinelerarning.png",
    },
    {
      id: "eth_hacker",
      title: "Divisi Ethical Hacker (Cybersecurity)",
      image: "assets/ethicalhacker.png",
    },
    {
      id: "admin",
      title: "Divisi Business Admin & Tech Operation",
      image: "assets/businessadm&tech.png",
    },
    {
      id: "bank_finance",
      title: "Divisi Banking & Finance",
      image: "assets/banking&finance.png",
    },
    {
      id: "asset_mgt",
      title: "Divisi Asset & Liabilities Management",
      image: "assets/asset&liabilities.png",
    },
    {
      id: "ut", // Pastikan di detail-divisi.js ada data untuk key 'ut' atau tambahkan nanti
      title: "Divisi Universitas Terbuka",
      image: "assets/utr.jpg",
    },
    {
      id: "general_placement", // Sama, pastikan ada datanya
      title: "Minta Ditempatkan Sesuai Jurusan",
      image: "assets/divisi/general.jpg",
    },
  ];

  // 2. FUNGSI RENDER KARTU
  function renderCards(data) {
    gridContainer.innerHTML = ""; // Bersihkan container

    data.forEach((divisi) => {
      // Buat Elemen HTML Kartu
      const card = document.createElement("div");
      card.className = "divisi-item-card";

      // Fallback gambar
      const imgPath = divisi.image;
      const fallbackImg =
        "https://placehold.co/600x400/1e1e2f/fff?text=Vinix+7";

      // PENTING: Link sekarang menggunakan divisi.id
      card.innerHTML = `
        <div class="card-thumb">
          <img src="${imgPath}" alt="${divisi.title}" onerror="this.src='${fallbackImg}'">
        </div>
        <div class="card-details">
          <h3>${divisi.title}</h3>
          <a href="detail-divisi.html?id=${divisi.id}" class="btn-daftar-divisi">
            Lihat Detail Divisi <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      `;

      gridContainer.appendChild(card);
    });
  }

  // 3. RENDER AWAL
  renderCards(divisions);

  // 4. FITUR PENCARIAN
  window.filterDivisi = function () {
    const input = document.getElementById("search-input").value.toLowerCase();

    const filteredData = divisions.filter((divisi) =>
      divisi.title.toLowerCase().includes(input)
    );

    renderCards(filteredData);
  };
});
