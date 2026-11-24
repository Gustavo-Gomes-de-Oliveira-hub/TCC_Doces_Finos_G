// fazer com que a onda suma depois de rolar a página
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

// Animações ao rolar na página Sobre
const sr = ScrollReveal({
    origin: "bottom",
    distance: "35px",
    duration: 800,
    delay: 150,
    reset: true
});

// Banner inicial
sr.reveal(".titulo-inicio h1", {
    origin: "top",
    delay: 100
});

sr.reveal(".titulo-inicio p", {
    origin: "bottom",
    delay: 220
});

// Segunda sessão: Nossa História (foto à esquerda, texto à direita)
sr.reveal(".foto-his", {
    origin: "left"
});

sr.reveal(".contando-historia", {
    origin: "right",
    delay: 200
});

// Terceira sessão: Nosso Diferencial (texto à esquerda, foto à direita)
sr.reveal(".contando-diferencial", {
    origin: "left"
});

sr.reveal(".foto-dif", {
    origin: "right",
    delay: 200
});

// Botão de encomenda
sr.reveal(".bnt-enco", {
    origin: "bottom",
    delay: 250
});