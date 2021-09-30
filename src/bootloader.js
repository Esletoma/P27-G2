class Bootloader extends Phaser.Scene{
    constructor(){
        super({key:"Bootloader"});
    }
    preload(){
        this.load.on("complete",() => {
            this.scene.start("ScenePlay");
        });
        this.load.image("nave","./assets/nave.png");
        this.load.image("fondo","./assets/background.png");
        this.load.image("shoot","./assets/proyectil.png")
        this.load.image("enemigo","./assets/enemigo.png")
    }
    
}
export default Bootloader;