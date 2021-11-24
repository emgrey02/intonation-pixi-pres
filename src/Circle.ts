import { Container, Graphics } from 'pixi.js';
// import { Scene } from './scenes/Scene';

export class Circle extends Container {
  private circle: Graphics;
  constructor(positionX: number, positionY: number, area: number) {
    super();

    this.circle = new Graphics();
    this.circle.beginFill(0xE36414);
    this.circle.lineStyle(3, 0x000000);
    this.circle.drawCircle(0, 0, area);
    this.circle.endFill();
    this.circle.x = positionX;
    this.circle.y = positionY;
    this.circle.interactive = true;

    this.circle.on('pointerover', this.tint, this);

    this.circle.on('pointerout', this.removeTint, this);

    this.circle.on('pointerdown', this.createScene, this);
  }

  private tint() {
    this.circle.tint = 0x9A031E;
  }

  private removeTint(){
    this.circle.tint = 0xffffff;
  }

  private createScene() {
    // const newScene: Scene = new Scene(app.screen.width, app.screen.height)
  }

  public getCircle() {
    return this.circle;
  }
}