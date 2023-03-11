import { Container, AnimatedSprite, Texture } from "pixi.js";

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
    animatedSprite.animationSpeed = 0.2; // play animation at 20% of the default speed
    animatedSprite.loop = true;
    animatedSprite.play();
    this.addChild(animatedSprite);
  }  

  update(dt) {
  }
}
