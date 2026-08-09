/* =========================================================
   DATA KONTEN — MEDIA PEMBELAJARAN SMAW FASE F
   Silakan sunting teks di bawah ini sesuai kebutuhan kelas Anda.
   ========================================================= */

const SITE = {
  judul: "Bengkel Las Digital",
  subjudul: "Media Pembelajaran Interaktif — Teknik Pengelasan SMAW",
  mapel: "Mata Pelajaran Pilihan: Pengelasan",
  jurusan: "Teknik Pemesinan — Fase F (Kelas XI–XII)",
};

/* ---------------------- CP / TP / ATP ---------------------- */
const CP_TEXT = `Pada akhir Fase F, peserta didik mampu mengidentifikasi spesifikasi mesin SMAW dan elektroda SMAW, menyiapkan mesin SMAW, menyiapkan bahan las, serta melaksanakan pengelasan pelat ke pelat pada baja karbon untuk posisi di bawah tangan, mendatar, dan vertikal, sesuai dengan acuan Welding Procedure Specification (WPS), dengan senantiasa menerapkan prinsip Kesehatan, Keselamatan Kerja, dan Lingkungan Hidup (K3LH).`;

const TP_LIST = [
  { kode:"TP.1", isi:"Peserta didik dapat mengidentifikasi jenis, fungsi, dan cara kerja peralatan utama serta peralatan bantu las SMAW dengan benar." },
  { kode:"TP.2", isi:"Peserta didik dapat menerapkan prosedur Kesehatan, Keselamatan Kerja, dan Lingkungan Hidup (K3LH) selama praktik pengelasan SMAW, termasuk pemilihan dan pemakaian Alat Pelindung Diri (APD) yang sesuai." },
  { kode:"TP.3", isi:"Peserta didik dapat menjelaskan prinsip dasar terjadinya busur listrik dan proses transfer logam cair pada pengelasan SMAW." },
  { kode:"TP.4", isi:"Peserta didik dapat melakukan setting mesin las SMAW (pemilihan arus AC/DC, polaritas, dan pemasangan elektroda) sesuai kebutuhan pekerjaan." },
  { kode:"TP.5", isi:"Peserta didik dapat menentukan parameter pengelasan (arus, panjang busur, sudut elektroda, dan kecepatan pengelasan) yang tepat untuk menghasilkan sambungan las yang baik." },
  { kode:"TP.6", isi:"Peserta didik dapat mempraktikkan teknik penyalaan busur las dengan metode goresan (scratching) dan metode ketukan (tapping) secara aman dan terkontrol." },
];

const ATP_FLOW = [
  { tahap:"Tahap 1", judul:"Mengenal Perangkat Kerja", isi:"Mempelajari peralatan utama & bantu las SMAW (TP.1) sebagai fondasi sebelum masuk ke area praktik." },
  { tahap:"Tahap 2", judul:"Budaya Kerja Aman", isi:"Menanamkan kesadaran K3LH dan pemakaian APD (TP.2) sebagai syarat mutlak sebelum menyalakan mesin las." },
  { tahap:"Tahap 3", judul:"Memahami Proses Fisik", isi:"Memahami prinsip busur listrik dan transfer logam (TP.3) agar tindakan praktik didasari pemahaman konsep, bukan hafalan." },
  { tahap:"Tahap 4", judul:"Menyiapkan Mesin", isi:"Berlatih setting mesin las: polaritas dan pemasangan elektroda (TP.4)." },
  { tahap:"Tahap 5", judul:"Menentukan Parameter", isi:"Menentukan arus, panjang busur, sudut, dan kecepatan las yang sesuai (TP.5)." },
  { tahap:"Tahap 6", judul:"Praktik Penyalaan Busur", isi:"Mempraktikkan teknik menyalakan busur las secara aman dan terkontrol (TP.6), sebagai pintu masuk ke praktik pengelasan penuh." },
];

const KOMPETENSI_MAP = [
  { area:"Pengetahuan Dasar", butir:["Fungsi peralatan las SMAW","Prinsip busur listrik & transfer logam"] },
  { area:"Sikap Kerja", butir:["Kedisiplinan K3LH","Kepedulian terhadap keselamatan diri & rekan kerja"] },
  { area:"Keterampilan Teknis", butir:["Setting mesin & polaritas","Penentuan parameter las","Penyalaan busur las"] },
  { area:"Kesiapan Industri", butir:["Kemampuan membaca WPS","Kebiasaan kerja sesuai standar industri pengelasan"] },
];

/* ---------------------- PROFIL PENGEMBANG ---------------------- */
const PROFIL = {
  /* Untuk memasang foto: taruh file fotomu (misal "profil.jpg") di folder yang sama
     dengan index.html, lalu ganti nilai "foto" di bawah ini menjadi nama file tsb.
     Kalau file belum ada / salah nama, ikon default akan tetap tampil otomatis. */
  foto:"profil.jpg",
  nama:"Mohamad Ali Sovwan",
  nim:"253151743666",
  prodi:"PPG Calon Guru — Bidang Studi Teknik Mesin",
  institusi:"Universitas Negeri Malang (UM)",
  kontak:"alisovwan@gmail.com",
  bio:"Media ini dikembangkan sebagai bagian dari tugas proyek pembelajaran inovatif pada program PPG Calon Guru, untuk mendukung pembelajaran mata pelajaran pilihan Pengelasan, konsentrasi Teknik Pemesinan, Fase F."
};

/* ---------------------- DAFTAR PUSTAKA ---------------------- */
const PUSTAKA = [
  "Wiryosumarto, H., & Okumura, T. (2000). <i>Teknik Pengelasan Logam</i>. Jakarta: Pradnya Paramita.",
  "Sonawan, H., & Suratman, R. (2006). <i>Pengantar untuk Memahami Proses Pengelasan Logam</i>. Bandung: Alfabeta.",
  "American Welding Society. <i>AWS D1.1/D1.1M — Structural Welding Code, Steel</i>. Miami: AWS.",
  "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. <i>Capaian Pembelajaran SMK — Teknik Pengelasan, Fase F</i>. Diakses dari guru.kemdikbud.go.id.",
  "Direktorat SMK, Kemendikbudristek. <i>Modul Ajar Konsentrasi Keahlian Teknik Pengelasan dan Fabrikasi Logam</i>.",
  "Kementerian Kesehatan, Tenaga Kerja, dan Kesejahteraan Jepang (MHLW). <i>Kesehatan dan Keselamatan Kerja (K3) di Pekerjaan Pengelasan</i> (versi Bahasa Indonesia).",
  "Badan Standardisasi Nasional. <i>SNI terkait Keselamatan dan Kesehatan Kerja Bidang Pengelasan</i>.",
];

/* ---------------------- MATERI ---------------------- */
const MATERI = {

  peralatan: {
    title:"Peralatan Las SMAW",
    eyebrow:"Materi 01",
    video:"dc7z154BqxU",
    videoCap:"Video: Peralatan Utama Las SMAW (YouTube)",
    narasi:`Peralatan las SMAW dibagi menjadi dua kelompok besar, yaitu peralatan utama dan peralatan bantu. Peralatan utama adalah perangkat yang terhubung langsung ke mesin las dan berfungsi menghasilkan busur listrik, terdiri dari mesin las, kabel las, pemegang elektroda, dan klem massa. Peralatan bantu adalah perlengkapan pendukung yang mempermudah proses pengelasan dan pembersihan, seperti palu terak, sikat kawat baja, tang panas, dan meja kerja las.`,
    html:`
      <p>Sebelum menyalakan busur, seorang welder wajib mengenali dua kelompok peralatan las SMAW: <b>peralatan utama</b> dan <b>peralatan bantu</b>. Memahami fungsi masing-masing alat akan membantumu bekerja lebih efisien dan aman.</p>

      <h3>A. Peralatan Utama</h3>
      <table>
        <tr><th>Alat</th><th>Fungsi</th></tr>
        <tr><td>Mesin las (welding machine)</td><td>Mengubah energi listrik menjadi energi panas untuk melelehkan elektroda dan logam induk. Tersedia dalam tipe arus AC (transformator step-down), DC (dengan rectifier/penyearah), atau AC-DC gabungan.</td></tr>
        <tr><td>Kabel las (welding cable)</td><td>Menghantarkan arus listrik dari mesin las menuju elektroda (kabel elektroda) dan menuju benda kerja (kabel massa). Kabel harus berinti banyak agar fleksibel dan tahan terhadap arus tinggi.</td></tr>
        <tr><td>Pemegang elektroda (electrode holder)</td><td>Menjepit elektroda sekaligus mengalirkan arus listrik dari kabel ke elektroda. Gagangnya dilapisi bahan isolator agar aman digenggam.</td></tr>
        <tr><td>Klem massa (ground clamp)</td><td>Menghubungkan kabel massa ke benda kerja agar rangkaian listrik las tertutup dan arus dapat mengalir dengan stabil.</td></tr>
      </table>

      <h3>B. Peralatan Bantu</h3>
      <table>
        <tr><th>Alat</th><th>Fungsi</th></tr>
        <tr><td>Palu terak (chipping hammer)</td><td>Membersihkan terak (slag) yang menutupi jalur las setelah proses pengelasan selesai. Ujungnya berbentuk pahat dan runcing.</td></tr>
        <tr><td>Sikat kawat baja (wire brush)</td><td>Membersihkan sisa terak halus dan karat pada permukaan logam, baik sebelum maupun sesudah pengelasan.</td></tr>
        <tr><td>Tang panas (hot work tongs)</td><td>Memegang atau memindahkan benda kerja yang masih panas setelah proses las tanpa harus menyentuhnya langsung.</td></tr>
        <tr><td>Meja kerja las &amp; ragum</td><td>Menopang dan mencekam benda kerja agar posisi pengelasan stabil dan aman.</td></tr>
      </table>

      <div class="callout tip"><b>Tips Bengkel:</b> Selalu periksa kondisi kabel las sebelum digunakan. Kabel yang terkelupas isolasinya berisiko menimbulkan sengatan listrik atau korsleting.</div>
    `
  },

  k3: {
    title:"K3 Pengelasan SMAW",
    eyebrow:"Materi 02",
    svgAnimation:"apd",
    narasi:`Pekerjaan pengelasan SMAW mengandung beberapa potensi bahaya, yaitu radiasi cahaya busur berupa sinar ultraviolet dan inframerah, asap dan gas hasil pembakaran fluks atau fume, percikan api dan logam panas, sengatan listrik, serta kebisingan. Untuk mengendalikan bahaya tersebut, welder wajib menggunakan Alat Pelindung Diri, meliputi topeng las dengan kaca gelap sesuai shade yang dianjurkan, sarung tangan las berbahan kulit, apron tahan api, pakaian kerja atau wearpack, sepatu safety, serta alat pernapasan bila diperlukan.`,
    html:`
      <p>Kesehatan dan Keselamatan Kerja (K3) bukan sekadar aturan formalitas — ini adalah syarat mutlak sebelum tangan menyentuh holder elektroda. Proses SMAW menyimpan beberapa potensi bahaya nyata bagi welder.</p>

      <h3>A. Potensi Bahaya Pengelasan SMAW</h3>
      <div class="grid-2">
        <div class="panel" style="margin-bottom:0;">
          <b>☀️ Radiasi Busur</b>
          <p style="margin:6px 0 0;font-size:14px;">Sinar ultraviolet dan inframerah dari busur listrik dapat merusak retina mata (<i>arc eye/flash burn</i>) dan membakar kulit yang terpapar.</p>
        </div>
        <div class="panel" style="margin-bottom:0;">
          <b>💨 Asap &amp; Fume Las</b>
          <p style="margin:6px 0 0;font-size:14px;">Pembakaran fluks elektroda menghasilkan gas dan partikel logam yang bila terhirup terus-menerus berisiko mengganggu saluran pernapasan.</p>
        </div>
        <div class="panel" style="margin-bottom:0;">
          <b>⚡ Sengatan Listrik</b>
          <p style="margin:6px 0 0;font-size:14px;">Kabel yang terkelupas atau kontak langsung dengan bagian bertegangan dapat menyebabkan sengatan listrik, terutama di area kerja yang lembap.</p>
        </div>
        <div class="panel" style="margin-bottom:0;">
          <b>🔥 Percikan &amp; Panas</b>
          <p style="margin:6px 0 0;font-size:14px;">Percikan las (spatter) dan logam panas dapat menyebabkan luka bakar pada kulit maupun memicu kebakaran bila mengenai bahan mudah terbakar.</p>
        </div>
      </div>

      <h3>B. Alat Pelindung Diri (APD) Wajib</h3>
      <ul>
        <li><b>Topeng/helm las</b> — kaca filter gelap (shade) untuk melindungi mata dan wajah dari radiasi busur.</li>
        <li><b>Sarung tangan las</b> — berbahan kulit, melindungi tangan dari percikan api dan panas.</li>
        <li><b>Apron/jaket kulit tahan api</b> — melindungi tubuh bagian depan dari percikan las.</li>
        <li><b>Wearpack/pakaian kerja</b> — bahan katun tebal, lengan panjang, tidak mudah terbakar dan tidak longgar.</li>
        <li><b>Sepatu safety</b> — melindungi kaki dari benda jatuh dan percikan logam panas.</li>
        <li><b>Masker/respirator &amp; ear plug</b> — mengurangi paparan asap las dan kebisingan pada area kerja tertentu.</li>
      </ul>

      <div class="callout warn"><b>Perhatian:</b> Jangan pernah menyalakan busur las tanpa topeng las terpasang, meski hanya untuk "uji sebentar". Paparan sinar busur dalam hitungan detik pun dapat menyebabkan flash burn pada mata.</div>

      <h3>C. Prosedur Kerja Aman</h3>
      <ol>
        <li>Pastikan area kerja bebas dari bahan mudah terbakar dan memiliki ventilasi atau exhaust yang memadai.</li>
        <li>Periksa kondisi kabel, holder, dan klem massa sebelum mesin dinyalakan.</li>
        <li>Siapkan alat pemadam api ringan (APAR) di dekat area praktik.</li>
        <li>Gunakan seluruh APD secara lengkap sebelum memulai pengelasan.</li>
        <li>Setelah selesai, matikan mesin, bersihkan area kerja, dan simpan elektroda sisa di tempat yang kering.</li>
      </ol>
    `
  },

  transfer: {
    title:"Prinsip dan Transfer Logam Las SMAW",
    eyebrow:"Materi 03",
    video:"60QwWL4vd0M",
    videoCap:"Video: Proses Las Busur Manual — Video Pembelajaran SMK (YouTube)",
    narasi:`Pengelasan SMAW bekerja berdasarkan prinsip busur listrik. Ketika ujung elektroda didekatkan pada logam induk hingga terjadi hubungan singkat, timbul busur listrik yang menghasilkan panas hingga sekitar lima ribu derajat Celsius. Panas ini melelehkan ujung elektroda dan sebagian permukaan logam induk secara bersamaan. Cairan logam dari elektroda kemudian berpindah menuju kolam las melalui proses yang disebut transfer logam, yang pada SMAW umumnya terjadi dalam bentuk transfer globular dan transfer hubung singkat, bergantung pada jenis elektroda, besar arus, dan polaritas yang digunakan. Lapisan fluks pada elektroda meleleh menghasilkan gas pelindung dan terak yang melindungi logam cair dari kontaminasi udara luar.`,
    html:`
      <p>Untuk bisa mengendalikan hasil las, seorang welder perlu memahami apa yang sebenarnya terjadi di ujung elektroda saat busur menyala.</p>

      <h3>A. Prinsip Dasar Busur Listrik</h3>
      <p>Busur listrik terbentuk ketika terjadi hubungan singkat antara ujung elektroda dan permukaan logam induk, lalu elektroda ditarik sedikit menjauh hingga terbentuk celah udara yang dilalui aliran listrik. Loncatan elektron pada celah ini menghasilkan panas yang sangat tinggi, sekitar 3.000–5.000 °C, cukup untuk melelehkan logam secara instan.</p>
      <p>Panas busur mencairkan dua bagian sekaligus: ujung elektroda (termasuk inti logam dan fluksnya) dan sebagian kecil permukaan logam induk yang disebut kolam las (weld pool). Fluks yang meleleh menghasilkan gas pelindung di sekitar busur serta lapisan terak (slag) yang menutupi jalur las setelah membeku — keduanya berfungsi mencegah oksigen dan nitrogen di udara mengontaminasi logam cair.</p>

      <h3>B. Transfer Logam pada SMAW</h3>
      <p>Transfer logam adalah proses berpindahnya butiran logam cair dari ujung elektroda menuju kolam las. Pada pengelasan SMAW, dikenal dua pola transfer logam utama:</p>
      <ul>
        <li><b>Transfer globular</b> — logam cair pada ujung elektroda membentuk butiran (globul) yang relatif besar sebelum jatuh ke kolam las. Umumnya terjadi pada arus yang lebih rendah hingga menengah.</li>
        <li><b>Transfer hubung singkat (short-circuiting)</b> — ujung elektroda menyentuh kolam las secara berulang dalam waktu sangat singkat, memindahkan logam cair sedikit demi sedikit. Pola ini menghasilkan busur yang lebih stabil untuk elektroda berdiameter kecil.</li>
      </ul>
      <p>Pola transfer yang terjadi dipengaruhi oleh jenis salutan (fluks) elektroda, besar arus pengelasan, dan polaritas yang dipilih — ketiga hal ini akan kita bahas lebih dalam di materi Setting dan Parameter Pengelasan.</p>

      <div class="callout"><b>Mengapa penting?</b> Memahami transfer logam membantumu membaca gejala di lapangan — misalnya, percikan (spatter) berlebih sering menandakan arus terlalu tinggi untuk pola transfer yang sedang terjadi.</div>
    `
  },

  setting: {
    title:"Setting Las SMAW",
    eyebrow:"Materi 04",
    svgAnimation:"panel",
    narasi:`Sebelum mengelas, mesin las SMAW perlu disiapkan melalui beberapa langkah. Pertama, pastikan sumber listrik terhubung dengan baik. Kedua, pasang kabel massa pada terminal mesin dan jepitkan klem massa ke benda kerja atau meja las. Ketiga, pasang kabel elektroda pada terminal yang sesuai dan jepitkan elektroda pada holder. Keempat, tentukan jenis arus dan polaritas sesuai kebutuhan pekerjaan. Terdapat tiga pilihan polaritas, yaitu arus bolak-balik AC, arus searah dengan elektroda positif atau DCEP yang menghasilkan penetrasi dalam, dan arus searah dengan elektroda negatif atau DCEN yang menghasilkan penetrasi dangkal.`,
    html:`
      <p>Setting yang tepat adalah setengah dari keberhasilan pengelasan. Ikuti langkah berikut setiap kali menyiapkan mesin las SMAW.</p>

      <h3>A. Langkah Persiapan Mesin</h3>
      <ol>
        <li>Pastikan mesin las terhubung ke sumber listrik yang sesuai dan dalam kondisi mati sebelum memasang kabel.</li>
        <li>Pasang kabel massa ke terminal mesin, lalu jepitkan klem massa ke benda kerja atau meja las hingga kontak logam benar-benar rapat.</li>
        <li>Pasang kabel elektroda ke terminal yang sesuai, lalu jepitkan elektroda pada holder dengan posisi kokoh.</li>
        <li>Tentukan besar arus (ampere) sesuai diameter elektroda yang digunakan — biasanya tertera pada bungkus elektroda.</li>
        <li>Nyalakan mesin dan lakukan uji coba busur pada bahan sisa (scrap) sebelum mengelas benda kerja sesungguhnya.</li>
      </ol>

      <h3>B. Memilih Jenis Arus dan Polaritas</h3>
      <table>
        <tr><th>Jenis</th><th>Karakteristik</th><th>Cocok untuk</th></tr>
        <tr><td>AC (arus bolak-balik)</td><td>Busur relatif kurang stabil pada arus rendah, minim masalah arc blow (busur belok akibat medan magnet).</td><td>Pengelasan pelat tebal, area dengan kabel las yang panjang.</td></tr>
        <tr><td>DCEP (elektroda positif / DC+)</td><td>Panas terpusat lebih banyak di logam induk, menghasilkan penetrasi lebih dalam.</td><td>Pengisian (fill) dan lapisan penutup (capping) pada sambungan.</td></tr>
        <tr><td>DCEN (elektroda negatif / DC−)</td><td>Panas terpusat lebih banyak di elektroda, penetrasi lebih dangkal, mengurangi risiko tembus (burn-through).</td><td>Pengelasan akar (root pass) pada pelat tipis.</td></tr>
      </table>

      <div class="callout tip"><b>Tips:</b> Setiap mesin las memiliki Open Circuit Voltage (OCV) yang berfungsi menyalakan busur pertama kali dan menjaga kestabilan nyala busur. Jangan mengubah setting saat busur masih menyala.</div>
    `
  },

  parameter: {
    title:"Parameter Pengelasan SMAW",
    eyebrow:"Materi 05",
    svgAnimation:"gauge",
    narasi:`Parameter pengelasan SMAW yang perlu diperhatikan meliputi besar arus, panjang busur, sudut elektroda, dan kecepatan pengelasan. Arus yang terlalu rendah menghasilkan penetrasi dangkal dan elektroda mudah menempel, sedangkan arus yang terlalu tinggi menyebabkan percikan berlebih dan risiko logam tembus. Panjang busur ideal kurang lebih sama dengan diameter elektroda yang digunakan. Sudut elektroda dijaga konsisten, biasanya sekitar tujuh puluh lima derajat terhadap benda kerja dengan sedikit kemiringan ke arah gerakan las. Kecepatan pengelasan yang tepat menghasilkan jalur las yang rapi, tidak terlalu tinggi menumpuk maupun terlalu tipis dan berlubang.`,
    html:`
      <p>Empat parameter berikut menentukan kualitas hasil las: <b>arus</b>, <b>panjang busur</b>, <b>sudut elektroda</b>, dan <b>kecepatan pengelasan</b>. Menguasai keempatnya adalah kunci membuat jalur las yang rapi dan kuat.</p>

      <h3>A. Arus Pengelasan (Ampere)</h3>
      <table>
        <tr><th>Diameter Elektroda</th><th>Perkiraan Rentang Arus</th></tr>
        <tr><td>2,6 mm</td><td>≈ 60–90 A</td></tr>
        <tr><td>3,2 mm</td><td>≈ 80–130 A</td></tr>
        <tr><td>4,0 mm</td><td>≈ 120–180 A</td></tr>
      </table>
      <p style="font-size:13px;color:var(--text-dim);">*Angka bersifat perkiraan umum — nilai pasti selalu mengikuti spesifikasi pada kemasan elektroda yang digunakan.</p>

      <div class="grid-2">
        <div class="panel" style="margin-bottom:0;"><b>Arus terlalu rendah</b><p style="font-size:14px;margin:6px 0 0;">Busur sulit menyala stabil, elektroda mudah menempel (sticking), penetrasi dangkal.</p></div>
        <div class="panel" style="margin-bottom:0;"><b>Arus terlalu tinggi</b><p style="font-size:14px;margin:6px 0 0;">Percikan (spatter) berlebih, elektroda cepat habis, risiko logam induk tembus (burn-through).</p></div>
      </div>

      <h3>B. Panjang Busur</h3>
      <p>Panjang busur ideal kurang lebih sama dengan diameter elektroda yang dipakai. Busur yang terlalu panjang membuat nyala tidak stabil dan spatter meningkat; busur yang terlalu pendek berisiko elektroda menempel pada benda kerja.</p>

      <h3>C. Sudut Elektroda</h3>
      <p>Sudut elektroda dijaga konsisten selama pengelasan, umumnya sekitar 70°–80° terhadap benda kerja dengan sedikit kemiringan searah gerakan (drag angle). Perubahan sudut yang tiba-tiba dapat membuat terak masuk ke jalur las (slag inclusion).</p>

      <h3>D. Kecepatan Pengelasan</h3>
      <p>Kecepatan yang terlalu lambat membuat jalur las menumpuk dan lebar berlebihan; terlalu cepat membuat jalur tipis, sempit, dan berpotensi kurang penetrasi. Kecepatan ideal menghasilkan manik las (weld bead) yang rata dengan riak seragam.</p>

      <div class="callout"><b>Ingat:</b> Keempat parameter ini saling memengaruhi — mengubah satu parameter biasanya menuntut penyesuaian pada parameter lain agar hasil las tetap optimal.</div>
    `
  },

  busur: {
    title:"Penyalaan Busur Las SMAW",
    eyebrow:"Materi 06",
    video:"7sQluRe4I5o",
    videoCap:"Video: Cara Menyalakan Busur Las SMAW — Teknik Goresan & Ketukan (YouTube)",
    narasi:`Terdapat dua teknik umum untuk menyalakan busur las SMAW, yaitu teknik goresan dan teknik ketukan. Teknik goresan dilakukan dengan menggoreskan ujung elektroda pada permukaan benda kerja seperti menyalakan korek api, kemudian menariknya sedikit menjauh hingga terbentuk busur listrik. Teknik ini direkomendasikan bagi welder pemula karena lebih mudah dikuasai. Teknik ketukan dilakukan dengan mengetukkan ujung elektroda secara tegak lurus pada benda kerja lalu menariknya kembali. Setelah busur menyala, jaga panjang busur tetap stabil sebelum mulai menggerakkan elektroda di sepanjang jalur las.`,
    html:`
      <p>Menyalakan busur adalah keterampilan dasar pertama yang harus dikuasai sebelum praktik pengelasan sesungguhnya. Ada dua teknik umum yang digunakan.</p>

      <h3>A. Teknik Goresan (Scratching Method)</h3>
      <p>Elektroda digoreskan pada permukaan benda kerja seperti menyalakan korek api, kemudian ditarik menjauh sedikit begitu busur terbentuk. Teknik ini lebih mudah dikuasai sehingga direkomendasikan untuk welder pemula.</p>

      <h3>B. Teknik Ketukan (Tapping Method)</h3>
      <p>Elektroda diketukkan tegak lurus ke permukaan benda kerja lalu segera ditarik menjauh sedikit hingga busur terbentuk. Teknik ini membutuhkan koordinasi tangan yang lebih presisi.</p>

      <h3>C. Setelah Busur Menyala</h3>
      <ol>
        <li>Jaga panjang busur tetap stabil, kira-kira sebesar diameter elektroda.</li>
        <li>Tahan posisi sejenak hingga terbentuk kolam las (weld pool) kecil.</li>
        <li>Mulai gerakkan elektroda perlahan dan konsisten di sepanjang jalur las.</li>
        <li>Jika elektroda menempel (sticking), putar sedikit untuk melepaskannya — jangan menariknya paksa dalam kondisi mesin masih menyala penuh.</li>
      </ol>

      <div class="callout warn"><b>Keselamatan:</b> Pastikan topeng las sudah menutup wajah <i>sebelum</i> elektroda menyentuh benda kerja. Jangan pernah mencoba menyalakan busur "sekilas" tanpa pelindung mata.</div>

      <h3>D. Coba Sendiri: Simulator Penyalaan Busur</h3>
      <p>Sebelum praktik dengan mesin sungguhan, coba dulu simulasi ringan berikut untuk melatih intuisi timing menyalakan busur.</p>
      <div id="arcGameMount"></div>
    `
  },
};

const MATERI_ORDER = ["peralatan","k3","transfer","setting","parameter","busur"];

/* ---------------------- BANK SOAL PILIHAN GANDA ---------------------- */
const BANK_PG = [
  {
    q:"Apa fungsi utama klem massa pada rangkaian las SMAW?",
    opts:["Menjepit elektroda yang akan digunakan","Menghubungkan kabel massa ke benda kerja agar rangkaian arus tertutup","Mengatur besar kecilnya arus las","Melindungi mata welder dari radiasi busur"],
    correct:1,
    fb:"Klem massa menyambungkan kabel massa ke benda kerja sehingga rangkaian listrik las menjadi tertutup dan arus dapat mengalir."
  },
  {
    q:"Alat bantu yang digunakan untuk membersihkan terak (slag) setelah proses pengelasan adalah…",
    opts:["Sikat kawat baja","Palu terak","Tang panas","Klem massa"],
    correct:1,
    fb:"Palu terak (chipping hammer) memiliki ujung pahat/runcing yang dirancang khusus untuk memecah dan membersihkan terak las."
  },
  {
    q:"Manakah APD yang WAJIB digunakan untuk melindungi mata dan wajah dari radiasi busur las?",
    opts:["Sarung tangan kulit","Sepatu safety","Topeng/helm las dengan kaca filter","Ear plug"],
    correct:2,
    fb:"Topeng las dengan kaca filter (shade) melindungi mata dan wajah dari radiasi UV/inframerah busur listrik."
  },
  {
    q:"Bahaya kesehatan yang paling terkait dengan asap (fume) las adalah…",
    opts:["Gangguan pendengaran","Gangguan saluran pernapasan","Iritasi kulit ringan","Kram otot tangan"],
    correct:1,
    fb:"Asap las mengandung partikel logam halus yang bila terhirup terus-menerus dapat mengganggu saluran pernapasan."
  },
  {
    q:"Busur listrik pada SMAW terbentuk akibat…",
    opts:["Gesekan antara dua logam","Loncatan elektron pada celah udara antara elektroda dan logam induk","Reaksi kimia fluks dengan udara","Getaran mekanis mesin las"],
    correct:1,
    fb:"Setelah kontak singkat lalu ditarik menjauh, terbentuk celah udara yang dilalui loncatan elektron — inilah yang menghasilkan busur listrik dan panas tinggi."
  },
  {
    q:"Pola transfer logam yang ditandai dengan ujung elektroda menyentuh kolam las berulang dalam waktu sangat singkat disebut…",
    opts:["Transfer spray","Transfer globular","Transfer hubung singkat (short-circuiting)","Transfer laminar"],
    correct:2,
    fb:"Transfer hubung singkat terjadi ketika ujung elektroda menyentuh kolam las berulang-ulang dalam waktu sangat cepat, umum pada elektroda berdiameter kecil."
  },
  {
    q:"Polaritas DCEN (elektroda negatif) pada SMAW umumnya digunakan untuk…",
    opts:["Pengelasan lapisan penutup (capping) yang membutuhkan penetrasi dalam","Pengelasan akar (root pass) pada pelat tipis karena penetrasinya lebih dangkal","Menghasilkan busur paling panas di antara semua polaritas","Mengelas material non-logam"],
    correct:1,
    fb:"Pada DCEN, panas lebih terpusat di elektroda sehingga penetrasi ke logam induk lebih dangkal — cocok untuk root pass pelat tipis agar tidak tembus."
  },
  {
    q:"Jika arus pengelasan terlalu rendah untuk diameter elektroda yang digunakan, gejala yang paling mungkin muncul adalah…",
    opts:["Percikan (spatter) berlebihan","Elektroda mudah menempel (sticking) dan penetrasi dangkal","Logam induk tembus (burn-through)","Busur menjadi sangat stabil"],
    correct:1,
    fb:"Arus terlalu rendah membuat busur sulit stabil sehingga elektroda mudah menempel, dan panas yang dihasilkan tidak cukup untuk penetrasi optimal."
  },
  {
    q:"Panjang busur yang ideal pada pengelasan SMAW kira-kira setara dengan…",
    opts:["Setengah diameter elektroda","Diameter elektroda yang digunakan","Dua kali diameter elektroda","Panjang total elektroda"],
    correct:1,
    fb:"Panjang busur ideal kurang lebih sama dengan diameter elektroda — terlalu panjang membuat busur tidak stabil, terlalu pendek berisiko elektroda menempel."
  },
  {
    q:"Teknik menyalakan busur yang direkomendasikan untuk welder pemula karena lebih mudah dikuasai adalah…",
    opts:["Teknik ketukan (tapping)","Teknik goresan (scratching)","Teknik tekan langsung","Teknik ayun ganda"],
    correct:1,
    fb:"Teknik goresan — menggoreskan elektroda seperti menyalakan korek api — dinilai lebih mudah dikuasai sehingga direkomendasikan bagi pemula."
  },
];

/* ---------------------- BANK SOAL ESAI ---------------------- */
const BANK_ESAI = [
  {
    q:"Jelaskan perbedaan fungsi peralatan utama dan peralatan bantu pada las SMAW, masing-masing berikan dua contoh!",
    rubrik:"Jawaban baik menyebutkan: peralatan utama = perangkat yang menghasilkan busur listrik (contoh: mesin las, kabel las, holder, klem massa); peralatan bantu = perlengkapan pendukung proses/pembersihan (contoh: palu terak, sikat kawat, tang panas, meja las)."
  },
  {
    q:"Mengapa welder tetap wajib mengenakan topeng las meskipun hanya menyalakan busur sebentar untuk uji coba?",
    rubrik:"Jawaban baik menjelaskan bahwa radiasi UV/inframerah busur dapat menyebabkan flash burn/arc eye pada mata bahkan dalam paparan singkat, sehingga tidak ada pengecualian waktu untuk pemakaian APD mata."
  },
  {
    q:"Jelaskan proses terjadinya busur listrik pada SMAW dan bagaimana panas tersebut dimanfaatkan dalam penyambungan logam!",
    rubrik:"Jawaban baik menyebutkan: kontak singkat elektroda-logam induk, ditarik menjauh membentuk celah, loncatan elektron menghasilkan panas tinggi, panas melelehkan elektroda dan logam induk membentuk kolam las yang menyatu."
  },
  {
    q:"Bandingkan karakteristik polaritas DCEP dan DCEN, serta jelaskan kapan masing-masing sebaiknya digunakan!",
    rubrik:"Jawaban baik menyebutkan DCEP = penetrasi dalam (untuk fill/capping), DCEN = penetrasi dangkal (untuk root pass pelat tipis), disertai alasan berdasarkan sebaran panas antara elektroda dan logam induk."
  },
  {
    q:"Seorang siswa mengeluhkan hasil lasnya penuh percikan (spatter) dan terdapat lubang kecil (burn-through) pada pelat tipis. Menurut Anda, parameter apa yang perlu dievaluasi dan bagaimana solusinya?",
    rubrik:"Jawaban baik mengarah pada evaluasi besar arus (kemungkinan terlalu tinggi untuk diameter elektroda/ketebalan pelat) serta kecepatan pengelasan, dengan solusi menurunkan arus dan/atau menyesuaikan kecepatan serta polaritas (DCEN untuk penetrasi lebih dangkal)."
  },
];
