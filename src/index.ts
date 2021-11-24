import { Application, Container, TextStyle, Text } from 'pixi.js'
import { Scene } from './scenes/Scene';
import { Circle } from './Circle';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x000000,
	width: 1480,
	height: 880
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.resizeTo = window;

const titleScene: Scene = new Scene(app.screen.width, app.screen.height);
app.stage.addChild(titleScene);

// const mainScene: Scene = new Scene(app.screen.width, app.screen.height);
// app.stage.addChild(mainScene);

const cont: Container = new Container();
cont.x = 0;
cont.y = 0;
app.stage.addChild(cont);

// const background: Sprite = Sprite.from('images/anotherbkgd.jpg');
// background.x = 0;
// background.y = 0;
// cont.addChild(background);

const circle1: Circle = new Circle(100, 200, 35);
const circle2: Circle = new Circle(200, 400, 50);
cont.addChild(circle1.getCircle());
cont.addChild(circle2.getCircle());

const titleStyle: TextStyle = new TextStyle({
  fill: [
    "#f57900",
    "#a40000"
  ],
  fontFamily: "Helvetica",
  fontSize: 86,
  lineJoin: "round",
  miterLimit: 0,
  padding: 15,
  stroke: "#ffffff",
  strokeThickness: 5
});
const title: Text = new Text('Intonation', titleStyle);
app.stage.addChild(title);
title.x = app.screen.width / 2 - (title.width / 2);
title.y = 20;