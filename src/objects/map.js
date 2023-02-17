import { Container, Sprite, Texture } from "pixi.js";

export class Map extends Container {
  constructor() {
    super();
    this.createMap();
  }
  createMap() {
    const texture = Texture.from("map.png");
    this.map = new Sprite(texture);
    this.addChild(this.map);
  }
}
