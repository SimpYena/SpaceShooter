import { Container } from "pixi.js";
import { Enemy } from "./enemy";
import { Setting } from "../../settings";
import { BulletEnemy } from "../bullet/bulletEnemy";
import { contain } from "../../contain";

export class EnemyManager extends Container {
    constructor(container) {
        super();
        this.container = container;
        this.enemies = [];
        this.bullets = [];
        this.createManyEnemys();
        this.fireBullet()
    }
    // create enemy in random position x
    createManyEnemys() {
        // this.enemyInterval = setInterval(() => {
        //     this.enemy = new Enemy();
        //     this.bullet = new BulletEnemy();
        //     this.container.addChild(this.enemy);
        //     this.container.addChild(this.bullet);
        //     this.enemy.vy = 1;
        //     this.enemy.x = Math.floor(Math.random() * Setting.WIDTH - 100);
        //     this.enemy.y = Setting.HEIGHT / 8;
        //     this.bullet.x = this.enemy.x + this.enemy.width / 2 - this.bullet.width / 2 - 30;
        //     this.bullet.y = this.enemy.y + this.enemy.height;
        //     this.enemies.push(this.enemy);
        //     this.bullets.push(this.bullet);
        // }, 1000)
        for (let x = 1; x < 12; x++) {
            for (let y = 1; y < 3; y++) {
                this.enemy = new Enemy();
                this.enemy.vx = 2;
                this.enemy.x = x * 80;
                this.enemy.y = y * 50;
                this.container.addChild(this.enemy);
                this.enemies.push(this.enemy)

            }
        }
    }

    //fire bullet for enemy
    fireBullet() {
        this.bulletInterval = setInterval(() => {
            const randomEnemy = this.enemies[Math.floor(Math.random() * this.enemies.length)];
            if (randomEnemy) {
                this.bullet = new BulletEnemy();
                this.bullet.x = randomEnemy.x + randomEnemy.width / 2 - this.bullet.width / 2;
                this.bullet.y = randomEnemy.y + randomEnemy.height;
                this.bullets.push(this.bullet);
                this.container.addChild(this.bullet);
            }
        }, Math.random() * 500);
    }

    // Move the enemy spaceships down the screen and remove them if they go offscreen
    moveEnemy() {
        this.enemies.forEach((enemy) => {
            enemy.x += enemy.vx;
            //Check the Enemy's screen boundaries
            const EnemyHitsWall = contain(enemy, { x: 50, y: 20, width: Setting.WIDTH - 10, height: Setting.HEIGHT })

            //If the Enemy hits the left or right of the stage, reverse
            //its direction
            if (EnemyHitsWall === "left" || EnemyHitsWall === "right") {
                this.enemies.forEach((enemy) => {
                    enemy.vx *= -1;
                })

            }
        })
    }

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

