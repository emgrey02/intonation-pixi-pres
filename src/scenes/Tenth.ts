import { Scene } from "./Scene";
import { Sprite, Text, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Eleventh } from "./Eleventh";
import { sound } from "@pixi/sound";

export class Tenth extends Scene {
  private title: Text;
  private harmonicSeries: Sprite;
  private alphaChange: number = 0.005;

  constructor() {
    super();

    this.title = new Text("Harmonic Series", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = Manager.height / 12;

    this.harmonicSeries = Sprite.from("harm series");
    this.harmonicSeries.anchor.set(0.5);
    this.harmonicSeries.angle = 90;
    this.harmonicSeries.scale.set(0.5);
    this.harmonicSeries.x = Manager.width / 2;
    this.harmonicSeries.y = Manager.height / 2;
    this.harmonicSeries.alpha = 0;

    this.harmonicSeries.interactive = true;
    this.harmonicSeries.on("pointerover", () => {
      this.harmonicSeries.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.harmonicSeries.on("pointerout", () => {
      this.harmonicSeries.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.harmonicSeries.on("pointerdown", () => {
      this.harmonicSeries.scale.set(0.45);
      sound.volume("first 32", 0.3);
      sound.play("first 32");
    });
    this.harmonicSeries.on("pointerup", () => {
      this.harmonicSeries.scale.set(0.5);
    });

    this.addChild(this.harmonicSeries);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.harmonicSeries.alpha =
      this.harmonicSeries.alpha + this.alphaChange * deltaTime;
    if (this.harmonicSeries.alpha >= 1) {
      this.harmonicSeries.alpha = 1;
    }
  };

  override nextScreen() {
    sound.stop("first 32");
    Manager.changeScene(new Eleventh());
  }
}
