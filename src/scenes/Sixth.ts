import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { sound } from "@pixi/sound";
import { Seventh } from "./Seventh";

export class Sixth extends Scene {
  private title: Text;
  private robot: Sprite;
  private piano: Sprite;
  private robotWave: Sprite;
  private pianoWave: Sprite;

  constructor() {
    super();

    this.title = new Text("Composite Sound", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.robot = Sprite.from("robot");
    this.piano = Sprite.from("piano");
    this.robotWave = Sprite.from("robot wave");
    this.pianoWave = Sprite.from("piano wave");

    this.piano.anchor.set(0.5);
    this.piano.x = Manager.width - Manager.width / 3;
    this.piano.y = Manager.height / 2;
    this.piano.scale.set(0.6);

    this.pianoWave.anchor.set(0.5);
    this.pianoWave.x = Manager.width - Manager.width / 3;
    this.pianoWave.y = Manager.height / 4;
    this.pianoWave.scale.set(0.5);

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
      this.piano.scale.set(0.55);
      sound.volume("piano-sound", 0.3);
      sound.play("piano-sound");
      setTimeout(() => sound.pause("piano-sound"), 2000);
    });
    this.piano.on("pointerup", () => {
      this.piano.scale.set(0.6);
    });

    this.robot.anchor.set(0.5);
    this.robot.x = Manager.width / 3;
    this.robot.y = Manager.height / 2;
    this.robot.scale.set(0.5);

    this.robotWave.anchor.set(0.5);
    this.robotWave.x = Manager.width / 3;
    this.robotWave.y = Manager.height / 4;
    this.robotWave.scale.set(0.5);

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
      this.robot.scale.set(0.45);
      sound.volume("sine-wave", 0.2);
      sound.play("sine-wave");
      setTimeout(() => sound.pause("sine-wave"), 2000);
    });
    this.robot.on("pointerup", () => {
      this.robot.scale.set(0.5);
    });

    this.addChild(this.robot);
    this.addChild(this.piano);
    this.addChild(this.robotWave);
    this.addChild(this.pianoWave);
  }

  override nextScreen() {
    Manager.changeScene(new Seventh());
  }
}
