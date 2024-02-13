class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionScene");
    }

    preload() {
        this.load.image('player','./assets/player.png');
        this.load.image('rock','./assets/rock.png');
        this.load.image('gear','./assets/gear.png');
        this.load.image('cell','./assets/energycell.png');

        this.load.audio("menuSelect", "./assets/menuSelect.wav");
    }

    create() {
        let menuConfig = {
            fontFamily: "Courier", 
            fontSize: "18px",
            backgroundColor: "#F0F0F0",
            color: "#2020F0",
            align: "right",
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        };

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        //(↑) & (↓)
        this.add.text(centerX, centerY + (3.25*textSpacer), "Credit: Jason Torres(visuals) / Pixabay.com(sounds)", menuConfig).setOrigin(.5);
        this.add.text(centerX, centerY + (2.75*textSpacer), "Use (↑) & (↓) arrows or (W) & (S) keys to move.", menuConfig).setOrigin(.5);
        this.add.text(centerX, centerY + (.25*textSpacer), "Collect Gears to earn points.", menuConfig).setOrigin(.5);
        this.add.text(centerX, centerY - (.75*textSpacer), "Press (Space) when cells are in the reticle to gain fuel.", menuConfig).setOrigin(.5);
        this.add.text(centerX, centerY - (1.75*textSpacer), "Dodge rocks to avoid losing fuel.", menuConfig).setOrigin(.5);
        menuConfig.fontSize = "32px";
        this.backText = this.add.text(centerX, centerY - (3*textSpacer), "Click here or press (↓)\nto go back to the menu.", menuConfig).setOrigin(.5).setInteractive();

        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);


        menuConfig.fontSize = "12px";

        this.p1 = this.add.sprite(game.config.width/5,3*game.config.height/5 + 35,"player");
        this.add.text(game.config.width/5,3*game.config.height/5+85,'Player',menuConfig).setOrigin(.5);
        this.p1.setScale(2, 2);

        this.obs = this.add.sprite(2*game.config.width/5,3*game.config.height/5 + 35,"rock");
        this.add.text(2*game.config.width/5,3*game.config.height/5+85,'Rock',menuConfig).setOrigin(.5);
        this.obs.setScale(2, 2);

        this.add.text(3*game.config.width/5,3*game.config.height/5+85,'Gear',menuConfig).setOrigin(.5);
        this.gate = this.add.sprite(3*game.config.width/5,3*game.config.height/5 + 35,"gear");
        this.gate.setScale(2, 2);

        this.tar = this.add.sprite(4*game.config.width/5,3*game.config.height/5 + 35,"cell");
        this.add.text(4*game.config.width/5,3*game.config.height/5+85,'Energy Cell',menuConfig).setOrigin(.5);
        this.tar.setScale(2, 2);

        this.singleClick = 0;
    }

    update() {
        if(game.input.mousePointer.isDown){
            this.singleClick++;
        } else if(!(game.input.mousePointer.isDown)){
            this.singleClick = 0;
        }
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            this.sound.play("menuSelect");
            this.time.addEvent({
                delay:1300,
                callback: () => {this.scene.start("menuScene")},
                loop:false,
                callbackScope:this
            });
        }
        if(this.singleClick == 1) {
            this.backText.on('pointerdown',() => {
                this.sound.play("menuSelect");
                this.time.addEvent({
                    delay:1300,
                    callback: () => {this.scene.start("menuScene")},
                    loop:false,
                    callbackScope:this
                });
            });
        }
    }
}