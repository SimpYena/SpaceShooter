import { Application } from "pixi.js";
import { Setting } from "./settings";
import { GamePlayScene } from "./scenes/gamePlayScene";
export default class Game {
  constructor() {
    this.app = new Application({
      width: Setting.WIDTH,
      height: Setting.HEIGHT,
      backgroundColor: 0x1099bb,
    });
    document.body.appendChild(this.app.view);
    this.app.ticker.add(this.update, this);
    this.initGameScene();
  }
  initGameScene() {
    this.gamePlayScene = new GamePlayScene();
    this.app.stage.addChild(this.gamePlayScene);
  }
  update(dt) {
    this.gamePlayScene.update(dt);
  }
}
