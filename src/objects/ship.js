import { Container, Sprite, Texture } from "pixi.js";
import { PointerMove } from "../input/mouse";
import { Setting } from "../settings";

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
    this.ship.anchor.set(0.5);
    this.addChild(this.ship);
  }
  
  update(dt) {
    // this.move();
  }
}
