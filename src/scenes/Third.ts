import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Fourth } from "./Fourth";

export class Third extends Scene {
  private title: Text;
  private graph: Sprite;

  constructor() {
    super();

    this.title = new Text("Frequency-Pitch Relationship", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.graph = Sprite.from("graph");

    this.graph.anchor.set(0.5);
    this.graph.x = Manager.width / 2;
    this.graph.y = Manager.height / 2;
    this.graph.scale.set(0.8);

    this.addChild(this.graph);
  }

  override nextScreen() {
    Manager.changeScene(new Fourth());
  }
}
