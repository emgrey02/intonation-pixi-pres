import { Scene } from "./Scene";
import { sound } from "@pixi/sound";
import { Sprite, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Third } from "./Third";

export class Second extends Scene {
  private highFreq: Sprite;
  private lowFreq: Sprite;
  private change: number = 10;

  constructor(title: string) {
    super(title);

    this.highFreq = Sprite.from("high wave");
    this.lowFreq = Sprite.from("low wave");

    this.lowFreq.anchor.set(0.5);
    this.lowFreq.x = Manager.width;
    this.lowFreq.y = Manager.height / 2 + 50;
    this.lowFreq.scale.set(0.8);
    this.lowFreq.interactive = true;

    this.lowFreq.on("pointerover", () => {
      this.lowFreq.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.lowFreq.on("pointerout", () => {
      this.lowFreq.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.lowFreq.on("pointerdown", () => {
      this.lowFreq.scale.set(0.75);
      sound.volume("low sound", 0.2);
      sound.play("low sound");
      setTimeout(() => sound.pause("low sound"), 2000);
    });
    this.lowFreq.on("pointerup", () => {
      this.lowFreq.scale.set(0.8);
    });

    this.highFreq.anchor.set(0.5);
    this.highFreq.x = 0;
    this.highFreq.y = Manager.height / 3;
    this.highFreq.scale.set(0.8);

    this.highFreq.interactive = true;
    this.highFreq.on("pointerover", () => {
      this.highFreq.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.highFreq.on("pointerout", () => {
      this.highFreq.tint = 0xffffff;
      document.body.style.cursor = "default";
    });
    this.highFreq.on("pointerdown", () => {
      this.highFreq.scale.set(0.75);
      sound.volume("high sound", 0.2);
      sound.play("high sound");
      setTimeout(() => sound.pause("high sound"), 2000);
    });
    this.highFreq.on("pointerup", () => {
      this.highFreq.scale.set(0.8);
    });

    this.addChild(this.highFreq);
    this.addChild(this.lowFreq);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.highFreq.x = this.highFreq.x + this.change * deltaTime;
    if (this.highFreq.x >= Manager.width / 2) {
      this.highFreq.x = Manager.width / 2;
    }

    this.lowFreq.x = this.lowFreq.x - this.change * deltaTime;
    if (this.lowFreq.x <= Manager.width / 2) {
      this.lowFreq.x = Manager.width / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Third("Frequency-Pitch Relationship"));
  }
}
