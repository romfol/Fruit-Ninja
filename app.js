import { Background } from './src/background';
import { PlayButton } from './src/play-button';
import { Fruits } from './src/fruits';
import { ResultText } from './src/result-text';
import { GameData } from './src/game-data';

class Sketch {
  constructor() {
    this.canvas = document.getElementById('ninjaCanvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.stage = new createjs.Stage('ninjaCanvas');

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
    this.fruits.start();

    this.gameData = new GameData();
    this.stage.addChild(this.gameData.container);
    this.gameData.init();

    setTimeout(() => {
      this.stage.removeChild(this.fruits.container);
      this.stage.removeChild(this.gameData.container);
      this.scene3();
    }, 30000);
  }

  scene3() {
    this.text = new ResultText(window.points, window.innerWidth / 3, window.innerHeight / 3);
    this.stage.addChild(this.text.text);
  }
}

const app = new Sketch();
