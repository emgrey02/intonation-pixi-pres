import { Scene } from "./Scene";
import { Sprite } from "pixi.js";
import { Manager } from "../Manager";

export class Credits extends Scene {
  private citations: Sprite;

  constructor(title: string) {
    super(title);

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
