var canvas, backgroundImage;
var gameState = 0;
var distance = 0;
var database;
var block1,block2,block3,block4;
var block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block21,block22,block23,block24;
var player1,player2,player3,player4;
var players;
var allPlayers;
var game,form,player;
var playerCount;

function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-25);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //text(mouseX + "," + mouseY,mouseX,mouseY);
  drawSprites();
}
