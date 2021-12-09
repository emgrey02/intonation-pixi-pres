import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { SoundExample } from "./SoundExample";
// import { FrequencyTwo } from "./FrequencyTwo";

export class FrequencyBasics extends Scene {
  private title: Text;
  private soundWave: Sprite;
  private count: number;

  constructor() {
    super();

    this.count = 0;

    this.title = new Text("Frequency Basics", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.x = Manager.width / 2 - this.title.width / 2;
    this.title.y = Manager.height / 10;

    this.soundWave = Sprite.from("sound-wave");
    this.soundWave.anchor.set(0.5);
    this.soundWave.x = Manager.width / 2;
    this.soundWave.y = Manager.height / 2;
    this.addChild(this.soundWave);
  }

  override nextScreen() {
    if (this.count < 2) {
      Manager.changeScene(new FrequencyBasics());
      this.count++;
    } else {
      return;
    }
  }

  override previousScreen() {
    Manager.changeScene(new SoundExample());
  }
}
