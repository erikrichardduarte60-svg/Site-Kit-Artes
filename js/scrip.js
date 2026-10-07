let slideAtual = 0;

function proximoSlide() {
    slideAtual++;

    if (slideAtual >= 4) {
        slideAtual = 0;
    }

    atualizarSlide();
}

function anteriorSlide() {
    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = 3;
    }

    atualizarSlide();
}

function atualizarSlide() {
    const slides = document.querySelector(".slides");

    slides.style.transform = `translateX(-${slideAtual * 25}%)`;
}

// Troca automaticamente a cada 5 segundos
setInterval(proximoSlide, 5000);

function abrirImagem(imagem) {

    const modal = document.getElementById("imagemModal");
    const imagemGrande = document.getElementById("imagemGrande");

    modal.style.display = "flex";

    imagemGrande.src = imagem.src;
}


function fecharImagem() {

    const modal = document.getElementById("imagemModal");

    modal.style.display = "none";
}