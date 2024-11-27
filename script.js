document.addEventListener("DOMContentLoaded", function() {
    // Selecione todos os links de navegação que possuem href começando com #
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    // Selecione o botão do menu hambúrguer e a navegação
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    // Navegação suave
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Evita o comportamento padrão de navegação do link
            const targetId = this.getAttribute("href"); // Obtém o ID do destino do link
            const targetElement = document.querySelector(targetId); // Encontra o elemento destino

            if (targetElement) {
                // Calcula a posição do destino, considerando a altura do cabeçalho
                const targetPosition = targetElement.offsetTop - document.querySelector('header').offsetHeight;
                // Realiza o scroll suave até o destino
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funcionalidade do menu hambúrguer
    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' na navegação (isso vai abrir/fechar o menu em dispositivos móveis)
        nav.classList.toggle('active');
    });

    // Controle do carrossel de planos
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const cards = document.querySelectorAll(".plan-card");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    // Atualiza a posição do carrossel ao mudar de slide.
    function updateCarousel() {
        const offset = -currentIndex * cards[0].offsetWidth;
        carouselWrapper.style.transform = `translateX(${offset}px)`;
    }

    // Avança para o próximo slide.
    nextButton.addEventListener("click", () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Volta para o slide anterior.
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Ajusta o carrossel ao redimensionar a janela.
    window.addEventListener("resize", updateCarousel);
});
