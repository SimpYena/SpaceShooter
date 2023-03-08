export class PointerMove {
  static move(object) {
    document.body.addEventListener("mousemove", (e) => {
      object.x = e.clientX;
      object.y = e.clientY;
    });
  }
}
