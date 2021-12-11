import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Tenth } from "./Tenth";

export class Ninth extends Scene {
  private title: Text;
  private harmonics: Sprite;

  constructor() {
    super();

    this.title = new Text("Harmonics Explained", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.harmonics = Sprite.from("some harms");
    this.harmonics.anchor.set(0.5);
    this.harmonics.x = Manager.width / 2;
    this.harmonics.y = Manager.height / 2;

    this.addChild(this.harmonics);
  }

  override nextScreen() {
    Manager.changeScene(new Tenth());
  }
}
