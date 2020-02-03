import { Background } from './background';
import { PlayButton } from './play-button';


const random = (max, min = 0) => min + (max - min) * Math.random();

class Sketch {
  constructor() {
    this.stage = new createjs.Stage('demoCanvas');

    this.addObjects();
  }

  addObjects() {
    this.background = new Background();
    this.stage.addChild(this.background.bitmap);

    this.play = new PlayButton(50, 10);
    this.stage.addChild(this.play.bitmap);
    this.play.bitmap.addEventListener('click', this.scene2.bind(this));

        // for (let index = 0; index < 100; index++) {
        //   let snowflake = new SnowFlake(random(230), random(300));
        //   this.stage.addChild(snowflake.circle);
        //   this.snowflakes.push(snowflake);
        // }

    this.scene1();
  }

  scene1() {
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', this.stage);

  }

  scene2() {
    this.stage.removeChild(this.play.bitmap);

  }


}

const app = new Sketch();