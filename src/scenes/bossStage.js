import { Container } from "pixi.js";
import { Boss } from "../objects/boss";
export class BossStage extends Container{
    constructor(){
        super();
        this.bossStageContainer = new Container();
        this.addChild(this.bossStageContainer);

    }
}