const fps = CONFIG.juego.fps;

class GestorNotas {/* objeto que gestiona el juego completo, se encarga de unir todas las piezas y coordinarlas */
    constructor() {
        /* objetos q utliza */
        this.puntos = new Puntos();
        this.particulas = new GestorParticulas();
        this.contador = new CuentaAtras();
        this.interfaz = new InterfazJuego();
        this.finPartida = new FinPartida();

        /* estados */
        this.estado = "contador";
        this.cancion = null;
        this.zonaGolpe = zonaGolpeJuego;
        this.spawnY = CONFIG.juego.spawnY;
        this.audioIniciado = false;

        /* datos base */
        this.indiceNota = 0;
        this.notas = [];

        this.tpoCaida = 0;
        this.tpoInicio = 0;
        this.tpoPausa = 0;

        /* callbacks de que hacen los botones qe aparecen al finalizar la partida */
        this.finPartida.onInicio = () => { this.reiniciar(); mundo.elegirEscena(0); };
        this.finPartida.onSiguiente = () => { this.reiniciar(); mundo.escenaSiguiente(); };

        this.rosa = CONFIG.colores.rosa;
    }

    cargarCancion(cancion) {/* lo primero que ocurre al entrar a un nivel, se inicializan todos los contadores, se reinicia todo en caso de que hayan datos residuales, se pasan los datos a la interfaz, se calcula tiempo de caida y cambia finalmente el estado a "contador" */
        this.cancion = cancion;
        this.reiniciarCancion();
        this.interfaz.subirCancion(this.cancion.nombre, this.cancion.nivel)
        this.audioIniciado = false;

        this.tiempoCaida();
        this.indiceNota = 0;
        this.notas = [];

        this.contador.reiniciar();
        this.tpoInicio = 0;
        this.tpoPausa = 0;
        this.estado = "contador";
    }

    update() {
        this.interfaz.update(this.puntos.combo, this.puntos.puntaje);
        if (this.estado === "contador") {/* estado contador con 2 posibilidades cuando termina */
            let termino = this.contador.update();

            if (termino) {
                if (this.tpoInicio === 0) {/* si la cancion no inicio aun guarda al milisegundo q arranca el juego y le suma lo que tardan en caer las primeras notas */
                    this.tpoInicio = millis() + this.tpoCaida;
                }
                else {/* caso contrario (tpoInicio ya estaba inicializado) sumamos a esa variable el tiempo que se estuvo en pausa el juego y reiniciamos ese valor de pausa a 0 */
                    this.tpoInicio += millis() - this.tpoPausa;
                    this.tpoPausa = 0;
                }
                /* cambiamos el estado y reiniciamos contador para que quede limpio */
                this.contador.reiniciar();
                this.estado = "jugando";
            }
            return;
        }

        if (this.estado === "pausa") {/* si está en pausa no actualiza ningun dato */
            return;
        }

        if (this.estado === "final") {/* en este caso muestra la pantalla de finalizar partida, ya no tiene q actualizar nada más */
            this.finPartida.update();
            return;
        }

        if (!this.audioIniciado && this.tiempoActual() >= 0) {/* inicia la cancion una sola vez */
            this.iniciarCancion();
            this.audioIniciado = true;
        }

        this.crearNotas();
        this.actualizarNotas();
        this.eliminarNotas();
        this.particulas.update();

        if (this.audioIniciado && !this.cancion.src.isPlaying() && this.notas.length === 0) {/* manejamos el fin de partida cuando la cancion ya haya terminado */
            this.estado = "final";
            result.play();
        }
    }

    draw() {
        this.interfaz.draw();
        this.dibujarNotas();
        this.particulas.draw();
        this.puntos.draw();

        if (this.estado === "contador") {
            this.contador.draw();
        }

        if (this.estado === "pausa") {
            fill(this.rosa);
            stroke(255);
            textSize(width / 43.5);//16
            text("Juego Pausado", width / 2, height * 0.15);
        }
        if (this.estado === "final") {
            this.finPartida.draw(this.puntos, this.cancion.nombre, this.cancion.nivel);
            return;
        }
    }

    crearNotas() {
        while (this.indiceNota < this.cancion.notas.length) {
            let datosNota = this.cancion.notas[this.indiceNota];
            let crear = datosNota.tiempo - this.tpoCaida; //calcula en que momento se tiene que crear la nota

            if (this.tiempoActual() < crear) { break; }

            this.notas.push(
                new Nota(
                    datosNota.carril, datosNota.tecla, this.cancion.velocidad
                )
            );
            this.indiceNota++;
        }
    }

    actualizarNotas() {
        for (let nota of this.notas) {
            nota.update();
        }
    }

    dibujarNotas() {
        for (let nota of this.notas) {
            nota.draw();
        }
    }

    eliminarNotas() {
        for (let i = this.notas.length - 1; i >= 0; i--) {
            if (this.notas[i].y > this.zonaGolpe + 50) {
                this.puntos.notaPerdida();
                pressError.play();
                this.notas.splice(i, 1);
                continue;
            }

            if (!this.notas[i].activa) {
                this.notas.splice(i, 1);
            }
        }
    }

    tocarCarril(carrilPres) {
        for (let nota of this.notas) {
            if (nota.carril == carrilPres) {
                let acerto = this.puntos.precision(nota.y);

                if (acerto) {
                    this.particulas.crear(nota.x, nota.y);
                    nota.activa = false;
                }
                break;
            }
        }
    }

    tiempoActual() {
        return millis() - this.tpoInicio;
    }

    tiempoCaida() {
        let distancia = this.zonaGolpe - this.spawnY;
        let segundos = (distancia / this.cancion.velocidad) / fps;
        this.tpoCaida = segundos * 1000; //pasa de segundos a milisegundos
    }

    pausar() {
        this.estado = "pausa";
        this.cancion.src.pause();
        this.tpoPausa = millis();
        pause.play();
    }

    reanudar() {
        this.estado = "contador";
        this.contador.reiniciar();
    }

    reiniciar() {
        this.puntos.reiniciar();
        this.cargarCancion(this.cancion);
    }

    iniciarCancion() {
        this.cancion.src.play();
    }

    reiniciarCancion() {
        this.cancion.src.stop();
    }
}