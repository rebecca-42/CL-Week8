let socket = io();

socket.on('connect', () => {
    console.log("Connected");
  })

function setup() {
    createCanvas(1000, 1000);
    background(255);

    socket.on('mouseData', (data) => {
      drawPos(obj);
    })
}

function mouseMoved() {
    let mousePos = {
      x: mouseX,
      y: mouseY
    };
    socket.emit('data', mousePos);
  }

  function drawPos(pos) {
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 10, 10,);
  }
