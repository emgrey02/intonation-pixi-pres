import { sound } from "@pixi/sound";
import { Container, Text, TextStyle } from "pixi.js";

export class Scene extends Container {
  private textStyle: TextStyle;
  private text: Text;

  constructor(screenWidth: number, screenHeight: number, title: string) {
    super();
    this.textStyle = new TextStyle({
      fill: "#000000",
      fontFamily: "Secular One",
      fontSize: 52,
      lineJoin: "round",
      miterLimit: 0,
      padding: 15,
    });
    this.text = new Text(title, this.textStyle);
    this.addChild(this.text);
    this.text.x = screenWidth / 2 - this.text.width / 2;
    this.text.y = screenHeight / 10;
  }

  playSound = (name: string) => {
    sound.play(name);
  };
}
