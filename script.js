document.addEventListener('DOMContentLoaded', () => {
    const lawForm = document.getElementById('lawForm');
    const formResponse = document.getElementById('form-response');

    if (lawForm) {
        lawForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service-type').value;

            const submitBtn = lawForm.querySelector('.btn-submit');
            submitBtn.innerText = "Memproses Formulir Anda...";
            submitBtn.disabled = true;

            setTimeout(() => {
                formResponse.innerHTML = `
                    <strong>Terima Kasih, ${name}.</strong><br>
                    Permintaan konsultasi mengenai <strong>Hukum ${service}</strong> telah kami terima. 
                    Firma Hukum ABM akan menghubungi Anda melalui email <strong>${email}</strong> dalam waktu maksimal 1x24 jam kerja.
                `;
                formResponse.className = "hidden-message success-message";
                
                lawForm.reset();
                submitBtn.innerText = "Kirim Formulir Konsultasi";
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});
