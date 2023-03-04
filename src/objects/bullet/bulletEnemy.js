import { Container, Sprite, Texture } from "pixi.js";


export class BulletEnemy extends Container {
    constructor() {
        super();
        this.createBulletEnemy()
    }

    createBulletEnemy() {
        const texture = Texture.from("bulletEnemy.png");
        this.bullet = new Sprite(texture);
        this.bullet.width = 15;
        this.bullet.height = 50;
        this.bullet.anchor.set(0.5)
        this.addChild(this.bullet)
    }
}