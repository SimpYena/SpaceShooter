import { Rectangle } from "pixi.js";
export class CollisionDetector {
  constructor(tag1, tag2, gameContainer) {
    this.tag1 = tag1;
    this.tag2 = tag2;
    this.score = 0;
    this.gameContainer = gameContainer;
    // this.emitter = emitter;
  }
  //enemy and bullet
  checkCollisions() {
    this.tag1.forEach((col1) => {
      this.tag2.forEach((col2) => {
        if (this.detectCollision(col1, col2)) {
          this.score++;
          this.gameContainer.removeChild(col2)
          this.gameContainer.removeChild(col1);
          this.tag1.splice(this.tag1.indexOf(col1), 1);
          this.tag2.splice(this.tag2.indexOf(col2), 1);
          // emitter.emit("collision", { col1, col2 });
        }
      });
    });
  }
  scoreFinal(){
    return this.score;
  }
  //bullet's enemies and ship
  checkCollisions1(heart) {
    this.heart = heart;
    this.heart.forEach((heart) => {
      this.tag1.forEach((col1) => {
        if (this.detectCollision(col1, this.tag2)) {
          console.log(heart)
          this.gameContainer.removeChild(heart)
          this.gameContainer.removeChild(col1);
          this.tag1.splice(this.tag1.indexOf(col1), 1);
          this.heart.splice(this.heart.indexOf(heart), 1)
        }
      })

    });
  }
  //Enemy and ship
  checkCollisions2(heart) {
    this.heart = heart;
    this.heart.forEach((heart) => {
      this.tag1.forEach((col1) => {
        if (this.detectCollision(col1, this.tag2)) {
          console.log(heart)
          this.gameContainer.removeChild(heart)
          this.gameContainer.removeChild(col1);
          this.tag1.splice(this.tag1.indexOf(col1), 1);
          this.heart.splice(this.heart.indexOf(heart), 1)
        }
      })

    });
  }
  detectCollision(col1, col2) {
    const col1Rect = new Rectangle(
      col1.x - col1.width / 2,
      col1.y - col1.height / 2,
      col1.width,
      col1.height
    );
    const col2Rect = new Rectangle(
      col2.x - col2.width / 2,
      col2.y - col2.height / 2,
      col2.width,
      col2.height
    );

    return (
      col1Rect.x + col1Rect.width > col2Rect.x &&
      col1Rect.x < col2Rect.x + col2Rect.width &&
      col1Rect.y + col1Rect.height > col2Rect.y &&
      col1Rect.y < col2Rect.y + col2Rect.height
    );
  }
}
