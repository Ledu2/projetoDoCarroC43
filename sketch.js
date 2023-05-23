var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var car1_img, car2_img, track_img;
var blast_img, fuel_img, goldCoin_img, life_img, obstacle1Image, obstacle2Image, reset_img, title_img;
var car1, car2;
var allPlayers;
var cars = [];
var fuels, powerCoins, obstacles;

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track_img = loadImage("assets/track.jpg");
  blast_img = loadImage("assets/blast.png");
  fuel_img = loadImage("assets/fuel.png");
  goldCoin_img = loadImage("assets/goldCoin.png");
  life_img = loadImage("assets/life.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  reset_img = loadImage("assets/reset.png");
  title_img = loadImage("assets/title.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount == 2){
    game.update(1);
  }
  if(gameState == 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}