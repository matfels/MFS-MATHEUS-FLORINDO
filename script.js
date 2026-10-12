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
});