import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";

export class Twelfth extends Scene {
  private title: Text;
  private pic32: Sprite;

  constructor() {
    super();

    this.title = new Text("Harmonic Notation", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.pic32 = Sprite.from("first 16 harms");
    this.pic32.anchor.set(0.5);
    this.pic32.scale.set(1);
    this.pic32.x = Manager.width / 2;
    this.pic32.y = Manager.height / 2;

    this.addChild(this.pic32);
  }

  override nextScreen() {
    //Manager.changeScene(new FrequencyBasics());
  }
}
