import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";

export class Credits extends Scene {
  private title: Text;
  private citations: Sprite;

  constructor() {
    super();

    this.title = new Text("Work Cited", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = Manager.height / 12;

    this.citations = Sprite.from("credits");
    this.citations.anchor.set(0.5);
    this.citations.scale.set(0.6);
    this.citations.x = Manager.width / 2;
    this.citations.y = Manager.height / 2;

    this.addChild(this.citations);
  }

  override nextScreen() {
    window.location.reload();
  }
}
