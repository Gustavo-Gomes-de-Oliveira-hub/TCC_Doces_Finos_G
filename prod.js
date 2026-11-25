// fazer com que a onda suma depois da primeira esseão

const topoFixo = document.querySelector(".topo-fixo");

if (topoFixo) {
    function atualizarOndaHeader() {
        if (window.scrollY > 40) {
            topoFixo.classList.add("onda-escondida");
        } else {
            topoFixo.classList.remove("onda-escondida");
        }
    }

    window.addEventListener("scroll", atualizarOndaHeader, { passive: true });
    window.addEventListener("resize", atualizarOndaHeader);
    atualizarOndaHeader();
}


// Configuração do ScrollReveal
const sr = ScrollReveal({
    origin: "bottom",
    distance: "35px",
    duration: 800,
    delay: 150,
    reset: false
});

// Título do catálogo
sr.reveal(".produtos h1", {
    origin: "top"
});

// Animação dos cards de produtos
sr.reveal(".card", {
    interval: 150,
    origin: "bottom"
});

// Botão do catálogo de docinhos
sr.reveal(".btn-docinhos", {
    delay: 200,
    origin: "bottom"
});

