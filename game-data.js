import { Timer } from './timer';
import { ResultText } from './result-text';

export class GameData {
    constructor() {
        this.container = new createjs.Container();
    }


    init() {
        this.timer = new Timer(this.time);
        this.container.addChild(this.timer.timer);

        this.text = new ResultText(this.score = 0, window.innerWidth - 150, 20);
        this.container.addChild(this.text.text);

        this.timerId = setInterval(this.countdown.bind(this), 1000);
    }

    countdown() {
        if (this.timer.timer.text == 0) {
          clearTimeout(this.timerId);
        } else {
            this.timer.timer.text--
        }
      }
}