export class FruitSplash {
    constructor(x, y, splashedFruit) {
        this.image = new Image();
        this.image.src = splashedFruit;

        this.bitmap = new createjs.Bitmap(this.image);
        this.bitmap.x = x;
        this.bitmap.y = y;
        this.bitmap.scaleX = 0.5;
        this.bitmap.scaleY = 0.5;
    }
}