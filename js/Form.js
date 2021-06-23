class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.reset.position(displayWidth-50,20);
    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      Player.updateCarsAtEnd(0);
    })
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      if(player.name === "kk" || player.name === "KK" || player.name === "Keyaa" || player.name === "keyaa" || player.name === "Keyaa Kakade" || player.name === "keyaa kakade" || player.name === "Keyaa kakade" || player.name === "keyaa Kakade"){
        this.greeting.html("Hallo Keeyaa Kadke!")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      }
      
      else{
        this.greeting.html("Hallo " + player.name + "!")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      }
    });

  }
}
