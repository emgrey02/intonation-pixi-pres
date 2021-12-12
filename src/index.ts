import { LoaderScene } from "./scenes/LoaderScene";
import { Manager } from "./Manager";

Manager.initialize(window.innerWidth, window.innerHeight, 0x7eb6d9);

window.addEventListener("resize", () => {
  setTimeout((window.location.href = window.location.href), 3000);
});

Manager.changeScene(new LoaderScene("loading..."));
