
import * as PIXI from "pixi.js";

export async function snorlaxAnimation() {
    const app = new PIXI.Application();
    await app.init({ width: 200, height:200, backgroundAlpha: 0});
    const totalFrames = 50;
    const normalFrames = 18;
    const normalLoop = 3;
    const imagePaths: string[] = [];

    for (let i = 0; i < normalLoop; i++) {
        for (let j = 0; j < normalFrames; j++) {
            imagePaths.push(`Snorlax/Snorlax-${j}.png`);
        }
    }
    for (let j = normalFrames; j < totalFrames; j++) {
        imagePaths.push(`Snorlax/Snorlax-${j}.png`);
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
    anim.width = 200;
    anim.height = 200;
    app.stage.addChild(anim);
    return app.canvas;
}


