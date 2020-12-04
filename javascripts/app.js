
// ======================

// let mars = [
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null],
//   [null, null, null, null, null,  null, null, null, null, null]
// ]


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
    rover.y--;
  } else if (rover.direction === "W"){
    rover.x--;
  } else if (rover.direction === "E"){
    rover.x++;
  } else if (rover.direction === "S") {
    rover.y++;
  }
  console.log("moveForward was called");
}

function moveBackward(rover){
  if(rover.direction === "N"){
    rover.y++;
  } else if (rover.direction === "W"){
    rover.x++;
  } else if (rover.direction === "E"){
    rover.x--;
  } else if (rover.direction === "S") {
    rover.y--;
  }  
  console.log("moveBackward was called");
}

function receive (orders) {
  for(let i = 0; i < orders.length; i++){
    currentOrder = orders[i];
    if(currentOrder === "f") {
      moveForward(rover);

      // Pushes Coordinates for Travel Log
      let loggedTravel = "[" + rover.x + "," + rover.y + "]";
      rover.travelLog.push(loggedTravel);

      // should Control boundaries
      // if(rover.x > 10){
      //   console.log("Please do not try to escape Mars ... Thank You :)");
      //   rover.x--;
      // } else if(rover.y > 10) {
      //   console.log("Please do not try to escape Mars ... Thank You :)");
      //   rover.y--;        
      // }

    } else if(currentOrder === "b") {
      moveBackward(rover);

      //Pushes Coordinates for Travel Log
      let loggedTravel = "[" + rover.x + "," + rover.y + "]";
      rover.travelLog.push(loggedTravel);

      //  should Control boundaries
      // if(rover.x > 10){
      // console.log("Please do not try to escape Mars ... Thank You :)");
      // rover.x--;
      // } else if(rover.x < 0){
      //   console.log("Please do not try to escape Mars ... Thank You :)");
      //   rover.x += rover.x;
      // } else if(rover.y > 10) {
      //   console.log("Please do not try to escape Mars ... Thank You :)");
      //   rover.y--;        
      // } else if(rover.y < 0) {
      //   console.log("Please do not try to escape Mars ... Thank You :)");
      //   rover.y += rover.y;
      // }
 
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
