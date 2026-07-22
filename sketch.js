const mundo = new Mundo();
const canciones = new Canciones();
let levelSelect, menuCancel, menuMove, menuMusic, menuSelect, menuSelect2, pause, pressNote, pressNote2, result, timer;

function preload() {
  //ingresar cosas que se cargan previamente
  soundFormats('mp3', 'wav');

  levelSelect = loadSound('assets/audio/levelSelect.wav');
  menuCancel = loadSound('assets/audio/menuCancel.wav');
  menuMove = loadSound('assets/audio/menuMove.wav');
  menuMusic = loadSound('assets/audio/menuMusic.mp3');
  menuSelect = loadSound('assets/audio/menuSelect.wav');
  menuSelect2 = loadSound('assets/audio/menuSelect2.wav');
  pause = loadSound('assets/audio/pause.wav');
  pressNote = loadSound('assets/audio/pressNote.wav');
  pressNote2 = loadSound('assets/audio/pressNote2.wav');
  result = loadSound('assets/audio/result.wav');
  timer = loadSound('assets/audio/timer.wav');

}

function setup() {
  createCanvas(400, 400);

  menuMove.playMode('restart');
  menuSelect.playMode('restart');

  textFont('Zen Dots');

  //hacemos un push dentro de mundo con cada escena llamando a 'addEscena'
  mundo.addEscena(new PantallaInicio());
  mundo.addEscena(new Nivel_01());
  mundo.addEscena(new PantallaFinal());
}

function draw() {
  background(220);
  mundo.escenaActual.draw();
}

function mouseClicked() {
  mundo.escenaActual.mouseClicked();
}

//revisa la tecla presionada y dentro de escena se maneja que se hace con el dato guardado en caso de haber pasado el IF
function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    let tecla = keyCode;
    mundo.escenaActual.keyPressed(tecla);
  }
}