import button from '../assets/play-btn.png'

export class PlayButton {
    constructor() {
        this.image = new Image();
        this.image.src = button;

        this.bitmap = new createjs.Bitmap(this.image);
        this.bitmap.x = (window.innerWidth - this.image.width) / 2;
        this.bitmap.y = 20;
    }
}