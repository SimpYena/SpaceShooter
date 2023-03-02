import { Container } from "pixi.js";
import { Enemy } from "./enemy";
import { Setting } from "../../settings";
export class EnemyController extends Container {
  constructor() {
    super();
    this.createManyEnemys();
  }
  //create enemy in random position x
  createManyEnemys() {
    this.enemies = [];
    this.enemyInterval = setInterval(() => {
      this.enemy = new Enemy();
      this.addChild(this.enemy);
      this.enemy.x = Math.floor(Math.random() * Setting.WIDTH - 70);
      this.enemy.y = Setting.HEIGHT - 550;
      this.enemies.push(this.enemy);
    }, 1000);
  }

  // Move the enemy spaceships down the screen and remove them if they go offscreen
  moveEnemy() {
    this.enemies.forEach((enemy) => {
      enemy.y += 1;
      if (enemy.y > Setting.HEIGHT + 50) {
        // this.removeChild(enemy);
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
      }
    });
  }
  update(dt) {
    this.moveEnemy();
  }
}
