let indexAtual = 0;
const wrapper = document.getElementById('slideWrapper');
const imagens = wrapper.querySelectorAll('img');

function mostrarImagem() {
    const slideLargura = imagens[0].offsetWidth;
    const deslocamento = -indexAtual * slideLargura;
    wrapper.style.transform = `translateX(${deslocamento}px)`;
}

function avancarFoto() {
  indexAtual = (indexAtual + 1) % imagens.length;
  mostrarImagem();
}

function voltarFoto() {
  indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem();
}