import { Scene } from "./Scene";
import { Sprite, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Sixth } from "./Sixth";

export class Fifth extends Scene {
  private chromScale: Sprite;
  private noteFreqs: Sprite;
  private change: number = 10;

  constructor(title: string) {
    super(title);

    this.chromScale = Sprite.from("chrom scale");
    this.noteFreqs = Sprite.from("note freqs");

    this.chromScale.anchor.set(0.5);
    this.chromScale.x = 0;
    this.chromScale.y = Manager.height / 3;
    this.chromScale.scale.set(0.8);

    this.noteFreqs.anchor.set(0.5);
    this.noteFreqs.x = Manager.width;
    this.noteFreqs.y = Manager.height - Manager.height / 3;

    this.addChild(this.chromScale);
    this.addChild(this.noteFreqs);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.chromScale.x = this.chromScale.x + this.change * deltaTime;
    if (this.chromScale.x >= Manager.width / 2) {
      this.chromScale.x = Manager.width / 2;
    }

    this.noteFreqs.x = this.noteFreqs.x - this.change * deltaTime;

    if (this.noteFreqs.x <= Manager.width / 2) {
      this.noteFreqs.x = Manager.width / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Sixth("Composite Sound"));
  }
}
