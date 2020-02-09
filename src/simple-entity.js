export class SimpleEntity {
  constructor(x, y, entity) {
    this.image = new Image();
    this.image.src = entity;

    this.bitmap = new createjs.Bitmap(this.image);
    this.bitmap.x = x;
    this.bitmap.y = y;
    this.bitmap.scaleX = 0.5;
    this.bitmap.scaleY = 0.5;
  }
}
