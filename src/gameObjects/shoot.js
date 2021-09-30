class Shoot extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setVelocityY(-600);
        this.setAngle(90)
        this.setScale(0.6)
    }
}

export default Shoot;