import { Container, Sprite } from 'pixi.js';

export class Scene extends Container {
  private readonly screenWidth: number;
  private readonly screenHeight: number;
  private cat: Sprite;

  constructor(screenWidth: number, screenHeight: number) {
    super();
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.cat = Sprite.from('images/cat.jpg');

    this.cat.scale.set(0.5);
    this.cat.x = this.screenWidth / 2;
    this.cat.y =this.screenHeight  / 2;
    // this.addChild(this.cat);
  }
}