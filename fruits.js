import { Fruit } from './fruit';

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

        const fruit = new Fruit(random(window.innerWidth), window.innerHeight);
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
          y: random(window.innerHeight*0.2 , 30)
        }, 1800)
        .to({
          x: window.innerWidth / random(6, 1.1),
          y: window.innerHeight
        }, 1800).
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