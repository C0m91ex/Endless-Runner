/*
Jason Torres
Scavenger Run
Approximately 23 Hours

Creative tilt:
I really liked coding the radomly generated obstacles and pickups that I used in my game. I had to make sure that they 
weren't overlapping and made sure to have the impact between the player model and the object. I also really like the art 
that I had done for this project, I have always loved the sci-fi style and just seeing it implemented into my game was 
so amazing. 
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
//need left mouse click