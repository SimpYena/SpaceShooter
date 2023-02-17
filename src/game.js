import { Application, Container } from "pixi.js";
import { Setting } from "./settings";
import { GamePlayScene } from "./scenes/gamePlayScene";
export default class Game {
  constructor() {
    this.app = new Application({
      width: Setting.WIDTH,
      height: Setting.HEIGHT,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(this.app.view);
    this.gameContainer = new Container();
    this.app.stage.addChild(this.gameContainer);
    this.app.ticker.add(this.update, this);
    this.initGameScene();
  }
  initGameScene() {
    this.gamePlayScene = new GamePlayScene();
    this.gameContainer.addChild(this.gamePlayScene);
  }
   update(dt) {
    this.gamePlayScene.update(dt);
  }
}
