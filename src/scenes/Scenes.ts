import { Scene } from "./MasterScene";
import { sound } from "@pixi/sound";
import { Sprite, Ticker } from "pixi.js";

export class TitleScene extends Scene {
  private flower: Sprite;
  private alphaChange: number = 0.001;

  constructor(screenWidth: number, screenHeight: number, title: string) {
    super(screenWidth, screenHeight, title);
    this.flower = Sprite.from("images/flower.png");

    sound.add("intro-music", "audio/intro-music.mp3");
    sound.play("intro-music");

    this.flower.alpha = 0;
    this.flower.scale.set(0.4);
    this.flower.anchor.set(0.5);
    this.flower.x = screenWidth / 2 - this.flower.width / 2;
    this.flower.y = screenHeight / 2;
    this.addChild(this.flower);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  override playSound = () => {
    super.playSound("intro-music");
  };

  private update = (deltaTime: number): void => {
    this.flower.alpha = this.flower.alpha + this.alphaChange * deltaTime;

    if (this.flower.alpha > 1) {
      this.flower.alpha = 1;
    }
  };
}

export class Basics extends Scene {
  private fundFreq: Sprite;

  constructor(screenWidth: number, screenHeight: number, title: string) {
    super(screenWidth, screenHeight, title);
    this.fundFreq = Sprite.from("images/fundamental-frequency.png");

    this.fundFreq.scale.set(1);
    this.fundFreq.anchor.set(0.5);
    this.fundFreq.x = screenWidth / 2 - this.fundFreq.width / 2;
    this.fundFreq.y = screenHeight / 2;
    this.addChild(this.fundFreq);
  }
}

export class SoundExample extends Scene {
  private robot: Sprite;
  private piano: Sprite;

  constructor(screenWidth: number, screenHeight: number, title: string) {
    super(screenWidth, screenHeight, title);
    this.robot = Sprite.from("images/robot.png");
    this.piano = Sprite.from("images/piano.png");

    this.piano.anchor.set(0.5);
    this.piano.x = screenWidth - screenWidth / 3;
    this.piano.y = screenHeight / 2;
    this.piano.scale.set(0.4);
    this.piano.interactive = true;

    sound.add("piano", "audio/piano.mp3");

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
      sound.volume("piano", 0.3);
      sound.play("piano");
    });
    this.piano.on("pointerup", () => {
      this.piano.scale.set(0.4);
    });

    this.robot.anchor.set(0.5);
    this.robot.x = screenWidth / 3;
    this.robot.y = screenHeight / 2;
    this.robot.scale.set(0.3);

    sound.add("sine", "audio/sine-wave.wav");

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
      sound.volume("sine", 0.2);
      sound.play("sine");
    });
    this.robot.on("pointerup", () => {
      this.robot.scale.set(0.3);
    });

    this.addChild(this.robot);
    this.addChild(this.piano);
  }
}

export class FrequencyBasics extends Scene {
  private soundWave: Sprite;

  constructor(screenWidth: number, screenHeight: number, title: string) {
    super(screenWidth, screenHeight, title);
    this.soundWave = Sprite.from("images/sound-wave.png");
    this.soundWave.anchor.set(0.5);
    this.soundWave.x = screenWidth / 2 - this.soundWave.width / 2;
    this.soundWave.y = screenHeight / 2;
    this.addChild(this.soundWave);
  }

  override playSound = () => {
    super.playSound("intro-music");
  };
}
