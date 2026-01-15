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

