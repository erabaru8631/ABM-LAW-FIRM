function switchPage(pageId) {
    const allPages = document.querySelectorAll('.page-content');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    if(event && event.target) {
        event.target.classList.add('active');
    }

    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');

    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const lawForm = document.getElementById('lawForm');
    const formResponse = document.getElementById('form-response');

    if (lawForm) {
        lawForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const service = document.getElementById('service-type').value;

            const submitBtn = lawForm.querySelector('.btn-submit');
            submitBtn.innerText = "Mengirim Data...";
            submitBtn.disabled = true;

            setTimeout(() => {
                formResponse.innerHTML = `
                    <strong>Formulir Berhasil Dikirim!</strong><br>
                    Halo ${name}, permohonan analisis kasus <strong>${service}</strong> telah masuk ke sistem data ARIF BIMANTARA MANAGEMENT.<br> 
                    Kami akan segera menghubungi Anda, atau Anda dapat mengonfirmasi langsung ke email resmi kami di <strong>arifbimantara@gmail.com</strong>.
                `;
                formResponse.className = "hidden-message success-message";
                
                lawForm.reset();
                submitBtn.innerText = "Kirim Formulir Konsultasi";
                submitBtn.disabled = false;
            }, 1200);
        });
    }
});
