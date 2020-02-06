export class ResultText {
    constructor(score, x, y) {
        this.text = new createjs.Text(`Total score: ${score}`, "20px Arial", "white");
        this.text.x = x;
        this.text.y = y;
    }
}