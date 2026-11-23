// serve para fazer a onde sumir quando rolar a pagina

const topoFixo = document.querySelector(".topo-fixo");

if (topoFixo) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            topoFixo.classList.add("onda-escondida");
        } else {
            topoFixo.classList.remove("onda-escondida");
        }
    }, { passive: true });
}