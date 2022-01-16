import { Container, TextStyle, Text } from 'pixi.js';
import { Manager } from '../Manager';

export class Scene extends Container {
  private static titleStyle: TextStyle;
  private static paraStyle: TextStyle;
  private title: Text;
  private nextButton: HTMLButtonElement | null;
  // private backButton: HTMLButtonElement | null;

  constructor(title: string) {
    super();

    Scene.titleStyle = new TextStyle({
      fill: '#000000',
      fontFamily: 'Secular One',
      fontSize: 52,
      lineJoin: 'round',
      miterLimit: 0,
      padding: 15,
    });

    Scene.paraStyle = new TextStyle({
      fill: '#000000',
      fontFamily: 'Mukta',
      fontSize: 24,
      lineJoin: 'round',
      miterLimit: 0,
      padding: 10,
    });

    this.title = new Text(title, Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = Manager.height / 12;

    this.nextButton = document.querySelector('#next');
    // this.backButton = document.querySelector("#back");

    this.nextButton?.addEventListener('click', this.nextScreen);
    // this.backButton?.addEventListener("click", this.previousScreen);
  }

  static getTextStyle() {
    return this.titleStyle;
  }

  static getParaStyle() {
    return this.paraStyle;
  }

  nextScreen() {
    let nextKey: string;
    let infoBlocks = document.querySelectorAll('p');
    let infoBlocksArray = Array.from(infoBlocks);
    let nextInfoBlocks: HTMLElement[];

    let currentBlocks = infoBlocksArray.filter(
      (el) => el.style.display !== 'none'
    );

    const currentKey: string | undefined = currentBlocks[0].dataset.key;
    if (!currentKey) {
      return;
    }

    nextKey = `'${+currentKey + 1}'`;
    nextInfoBlocks = Array.from(
      document.querySelectorAll(`[data-key=${nextKey}]`)
    );

    if (nextInfoBlocks.length === 0) {
      return;
    }

    infoBlocksArray.forEach((el) => (el.style.display = 'none'));
    nextInfoBlocks?.forEach((el) => (el.style.display = 'block'));
  }

  // previousScreen() {
  //   let nextKey: string;
  //   let infoBlocks = document.querySelectorAll("p");
  //   let infoBlocksArray = Array.from(infoBlocks);
  //   let nextInfoBlocks: HTMLElement[];

  //   let currentBlocks = infoBlocksArray.filter(
  //     (el) => el.style.display !== "none"
  //   );

  //   const currentKey: string | undefined = currentBlocks[0].dataset.key;
  //   if (!currentKey) {
  //     return;
  //   }
  //   nextKey = `'${+currentKey - 1}'`;
  //   nextInfoBlocks = Array.from(
  //     document.querySelectorAll(`[data-key=${nextKey}]`)
  //   );
  //   if (nextInfoBlocks.length === 0) {
  //     return;
  //   }

  //   infoBlocksArray.forEach((el) => (el.style.display = "none"));
  //   nextInfoBlocks?.forEach((el) => (el.style.display = "block"));
  // }
}
