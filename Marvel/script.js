// Seleciona o elemento do retângulo (cubo) pelo ID
const cubo = document.getElementById('meuCubo');

// Evento: Quando o mouse entra na área do retângulo
cubo.addEventListener('mouseenter', () => {
    cubo.classList.add('ativo');
});

// Evento: Quando o mouse sai da área do retângulo
cubo.addEventListener('mouseleave', () => {
    cubo.classList.remove('ativo');
});