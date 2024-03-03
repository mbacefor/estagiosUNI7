import { Input, Scene } from 'phaser';

import { EVENTS_NAME, GameStatus } from '../consts';
import { Actor } from './actor';
import { Text } from './text';

export class Player extends Actor {
  private keyW: Input.Keyboard.Key | undefined;
  private keyA: Input.Keyboard.Key | undefined;
  private keyS: Input.Keyboard.Key | undefined;
  private keyD: Input.Keyboard.Key | undefined;
  private keySpace: Input.Keyboard.Key | undefined;
  private hpValue: Text;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'king');

    // KEYS
    if (
      this !== null &&
      this.scene !== null &&
      this.scene.input !== null &&
      this.scene.input.keyboard !== null
    ) {
      this.keyW = this.scene.input.keyboard.addKey('W');
      this.keyA = this.scene.input.keyboard.addKey('A');
      this.keyS = this.scene.input.keyboard.addKey('S');
      this.keyD = this.scene.input.keyboard.addKey('D');
      this.keySpace = this.scene.input.keyboard.addKey(32);
      this.keySpace.on('down', (event: KeyboardEvent) => {
        this.anims.play('attack', true);
        this.scene.game.events.emit(EVENTS_NAME.attack);
      });
    }

    this.hpValue = new Text(this.scene, this.x, this.y - this.height, this.hp.toString())
      .setFontSize(12)
      .setOrigin(0.8, 0.5);

    // PHYSICS
    this.getBody().setSize(30, 30);
    this.getBody().setOffset(8, 0);

    // ANIMATIONS
    this.initAnimations();

    this.on('destroy', () => {
      if (this !== null && this.keySpace !== null && this.keySpace !== undefined) {
        this.keySpace.removeAllListeners();
      }
    });
  }

  update(): void {
    this.getBody().setVelocity(0);

    if (this.keyW?.isDown && this.body !== null) {
      this.body.velocity.y = -110;
      !this.anims.isPlaying && this.anims.play('run', true);
    }

    if (this.keyA?.isDown && this.body !== null) {
      this.body.velocity.x = -110;
      this.checkFlip();
      this.getBody().setOffset(48, 15);
      !this.anims.isPlaying && this.anims.play('run', true);
    }

    if (this.keyS?.isDown && this.body !== null) {
      this.body.velocity.y = 110;
      !this.anims.isPlaying && this.anims.play('run', true);
    }

    if (this.keyD?.isDown && this.body !== null) {
      this.body.velocity.x = 110;
      this.checkFlip();
      this.getBody().setOffset(15, 15);
      !this.anims.isPlaying && this.anims.play('run', true);
    }

    this.hpValue.setPosition(this.x, this.y - this.height * 0.4);
    this.hpValue.setOrigin(0.8, 0.5);
  }

  private initAnimations(): void {
    this.scene.anims.create({
      key: 'run',
      frames: this.scene.anims.generateFrameNames('a-king', {
        prefix: 'run-',
        end: 7,
      }),
      frameRate: 8,
    });

    this.scene.anims.create({
      key: 'attack',
      frames: this.scene.anims.generateFrameNames('a-king', {
        prefix: 'attack-',
        end: 2,
      }),
      frameRate: 8,
    });
  }

  public getDamage(value?: number): void {
    super.getDamage(value);
    this.hpValue.setText(this.hp.toString());

    if (this.hp <= 0) {
      this.scene.game.events.emit(EVENTS_NAME.gameEnd, GameStatus.LOSE);
    }
  }
}
