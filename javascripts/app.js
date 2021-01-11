
// ======================

let mars = [
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null],
  [null, null, null, null, null,  null, null, null, null, null]
]


// ======================

// Rover Object Goes Here

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [] 
}


// ======================

// Cardinal Directions in an Array for more dynamic direction choice
let directionArray = ["N", "E", "S", "W"];
let index = 0;

// ======================

// Creates Obstacles

function createObstacles (maxObstacles) {
  for(let i = 0; i < maxObstacles; i++){
    let randX = Math.floor(Math.random() * mars.length);
    let randY = Math.floor(Math.random() * mars[randX].length);

    mars[randX][randY] = "Obstacle";
  }
  
}

createObstacles(3);

// Movements


function turnLeft(rover){
  if(index === 0){
    index = directionArray.length - 1;
    rover.direction = directionArray[index];
  }
  else {
 
  rover.direction = directionArray[index - 1];
  index--;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  if(index === 3){
    index = 0;
    rover.direction = directionArray[index];
  }
  else {
  rover.direction = directionArray[index + 1];
  index++;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  if(rover.direction === "N"){
    rover.x--;

    // controls for obstacles

    if(mars[rover.x][rover.y] === "Obstacle"){
      console.log("There's an obstacle ahead, cannot proceed");
      rover.x++;
    }

  } else if (rover.direction === "W"){
    rover.y--;
    
    // controls for obstacles

    if(mars[rover.x][rover.y] === "Obstacle"){
      console.log("There's an obstacle ahead, cannot proceed");
      rover.y++;
    }

  } else if (rover.direction === "E"){
    rover.y++;

    // controls for obstacles

    if(mars[rover.x][rover.y] === "Obstacle"){
      console.log("There's an obstacle ahead, cannot proceed");
      rover.y--;
    }

  } else if (rover.direction === "S") {
    rover.x++;

    // controls for obstacles

    if(mars[rover.x][rover.y] === "Obstacle"){
      console.log("There's an obstacle ahead, cannot proceed");
      rover.x--;
    }

  }
  console.log("moveForward was called");
}

function moveBackward(rover){
  if(rover.direction === "N"){
    rover.x++;

    // controls for obstacles

    if(mars[rover.x][rover.y] === "Obstacle"){
      console.log("There's an obstacle ahead, cannot proceed");
      rover.x--;
    }

  } else if (rover.direction === "W"){
    rover.y++;

    // controls for obstacles

    if(mars[rover.x][rover.y] === "Obstacle"){
      console.log("There's an obstacle ahead, cannot proceed");
      rover.y--;
    }

  } else if (rover.direction === "E"){
    rover.y--;

    // controls for obstacles

    if(mars[rover.x][rover.y] === "Obstacle"){
      console.log("There's an obstacle ahead, cannot proceed");
      rover.y++;
    }

  } else if (rover.direction === "S") {
    rover.x--;

    // controls for obstacles

    if(mars[rover.x][rover.y] === "Obstacle"){
      console.log("There's an obstacle ahead, cannot proceed");
      rover.x++;
    }

  }  
  console.log("moveBackward was called");
}

function receive (orders) {
  for(let i = 0; i < orders.length; i++){
    currentOrder = orders[i];

    if(currentOrder === "f") {
      moveForward(rover);

      // should Control boundaries
      if(rover.x > 10){
        console.log("Please do not try to escape Arrakis ... Thank You :)");
        rover.x--; 
      } else if(rover.x < 0){
        console.log("Please do not try to escape Arrakis ... Thank You :)");
        rover.x++; 
      } else if(rover.y > 10) {
        console.log("Please do not try to escape Arrakis ... Thank You :)");
        rover.y--;
      } else if(rover.y < 0) {
        console.log("Please do not try to escape Arrakis ... Thank You :)");
        rover.y++;
      }

      // Pushes Coordinates for Travel Log
      let loggedTravel = "[" + rover.x + "," + rover.y + "]";
      rover.travelLog.push(loggedTravel);

    } else if(currentOrder === "b") {
      moveBackward(rover);
      //  should Control boundaries
      if(rover.x > 10){
        console.log("Please do not try to escape Arrakis ... Thank You :)");
        rover.x--;
      } else if(rover.x < 0){
        console.log("Please do not try to escape Arrakis ... Thank You :)");
        rover.x++;
      } else if(rover.y > 10) {
        console.log("Please do not try to escape Arrakis ... Thank You :)");
        rover.y--;    
      } else if(rover.y < 0) {
        console.log("Please do not try to escape Arrakis ... Thank You :)");
        rover.y++;
      }

      //Pushes Coordinates for Travel Log
      let loggedTravel = "[" + rover.x + "," + rover.y + "]";
      rover.travelLog.push(loggedTravel);
 
    } else if(currentOrder === "r") {
      turnRight(rover);
    } else if(currentOrder === "l") {
      turnLeft(rover);
    } else {
      console.log(orders[i] + " is not a correct command!")
    }


  }
  console.log(rover.travelLog);
}

// =================

// Random generator

function randomGenerator (maxNum){
  return randomNum = Math.floor(Math.random * maxNum);
}


