/*===== Cria dinâmicamente os 25 pixels =====*/
const pixelBoard = document.getElementById('pixel-board');

function createPixels() {
  for (let index = 0; index < 25; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixelBoard.appendChild(pixels);
  }
}
createPixels();

/* =====  uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro. ===== */

const pixelList = document.getElementsByClassName('pixel');
const palette = document.getElementsByClassName('color');

function colorSelector(event) {
    for (const colors of palette) {
    colors.classList.remove('selected');
  }
  if (event.target.classList.contains('color')) {
    event.target.classList.add('selected');
  }
}
document.addEventListener('click', colorSelector, false);
