import {
  Container,
  TilingSprite,
  Sprite,
  Texture,
  Text,
  BitmapText,
  BitmapFont,
} from "pixi.js";
import { SpaceShip } from "../objects/ship";
import { Setting } from "../settings";
import { PointerMove } from "../input/mouse";
import { BulletManager } from "../objects/bullet/bullet";
import { EnemyController } from "../objects/enemy/enemyController";
import { CollisionDetector } from "../collide/collidedetect";
import EventEmitter from "eventemitter3";
import { Heart } from "../objects/heart/heart";
import { GameOver } from "../UI/gameLose";
export class GamePlayScene extends Container {
  constructor() {
    super();
    this.gameContainer = new Container();
    this.addChild(this.gameContainer);
    this.initMap();
    this.initShip();
    this.initHeart();
    this.initEnemy();
    this.initBulletManager();
    // this.emitter = new EventEmitter();
    this.initCollisionDetector();
    this.initGameLose();
  }
  initMap() {
    let texture = Texture.from("map.png");
    this.map = new Sprite(texture);
    this.map = new TilingSprite(texture, Setting.WIDTH, Setting.HEIGHT);
    this.gameContainer.addChild(this.map);
  }
  initShip() {
    this.ship = new SpaceShip();
    this.ship.x = Setting.WIDTH / 2;
    this.ship.y = Setting.HEIGHT - 100;
    this.gameContainer.addChild(this.ship);
    // this.pointerMove = new PointerMove(this.ship, this.gameContainer);

    this.ship.interactive = true;
    this.ship.on("click", () => {
      this.ship.fire(this.ship.position);
    });
    this.ship.fire = (position) => {
      this.bulletManager.fire(position);
    };
  }
  initBulletManager() {
    this.bulletManager = new BulletManager(this.gameContainer);
  }

  initEnemy() {
    this.enemyController = new EnemyController(this.gameContainer);
    this.gameContainer.addChild(this.enemyController);
  }

  initHeart() {
    this.heart = new Heart(this.gameContainer);
    this.gameContainer.addChild(this.heart);
  }
  initGameLose() {
    this.gameOver = new GameOver();
    this.gameOver.visible = false;
    this.addChild(this.gameOver);
  }

  initCollisionDetector() {
    this.collisionDetector = new CollisionDetector(
      this.bulletManager.bullets,
      this.enemyController.enemies,
      this.gameContainer
    );
    this.collisionDetector1 = new CollisionDetector(
      this.enemyController.bullets,
      this.ship,
      this.gameContainer
    );
    this.collisionDetector2 = new CollisionDetector(
      this.enemyController.enemies,
      this.ship,
      this.gameContainer
    );
  }

  update(dt) {
    this.map.tilePosition.y += 0.5;
    this.bulletManager.update(dt);
    this.enemyController.update(dt);
    this.collisionDetector.checkCollisions();
    this.collisionDetector1.checkCollisions1(this.heart.hearts);
    this.collisionDetector2.checkCollisions2(this.heart.hearts);
    if (this.heart.hearts.length == 0) {
      this.gameOver.visible = true;
      this.gameContainer.visible = false;
    }
  }
}
