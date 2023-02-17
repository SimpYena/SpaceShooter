import { Container } from "pixi.js";
import { Map } from "../objects/map";
import { SpaceShip } from "../objects/ship";
import { Setting } from "../settings";
import { PointerMove } from "../input/mouse";
import { Bullet } from "../objects/bullet/bullet";
import { BulletManager } from "../objects/bullet/bullet";
export class GamePlayScene extends Container {
  constructor() {
    super();
    this.gameContainer = new Container();
    this.addChild(this.gameContainer);
    this.initMap();
    this.initShip();
    this.initBulletManager();
    
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
    this.ship.fire = (position) => {
      this.bulletManager.fire(position);
    };
    this.ship.interactive = true;
    this.ship.on("click", () => {
      this.ship.fire(this.ship.position);
    });
  
    // Set the fire() method of the ship to call the bulletManager's fire() method
    this.ship.fire = (position) => {
      this.bulletManager.fire(position);
    };
  }
  initBulletManager() {
    this.bulletManager = new BulletManager(this.gameContainer);
  }
  update(dt){
    this.pointerMove.update(dt);
    this.bulletManager.update(dt);
  }
}
