const fps = CONFIG.juego.fps;

class GestorNotas {
    constructor() {
        this.puntos = new Puntos();
        this.particulas = new GestorParticulas();
        this.contador = new CuentaAtras();
        this.interfaz = new InterfazJuego();
        this.finPartida = new FinPartida();

        this.estado = "contador";
        this.cancion = null;
        this.zonaGolpe = zonaGolpeJuego;
        this.spawnY = CONFIG.juego.spawnY;

        this.indiceNota = 0;
        this.notas = [];

        this.tpoCaida = 0;
        this.tpoInicio = 0;
        this.tpoPausa = 0;

        this.finPartida.onInicio = () => { this.reiniciar(); mundo.elegirEscena(0); };
        this.finPartida.onSiguiente = () => { this.reiniciar(); mundo.escenaSiguiente(); };

        this.rosa = CONFIG.colores.rosa;
    }

    cargarCancion(cancion) {
        this.cancion = cancion;
        this.reiniciarCancion();
        this.interfaz.subirCancion(this.cancion.nombre, this.cancion.nivel)

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
        if (this.estado === "contador") {
            let termino = this.contador.update();

            if (termino) {
                if (this.tpoInicio === 0) {
                    this.tpoInicio = millis();
                }
                else {
                    this.tpoInicio += millis() - this.tpoPausa;
                    this.tpoPausa = 0;
                }

                this.contador.reiniciar();
                    this.iniciarCancion();
                this.estado = "jugando";
            }
            return;
        }

        if (this.estado === "pausa") {
            return;
        }

        if (this.estado === "final") {
            return;
        }

        this.crearNotas();
        this.actualizarNotas();
        this.eliminarNotas();
        this.particulas.update();
    }

    draw() {
        this.particulas.draw();
        this.interfaz.draw();
        this.dibujarNotas();
        this.puntos.draw();

        if (this.estado === "contador") {
            this.contador.draw();
        }

        if (this.estado === "pausa") {
            fill(this.rosa);
            stroke(255);
            textSize(16);
            text("Juego Pausado", width / 2, height * 0.15);
        }
        if (this.estado === "final") {
            this.finPartida.draw(this.puntos, this.cancion.nombre, this.cancion.nivel);
            return;
        }
    }

    crearNotas() {
        let datosNota = this.cancion.notas[this.indiceNota];
        if (!datosNota) return;

        let crear = datosNota.tiempo - this.tpoCaida; //calcula en que momento se tiene que crear la nota

        if (this.tiempoActual() >= crear) {
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
            if (this.notas[i].y > this.zonaGolpe + 35) {
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
        this.reiniciarCancion();
        this.cargarCancion(this.cancion);
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

    iniciarCancion() {
        this.cancion.src.play();
    }

    reiniciarCancion() {
        this.cancion.src.stop();
    }
}