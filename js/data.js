// DATA TEMAN-TEMAN (Ganti dengan data teman Anda sendiri)
const students = [
    {
        nama: "Daffa Aufany Febrianto",
        panggilan: "Daffa",
        foto: "assets/images/students/daffa.jpeg", // Ganti dengan path foto yang benar
        motto: "Jadilah Hambatuhan bukan Ambatukam",
        ttl: "Tegal, 09 Februari 2006",
        hobi: "Workout, Gaming",
        cita: "Software Engineer",
        alamat: "jln.Puri Cilegon Hijau Blok C1 No 19, Cilegon, Banten 42435",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "Pertama kali masuk SMA, gugup karena masih awal perkenalan! Langsung gabung nimbrung teman dan mulai kenal teman-teman baru." },
            { tahun: "2022", kelas: "XI", cerita: "Mulai Sedikit extrovert karena sudah menjadikan teman 1 kelas, apalagi walikelasnya bu suhe :)" },
            { tahun: "2023", kelas: "XII", cerita: "Fokus persiapan UTBK sambil main bareng berpergian entah itu ke pandeglang jakarta dan lain lain. Momen terakhir yang paling berkesan!" }
        ],
        sekarang: "Sekarang kuliah di Telkom University Purwokerto jurusan Software engineering semester 3. Aktif di segala kepanitian HMSE dan tetap bisa main ML sama teman :)."
    },
    {
        nama: "William Juan Sebastian Sinaga",
        panggilan: "Juan",
        foto: "assets/images/students/juan.jpg",
        motto: "Keep spirit",
        ttl: "Cilegon, 8 Januari 2006",
        hobi: "Main game",
        cita: "Guru Bahasa Inggris",
        alamat: "Cilegon, Kec. Cintangkil, Kel. Warnasari",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "Awal awal masuk SMA, gak tau harus ngapain sampai akhirnya ketemu orang baik masukin ke grup buat bantu pas ujian. Karena betah, ya udah saya stay dan akhirnya ada temen juga." },
            { tahun: "2022", kelas: "XI", cerita: "Di tahun ini gak banyak kejadian menarik selain mabar sama temen di kelas pas jamkos atau pas istirahat." },
            { tahun: "2023", kelas: "XII", cerita: "Tahun terakhir di SMA, sama kaya pas tahun kemaren, gak banyak kejadian menarik selain mabar pas jamkos." }
        ],
        sekarang: "Puji Tuhan sekarang Kuliah di Untirta mengambil jurusan pendidikan bahasa Inggris."
    },
    {   
        nama: "Naufal Azka Ghifari Sofwan",
        panggilan: "Ayi",
        foto: "assets/images/students/ghifari.jpeg", // Ganti dengan path foto yang benar
        motto: "Apakah ini… (Stres Carbeat 🫩)?",
        ttl: "Cilegon, Februari 05, 2006",
        hobi: "Suka cw,Jadi Carbeat",
        cita: "Menteri Persawitan",
        alamat: "Taman Krakatau Blok J.3 No. 14",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "Masih bocah lel, ngapain yak gua, belajar naon jir. Izin, Jelek bet kelasnya retak lel, kek mau roboh wkwk, Kaget aja kek sekolah apaan ini, jamkos? Wc g ada pintu? Guru flexing? wkwkw sorry to say." },
            { tahun: "2022", kelas: "XI", cerita: "Pada ngapain jir pek masker sok cantik jir wkwkwk, covid udh g ada lel kocak amat dh orang2. Disini masih bimbang jir, sirkel gede banget kek lahan sawit lel, paling geh bubar wkwk. Susah cari orang Loyal dan rispek" },
            { tahun: "2023", kelas: "XII", cerita: ` Banyak kenangan jir, udh pda membuka diri wkwk, seru dah , pada rispek juga walaupun pada gaje, Semua kek dipaksa  saling happy/kenal/ lebih deket gitu jadi yaaa. 
                        Bukan kahh iniii…(Stress 🫩..)` }
        ],
        sekarang: "Sekarang, gua nulis ini Januari 2026, Alhamdulillah Puji Tuhan gw menempuh pendidikan Sarjana Ilmu Hukum, di Universitas Bakwan, Malang Jatim. yaa so far okelah, smoga bisa terus lancar sampai dunia kerja nanti. Semoga member kutub juga sehat dan diberi kemudahan dan keberkahan semuanya, Amiiinnn."
    },
    {
        nama: "Jembar Ciptarama Buana",
        panggilan: "Mbar",
        foto: "assets/images/students/jembar.jpeg",
        motto: "Masih muda gaboleh banyak ngeluh",
        ttl: "Cilegon, 12 Oktober 2005",
        hobi: "Cari duit",
        cita: "orang kaya",
        alamat: "Komplek H.Arif 2",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "Zaman zaman masih covid pake masker dan kelas online selama satu semester dan zaman dimana saya masih introvert(pendiam), punya temen cuma dion yg akrab sisa nya yah temen biasa." },
            { tahun: "2022", kelas: "XI", cerita: "Zaman - zaman pendidikan paskibra, gak fokus belajar fokus nya pendidikan dan yap saya deket sama seseorang yang saat ini jadi pelajaran hidup." },
            { tahun: "2023", kelas: "XII", cerita: "Zaman bucin banget, punya cewe yg deket dari kelas 11 waktu latihan saman, yah zaman zaman yg paling berkesan disini paling bahagia sampe lupa sama tujuan diri sendiri dan berakhir jadi gemuk." }
        ],
        sekarang: "Bekerja di bidang K3 di PT.Sankyu Indonesia International."
    },
    {
        nama: "Muhammad Lutfi Ilham",
        panggilan: "Ilham",
        foto: "assets/images/students/lutfi.jpeg",
        motto: "membanjiri pikiranku dengan Almussy",
        ttl: "Cilegon, 26 Januari 2006",
        hobi: "Main Cewek Haluw,Carbeat",
        cita: "Menteri Perhutanan",
        alamat: "Jl. sastradikarta No.81",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "-" },
            { tahun: "2022", kelas: "XI", cerita: "-" },
            { tahun: "2023", kelas: "XII", cerita: "-" }
        ],
        sekarang: "Mahasigma Di kampus IPB Kelaz emang,when yah ."
    },
    {
        nama: "Dionisius Widhartono",
        panggilan: "Doni",
        foto: "assets/images/students/dion.jpeg",
        motto: "hidup memang pahit,yang manis cuma senyumnya Mas Ghifari, Awww 😻",
        ttl: "Cilegon, 08 November 2006",
        hobi: "Jajan,Haluin Grup K-pop",
        cita: "Buka Toko",
        alamat: "Taman Cilegon Indah F9",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "-" },
            { tahun: "2022", kelas: "XI", cerita: "-" },
            { tahun: "2023", kelas: "XII", cerita: "-" }
        ],
        sekarang: "Mahasigma Di kampus Binus Tempatnya para Cici Geloo Bisa Gonta Ganti My..."
    },
    {
        nama: "Muhammad ilzam Haqqi J.P.",
        panggilan: "Iljam",
        foto: "assets/images/students/ilzam.jpeg",
        motto: "Jika Anda takut gagal,maka anda tidak pantas sukses",
        ttl: "Sukoharjo, 06 April 2006",
        hobi: "Main Emel Push Pake Argus",
        cita: "Jadi Pria Solo V2",
        alamat: "Jl. semangraya No.44 komplek KS",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "-" },
            { tahun: "2022", kelas: "XI", cerita: "-" },
            { tahun: "2023", kelas: "XII", cerita: "- " }
        ],
        sekarang: "Mahasigma D1 Di UNS Ketemu Pria Solo Terus ampe muag katanya ."
    },
    {
        nama: "Muhammad Haris Danindra",
        panggilan: "Hamris",
        foto: "assets/images/students/haris.jpeg",
        motto: "=",
        ttl: "Cilegon, 66 September 2005",
        hobi: "Wibu,Event Tahunan YTTA",
        cita: "Nikah sama wifu",
        alamat: "Bukit Palm Hills",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "-" },
            { tahun: "2022", kelas: "XI", cerita: "-" },
            { tahun: "2023", kelas: "XII", cerita: "- " }
        ],
        sekarang: "Awalnya Kuliah Di ITENNAS bandung ga tau napa bisa pindah jadi Anak Untirta GG Emang Gap 1 Year.... ."
    },
    {
        nama: "Muhammad Miftahulloh",
        panggilan: "Miftah",
        foto: "assets/images/students/miptah.jpeg",
        motto: "-",
        ttl: "Cilegon, 10 Januari 2006",
        hobi: "Motoran Pake Honda CB",
        cita: "gangster Motor",
        alamat: "Komplek PCI Blok E34 No. 05 Nirwana XXI",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "-" },
            { tahun: "2022", kelas: "XI", cerita: "-" },
            { tahun: "2023", kelas: "XII", cerita: "- " }
        ],
        sekarang: "Mahasigma Di kampus Untirta Jurusan Hukum Katanya Biar bisa debat sama Mas Ayi adu argumen terkait Kinerja Pria Solo ."
    },
    /* Data teman-teman lainnya di-comment sementara
    
    {
        nama: "Andi Wijaya",
        panggilan: "Andi",
        foto: "assets/images/students/andi.jpg", // Ganti dengan path foto yang benar
        motto: "No pain, no gain, no limits",
        ttl: "Surabaya, 10 Januari 2006",
        hobi: "Futsal, Fotografi, Trading",
        cita: "Entrepreneur Sukses",
        alamat: "Jl. Pemuda No. 78, Surabaya, Jawa Timur 60271",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "Gabung tim futsal sekolah sebagai striker. Mulai belajar fotografi secara otodidak." },
            { tahun: "2022", kelas: "XI", cerita: "Mulai bisnis kecil-kecilan jual merchandise custom untuk teman-teman. Lumayan buat jajan!" },
            { tahun: "2023", kelas: "XII", cerita: "Jadi kapten tim futsal dan juara turnamen antar sekolah se-Jatim. Bangga banget!" }
        ],
        sekarang: "Kuliah di ITS jurusan Teknik Industri. Sudah punya startup kecil di bidang e-commerce yang khusus jual produk lokal. Tim futsal kampus juga udah juara tingkat fakultas!"
    },
    {
        nama: "Dewi Lestari",
        panggilan: "Dewi",
        foto: "assets/images/students/dewi.jpg", // Ganti dengan path foto yang benar
        motto: "Be yourself, everyone else is taken",
        ttl: "Yogyakarta, 5 Mei 2006",
        hobi: "Melukis, Traveling, Fotografi",
        cita: "UI/UX Designer",
        alamat: "Jl. Malioboro No. 12, Yogyakarta, DIY 55213",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "Menang lomba desain poster hari lingkungan hidup tingkat kota. Mulai serius belajar design." },
            { tahun: "2022", kelas: "XI", cerita: "Dipercaya design semua banner dan poster acara sekolah. Portfolio makin banyak!" },
            { tahun: "2023", kelas: "XII", cerita: "Pameran karya seni pribadi di sekolah. Beberapa lukisan bahkan berhasil terjual!" }
        ],
        sekarang: "Kuliah di ISI Yogyakarta jurusan Desain Komunikasi Visual. Sering dapat project freelance UI/UX design dari berbagai klien. Masih suka traveling ke tempat-tempat baru buat cari inspirasi!"
    },
    {
        nama: "Rizky Ramadhan",
        panggilan: "Rizky",
        foto: "assets/images/students/rizky.jpg", // Ganti dengan path foto yang benar
        motto: "Stay positive, work hard, make it happen",
        ttl: "Medan, 12 Agustus 2006",
        hobi: "Musik, Ngoding, Gaming",
        cita: "Full Stack Developer",
        alamat: "Jl. Gatot Subroto No. 88, Medan, Sumatera Utara 20112",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "Belajar gitar otodidak dan mulai tertarik sama coding. Bikin website pertama walau masih sederhana." },
            { tahun: "2022", kelas: "XI", cerita: "Jadi bendahara OSIS, sambil aktif di ekskul robotik. Mulai serius belajar programming." },
            { tahun: "2023", kelas: "XII", cerita: "Juara 2 lomba aplikasi mobile tingkat nasional. Sempat viral di sekolah!" }
        ],
        sekarang: "Kuliah di ITB jurusan Informatika. Aktif jadi freelancer developer dan udah handle beberapa project aplikasi mobile. Band kampus juga lagi persiapan rilis single pertama!"
    },
    {
        nama: "Putri Ayu Lestari",
        panggilan: "Putri",
        foto: "assets/images/students/putri.jpg", // Ganti dengan path foto yang benar
        motto: "Life is short, make every hair flip count",
        ttl: "Bali, 3 September 2006",
        hobi: "Dance, Fashion, Make Up",
        cita: "Fashion Designer",
        alamat: "Jl. Sunset Road No. 99, Denpasar, Bali 80361",
        perjalanan: [
            { tahun: "2021", kelas: "X", cerita: "Ikut ekstrakurikuler tari tradisional dan modern. Mulai tertarik dunia fashion dan makeup." },
            { tahun: "2022", kelas: "XI", cerita: "Juara 1 lomba fashion show tingkat provinsi. Desain busana yang dibuat jadi trending topic!" },
            { tahun: "2023", kelas: "XII", cerita: "Jadi koreografer untuk acara pensi sekolah. Performance-nya amazing banget!" }
        ],
        sekarang: "Kuliah di Institut Kesenian Jakarta jurusan Fashion Design. Punya online shop sendiri yang jual produk fashion buatan sendiri. Followers Instagram udah 50K!"
    }
    */
];





