import { Scene } from "./Scene";
import { Sprite, Text, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Tenth } from "./Tenth";

export class Ninth extends Scene {
  private title: Text;
  private harmonics: Sprite;
  private change: number = 10;

  constructor() {
    super();

    this.title = new Text("Harmonics Explained", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = Manager.height / 12;

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
    Manager.changeScene(new Tenth());
  }
}
