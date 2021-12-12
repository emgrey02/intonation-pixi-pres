import { Scene } from "./Scene";
import { Sprite, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Fourth } from "./Fourth";

export class Third extends Scene {
  private graph: Sprite;
  private change: number = 10;

  constructor(title: string) {
    super(title);

    this.graph = Sprite.from("graph");

    this.graph.anchor.set(0.5);
    this.graph.x = Manager.width / 2;
    this.graph.y = 0;
    this.graph.scale.set(0.8);

    this.addChild(this.graph);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.graph.y = this.graph.y + this.change * deltaTime;
    if (this.graph.y >= Manager.height / 2) {
      this.graph.y = Manager.height / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Fourth("Frequency vs. Pitch"));
  }
}
