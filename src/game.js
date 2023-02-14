import { Application, Container } from "pixi.js";
import { Setting } from "./settings";
export default class Game {
  constructor() {
    this.app = new Application({
      width: Setting.WIDTH / 2,
      height: Setting.HEIGHT,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(this.app.view);
  }
}
