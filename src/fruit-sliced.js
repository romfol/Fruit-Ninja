import { SimpleEntity } from './simple-entity';
import { random } from '../helpers';

export class FruitSliced {
  constructor(x, y, leftPart, rightPart) {
    this.leftPart = leftPart;
    this.rightPart = rightPart;
    this.container = new createjs.Container();

    this.fruitX = x;
    this.fruitY = y;
  }

  init() {
    const leftSlice = new SimpleEntity(this.fruitX - 40, this.fruitY , this.leftPart);
    this.container.addChild(leftSlice.bitmap);

    const rightSlice = new SimpleEntity(this.fruitX + 40, this.fruitY, this.rightPart);
    this.container.addChild(rightSlice.bitmap);

    this.animate(leftSlice);
    this.animate(rightSlice);
  }

  animate(slice) {
    createjs.Tween.get(slice.bitmap)
    .to(
      {
        y: slice.bitmap.y - random(50),
      },
      200
    )
    .wait(30)
    .to(
      {
        rotation: random(200),
        x: window.innerWidth / random(6, 1.1),
        y: window.innerHeight * 1.2,
      },
      2100
    )
    .call(() => {
      this.container.removeChild(slice.bitmap);
    });
  }

}
