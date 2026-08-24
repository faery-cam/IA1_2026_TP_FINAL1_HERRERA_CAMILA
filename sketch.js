/* declaracion de variables */
const mundo = new Mundo();
const canciones = new Canciones();

let levelSelect, menuCancel, menuMove, menuSelect, menuSelect2, pause, pressError, pressNote, pressNote2, result, timer;

let efectosSonido = [];
let menuMusica = [];
let cancionesJuego = [];

let fondos = [];

let zonaGolpeJuego;
let carrilesJuego = [];

const config = new Configuracion();

function preload() {
  //ingresar cosas que se cargan previamente
  soundFormats('mp3', 'wav');

  cargarAudios();
  cargarImagenes();

  /* aplicamos la configuracion base del juego para que quede globalizada desde un inicio */
  config.aplicar();
}

function setup() {
  createCanvas(700, 400);

  /* aplicamos el font */
  textFont('Zen Dots');

  /* le decimos de que manera se deben comportar estos audios (para que no se repitan muchos en simultaneo) */
  menuMove.playMode('restart');
  menuSelect.playMode('restart');

  /* definimos parametros bases del juego */
  zonaGolpeJuego = height * 0.75;
  carrilesJuego = [width * 0.31, width * 0.435, width * 0.56, width * 0.68];

  //hacemos un push dentro de mundo con cada escena llamando a 'addEscena'
  mundo.addEscena(new PantallaInicio());
  mundo.addEscena(new Nivel_01());
  mundo.addEscena(new PantallaFinal());
}

//se dibuja la escena que tenga guardada mundo con un fondo base (color predefinido en 'configBase')
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

/* usamos loadSound para cargar todos  los audios utilizados, esta en una funcion aparte por un cuestion de prolijidad */
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

/* igual que la funcion anterior, pero para cargar las imagenes */
function cargarImagenes() {
  fondos.push(loadImage('assets/img/fondos/BG01.png'));
  fondos.push(loadImage('assets/img/fondos/BG02.png'));
  fondos.push(loadImage('assets/img/fondos/BG03.png'));
  fondos.push(loadImage('assets/img/fondos/BG04.png'));
  fondos.push(loadImage('assets/img/fondos/BG05.png'));
}