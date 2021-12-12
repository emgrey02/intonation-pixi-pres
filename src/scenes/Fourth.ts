import { Scene } from "./Scene";
import { Sprite, Text, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Fifth } from "./Fifth";
import { sound } from "@pixi/sound";

export class Fourth extends Scene {
  private title: Text;
  private first: Sprite;
  private second: Sprite;
  private third: Sprite;
  private fourth: Sprite;
  private change: number = 10;

  constructor() {
    super();

    this.title = new Text("Frequency vs. Pitch", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = Manager.height / 12;

    this.first = Sprite.from("400 circ");
    this.second = Sprite.from("450 circ");
    this.third = Sprite.from("1000 circ");
    this.fourth = Sprite.from("1050 circ");

    this.first.anchor.set(0.5);
    this.first.x = 0;
    this.first.y = Manager.height / 3;
    this.first.scale.set(1);

    this.first.interactive = true;
    this.first.on("pointerover", () => {
      this.first.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.first.on("pointerout", () => {
      this.first.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.first.on("pointerdown", () => {
      this.first.scale.set(0.95);
      sound.volume("400 hz", 0.2);
      sound.play("400 hz");
      setTimeout(() => sound.pause("400 hz"), 2000);
    });
    this.first.on("pointerup", () => {
      this.first.scale.set(1);
    });

    this.second.anchor.set(0.5);
    this.second.x = 0;
    this.second.y = Manager.height / 2;
    this.second.scale.set(1);

    this.second.interactive = true;
    this.second.on("pointerover", () => {
      this.second.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.second.on("pointerout", () => {
      this.second.tint = 0xffffff;
      document.body.style.cursor = "default";
    });
    this.second.on("pointerdown", () => {
      this.second.scale.set(0.95);
      sound.volume("450 hz", 0.2);
      sound.play("450 hz");
      setTimeout(() => sound.pause("450 hz"), 2000);
    });
    this.second.on("pointerup", () => {
      this.second.scale.set(1);
    });

    this.third.anchor.set(0.5);
    this.third.x = Manager.width;
    this.third.y = Manager.height / 3;
    this.third.scale.set(1);

    this.third.interactive = true;
    this.third.on("pointerover", () => {
      this.third.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.third.on("pointerout", () => {
      this.third.tint = 0xffffff;
      document.body.style.cursor = "default";
    });
    this.third.on("pointerdown", () => {
      this.third.scale.set(0.95);
      sound.volume("1000 hz", 0.1);
      sound.play("1000 hz");
      setTimeout(() => sound.pause("1000 hz"), 2000);
    });
    this.third.on("pointerup", () => {
      this.third.scale.set(1);
    });

    this.fourth.anchor.set(0.5);
    this.fourth.x = Manager.width;
    this.fourth.y = Manager.height / 2;
    this.fourth.scale.set(1);

    this.fourth.interactive = true;

    this.fourth.on("pointerover", () => {
      this.fourth.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.fourth.on("pointerout", () => {
      this.fourth.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.fourth.on("pointerdown", () => {
      this.fourth.scale.set(0.95);
      sound.volume("1050 hz", 0.1);
      sound.play("1050 hz");
      setTimeout(() => sound.pause("1050 hz"), 2000);
    });
    this.fourth.on("pointerup", () => {
      this.fourth.scale.set(1);
    });

    this.addChild(this.first);
    this.addChild(this.second);
    this.addChild(this.third);
    this.addChild(this.fourth);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.first.x = this.first.x + this.change * deltaTime;
    this.second.x = this.second.x + this.change * deltaTime;
    if (this.first.x >= Manager.width / 3) {
      this.first.x = Manager.width / 3;
      this.second.x = Manager.width / 3;
    }

    this.third.x = this.third.x - this.change * deltaTime;
    this.fourth.x = this.fourth.x - this.change * deltaTime;
    if (this.third.x <= Manager.width - Manager.width / 3) {
      this.third.x = Manager.width - Manager.width / 3;
      this.fourth.x = Manager.width - Manager.width / 3;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Fifth());
  }
}
