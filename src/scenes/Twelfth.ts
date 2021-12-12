import { Scene } from "./Scene";
import { Sprite, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Thirteenth } from "./Thirteenth";

export class Twelfth extends Scene {
  private pic32: Sprite;
  private change: number = 10;

  constructor(title: string) {
    super(title);

    this.pic32 = Sprite.from("first 16 harms");
    this.pic32.anchor.set(0.5);
    this.pic32.scale.set(1);
    this.pic32.x = Manager.width / 2;
    this.pic32.y = 0;

    this.addChild(this.pic32);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.pic32.y = this.pic32.y + this.change * deltaTime;
    if (this.pic32.y >= Manager.height / 2) {
      this.pic32.y = Manager.height / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Thirteenth("Harmonic Series in Reality"));
  }
}
