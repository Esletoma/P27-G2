import Shoot from "../gameObjects/shoot.js";
class ScenePlay extends Phaser.Scene{
    constructor(){
        super({key: "ScenePlay"});
    }

    create(){
        //var
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.scoreText;
        this.perder;

        //Fondo
        this.add.image(500,500,"fondo").setScale(2);

        //Nave
        this.nave = this.physics.add.image(this.width/2,this.height-80,"nave").setScale(0.07).refreshBody();
        this.nave.setCollideWorldBounds(true);

        //enemigo
        this.enemigo = this.physics.add.image(100,0,"enemigo").setScale(0.05).refreshBody();
        this.enemigo.setBounce(true);
        this.enemigo.setCollideWorldBounds(true);
        this.enemigo.setVelocityX(250);
        this.enemigo.setAccelerationY(5);

        //Control
        this.cursor = this.input.keyboard.createCursorKeys();
        this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

    
        //Score Text
        this.scoreText = this.add.text(16, 16, 'Puntaje: 0', { fontSize: '32px', fill: '#fff' });

        //Impactado
        this.physics.add.overlap(this.enemigo,this.nave,impactNave,null,this);
    
        //Restart?
        this.input.once('pointerdown', function (event) {

            this.scene.restart();

        }, this);
    }

    update(){
        // Arriba y abajo
        if(this.cursor.right.isDown){
            this.nave.setVelocityX(300);
        }else if(this.cursor.left.isDown){
            this.nave.setVelocityX(-300);
        }else{
            this.nave.setVelocityX(0);
        }
        // Lados
        if(this.cursor.up.isDown){
            this.nave.setVelocityY(-300);
        }else if(this.cursor.down.isDown){
            this.nave.setVelocityY(300);
        }else{
            this.nave.setVelocityY(0);
        }
        // Disparo
        if(this.input.keyboard.checkDown(this.keyZ,300)){
            this.shoot = new Shoot(this,this.nave.x,this.nave.y-80,"shoot");
            // Overlap
            this.physics.add.overlap(this.shoot,this.enemigo,impactEnemy,null,this);

        // if(this.keyX.isDown){
        //     this.scene.restart();
            
        // }
        }
    }

}
function impactEnemy(shoot,enemigo) {
    var score=0;
    enemigo.disableBody(true,true);
    score+=25;
    this.scoreText.setText('Puntaje: ' + score);
    
}
function impactNave(enemiog,nave) {
    this.physics.pause();
    nave.setTint(0xff0000)
    this.perder = this.add.text(150,350, 'Fin del Juego', { fontSize: '100px', fill: '#fff' });
    this.perder = this.add.text(150,450, 'Clic sobre la pantalla para reiniciar', { fontSize: '35px', fill: '#fff' });

}

export default ScenePlay;