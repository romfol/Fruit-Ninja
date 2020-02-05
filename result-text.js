export class ResultText {
    constructor(score) {
        this.text = new createjs.Text(`Total score: ${score}`, "20px Arial", "white");
        this.text.x = window.innerWidth/4;
        this.text.y = window.innerHeight/3;
    }
}