// 1 Acesar a Janela (browser)
// 2 Pegar o HTML todo
// 3 Pegar botão
// 4 Saber que está sendo clicado no botão

// 5 Acesar a Janela (browser)
// 6 Pegar o HTML todo
// 7 Pegar o elements
// 8 Mover o elements para direita

alert("Web em fase de desenvolvimento ass: Erick Costa")

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function() {
    pixels = pixels - 50
    elements.style = `transform: translateX(${pixels}px)`
});

btnLeft.addEventListener('click', function() {
    pixels = pixels + 50
    elements.style = `transform: translateX(${pixels}px)`
});

