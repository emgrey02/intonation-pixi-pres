import { Container, TextStyle } from "pixi.js";

export class Scene extends Container {
  private static textStyle: TextStyle;
  private nextButton: HTMLButtonElement | null;
  private backButton: HTMLButtonElement | null;

  constructor() {
    super();

    Scene.textStyle = new TextStyle({
      fill: "#000000",
      fontFamily: "Secular One",
      fontSize: 52,
      lineJoin: "round",
      miterLimit: 0,
      padding: 15,
    });

    this.nextButton = document.querySelector("#next");
    this.backButton = document.querySelector("#back");

    this.nextButton?.addEventListener("click", this.nextScreen);
    this.backButton?.addEventListener("click", this.previousScreen);
  }

  static getTextStyle() {
    return this.textStyle;
  }

  nextScreen() {
    let nextKey: string;
    let infoBlocks = document.querySelectorAll("p");
    let infoBlocksArray = Array.from(infoBlocks);
    let nextInfoBlocks: HTMLElement[];

    let currentBlocks = infoBlocksArray.filter(
      (el) => el.style.display !== "none"
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

    infoBlocksArray.forEach((el) => (el.style.display = "none"));
    nextInfoBlocks?.forEach((el) => (el.style.display = "block"));
  }

  previousScreen() {
    let nextKey: string;
    let infoBlocks = document.querySelectorAll("p");
    let infoBlocksArray = Array.from(infoBlocks);
    let nextInfoBlocks: HTMLElement[];

    let currentBlocks = infoBlocksArray.filter(
      (el) => el.style.display !== "none"
    );

    const currentKey: string | undefined = currentBlocks[0].dataset.key;
    if (!currentKey) {
      return;
    }
    nextKey = `'${+currentKey - 1}'`;
    nextInfoBlocks = Array.from(
      document.querySelectorAll(`[data-key=${nextKey}]`)
    );
    if (nextInfoBlocks.length === 0) {
      return;
    }

    infoBlocksArray.forEach((el) => (el.style.display = "none"));
    nextInfoBlocks?.forEach((el) => (el.style.display = "block"));
  }
}
