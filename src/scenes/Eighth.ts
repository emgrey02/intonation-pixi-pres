import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Ninth } from "./Ninth";

export class Eighth extends Scene {
  private title: Text;
  private harmonicsIntro: Sprite;

  constructor() {
    super();

    this.title = new Text("Intro to Harmonics", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.harmonicsIntro = Sprite.from("harm intro");
    this.harmonicsIntro.anchor.set(0.5);
    this.harmonicsIntro.x = Manager.width / 2;
    this.harmonicsIntro.y = Manager.height / 2;

    this.addChild(this.harmonicsIntro);
  }

  override nextScreen() {
    Manager.changeScene(new Ninth());
  }
}
