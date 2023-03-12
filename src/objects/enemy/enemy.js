import { Container, Sprite, Texture } from "pixi.js";

export class Enemy extends Container {
    constructor() {
        super();
        this.create();
    }
    create() {
        const texture = Texture.from("enemy.png");
        this.enemy = new Sprite(texture);
        this.enemy.width = 80;
        this.enemy.height = 80;
        // this.enemy.x = x;
        // this.enemy.y = y;
        // this.enemy.vy = vy;
        this.enemy.anchor.set(0.5);
        this.addChild(this.enemy);
    }
    // move() {
    //     this.enemy.y += 5;
    // }

    // destroy() {
    //     this.removeChild(this.enemy)
    // }

}