import { Background } from './src/background';
import { PlayButton } from './src/play-button';
import { Fruits } from './src/fruits';
import { GameResult } from './src/game-result';
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

    this.play = new PlayButton();
    this.stage.addChild(this.play.bitmap);
    this.play.bitmap.addEventListener('click', this.scene1.bind(this));

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', this.stage);
  }

  scene1() {
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
      this.scene2();
    }, 30000);
  }

  scene2() {
    this.gameResult = new GameResult(window.points);
    this.stage.addChild(this.gameResult.text);
  }
}

const app = new Sketch();
