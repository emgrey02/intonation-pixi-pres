import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Eleventh } from "./Eleventh";
import { sound } from "@pixi/sound";

export class Tenth extends Scene {
  private title: Text;
  private harmonicSeries: Sprite;

  constructor() {
    super();

    this.title = new Text("Harmonic Series", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.harmonicSeries = Sprite.from("harm series");
    this.harmonicSeries.anchor.set(0.5);
    this.harmonicSeries.scale.set(0.5);
    this.harmonicSeries.x = Manager.width / 2;
    this.harmonicSeries.y = Manager.height / 2;

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
  }

  override nextScreen() {
    sound.stop("first 32");
    Manager.changeScene(new Eleventh());
  }
}
