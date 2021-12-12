import { Scene } from "./Scene";
import { Sprite, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Fourteenth } from "./Fourteenth";
import { sound } from "@pixi/sound";

export class Thirteenth extends Scene {
  private snare: Sprite;
  private drumstick: Sprite;
  private alphaChange: number = 0.01;

  constructor(title: string) {
    super(title);

    this.snare = Sprite.from("snare");
    this.snare.alpha = 0;
    this.snare.anchor.set(0.5);
    this.snare.scale.set(0.5);
    this.snare.x = Manager.width / 2;
    this.snare.y = Manager.height / 2;

    this.drumstick = Sprite.from("drumstick");
    this.drumstick.anchor.set(0.5);
    this.drumstick.x = Manager.width;
    this.drumstick.y = Manager.height;
    this.drumstick.scale.set(0.5);

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
    this.addChild(this.drumstick);

    this.interactive = true;
    this.on("pointermove", this.moveDrumstick);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.snare.alpha = this.snare.alpha + this.alphaChange * deltaTime;
    if (this.snare.alpha >= 1) {
      this.snare.alpha = 1;
    }
  };

  private moveDrumstick(e: MessageEvent) {
    let pos = e.data.global;

    this.drumstick.x = pos.x;
    this.drumstick.y = pos.y;
  }

  override nextScreen() {
    Manager.changeScene(new Fourteenth("Harmonic Beauty"));
  }
}
