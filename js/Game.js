class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      player1 = createSprite(100,200,20,20);
      player1.shapeColor = "green";
     // player1.addImage("car1",car1_img);
      player2 = createSprite(300,200,20,20);
     // player2.addImage("car2",car2_img);
      player3 = createSprite(500,200,20,20);
     // player3.addImage("car3",car3_img);
      player4 = createSprite(700,200,20,20);
    //  player4.addImage("car4",car4_img);
      players = [player1,player2,player3,player4];

    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
     // player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        background("#373A3C");

        block1 = createSprite(displayWidth - 50,displayHeight - 40,10000,25);
        block1.shapeColor = "#0C81CD";
        block2 = createSprite(10,10,10000,25);
        block2.shapeColor = "#0C81CD";
        block3 = createSprite(10,10,25,10000);
        block3.shapeColor = "#0C81CD";
        block4 = createSprite(1220,10,25,10000);
        block4.shapeColor = "#0C81CD";
        block5 = createSprite(10,200,250,25);
        block5.shapeColor = "#0C81CD";
        block6 = createSprite(10,450,250,25);
        block6.shapeColor = "#0C81CD";
        block7 = createSprite(400,10,25,250);
        block7.shapeColor = "#0C81CD";
        block8 = createSprite(800,10,25,250);
        block8.shapeColor = "#0C81CD";
        block9 = createSprite(1220,200,250,25);
        block9.shapeColor = "#0C81CD";
        block10 = createSprite(1220,450,250,25);
        block10.shapeColor = "#0C81CD";
        block11 = createSprite(400,650,25,200);
        block11.shapeColor = "#0C81CD";
        block12 = createSprite(800,650,25,200);
        block12.shapeColor = "#0C81CD";
        block13 = createSprite(480,310,25,150);
        block13.shapeColor = "#0C81CD";
        block14 = createSprite(650,220,150,25);
        block14.shapeColor = "#0C81CD";
        block15 = createSprite(810,310,25,150);
        block15.shapeColor = "#0C81CD";
        block16 = createSprite(650,220,150,25);
        block16.shapeColor = "#0C81CD";
        block17 = createSprite(650,420,150,25);
        block17.shapeColor = "#0C81CD";
        block18 = createSprite(250,360,120,25);
        block18.shapeColor = "#0C81CD";
        block19 = createSprite(320,313,25,120);
        block19.shapeColor = "#0C81CD";
        block20 = createSprite(1000,360,120,25);
        block20.shapeColor = "#0C81CD";
        block21 = createSprite(940,312,25,120);
        block21.shapeColor = "#0C81CD"; 
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var xP;
        var yP;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          //x = x + 200;
          //use data form the database to display the cars in y direction
          xP = displayWidth - allPlayers[plr].x
          yP = displayHeight - allPlayers[plr].y;
          players[index-1].x = xP;
          players[index-1].y = yP;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(xP,yP,10,10);
            players[index - 1].shapeColor = "red";
            camera.position.x = players[index-1].xD;
            camera.position.y = players[index-1].yD;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.y +=10
        player.x = 0
        player.update();
      }

      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.y -=10
        player.x = 0
        player.update();
      }

      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.x -=10
        player.y = 0 
        player.update();
      }

      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.x +=10
        player.y = 0
        player.update();
      }
  
     /* if(player.distance > 3860){
        gameState = 2;
        player.rank++;
        Player.updateCarsAtEnd(player.rank);
      }i*/
     
      drawSprites();
    }
  
    /*end(){
      console.log("Game Ended");
      alert(player.rank);
    }*/
  }
  