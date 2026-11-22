
// fazer com que a onda suma depois da primeira esseão

const topoFixo = document.querySelector(".topo-fixo");
const primeiraSessao = document.querySelector(".imagem");

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

// FAZER AS BOLINHAS E MUDAR O PRIMEIRO FEEDBACK SEMPRE QUE A PAGINA FOR RECARREGADA
// 1. Lista com os depoimentos que podem aparecer em primeiro
const depoimentos = [
    {
        nome: "JOTAPÊ | MC",
        arroba: "@jotape4real",
        foto: "./img/jjjj.jpg",
        texto: '"Salve, família! Na correria entre estúdio e batalha, eu precisava de um bolo de respeito pra comemorar com a banca e acertei em cheio pedindo aqui. A massa chegou fofinha demais, recheio absurdo de bom e no ponto certo, sem ser enjoativo. Trabalho feito com capricho de verdade e entrega super rápida. Podem pedir sem medo que os caras são protagonistas na confeitaria!"'
    },
    {
        nome: "CAMILA ROCHA",
        arroba: "@jotape4real",
        foto: "./img/JOTAPE.jpg",
        texto: '"Encomendei o bolo de brigadeiro com leite ninho pro aniversário da minha mãe e foi sucesso absoluto na mesa. Todo mundo pediu o contato da doceria!"'
    },
    {
        nome: "LUCAS MENDES",
        arroba: "@jotape4real",
        foto: "./img/JOTAPE.jpg",
        texto: '"Atendimento super rápido e os doces chegaram bem embalados e frescos. Dá pra sentir o cuidado em cada detalhe da receita."'
    },
    {
        nome: "CIBELE",
        arroba: "@jotape4real",
        foto: "./img/jjjj.jpg",
        texto: '"Atendimento super rápido e os doces chegaram bem embalados e frescos. Dá pra sentir o cuidado em cada detalhe da receita."'
    }
];

// 2. Pega o primeiro card (.feedback) que já está dentro do .carrosel
const primeiroFeedback = document.querySelector(".carrosel .feedback");

if (primeiroFeedback && depoimentos.length > 0) {
    // Sorteia um número entre 0 e a quantidade de depoimentos - 1
    const indiceSorteado = Math.floor(Math.random() * depoimentos.length);
    const escolhido = depoimentos[indiceSorteado];

    // Troca a foto, nome, @ e texto do primeiro card
    const imgCliente = primeiroFeedback.querySelector(".cliente img");
    const nomeCliente = primeiroFeedback.querySelector(".depoimento h1");
    const arrobaCliente = primeiroFeedback.querySelector(".depoimento h3");
    const textoCliente = primeiroFeedback.querySelector(".depoimento p");

    if (imgCliente) imgCliente.src = escolhido.foto;
    if (nomeCliente) nomeCliente.textContent = escolhido.nome;
    if (arrobaCliente) arrobaCliente.textContent = escolhido.arroba;
    if (textoCliente) textoCliente.textContent = escolhido.texto;
}

const carrosel = document.querySelector(".carrosel");
const slides = document.querySelectorAll(".carrosel .feedback");
const dotsContainer = document.querySelector(".carrossel-dots");

if (carrosel && slides.length > 0 && dotsContainer) {
    // 1. Cria uma bolinha para cada card de feedback
    slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.classList.add("carrossel-dot");
        dot.setAttribute("aria-label", `Ir para feedback ${index + 1}`);

        if (index === 0) dot.classList.add("ativa");

        // Ao clicar na bolinha, rola o carrossel até o slide correspondente
        dot.addEventListener("click", () => {
            carrosel.scrollTo({
                left: index * carrosel.clientWidth,
                behavior: "smooth"
            });
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".carrossel-dot");

    // 2. Atualiza qual bolinha fica destacada conforme o usuário arrasta ou rola
    carrosel.addEventListener("scroll", () => {
        const indiceAtual = Math.round(carrosel.scrollLeft / carrosel.clientWidth);

        dots.forEach((dot, i) => {
            dot.classList.toggle("ativa", i === indiceAtual);
        });
    });

    // 3. Garante o alinhamento correto se a janela mudar de tamanho (ex: girar tela ou redimensionar)
    window.addEventListener("resize", () => {
        const indiceAtual = Math.round(carrosel.scrollLeft / carrosel.clientWidth);
        carrosel.scrollTo({
            left: indiceAtual * carrosel.clientWidth,
            behavior: "auto"
        });
    });
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