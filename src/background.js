import background from '../assets/game_bg.jpg';

export class Background {
    constructor() {
        this.image = new Image();
        this.image.src = background;
        this.bitmap = new createjs.Bitmap(this.image);
    }
}


