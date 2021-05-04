import 'phaser';
import gameOptions from './gameOptions';

export default class Button2 extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    this.text = this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      const txt = prompt('Please enter your name', gameOptions.playerName);
      if (txt === '' || txt === null) {
        this.scene.scene.start('Options');
      } else {
        gameOptions.playerName = txt;
        this.scene.scene.start('Title');
      }
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
    });

    this.scene.add.existing(this);
  }
}