import { Container, Sprite, Texture } from "pixi.js";
import { Setting } from "../../settings";
export class Bullet extends Sprite {
  constructor() {
    const texture = Texture.from("laserBullet.png");
    super(texture);
    this.anchor.set(0.5, 0.5);
    this.speed = 5;
  }

  update(dt) {
    this.position.y -= this.speed * dt;

    // Remove bullet when it goes out of screen
  }
}
export class BulletManager {
  constructor(container) {
    this.container = container;
    this.bullets = [];
  }

  fire(position) {
    const bullet = new Bullet();
    bullet.position.x = position.x;
    bullet.position.y = position.y - 50;
    this.bullets.push(bullet);
    this.container.addChild(bullet);
  }

  update(dt) {
    // Update each bullet
    this.bullets.forEach((bullet) => {
      bullet.update(dt);
    });

    // Remove destroyed bullets
  }
}
