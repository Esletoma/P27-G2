import Bootloader from "./bootloader.js";
import ScenePlay from "./scenes/scenePlay.js"

const config = {
    width: 1080,
    hwight: 720,
    parent: "contenedor",
    physics:{
        default: "arcade"
    },
    scene: [
        Bootloader,
        ScenePlay
    ]
}

new Phaser.Game(config);