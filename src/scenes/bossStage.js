import { Container, Texture, TilingSprite, Sprite } from "pixi.js";
import { Boss } from "../objects/boss";
import { SpaceShip } from "../objects/ship";
import { BulletManager } from "../objects/bullet/bullet";
import { Setting } from "../settings";
export class BossStage extends Container {
  constructor() {
    super();
    this.bossStageContainer = new Container();
    this.addChild(this.bossStageContainer);
    this.initMap();
    this.initBoss();
    this.initShip();
    this.initBulletManager();
  }
  initMap() {
    let texture = Texture.from("map.png");
    this.map = new Sprite(texture);
    this.map = new TilingSprite(texture, Setting.WIDTH, Setting.HEIGHT);
    this.bossStageContainer.addChild(this.map);
  }
  initBoss() {
    this.boss = new Boss();
    this.boss.x = Setting.WIDTH / 3;
    this.boss.y = Setting.HEIGHT/ 10;
    this.boss.width = 8;
    this.boss.height = 8;
    this.bossStageContainer.addChild(this.boss);
  }
  initShip() {
    this.ship = new SpaceShip();
    this.ship.x = Setting.WIDTH / 2;
    this.ship.y = Setting.HEIGHT - 100;
    this.bossStageContainer.addChild(this.ship);

    this.ship.interactive = true;
    this.ship.on("click", () => {
      this.ship.fire(this.ship.position);
    });
    this.ship.fire = (position) => {
      this.bulletManager.fire(position);
    };
  }
  initBulletManager() {
    this.bulletManager = new BulletManager(this.bossStageContainer);
  }
  update(dt) {
    this.map.tilePosition.y += 0.5;
    this.bulletManager.update(dt);
    this.boss.update(dt);
  }
}
