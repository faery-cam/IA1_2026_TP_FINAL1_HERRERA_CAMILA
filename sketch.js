const mundo = new Mundo();

function preload() {
  //ingresar cosas que se cargan previamente
}

function setup() {
  createCanvas(400, 400);

  //hacemos un push dentro de mundo con cada escena llamando a 'addEscena'
  mundo.addEscena(new PantallaInicio());
  mundo.addEscena(new Nivel_01());
  mundo.addEscena(new PantallaFinal());
}

function draw() {
  background(220);
  mundo.escenaActual.draw();
}



function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    let tecla = keyCode;
    mundo.escenaActual.keyPressed(tecla);
  }
}
