function switchPage(pageId) {
    // Sembunyikan semua kontainer halaman portal
    const allPages = document.querySelectorAll('.page-content');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // Munculkan halaman target yang dipilih publik
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Reset status menu aktif
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    if (event && event.target && event.target.classList.contains('nav-item')) {
        event.target.classList.add('active');
    }

    // Tutup menu otomatis versi HP
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }

    // Scroll otomatis ke atas halaman portal
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    // Tombol Hamburger Menu HP
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Logika Simulasi Submit Formulir Pengaduan Kasus
    const portalForm = document.getElementById('portalForm');
    const responseMsg = document.getElementById('responseMsg');

    if (portalForm) {
        portalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const clientName = document.getElementById('clientName').value;

            responseMsg.innerHTML = `Terima kasih <strong>${clientName}</strong>, laporan kasus Anda telah berhasil kami enkripsi secara rahasia dan aman. Konsultan hukum ABM Center akan meninjau dokumen ini segera.`;
            responseMsg.style.display = 'block';

            portalForm.reset();
        });
    }
});
