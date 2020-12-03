// Rover Object Goes Here

let rover = {
  direction: "N",
  x: 0,
  y: 0
}

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
    rover.y++;
  } else if (rover.direction === "W"){
    rover.x--;
  } else if (rover.direction === "E"){
    rover.x++;
  } else if (rover.direction === "S") {
    rover.y--;
  }
  console.log("moveForward was called")
}
