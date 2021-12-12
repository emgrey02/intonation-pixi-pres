import { Scene } from "./Scene";
import { sound } from "@pixi/sound";
import { Sprite, Ticker, Text } from "pixi.js";
import { Manager } from "../Manager";
import { First } from "./First";

export class Intro extends Scene {
  private author: Text;
  private flower1: Sprite;
  private flower2: Sprite;
  private flower3: Sprite;
  private flower4: Sprite;
  private flower5: Sprite;
  private flower6: Sprite;
  private alphaChange: number = 0.005;

  constructor(title: string) {
    super(title);

    this.author = new Text("by Emma Grey", Scene.getTextStyle());
    this.addChild(this.author);
    this.author.anchor.set(0.5);
    this.author.x = Manager.width / 2;
    this.author.y = Manager.height - Manager.height / 4;

    this.flower1 = Sprite.from("flower1");
    this.flower2 = Sprite.from("flower2");
    this.flower3 = Sprite.from("flower3");
    this.flower4 = Sprite.from("flower4");
    this.flower5 = Sprite.from("flower5");
    this.flower6 = Sprite.from("flower6");

    sound.play("intro-music");

    this.flower1.alpha = 0;
    this.flower1.scale.set(0.3);
    this.flower1.anchor.set(0.5);
    this.flower1.x = Manager.width / 2;
    this.flower1.y = Manager.height / 2;

    this.flower2.alpha = 0;
    this.flower2.scale.set(0.3);
    this.flower2.anchor.set(0.5);
    this.flower2.x = Manager.width / 3;
    this.flower2.y = Manager.height / 3;

    this.flower3.alpha = 0;
    this.flower3.scale.set(0.3);
    this.flower3.anchor.set(0.5);
    this.flower3.x = Manager.width - Manager.width / 3;
    this.flower3.y = Manager.height / 3;

    this.flower4.alpha = 0;
    this.flower4.scale.set(0.3);
    this.flower4.anchor.set(0.5);
    this.flower4.x = Manager.width / 4;
    this.flower4.y = Manager.height - Manager.height / 3;

    this.flower5.alpha = 0;
    this.flower5.scale.set(0.4);
    this.flower5.anchor.set(0.5);
    this.flower5.x = Manager.width - Manager.width / 4;
    this.flower5.y = Manager.height - Manager.height / 3;

    this.flower6.alpha = 0;
    this.flower6.scale.set(0.3);
    this.flower6.anchor.set(0.5);
    this.flower6.x = Manager.width / 2;
    this.flower6.y = Manager.height / 4;

    this.addChild(this.flower1);
    this.addChild(this.flower2);
    this.addChild(this.flower3);
    this.addChild(this.flower4);
    this.addChild(this.flower5);
    this.addChild(this.flower6);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.flower1.alpha =
      this.flower1.alpha + this.alphaChange * 0.4 * deltaTime;
    this.flower1.angle = this.flower1.angle + this.alphaChange * 30 * deltaTime;

    this.flower2.alpha =
      this.flower2.alpha + this.alphaChange * 0.3 * deltaTime;
    this.flower2.angle =
      this.flower2.angle + this.alphaChange * -20 * deltaTime;

    this.flower3.alpha =
      this.flower3.alpha + this.alphaChange * 0.5 * deltaTime;
    this.flower3.angle = this.flower3.angle + this.alphaChange * 10 * deltaTime;

    this.flower4.alpha =
      this.flower4.alpha + this.alphaChange * 0.25 * deltaTime;
    this.flower4.angle = this.flower4.angle + this.alphaChange * -5 * deltaTime;

    this.flower5.alpha =
      this.flower5.alpha + this.alphaChange * 0.1 * deltaTime;
    this.flower5.angle =
      this.flower5.angle + this.alphaChange * -10 * deltaTime;

    this.flower6.alpha =
      this.flower6.alpha + this.alphaChange * 0.2 * deltaTime;
    this.flower6.angle = this.flower6.angle + this.alphaChange * 15 * deltaTime;
  };

  override nextScreen() {
    sound.pause("intro-music");
    Manager.changeScene(new First("Parts of a Wave"));
  }
}
