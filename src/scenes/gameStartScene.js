import { Container, Texture, Sprite, TilingSprite, Text } from "pixi.js";
import { Setting } from "../settings";
import { GamePlayScene } from "./gamePlayScene";
export class GameStartScene extends Container {
    constructor() {
        super();
        this.gameContainer = new Container();
        this.addChild(this.gameContainer);
        this.initBackground();
        this.initLogo();
        this.initStartButton();
        this.initGamePlayScene()
    }

    initGamePlayScene() {
        this.gamePlayScene = new GamePlayScene();
        this.gamePlayScene.visible = false;
        this.addChild(this.gamePlayScene);
    }
    //create a background TilingSpite
    initBackground() {
        let texture = Texture.from("map.png");
        this.background = new Sprite(texture);
        this.background = new TilingSprite(texture, Setting.WIDTH, Setting.HEIGHT);
        this.gameContainer.addChild(this.background);
    }

    //create  a logo game 
    initLogo() {
        let texture = Texture.from("logo.png");
        this.logo = new Sprite(texture);
        this.logo.anchor.set(0.5);
        this.logo.position.set(Setting.WIDTH / 2, Setting.HEIGHT / 3);
        this.gameContainer.addChild(this.logo);
    }

    //create a start button
    initStartButton() {
        let texture = Texture.from("button.png");
        this.startButton = new Sprite(texture)
        this.startButton.anchor.set(0.5);
        this.startButton.position.set(Setting.WIDTH / 2, Setting.HEIGHT * 0.70);
        this.startButton.interactive = true;
        this.startButton.buttonMode = true;
        this.startButton.on('pointerdown', () => {
            //handle start button click 

            this.gamePlayScene.visible = true;
            this.gameContainer.visible = false;
        })
        this.gameContainer.addChild(this.startButton)
    }

    update(dt) {
        this.background.tilePosition.y += 0.5;
        if (this.gamePlayScene.visible) {
            this.gamePlayScene.update(dt)
        }
    }
}