import { Background } from './background';
import { PlayButton } from './play-button';
import { Fruits } from './fruits';
import { ResultText } from './result-text';
import { GameData } from './game-data';

class Sketch {
  constructor() {
    this.stage = new createjs.Stage('demoCanvas');
    this.score = 0;
    this.addObjects();
  }

  addObjects() {
    this.background = new Background();
    this.stage.addChild(this.background.bitmap);

    this.play = new PlayButton(50, 10);
    this.stage.addChild(this.play.bitmap);
    this.play.bitmap.addEventListener('click', this.scene2.bind(this));

    this.scene1();
  }

  scene1() {
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', this.stage);

  }

  scene2() {
    this.stage.removeChild(this.play.bitmap);

    this.fruits = new Fruits();
    this.stage.addChild(this.fruits.container);
    this.fruits.launch();

    this.gameData = new GameData();
    this.stage.addChild(this.gameData.container);
    this.gameData.init();

    this.stage.addChild(this.fruits.container);

    setTimeout(() => {
      this.stage.removeChild(this.fruits.container);
      this.stage.removeChild(this.gameData.container);
      this.scene3()
    }, 30000);
  }

  scene3() {

    this.text = new ResultText(this.score);
    this.stage.addChild(this.text.text);
  }
}

const app = new Sketch();