// Fungsi untuk membuat initial dari nama
function getInitial(name) {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
}

let currentSearchTerm = '';
let currentFilterTag = 'all';

// Render student cards
function renderStudents(filteredStudents = students) {
    const grid = document.getElementById('studentsGrid');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    
    if (filteredStudents.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    filteredStudents.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.onclick = () => openModal(index, filteredStudents);
        
        // Gunakan foto jika ada, jika tidak gunakan initial
        const avatarContent = student.foto 
            ? `<img src="${student.foto}" alt="${student.nama}" class="avatar-image" onerror="this.parentElement.textContent='${getInitial(student.nama)}'">`
            : getInitial(student.nama);
        
        card.innerHTML = `
            <div class="student-avatar">${avatarContent}</div>
            <h3>${student.nama}</h3>
            <p>${student.panggilan}</p>
            <span class="badge">${student.cita}</span>
        `;
        
        grid.appendChild(card);
    });
}

// Terapkan search + filter tag
function applyFilters() {
    let filtered = students;

    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        filtered = filtered.filter(student =>
            student.nama.toLowerCase().includes(term) ||
            student.panggilan.toLowerCase().includes(term)
        );
    }

    if (currentFilterTag !== 'all') {
        filtered = filtered.filter(student =>
            Array.isArray(student.tags) && student.tags.includes(currentFilterTag)
        );
    }

    renderStudents(filtered);
}

// Open modal dengan data student
function openModal(index, studentsList = students) {
    const student = studentsList[index];
    const modal = document.getElementById('modal');
    
    // Gunakan foto di modal jika ada, jika tidak gunakan initial
    const modalAvatarEl = document.getElementById('modalAvatar');
    if (student.foto) {
        modalAvatarEl.innerHTML = `<img src="${student.foto}" alt="${student.nama}" class="modal-avatar-image" onerror="this.parentElement.textContent='${getInitial(student.nama)}'">`;
    } else {
        modalAvatarEl.textContent = getInitial(student.nama);
    }
    document.getElementById('modalName').textContent = student.nama;
    document.getElementById('modalMotto').textContent = `"${student.motto}"`;
    
    const biodataGrid = document.getElementById('biodataGrid');
    biodataGrid.innerHTML = `
        <div class="info-item">
            <label>Nama Panggilan</label>
            <span>${student.panggilan}</span>
        </div>
        <div class="info-item">
            <label>Tempat, Tanggal Lahir</label>
            <span>${student.ttl}</span>
        </div>
        <div class="info-item">
            <label>Hobi</label>
            <span>${student.hobi}</span>
        </div>
        <div class="info-item">
            <label>Cita-cita</label>
            <span>${student.cita}</span>
        </div>
    `;
    
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = student.perjalanan.map(item => `
        <div class="timeline-item">
            <h4>${item.tahun} - Kelas ${item.kelas}</h4>
            <p>${item.cerita}</p>
        </div>
    `).join('');

    document.getElementById('address').textContent = student.alamat;
    document.getElementById('currentLife').textContent = student.sekarang;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Klik area gelap untuk menutup modal
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll untuk navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight + 5;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// function renderCategoryPage(tag) {
//   const categoryPage = document.getElementById("categoryPage");
//   const studentsGrid = document.getElementById("studentsGrid");
//   const noResults = document.getElementById("noResults");

//   const category = categoryPages[tag];
//   if (!category) return;

//   // Sembunyikan students
//   studentsGrid.style.display = "none";
//   noResults.style.display = "none";

//   // Tampilkan category page
//   categoryPage.style.display = "block";
//   categoryPage.innerHTML = `
//     <div class="section-header">
//       <h2>${category.title}</h2>
//       <p>${category.description}</p>
//     </div>
//   `;

//   category.items.forEach(item => {
//     categoryPage.innerHTML += `
//       <div class="category-card">
//         <img src="${item.foto}" alt="${item.nama}">
//         <h3>${item.nama}</h3>
//         <p>${item.komentar}</p>
//       </div>
//     `;
//   });
// }

function renderCategoryPage(tag) {
  const categorySection = document.getElementById("categorySection");
  const categoryPage = document.getElementById("categoryPage");
  const studentsGrid = document.getElementById("studentsGrid");
  const noResults = document.getElementById("noResults");

  const category = categoryPages[tag];
  if (!category) return;

  // Hide students
  studentsGrid.style.display = "none";
  noResults.style.display = "none";

  // Show category page
  categorySection.style.display = "block";
  categoryPage.innerHTML = `
    <div class="section-header">
      <h2>${category.title}</h2>
      <p>${category.description}</p>
    </div>

    <div class="category-grid">
      ${category.items.map(item => `
        <div class="category-card">
          <img src="${item.foto}" alt="${item.nama}">
          <h3>${item.nama}</h3>
          <p>${item.komentar}</p>
        </div>
      `).join("")}
    </div>
  `;
}


// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    // render awal
    applyFilters();

    document.getElementById("categorySection").style.display = "none";


    // Musik latar
    // const musicToggle = document.getElementById('musicToggle');
    // const bgMusic = document.getElementById('bgMusic');

    // if (musicToggle && bgMusic) {
    //     let isPlaying = false;

    //     musicToggle.addEventListener('click', () => {
    //         if (isPlaying) {
    //             bgMusic.pause();
    //             isPlaying = false;
    //             musicToggle.classList.remove('playing');
    //             musicToggle.textContent = '🎵 Play';
    //         } else {
    //             bgMusic.play();
    //             isPlaying = true;
    //             musicToggle.classList.add('playing');
    //             musicToggle.textContent = '⏸ Pause';
    //         }
    //     });
    // }

    // Search + filter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearchTerm = e.target.value;
            applyFilters();
        });
    }

            filterSelect.addEventListener("change", e => {
        const value = e.target.value;
        const categoryPage = document.getElementById("categoryPage");
        const studentsGrid = document.getElementById("studentsGrid");

        if (value === "all") {
            categoryPage.style.display = "none";
            studentsGrid.style.display = "grid";
            applyFilters();
        } else {
            renderCategoryPage(value);
        }
        });
    

    // Hamburger menu toggle untuk mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Tutup menu saat klik link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Tutup menu saat klik di luar
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

// function renderCategory(tag) {
//   const container = document.getElementById("categoryPage");
//   const grid = document.getElementById("studentsGrid");

//   grid.style.display = "none";
//   container.style.display = "grid";
//   container.innerHTML = "";

//   kategoriData[tag].forEach(item => {
//     container.innerHTML += `
//       <div class="category-card">
//         <img src="${item.foto}">
//         <h3>${item.nama}</h3>
//         <p>${item.komentar}</p>
//       </div>
//     `;
//   });
// }

// filterSelect.addEventListener("change", e => {
//   const value = e.target.value;

// //   if (value === "all") {
// //     categoryPage.style.display = "none";
// //     studentsGrid.style.display = "grid";
// //     applyFilters();
// //   } else {
// //     renderCategory(value);
// //   }
//   if (value === "all") {
//   categorySection.style.display = "none";
//   studentsGrid.style.display = "grid";
//   applyFilters();
// }

// });


