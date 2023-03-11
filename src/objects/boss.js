import { Container, AnimatedSprite, Texture } from "pixi.js";
import { Setting } from "../settings";

export class Boss extends Container {
  constructor() {
    super();
    this.createBoss();
    this.vx = 3;
    this.dt = 1;
    this.x = Setting.WIDTH / 3;
    this.y = Setting.HEIGHT/ 10;
    this.width = 8;
    this.height = 8;
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
  move(){
    this.x += this.vx;
    if(this.x>=Setting.WIDTH-250||this.x<=0){
      this.vx *= -1;
    }

  }

  update(dt) {
    this.move();
  }
}
