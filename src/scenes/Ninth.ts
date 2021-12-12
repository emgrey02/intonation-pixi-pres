import { Scene } from "./Scene";
import { Sprite, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Tenth } from "./Tenth";

export class Ninth extends Scene {
  private harmonics: Sprite;
  private change: number = 10;

  constructor(title: string) {
    super(title);

    this.harmonics = Sprite.from("some harms");
    this.harmonics.anchor.set(0.5);
    this.harmonics.x = Manager.width / 2;
    this.harmonics.y = 0;

    this.addChild(this.harmonics);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.harmonics.y = this.harmonics.y + this.change * deltaTime;
    if (this.harmonics.y >= Manager.height / 2) {
      this.harmonics.y = Manager.height / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Tenth("Harmonic Series"));
  }
}
