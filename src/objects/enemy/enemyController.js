import { Container } from "pixi.js";
import { Enemy } from "./enemy";
import { Setting } from "../../settings";
import { BulletEnemy } from "../bullet/bulletEnemy";

export class EnemyController extends Container {
    constructor(container) {
        super();
        this.container = container;
        this.createManyEnemys();
        this.enemies = [];
        this.bullets = [];
    }
    //create enemy in random position x 
    createManyEnemys() {
        this.enemyInterval = setInterval(() => {
            this.enemy = new Enemy();
            this.bullet = new BulletEnemy();
            this.container.addChild(this.enemy);
            this.container.addChild(this.bullet);
            this.enemy.x = Math.floor(Math.random() * Setting.WIDTH - 100);
            this.enemy.y = Setting.HEIGHT/8;
            this.bullet.x = this.enemy.x + this.enemy.width / 2 - this.bullet.width / 2 - 27;
            this.bullet.y = this.enemy.y + this.enemy.height;
            this.enemies.push(this.enemy);
            this.bullets.push(this.bullet);
        }, 1000)
    }

    // Move the enemy spaceships down the screen and remove them if they go offscreen
    moveEnemy() {
        this.enemies.forEach((enemy) => {
            enemy.y += 1;
            if (enemy.y > Setting.HEIGHT + 50) {
                this.container.removeChild(enemy);
                this.enemies.splice(this.enemies.indexOf(enemy), 1);
            }
        })
    }

    //fire bullet for enemy
    // fireBullet() {
    //     this.bulletInterval = setInterval(() => {
    //         this.enemies.forEach((enemy) => {
    //             this.bullet = new BulletEnemy();
    //             this.bullet.x = enemy.x + enemy.width / 2 - this.bullet.width / 2;
    //             this.bullet.y = enemy.y + enemy.height;
    //             this.bullets.push(this.bullet);
    //             this.addChild(this.bullet)
    //         })
    //     }, 1000);


    // Move buller for enemy
    moveBullet() {
        this.bullets.forEach((bullet) => {
            bullet.y += 3;
            if (bullet.y > Setting.HEIGHT + 50) {
                this.container.removeChild(bullet);
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }
        })
    }
    update(dt) {
        this.moveEnemy()
        this.moveBullet()
        // this.fireBullet()
    }
}

