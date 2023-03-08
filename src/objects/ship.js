import { Container, Sprite, Texture } from "pixi.js";
import { Setting } from "../settings";
import { PointerMove } from "../input/mouse";

export class SpaceShip extends Container {
  constructor() {
    super();
    this.create();
    this.move();
  }
  create() {
    const texture = Texture.from("ship.png");
    this.ship = new Sprite(texture);

    this.ship.width = 64;
    this.ship.height = 64;
    this.ship.anchor.set(0.5);
    this.addChild(this.ship);
  }
  move() {
    PointerMove.move(this);
  }

  update(dt) {
    // this.move();
  }
}
