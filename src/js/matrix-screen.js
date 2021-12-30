import { FallingChar } from './falling-char.class.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let maxCharCount = 150;
let fallingCharArr = [];
let fontSize = 12;
let maxColumns = canvasWidth / fontSize;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

let frames = 0;

let update = () => {
  if (fallingCharArr.length < maxCharCount) {
    let fallingChar = new FallingChar(
      Math.floor(Math.random() * maxColumns) * fontSize,
      (Math.random() * canvasHeight) / 2 - 50,
      fontSize,
      canvasWidth,
      canvasHeight,
      maxColumns
    );
    fallingCharArr.push(fallingChar);
  }
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
    fallingCharArr[i].draw(ctx);
  }

  requestAnimationFrame(update);
  frames++;
};

update();