import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Fourteenth } from "./Fourteenth";
import { sound } from "@pixi/sound";

export class Thirteenth extends Scene {
  private title: Text;
  private snare: Sprite;

  constructor() {
    super();

    this.title = new Text("Harmonic Series in Reality", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.snare = Sprite.from("snare");
    this.snare.anchor.set(0.5);
    this.snare.scale.set(0.5);
    this.snare.x = Manager.width / 2;
    this.snare.y = Manager.height / 2;

    this.snare.interactive = true;
    this.snare.on("pointerover", () => {
      this.snare.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.snare.on("pointerout", () => {
      this.snare.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.snare.on("pointerdown", () => {
      this.snare.scale.set(0.45);
      sound.volume("snare hit", 0.1);
      sound.play("snare hit");
    });
    this.snare.on("pointerup", () => {
      this.snare.scale.set(0.5);
    });

    this.addChild(this.snare);
  }

  override nextScreen() {
    Manager.changeScene(new Fourteenth());
  }
}
