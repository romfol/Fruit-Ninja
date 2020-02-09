import background from '../assets/game_bg.jpg';

export class Background {
  constructor() {
    this.image = new Image();
    this.image.src = background;

    this.bitmap = new createjs.Bitmap(this.image);
    console.log(11, window.innerWidth, this.image, this.image.height);
    this.bitmap.scaleX = window.innerWidth / this.image.width;
    this.bitmap.scaleY = window.innerHeight / this.image.height;
  }
}
