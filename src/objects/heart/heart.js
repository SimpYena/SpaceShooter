import { Container, Sprite, Texture } from "pixi.js";
import { Setting } from "../../settings";
export class Heart extends Container {
    constructor(container) {
        super();
        this.container = container;
        this.createHeart();
    }

    createHeart() {
        const texture = Texture.from("heart.png");
        this.hearts = [];
        for (let i = 0; i < 5; i++) {
            this.heart = new Sprite(texture);
            this.container.addChild(this.heart)
            this.heart.x = i * 30;
            this.heart.y = Setting.HEIGHT - 50;
            this.heart.width = 30;
            this.heart.height = 30;
            this.hearts.push(this.heart)
        }
    }
}
