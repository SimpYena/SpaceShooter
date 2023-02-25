import { Setting } from "../settings";

export class PointerMove {
  constructor(object, app) {
    this.object = object;
    this.object.interactive = true;
    this.app = app; // Save reference to app instance
    this.targetX = object.position.x;
    this.targetY = object.position.y;
    this.object.on("pointermove", this.onPointerMove.bind(this));
  }

  onPointerMove(event) {
    this.targetX = event.data.global.x;
    this.targetY = event.data.global.y;
  }
  

  update(dt) {
    const speed = 1.5; // Adjust this value to control the smoothing

    // Calculate the new position of the ship based on a weighted average
    let newX = this.object.position.x * (1 - speed) + this.targetX * speed;
    let newY = this.object.position.y * (1 - speed) + this.targetY * speed;

    // Ensure that the ship stays within the screen boundaries
    if (newX < 0) {
      newX = 0;
    } else if (newX > Setting.WIDTH) {
      newX = Setting.WIDTH;
    }

    if (newY < 0) {
      newY = 0;
    } else if (newY > 800) {
      newY = 800;
    }

    // Update the ship's position
    this.object.position.x = newX;
    this.object.position.y = newY;
  }
}