document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".btn-card");

    // ANIMAÇÃO DE ENTRADA SUAVE
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 150);
    });

    // PULSAÇÃO NEON INFINITA
    setInterval(() => {
        cards.forEach(card => {
            card.style.boxShadow =
                "0 0 20px #00eaff, 0 0 60px #00eaff";

            setTimeout(() => {
                card.style.boxShadow =
                    "0 0 10px #00eaff80";
            }, 300);
        });
    }, 2000);
});
