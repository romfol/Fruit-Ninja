import { Fruit } from './fruit';

const random = (max, min = 0) => min + (max - min) * Math.random();

export class Fruits {
    constructor() {
        this.container = new createjs.Container();
    }

    launch() {
        console.log("launch")
        for (let i = 0; i < 4; i++) {
            this.createAndLaunch();
        }
    }

    createAndLaunch() {
        const fruit = this.createFruit()

        this.launchFruit(fruit);
        // console.log()

        // const fruit =  new Fruit(random(200), random(200));
        // this.container.addChild(fruit.bitmap);
    }

    createFruit() {
        const fruit =  new Fruit(random(200), random(200));
        this.container.addChild(fruit.bitmap);
        return fruit;
    }

    launchFruit(fruit) {
        createjs.Tween
        .get(fruit.bitmap, {
          loop: false
        })
        .to({
          x: 320
        }, 1000).
        call((event) => {
        //   console.log(000, goose);
        //   goose.remove()
        //   this.container.removeChild(goose);
        //   goose = null;
        //   this.createAndLaunchGoose()
        })
    }
      launchGooseX(goose, timerLength) {
        createjs.Tween
        .get(goose.container, {
          loop: false
        })
        .to({
          x: this.getEndPosition().x
        }, timerLength).
        call((event) => {
          // console.log(goose);
          goose.remove()
          this.container.removeChild(goose);
          goose = null;
          this.createAndLaunchGoose()
        })
      }
}