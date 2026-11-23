/**
 * JEJAK KEMERDEKAAN: DIPLOMASI DAN REVOLUSI FISIK (1945–1949)
 * Database Materi Sejarah Kritis & Katalog Arsip Terverifikasi
 */

const PHOTOS_CATALOG = [
  {
    id: "linggarjati_1",
    file: "images/linggarjati_perundingan.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Besprekingen_en_ondertekening_wapenstilstandsovereenkomst_Linggadjati_conferent%2C_Bestanddeelnr_901-9430.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Besprekingen_en_ondertekening_wapenstilstandsovereenkomst_Linggadjati_conferent%2C_Bestanddeelnr_901-9430.jpg/960px-Besprekingen_en_ondertekening_wapenstilstandsovereenkomst_Linggadjati_conferent%2C_Bestanddeelnr_901-9430.jpg",
    title: "Perundingan Linggarjati dan Penandatanganan Gencatan Senjata",
    event: "Perjanjian Linggarjati",
    year: "1946",
    date: "11–15 November 1946",
    category: "diplomasi",
    credit: "Nationaal Archief Belanda / Anefo (Fotograaf: Willem van de Poll)",
    license: "Domain Publik",
    description: "Suasana bersejarah delegasi Republik Indonesia yang dipimpin PM Sutan Sjahrir berhadapan dengan delegasi Belanda dipimpin Prof. Willem Schermerhorn dan Letnan Gubernur Jenderal H.J. van Mook, dimediasi oleh Lord Killearn dari Inggris di Desa Linggarjati, Kuningan, Jawa Barat."
  },
  {
    id: "linggarjati_2",
    file: "images/linggarjati_delegasi.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Drafting_Linggadjati_Agreement_26_November_1946_KR.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Drafting_Linggadjati_Agreement_26_November_1946_KR.jpg",
    title: "Penyusunan Naskah Perjanjian Linggarjati",
    event: "Perjanjian Linggarjati",
    year: "1946",
    date: "November 1946",
    category: "diplomasi",
    credit: "Kementerian Penerangan RI / Arsip Nasional Republik Indonesia (ANRI)",
    license: "Domain Publik",
    description: "Delegasi Republik Indonesia merumuskan pasal-pasal perjanjian bersama para penasihat hukum dan diplomat senior sebelum naskah final disepakati di Linggarjati."
  },
  {
    id: "agresi1_1",
    file: "images/agresi_militer_1.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/1/13/COLLECTIE_TROPENMUSEUM_Militaire_kolonne_tijdens_de_eerste_politionele_actie_TMnr_10029173.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/1/13/COLLECTIE_TROPENMUSEUM_Militaire_kolonne_tijdens_de_eerste_politionele_actie_TMnr_10029173.jpg",
    title: "Konvoi Militer Belanda pada Agresi Militer I",
    event: "Agresi Militer Belanda I",
    year: "1947",
    date: "21 Juli 1947",
    category: "agresi",
    credit: "Tropenmuseum / Collectie NMvWereldculturen",
    license: "CC BY-SA 3.0",
    description: "Iring-iringan kendaraan lapis baja dan konvoi pasukan infanteri Belanda melancarkan 'Operatie Product' menerobos wilayah kedaulatan de facto Republik Indonesia di Jawa dan Sumatera."
  },
  {
    id: "agresi1_2",
    file: "images/agresi_militer_1_baturaja.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/7/78/8_%28IV%29_Bataljon_Stoottroepen_in_Batoeradja_in_Zuid-Sumatra%2C_Bestanddeelnr_320-1-2.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/8_%28IV%29_Bataljon_Stoottroepen_in_Batoeradja_in_Zuid-Sumatra%2C_Bestanddeelnr_320-1-2.jpg/960px-8_%28IV%29_Bataljon_Stoottroepen_in_Batoeradja_in_Zuid-Sumatra%2C_Bestanddeelnr_320-1-2.jpg",
    title: "Pasukan Belanda Bergerak di Baturaja, Sumatera Selatan",
    event: "Agresi Militer Belanda I",
    year: "1947",
    date: "Agustus 1947",
    category: "agresi",
    credit: "Nationaal Archief Belanda / Fotograaf: H. Wilmar",
    license: "Domain Publik",
    description: "Pasukan Bataljon Stoottroepen Belanda menduduki sentra perkebunan karet dan ladang minyak bumi strategis di wilayah Baturaja dan Palembang, Sumatera Selatan."
  },
  {
    id: "ktn_1",
    file: "images/komisi_tiga_negara.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Collectie_NMvWereldculturen%2C_TM-60042227%2C_Foto-_Delegaties_van_het_Koninkrijk%2C_de_Republiek_en_de_Comissie_van_de_Goede_Diensten_%2C_maandag_8_Dec._1947.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collectie_NMvWereldculturen%2C_TM-60042227%2C_Foto-_Delegaties_van_het_Koninkrijk%2C_de_Republiek_en_de_Comissie_van_de_Goede_Diensten_%2C_maandag_8_Dec._1947.jpg/960px-Collectie_NMvWereldculturen%2C_TM-60042227%2C_Foto-_Delegaties_van_het_Koninkrijk%2C_de_Republiek_en_de_Comissie_van_de_Goede_Diensten_%2C_maandag_8_Dec._1947.jpg",
    title: "Komisi Tiga Negara (KTN) Mempertemukan Delegasi RI dan Belanda",
    event: "Komisi Tiga Negara (KTN)",
    year: "1947",
    date: "8 Desember 1947",
    category: "diplomasi",
    credit: "Tropenmuseum / Collectie NMvWereldculturen",
    license: "CC BY-SA 3.0",
    description: "Komite Jasa Baik Dewan Keamanan PBB (KTN) yang terdiri dari Dr. Frank Graham (AS), Richard Kirby (Australia), dan Paul van Zeeland (Belgia) memfasilitasi perundingan damai resmi antara delegasi Indonesia dan Belanda."
  },
  {
    id: "renville_1",
    file: "images/perjanjian_renville.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Renville_negotiations.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Renville_negotiations.jpg/960px-Renville_negotiations.jpg",
    title: "Perundingan di Atas Geladak Kapal Perang USS Renville",
    event: "Perjanjian Renville",
    year: "1948",
    date: "17 Januari 1948",
    category: "diplomasi",
    credit: "Nationaal Archief Belanda / Anefo (Fotograaf: Steggerda)",
    license: "Domain Publik",
    description: "Perundingan diplomatik penting yang berlangsung di atas kapal angkut Angkatan Laut Amerika Serikat USS Renville yang berlabuh di perairan Teluk Jakarta, Tanjung Priok."
  },
  {
    id: "agresi2_1",
    file: "images/agresi_militer_2.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Het_treinverkeer_tussen_Magoewo_en_Djokja_is_hersteld_-_het_werk_van_Nederlandse%2C_Bestanddeelnr_5311.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Het_treinverkeer_tussen_Magoewo_en_Djokja_is_hersteld_-_het_werk_van_Nederlandse%2C_Bestanddeelnr_5311.jpg/960px-Het_treinverkeer_tussen_Magoewo_en_Djokja_is_hersteld_-_het_werk_van_Nederlandse%2C_Bestanddeelnr_5311.jpg",
    title: "Pasukan Penerjun Belanda Menduduki Maguwo dan Yogyakarta",
    event: "Agresi Militer Belanda II",
    year: "1948",
    date: "19 Desember 1948",
    category: "agresi",
    credit: "Nationaal Archief Belanda / Fotograaf: H. Wilmar",
    license: "Domain Publik",
    description: "Pasukan lintas udara Belanda menduduki Pangkalan Udara Maguwo dan menyerbu pusat pemerintahan ibu kota Republik di Yogyakarta dalam Operatie Kraai."
  },
  {
    id: "agresi2_2",
    file: "images/agresi_militer_2_patroli.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Drie_Nederlandse_militairen_tijdens_een_actie._De_brenschutter_richt_zijn_wapen_%2C_Bestanddeelnr_5560.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Drie_Nederlandse_militairen_tijdens_een_actie._De_brenschutter_richt_zijn_wapen_%2C_Bestanddeelnr_5560.jpg/960px-Drie_Nederlandse_militairen_tijdens_een_actie._De_brenschutter_richt_zijn_wapen_%2C_Bestanddeelnr_5560.jpg",
    title: "Operasi Tempur Pasukan Belanda Menghadapi Gerilya Rakyat",
    event: "Agresi Militer Belanda II",
    year: "1948",
    date: "Desember 1948",
    category: "agresi",
    credit: "Nationaal Archief Belanda / Anefo",
    license: "Domain Publik",
    description: "Pasukan infanteri Belanda bersenjata senapan mesin Bren bersiaga menghadapi serangan gerilya semesta Tentara Nasional Indonesia di pelosok pedesaan Jawa."
  },
  {
    id: "pdri_1",
    file: "images/pdri_sjafruddin.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Sjafruddin_Prawiranegara.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sjafruddin_Prawiranegara.jpg/960px-Sjafruddin_Prawiranegara.jpg",
    title: "Mr. Syafruddin Prawiranegara, Presiden/Ketua PDRI",
    event: "Pemerintahan Darurat Republik Indonesia (PDRI)",
    year: "1948",
    date: "Desember 1948 – Juli 1949",
    category: "pdri",
    credit: "Kementerian Penerangan RI / Arsip Nasional RI",
    license: "Domain Publik",
    description: "Menteri Kemakmuran RI yang memegang mandat darurat dan memimpin jalannya pemerintahan Republik Indonesia dari hutan Sumatera Barat saat para pemimpin tertinggi ditawan Belanda."
  },
  {
    id: "pdri_2",
    file: "images/pdri_markas_bidar_alam.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Markas_PDRI_di_Bidar_Alam%2C_Solok_Selatan%2C_Sumatera_Barat.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Markas_PDRI_di_Bidar_Alam%2C_Solok_Selatan%2C_Sumatera_Barat.jpg/960px-Markas_PDRI_di_Bidar_Alam%2C_Solok_Selatan%2C_Sumatera_Barat.jpg",
    title: "Markas Rahasia PDRI di Bidar Alam, Solok Selatan",
    event: "Pemerintahan Darurat Republik Indonesia (PDRI)",
    year: "1949",
    date: "Januari – April 1949",
    category: "pdri",
    credit: "Balai Pelestarian Kebudayaan Wilayah III / Kemendikbudristek",
    license: "CC BY-SA 4.0",
    description: "Rumah panggung kayu di pedalaman Bidar Alam, Solok Selatan, yang menjadi pusat komando dan stasiun pemancar radio AURI untuk menyiarkan keberadaan Republik ke dunia internasional."
  },
  {
    id: "roem_royen_1",
    file: "images/perjanjian_roem_royen.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Roem-Van_Roijen_Agreement_-_1949.png",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Roem-Van_Roijen_Agreement_-_1949.png/960px-Roem-Van_Roijen_Agreement_-_1949.png",
    title: "Penandatanganan Pernyataan Bersama Perundingan Roem-Royen",
    event: "Perundingan Roem-Royen",
    year: "1949",
    date: "7 Mei 1949",
    category: "diplomasi",
    credit: "Arsip Nasional Republik Indonesia (ANRI) / Deppen",
    license: "Domain Publik",
    description: "Mr. Mohammad Roem dan Dr. J.H. van Roijen membacakan dan menandatangani naskah persetujuan damai di Hotel des Indes, Batavia."
  },
  {
    id: "kmb_1",
    file: "images/kmb_penandatanganan.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Ronde_Tafel_Conferentie_%2C_slotzitting_in_Ridderzaal%2C_Hatta_tekent%2C_Bestanddeelnr_903-6874.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ronde_Tafel_Conferentie_%2C_slotzitting_in_Ridderzaal%2C_Hatta_tekent%2C_Bestanddeelnr_903-6874.jpg/960px-Ronde_Tafel_Conferentie_%2C_slotzitting_in_Ridderzaal%2C_Hatta_tekent%2C_Bestanddeelnr_903-6874.jpg",
    title: "Drs. Mohammad Hatta Menandatangani Hasil KMB di Den Haag",
    event: "Konferensi Meja Bundar (KMB)",
    year: "1949",
    date: "2 November 1949",
    category: "kmb",
    credit: "Nationaal Archief Belanda / Anefo (Fotograaf: Herbert Behrens)",
    license: "Domain Publik",
    description: "Ketua Delegasi RI Drs. Mohammad Hatta menandatangani naskah piagam hasil Konferensi Meja Bundar di Ridderzaal Den Haag, mengakhiri sengketa kedaulatan dengan Belanda."
  },
  {
    id: "kmb_2",
    file: "images/kmb_sidang_pleno.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ronde_Tafel_Conferentie_%2C_slotzitting_in_Ridderzaal%2C_duplikaat_overzicht%2C_Bestanddeelnr_903-6873.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ronde_Tafel_Conferentie_%2C_slotzitting_in_Ridderzaal%2C_duplikaat_overzicht%2C_Bestanddeelnr_903-6873.jpg/960px-Ronde_Tafel_Conferentie_%2C_slotzitting_in_Ridderzaal%2C_duplikaat_overzicht%2C_Bestanddeelnr_903-6873.jpg",
    title: "Suasana Sidang Paripurna Penutupan KMB di Gedung Ridderzaal",
    event: "Konferensi Meja Bundar (KMB)",
    year: "1949",
    date: "2 November 1949",
    category: "kmb",
    credit: "Nationaal Archief Belanda / Anefo (Fotograaf: Herbert Behrens)",
    license: "Domain Publik",
    description: "Delegasi RI, BFO pimpinan Sultan Hamid II, dan delegasi Kerajaan Belanda dalam sidang paripurna bersejarah pengakuan kedaulatan Indonesia."
  },
  {
    id: "bla_1",
    file: "images/bandung_lautan_api_1946.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Bandung_Lautan_Api.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Bandung_Lautan_Api.jpg",
    title: "Kobaran Api Membakar Bandung Selatan (Bandung Lautan Api)",
    event: "Bandung Lautan Api",
    year: "1946",
    date: "23–24 Maret 1946",
    category: "bandung",
    credit: "Koleksi IPPHOS / Perpustakaan Nasional RI",
    license: "Domain Publik",
    description: "Dokumentasi autentik kepulan asap dan api yang membubung tinggi dari kejauhan saat strategi bumi hangus diterapkan di wilayah Bandung Selatan oleh para pejuang kemerdekaan."
  },
  {
    id: "bla_2",
    file: "images/bandung_ruins_1946.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Blussen_van_een_brand_in_een_verwoest_Bandoeng%2C_Bestanddeelnr_40-4-3.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Blussen_van_een_brand_in_een_verwoest_Bandoeng%2C_Bestanddeelnr_40-4-3.jpg/960px-Blussen_van_een_brand_in_een_verwoest_Bandoeng%2C_Bestanddeelnr_40-4-3.jpg",
    title: "Puing-Puing Bangunan yang Hangus di Bandung Selatan",
    event: "Bandung Lautan Api",
    year: "1946",
    date: "Maret–April 1946",
    category: "bandung",
    credit: "Nationaal Archief Belanda / Fotograaf: H. Wilmar",
    license: "Domain Publik",
    description: "Kerusakan infrastruktur akibat operasi bumi hangus total oleh Tentara Republik Indonesia (TRI) untuk melumpuhkan rencana Sekutu mendirikan pangkalan militer."
  },
  {
    id: "bla_3",
    file: "images/bandung_pemadaman_1946.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Blussen_van_een_brand_in_een_verwoest_Bandoeng%2C_Bestanddeelnr_40-4-1.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Blussen_van_een_brand_in_een_verwoest_Bandoeng%2C_Bestanddeelnr_40-4-1.jpg/960px-Blussen_van_een_brand_in_een_verwoest_Bandoeng%2C_Bestanddeelnr_40-4-1.jpg",
    title: "Sisa Kebakaran Fasilitas Perkotaan di Bandung",
    event: "Bandung Lautan Api",
    year: "1946",
    date: "Maret–April 1946",
    category: "bandung",
    credit: "Nationaal Archief Belanda / Fotograaf: H. Wilmar",
    license: "Domain Publik",
    description: "Gedung-gedung strategis yang hangus terbakar setelah komando pembumihangusan ditiupkan, memaksa Sekutu dan NICA hanya menguasai reruntuhan kota."
  },
  {
    id: "bla_4",
    file: "images/bandung_tentara_sekutu.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Indian_troops_clear_road_between_Batavia_and_Bandoeng_1946.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Indian_troops_clear_road_between_Batavia_and_Bandoeng_1946.jpg/960px-Indian_troops_clear_road_between_Batavia_and_Bandoeng_1946.jpg",
    title: "Pasukan Sekutu Inggris-India Menembus Jalur Batavia-Bandung",
    event: "Bandung Lautan Api",
    year: "1946",
    date: "Awal 1946",
    category: "bandung",
    credit: "Imperial War Museum London / UK Crown Open",
    license: "Domain Publik",
    description: "Pasukan Brigade 37 Divisi India ke-23 Sekutu menghadapi perlawanan sengit pejuang Republik di sepanjang jalur konvoi pegunungan menuju Bandung."
  },
  {
    id: "bla_5",
    file: "images/bandung_diorama.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bandung_Lautan_Api_Diorama.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bandung_Lautan_Api_Diorama.jpg/960px-Bandung_Lautan_Api_Diorama.jpg",
    title: "Diorama Evakuasi Rakyat dan Pembumihangusan Bandung",
    event: "Bandung Lautan Api",
    year: "1946",
    date: "24 Maret 1946",
    category: "bandung",
    credit: "Museum Monumen Nasional / Koleksi Sejarah Nasional",
    license: "CC BY-SA 4.0",
    description: "Diorama resmi yang menggambarkan pengorbanan sekitar 200.000 warga Bandung yang berbondong-bondong mengungsi ke wilayah selatan (Dayeuhkolot, Majalaya, Ciparay) di bawah langit malam yang membara."
  },
  {
    id: "monumen_bla",
    file: "images/monumen_bandung_lautan_api.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Lapangan_Tegallega_Bandung_%281%29.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lapangan_Tegallega_Bandung_%281%29.jpg/960px-Lapangan_Tegallega_Bandung_%281%29.jpg",
    title: "Monumen Bandung Lautan Api di Lapangan Tegallega",
    event: "Monumen dan Warisan Sejarah",
    year: "1984",
    date: "Diresmikan 23 Maret 1984",
    category: "monumen",
    credit: "Dokumentasi Publik Pemerintah Kota Bandung",
    license: "CC BY-SA 4.0",
    description: "Monumen bersejarah karya pematung terkemuka ITB Sunaryo setinggi 45 meter dengan 9 sisi lidah api tembaga, didirikan untuk mengabadikan heroisme rakyat Bandung dalam mempertahankan kedaulatan Republik Indonesia."
  },
  {
    id: "tokoh_hatta",
    file: "images/tokoh_mohammad_hatta.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Mohammad_Hatta_1950.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Mohammad_Hatta_1950.jpg/960px-Mohammad_Hatta_1950.jpg",
    title: "Drs. Mohammad Hatta (1902–1980)",
    event: "Tokoh Proklamator & Pemimpin Delegasi KMB",
    year: "1902–1980",
    date: "1949",
    category: "tokoh",
    credit: "Kementerian Penerangan RI / Arsip Nasional RI",
    license: "Domain Publik",
    description: "Wakil Presiden sekaligus Perdana Menteri RI yang memimpin delegasi Republik Indonesia pada Konferensi Meja Bundar hingga tercapainya penyerahan kedaulatan resmi pada Desember 1949."
  },
  {
    id: "tokoh_sjahrir",
    file: "images/tokoh_sutan_sjahrir.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sutan_Sjahrir_sidang_pleno_1947.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sutan_Sjahrir_sidang_pleno_1947.jpg/960px-Sutan_Sjahrir_sidang_pleno_1947.jpg",
    title: "Sutan Sjahrir (1909–1966)",
    event: "Perdana Menteri Pertama RI & Arsitek Diplomasi",
    year: "1909–1966",
    date: "1946–1947",
    category: "tokoh",
    credit: "Nationaal Archief Belanda / Anefo",
    license: "Domain Publik",
    description: "Perdana Menteri pertama Republik Indonesia yang memimpin diplomasi Linggarjati, memperjuangkan legitimasi kemerdekaan di Dewan Keamanan PBB di Lake Success, New York."
  },
  {
    id: "tokoh_roem",
    file: "images/tokoh_mohammad_roem.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Mohammad_Roem_2_February_1948_KR.JPG",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Mohammad_Roem_2_February_1948_KR.JPG",
    title: "Mr. Mohammad Roem (1908–1983)",
    event: "Ketua Delegasi RI Perundingan Roem-Royen",
    year: "1908–1983",
    date: "1948–1949",
    category: "tokoh",
    credit: "Kementerian Penerangan RI / Arsip Nasional RI",
    license: "Domain Publik",
    description: "Negosiator piawai yang berhasil menyepakati pengembalian pemerintahan Republik ke Yogyakarta, pembebasan para pemimpin bangsa, dan penghentian permusuhan militer."
  },
  {
    id: "tokoh_nasution",
    file: "images/tokoh_ah_nasution.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Abdul_Haris_Nasution.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Abdul_Haris_Nasution.jpg/960px-Abdul_Haris_Nasution.jpg",
    title: "Jenderal Besar TNI Dr. Abdul Haris Nasution",
    event: "Panglima Divisi III / Siliwangi",
    year: "1918–2000",
    date: "1946",
    category: "tokoh",
    credit: "Kementerian Penerangan RI / Arsip Nasional RI",
    license: "Domain Publik",
    description: "Saat menjabat Kolonel Komandan Divisi III TRI, Nasution memimpin musyawarah militer yang memutuskan pembumihangusan Bandung Selatan demi strategi gerilya semesta."
  },
  {
    id: "tokoh_toha",
    file: "images/tokoh_mohammad_toha.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Mohammad_Toha.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Mohammad_Toha.jpg",
    title: "Mohammad Toha (1927–1946)",
    event: "Pahlawan Bandung Lautan Api",
    year: "1927–1946",
    date: "24 Maret 1946",
    category: "tokoh",
    credit: "Arsip Sejarah Militer Kodam III Siliwangi",
    license: "Domain Publik",
    description: "Komandan Seksi Barisan Rakjat Indonesia (BRI) yang gugur sebagai martir bersama Mohammad Ramdan setelah meledakkan gudang mesiu Sekutu di Dayeuhkolot dengan dinamit."
  },
  {
    id: "tokoh_amir",
    file: "images/tokoh_amir_sjarifuddin.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/d/db/Amir_Sjarifuddin.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/d/db/Amir_Sjarifuddin.jpg",
    title: "Amir Sjarifuddin Harahap (1907–1948)",
    event: "Perdana Menteri RI & Ketua Delegasi Renville",
    year: "1907–1948",
    date: "1947–1948",
    category: "tokoh",
    credit: "Kementerian Penerangan RI / Arsip Nasional RI",
    license: "Domain Publik",
    description: "Tokoh pergerakan nasional dan Perdana Menteri RI yang memimpin perundingan berat di atas kapal perang USS Renville dalam rangka mempertahankan eksistensi Republik."
  },
  {
    id: "tokoh_salim",
    file: "images/tokoh_agus_salim.jpg",
    full_url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Agus_Salim.jpg",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Agus_Salim.jpg",
    title: "Haji Agus Salim (1884–1954)",
    event: "Menteri Luar Negeri RI & Tokoh Pengakuan Internasional",
    year: "1884–1954",
    date: "1947",
    category: "tokoh",
    credit: "Kementerian Penerangan RI / Arsip Nasional RI",
    license: "Domain Publik",
    description: "'The Grand Old Man' yang dengan kepiawaian diplomasinya berhasil meraih pengakuan de jure kedaulatan Republik Indonesia dari negara-negara Arab di Timur Tengah."
  }
];

const DIPLOMACY_EVENTS = [
  {
    index: 0,
    title: "Perjanjian Linggarjati",
    period: "11–15 November 1946 (Naskah Diparaf 15 Nov 1946; Penandatanganan Resmi: 25 Maret 1947)",
    location: "Desa Linggarjati, Cilimus, Kabupaten Kuningan, Jawa Barat",
    photoId: "linggarjati_1",
    summary: "Perjanjian bilateral resmi pertama antara Republik Indonesia dan Kerajaan Belanda yang menghasilkan pengakuan kedaulatan de facto RI atas Jawa, Madura, dan Sumatera, serta kesepakatan pembentukan Republik Indonesia Serikat (RIS) dan Uni Indonesia-Belanda.",
    delegations: {
      indonesia: "Dipimpin oleh Perdana Menteri merangkap Menteri Luar Negeri Sutan Sjahrir (Ketua Delegasi), didampingi Mohammad Roem, Susanto Tirtoprodjo, S.H., dan Dr. A.K. Gani, serta penasihat teknis Amir Sjarifuddin dan Dr. Johannes Leimena.",
      belanda: "Diketuai oleh Prof. Willem Schermerhorn (mantan Perdana Menteri Belanda), beranggotakan F. de Boer, Max van Poll, dan Letnan Gubernur Jenderal Dr. H.J. van Mook (Komisi Jenderal).",
      penengah: "Lord Killearn (Miles Lampson), utusan khusus Kerajaan Inggris untuk Asia Tenggara, bertindak sebagai mediator dan saksi perundingan."
    },
    background: "Pasca-Proklamasi 17 Agustus 1945, kedatangan pasukan Sekutu (AFNEI) yang diboncengi aparat sipil Belanda NICA memicu rangkaian pertempuran berdarah di berbagai kota (Surabaya, Bandung, Ambarawa, Medan). Kerajaan Inggris yang menderita kerugian ribuan serdadu di tanah Jawa menuntut agar pasukannya ditarik mundur selambat-lambatnya November 1946. Inggris menyadari sengketa bersenjata tidak dapat diselesaikan dengan kekerasan militer murni, sehingga memfasilitasi perundingan politik antara pemerintah Republik dan otoritas Belanda. Desa Linggarjati di lereng Gunung Ciremai dipilih sebagai kompromi lokasi yang netral, sejuk, dan aman di bawah kendali tentara Republik.",
    keyPoints: [
      "Belanda mengakui secara de facto kedaulatan Republik Indonesia atas wilayah Jawa, Madura, dan Sumatera. Wilayah yang diduduki tentara Sekutu/Belanda akan diserahkan bertahap kepada RI selambat-lambatnya 1 Januari 1949.",
      "Republik Indonesia dan Kerajaan Belanda sepakat bekerja sama membentuk negara federal demokratis bernama Republik Indonesia Serikat (RIS), di mana RI akan menjadi salah satu negara bagian di dalamnya.",
      "Republik Indonesia Serikat bersama Kerajaan Belanda akan membentuk Uni Indonesia-Belanda yang dikepalai secara simbolis oleh Ratu Kerajaan Belanda (Keluarga Oranje-Nassau).",
      "Pemerintah RI berjanji mengakui dan memulihkan hak-hak properti, perkebunan, dan konsesi milik warga negara asing di wilayah Republik."
    ],
    reactions: "Memicu pro-kontra sengit di dalam negeri. Kelompok oposisi (Persatuan Perjuangan pimpinan Tan Malaka, Partai Masyumi, dan PNI sayap kiri) mengecam keras Sjahrir karena dianggap 'menjual' wilayah luar Jawa-Sumatera (Kalimantan, Sulawesi, Maluku, Sunda Kecil) dan menerima subordinasi di bawah mahkota Belanda. Di parlemen KNIP, ratifikasi perjanjian berjalan sangat alot hingga Presiden Soekarno harus menerbitkan Penetapan Presiden No. 6/1946 untuk menambah jumlah anggota KNIP demi mengamankan persetujuan.",
    advantages: "Keuntungan strategis: Memperoleh pengakuan internasional pertama kali secara de facto dari kekuatan Barat, membuktikan eksistensi hukum Republik, dan membuka pintu pengakuan de jure dari negara-negara Arab (Mesir, Suriah, Lebanon) serta India.",
    disadvantages: "Kerugian: Wilayah kekuasaan RI menyusut drastis hanya mencakup tiga pulau; Belanda memanfaatkan waktu peralihan untuk menjalankan politik adu domba (devide et impera) dengan mendirikan negara-negara boneka (Negara Indonesia Timur, Negara Pasundan, Negara Madura).",
    interpretationDiff: "Belanda menafsirkan bahwa selama masa peralihan sebelum RIS berdiri, kedaulatan tertinggi atas seluruh Nusantara tetap berada di tangan Ratu Belanda. Sebaliknya, Indonesia menafsirkan bahwa kedaulatan Republik sudah utuh dan sejajar dengan Belanda.",
    impact: "Hubungan kedua negara semakin memanas karena Belanda terus melanggar gencatan senjata. Pada 21 Juli 1947, Belanda secara sepihak membatalkan perjanjian ini dengan melancarkan Agresi Militer Belanda I.",
    sources: "ANRI Koleksi Naskah Linggarjati; Kahin (1952) pp. 196–205; Ricklefs (2008) pp. 270–273."
  },
  {
    index: 1,
    title: "Agresi Militer Belanda I (Operatie Product)",
    period: "21 Juli 1947 – 5 Agustus 1947",
    location: "Jawa Barat (Priangan), Jawa Tengah (pantai utara), Jawa Timur, Sumatera Timur (Deli), dan Sumatera Selatan (Palembang)",
    photoId: "agresi1_1",
    summary: "Serangan militer besar-besaran secara sepihak oleh Belanda untuk merebut sentra ekonomi perkebunan dan minyak bumi serta melumpuhkan kekuatan Tentara Nasional Indonesia.",
    delegations: {
      indonesia: "Pemerintah RI dipimpin Presiden Soekarno, Perdana Menteri Amir Sjarifuddin, dan Panglima Besar Jenderal Soedirman.",
      belanda: "Letnan Gubernur Jenderal Dr. H.J. van Mook dan Panglima Militer Letnan Jenderal Simon Hendrik Spoor."
    },
    background: "Belanda mengalami krisis ekonomi parah pascaperang di Eropa dan sangat membutuhkan devisa hasil ekspor perkebunan tembakau, karet, teh, serta kilang minyak di Sumatera dan Jawa. Pada 27 Mei 1947, Belanda menyampaikan ultimatum (Nota 27 Mei) yang menuntut pembentukan kepolisian bersama (gendarmerie) yang ditolak keras oleh RI karena dianggap sebagai kedok pendudukan militer. Sjahrir meletakkan jabatan dan digantikan Amir Sjarifuddin. Pada tengah malam 20 Juli 1947, van Mook menyatakan Belanda tidak lagi terikat pada Perjanjian Linggarjati.",
    keyPoints: [
      "Belanda mengerahkan lebih dari 100.000 serdadu modern berperlengkapan tank Sherman, kendaraan lapis baja Bren Carrier, dan pesawat tempur Mustang.",
      "Sasaran utama: Menguasai pelabuhan, sentra perkebunan tembakau Deli di Sumatera Timur, tambang minyak di Palembang, perkebunan teh di Jawa Barat, serta pabrik gula di Jawa Timur.",
      "Panglima Besar Soedirman menginstruksikan pelaksanaan taktik Perang Gerilya Semesta dan pembumihangusan fasilitas ekonomi agar tidak dapat dimanfaatkan musuh.",
      "Pemerintah RI di Yogyakarta tetap bertahan dan menyerukan perlawanan rakyat di seluruh pelosok tanah air."
    ],
    reactions: "Masyarakat internasional bereaksi keras mengutuk agresi Belanda. Serikat buruh pelabuhan Australia memboikot armada kapal Belanda (Black Armada). Pada 30 Juli 1947, pemerintah India (PM Jawaharlal Nehru) dan Australia membawa kasus agresi ini ke meja Dewan Keamanan PBB sebagai ancaman nyata terhadap perdamaian dunia.",
    advantages: "Meskipun kehilangan kendali atas kota-kota besar di jalur pantai dan perkebunan, Republik Indonesia justru memperoleh keuntungan diplomasi raksasa: masalah Indonesia-Belanda resmi terinternasionalisasi dan status RI diakui sebagai subjek hukum yang sah dalam sidang Dewan Keamanan PBB.",
    disadvantages: "Ribuan pejuang dan rakyat sipil gugur; fasilitas perekonomian hancur; wilayah de facto Republik terpotong-potong dan terkepung oleh pos-pos militer Belanda.",
    interpretationDiff: "Belanda bersikukuh bahwa serangan ini hanyalah 'aksi polisionil' (politionele actie) internal untuk menertibkan keamanan dalam negerinya, bukan perang antaranegara. Dunia internasional dan PBB menolak dalih ini dan memperlakukan sengketa ini sebagai konflik bersenjata internasional.",
    impact: "Dewan Keamanan PBB mengeluarkan Resolusi No. 27 pada 1 Agustus 1947 yang memerintahkan penghentian permusuhan (gencatan senjata) dan membentuk Komite Jasa Baik (Committee of Good Offices) yang kemudian dikenal sebagai Komisi Tiga Negara (KTN).",
    sources: "UN Security Council Official Records Document S/459; Reid (1974) pp. 110–118; Nasution (1977) Jilid 3."
  },
  {
    index: 2,
    title: "Komisi Tiga Negara (KTN)",
    period: "25 Agustus 1947 – Januari 1948",
    location: "Jakarta, Yogyakarta, dan markas perundingan PBB",
    photoId: "ktn_1",
    summary: "Komite Jasa Baik Dewan Keamanan PBB yang beranggotakan Australia, Belgia, dan Amerika Serikat untuk memfasilitasi perundingan damai dan mengawasi gencatan senjata antara RI dan Belanda.",
    delegations: {
      indonesia: "Memilih Australia sebagai perwakilan: Richard C. Kirby (hakim dan diplomat senior yang bersimpati pada kemerdekaan RI).",
      belanda: "Memilih Belgia sebagai perwakilan: Paul van Zeeland (mantan Perdana Menteri Belgia yang berhaluan konservatif).",
      penengah: "Australia dan Belgia sepakat memilih Amerika Serikat: Dr. Frank Porter Graham (Rektor University of North Carolina) sebagai pihak netral."
    },
    background: "Menindaklanjuti Resolusi DK PBB No. 31 tanggal 25 Agustus 1947, Dewan Keamanan membentuk Committee of Good Offices on the Indonesian Question. Lembaga ini bertugas menengahi kebuntuan militer dan politik pasca-Agresi Militer I dan mempertemukan kedua belah pihak di meja perundingan.",
    keyPoints: [
      "Mengawasi secara langsung pelaksanaan gencatan senjata di sepanjang garis depan pertempuran di Jawa dan Sumatera.",
      "Menjadi jembatan komunikasi diplomatik antara ibu kota RI di Yogyakarta dan otoritas Belanda di Batavia.",
      "Merumuskan usulan kompromi politik (Enam Prinsip Tambahan KTN) yang mencakup penarikan pasukan dan pelaksanaan plebisit bagi rakyat.",
      "Menginisiasi pemilihan lokasi netral di perairan internasional untuk mencegah intimidasi militer, yaitu di atas kapal perang USS Renville."
    ],
    reactions: "Pemerintah Indonesia menyambut positif kehadiran KTN karena keterlibatan PBB dan Amerika Serikat secara langsung mengangkat posisi tawar Republik. Belanda semula enggan namun terpaksa menerima karena tekanan diplomatik dari Washington.",
    advantages: "Membawa perwakilan resmi PBB langsung ke wilayah kedaulatan Republik di Yogyakarta, memecahkan isolasi diplomatik Belanda terhadap RI.",
    disadvantages: "KTN hanya memiliki mandat sebagai 'komite jasa baik' (pemberi saran/mediator) tanpa hak memaksakan keputusan militer atau sanksi hukum mengikat terhadap pelanggaran Belanda.",
    interpretationDiff: "Belanda menganggap KTN hanya penasihat informal, sementara Indonesia memandangnya sebagai representasi otoritas tertinggi masyarakat internasional.",
    impact: "KTN berhasil mempertemukan delegasi Indonesia dan Belanda dalam perundingan damai di atas kapal perang Angkatan Laut Amerika Serikat USS Renville.",
    sources: "Taylor, Alastair M. (1960) Indonesian Independence and the United Nations; Ide Anak Agung Gde Agung (1973)."
  },
  {
    index: 3,
    title: "Perjanjian Renville",
    period: "8 Desember 1947 – 17 Januari 1948",
    location: "Geladak Kapal Angkut AL Amerika Serikat USS Renville (APA-227), Tanjung Priok, Jakarta",
    photoId: "renville_1",
    summary: "Perjanjian kontroversial yang ditandatangani di atas kapal perang AS, mengakibatkan penarikan mundur 35.000 prajurit TNI dari kantong-kantong gerilya dan penyusutan drastis wilayah kedaulatan Republik.",
    delegations: {
      indonesia: "Dipimpin Perdana Menteri Amir Sjarifuddin, didampingi Ali Sastroamidjojo, Dr. Johannes Leimena, Ir. H. Djuanda, dan Mohammad Roem.",
      belanda: "Diketuai oleh Raden Abdulkadir Widjojoatmodjo (tokoh Indonesia pro-Belanda), didampingi H.A.L. van Vredenburch dan Dr. P.J. Koets.",
      penengah: "Komisi Tiga Negara (Frank Graham, Richard Kirby, Paul van Zeeland)."
    },
    background: "Kebuntuan perundingan darat dan klaim sepihak Letnan Gubernur Jenderal H.J. van Mook mengenai garis demarkasi status quo (Van Mook Line) pada 29 Agustus 1947. AS menyediakan kapal perang USS Renville sebagai wilayah netral ekstrateritorial untuk mencegah provokasi militer.",
    keyPoints: [
      "Penghentian tembak-menembak di sepanjang Garis Demarkasi Van Mook (garis khayal yang menghubungkan titik-titik terdepan pasukan Belanda saat agresi).",
      "Penarikan mundur seluruh tentara Republik (TNI) dari kantong-kantong gerilya di Jawa Barat, Jawa Tengah, dan Jawa Timur ke wilayah Republik (terkenal sebagai 'Hijrah Long March Divisi Siliwangi' ke Yogyakarta).",
      "Belanda tetap memegang kedaulatan atas Indonesia hingga kedaulatan diserahkan kepada Republik Indonesia Serikat.",
      "Pelaksanaan plebisit (pemungutan suara bebas) bagi rakyat di Jawa, Madura, dan Sumatera untuk menentukan apakah mereka ingin bergabung dengan RI atau negara bagian bentukan Belanda."
    ],
    reactions: "Menimbulkan gelombang kemarahan publik di wilayah Republik. Perjanjian ini dinilai sebagai kekalahan diplomasi yang memalukan. Partai Masyumi dan PNI menarik dukungannya dari kabinet, menyebabkan Kabinet Amir Sjarifuddin jatuh pada 23 Januari 1948 dan digantikan oleh Kabinet Presidensial Mohammad Hatta.",
    advantages: "Eksistensi institusional Republik Indonesia tetap berdiri dan diawasi secara resmi oleh Dewan Keamanan PBB.",
    disadvantages: "Sangat merugikan Indonesia: Wilayah RI terkurung menjadi sangat sempit (hanya tersisa sebagian kecil Jawa Tengah seperti Yogyakarta dan Surakarta, serta sebagian Sumatera). Blokade ekonomi ketat yang dilancarkan Belanda membuat Republik kekurangan obat-obatan, sandang, dan amunisi.",
    interpretationDiff: "Belanda memanfaatkan perjanjian untuk mempercepat pembentukan negara-negara federal boneka tanpa menunggu plebisit yang adil.",
    impact: "Jatuhnya Amir Sjarifuddin mendorongnya membentuk Front Demokrasi Rakyat (FDR) yang beroposisi keras terhadap Hatta dan bermuara pada Peristiwa Pemberontakan PKI Madiun 1948. Sementara itu, Belanda bersiap melancarkan agresi kedua untuk menghabisi Republik.",
    sources: "Kahin (1952) pp. 217–255; Nasution (1977) Jilid 4; Ricklefs (2008) pp. 275–278."
  },
  {
    index: 4,
    title: "Agresi Militer Belanda II (Operatie Kraai)",
    period: "19 Desember 1948 – Awal 1949",
    location: "Yogyakarta (Ibu Kota RI), Lapangan Udara Maguwo, Gedung Agung, Jawa, dan Sumatera",
    photoId: "agresi2_1",
    summary: "Serangan kilat udara dan darat Belanda terhadap ibu kota Yogyakarta, penangkapan pucuk pimpinan Republik, dan dimulainya Perang Gerilya Semesta oleh Panglima Besar Jenderal Soedirman.",
    delegations: {
      indonesia: "Presiden Soekarno, Wakil Presiden Mohammad Hatta, Menlu Agus Salim (ditawan di Yogyakarta); Panglima Besar Soedirman (memimpin gerilya dari tandu); Mr. Syafruddin Prawiranegara (memimpin PDRI).",
      belanda: "Louis Beel (Komisaris Tinggi Mahkota), Letnan Jenderal Simon H. Spoor, dan Mayor Jenderal Dirk Cornelis Buurman van Vreeden."
    },
    background: "Belanda mengira kekuatan Republik telah hancur setelah meletusnya Pemberontakan PKI Madiun pada September 1948. Pada 18 Desember 1948 pukul 23.30, Belanda menyatakan tidak lagi terikat pada Perjanjian Renville dan melancarkan operasi militer dengan sandi Operatie Kraai (Operasi Gagak).",
    keyPoints: [
      "Subuh 19 Desember 1948, pasukan khusus Korps Speciale Troepen diterjunkan di Lapangan Terbang Maguwo, menaklukkan pertahanan udara AURI, dan menyerbu masuk ke pusat kota Yogyakarta dengan tank lapis baja.",
      "Belanda mengepung Istana Gedung Agung Yogyakarta dan menawan Presiden Soekarno, Wapres Hatta, Sutan Sjahrir, Mr. Assaat, dan Agus Salim. Para pemimpin kemudian diasingkan ke Prapat (Sumatera Utara) dan Mentok (Bangka).",
      "Sebelum ditawan, Soekarno-Hatta menggelar sidang kabinet kilat yang memutuskan dua mandat penyelamatan: mengirim kawat mandat kepada Mr. Syafruddin Prawiranegara untuk mendirikan PDRI di Sumatera, serta kawat kepada Mr. A.A. Maramis dan L.N. Palar di New Delhi.",
      "Panglima Besar Soedirman yang menderita penyakit paru-paru parah menolak tawaran beristirahat di kota dan memilih memimpin Perang Gerilya Semesta selama 7 bulan menembus rimba belantara Jawa."
    ],
    reactions: "Reaksi internasional luar biasa keras. Amerika Serikat mengecam keras tindakan Belanda dan mengancam akan membekukan seluruh dana bantuan Marshall Plan (rekonstruksi pascaperang) bagi Belanda. Konferensi Tingkat Tinggi New Delhi (20–23 Januari 1949) yang diprakarsai India dan dihadiri 19 negara Asia-Afrika menuntut pembebasan tanpa syarat para pemimpin RI.",
    advantages: "Belanda terjebak dalam bumerang diplomasi dan militer. Klaim Belanda bahwa 'Republik Indonesia telah musnah' terbantahkan secara telak ketika TNI melancarkan serangan-serangan gerilya di seluruh wilayah Jawa dan Sumatera.",
    disadvantages: "Ibu kota Yogyakarta diduduki musuh, kantor-kantor kementerian dirampas, dan para pemimpin tertinggi negara diasingkan.",
    interpretationDiff: "Belanda mengira penangkapan presiden dan menteri akan mengakhiri perlawanan; kenyataannya, perlawanan rakyat Indonesia tidak bergantung pada individu, melainkan digerakkan oleh sistem pertahanan gerilya semesta dan kepemimpinan darurat PDRI.",
    impact: "Puncak perlawanan militer tercermin dalam Serangan Umum 1 Maret 1949 di bawah pimpinan Letkol Soeharto dan arahan Sri Sultan Hamengkubuwono IX yang berhasil menguasai Yogyakarta selama 6 jam, membuktikan kepada DK PBB bahwa TNI masih berdaya pukul kuat.",
    sources: "Kahin (1952) pp. 336–390; Soedirman (1970) Sejarah Perjuangan Gerilya; Reid (1974) pp. 145–158."
  },
  {
    index: 5,
    title: "Pemerintahan Darurat Republik Indonesia (PDRI)",
    period: "22 Desember 1948 – 13 Juli 1949",
    location: "Halaban, Koto Tinggi, dan Rimba Belantara Bidar Alam, Solok Selatan, Sumatera Barat",
    photoId: "pdri_2",
    summary: "Pemerintahan penyelamat eksistensi konstitusional Republik Indonesia yang beroperasi secara gerilya di pedalaman Sumatera Barat, menggagalkan propaganda Belanda bahwa negara Indonesia telah lenyap.",
    delegations: {
      tokohKunci: "Mr. Syafruddin Prawiranegara (Ketua PDRI / Menteri Pertahanan & Penerangan ad interim), Mr. Teuku Mohammad Hasan (Wakil Ketua / Menteri Dalam Negeri & Agama), Mr. Lukman Hakim (Menteri Keuangan), Ir. Indracaya (Menteri Perhubungan), Ir. Sitompul (Menteri Pekerjaan Umum)."
    },
    background: "Ketika Yogyakarta diserbu pada 19 Desember 1948, Presiden Soekarno mengirim telegram mandat kilat kepada Syafruddin Prawiranegara yang saat itu sedang berada di Bukittinggi untuk membentuk kabinet darurat di Sumatera. Tanpa menunggu telegraf yang terhambat, Syafruddin dan pimpinan sipil-militer Sumatera Barat telah berinisiatif memproklamasikan berdirinya PDRI di Halaban pada 22 Desember 1948.",
    keyPoints: [
      "Menjaga mata rantai kepemimpinan tata negara Republik agar tidak terjadi kevakuman kekuasaan (power vacuum) menurut hukum tata negara internasional.",
      "Beroperasi secara berpindah-pindah (mobile government) dari Halaban, Koto Tinggi, hingga bermarkas selama 3 bulan di rumah panggung pedalaman Bidar Alam, Solok Selatan.",
      "Mengoperasikan stasiun pemancar radio gerilya AURI (bidang telekomunikasi dikomandoi Dick Tamimi) yang memancarkan sinyal morse ke Kotaraja (Aceh), New Delhi, dan markas PBB di New York untuk mengabarkan bahwa Republik masih berdiri tegak.",
      "Menerbitkan mata uang darurat resmi (Uang Republik Indonesia Propinsi Sumatera / URIPS) untuk mematahkan blokade moneter Belanda dan membiayai logistik tentara gerilya.",
      "Mengoordinasikan instruksi komando militer dengan Komisariat Pemerintah di Jawa di bawah pimpinan Mr. Susanto Tirtoprodjo dan Panglima Tentara Teritorium Jawa Kolonel A.H. Nasution."
    ],
    reactions: "Dukungan penuh dari seluruh kesatuan TNI dan laskar pejuang di Jawa dan Sumatera yang mengakui kepemimpinan PDRI sebagai otoritas pemerintahan yang sah.",
    advantages: "Menyelamatkan nyawa Proklamasi 17 Agustus 1945. Berkat eksistensi PDRI, perundingan damai Roem-Royen memiliki basis hukum legalitas yang diakui dunia.",
    disadvantages: "Pemerintahan dijalankan dalam kondisi serba kekurangan logistik, ancaman serbuan udara pesawat tempur Belanda, dan komunikasi radio yang harus disamarkan.",
    interpretationDiff: "Belanda mengabaikan PDRI sebagai 'pemerintah hantu di hutan'; kenyataannya, DK PBB mengakui legitimasi kawat-kawat diplomatik yang dikirim dari pemancar radio PDRI.",
    impact: "Setelah Perundingan Roem-Royen disepakati dan Soekarno-Hatta dikembalikan ke Yogyakarta, Syafruddin Prawiranegara secara ksatria dan penuh kehormatan menyerahkan kembali mandat pemerintahan kepada Presiden Soekarno dalam sidang resmi di Yogyakarta pada 13 Juli 1949.",
    sources: "ANRI Koleksi Arsip PDRI; Mestika Zed (1997) Pemerintahan Darurat Republik Indonesia; Kahin (1952)."
  },
  {
    index: 6,
    title: "Perundingan Roem-Royen",
    period: "14 April 1949 – 7 Mei 1949 (Pernyataan Ditandatangani: 7 Mei 1949)",
    location: "Hotel des Indes, Molenvliet (Gajah Mada), Batavia (Jakarta)",
    photoId: "roem_royen_1",
    summary: "Persetujuan damai yang menghasilkan komitmen pengembalian Pemerintah RI ke Yogyakarta, pembebasan para pemimpin bangsa dari pengasingan, dan kesepakatan penyelenggaraan Konferensi Meja Bundar.",
    delegations: {
      indonesia: "Diketuai oleh Mr. Mohammad Roem, beranggotakan Ali Sastroamidjojo, Dr. Johannes Leimena, Ir. H. Djuanda, Prof. Dr. Soepomo, dan Mr. Latuharhary.",
      belanda: "Diketuai oleh Dr. Jan Herman van Roijen, didampingi Dr. Blom dan Jacob.",
      unci: "Komisi PBB untuk Indonesia (UNCI) diketuai diplomat senior AS Merle Cochran."
    },
    background: "Resolusi Dewan Keamanan PBB tanggal 28 Januari 1949 memerintahkan Belanda menghentikan agresi dan membebaskan pemimpin Indonesia. Keberhasilan Serangan Umum 1 Maret 1949 dan perlawanan gerilya yang tak kunjung padam mematahkan moral militer Belanda. Dibawah mediasi UNCI, kedua pihak duduk kembali berunding di Hotel des Indes Jakarta.",
    keyPoints: [
      "Pernyataan Delegasi Republik Indonesia (oleh Mohammad Roem): Memerintahkan penghentian perang gerilya, bekerja sama memulihkan perdamaian dan ketertiban, serta bersedia menghadiri Konferensi Meja Bundar di Den Haag guna mempercepat penyerahan kedaulatan tanpa syarat.",
      "Pernyataan Delegasi Belanda (oleh Herman van Roijen): Menyetujui kembalinya Pemerintahan RI ke Yogyakarta, membebaskan seluruh tahanan politik Republik tanpa syarat, menghentikan seluruh operasi militer, menyetujui RI sebagai bagian dari Republik Indonesia Serikat (RIS), dan menyelenggarakan KMB secepatnya di Den Haag.",
      "Pada 29 Juni 1949, pasukan Belanda ditarik mundur sepenuhnya dari kota Yogyakarta (dikenal sebagai peristiwa 'Jogja Kembali').",
      "Pada 6 Juli 1949, Presiden Soekarno, Wapres Hatta, dan para menteri kembali menginjakkan kaki di ibu kota Yogyakarta dengan sambutan haru ribuan rakyat."
    ],
    reactions: "Sempat ditentang oleh beberapa perwira TNI garis keras yang merasa perjanjian ini membatasi kemenangan militer gerilya. Namun setelah dialog intensif antara Bung Karno, Bung Hatta, dan Panglima Besar Soedirman, seluruh kesatuan militer mematuhi keputusan politik pemerintah.",
    advantages: "Memulihkan kedudukan institusional pemerintah Republik di ibu kota Yogyakarta, membebaskan para pemimpin bangsa dari pengasingan, dan memastikan penyerahan kedaulatan akan dibahas tuntas di Den Haag.",
    disadvantages: "TNI diinstruksikan menghentikan serangan militer saat posisi Belanda di berbagai sektor pertahanan sedang terdesak.",
    interpretationDiff: "Belanda berharap RIS akan didominasi oleh negara-negara boneka BFO; Indonesia memandang KMB sebagai langkah pamungkas untuk melikuidasi kolonialisme Belanda dari seluruh Nusantara.",
    impact: "Membuka jalan lapang menuju pembentukan delegasi gabungan Indonesia-BFO melalui Konferensi Antar-Indonesia dan pelaksanaan Konferensi Meja Bundar di Den Haag.",
    sources: "ANRI Naskah Perjanjian Roem-Royen; Roem (1972) Bunga Rampai dari Sejarah; Kahin (1952) pp. 420–428."
  },
  {
    index: 7,
    title: "Konferensi Meja Bundar (KMB)",
    period: "23 Agustus 1949 – 2 November 1949 (Penyerahan Kedaulatan: 27 Desember 1949)",
    location: "Gedung Ridderzaal (Aula Ksatria), Den Haag, Kerajaan Belanda",
    photoId: "kmb_1",
    summary: "Puncak perjuangan diplomasi kemerdekaan yang menghasilkan pengakuan kedaulatan penuh dan tanpa syarat atas Indonesia oleh Kerajaan Belanda, mengakhiri empat tahun konflik fisik bersenjata.",
    delegations: {
      indonesia: "Dipimpin Drs. Mohammad Hatta, beranggotakan Mr. Mohammad Roem, Prof. Dr. Soepomo, Dr. J. Leimena, Ali Sastroamidjojo, Ir. Djuanda, Dr. Soemitro Djojohadikoesoemo, dan Kolonel T.B. Simatupang.",
      bfo: "Diketuai oleh Sultan Hamid II dari Pontianak (mewakili 15 negara bagian bentukan Belanda).",
      belanda: "Diketuai oleh Mr. J.H. van Maarseveen (Menteri Wilayah Seberang Lautan).",
      unci: "Diketuai oleh perwakilan PBB Merle Cochran (Amerika Serikat)."
    },
    background: "Sesuai amanat Perundingan Roem-Royen dan Resolusi PBB, perundingan pamungkas digelar di Den Haag untuk menyelesaikan seluruh sengketa hukum dan penyerahan kedaulatan. Sebelumnya, pada Juli–Agustus 1949 digelar Konferensi Antar-Indonesia di Yogyakarta dan Jakarta di mana RI dan BFO berhasil mencapai mufakat bulat untuk bersatu menghadapi Belanda.",
    keyPoints: [
      "Kerajaan Belanda menyerahkan kedaulatan atas Hindia Belanda secara penuh, nyata, dan tanpa syarat kepada Republik Indonesia Serikat (RIS) selambat-lambatnya 30 Desember 1949.",
      "Pembentukan Uni Indonesia-Belanda sebagai persemakmuran yang diketuai simbolis oleh Ratu Belanda.",
      "Penarikan mundur seluruh tentara Belanda (Koninklijk Leger) dan pembubaran tentara kolonial KNIL dengan prajuritnya dilebur ke dalam Angkatan Perang RIS (APRIS) berintikan TNI.",
      "Penyelesaian sengketa kedaulatan Irian Barat (Papua Barat) ditunda dan akan dirundingkan kembali dalam kurun waktu satu tahun setelah penyerahan kedaulatan.",
      "Pemerintah RIS menyetujui menanggung beban utang luar negeri dan dalam negeri pemerintah Hindia Belanda sebesar 4,3 miliar gulden (sebagai kompromi dari tuntutan awal Belanda sebesar 6,5 miliar gulden)."
    ],
    reactions: "Rakyat Indonesia menyambut penyerahan kedaulatan dengan sukacita gegap gempita, meskipun banyak kalangan mengkritik keras beban utang gulden dan penundaan status Irian Barat.",
    advantages: "Tercapainya pengakuan kedaulatan de jure universal: bendera Merah Putih berkibar resmi dan diakui oleh seluruh negara di dunia dan PBB. Perang fisik bersenjata resmi berakhir.",
    disadvantages: "Bentuk negara federal RIS memecah wilayah Republik; beban utang 4,3 miliar gulden membebani fiskal awal negara; masalah Irian Barat menjadi sengketa berlarut-larut selama lebih dari satu dekade.",
    interpretationDiff: "Belanda memandang KMB sebagai 'penyerahan kedaulatan' (soevereiniteitsoverdracht), sementara bangsa Indonesia memandangnya sebagai 'pengakuan atas kemerdekaan' yang sudah sah diproklamasikan sejak 17 Agustus 1945.",
    impact: "Pada 27 Desember 1949, penandatanganan naskah pengakuan kedaulatan dilaksanakan serentak di Istana Dam Amsterdam (Ratu Juliana dan Bung Hatta) serta di Jakarta (Sri Sultan Hamengkubuwono IX dan A.H.J. Lovink). Bentuk federal RIS tidak bertahan lama: atas kehendak rakyat dari berbagai negara bagian, pada 17 Agustus 1950 RIS resmi dibubarkan dan Indonesia kembali menjadi Negara Kesatuan Republik Indonesia (NKRI).",
    sources: "Nationaal Archief R.T.C. Documenten; Hatta (1979) Memoir; Kahin (1952) pp. 433–445."
  }
];

const FIGURES_DATA = [
  {
    id: "hatta",
    name: "Drs. Mohammad Hatta",
    years: "1902–1980",
    role: "Wakil Presiden RI & Pemimpin Delegasi KMB",
    photoId: "tokoh_hatta",
    bio: "Proklamator kemerdekaan dan bapak bangsa yang dikenal dengan integritas moral tanpa cela, kedisiplinan intelektual, dan penguasaan mendalam di bidang ekonomi kerakyatan serta hukum tata negara. Menempuh pendidikan ekonomi di Handels Hoogeschool Rotterdam dan memimpin Perhimpunan Indonesia di masa mudanya.",
    contribution: "Memimpin kabinet darurat pasca-Renville dan memimpin penumpasan pemberontakan PKI Madiun 1948. Menjadi Ketua Delegasi Republik Indonesia pada Konferensi Meja Bundar (KMB) di Den Haag tahun 1949 hingga berhasil memaksa Belanda menyerahkan kedaulatan tanpa syarat kepada Indonesia. Menandatangani piagam pengakuan kedaulatan bersejarah di Istana Dam Amsterdam pada 27 Desember 1949.",
    events: "Proklamasi 1945, Sidang Kabinet Darurat 1948, Pengasingan Bangka 1948–1949, KMB Den Haag 1949, Pengakuan Kedaulatan 27 Desember 1949."
  },
  {
    id: "sjahrir",
    name: "Sutan Sjahrir",
    years: "1909–1966",
    role: "Perdana Menteri Pertama RI & Arsitek Diplomasi PBB",
    photoId: "tokoh_sjahrir",
    bio: "Intelektual sosialis-demokrat dan diplomat ulung berjuluk 'Si Kancil' yang memimpin gerakan perlawanan bawah tanah anti-fasis selama masa pendudukan Jepang. Lulusan hukum Universitas Leiden yang memimpin kabinet pertama Republik Indonesia pasca-Proklamasi.",
    contribution: "Merumuskan cetak biru diplomasi damai Indonesia dalam risalah revolusioner 'Perjuangan Kita' (1945). Memimpin delegasi Indonesia di Perjanjian Linggarjati serta memberikan instruksi pengosongan taktis Bandung 1946 demi menyelamatkan posisi diplomasi. Berpidato memukau di hadapan sidang Dewan Keamanan PBB di Lake Success, New York pada 14 Agustus 1947 yang menyadarkan dunia internasional mengenai hak kemerdekaan Indonesia.",
    events: "Perjanjian Linggarjati 1946, Perintah Pengosongan Bandung 1946, Sidang Dewan Keamanan PBB 1947."
  },
  {
    id: "roem",
    name: "Mr. Mohammad Roem",
    years: "1908–1983",
    role: "Ketua Delegasi RI Perundingan Roem-Royen",
    photoId: "tokoh_roem",
    bio: "Tokoh pejuang kemerdekaan dari Partai Masyumi, pengacara terkemuka, dan diplomat tangguh lulusan Rechtshoogeschool Batavia yang piawai merajut mufakat di tengah kebuntuan krisis militer.",
    contribution: "Meskipun pernah tertembak kakinya oleh serdadu NICA pada masa awal revolusi, komitmen diplomasinya tidak surut. Memimpin delegasi Indonesia dalam Perundingan Roem-Royen di Hotel des Indes Jakarta (1949). Ketegasannya menghasilkan kesepakatan pemulangan pemerintahan RI ke Yogyakarta (peristiwa Jogja Kembali), pembebasan para pemimpin bangsa yang diasingkan, dan kesepakatan penyelenggaraan KMB.",
    events: "Perjanjian Linggarjati 1946, Perjanjian Renville 1948, Perundingan Roem-Royen 1949, KMB 1949."
  },
  {
    id: "sjafruddin",
    name: "Mr. Syafruddin Prawiranegara",
    years: "1911–1989",
    role: "Presiden / Ketua Pemerintah Darurat Republik Indonesia (PDRI)",
    photoId: "pdri_1",
    bio: "Ekonom handal, ahli hukum tata negara, dan Menteri Kemakmuran RI yang memegang mandat darurat ketika para pemimpin tertinggi negara ditawan di Yogyakarta pasca-Agresi Militer II.",
    contribution: "Mendirikan dan memimpin PDRI dari belantara hutan Sumatera Barat (1948–1949). Melalui stasiun pemancar radio gerilya AURI di Bidar Alam dan penerbitan mata uang URIPS, Syafruddin mematahkan klaim propaganda Belanda bahwa Republik sudah mati, sekaligus mengendalikan roda pemerintahan darurat dan perang gerilya semesta hingga menyerahkan kembali mandat secara ksatria kepada Soekarno pada 13 Juli 1949.",
    events: "Agresi Militer Belanda II 1948, Deklarasi PDRI Halaban 1948, Markas Rimba Bidar Alam 1949, Pengembalian Mandat 13 Juli 1949."
  },
  {
    id: "nasution",
    name: "Jenderal Besar TNI Dr. Abdul Haris Nasution",
    years: "1918–2000",
    role: "Komandan Divisi III Siliwangi & Konseptor Perang Gerilya",
    photoId: "tokoh_nasution",
    bio: "Perwira militer visioner lulusan Akademi Militer Kerajaan (KMA) Bandung, salah satu pemikir strategi pertahanan modern terpenting Indonesia penggagas doktrin sistem pertahanan rakyat semesta.",
    contribution: "Memimpin musyawarah darurat militer di Jalan Regentsweg Bandung pada 23 Maret 1946 yang memutuskan operasi bumi hangus Bandung Selatan dan evakuasi 200.000 warga. Memimpin operasi militer Long March Hijrah Divisi Siliwangi ke Yogyakarta (1948), dan memimpin Komando Pasukan Gerilya Jawa selama Agresi Militer II. Karyanya 'Pokok-Pokok Gerilya' menjadi buku teks militer klasik dunia.",
    events: "Pertempuran Bandung 1945–1946, Bandung Lautan Api 1946, Long March Hijrah Siliwangi 1948, Komando Gerilya Teritorium Jawa 1948–1949."
  },
  {
    id: "toha",
    name: "Mohammad Toha",
    years: "1927–1946",
    role: "Komandan Seksi I Barisan Rakjat Indonesia (BRI)",
    photoId: "tokoh_toha",
    bio: "Pemuda yatim piatu pejuang kemerdekaan asal Suniaraja, Bandung, yang memiliki keahlian montir mesin dan instalasi listrik militer sejak masa pendudukan Jepang. Bergabung dengan laskar rakyat Barisan Rakjat Indonesia.",
    contribution: "Melakukan aksi heroisme martir tak tertandingi pada dini hari 24 Maret 1946 dengan menyusup ke markas gudang amunisi dan mesiu sentral Sekutu di Dayeuhkolot, lalu meledakkan gedung mesiu tersebut dengan dinamit batangan, menghancurkan ribuan ton amunisi lawan demi mencegah pembantaian pejuang dan rakyat yang sedang mengungsi.",
    events: "Bandung Lautan Api 23–24 Maret 1946, Ledakan Gudang Mesiu Dayeuhkolot."
  },
  {
    id: "ramdan",
    name: "Mohammad Ramdan",
    years: "Wafat 24 Maret 1946",
    role: "Pejuang Barisan Rakjat Indonesia (BRI)",
    photoId: "bla_5",
    bio: "Pejuang muda dan rekan seperjuangan terdekat Mohammad Toha di medan pertempuran Bandung Selatan. Sosok pemuda jelata yang tergerak murni oleh cinta tanah air.",
    contribution: "Mendampingi Mohammad Toha dalam operasi infiltrasi mematikan ke kompleks persenjataan Sekutu di Dayeuhkolot. Ramdan membantu melumpuhkan penjaga kawat berduri dan mengamankan rute detonator dinamit hingga gugur bersama Toha dalam ledakan raksasa di episentrum amunisi. Namanya diabadikan di Monumen Dayeuhkolot dan jalan protokol Kota Bandung.",
    events: "Bandung Lautan Api 23–24 Maret 1946, Aksi Heroik Dayeuhkolot."
  },
  {
    id: "amir",
    name: "Amir Sjarifuddin Harahap",
    years: "1907–1948",
    role: "Perdana Menteri RI & Ketua Delegasi Renville",
    photoId: "tokoh_amir",
    bio: "Pemimpin pergerakan bawah tanah anti-fasis masa pendudukan Jepang, orator ulung, dan tokoh sosialis lulusan Rechtshoogeschool Batavia yang menjabat Menteri Pertahanan dan Perdana Menteri RI.",
    contribution: "Mengonsolidasikan pertahanan tentara menghadapi Agresi Militer Belanda I. Memimpin diplomasi rumit di atas geladak kapal perang USS Renville pada akhir 1947 hingga Januari 1948 di tengah kepungan militer dan blokade ekonomi Belanda yang sangat mencekik pertahanan Republik.",
    events: "Kabinet Amir Sjarifuddin 1947–1948, Perjanjian Renville 1948."
  },
  {
    id: "salim",
    name: "Haji Agus Salim",
    years: "1884–1954",
    role: "Menteri Luar Negeri RI & Tokoh Diplomasi Internasional",
    photoId: "tokoh_salim",
    bio: "Tokoh pergerakan nasional berjuluk 'The Grand Old Man' yang menguasai sembilan bahasa asing dan memiliki kecerdasan logika diplomasi tingkat dunia. Pemimpin senior Sarekat Islam yang sederhana dan religius.",
    contribution: "Memimpin Misi Diplomatik Republik Indonesia ke negara-negara Arab dan Timur Tengah pada tahun 1947, berhasil memperoleh pengakuan de jure kedaulatan Republik Indonesia pertama kali dari Kerajaan Mesir (10 Juni 1947), disusul Suriah, Lebanon, Irak, dan Arab Saudi. Mendampingi Sjahrir di forum PBB 1947 dan ikut diasingkan di Bangka.",
    events: "Misi Pengakuan Timur Tengah 1947, Sidang Dewan Keamanan PBB 1947, Pengasingan Bangka 1948–1949, KMB Den Haag 1949."
  }
];

const QUIZ_QUESTIONS = [
  {
    question: "Perjanjian Linggarjati (1946) menghasilkan pengakuan secara de facto kedaulatan Republik Indonesia oleh Belanda, namun wilayah yang diakui terbatas hanya meliputi...",
    options: [
      "Seluruh kepulauan Nusantara bekas Hindia Belanda dari Sabang sampai Merauke",
      "Jawa, Madura, dan Sumatera",
      "Jawa, Bali, dan Kalimantan",
      "Jawa dan Madura saja"
    ],
    answer: 1,
    explanation: "Berdasarkan Pasal 1 Naskah Perjanjian Linggarjati yang disepakati November 1946, Belanda hanya mengakui secara de facto kedaulatan Republik Indonesia atas tiga wilayah utama, yaitu Jawa, Madura, dan Sumatera. Wilayah lainnya direncanakan dimasukkan ke dalam negara-negara bagian RIS."
  },
  {
    question: "Tokoh diplomat senior asal Inggris yang bertindak sebagai mediator dan penengah yang disegani dalam Perundingan Linggarjati adalah...",
    options: [
      "Lord Killearn (Miles Lampson)",
      "Lord Louis Mountbatten",
      "Brigadir Jenderal Mallaby",
      "Sir Philip Christison"
    ],
    answer: 0,
    explanation: "Lord Killearn (Miles Lampson) adalah diplomat senior Inggris yang bertindak sebagai mediator resmi antara pihak Republik Indonesia (Sutan Sjahrir) dan pihak Belanda (Willem Schermerhorn) di Linggarjati guna mempercepat penarikan tentara Inggris dari tanah Jawa."
  },
  {
    question: "Apa nama sandi operasi militer resmi yang dilancarkan Belanda pada Agresi Militer Belanda I (21 Juli 1947)?",
    options: [
      "Operatie Kraai",
      "Operatie Product",
      "Operatie Zeemeeuw",
      "Operatie Drossel"
    ],
    answer: 1,
    explanation: "Operatie Product adalah nama sandi resmi agresi militer Belanda I yang bertujuan menguasai sentra-sentra ekonomi komoditas ekspor (perkebunan tembakau, gula, karet, dan tambang minyak) di Jawa dan Sumatera untuk membiayai kas negeri Belanda pasca-Perang Dunia II."
  },
  {
    question: "Dua negara sahabat yang secara resmi dan berani membawa kasus Agresi Militer Belanda I ke meja sidang Dewan Keamanan PBB pada 30 Juli 1947 adalah...",
    options: [
      "Amerika Serikat dan Uni Soviet",
      "India dan Australia",
      "Mesir dan Arab Saudi",
      "Inggris dan Prancis"
    ],
    answer: 1,
    explanation: "Pemerintah India di bawah PM Jawaharlal Nehru dan Australia di bawah Perdana Menteri Ben Chifley mengajukan surat resmi ke Dewan Keamanan PBB yang menyatakan agresi Belanda merupakan ancaman terhadap perdamaian dunia, yang berujung lahirnya Resolusi DK PBB dan pembentukan Komisi Tiga Negara."
  },
  {
    question: "Dalam keanggotaan Komisi Tiga Negara (KTN), negara yang dipilih secara khusus oleh pemerintah Republik Indonesia untuk mewakilinya adalah...",
    options: [
      "Belgia",
      "Amerika Serikat",
      "Australia",
      "Filipina"
    ],
    answer: 2,
    explanation: "Sesuai mekanisme KTN, Indonesia memilih Australia (diwakili Richard C. Kirby), Belanda memilih Belgia (Paul van Zeeland), dan kedua negara tersebut sepakat memilih Amerika Serikat (Dr. Frank Graham) sebagai pihak penengah netral."
  },
  {
    question: "Dampak militer paling menyakitkan bagi pihak Republik Indonesia dari penandatanganan Perjanjian Renville (1948) adalah...",
    options: [
      "Pembubaran seluruh struktur kepangkatan TNI",
      "TNI harus ditarik mundur dari kantong-kantong gerilya di belakang Garis Van Mook (Hijrah Siliwangi ke Yogyakarta)",
      "Penyitaan seluruh senjata milik laskar pemuda oleh KTN",
      "Penyerahan pangkalan udara Maguwo kepada Angkatan Udara Belanda"
    ],
    answer: 1,
    explanation: "Perjanjian Renville mengakui garis status quo Van Mook Line. Akibatnya, sekitar 35.000 prajurit TNI, khususnya Divisi Siliwangi di Jawa Barat di bawah pimpinan Kolonel A.H. Nasution, terpaksa berhijrah dengan berjalan kaki (Long March) menembus ratusan kilometer menuju wilayah Republik di Yogyakarta."
  },
  {
    question: "Ketika Yogyakarta diduduki tentara Belanda pada Agresi Militer II (19 Desember 1948), mandat darurat untuk memimpin Pemerintah Darurat Republik Indonesia (PDRI) diberikan kepada...",
    options: [
      "Mr. Syafruddin Prawiranegara",
      "Mr. Assaat",
      "Sri Sultan Hamengkubuwono IX",
      "Kolonel A.H. Nasution"
    ],
    answer: 0,
    explanation: "Presiden Soekarno dan Wapres Hatta mengirimkan kawat telegraf mandat kepada Menteri Kemakmuran Mr. Syafruddin Prawiranegara yang sedang berada di Sumatera Barat untuk mendirikan PDRI, yang terbukti menyelamatkan kelangsungan negara RI di mata hukum internasional."
  },
  {
    question: "Hasil perundingan Roem-Royen yang ditandatangani pada 7 Mei 1949 memuat salah satu kesepakatan krusial bagi pemerintah Indonesia, yaitu...",
    options: [
      "Penghapusan seluruh utang Hindia Belanda",
      "Pengembalian Pemerintahan RI ke Yogyakarta dan pembebasan tahanan politik",
      "Penyerahan wilayah Papua Barat seketika itu juga",
      "Penetapan mata uang Gulden sebagai alat pembayaran sah di Jawa"
    ],
    answer: 1,
    explanation: "Pernyataan Van Roijen menyetujui kembalinya Pemerintahan Republik Indonesia ke Yogyakarta secara berdaulat (peristiwa Jogja Kembali 29 Juni 1949) serta membebaskan para pemimpin Republik yang diasingkan di Bangka dan Berastagi."
  },
  {
    question: "Konferensi Meja Bundar (KMB) tahun 1949 diselenggarakan di kota dan gedung bersejarah...",
    options: [
      "Amsterdam di Paleis op de Dam",
      "Den Haag di Gedung Ridderzaal (Aula Ksatria)",
      "Rotterdam di De Doelen",
      "Utrecht di Domtoren"
    ],
    answer: 1,
    explanation: "KMB diselenggarakan mulai 23 Agustus hingga 2 November 1949 di Gedung Ridderzaal (Aula Ksatria) di Den Haag, Belanda, dipimpin oleh Wakil Presiden Mohammad Hatta selaku Ketua Delegasi Republik Indonesia."
  },
  {
    question: "Apa pertimbangan strategis utama para pemimpin militer di bawah Kolonel A.H. Nasution memutuskan membumihanguskan Bandung Selatan pada 23 Maret 1946?",
    options: [
      "Keputusasaan karena kehabisan bahan makanan",
      "Mencegah Sekutu dan NICA memanfaatkan fasilitas kota dan pabrik senjata sebagai pangkalan militer garis depan",
      "Perintah langsung dari markas tentara Sekutu di Batavia",
      "Menghindari kewajiban membayar sewa gedung kepada pemerintah kota"
    ],
    answer: 1,
    explanation: "Musyawarah MP3 pimpinan Kolonel A.H. Nasution memutuskan pembumihangusan total agar fasilitas strategis (pabrik amunisi ACW, bengkel militer, instalasi vital) tidak dapat dimanfaatkan Sekutu dan NICA untuk melancarkan serangan kilat ke pedalaman Priangan, sekaligus mempersiapkan strategi perang gerilya semesta."
  },
  {
    question: "Pahlawan muda yang gugur sebagai martir dalam meledakkan gudang mesiu Sekutu di Dayeuhkolot pada peristiwa Bandung Lautan Api adalah...",
    options: [
      "Mohammad Toha dan Mohammad Ramdan",
      "Mayor Rukana dan Atje Bastaman",
      "Kolonel Omon dan Letkol Sukanda",
      "A.H. Nasution dan E.M. Mansyur"
    ],
    answer: 0,
    explanation: "Mohammad Toha (Komandan Seksi I BRI) bersama rekannya Mohammad Ramdan menyusup ke dalam gudang amunisi utama Sekutu di Dayeuhkolot dan meledakkan dinamit batangan, menghancurkan puluhan ton amunisi lawan hingga gugur sebagai martir kemerdekaan."
  },
  {
    question: "Fakta sejarah yang benar mengenai lagu kebangsaan 'Halo-Halo Bandung' karya komponis Ismail Marzuki adalah...",
    options: [
      "Diciptakan secara spontan oleh tentara Gurkha di medan pertempuran",
      "Semula diciptakan sebagai lagu rindu suasana kota yang kemudian lirik bait akhirnya diubah menjadi mars patriotik pasca-pembumihangusan",
      "Merupakan terjemahan langsung dari lagu perjuangan militer Belanda",
      "Diciptakan atas pesanan pemerintah NICA untuk menghibur warga pengungsi"
    ],
    answer: 1,
    explanation: "Secara historis, Ismail Marzuki awalnya menggubah lagu ini sebagai kenangan pribadi dan rasa rindu terhadap kota Bandung. Namun pascaperistiwa 23 Maret 1946 saat ribuan pejuang mengungsi, liriknya ditransformasikan secara patriotik ('Sekarang telah menjadi lautan api, mari Bung rebut kembali!')."
  }
];
