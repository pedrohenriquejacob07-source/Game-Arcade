// Seleciona todos os links do seu body
const links = document.querySelectorAll("body a");

// Cria um container para os cards
const container = document.createElement("div");
container.className = "container-links";

// Move os links para dentro de cards organizados
links.forEach(link => {
    const card = document.createElement("div");
    card.className = "card";

    // Coloca o link dentro do card
    card.appendChild(link.cloneNode(true));

    container.appendChild(card);
});

// Limpa o body e adiciona o container
document.body.innerHTML = "<h1>Portal de Projetos</h1>";
document.body.appendChild(container);
