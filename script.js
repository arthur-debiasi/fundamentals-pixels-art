/* ===== Cria dinamicamente os 25 pixels ===== */
const pixelBoard = document.getElementById('pixel-board');

let gridSize = 5;

function createPixels(gridSize) {
  let pixelAmount = gridSize * gridSize;
  for (let index = 0; index < pixelAmount; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixelBoard.appendChild(pixels);
  }
}
createPixels(gridSize);

/* ====================  uma função para selecionar uma cor na paleta de cores  ==================== */

const pixelList = document.getElementsByClassName('pixel');
const pallete = document.getElementsByClassName('color');
let selectedPixel = document.querySelector('#color-one');
let selectedCSS = window.getComputedStyle(selectedPixel, null);
let selectedColor = selectedCSS.getPropertyValue('background-color');
let pixelTarget;

function colorSelector(event) {
  if (event.target.classList.contains('color')) {
    for (let i = 0; i < pallete.length; i += 1) {
      pallete[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
    selectedPixel = document.querySelector('#color-palette .selected');
    selectedCSS = window.getComputedStyle(selectedPixel, null);
    selectedColor = selectedCSS.getPropertyValue('background-color');
  }
}
document.addEventListener('click', colorSelector, true);

/* Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores. */

function pixelPainter(event) {
  if (event.target.classList.contains('pixel')) {
    pixelTarget = event.target;
    pixelTarget.style.backgroundColor = selectedColor;
  }
}
document.addEventListener('click', pixelPainter, true);

const clearBtn = document.getElementById('clear-board');

function clearBoard() {
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

clearBtn.addEventListener('click', clearBoard);

const input = document.getElementById('board-size');

input.setAttribute('min', 1);

const vqvBtn = document.getElementById('generate-board');
vqvBtn.innerText = 'VQV';

function removePixels() {
  let pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].remove();
  }
}

function boardSizer(event) {
  gridSize = input.value;
  if (gridSize === '') {
    alert('Board inválido!');
  }
  removePixels();
  createPixels(gridSize);
}

vqvBtn.addEventListener('click', boardSizer);
