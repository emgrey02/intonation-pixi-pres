import { Scene } from './Scene';
import { Sprite, Ticker } from 'pixi.js';
import { Manager } from '../Manager';
import { Second } from './Second';

export class First extends Scene {
  private soundWave: Sprite;
  private alphaChange: number = 10;

  constructor(title: string) {
    super(title);

    this.soundWave = Sprite.from('sound wave');

    this.soundWave.accessible = true;
    this.soundWave.accessibleTitle = 'A sine wave with the wavelength labelled';

    this.soundWave.scale.set(1);
    this.soundWave.anchor.set(0.5);
    this.soundWave.x = Manager.width / 2;
    this.soundWave.y = 0;
    this.addChild(this.soundWave);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.soundWave.y = this.soundWave.y + this.alphaChange * deltaTime;
    if (this.soundWave.y >= Manager.height / 2) {
      this.soundWave.y = Manager.height / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Second('Pitch'));
  }
}
