import { Fruit } from './fruit';
import { FruitSplash } from './fruit-splash';
import blueFruit from './assets/game_fruit_blue.png';
import blueFruitSplashed from './assets/game_fruit_blue_s.png';
import greenFruit from './assets/game_fruit_green.png';
import greenFruitSplashed from './assets/game_fruit_green_s.png';
import orangeFruit from './assets/game_fruit_orange.png';
import orangeFruitSplashed from './assets/game_fruit_orange_s.png';
import purpleFruit from './assets/game_fruit_purple.png';
import purpleFruitSplashed from './assets/game_fruit_purple_s.png';
import redFruit from './assets/game_fruit_red.png';
import redFruitSplashed from './assets/game_fruit_red_s.png';
import yellowFruit from './assets/game_fruit_yellow.png';
import yellowFruitSplashed from './assets/game_fruit_yellow_s.png';


const fruits = [
  [
   blueFruit,
   blueFruitSplashed
  ],
  [
   greenFruit,
   greenFruitSplashed
  ],
  [
   orangeFruit,
   orangeFruitSplashed
  ],
  [
   purpleFruit,
   purpleFruitSplashed
  ],
  [
   redFruit,
   redFruitSplashed
  ],
  [
   yellowFruit,
   yellowFruitSplashed
  ]
];

const random = (max, min = 0) => min + (max - min) * Math.random();

const randomFruit = () => Math.floor(random(6));

export class Fruits {
  constructor() {
    this.container = new createjs.Container();
    window.points = 0;
  }

  launch() {
    setInterval(() => {
      this.createAndLaunch();
    }, 2000);
  }

  createAndLaunch() {
    const fruit = this.createFruit();
    this.launchFruit(fruit);
  }

  createFruit() {
    const randomFruitId = randomFruit();
    const fruit = new Fruit(random(window.innerWidth), window.innerHeight, fruits[randomFruitId][0], randomFruitId);

    fruit.bitmap.addEventListener('mousedown', () => this.fruitOnCLick(fruit));

    this.container.addChild(fruit.bitmap);
    return fruit;
  }

  fruitOnCLick(fruit) {
    this.removeFruit(fruit.bitmap);
    window.points += Math.ceil(random(29, 4));

    this.addFruitSplash(fruit);
  }

  addFruitSplash(fruit) {
    const fruitSplash = new FruitSplash(fruit.bitmap.x - 100, fruit.bitmap.y - 60, fruits[fruit.randomId][1]);
    this.container.addChild(fruitSplash.bitmap);
  }

  removeFruit(fruit) {
    this.container.removeChild(fruit);
  }

  launchFruit(fruit) {
    createjs.Tween.get(fruit.bitmap)
      .to(
        {
          rotation: random(200),
          x: random(40, window.innerWidth - 40),
          y: random(window.innerHeight * 0.1, 30),
        },
        2100
      )
      .wait(40)
      .to(
        {
          rotation: random(200),
          x: window.innerWidth / random(6, 1.1),
          y: window.innerHeight * 1.2,
        },
        2100
      )
      .call(() => {
        this.removeFruit(fruit.bitmap);
      });
  }
}
