import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Twelfth } from "./Twelfth";
import { sound } from "@pixi/sound";

export class Eleventh extends Scene {
  private title: Text;
  private oboe: Sprite;
  private oboeVols: Sprite;
  private clarinet: Sprite;
  private clarinetVols: Sprite;
  private guitar: Sprite;
  private guitarVols: Sprite;
  private piano: Sprite;
  private pianoVols: Sprite;

  constructor() {
    super();

    this.title = new Text("Harmonic Examples", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = 50;

    this.oboe = Sprite.from("oboe");
    this.oboe.anchor.set(0.5);
    this.oboe.scale.set(0.5);
    this.oboe.x = Manager.width / 3;
    this.oboe.y = Manager.height / 3;

    this.clarinet = Sprite.from("clarinet");
    this.clarinet.anchor.set(0.5);
    this.clarinet.scale.set(0.5);
    this.clarinet.x = Manager.width / 2;
    this.clarinet.y = Manager.height / 3;

    this.guitar = Sprite.from("guitar");
    this.guitar.anchor.set(0.5);
    this.guitar.scale.set(0.5);
    this.guitar.x = Manager.width - Manager.width / 3;
    this.guitar.y = Manager.height / 3;

    this.piano = Sprite.from("piano");
    this.piano.anchor.set(0.5);
    this.piano.x = Manager.width / 2 + 50;
    this.piano.y = Manager.height / 2 + 80;
    this.piano.scale.set(0.3);

    this.oboeVols = Sprite.from("oboe vols");
    this.oboeVols.anchor.set(0.5);
    this.oboeVols.scale.set(0.5);
    this.oboeVols.x = Manager.width / 3 + 50;
    this.oboeVols.y = Manager.height / 3;

    this.oboe.interactive = true;
    this.oboe.on("pointerover", () => {
      this.oboe.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.oboe.on("pointerout", () => {
      this.oboe.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.oboe.on("pointerdown", () => {
      this.oboe.scale.set(0.45);
      sound.volume("oboe 440", 0.1);
      sound.play("oboe 440");
      setTimeout(() => sound.pause("oboe 440"), 2000);
    });
    this.oboe.on("pointerup", () => {
      this.oboe.scale.set(0.5);
    });

    this.clarinetVols = Sprite.from("clarinet vols");
    this.clarinetVols.anchor.set(0.5);
    this.clarinetVols.scale.set(0.5);
    this.clarinetVols.x = Manager.width / 2 + 50;
    this.clarinetVols.y = Manager.height / 3;

    this.clarinet.interactive = true;
    this.clarinet.on("pointerover", () => {
      this.clarinet.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.clarinet.on("pointerout", () => {
      this.clarinet.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.clarinet.on("pointerdown", () => {
      this.clarinet.scale.set(0.45);
      sound.volume("clarinet 440", 0.3);
      sound.play("clarinet 440");
      setTimeout(() => sound.pause("clarinet 440"), 2000);
    });
    this.clarinet.on("pointerup", () => {
      this.clarinet.scale.set(0.5);
    });

    this.guitarVols = Sprite.from("clarinet vols");
    this.guitarVols.anchor.set(0.5);
    this.guitarVols.scale.set(0.5);
    this.guitarVols.x = Manager.width - Manager.width / 3 + 50;
    this.guitarVols.y = Manager.height / 3;

    this.guitar.interactive = true;
    this.guitar.on("pointerover", () => {
      this.guitar.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.guitar.on("pointerout", () => {
      this.guitar.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.guitar.on("pointerdown", () => {
      this.guitar.scale.set(0.45);
      sound.volume("guitar 440", 0.5);
      sound.play("guitar 440");
      setTimeout(() => sound.pause("guitar 440"), 2000);
    });
    this.guitar.on("pointerup", () => {
      this.guitar.scale.set(0.5);
    });

    this.pianoVols = Sprite.from("piano vols");
    this.pianoVols.anchor.set(0.5);
    this.pianoVols.scale.set(0.5);
    this.pianoVols.x = Manager.width / 2;
    this.pianoVols.y = Manager.height / 2 + 50;

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
      this.piano.scale.set(0.25);
      sound.volume("piano-sound", 0.3);
      sound.play("piano-sound");
      setTimeout(() => sound.pause("piano-sound"), 2000);
    });
    this.piano.on("pointerup", () => {
      this.piano.scale.set(0.3);
    });

    this.addChild(this.oboe);
    this.addChild(this.oboeVols);
    this.addChild(this.clarinet);
    this.addChild(this.clarinetVols);
    this.addChild(this.guitar);
    this.addChild(this.guitarVols);
    this.addChild(this.piano);
    this.addChild(this.pianoVols);
  }

  override nextScreen() {
    Manager.changeScene(new Twelfth());
  }
}
