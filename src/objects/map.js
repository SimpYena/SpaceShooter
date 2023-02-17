import { Container, Sprite, Texture } from "pixi.js";
import { Setting } from "../settings";
export class Map extends Container {
  constructor() {
    super();
    this.createMap();
  }
  createMap() {
    const texture = Texture.from("map.png");
    this.map = new Sprite(texture);
    this.map.width = Setting.WIDTH;
    this.map.height = Setting.HEIGHT;
    this.addChild(this.map);
  }
}
