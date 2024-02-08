/*
Jason Torres

*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Instructions, Play]
};

let game = new Phaser.Game(config);

game.settings = {
    scrollSpeed: 1.5,
    gameTimer: 60000,
};

//reserve some keyboard variables
let keyUP, keyDOWN, keyW, keyS, keySpace;
let mouseDown = false;
let highscore = 0;