import { Scene } from "./Scene";
import { Sprite, Text, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Eighth } from "./Eighth";
// import { sound } from "@pixi/sound";

export class Seventh extends Scene {
  private title: Text;
  private firstCap: Text;
  private secondCap: Text;
  private fundFreq: Sprite;
  private pianoWave: Sprite;
  private change: number = 10;

  constructor() {
    super();

    this.title = new Text("Fundamental Frequency", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = Manager.height / 12;

    this.firstCap = new Text("composite piano wave");
    this.firstCap.anchor.set(0.5);
    this.firstCap.x = 0;
    this.firstCap.y = Manager.height - Manager.height / 3;

    this.secondCap = new Text("decomposed piano wave");
    this.secondCap.anchor.set(0.5);
    this.secondCap.x = Manager.width;
    this.secondCap.y = Manager.height - Manager.height / 3;

    this.addChild(this.firstCap);
    this.addChild(this.secondCap);

    this.fundFreq = Sprite.from("fund freq");
    this.pianoWave = Sprite.from("piano wave");

    this.pianoWave.anchor.set(0.5);
    this.pianoWave.x = 0;
    this.pianoWave.y = Manager.height / 2;
    this.pianoWave.scale.set(0.5);

    this.fundFreq.scale.set(1);
    this.fundFreq.anchor.set(0.5);
    this.fundFreq.x = Manager.width;
    this.fundFreq.y = Manager.height / 2;

    this.addChild(this.fundFreq);
    this.addChild(this.pianoWave);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.firstCap.x = this.firstCap.x + this.change * deltaTime;
    this.pianoWave.x = this.pianoWave.x + this.change * deltaTime;
    if (this.firstCap.x >= Manager.width / 3) {
      this.firstCap.x = Manager.width / 3;
      this.pianoWave.x = Manager.width / 3;
    }

    this.secondCap.x = this.secondCap.x - this.change * deltaTime;
    this.fundFreq.x = this.fundFreq.x - this.change * deltaTime;
    if (this.secondCap.x <= Manager.width - Manager.width / 3) {
      this.secondCap.x = Manager.width - Manager.width / 3;
      this.fundFreq.x = Manager.width - Manager.width / 3;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Eighth());
  }
}
