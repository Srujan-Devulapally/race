var database, gameState = 0, playerCount = 0, form, player, game, allPlayers
var car1, car2, car3, car4, cars
function setup(){
  createCanvas(displayWidth-20,displayHeight-20)
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    game.play()
  }
}
