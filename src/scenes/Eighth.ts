import { Scene } from "./Scene";
import { Sprite, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Ninth } from "./Ninth";

export class Eighth extends Scene {
  private harmonicsIntro: Sprite;
  private change: number = 10;

  constructor(title: string) {
    super(title);

    this.harmonicsIntro = Sprite.from("harm intro");
    this.harmonicsIntro.anchor.set(0.5);
    this.harmonicsIntro.x = Manager.width / 2;
    this.harmonicsIntro.y = 0;

    this.addChild(this.harmonicsIntro);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.harmonicsIntro.y = this.harmonicsIntro.y + this.change * deltaTime;
    if (this.harmonicsIntro.y >= Manager.height / 2) {
      this.harmonicsIntro.y = Manager.height / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Ninth("Harmonics Explained"));
  }
}
