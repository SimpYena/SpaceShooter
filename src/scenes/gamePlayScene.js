import { Container } from "pixi.js";
import { Map } from "../objects/map";
import { SpaceShip } from "../objects/ship";
import { Setting } from "../settings";
export class GamePlayScene extends Container {
  constructor() {
    super();
    this.gameContainer = new Container();
    this.addChild(this.gameContainer);
    this.initMap();
  }
  initMap() {
    this.map = new Map();
    this.gameContainer.addChild(this.map);
    this.initShip();
  }
  initShip() {
    this.ship = new SpaceShip();
    this.ship.x = Setting.WIDTH / 2;
    this.ship.y = Setting.HEIGHT - 100;
    this.gameContainer.addChild(this.ship);
    this.ship.move();
  }
  update(dt) {
    this.dt += 1;
  }
}
