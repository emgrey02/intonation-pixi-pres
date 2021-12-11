import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Sixth } from "./Sixth";

export class Fifth extends Scene {
  private title: Text;
  private chromScale: Sprite;
  private pianoNotes: Sprite;

  constructor() {
    super();

    this.title = new Text("Notation", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.chromScale = Sprite.from("chrom scale");
    this.pianoNotes = Sprite.from("piano keys");

    this.chromScale.anchor.set(0.5);
    this.chromScale.x = Manager.width / 2;
    this.chromScale.y = Manager.height / 2;
    this.chromScale.scale.set(0.8);

    this.pianoNotes.anchor.set(0.5);
    this.pianoNotes.x = Manager.width / 2;
    this.pianoNotes.y = Manager.height / 3;

    this.addChild(this.pianoNotes);
    this.addChild(this.chromScale);
  }

  override nextScreen() {
    Manager.changeScene(new Sixth());
  }
}
