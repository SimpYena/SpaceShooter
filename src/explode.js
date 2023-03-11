import { AnimatedSprite, Container,Texture } from "pixi.js";

export class Explosion extends Container {
  constructor() {
    super();
    this.initBoom();
  }
  initBoom() {
    const boom = [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.png",
      "17.png",
      "18.png",
      "19.png",
      "20.png",
    ];
    const textureArray = [];
    for (let i = 0; i < 20; i++) {
      const texture = Texture.from(boom[i]);
      textureArray.push(texture);
    }
    this.animatedSprite = new AnimatedSprite(textureArray);
    this.animatedSprite.animationSpeed = 0.2;
    this.animatedSprite.anchor.set(0.5)
    this.addChild(this.animatedSprite);
  }
    initPlay(){
        this.animatedSprite.play();
  }
  initStop(){
    this.animatedSprite.stop();
  }
}
