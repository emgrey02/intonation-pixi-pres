import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { SoundExample } from "./SoundExample";
import { TitleScene } from "./TitleScene";
import { sound } from "@pixi/sound";

export class Basics extends Scene {
  private title: Text;
  private fundFreq: Sprite;

  constructor() {
    super();

    this.title = new Text("Basics", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.x = Manager.width / 2 - this.title.width / 2;
    this.title.y = Manager.height / 10;

    this.fundFreq = Sprite.from("fund freq");

    this.fundFreq.scale.set(1);
    this.fundFreq.anchor.set(0.5);
    this.fundFreq.x = Manager.width / 2;
    this.fundFreq.y = Manager.height / 2;
    this.addChild(this.fundFreq);
  }

  override nextScreen() {
    Manager.changeScene(new SoundExample());
  }

  override previousScreen() {
    Manager.changeScene(new TitleScene());
    sound.play("intro-music");
  }
}
