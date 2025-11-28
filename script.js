// Anima os botões quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".btn-card");

    cards.forEach((card, index) => {
        // adiciona classe inicial invisível
        card.classList.add("fade-in");

        // animação em cascata
        setTimeout(() => {
            card.style.transition = "0.7s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});
