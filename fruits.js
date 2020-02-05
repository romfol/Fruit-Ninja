import { Fruit } from './fruit';
import blueFruit from './assets/game_fruit_blue.png';
import greenFruit from './assets/game_fruit_green.png';
import orangeFruit from './assets/game_fruit_orange.png';
import purpleFruit from './assets/game_fruit_purple.png';
import redFruit from './assets/game_fruit_red.png';
import yellowFruit from './assets/game_fruit_yellow.png';

const fruits = [blueFruit, greenFruit, orangeFruit, purpleFruit, redFruit, yellowFruit];

const random = (max, min = 0) => min + (max - min) * Math.random();

const randomFruit = () => fruits[Math.floor(random(6))];

export class Fruits {
    constructor() {
        this.container = new createjs.Container();
    }

    launch() {
          setInterval(() => {
            this.createAndLaunch();
          }, 2000)
    }

    createAndLaunch() {
        const fruit = this.createFruit()
        this.launchFruit(fruit);
    }

    createFruit() {
        const fruit = new Fruit(random(window.innerWidth), window.innerHeight, randomFruit());

        fruit.bitmap.addEventListener("mousedown", () => this.removeFruit(fruit.bitmap))
        this.container.addChild(fruit.bitmap);
        return fruit;
    }

    removeFruit(fruit) {
      this.container.removeChild(fruit);
    }

    launchFruit(fruit) {
        createjs.Tween.get(fruit.bitmap)
        .to({
          rotation: random(200),
          x: random(40, window.innerWidth - 40),
          y: random(window.innerHeight*0.1 , 30)
        }, 2100)
        .wait(40)
        .to({
          rotation: random(200),
          x: window.innerWidth / random(6, 1.1),
          y: window.innerHeight*1.2
        }, 2100)
        .call(() => {
          this.removeFruit(fruit.bitmap);
        })
    }
}