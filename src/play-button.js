import button from '../assets/play-btn.png'

export class PlayButton {
    constructor(x, y) {
        this.image = new Image();
        this.image.src = button;

        this.bitmap = new createjs.Bitmap(this.image);
        this.bitmap.x = x;
        this.bitmap.y = y;
    }
}