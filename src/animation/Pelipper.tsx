
import * as PIXI from "pixi.js";
import { Ticker } from "pixi.js";   

export async function pelipperAnimation() {
    const app = new PIXI.Application();
    await app.init({ width: window.innerWidth, height:100, backgroundAlpha: 0});
    const totalFrames = 35;
    const imagePaths: string[] = [];

    for (let j = 0; j < totalFrames; j++) {
        imagePaths.push(`/Pelipper/Pelipper-${j}.png`);
    }
    // Preload all images from /public folder
    await PIXI.Assets.load(imagePaths);

    const frames: PIXI.Texture[] = imagePaths.map((path) => PIXI.Texture.from(path));
    const anim = new PIXI.AnimatedSprite(frames);
    anim.animationSpeed = 0.3;
    anim.loop = true;
    anim.play();
    anim.anchor.set(0.5);
    anim.x = app.screen.width / 2;
    anim.y = app.screen.height / 2;
    anim.width = 150;
    anim.height = 100;
    app.stage.addChild(anim);
    const callback = () => {
        anim.x -= 1;
        if (anim.x + anim.width / 2 < 0) {
            anim.x = app.screen.width + anim.width / 2;
        }
    }
    const ticker = new Ticker();
    ticker.add(callback);
    ticker.start();
    return app.canvas;
}