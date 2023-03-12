import { Application } from "pixi.js";
import { Setting } from "./settings";
// import { GamePlayScene } from "./scenes/gamePlayScene";
import { GameStartScene } from "./scenes/gameStartScene";
export default class Game {
  constructor() {
    this.app = new Application({
      width: Setting.WIDTH,
      height: Setting.HEIGHT,
      backgroundColor: 0x1099bb,
      device
    });
    document.body.appendChild(this.app.view);
    this.app.ticker.add(this.update, this);
    // this.initGameScene();
    this.initGameStartScene();
  }
  // initGameScene() {
  //   this.gamePlayScene = new GamePlayScene();
  //   this.app.stage.addChild(this.gamePlayScene);
  // }
  initGameStartScene() {
    this.gameStartScene = new GameStartScene();
    this.app.stage.addChild(this.gameStartScene);
  }
  update(dt) {
    this.gameStartScene.update(dt)
  }
}
