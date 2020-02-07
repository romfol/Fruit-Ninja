export class GameResult {
    constructor(score) {
        this.text = new createjs.Text(`Total score: ${score}`, "20px Arial", "white");

        this.text.x = (window.innerWidth - 130) / 2;
        this.text.y = window.innerHeight / 2;;
    }
}