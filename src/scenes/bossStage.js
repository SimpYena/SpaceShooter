import { Container, Texture, TilingSprite, Sprite } from "pixi.js";
import { Boss } from "../objects/boss";
import { SpaceShip } from "../objects/ship";
import { BulletManager } from "../objects/bullet/bullet";
import { Setting } from "../settings";
import { CollisionDectect } from "../collide/bosscollide";
import { GameWin } from "../UI/gameWin";
import { GameOver } from "../UI/gameLose";
import { Explosion } from "../explode";
export class BossStage extends Container {
  constructor() {
    super();
    this.bossStageContainer = new Container();
    this.addChild(this.bossStageContainer);
    this.collision = new CollisionDectect();
    this.explosion = new Explosion();
    this.initMap();
    this.initBoss();
    this.initShip();
    this.initBulletManager();
    this.initWin();
    this.initLose();
  }
  initMap() {
    let texture = Texture.from("map.png");
    this.map = new Sprite(texture);
    this.map = new TilingSprite(texture, Setting.WIDTH, Setting.HEIGHT);
    this.bossStageContainer.addChild(this.map);
  }
  initBoss() {
    this.boss = new Boss();
    this.boss.health = 200;
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
  initWin(){
    this.win = new GameWin();
    this.win.visible = false;
    this.addChild(this.win);
  }
  initLose(){
    this.lose = new GameOver();
    this.lose.visible = false;
    this.addChild(this.lose);
  }
  update(dt) {
    this.map.tilePosition.y += 0.5;
    this.bulletManager.update(dt);
    this.boss.update(dt);
    this.bulletManager.bullets.forEach((bullet) => {
      if(this.collision.collisondetect(bullet,this.boss)){
        this.boss.health -= 10;
        this.bulletManager.bullets.splice(this.bulletManager.bullets.indexOf(bullet), 1);
        this.bossStageContainer.removeChild(bullet);
      }
    });
    if(this.boss.health<=0){
      this.bossStageContainer.removeChild(this.boss);
      this.win.visible = true;
      this.bossStageContainer.visible = false;
      this.bossStageContainer.destroy();
    }
    if(this.collision.collisondetect(this.ship,this.boss)){
      this.explosion.x = this.ship.x;
      this.explosion.y = this.ship.y;
      this.bossStageContainer.addChild(this.explosion);
      this.explosion.initPlay();
      this.bossStageContainer.removeChild(this.ship);
      setInterval(() => {
        this.lose.visible = true;
        this.bossStageContainer.visible = false;
        this.bossStageContainer.destroy();
      }, 1000);
    }
  }
  
}
