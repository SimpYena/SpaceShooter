import { Container } from "pixi.js";
import { Map } from "../objects/map";
import { SpaceShip } from "../objects/ship";
import { Setting } from "../settings";
import { PointerMove } from "../input/mouse";
export class GamePlayScene extends Container {
  constructor() {
    super();
    this.gameContainer = new Container();
    this.addChild(this.gameContainer);
    this.initMap();
    this.initShip();
    
  }
  initMap() {
    this.map = new Map();
    this.gameContainer.addChild(this.map);
  }
  initShip() {
    this.ship = new SpaceShip();
    this.ship.x = Setting.WIDTH / 2;
    this.ship.y = Setting.HEIGHT - 100;
    this.gameContainer.addChild(this.ship);
    this.pointerMove = new PointerMove(this.ship, this.gameContainer);
  }
  update(dt){
    this.pointerMove.update(dt);
  }
}
