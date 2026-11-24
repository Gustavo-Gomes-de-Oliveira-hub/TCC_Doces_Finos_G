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



// passo 1 - capturar o formulario no html

const formulario =  document.getElementById("formulario")

// passo 2 - ele vai adicionar um evento ao formulario.

formulario.addEventListener("submit", function(event){


    // impede que a pagina recarregue
    event.preventDefault()

//  3 passo -  armazenar os dados coletados (o id de cada tag)

// captura o nome
let nome = document.getElementById("nome").value

// captura a data do evento de interesse 
let data = document.getElementById("data").value.trim

// captura o telefone para contato
let telefone = document.getElementById("telefone").value

// captura qual é o tipo de evento
let Evento = document.getElementById("Evento").value

//captura a mensagem de observações do usus
let mensagem = document.getElementById("mensagem").value


if( telefone.trim() === ""){
    alert("Digite seu telefone")
    return
}

//passo 4 - montar a mensagem que vai ser enviada no zapzap

const textoWhatsapp =
`Olá Gostaria  de enviar meu interesse em realizar uma encomenda!!\n\n
Nome: ${nome}\n\n
Data: ${data}\n\n
Telefone: ${telefone}\n\n
Encomenda de desejo: ${Evento}\n\n
Observações: ${mensagem}
`
//encodeURIComponent- serve para transformar um texto em codigo 
let mensagemCodificada = encodeURIComponent(textoWhatsapp)

let numeroWhatsapp = "5511959308149"

const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada 

window.location.href = link

});