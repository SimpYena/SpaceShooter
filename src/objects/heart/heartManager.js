import { Container } from "pixi.js";
import { Heart } from "./heart";
import { Setting } from "../../settings";
export class HeartManager extends Container {
  constructor(container) {
    super();
    this.container = container;
    this.hearts = [];
    this.createManyheart();
  }

  createManyheart() {
    for (let i = 0; i < 5; i++) {
      this.heart = new Heart();
      this.container.addChild(this.heart);
      let x = i * 30;
      let y = Setting.HEIGHT - 50;
      let heart = this.heart.createHeart(x, y, 30, 30);
      this.hearts.push(heart);
    }
  }
}
