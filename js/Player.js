class Player {
  constructor() {
    
    this.name =  null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0;
    this.score = 0;
    this.fuel = 185;
    this.life = 185;
  }

  addPlayer() {

    var playerIndex = "players/player" + this.index; // Cria uma ordem nos jogadores
    
    if (this.index == 1){
      this.positionX = width/2 - 100;
    }
    else {
      this.positionX = width/2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank:this.rank,
      score:this.score
    });
  }

  // Lê a quantidade de jogadores do banco de dados

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value" , data => {
      playerCount = data.val();
    });
  }

  //Armazena a quantidade de jogadores fornecendo a localização do diretório no Banco de Dados ( BD )

  updateCount(count){
    database.ref("/").update({
      playerCount:count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX:this.positionX,
      positionY:this.positionY,
      rank:this.rank,
      score:this.score,
      life:this.life
    });
  }

  static getPlayersInfo(){

    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  getDistance(){
    /*atualiza a distância do banco de dados para que o jogador saiba onde o oponente está */
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });

  }

  getCarsAtEnd(){
    database.ref("carsAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }

  static updateCarsAtEnd(rank){
    database.ref("/").update({
      carsAtEnd: rank
    });
  }
}