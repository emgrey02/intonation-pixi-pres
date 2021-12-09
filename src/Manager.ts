import { Application } from "pixi.js";
import { Scene } from "./scenes/Scene";

export class Manager {
  private constructor() {
    /*this class is purely static. No constructor to see here*/
  }

  // Safely store variables for our game
  private static app: Application;
  private static currentScene: Scene;

  // Width and Height are read-only after creation (for now)
  private static _width: number;
  private static _height: number;

  // With getters but not setters, these variables become read-only
  public static get width(): number {
    return Manager._width;
  }
  public static get height(): number {
    return Manager._height;
  }

  // Use this function ONCE to start the entire machinery
  public static initialize(
    width: number,
    height: number,
    background: number
  ): void {
    // store our width and height
    Manager._width = width;
    Manager._height = height;

    // Create our pixi app
    Manager.app = new Application({
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: background,
      width: width,
      height: height,
    });
    Manager.app.renderer.view.style.position = "absolute";
    Manager.app.renderer.view.style.display = "block";
    Manager.app.resizeTo = window;
  }

  // Call this function when you want to go to a new scene
  public static changeScene(newScene: Scene): void {
    // Remove and destroy old scene... if we had one..
    if (Manager.currentScene) {
      Manager.app.stage.removeChild(Manager.currentScene);
      Manager.currentScene.destroy();
    }

    // Add the new one
    Manager.currentScene = newScene;
    Manager.app.stage.addChild(Manager.currentScene);
  }
}
