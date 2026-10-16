document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave APENAS para links internos (que começam com #)
    const links = document.querySelectorAll('.nav-links a[href^="#"], .btn-outline[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Compensa o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
    // ==========================================
    // LÓGICA DO CARROSSEL DE FOTOS
    // ==========================================
    const carousels = document.querySelectorAll('.carousel-wrapper');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');

        // Botão de Próximo (Seta para direita)
        nextBtn.addEventListener('click', () => {
            const slideWidth = track.clientWidth;
            track.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

        // Botão de Voltar (Seta para esquerda)
        prevBtn.addEventListener('click', () => {
            const slideWidth = track.clientWidth;
            track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });
    });
});