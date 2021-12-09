import { Scene } from "./Scene";
import { sound } from "@pixi/sound";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Basics } from "./Basics";
import { FrequencyBasics } from "./FrequencyBasics";

export class SoundExample extends Scene {
  private title: Text;
  private robot: Sprite;
  private piano: Sprite;

  constructor() {
    super();

    this.title = new Text("Sound Example", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.x = Manager.width / 2 - this.title.width / 2;
    this.title.y = Manager.height / 10;

    this.robot = Sprite.from("robot");
    this.piano = Sprite.from("piano");

    this.piano.anchor.set(0.5);
    this.piano.x = Manager.width - Manager.width / 3;
    this.piano.y = Manager.height / 2;
    this.piano.scale.set(0.4);
    this.piano.interactive = true;

    this.piano.on("pointerover", () => {
      this.piano.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.piano.on("pointerout", () => {
      this.piano.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.piano.on("pointerdown", () => {
      this.piano.scale.set(0.45);
      sound.volume("piano-sound", 0.3);
      sound.play("piano-sound");
    });
    this.piano.on("pointerup", () => {
      this.piano.scale.set(0.4);
    });

    this.robot.anchor.set(0.5);
    this.robot.x = Manager.width / 3;
    this.robot.y = Manager.height / 2;
    this.robot.scale.set(0.3);

    this.robot.interactive = true;
    this.robot.on("pointerover", () => {
      this.robot.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.robot.on("pointerout", () => {
      this.robot.tint = 0xffffff;
      document.body.style.cursor = "default";
    });
    this.robot.on("pointerdown", () => {
      this.robot.scale.set(0.35);
      sound.volume("sine-wave", 0.2);
      sound.play("sine-wave");
    });
    this.robot.on("pointerup", () => {
      this.robot.scale.set(0.3);
    });

    this.addChild(this.robot);
    this.addChild(this.piano);
  }

  override nextScreen() {
    Manager.changeScene(new FrequencyBasics());
  }

  override previousScreen() {
    Manager.changeScene(new Basics());
  }
}
