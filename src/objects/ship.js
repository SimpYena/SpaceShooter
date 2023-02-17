import { Container, Sprite, Texture } from "pixi.js";
import { PointerMove } from "../input/mouse";

export class SpaceShip extends Container {
  constructor() {
    super();
    this.create();
  }
  create() {
    const texture = Texture.from("ship.png");
    this.ship = new Sprite(texture);

    this.ship.width = 64;
    this.ship.height = 64;
    this.addChild(this.ship);
  }
  move() {
    new PointerMove(this.ship, this.gameContainer);
  }
  update(dt) {
    this.move();
  }
}
