// fazer com que a onda suma depois da primeira esseão

const topoFixo = document.querySelector(".topo-fixo");
const primeiraSessao = document.querySelector(".banner");

if (topoFixo && primeiraSessao) {
    function atualizarOndaHeader() {
        // Pega a posição inferior da primeira sessão em relação à tela
        const fimPrimeiraSessao = primeiraSessao.getBoundingClientRect().bottom;
        const alturaHeader = topoFixo.offsetHeight;

        // Quando o final da primeira sessão subir além do header, esconde a onda
        if (fimPrimeiraSessao <= alturaHeader) {
            topoFixo.classList.add("onda-escondida");
        } else {
            topoFixo.classList.remove("onda-escondida");
        }
    }

    window.addEventListener("scroll", atualizarOndaHeader, { passive: true });
    window.addEventListener("resize", atualizarOndaHeader);
    atualizarOndaHeader(); // Garante o estado certo ao carregar a página
}