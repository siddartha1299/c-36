var canvas;
var gameState=0;
var database,form,game;

function setup(){
cnavas=createCanvas(400,400);
database=firebase.database();
game=new Game();
game.getState();
game.start();



}
function draw(){



}