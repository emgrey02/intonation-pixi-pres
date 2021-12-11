import { Scene } from "./Scene";
import { Sprite, Text, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Second } from "./Second";

export class First extends Scene {
  private title: Text;
  private soundWave: Sprite;
  private alphaChange: number = 4;

  constructor() {
    super();

    this.title = new Text("Parts of a Wave", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.soundWave = Sprite.from("sound wave");

    this.soundWave.scale.set(1);
    this.soundWave.anchor.set(0.5);
    this.soundWave.x = Manager.width / 2;
    this.soundWave.y = 0;
    this.addChild(this.soundWave);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.soundWave.y = this.soundWave.y + this.alphaChange * deltaTime;
    if (this.soundWave.y >= Manager.height / 2) {
      this.soundWave.y = Manager.height / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Second());
  }
}
