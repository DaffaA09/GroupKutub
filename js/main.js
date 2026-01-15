// Fungsi untuk membuat initial dari nama
function getInitial(name) {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
}

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

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = students.filter(student =>
        student.nama.toLowerCase().includes(searchTerm) ||
        student.panggilan.toLowerCase().includes(searchTerm)
    );
    renderStudents(filtered);
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

// Render awal saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
    renderStudents();
});
