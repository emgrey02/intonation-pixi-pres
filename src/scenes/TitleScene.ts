import { Scene } from "./Scene";
import { sound } from "@pixi/sound";
import { Sprite, Ticker, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Basics } from "./Basics";

export class TitleScene extends Scene {
  private title: Text;
  private flower: Sprite;
  private alphaChange: number = 0.001;

  constructor() {
    super();

    this.title = new Text("Harmonic Presence", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.x = Manager.width / 2 - this.title.width / 2;
    this.title.y = Manager.height / 10;

    this.flower = Sprite.from("flower");

    sound.play("intro-music");

    this.flower.alpha = 0;
    this.flower.scale.set(0.4);
    this.flower.anchor.set(0.5);
    this.flower.x = Manager.width / 2;
    this.flower.y = Manager.height / 2;
    this.addChild(this.flower);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.flower.alpha = this.flower.alpha + this.alphaChange * deltaTime;

    if (this.flower.alpha > 1) {
      this.flower.alpha = 1;
    }
  };

  override nextScreen() {
    sound.pause("intro-music");
    Manager.changeScene(new Basics());
  }

  override previousScreen() {
    return;
  }
}
