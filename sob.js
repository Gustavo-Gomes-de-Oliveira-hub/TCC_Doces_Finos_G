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

// para deixar as informações só aparecerem quando for rolando a tela

const sr = ScrollReveal({
    origin: "bottom",
    distance: "35px",
    duration: 800,
    delay: 150,
    reset: true //permite esconder/resetar ao rolar para cima e reaparecer depois
});

// Segunda sessão: história
sr.reveal("#text-historia", {
    origin: "left"
});

sr.reveal("#imagem-historia", {
    origin: "right",
    delay: 250
});

// Terceira sessão: mais pedidos (um após o outro)
sr.reveal(".pedidos h1", {
    origin: "top"
});

sr.reveal(".contatiner-pedido", {
    interval: 150
});

sr.reveal(".produtos-saber", {
    delay: 200
});

// Quinta sessão: mapa e loja
sr.reveal(".mapa-ft h1", {
    origin: "top"
});

sr.reveal(".mapa-loja", {
    origin: "left"
});

sr.reveal(".mont-loja", {
    origin: "right",
    delay: 200
});