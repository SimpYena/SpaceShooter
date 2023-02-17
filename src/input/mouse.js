export class PointerMove {
  constructor(object, app) {
    this.object = object;
    this.app = app;

    this.prevX = 0;
    this.prevY = 0;

    this.object.interactive = true;
    this.object.on("pointermove", this.onPointerMove.bind(this));
  }
  onPointerMove(event) {
    const x = event.data.global.x;
    const y = event.data.global.y;

    if (this.prevX && this.prevY) {
      this.object.x += x - this.prevX;
      this.object.y += y - this.prevY;
    }

    this.prevX = x;
    this.prevY = y;
  }
}
