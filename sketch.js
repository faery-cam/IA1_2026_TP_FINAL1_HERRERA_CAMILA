const mundo = new Mundo();
const canciones = new Canciones();

let levelSelect, menuCancel, menuMove, menuSelect, menuSelect2, pause, pressError, pressNote, pressNote2, result, timer;

let efectosSonido = [];
let menuMusica = [];
let cancionesJuego = [];

let fondos = [];

let zonaGolpeJuego;
let carrilesJuego = [];

function preload() {
  //ingresar cosas que se cargan previamente
  soundFormats('mp3', 'wav');

  cargarAudios();
  cargarImagenes();
}

function setup() {
  createCanvas(700, 400);

  textFont('Zen Dots');

  menuMove.playMode('restart');
  menuSelect.playMode('restart');


  zonaGolpeJuego = height * 0.75;
  carrilesJuego = [width * 0.31, width * 0.435, width * 0.56, width * 0.68];

  //hacemos un push dentro de mundo con cada escena llamando a 'addEscena'
  mundo.addEscena(new PantallaInicio());
  mundo.addEscena(new Nivel_01());
  mundo.addEscena(new PantallaFinal());
}

function draw() {
  background(CONFIG.colores.menta);
  mundo.escenaActual.draw();
}

//maneja los clicks
function mouseClicked() {
  mundo.escenaActual.mouseClicked();
}

//revisa la tecla presionada y dentro de cada escena se maneja que se hace
function keyPressed() {
  mundo.escenaActual.keyPressed(key, keyCode);
}

function cargarAudios() {
  levelSelect = loadSound('assets/audio/levelSelect.wav');
  menuCancel = loadSound('assets/audio/menuCancel.wav');
  menuMove = loadSound('assets/audio/menuMove.wav');
  menuSelect = loadSound('assets/audio/menuSelect.wav');
  menuSelect2 = loadSound('assets/audio/menuSelect2.wav');
  pause = loadSound('assets/audio/pause.wav');
  pressError = loadSound('assets/audio/pressError.wav');
  pressNote = loadSound('assets/audio/pressNote.wav');
  pressNote2 = loadSound('assets/audio/pressNote2.wav');
  result = loadSound('assets/audio/result.wav');
  timer = loadSound('assets/audio/timer.wav');

  efectosSonido = [levelSelect, menuCancel, menuMove, menuSelect, menuSelect2, pause, pressError, pressNote, pressNote2, result, timer];


  menuMusica.push(loadSound('assets/audio/menuMusica/Cautivadora gelatina de cafe.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/Lingering among flowers.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/Project Diva X Home.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/Judgment knights of thunder.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/Angel fall down.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/Aroma Bousou Tokkyuu.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/DANGANRONPA SUPER MIX.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/Diabolic Waltz.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/Even Angels feel joy.mp3'));
  menuMusica.push(loadSound('assets/audio/menuMusica/Sakura Kiss For String.mp3'));

  cancionesJuego.push(loadSound('assets/audio/canciones/Girl Like Me.mp3'));
  cancionesJuego.push(loadSound('assets/audio/canciones/Biii-P - XLOV.mp3'));
  cancionesJuego.push(loadSound('assets/audio/canciones/Dec. - Kanaria.mp3'));
}

function cargarImagenes() {
  fondos.push(loadImage('assets/img/fondos/BG01.png'));
  fondos.push(loadImage('assets/img/fondos/BG02.png'));
  fondos.push(loadImage('assets/img/fondos/BG03.png'));
  fondos.push(loadImage('assets/img/fondos/BG04.png'));
  fondos.push(loadImage('assets/img/fondos/BG05.png'));
}