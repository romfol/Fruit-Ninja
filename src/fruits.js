import { Fruit, SimpleEntity, FruitSliced, SplashedBackground } from './';
import { fruits, random } from '../helpers';

const randomFruit = () => Math.floor(random(6));

export class Fruits {
  constructor() {
    this.container = new createjs.Container();
    window.points = 0;
  }

  start() {
    this.splashedBackground = new SplashedBackground();
    this.container.addChild(this.splashedBackground.container);

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
    const fruit = new Fruit(
      random(window.innerWidth),
      window.innerHeight,
      fruits[randomFruitId][0],
      randomFruitId
    );
    fruit.bitmap.addEventListener('mousedown', this.fruitOnCLick.bind(this, fruit));
    this.container.addChild(fruit.bitmap);
    return fruit;
  }

  fruitOnCLick(fruit) {
    this.removeFruit(fruit.bitmap);
    window.points += Math.ceil(random(29, 4));

    this.addFruitSplash(fruit);
    this.addSlicedFruit(fruit);
  }

  addSlicedFruit(fruit) {
    const fruitSliced = new FruitSliced(
      fruit.bitmap.x,
      fruit.bitmap.y,
      fruits[fruit.randomId][2],
      fruits[fruit.randomId][3]
    );
    this.container.addChild(fruitSliced.container);
    fruitSliced.init();
  }

  addFruitSplash(fruit) {
    const fruitSplash = new SimpleEntity(
      fruit.bitmap.x - 100,
      fruit.bitmap.y - 60,
      fruits[fruit.randomId][1]
    );
    this.splashedBackground.container.addChild(fruitSplash.bitmap);
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
        1500
      )
      .wait(40)
      .to(
        {
          rotation: random(200),
          x: window.innerWidth / random(6, 1),
          y: window.innerHeight,
        },
        1500
      )
      .call(() => {
        this.removeFruit(fruit.bitmap);
      });
  }
}
