import { Application, Loader } from "pixi.js";
import { Scene } from "./scenes/MasterScene";
import {
  TitleScene,
  Basics,
  SoundExample,
  FrequencyBasics,
} from "./scenes/Scenes";
// import { Circle } from "./Circle";
import { WebfontLoaderPlugin } from "pixi-webfont-loader";
import { sound } from "@pixi/sound";

let currentScene: Scene;

const nextButton: HTMLButtonElement | null = document.querySelector("#next");
const backButton: HTMLButtonElement | null = document.querySelector("#back");

nextButton?.addEventListener("click", nextScreen);
backButton?.addEventListener("click", nextScreen);

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x7eb6d9,
  width: window.innerWidth,
  height: window.innerHeight,
});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.resizeTo = window;

window.addEventListener("resize", () => {
  setTimeout((window.location.href = window.location.href), 3000);
});

const sceneArray: Scene[] = [];

//create scenes
const titleScene: TitleScene = new TitleScene(
  app.screen.width,
  app.screen.height,
  "Harmonic Presence"
);
sceneArray.push(titleScene);
currentScene = titleScene;
app.stage.addChild(titleScene);

const basics: Basics = new Basics(
  app.screen.width,
  app.screen.height,
  "What are Harmonics?"
);
sceneArray.push(basics);

const soundExample: SoundExample = new SoundExample(
  app.screen.width,
  app.screen.height,
  "Sound Example"
);
sceneArray.push(soundExample);

const frequencyBasics: FrequencyBasics = new FrequencyBasics(
  app.screen.width,
  app.screen.height,
  "Frequency Basics"
);
sceneArray.push(frequencyBasics);

const freqBasicsCont: FrequencyBasics = new FrequencyBasics(
  app.screen.width,
  app.screen.height,
  "Frequency Basics"
);
sceneArray.push(freqBasicsCont);

function nextScreen(e: Event) {
  const target = e.target as HTMLButtonElement;
  let currentButton: string;
  let nextScene: Scene | undefined;
  let index: number = sceneArray.indexOf(currentScene);

  currentButton = target.id;
  if (currentButton === "next") {
    nextScene = sceneArray[index + 1];
  } else {
    nextScene = sceneArray[index - 1];
  }

  if (!nextScene) {
    return;
  }

  app.stage.removeChild(currentScene);
  app.stage.addChild(nextScene);
  currentScene = nextScene;
  if (currentScene === titleScene) {
    sound.play("intro-music");
  } else {
    sound.pause("intro-music");
  }

  let nextInfoBlocks = getNextInfoBlocks(currentButton);
  nextInfoBlocks?.forEach((el) => (el.style.display = "block"));
}

function getNextInfoBlocks(currentButton: string) {
  let nextKey: string;
  let infoBlocks = document.querySelectorAll("p");
  let infoBlocksArray = Array.from(infoBlocks);
  let nextInfoBlocks: HTMLElement[];

  let currentBlocks = infoBlocksArray.filter(
    (el) => el.style.display !== "none"
  );

  const currentKey: string | undefined = getDataKey(currentBlocks);

  if (!currentKey) {
    return;
  }
  if (currentButton === "next") {
    nextKey = `'${+currentKey + 1}'`;
  } else {
    nextKey = `'${+currentKey - 1}'`;
  }

  nextInfoBlocks = Array.from(
    document.querySelectorAll(`[data-key=${nextKey}]`)
  );
  if (nextInfoBlocks.length === 0) {
    return;
  }

  infoBlocksArray.forEach((el) => (el.style.display = "none"));
  return nextInfoBlocks;
}

function getDataKey(array: HTMLElement[]) {
  return array[0].dataset.key;
}

// const pianoKeys: Sprite = Sprite.from("images/piano-keys.png");
// // secondScene.addChild(pianoKeys);
// pianoKeys.anchor.set(0.5);
// pianoKeys.scale.set(0.4);
// pianoKeys.x = app.screen.width / 2;
// pianoKeys.y = app.screen.width / 2;

// const circle1: Circle = new Circle(100, 200, 35);
// const circle2: Circle = new Circle(200, 400, 50);
// cont.addChild(circle1.getCircle());
// cont.addChild(circle2.getCircle());

//load fonts
Loader.registerPlugin(WebfontLoaderPlugin);
app.loader.add({
  name: "Secular One",
  url: "https://fonts.googleapis.com/css2?family=Secular+One",
});
app.loader.add({
  name: "Mukta",
  url: "https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800",
});
