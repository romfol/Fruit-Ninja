import { Fruit } from './fruit';
import blueFruit from './assets/game_fruit_blue.png';
import greenFruit from './assets/game_fruit_green.png';
import orangeFruit from './assets/game_fruit_orange.png';
import purpleFruit from './assets/game_fruit_purple.png';
import redFruit from './assets/game_fruit_red.png';
import yellowFruit from './assets/game_fruit_yellow.png';

const fruits = [blueFruit, greenFruit, orangeFruit, purpleFruit, redFruit, yellowFruit];

const random = (max, min = 0) => min + (max - min) * Math.random();

export class Fruits {
    constructor() {
        this.container = new createjs.Container();
    }

    launch() {
        console.log("launch")
          setInterval(() => {
            this.createAndLaunch();
          }, 2000)
    }

    createAndLaunch() {
        const fruit = this.createFruit()

        this.launchFruit(fruit);
    }

    createFruit() {
        const fruit = new Fruit(random(window.innerWidth), window.innerHeight, fruits[Math.floor(random(6))]);
        this.container.addChild(fruit.bitmap);
        return fruit;
    }

    launchFruit(fruit) {
        createjs.Tween
        .get(fruit.bitmap, {
          loop: false
        })
        .to({
          x: window.innerWidth / random(6, 1.1),
          y: random(window.innerHeight*0.1 , 30)
        }, 1300)
        .to({
          x: window.innerWidth / random(6, 1.1),
          y: window.innerHeight
        }, 1300).
        call((event) => {

        })
    }
      // launchGooseX(goose, timerLength) {
      //   createjs.Tween
      //   .get(goose.container, {
      //     loop: false
      //   })
      //   .to({
      //     x: this.getEndPosition().x
      //   }, timerLength).
      //   call((event) => {
      //     // console.log(goose);
      //     goose.remove()
      //     this.container.removeChild(goose);
      //     goose = null;
      //     this.createAndLaunchGoose()
      //   })
      // }
}