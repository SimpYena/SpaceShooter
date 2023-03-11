import { Container, Text, TextStyle } from "pixi.js";
import { CollisionDetector } from "../collide/collidedetect";
import { Setting } from "../settings";

export class GameWin extends Container {
  constructor() {
    super();
    this.createText();
    this.collide = new CollisionDetector();
  }
  createText() {
    let text = new Text("VICTORY");
    text.anchor.set(0.5);
    text.x = Setting.WIDTH / 2;
    text.y = Setting.HEIGHT/ 2;
    this.addChild(text);
  }
}
