import { Container, AnimatedSprite, Texture, Assets } from "pixi.js";

export class Boss extends Container {
  constructor() {
    super();
    this.createBoss();
  }
  createBoss() {
    const BossAnimation = ["boss1.png", "boss2.png", "boss3.png", "boss4.png"];
    const textureArray = [];
    for (let i = 0; i < 4; i++) {
      const texture = Texture.from(BossAnimation[i]);
      textureArray.push(texture);
    }
    const animatedSprite = new AnimatedSprite(textureArray);
    this.addChild(animatedSprite);
  }
}
