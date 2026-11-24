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