# Kerangka Willingness-to-Pay (Kesediaan Membayar)

**Arsitektur sisi permintaan dan penawaran untuk memahami mengapa orang mau membayar, seberapa besar, dan bagaimana perilaku membayar bisa dipengaruhi.**

Versi 5.0 · Digagas dan dikembangkan oleh Dharmawan · Teks framework berlisensi CC BY 4.0, kode tool berlisensi MIT

> Ini versi Bahasa Indonesia. Versi kanonik berbahasa Inggris ada di `wtp-framework.en.md`. Keduanya dijaga setara: ubah satu, ubah pasangannya.

---

## Apa ini

Kerangka Willingness-to-Pay (WTP) adalah alat diagnosis. Ia memetakan psikologi membayar di dua sisi setiap transaksi: pembeli (sisi permintaan) dan penjual (sisi penawaran). Kerangka ini tumbuh dari praktik komunikasi strategis dan pemasaran di Indonesia, lalu diuji terhadap lebih dari sembilan puluh sumber di psikologi konsumen, ekonomi perilaku, dan ilmu pemasaran.

Ia menjawab empat pertanyaan, berurutan:

1. **Kenapa** orang mau membayar sama sekali? (Lapis 1: premis)
2. **Apa** alasan spesifik yang menggerakkan seseorang membayar, apa yang menaikkan angkanya, apa yang menahannya, dan sampai berapa tinggi? (Bagian I: sisi permintaan)
3. **Bagaimana** penjual memosisikan diri dan bergerak terhadap alasan itu? (Bagian II: cermin penawaran)
4. **Kapan dan di mana** alasan itu bergeser, dan bagaimana cara menjalankan diagnosisnya? (Bagian III sampai V)

Kerangka ini jujur soal jangkauannya. Ia lebih kuat menjelaskan kenapa orang sudah membayar daripada meramalkan apakah mereka akan membayar, dan ia menyebut terus terang di mana ia bisa dibuktikan keliru dan di mana ia tidak boleh dipakai.

## Cara membacanya

Baca dari kiri ke kanan. Mulai dari sisi permintaan (kenapa audiens ini bayar, apa yang menahan mereka, seberapa besar). Lalu ke cermin penawaran (mau diposisikan sebagai apa, taktik apa yang dipakai). Tambahkan dinamika (perjalanan pembeli bergeser seiring waktu) dan konteks (pembelian korporat, budaya, situasi, segmen). Tutup dengan perangkat aplikasi, yang mengubah semuanya jadi diagnosis yang bisa diulang plus satu pohon keputusan.

Untuk pembacaan cepat, langsung ke Bagian V. Model lima rumpun dan pohon keputusan memadatkan seluruh sistem jadi sesuatu yang bisa dipakai dalam lima belas menit. Alat interaktif di repositori ini menjalankan pohon keputusan itu langsung.

## Daftar isi

- **Bagian I: Sisi permintaan**: premis, 13 pendorong, 17 penguat, jalur pintas kognitif, penghambat, besaran
- **Bagian II: Cermin penawaran**: 13 kategori proposisi nilai, 26 taktik aktivasi
- **Bagian III: Dinamika**: perjalanan pembelian, pergeseran pendorong, putaran umpan balik, kondisi laten dan manifes
- **Bagian IV: Pengubah konteks**: pembelian korporat, budaya, situasi, segmen
- **Bagian V: Perangkat aplikasi**: metode diagnosis, empat saringan produk, pertanyaan proposal, lima rumpun, pohon keputusan, alat ukur sementara
- **Bagian VI: Batas**: falsifiabilitas dan prediksi uji, pagar etika, mode kegagalan, keterbatasan yang diketahui
- **Lampiran**: catatan perubahan, daftar sumber lengkap (lihat `sources.md`)

---

# BAGIAN I: SISI PERMINTAAN

## 1. Premis

### 1.1 Aksioma

> Setiap transaksi yang manusia lakukan pada dasarnya usaha memindahkan diri dari kondisi yang kurang diinginkan ke kondisi yang lebih diinginkan. Orang membayar untuk lepas dari kondisi yang tidak mereka mau, atau untuk menciptakan kondisi yang mereka mau.

Ini aksioma, bukan hipotesis. Memang dirancang tidak bisa dibuktikan salah, dan itu wajar untuk sebuah premis dasar, asalkan lapisan di atasnya menghasilkan klaim yang bisa diuji. Gunanya aksioma ini ada di daya paksanya: ia memaksa tiap analisis dimulai dari "perpindahan kondisi apa yang sedang dicari orang ini?", bukan dari "produk ini punya fitur apa saja?".

Dua tradisi akademik menopang premis ini. Means-End Chain (Gutman, 1982) menyusun penalaran konsumen sebagai atribut menuju konsekuensi menuju nilai pribadi, dan ujungnya selalu perubahan kondisi batin. Model motivasi Fennell (1978) mendasarkan perilaku pada gerak menjauhi kondisi yang tidak nyaman atau mendekati kondisi yang diinginkan. Kerangka ini mengisi muatan motivasinya, bagian yang dibiarkan kosong oleh model proses tadi.

### 1.2 Kondisi laten dan manifes

Kondisi awal bisa **manifes** (orangnya sudah merasakan dan bisa menyebut namanya) atau **laten** (orangnya sudah menganggapnya biasa, atau tidak pernah sadar). Bedanya menentukan seberapa besar biaya edukasi pasar yang harus penjual tanggung sebelum ada yang membayar.

Contoh manifes: pemilik usaha kecil yang tahu ia kehilangan order gara-gara pesan tidak terbalas. Sakitnya sudah punya nama. Tidak perlu diedukasi.

Contoh laten: sebelum ada ponsel pintar, sedikit orang merumuskan "saya tidak bisa akses internet jauh dari meja" sebagai masalah yang layak dibayar untuk diselesaikan. Produk yang menyingkap kondisi laten lalu menawarkan jalan keluar bisa menciptakan kategori baru dengan margin paling tebal, karena di hari pertama belum ada pesaing, sekaligus risiko paling besar, karena pasar harus diajari dulu masalahnya sebelum mau bayar solusinya.

### 1.3 Catatan soal pembayaran nonuang

Kerangka ini ditulis seputar uang, tetapi aksiomanya soal perubahan kondisi lewat transaksi, dan alat tukarnya tidak selalu uang. Orang juga membayar dengan perhatian, dengan data pribadi, dan dengan waktu. Media yang hidup dari iklan, produk freemium, dan platform media sosial berjalan di atas alat tukar ini (Davenport & Beck, 2001). Saat kerangka ini dipakai untuk produk yang penggunanya "membayar" pakai perhatian atau data, baca "kesediaan membayar" sebagai "kesediaan melepas alat tukar yang relevan", dan lapisan sisi permintaan tetap berlaku.

## 2. Tiga belas pendorong

### 2.1 Apa itu pendorong

Pendorong (driver) adalah alasan struktural yang berdiri sendiri kenapa orang membayar. Satu pendorong bisa memunculkan pembelian tanpa bantuan penguat emosi di bagian 3. Pendorong adalah jawaban atas "kenapa".

### 2.2 Pendorong itu lensa yang saling tumpang tindih

Tiga belas pendorong ini tidak saling lepas. FOMO sebenarnya salah satu bentuk rasa takut. Rasa memiliki bisa lahir dari takut dikucilkan atau dari tarikan status. Bertumbuh sebenarnya bentuk lain dari mengatasi masalah, yaitu menutup jarak antara kemampuan sekarang dan yang diinginkan. Perlakukan pendorong sebagai lensa analitis yang saling tumpang tindih. Kebanyakan transaksi menyalakan dua sampai empat pendorong sekaligus.

Untuk tiap keputusan, kenali **pendorong utama** (yang kalau dicabut, pembeliannya batal) dan **pendorong sekunder** (yang menaikkan kesediaan membayar di atas batas minimum). Urutan ini yang menentukan prioritas pesan Anda.

### 2.3 Peta perpindahan kondisi

| # | Pendorong | Kondisi A (tidak diinginkan) | Kondisi B (diinginkan) |
|---|-----------|------------------------------|------------------------|
| 1 | Atasi Masalah (Solve) | Sakit, macet, rusak | Lega, jalan, beres |
| 2 | Hiburan (Entertain) | Bosan, hambar | Terhibur, senang, asyik |
| 3 | Empati (Empathy) | Tidak enak hati, terganggu nuraninya | Lega, ikut merasa berbuat baik |
| 4 | Status | Tidak kelihatan, dipandang rendah | Diakui, naik kelas, dikagumi |
| 5 | Rasa Takut (Fear) | Cemas, rawan, tidak terlindung | Aman, terlindungi, tenang |
| 6 | Rasa Memiliki (Belonging) | Terasing, di luar lingkaran | Diterima, nyambung, jadi bagian |
| 7 | Kewajiban (Obligation) | Berutang budi, tidak enak | Lunas, impas, sudah balas budi |
| 8 | FOMO | Ketinggalan, kelewatan | Ikut serta, tidak terlewat |
| 9 | Kebiasaan (Habit) | Terganggu rutinitasnya | Nyaman seperti biasa, lanjut |
| 10 | Kemudahan (Convenience) | Ribet, lambat, berbelit | Gampang, cepat, mulus |
| 11 | Bertumbuh (Growth) | Mentok, jalan di tempat | Berkembang, naik level, jadi lebih |
| 12 | Nilai (Values) | Merasa munafik, tidak sejalan | Sejalan dengan prinsip, lega secara moral |
| 13 | Identitas (Identity) | Diri yang kabur, tidak nyambung | Diri yang utuh, kelihatan, jelas |

### 2.4 Pendorong satu per satu

**1. Atasi Masalah (Solve).** Ada masalah jelas yang bisa ditunjuk, dan membayar menghilangkan atau menguranginya. Makin mendesak masalahnya, makin kuat dorongannya. Berakar pada ekonomi atribut produk (Lancaster, 1966).

**2. Hiburan (Entertain).** Membayar untuk kenikmatan: indrawi, emosional, atau pikiran. Makin sering orang mencari rangsangan, makin kuat dorongannya. Berakar pada teori konsumsi hedonis (Hirschman & Holbrook, 1982).

**3. Empati (Empathy).** Melihat penderitaan bikin tidak enak hati, dan memberi meredakannya. Makin dekat dan makin kelihatan penderitaannya, makin kuat dorongannya. Didukung riset perilaku prososial dan kesediaan membayar produk fair trade (Galan-Ladero dkk., 2023).

**4. Status.** Membayar untuk menandai posisi sosial ke orang lain. Makin kelihatan konsumsinya dan makin peka orang itu pada kelompok acuannya, makin kuat dorongannya. Berakar pada teori konsumsi mencolok (Veblen), dan terbukti pada 474 konsumen Indonesia (MDPI Sustainability, 2023).

**5. Rasa Takut (Fear).** Ancaman yang dirasakan mendorong orang membayar untuk perlindungan atau pencegahan. Makin besar kemungkinan dan parahnya ancaman di benak mereka, makin kuat dorongannya. Berlandas loss aversion (Kahneman & Tversky): kehilangan terasa kira-kira dua kali lebih berat dari untung yang sama besar.

**6. Rasa Memiliki (Belonging).** Dorongan untuk jadi bagian kelompok membuat orang membayar penanda kelompok itu. Makin kuat ia mengidentifikasi diri dengan kelompoknya, makin kuat dorongannya. Jauh lebih kuat di budaya kolektif, tempat keanggotaan kelompok dulu nyaris setara kebutuhan bertahan hidup.

**7. Kewajiban (Obligation).** Utang budi menimbulkan tekanan untuk membalas lewat membayar. Makin kelihatan utang budinya, makin kuat dorongannya. Berakar pada prinsip timbal balik (Cialdini).

**8. FOMO.** Rasa langka atau takut tersisih memunculkan urgensi. Makin terasa bahwa kesempatan itu tidak akan datang lagi, makin kuat dorongannya. Secara struktur, FOMO adalah cabang dari rasa takut, dipisah di sini supaya praktis dipakai.

**9. Kebiasaan (Habit).** Perilaku yang berulang jadi otomatis, dan pembayaran lanjut tanpa keputusan sadar. Makin lama kebiasaannya dan makin terasa repot pindah, makin kuat dorongannya. Ada satu catatan penting: kebiasaan tahan terhadap penguatan emosi, karena ia jalan dari isyarat konteks, bukan dari tujuan atau perasaan (Wood & Neal, 2009). Untuk menggeser pembelian yang sudah jadi kebiasaan, ubah konteksnya, bukan nada emosinya.

**10. Kemudahan (Convenience).** Orang bayar lebih demi membuang usaha, waktu, atau kerumitan. Makin miskin waktu seseorang dan makin merepotkan alternatifnya, makin kuat dorongannya.

**11. Bertumbuh (Growth).** Dorongan menambah kemampuan atau memperbaiki diri menggerakkan pembelian. Makin jauh jarak yang dirasakan antara diri sekarang dan diri idaman, makin kuat dorongannya. Berakar pada teori determinasi diri (Deci & Ryan).

**12. Nilai (Values).** Membayar sebagai cara menyatakan prinsip moral, etika, atau politik. Makin sentral nilai itu bagi dirinya, makin kuat dorongannya. Kira-kira dua pertiga konsumen global menyatakan mau bayar lebih untuk produk yang sejalan dengan nilai mereka (Scientific Reports, 2025).

**13. Identitas (Identity).** Pembelian jadi batu bata penyusun siapa diri orang itu dan bagaimana ia ingin tampil ke dunia. Makin menonjol identitas itu dan makin lebar jarak antara tampilan sekarang dan yang diinginkan, makin kuat dorongannya. Berakar pada "Possessions and the Extended Self" (Belk, 1988), salah satu makalah paling banyak dikutip di riset konsumen, dan identity-based motivation (Oyserman, 2009). Bedanya dengan Status: status soal posisi di atas orang lain, sedangkan identitas soal keutuhan diri, dorongan untuk jadi diri sendiri yang autentik. Anak punk yang beli jaket kulit tidak sedang mengejar pangkat, ia sedang menyusun dan menyatakan identitas.

## 3. Tujuh belas penguat

### 3.1 Apa itu penguat

Penguat (amplifier) adalah keadaan emosi yang mengubah intensitas, urgensi, dan premium dari pembelian yang sudah didorong sebuah pendorong. Pada kebanyakan konteks, penguat hanya memodulasi pembelian yang sudah dimungkinkan oleh pendorong. Ujinya sederhana: cabut emosinya. Kalau pembelian tetap jalan tapi nilainya lebih kecil atau lebih lambat, emosi itu penguat. Kalau pembeliannya hilang sama sekali, emosi itu pendorong.

Satu catatan penting. Untuk pembelian keterlibatan rendah dan impulsif (kira-kira di bawah Rp 500 ribu, atau di mana saja orang tidak sempat menimbang), emosi bisa jadi pendorong utama dengan sendirinya. Teori feelings-as-information (Schwarz & Clore, 1983), appraisal-tendency framework (Lerner & Keltner, 2000), dan teori nilai konsumsi (Sheth, Newman & Gross, 1991) sama-sama menunjukkan emosi bisa langsung jadi masukan keputusan dalam kondisi ini.

Tujuh belas penguat dikelompokkan menurut tahap pembelian tempat ia paling kuat bekerja.

### 3.2 Penguat hasrat (paling kuat saat akuisisi)

Kelompok ini menaikkan intensitas keinginan. Label lama "tujuh dosa pokok" ditinggalkan di sini, karena bingkai teologi Kristiani tidak cocok di konteks mayoritas Muslim maupun di Asia Timur. Mekanismenya berlaku lintas budaya; kemasannya diganti jadi **dorongan berlebih**, nama lamanya ditaruh dalam kurung sebagai rujukan.

| Penguat | Cara kerja | Menguatkan |
|---------|------------|------------|
| Harga diri berlebih (Pride) | Membengkakkan jarak antara kedudukan sekarang dan yang diinginkan. Hanya kebanggaan sehat yang andal menguatkan pencarian status; kebanggaan jumawa jalan lewat dominasi (McFerran, Aquino & Tracy, 2014). | Status, Bertumbuh, Identitas |
| Iri (Envy) | Membangun hasrat bersaing lewat membanding-bandingkan diri dengan orang lain. | Status, FOMO, Rasa Memiliki |
| Malas repot (Sloth) | Membengkakkan rasa beratnya usaha, menaikkan kesediaan membayar untuk jalan yang gampang. | Kemudahan |
| Ingin lebih terus (Gluttony) | Mendorong konsumsi melewati titik kenyang. | Hiburan, Kebiasaan |
| Hasrat indrawi (Lust) | Penguatan kenikmatan yang mentah dan langsung. | Hiburan, Status |
| Dorongan menumpuk (Greed) | Mendorong mengumpulkan melewati kebutuhan wajar. | Rasa Takut, FOMO, Kebiasaan |
| Dorongan pembuktian (Wrath) | Jalan lewat identitas dan efek underdog, bukan lewat amarah. Orang menempel pada kisah perjuangan (Paharia dkk., 2011). | Identitas, Rasa Memiliki, Bertumbuh |
| Menghindar dari malu (Shame) | Mempertajam takut untuk tetap tinggal di Kondisi A lewat ancaman sosial. | Rasa Memiliki, Status, Nilai |

Catatan budaya yang berlanjut ke Bagian IV: di Indonesia yang kolektif, malu kemungkinan besar penguat tunggal terkuat, jangkauannya lebih luas dari konsep shame Barat, dan ia sanggup mendorong pengeluaran jauh melampaui kemampuan kantong.

### 3.3 Peredam keberatan (paling kuat saat menerima harga)

| Penguat | Cara kerja |
|---------|------------|
| Nostalgia | Punya dua fungsi. Sebagai penguat, ia melonggarkan kelekatan pada uang lewat rasa terhubung yang menguat, sehingga sakit membayar berkurang, terukur di premium 10 sampai 15 persen (Lasaleta, Sedikides & Vohs, 2014). Sebagai pendorong, di konteks hedonis pengalaman nostalgianya itu sendiri yang jadi produknya. |
| Bosan | Penguat negatif yang menurunkan keengganan untuk pindah dan mendorong orang mencari variasi ke alternatif lain (Zuckerman, 1994; McAlister & Pessemier, 1982). |

### 3.4 Penguat konversi (paling kuat saat memutuskan beli)

| Penguat | Cara kerja |
|---------|------------|
| Harapan | Menaikkan keyakinan bahwa produk yang ini bisa mengantar ke Kondisi B. Ia mengubah keyakinan soal jalannya, bukan keinginannya (MacInnis & deMello, 2005). |
| Penasaran | Menyalakan dorongan menjelajah dan perilaku mendekat, sekaligus memunculkan ekspektasi yang terlalu optimistis (Loewenstein, 1994). Ia dekat sekali dengan garis pendorong: pasar blind-box global jalan di atas rasa penasaran sebagai pendorong utama. |
| Kagum (Awe) | Menggeser selera ke arah barang pengalaman, melebarkan rasa waktu, dan menaikkan keterbukaan (Rudd, Vohs & Aaker, 2012; Keltner, 2025). |

### 3.5 Penguat retensi (paling kuat saat mempertahankan)

| Penguat | Cara kerja |
|---------|------------|
| Cinta atau kelekatan | Membangun ikatan emosi yang menaikkan toleransi pada kenaikan harga dan menurunkan keinginan pindah. |
| Rasa bersalah pascabeli | Menimbulkan ongkos batin untuk berhenti, sehingga pelanggan merasa tidak enak kalau pergi. |
| Takut menyesal | Takut akan perasaan buruk nanti kalau berhenti atau pindah. Bingkai sunk-cost menaikkan niat bertahan sekitar 18 persen, tapi ia cuma menunda pembatalan, belum membangun loyalitas sejati. |
| Rasa terima kasih | Mendorong loyalitas dan beli ulang lewat naluri membalas budi, beda dari cinta maupun rasa bersalah (Palmatier dkk., 2009). |

### 3.6 Tiga efek interaksi

**Emosi yang sama-sama negatif bisa saling membatalkan.** Jijik dan sedih sama-sama negatif, tapi menggerakkan kesediaan membayar ke arah berlawanan (Lerner, Small & Loewenstein, 2004). Menumpuk banyak penguat bisa memberi hasil yang tak terduga.

**Kebiasaan tahan terhadap penguatan.** Pembelian yang sudah jadi kebiasaan jalan dari isyarat konteks, jadi penguat emosi efeknya kecil di sana. Ubah konteksnya.

**Terlalu banyak penguatan memicu perlawanan.** Begitu orang merasa kebebasan memilihnya diancam, ia cenderung melakukan kebalikannya (Brehm, 1966). Pakai paling banyak dua sampai tiga penguat per titik sentuh.

## 4. Jalur pintas kognitif

Sebagian taktik penjual memengaruhi pembayaran lewat mekanisme kognitif yang melompati emosi sepenuhnya. Jadi arsitektur lengkapnya punya dua jalur dari tindakan penjual sampai ke pembelian.

- **Jalur A (emosi):** taktik memicu penguat, penguat memperkuat pendorong, pendorong memunculkan pembelian.
- **Jalur B (kognitif):** taktik memanfaatkan bias berpikir, bias memengaruhi pendorong langsung, pendorong memunculkan pembelian.

Lima jalur pintas yang terdokumentasi:

| Mekanisme | Cara kerja | Bukti |
|-----------|------------|-------|
| Penjangkaran (anchoring) | Angka acuan pertama membiaskan semua penilaian harga sesudahnya. | Tversky & Kahneman (1974); meta-analisis 53 studi menunjukkan pergeseran 44 sampai 51 persen pada kesediaan membayar |
| Bias status quo (default) | Orang cenderung berlebihan bertahan di pilihan yang sudah disiapkan. | Johnson & Goldstein (2003); Samuelson & Zeckhauser (1988) |
| Akuntansi mental | Orang memilah uang ke "kantong" subjektif lalu mengalokasikannya secara tidak rasional antarkantong. | Thaler (1999) |
| Bukti sosial sebagai informasi | "Kalau banyak orang lain pilih ini, mungkin aman" jalan sebagai pereda ketidakpastian, tanpa perlu menyalakan emosi rasa memiliki. | Deutsch & Gerard (1955) |
| Pemisahan rasa sakit membayar | Memisahkan saat membayar dari saat menikmati membuat konsumsinya terasa nyaris gratis. | Prelec & Loewenstein |

Jalur kognitif lebih kuat untuk keputusan harga dan desain opt-in. Jalur emosi lebih kuat untuk pembelian yang butuh banyak pertimbangan.

## 5. Penghambat WTP (rem di sisi permintaan)

Semua lapisan sampai sini mendorong ke arah membayar. Pendorong menciptakan alasannya, penguat menaikkan intensitasnya, jalur kognitif menyenggol keputusannya. Model sisi permintaan yang utuh juga butuh remnya: alasan struktural kenapa orang tidak membayar walaupun pendorongnya sedang aktif. Tanpa lapisan ini, kerangkanya cuma gas tanpa rem, dan itu tidak menggambarkan pembeli mana pun.

Bacanya sebagai keseimbangan kasar:

> Kesediaan membayar bersih = (kekuatan pendorong, dimodulasi penguat dan bias) dikurangi (kekuatan penghambat)

Pembelian terjadi saat hasil bersihnya melewati ambang orang itu. Dua produk bisa duduk di atas pendorong yang persis sama tapi konversinya jauh berbeda, karena yang satu memikul penghambat berat dan yang lain ringan. Mendiagnosis kenapa sesuatu tidak laku biasanya soal penghambat, bukan soal pendorong.

Penghambat berkumpul jadi tiga golongan: fungsional, psikologis, dan ekonomi, mengikuti struktur teori resistensi inovasi (Ram & Sheth, 1989), diperluas dengan riset status quo dan kepercayaan.

### 5.1 Penghambat fungsional

| Penghambat | Yang menahan pembayaran |
|------------|-------------------------|
| Hambatan kebiasaan pakai | Produknya menuntut perubahan alur kerja atau rutinitas yang sudah mapan. Makin besar perubahan perilakunya, makin keras remnya. |
| Hambatan nilai | Selisih untung dibanding solusi sekarang dirasa tidak cukup besar untuk menebus harga atau repotnya pindah. |
| Hambatan risiko | Rasa berisiko saat mengadopsi: risiko hasil, uang, fisik, atau sosial. Risiko itu potongan atas kesediaan membayar, dibahas lagi di bagian 6. |

### 5.2 Penghambat psikologis

| Penghambat | Yang menahan pembayaran |
|------------|-------------------------|
| Hambatan tradisi | Produknya berbenturan dengan norma, kebiasaan keluarga, atau harapan budaya yang sudah mapan. |
| Hambatan citra | Asosiasi kurang sedap yang menempel pada kategori, negara asal, atau mereknya. |
| Defisit kepercayaan | Pembeli belum yakin penjual sanggup mengantar ke Kondisi B. Kepercayaan itu syarat dasar yang duduk di bawah tiap pendorong (Mayer, Davis & Schoorman, 1995). Transfer otoritas, bukti sosial, dan jaminan pengembalian di Bagian II pada dasarnya taktik membangun kepercayaan. |
| Enggan memutuskan dan bias status quo | Diam tidak berbuat apa-apa adalah pilihan default, dan default menang lebih sering daripada yang pantas dilihat dari kelebihannya (Samuelson & Zeckhauser, 1988). Yang mengerem di sini bukan pesaing, tapi ketiadaan keputusan itu sendiri. |
| Kebanyakan pilihan | Terlalu banyak opsi menaikkan ongkos memutuskan dan bisa membuat pembelian mandek sama sekali. |

### 5.3 Penghambat ekonomi

| Penghambat | Yang menahan pembayaran |
|------------|-------------------------|
| Keterbatasan dana dan anggaran | Pendorongnya nyata, harganya terasa pantas, tapi uang atau siklus anggarannya belum ada sekarang. Sering di pembelian korporat dan di segmen yang sensitif harga. |
| Ongkos pindah dari yang lama | Data, integrasi, kontrak, dan alur kerja yang sudah dikuasai bikin ongkos nyata untuk meninggalkan solusi sekarang jauh di atas harga tertera produk baru. |
| Harga terasa tidak adil | Harga yang dinilai melanggar harga acuan atau rasa keadilan akan ditolak meski sebenarnya mampu dibayar (Kahneman, Knetsch & Thaler, 1986). Yang mengerem adalah rasa diperlakukan tidak adil, bukan besar angkanya. |
| Belum mendesak | Pendorongnya ada, tapi belum mendesak, jadi keputusannya ditunda terus. Penundaan, bukan penolakan, adalah cara paling umum sebuah pendorong yang hidup gagal jadi pembelian. |

### 5.4 Cara memakai lapisan penghambat

Untuk produk yang mandek, jalankan pemeriksaan pendorong dan pemeriksaan penghambat sebagai dua putaran terpisah. Kalau pendorongnya kuat tapi konversinya tetap lemah, jawabannya hampir selalu satu atau dua penghambat yang dominan. Obatnya di sisi penawaran harus tepat sasaran: hambatan nilai minta bukti untung yang lebih tajam, defisit kepercayaan minta jaminan pengembalian dan transfer otoritas, ongkos pindah minta bantuan migrasi, rasa tidak adil minta penyetelan ulang harga acuan, bukan diskon.

## 6. Besaran WTP (seberapa besar, bukan cuma mau atau tidak)

Pendorong, penguat, dan penghambat menjelaskan apakah seseorang membayar. Tapi ketiganya belum menetapkan seberapa besar. Pembeli yang digerakkan rasa takut mungkin bayar Rp 500 ribu untuk keamanan rumah, tapi menolak Rp 50 juta untuk hasil yang sama. Besaran itu pertanyaan tersendiri, dan kerangka yang namanya kesediaan membayar wajib menanganinya.

Enam penentu mengatur ukuran angka yang akan diterima seseorang. Penentu ini bekerja di atas kekuatan pendorong: pendorong yang lebih kuat menaikkan langit-langitnya, dan faktor-faktor inilah yang menetapkan di mana angka sebenarnya mendarat di dalam langit-langit itu.

| Penentu | Pengaruhnya pada besaran |
|---------|--------------------------|
| Harga acuan | Harga yang pembeli simpan di kepala, terbentuk dari harga masa lalu, harga pesaing, dan harga pertama yang ia lihat. Penjangkaran bekerja dengan menggeser acuan ini (Thaler, transaction utility). |
| Pendapatan dan anggaran | Langit-langit yang keras. Pendorong yang sama menyangga angka yang sangat berbeda di tiap tingkat pendapatan dan siklus anggaran. |
| Persepsi alternatif | Makin banyak pengganti yang pembeli rasa ada, makin rendah angka yang ia mau terima. Makin sedikit alternatif yang terlihat, makin lebar rentang yang bisa diterima. |
| Tebak kualitas dari harga | Saat kualitas susah dinilai, pembeli membaca harga sebagai sinyal kualitas, dan harga lebih tinggi bisa menaikkan baik nilai yang dirasa maupun angka yang bisa diterima. |
| Rasa keadilan | Harga yang merusak transaksi acuan atau rasa adil akan ditolak terlepas dari kemampuan bayar (Kahneman, Knetsch & Thaler, 1986). |
| Potongan karena risiko | Rasa berisiko gagal mencapai Kondisi B memotong harga yang bisa diterima. Mengurangi risiko lewat jaminan dan bukti menaikkan besaran. |

Langkah praktisnya: pendorong dan posisi menentukan kelas harga yang mau pembeli pertimbangkan, dan enam faktor ini menentukan di pita mana penjual bisa mendarat. Menaikkan besaran sebagian besar pekerjaan menggeser harga acuan, menipiskan alternatif yang terlihat, dan menghapus potongan karena risiko, bukan menambah bujukan emosi.

---

# BAGIAN II: CERMIN PENAWARAN

Sisi permintaan menjelaskan pembelinya. Sisi penawaran adalah apa yang penjual posisikan dan kerahkan untuk menghadapi pembeli itu. Dua sisi ini saling mencerminkan: tiap pendorong punya kategori proposisi nilai pasangannya, dan tiap penguat atau bias punya taktik pasangannya.

## 7. Tiga belas kategori proposisi nilai

Kategori proposisi nilai adalah cara penjual membingkai pendorong mana yang ia layani. Yang dianalisis adalah proposisi nilainya, bukan industrinya. Satu produk bisa menempati beberapa kategori sekaligus, dan produk yang sama bisa diposisikan ulang lintas kategori tanpa mengubah produknya, cukup bingkainya.

| Pendorong | Kategori proposisi nilai | Janji inti |
|-----------|--------------------------|------------|
| Atasi Masalah | Remedy (obat) | Kami hilangkan masalah X. |
| Hiburan | Experience (pengalaman) | Kami bikin kamu merasakan Y. |
| Empati | Cause (kepedulian) | Dengan membayar, kamu menolong Z. |
| Status | Signal (sinyal) | Ini menunjukkan posisimu ke dunia. |
| Rasa Takut | Shield (perisai) | Ini melindungimu dari ancaman X. |
| Rasa Memiliki | Tribe (komunitas) | Kamu jadi bagian dari kelompok ini. |
| Kewajiban | Protocol (protokol) | Ini menunaikan kewajiban sosialmu. |
| FOMO | Access (akses) | Ini terbatas, dan kamu kebagian. |
| Kebiasaan | Subscription (langganan) | Ini selalu ada tanpa perlu kamu pikirkan. |
| Kemudahan | Shortcut (jalan pintas) | Bagian yang merepotkan, kami yang urus. |
| Bertumbuh | Catalyst (katalis) | Ini bikin kamu jadi versi yang lebih baik. |
| Nilai | Alignment (keselarasan) | Ini sejalan dengan yang kamu yakini. |
| Identitas | Canvas (kanvas) | Ini menyatakan siapa kamu sebenarnya. |

Pemetaannya banyak ke banyak. Satu produk bisa melayani beberapa pendorong sekaligus menempati beberapa kategori. Satu pendorong bisa dilayani beberapa kategori. Posisi yang menentukan kategori mana yang ditempati produk pada satu saat.

**Contoh memposisikan ulang.** Asisten pesan untuk bisnis, satu produk, empat bingkai:

| Posisi | Kategori | Pendorong | Arah pesan |
|--------|----------|-----------|------------|
| Remedy | "Tidak ada lagi pesan kelewat" | Atasi Masalah | Menghilangkan masalah |
| Shield | "Jangan sampai pelanggan lari ke pesaing" | Rasa Takut | Melindungi dari ancaman |
| Catalyst | "Naikkan bisnismu ke standar profesional" | Bertumbuh | Transformasi |
| Signal | "Bisnismu sekarang punya asisten AI" | Status | Mengangkat status |

**Analisis celah.** Petakan kategori mana yang sudah terlayani baik dan mana yang masih kurang untuk satu segmen sasaran. Kategori yang kurang terlayani adalah peluang posisi yang tidak menuntut perubahan produk. Misalnya, analisis segmen UMKM Indonesia memunculkan Signal, Shortcut, Catalyst, dan Subscription sebagai kurang terlayani, dan itu menunjuk ke tempat pemain baru bisa masuk tanpa membangun apa pun yang baru.

## 8. Perangkat aktivasi (26 taktik)

Taktik bekerja lewat salah satu jalur: emosi (memicu penguat) atau kognitif (memanfaatkan bias). Dua rambu membatasi seluruh perangkat ini.

**Rambu pengetahuan persuasi.** Begitu orang sadar sebuah tindakan adalah upaya membujuk, ia menolak (Friestad & Wright, 1994). Mengerahkan banyak taktik yang kentara sekaligus bisa menyalakan kesadaran ini dan membatalkan semuanya berbarengan.

**Rambu perlawanan.** Terlalu banyak taktik mengancam rasa bebas memilih dan bisa membalikkan efek yang diinginkan (Brehm, 1966). Pakai paling banyak dua sampai tiga taktik per titik sentuh, dan utamakan yang halus ketimbang yang berlebihan.

### 8.1 Pemicu persuasi (akuisisi)

| Taktik | Memicu | Catatan |
|--------|--------|---------|
| Desain eksklusif (edisi terbatas, kelas VIP) | Harga diri | Prinsip kelangkaan |
| Pemicu pembandingan sosial (papan peringkat, "X orang sudah upgrade") | Iri | Terbukti di sampel 474 konsumen Indonesia |
| Menunjuk kekurangan ("Bisnismu masih manual?") | Malu | Pakai hati-hati; lihat pagar etika |
| Optimasi indrawi (visual premium, desain yang enak diraba) | Hasrat indrawi | Isyarat multi-indra menaikkan kesediaan membayar |
| Tampilan serba ada (tarif rata, "akses semuanya") | Ingin lebih terus | Bias tarif rata |
| Amplifikasi ROI (kalkulator, "Rp 149 ribu menghasilkan Rp 10 juta") | Dorongan menumpuk | Kuat di digital dan inbound, hasilnya campur di penjualan langsung |
| Narasi identitas atau underdog ("kami mulai dari nol") | Identitas | Kisah underdog menaikkan niat dan loyalitas (Paharia dkk., 2011) |
| Kontras usaha ("3 jam manual versus 3 detik otomatis") | Malas repot | Berpasangan dengan penjangkaran |
| Efek IKEA (ikut merakit, bikin sendiri) | Identitas dan Harga diri | Konsumen bayar 63 persen lebih untuk produk yang dirakit sendiri (Norton, Mochon & Ariely, 2012) |

### 8.2 Penghilang gesekan (menerima harga)

| Taktik | Cara kerja |
|--------|------------|
| Bingkai nostalgia (warisan, nuansa Ramadan dan Lebaran) | Melonggarkan kelekatan pada uang lewat rasa terhubung |
| Penjangkaran (tunjukkan opsi yang lebih mahal lebih dulu) | Menyetel ulang titik acuan |
| Arsitektur pembayaran (harga mikro "Rp 5.000 per hari", cicilan) | Memecah angka besar jadi satuan yang terasa lebih kecil |
| Pembundelan | Menyamarkan harga per item dan mengurangi sakit membayar |
| Bayar di depan | Memisahkan saat membayar dari saat menikmati |
| Arsitektur default atau opt-out | Memakai bias status quo dan rasa malas repot |

### 8.3 Pembangun keyakinan (memutuskan beli)

| Taktik | Cara kerja |
|--------|------------|
| Bukti sosial (ulasan, "2.000 bisnis sudah pakai") | Harapan plus meredakan ketidakpastian |
| Visualisasi hasil (demo, "bayangkan dasbormu besok pagi") | Harapan lewat simulasi di kepala |
| Jaminan pengembalian (uji coba gratis, garansi uang kembali) | Menghapus takut akan sisi ruginya; memperbaiki defisit kepercayaan |
| Transfer otoritas (endorsemen pakar, sertifikasi) | Harapan plus kepercayaan |
| Bukaan bertahap (buka fitur baru tiap minggu) | Penasaran |

### 8.4 Mekanisme retensi (mempertahankan)

Ada satu peringatan yang berdiri di atas kategori ini: penguncian bisa berbalik pada pelanggan yang sangat puas, karena di antara mereka yang pengalamannya sangat baik, dikunci malah terbaca sebagai hubungan yang transaksional dan menaikkan churn (JAMS, 2022). Imbangi penguncian dengan nilai yang sungguh diberikan.

| Taktik | Cara kerja |
|--------|------------|
| Personalisasi yang dalam (preferensi yang diingat, kepribadian yang konsisten) | Cinta dan kelekatan |
| Membangun komunitas (grup pengguna, identitas bersama, acara) | Cinta dan rasa memiliki |
| Pajang nilai yang menumpuk ("1.247 percakapan tersimpan", penghitung runtun) | Takut menyesal dan rasa bersalah; menunda batal, bukan menumbuhkan loyalitas |
| Membangun ongkos pindah (integrasi yang dalam, ketergantungan alur kerja) | Takut menyesal |
| Bingkai investasi hubungan ("tim kami sudah hafal bisnismu") | Rasa bersalah dan terima kasih |
| Pemicu reaktivasi ("kamu lewatkan 3 fitur baru", opsi jeda alih-alih batal) | FOMO dan takut menyesal |

### 8.5 Kenapa sisi penawaran bukan cermin yang sempurna

Ada tiga ketimpangan. Sisi penawaran memikul perkakas kognitif (penjangkaran, pembundelan, default) yang tidak punya padanan emosi di sisi permintaan. Satu taktik penawaran bisa memicu beberapa emosi permintaan sekaligus, padahal seseorang cuma mengalami dua atau tiga sekaligus. Dan taktik penawaran adalah tindakan pasti yang penjual pilih, sedangkan emosi permintaan adalah respons untung-untungan yang mungkin nyala mungkin tidak. Perangkat ini berfungsi sebagai daftar pilihan yang bisa penjual kerahkan, dan hasil yang muncul tetap untung-untungan.

---

# BAGIAN III: DINAMIKA

Lapisan-lapisan sebelumnya melukis pembelian sebagai foto diam. Pembelian sungguhan bergerak dalam waktu. Tiga dinamika yang penting: pendorong yang sedang berlaku bergeser sepanjang perjalanan, penguat berguna di tahap yang berbeda-beda, dan tiap pembelian membentuk pembelian berikutnya.

## 9. Perjalanan pembelian dan pergeseran pendorong

Pendorong dominan jarang tetap. Satu pembeli bisa mulai dari Atasi Masalah (muncul satu masalah), lewat Rasa Takut (menimbang risiko salah pilih), lalu tiba di Status atau Identitas (memilih merek yang cocok dengan dirinya) sebelum membayar. Posisi yang terpaku pada satu pendorong sepanjang perjalanan akan kehilangan pembeli di tahap-tahap saat pendorong lain yang memimpin.

Penguat dikelompokkan menurut tahap justru karena ini. Dipetakan ke perjalanan:

| Tahap | Pendorong yang sering memimpin | Penguat yang dipakai | Contoh arah |
|-------|-------------------------------|----------------------|-------------|
| Sadar | Atasi Masalah, Rasa Takut | Penasaran, iri, sedikit malu | "Pesaing sudah balas dalam lima detik." |
| Menimbang | Kemudahan, Bertumbuh | Harapan, harga diri, nostalgia | "Bayangkan bangun pagi, semua sudah rapi." |
| Memutuskan beli | Atasi Masalah, Rasa Takut | Penjangkaran, dorongan menumpuk, takut menyesal | "Rp 149 ribu sebulan. Berapa order hilang minggu lalu?" |
| Onboarding | Bertumbuh | Harapan, penasaran | "Lihat apa yang bisa kamu buka di minggu pertama." |
| Bertahan | Kebiasaan, Kemudahan | Cinta, rasa bersalah, takut menyesal | "Seluruh riwayatmu ada di sini." |
| Advokasi | Status, Nilai, Identitas | Harga diri, cinta | "Tunjukkan hasilmu ke sesama pemilik usaha." |

Disiplin yang dipaksakannya: pakai alat emosi yang tepat di saat yang tepat, jangan ratakan tiap tahap dengan bujukan yang sama. Penguat akuisisi yang dipakai saat retensi, atau sebaliknya, cuma membuang tenaga.

## 10. Putaran umpan balik

Pembelian bukan titik akhir. Ia mengalir balik ke pembeli dan mengubah keputusan berikutnya lewat tiga jalan.

**Kebiasaan terbentuk.** Pembelian yang berulang berpindah dari keputusan Atasi Masalah atau Kemudahan yang sadar menjadi pendorong Kebiasaan, dan di sana ia tahan terhadap pesaing maupun bujukan emosi. Pembelian-pembelian awal di sebuah kategori adalah jendela untuk membangun putaran ini sebelum kebiasaan mengeras di sekitar orang lain.

**Identitas menguat.** Pembelian yang menyatakan identitas memperkuat identitas itu, dan itu menaikkan tarikan pendorong yang sama di lain waktu. Inilah mesin di balik komunitas merek dan pasar subkultur.

**Ekspektasi naik terus.** Tiap kali Kondisi B berhasil diantar, titik acuan untuk pembelian berikutnya ikut disetel ulang. Kesenangan kemarin jadi standar hari ini, dan itu menaikkan baik standar mutu maupun, lewat efek harga acuan, percakapan soal besaran. Strategi retensi harus memperhitungkan standar yang terus bergerak, bukan yang diam.

## 11. Laten dan manifes sebagai sebuah jalan

Bagian 1.2 mengenalkan kondisi laten dan manifes. Sebagai dinamika, gerakan bermargin paling tebal adalah memindahkan sebuah kondisi dari laten ke manifes di benak pasar, lalu menempati jawabannya. Urutannya: sebut kondisi tidak nyaman yang sudah audiens anggap biasa, bikin terasa, lalu sajikan Kondisi B. Ongkosnya adalah edukasi pasar, dibayar sebelum ada pendapatan. Imbalannya adalah kategori tanpa pesaing di awal. Ini gerakan paling berisiko sekaligus paling berharga di kerangka ini, dan sebaiknya dicoba hanya kalau penjual sanggup membiayai edukasi cukup lama sampai pasar menyusul.

---

# BAGIAN IV: PENGUBAH KONTEKS

Lapisan permintaan dan penawaran menggambarkan pembeli yang generik. Empat konteks membengkokkan gambaran itu: siapa yang membeli (organisasi, bukan perorangan), di mana ia berdiri secara budaya, situasi apa yang melingkupi pembeliannya, dan segmen mana yang ia tempati. Melewatkan pengubah ini adalah cara paling umum analisis pendorong yang benar tetap menghasilkan rekomendasi yang salah.

## 12. Pembelian korporat dan organisasi

Sejauh ini kerangkanya menganggap satu orang yang memutuskan dan membayar. Pada pembelian antar-perusahaan dan ke pemerintah, anggapan itu pecah. Yang memutuskan sebuah kelompok, penggunanya jarang sekaligus pembelinya, dan tekanan organisasi menumpuk di atas pendorong tiap individu. Buat siapa pun yang menjual ke perusahaan, holding, atau BUMN, ini pengubah paling penting di kerangka ini.

### 12.1 Pusat pembelian

Pembelian organisasi dibuat oleh pusat pembelian, disebut juga unit pengambil keputusan (DMU): kumpulan orang yang membentuk keputusan itu (Webster & Wind, 1972; Sheth, 1973; Johnston & Bonoma, 1981). Tiap peran memikul pendorong dominan yang berbeda, jadi satu penjualan butuh beberapa pesan berbeda yang ditujukan ke beberapa orang sekaligus.

| Peran | Mereka siapa | Pendorong dominan | Yang perlu mereka dengar |
|-------|--------------|-------------------|--------------------------|
| Pemrakarsa | Mengangkat kebutuhannya | Atasi Masalah | "Ada masalah nyata di sini yang layak ditindak." |
| Pengguna | Yang hidup dengan hasilnya | Kemudahan, Atasi Masalah | "Ini bikin kerja harian saya lebih ringan, bukan tambah ribet." |
| Pemberi pengaruh | Menyusun kriterianya | Atasi Masalah, Bertumbuh | "Ini lolos standar teknis dan menaikkan mutu kami." |
| Pemutus | Pegang otoritas anggaran | Rasa Takut, Status | "Ini pilihan yang aman, bisa dipertanggungjawabkan, dan menaikkan reputasi." |
| Pengadaan | Menjalankan transaksinya | Kewajiban, Kemudahan | "Ini patuh proses, sesuai prosedur, dan mudah diadministrasikan." |
| Penjaga gerbang | Mengatur akses dan informasi | Status, Kebiasaan | "Berurusan dengan kami sepadan dengan waktu Anda dan sesuai cara kerja di sini." |
| Juru bawa internal | Mengusungnya dari dalam | Identitas, Status | "Mendukung ini bikin Anda terlihat bagus dan menaikkan kedudukan Anda." |

Akibat praktisnya: proposal yang cuma bicara ke kemudahan si pengguna akan mentok di pemutus, dan proposal yang cuma bicara ke reputasi si pemutus akan gugur di tinjauan teknis pemberi pengaruh. Petakan dulu pusat pembeliannya, baru tulis satu pesan per peran.

### 12.2 Lapisan organisasi

Di atas pendorong tiap individu, duduk pendorong yang milik organisasinya, bukan orangnya. Ini yang mendominasi pembelian besar dan pembelian BUMN.

- **Kepatuhan pengadaan.** Pembeliannya harus lolos proses formal, dokumentasi, dan audit. Opsi yang secara teknis lebih baik tapi tidak bisa lolos pengadaan tidak akan menang. Ini pendorong Kewajiban di tingkat institusi, dan saat tidak terpenuhi, ia jadi penghambat fungsional yang keras.
- **Siklus anggaran dan dana.** Anggaran organisasi terikat waktu. Pendorong yang hidup tapi jatuh di luar jendela anggarannya berarti tertunda, bukan terjual. Ini penghambat ekonomi pada skala institusi.
- **Risiko karier dan akuntabilitas.** Si pemutus jarang membelanjakan uangnya sendiri, jadi pendorong pribadinya yang dominan adalah Rasa Takut disalahkan atas keputusan buruk. Pilihan yang aman, beracuan kuat, dan bisa dibela mengalahkan yang optimal. Pepatah lama "tidak ada yang dipecat karena memilih yang konservatif" itu pendorong Rasa Takut yang sedang menyamar jadi pengadaan.
- **Butuh konsensus.** Banyak pembelian organisasi menuntut beberapa peran sepakat, dan itu menaikkan bobot defisit kepercayaan serta penghambat status quo. Pilihan diam tidak berbuat apa-apa adalah pesaing terkuat di kebanyakan kesepakatan korporat.
- **Payung politis.** Di BUMN dan pemerintah, keselarasan dengan mandat, regulasi, dan prioritas atasan bisa mengalahkan harga dan mutu. Ini terbaca sebagai pendorong Nilai dan Kewajiban di tingkat institusi.

### 12.3 Apa yang berubah di pembelian korporat

Pendorong, penguat, dan penghambat semuanya berubah bobot. Status dan Identitas pindah dari organisasi ke karier individu. Rasa Takut jadi pendorong utama si pemutus, muncul sebagai risiko dan akuntabilitas. Defisit kepercayaan, ongkos pindah, dan bias status quo jadi penghambat dominan, dan itulah kenapa transfer otoritas, jaminan pengembalian, dan klien acuan lebih berbobot di pembelian korporat daripada penguat hasrat mana pun. Besaran ditentukan oleh otoritas anggaran dan kontrak acuan, bukan kemampuan bayar individu. Perjalanannya lebih panjang, pusat pembeliannya lebih besar, dan ongkos penghambat yang tidak dikelola jauh lebih mahal.

## 13. Pembobotan budaya

Sebagian besar psikologi konsumen disampel di masyarakat Barat yang individualis (De Mooij & Hofstede, 2011; Markus & Kitayama, 1991). Menerapkannya di budaya kolektif tanpa penyesuaian akan salah membaca pendorong mana yang memimpin. Penyesuaian di bawah ditulis untuk konteks Indonesia dan berlaku umum untuk sebagian besar Asia Tenggara dan Asia Timur.

| Unsur | Penyesuaian |
|-------|-------------|
| Rasa Memiliki | Bobotnya jauh lebih tinggi. Di budaya kolektif, jadi bagian kelompok nyaris setara kebutuhan bertahan hidup. |
| Malu | Kemungkinan penguat tunggal terkuat. Cakupan malu lebih luas dari konsep shame Barat, dan ia bisa mendorong pengeluaran melebihi kemampuan kantong. |
| Status | Baca sebagai menjaga muka, yang sifatnya mencegah (menghindari turunnya kedudukan) sama kuatnya dengan mengejar (meraih posisi). Ini nyambung ke penghambat citra dan tradisi. |
| Kewajiban | Bobotnya lebih tinggi. Timbal balik, utang budi, dan budaya traktir tertanam dalam. |
| Identitas | Baca sebagai lebih saling-bergantung, ditentukan oleh relasi dan peran dalam kelompok, ketimbang berdiri sendiri sebagai keunikan individu. |
| Nilai | Tambahkan kepatuhan halal, nilai Islami, dan gotong royong sebagai dimensi nilai yang konkret, melampaui acuan Barat soal keberlanjutan. |
| Label dorongan berlebih | Jangan pakai bingkai "tujuh dosa pokok". Pakai nama mekanismenya saja. Kemasan teologisnya tidak cocok untuk konteks mayoritas Muslim. |

## 14. Nilai situasional dan kondisional

Orang yang sama dengan pendorong yang sama akan menerima nilai yang sangat berbeda tergantung situasi (Belk, 1975; nilai kondisional dalam Sheth, Newman & Gross, 1991). Empat poros situasi menggeser pendorong dominan dan besaran yang bisa diterima.

- **Hadiah versus untuk diri sendiri.** Membeli untuk orang lain menyalakan Kewajiban, Status, dan Rasa Memiliki, dan menoleransi angka lebih tinggi dibanding barang yang sama untuk diri sendiri.
- **Dipakai di depan umum versus pribadi.** Konsumsi yang kelihatan menyalakan Status dan Identitas. Produk yang sama dipakai sendirian jatuh balik ke Atasi Masalah atau Hiburan. Jam tangan yang dipakai ke rapat dan jam tangan yang dipakai di rumah adalah dua pembelian yang berbeda.
- **Mendesak versus santai.** Tekanan waktu menyalakan Kemudahan dan Rasa Takut, memadatkan perjalanan, dan menaikkan angka yang bisa diterima. Pembeli yang sama jadi sensitif harga saat punya waktu, dan buta harga saat tidak.
- **Langka versus melimpah.** Konteks langka menyalakan FOMO dan menaikkan urgensi. Tawaran yang sama di konteks melimpah cuma jalan lewat Atasi Masalah atau Kemudahan.

Pelajaran untuk diagnosis: jangan pernah baca pendorong tanpa situasinya. Pendorong yang benar di situasi yang salah dibaca akan menghasilkan rekomendasi yang yakin tapi keliru.

## 15. Keragaman segmen

Satu produk jarang punya satu pendorong dominan untuk semua pembeli. Asisten pesan yang sama itu pembelian Atasi Masalah buat pemilik yang kewalahan, pembelian Status buat pemilik yang ingin tampak profesional, dan pembelian Kemudahan buat operator yang miskin waktu. Memperlakukan "pelanggan" sebagai satu orang berarti merata-ratakan semuanya jadi pesan yang tidak mendarat ke siapa pun.

Langkah diagnosisnya: segmentasi menurut pendorong dominan, bukan menurut demografi. Tentukan tiap segmen lewat Kondisi A yang ingin ia tinggalkan, kenali pendorong utama per segmen, dan putuskan segmen mana yang dipimpin oleh tawarannya. Analisis celah proposisi nilai di bagian 7 dijalankan per segmen, karena kategori yang kurang terlayani buat satu segmen bisa jadi sudah terlayani baik buat segmen lain.

---

# BAGIAN V: PERANGKAT APLIKASI

Semua di atas itu kosakata diagnosis. Bagian ini mengubahnya jadi prosedur yang bisa diulang: cara menjalankan diagnosis, cara menyaring ide produk, cara menyusun pitch, cara memadatkan sistem supaya cepat, dan cara mulai mengukurnya.

## 16. Metode diagnosis

Jalankan langkah-langkah ini berurutan untuk produk, kampanye, atau tawaran apa pun.

1. **Tentukan transaksinya.** Sebut terus terang siapa membayar siapa untuk apa, dan alat tukarnya uang, perhatian, data, atau waktu.
2. **Sebut Kondisi A dan Kondisi B.** Gambarkan kondisi awal yang tidak diinginkan dengan kata-kata pembeli sendiri, dan kondisi akhir yang diinginkan. Tandai apakah Kondisi A manifes atau laten.
3. **Temukan pendorong utama.** Pakai uji cabut: alasan tunggal mana yang, kalau tidak ada, bikin pembeliannya batal? Itu pendorong utama. Daftar dua atau tiga pendorong sekunder yang menaikkan kesediaan membayar.
4. **Periksa penghambat.** Jalankan daftar penghambat fungsional, psikologis, dan ekonomi. Sebut satu atau dua rem yang terkuat. Kalau produknya gagal, langkah ini biasanya menyimpan jawabannya.
5. **Perkirakan pita besaran.** Pakai enam penentu besaran untuk menetapkan rentang harga yang masuk akal, berjangkar pada harga acuan pembeli, bukan pada biaya.
6. **Tentukan tahap perjalanannya.** Putuskan diagnosis ini untuk tahap yang mana, karena pendorong yang memimpin dan penguat yang tepat berbeda per tahap.
7. **Pilih kategori proposisi nilai.** Pilih bingkai yang cocok dengan pendorong utama, dan cek analisis celah untuk peluang yang kurang terlayani.
8. **Pilih dua atau tiga taktik.** Pilih dari perangkat aktivasi, dicocokkan dengan tahap dan penghambat yang dominan. Patuhi batas dua sampai tiga.
9. **Jalankan pemeriksaan etika.** Terapkan Uji Otonomi Konsumen di bagian 23 sebelum mengerahkan apa pun.

Untuk organisasi, jalankan langkah 3 sampai 8 sekali untuk tiap peran di pusat pembelian.

## 17. Empat saringan produk

Jarak Kondisi A ke Kondisi B yang nyata itu perlu, tapi belum cukup, untuk produk yang menguntungkan. Empat saringan menentukan apakah jaraknya layak dibangun. Keempatnya harus lolos.

- **Intensitas: seberapa sakit Kondisi A?** Sekadar mengganggu memberi kesediaan membayar rendah dan susah dimonetisasi. Bikin frustrasi menyangga model freemium. Mendesak menyangga harga langganan atau transaksi. Putus asa menyangga harga premium. Bangun hanya untuk yang mendesak ke atas.
- **Frekuensi: seberapa sering Kondisi A terasa?** Sekali seumur hidup menyangga pembelian sekali bayar. Tahunan menyangga model tahunan. Bulanan adalah titik manis langganan. Mingguan atau harian memberi nilai seumur hidup tertinggi dan kebiasaan terkuat. Harian plus mendesak adalah kombinasi terbaik di kerangka ini.
- **Alternatif: seberapa baik solusi yang ada memindahkan A ke B?** Belum ada solusi berarti samudra biru yang menuntut edukasi pasar. Solusi yang ada tapi buruk adalah pintu masuk termudah. Solusi yang sudah memadai menuntut pembeda yang kuat. Solusi yang sudah sangat baik berarti jangan masuk. Sasar yang belum ada solusinya atau yang solusinya buruk.
- **Ekonomi: bisakah Kondisi B diantar dengan margin positif?** Biaya mengantar di bawah harga yang mau pembeli bayar berarti lampu hijau. Biaya di atasnya berarti rancang ulang atau batal. Hitung biaya pengembangan, biaya marginal per pengguna, biaya akuisisi, dan nilai seumur hidup.

## 18. Pertanyaan posisi dan proposal

Sebuah perpindahan kondisi itu perlu, tapi belum cukup, untuk sebuah pitch. Ia menjawab kenapa pembeli peduli, dan menyisakan empat pertanyaan terbuka. Proposal yang lengkap menjawab kelimanya.

| # | Pertanyaan | Yang dijaminnya |
|---|------------|-----------------|
| 1 | Kondisi tidak diinginkan mana yang kita hilangkan, atau kondisi diinginkan mana yang kita ciptakan? | Kenapa audiens peduli (premisnya) |
| 2 | Bagaimana kita memindahkan mereka dari A ke B? | Mekanisme pengantarannya |
| 3 | Kenapa kita yang pantas dipercaya melakukannya? | Kredibilitas dan bukti, yang menjawab penghambat kepercayaan |
| 4 | Apakah nilai perpindahannya lebih besar dari harga yang kita minta? | Nilai lawan harga, yang menjawab pertanyaan besaran dan keadilan |
| 5 | Kenapa sekarang? | Pemicu urgensi, yang menjawab penghambat waktu |

Kelimanya memetakan ke pembukaan SCQA untuk bagian awal proposal mana pun. Situasi: audiens ada di Kondisi A, digambarkan dengan bukti. Komplikasi: ini merugikan mereka, dan tidak akan pulih sendiri, karena gaya-gaya ini. Pertanyaan: bagaimana kita memindahkan mereka ke Kondisi B di dalam batasan ini? Jawaban: solusi kami, lewat mekanisme ini, dibuktikan oleh rekam jejak ini, di harga ini, yang mengembalikan nilai ini, dimulai sekarang karena alasan ini.

## 19. Lima rumpun (triase cepat)

Sistem lengkapnya punya banyak unsur, lebih dari yang sanggup dipegang siapa pun sekaligus. Untuk kecepatan, tiga belas pendorong dipadatkan jadi lima rumpun. Ini padatan yang kehilangan detail: rumpun cuma tebakan awal, dan diagnosis sungguhan kembali ke tiga belas yang lengkap. Tapi untuk pembacaan cepat, tanya saja rumpun mana yang memimpin.

| Rumpun | Pendorong di dalamnya | Pembeli sedang berusaha |
|--------|----------------------|-------------------------|
| Lepas dari Beban | Atasi Masalah, Rasa Takut, Kemudahan | Lepas dari kondisi buruk, berisiko, atau melelahkan |
| Menikmati | Hiburan | Mencapai kondisi yang menyenangkan |
| Membangun Diri | Status, Bertumbuh, Identitas | Menyusun atau mengangkat dirinya |
| Rasa Memiliki | Rasa Memiliki, Kewajiban, Empati, Nilai | Mengelola ikatan, kedudukan, dan nurani terhadap orang lain |
| Takut Ketinggalan | FOMO, Kebiasaan | Menjawab tekanan dari waktu dan kesinambungan |

Nilai berdiri di antara Rasa Memiliki dan Membangun Diri, karena sebuah nilai bisa dinyatakan ke luar (sosial) atau dipegang dalam hati sebagai bagian diri. Saat ragu, tempatkan berdasarkan apakah pembeli sedang memberi sinyal ke orang lain (Rasa Memiliki) atau sedang setia pada dirinya sendiri (Membangun Diri).

## 20. Pohon keputusan

Pohon ini mengembalikan pendorong utama, kategori proposisi nilai, set taktik pertama, dan pengingat untuk memeriksa penghambat. Alat interaktif di repositori ini menjalankannya langsung.

```
MULAI: Sebenarnya pembeli mau apa?

1. Lepas dari sesuatu yang buruk?
   - Masalah konkret yang bernama?         -> Atasi Masalah -> Remedy      -> visualisasi hasil, jaminan pengembalian
   - Ancaman atau risiko yang ditakuti?    -> Rasa Takut    -> Shield      -> transfer otoritas, bukti sosial
   - Usaha, waktu, atau kerumitan?         -> Kemudahan     -> Shortcut    -> kontras usaha, arsitektur default

2. Mencapai sesuatu yang menyenangkan?     -> Hiburan       -> Experience  -> optimasi indrawi, umpan rasa penasaran

3. Menyusun atau mengangkat diri?
   - Posisi dibanding orang lain?          -> Status        -> Signal      -> desain eksklusif, pembandingan sosial
   - Jadi lebih cakap?                     -> Bertumbuh     -> Catalyst    -> harapan, visualisasi hasil
   - Menyatakan siapa dirinya?             -> Identitas     -> Canvas      -> narasi identitas, efek IKEA

4. Mengelola orang lain dan nurani?
   - Gabung atau bertahan di kelompok?     -> Rasa Memiliki -> Tribe       -> komunitas, bukti sosial
   - Membalas utang budi?                  -> Kewajiban     -> Protocol    -> timbal balik, bingkai hubungan
   - Meredakan rasa bersalah lihat derita? -> Empati        -> Cause       -> visualisasi hasil
   - Bertindak atas nilai moral?           -> Nilai         -> Alignment   -> transfer otoritas, bingkai nilai

5. Menjawab tekanan waktu dan kesinambungan?
   - Takut ketinggalan?                    -> FOMO          -> Access      -> eksklusif, kelangkaan, penjangkaran
   - Melanjutkan rutinitas yang mapan?     -> Kebiasaan     -> Subscription-> arsitektur default, ongkos pindah

LALU, apa pun cabangnya:
   - Kenali 1 atau 2 penghambat terkuat (fungsional, psikologis, ekonomi).
   - Tetapkan pita besaran dari harga acuan, bukan dari biaya.
   - Jalankan Uji Otonomi Konsumen sebelum mengerahkan.
```

## 21. Alat ukur sementara

Kerangka ini belum punya skala ukur yang tervalidasi, dan ia tidak boleh mengaku punya. Yang berikut adalah seperangkat butir laporan-diri yang masih sementara dan belum tervalidasi, satu atau dua per pendorong, ditulis supaya studi nanti bisa mengujinya. Hari ini, pakai cuma sebagai pemandu wawancara terstruktur, jangan sekali-kali sebagai alat ukur yang tervalidasi.

Tiap butir dinilai pada skala setuju sampai tidak setuju tujuh tingkat, ditanyakan soal pembelian terbaru di kategori itu.

- Atasi Masalah: "Saya beli ini terutama untuk membereskan satu masalah spesifik yang saya alami."
- Hiburan: "Saya beli ini terutama untuk kesenangan atau hiburan."
- Empati: "Saya beli ini terutama karena ia menolong orang yang sedang susah."
- Status: "Saya beli ini sebagian karena pengaruhnya pada cara orang memandang saya."
- Rasa Takut: "Saya beli ini terutama untuk melindungi diri dari sesuatu yang bisa celaka."
- Rasa Memiliki: "Saya beli ini sebagian supaya jadi bagian kelompok yang saya hargai."
- Kewajiban: "Saya beli ini karena merasa punya utang budi."
- FOMO: "Saya beli ini karena takut ketinggalan."
- Kebiasaan: "Saya beli ini tanpa benar-benar memutuskan; memang sudah begitu kebiasaan saya."
- Kemudahan: "Saya beli ini terutama untuk menghemat usaha atau waktu."
- Bertumbuh: "Saya beli ini terutama supaya jadi lebih cakap atau berkembang."
- Nilai: "Saya beli ini karena cocok dengan apa yang saya yakini benar."
- Identitas: "Saya beli ini karena ia menyatakan siapa saya."

Jalan validasinya: uji coba dengan minimal 200 responden per kategori produk, jalankan analisis faktor eksploratori lalu konfirmatori, uji validitas diskriminan lintas tiga belas pendorong, dan buang atau gabung butir yang gagal memisah. Sampai itu beres, perlakukan peringkat pendorong apa pun dari butir ini sebagai hipotesis, bukan hasil ukur.

---

# BAGIAN VI: BATAS

Kerangka yang menjelaskan segalanya tidak meramalkan apa pun. Bagian ini menarik garisnya: di mana kerangka bisa dibuktikan keliru, di mana ia tidak boleh dipakai, bagaimana ia gagal dalam praktik, dan apa yang masih belum bisa ia lakukan.

## 22. Falsifiabilitas dan prediksi uji

Kerangka ini lebih banyak menggolongkan daripada meramalkan. Ia lebih kuat menjelaskan kenapa orang sudah membayar daripada menebak apakah mereka akan membayar. Itu batas yang nyata, sama seperti hierarki Maslow, elements of value Bain, dan teori nilai konsumsi. Menyebut batas ini terus terang yang menjaga kerangka tetap jujur, alih-alih jadi tak terbantah seperti yang Popper khawatirkan dan Lakatos rumuskan.

Untuk bergerak dari sekadar taksonomi menuju sesuatu yang bisa diuji, kerangka harus melahirkan prediksi yang bisa dibuktikan salah. Contoh bentuk yang benar:

- Untuk kebutuhan pokok rutin berharga rendah, pendorong Kebiasaan mestinya meramal beli ulang lebih baik daripada penguat hasrat mana pun, dan bujukan emosi mestinya nyaris tidak menggeser perpindahan merek. Kalau kampanye emosi yang kuat secara konsisten menggeser pokok berbasis kebiasaan tanpa mengubah konteks, itu membantah klaim ketahanan kebiasaan.
- Untuk kategori asuransi dan keamanan, mencabut Rasa Takut dari pesan mestinya meruntuhkan konversi, sedangkan mencabut Status nyaris tidak menggesernya. Kalau pesan Status mengungguli pesan Rasa Takut untuk produk perlindungan murni, itu membantah penetapan pendorong utamanya.
- Untuk barang mewah yang dipakai di depan umum, pesan Status dan Identitas mestinya mengalahkan pesan Atasi Masalah pada kesediaan membayar, dan jaraknya mestinya menyempit saat produk yang sama dibingkai untuk dipakai sendirian. Kalau bingkai publik dan pribadi berkinerja sama persis, klaim situasional di bagian 14 keliru.
- Pada sampel kolektif, bujukan Rasa Memiliki dan malu mestinya mengungguli bujukan yang sama pada sampel individualis untuk produk yang sama. Kalau tidak, klaim pembobotan budaya di bagian 13 keliru.

Yang secara tegas tidak diramalkan kerangka ini: angka persis yang akan dibayar individu tertentu, mana di antara dua pesaing yang setara yang dipilih pembeli, dan bagaimana pendorong berkembang saat kategorinya mendewasa. Ini di luar cakupan, dan yang membutuhkannya butuh alat lain.

Bukti yang membantah, secara umum, terlihat seperti: pembelian yang tidak bisa dijelaskan pendorong mana pun, penetapan pendorong yang gagal uji cabut dalam perbandingan terkendali, atau efek tahap, budaya, atau situasi yang ternyata tidak muncul saat diisolasi. Kerangka ini cuma berharga selama ia terus melahirkan klaim semacam itu.

## 23. Pagar etika

Kerangka ini memetakan titik-titik rapuh psikologis (pendorong), tuas yang memperkuatnya (penguat), dan tindakan yang menarik tuas itu (taktik). Itu juga peta untuk manipulasi. Susser, Roessler, dan Nissenbaum (2019) mendefinisikan manipulasi sebagai memengaruhi keputusan secara diam-diam dengan memanfaatkan titik rapuh si pengambil keputusan. Peta yang sama bisa membantu sebuah pilihan atau mengeksploitasinya. Bedanya bukan di perkakasnya, melainkan di niat dan keterbukaannya, sebab perkakasnya sama saja di kedua arah.

**Uji Otonomi Konsumen.** Sebelum mengerahkan kombinasi pendorong, penguat, dan taktik mana pun, tanya: apakah orang ini tetap akan membeli kalau ia paham betul bagaimana dirinya sedang dipengaruhi? Kalau jawaban jujurnya kemungkinan tidak, kombinasi itu sudah menyeberang dari persuasi ke manipulasi, dan ia tidak boleh dirilis.

**Kombinasi zona merah** yang harus dihindari:

| Kombinasi | Tempat munculnya | Kenapa merah |
|-----------|------------------|--------------|
| Rasa Takut plus malu plus menunjuk kekurangan | Kesehatan dan asuransi | Memanfaatkan cemas dan tekanan sosial untuk menjual perlindungan yang mungkin tidak perlu |
| FOMO plus iri plus sinyal kelangkaan | Investasi dan kripto | Memicu keputusan keuangan yang gegabah di bawah urgensi buatan |
| Kewajiban plus rasa bersalah plus susah membatalkan | Retensi langganan | Menjebak orang di langganan yang tidak diinginkan lewat tekanan sosial dan batin |
| Kebiasaan plus ongkos pindah plus pajang nilai menumpuk | Platform dan perangkat lunak | Membangun ketergantungan alih-alih mengantar nilai yang berlanjut |

Kerangka ini sebaiknya dipakai untuk membantu dan membuka pilihan. Regulator di sejumlah pasar sedang bergerak ke penegakan yang lebih ketat terhadap desain manipulatif, jadi zona merah ini risiko komersial sekaligus risiko etika.

## 24. Mode kegagalan dalam praktik

Kerangka ini gagal dengan cara yang bisa ditebak saat orang menerapkannya. Waspadai ini.

| Mode kegagalan | Tampangnya | Pencegahan |
|----------------|------------|------------|
| Jebakan akademik | Waktu lebih banyak habis memetakan pendorong daripada menghasilkan apa pun | Batasi waktu diagnosis sampai lima belas menit |
| Salah baca kondisi | Kondisi A diasumsikan, tidak pernah dicek ke pembeli sungguhan | Wajibkan minimal satu data yang memvalidasi Kondisi A |
| Buta pendorong tunggal | Semuanya dilabeli Atasi Masalah, dua belas lainnya diabaikan | Tinjau berkala bauran pendorong di seluruh portofolio |
| Layu | Pemakaian merosot setelah semangat awal | Ritual berkala singkat yang mengaudit satu keputusan terhadap kerangka |
| Berlebihan menerapkan | Tiap keluaran kecil dipaksa lewat metode penuh sampai macet | Pemakaian berjenjang: metode penuh untuk taruhan tinggi, kesadaran untuk rutin, bebas untuk yang sekadar pengisi |
| Buta ke dalam | Tim sendiri kena pendorong yang sama saat membeli alatnya | Audit langganan dan vendor sendiri dengan kerangka ini |
| Penguat salah pasang | Penguat akuisisi dipakai saat retensi, atau sebaliknya | Petakan penguat ke tahap perjalanan per bagian 9 |
| Terlalu mengandalkan malu | Kebanyakan pakai malu di pasar kolektif, memicu reaksi balik | Imbangi malu dengan harapan dan kebanggaan di kampanye yang sama |
| Buta penghambat | Menuang lebih banyak bujukan pendorong padahal masalah aslinya di remnya | Jalankan putaran penghambat terpisah sebelum menambah bujukan apa pun |

Catatan penerapan ke dalam: kerangka ini jalan dua arah. Pendorong, penguat, dan bias yang sama yang membuat audiens penjual mau membayar bisa membuat organisasi penjual sendiri membayar untuk alat dan vendor yang sebenarnya tidak mengantar ke Kondisi B. Sebelum belanja internal apa pun, tanya: Kondisi A apa yang sedang kami alami, Kondisi B apa yang dijanjikan, dan apakah perpindahannya nyata dan terukur, atau cuma rasa sedang maju.

## 25. Keterbatasan yang diketahui

Empat batas tetap ada, disebut terus terang.

1. **Belum ada alat ukur tervalidasi.** Belum ada skala yang tervalidasi secara psikometrik untuk tiga belas pendorong. Butir sementara di bagian 21 itu titik awal, bukan hasil ukur. Dua praktisi masih bisa menetapkan pendorong utama yang berbeda untuk audiens yang sama.
2. **Besaran masih sebagian.** Bagian 6 menyebut penentu seberapa besar, tapi kerangka masih lebih kuat meramal pitanya daripada angka persisnya, yang bergantung pada pendapatan, harga acuan, dan persaingan dengan cara yang tidak ditangkap penuh oleh satu alat mana pun.
3. **Dinamika dimodelkan, belum dipecahkan.** Bagian III mengeksplisitkan perjalanan dan umpan balik, tapi belum memberi model kuantitatif soal bagaimana pendorong berpindah seiring waktu. Ia memetakan geraknya tanpa memberi persamaan di baliknya.
4. **Rantai sebab penuh belum diuji dari ujung ke ujung.** Tiap mata rantai dari taktik ke penguat ke pendorong ke pembelian punya dukungan sebagian. Rantai lengkapnya belum divalidasi sebagai satu model dalam satu studi tunggal. Kebersatuannya masih diasumsikan.

Yang versi 5 tutup dibanding versi sebelumnya: ia menambah rem sisi permintaan (penghambat), menangani besaran secara langsung, mengeksplisitkan perjalanan dan umpan balik, menambah pengubah pembelian korporat, situasi, dan segmen, memulihkan perangkat aplikasi, dan melahirkan prediksi uji yang bisa dibuktikan salah. Yang belum ditutup terdaftar di atas, dengan sengaja.

---

# LAMPIRAN: CATATAN PERUBAHAN

**Versi 5.0.** Memulihkan lapisan aplikasi operasional yang versi 4 buang (empat saringan produk, pertanyaan proposal dan SCQA, peta penguat per tahap perjalanan, kondisi laten dan manifes, mode kegagalan). Menambah empat bagian struktural: lapis penghambat sisi permintaan (bagian 5), lapis besaran (bagian 6), bagian dinamika soal pergeseran perjalanan dan umpan balik (Bagian III), dan bagian konteks soal pembelian korporat, situasi, dan segmen (Bagian IV). Menambah lapis kebergunaan untuk mengimbangi ukuran yang membesar: lima rumpun, pohon keputusan, dan alat ukur sementara (Bagian V). Menaikkan bagian falsifiabilitas dari sekadar pengakuan jadi prediksi uji yang nyata (bagian 22). Dibersihkan untuk rilis publik: label dan klasifikasi internal dibuang, satu baris penulis ditetapkan, dan prosanya diselaraskan ke standar tulisan publik.

**Versi 4.0.** Menambah pendorong Identitas (Belk, 1988) dan kategori proposisi nilai Canvas pasangannya. Menambah jalur pintas kognitif. Menambah Bosan, Kagum, dan Rasa Terima Kasih sebagai penguat. Menggolongkan ulang Nostalgia sebagai berfungsi ganda. Memberi syarat pada klaim bahwa emosi tidak bisa menggerakkan pembelian, untuk konteks keterlibatan rendah. Menambah catatan lensa yang tumpang tindih, rambu pengetahuan persuasi dan perlawanan, pagar etika, dan pembobotan budaya. Mengoreksi mekanisme Wrath jadi identitas, bukan amarah.

**Versi 3.0.** Menegakkan arsitektur lima lapis permintaan dan penawaran: premis, dua belas pendorong, empat kategori penguat, dua belas kategori proposisi nilai, dan perangkat aktivasi dua puluh empat taktik.

---

Daftar sumber lengkap ada di `sources.md`. Dokumen ini versi Bahasa Indonesia. Versi kanonik berbahasa Inggris ada di `wtp-framework.en.md`. Keduanya dijaga setara; ubah satu, ubah pasangannya.
