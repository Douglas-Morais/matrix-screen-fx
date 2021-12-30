export class FallingChar {
  charArr = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', 'А', 'Б', 'В', 'Г', 'Д',
    'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р',
    'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э',
    'Ю', 'Я', '∀', '∃', '∅', '∈', '∉', '∞', 'π', '∑', '∇', '‽', '¤',
    '¢', '£', '¥', '§', 'Ξ', 'ξ', 'ρ', 'γ', 'δ', 'ζ', 'η', 'λ', 'ω',
  ];

  constructor(x, y, fontSize, canvasWidth, canvasHeight, maxColumns) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.maxColumns = maxColumns;
  }

  draw(ctx) {
    this.value =
      this.charArr[Math.floor(Math.random() * (this.charArr.length - 1))].toUpperCase();

    this.speed = (Math.random() * this.fontSize * 3) / 4 + (this.fontSize * 3) / 4;

    ctx.fillStyle = 'rgba(0,255,0)';
    ctx.font = this.fontSize + 'px san-serif';
    ctx.fillText(this.value, this.x, this.y);
    this.y += this.speed;

    if (this.y > this.canvasHeight) {
      this.y = (Math.random() * this.canvasHeight) / 2 - 50;
      this.x = Math.floor(Math.random() * this.maxColumns) * this.fontSize;
      this.speed = (-Math.random() * this.fontSize * 3) / 4 + (this.fontSize * 3) / 4;
    }
  }
}
