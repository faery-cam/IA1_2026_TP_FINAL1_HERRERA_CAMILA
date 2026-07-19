const fps = CONFIG.juego.fps;

class GestorNotas {
    constructor() {
        this.contador = new CuentaAtras();
        this.puntos = new Puntos();
        this.estado = "contador";
        this.cancion = null;
        this.zonaGolpe = CONFIG.juego.zonaGolpe;
        this.spawnY = -CONFIG.juego.spawnY;

        this.tpoCaida = 0;
        this.tpoInicio = 0;
        this.tpoPausa = 0;
    }

    cargarCancion(cancion) {
        this.cancion = cancion;
        this.tiempoCaida();

        this.indiceNota = 0;
        this.notas = [];

        this.contador.reiniciar();
        this.estado = "contador";
        this.tpoPausa = 0;
    }

    update() {
        if (this.estado === "contador") {
            let termino = this.contador.update();

            if (termino) {

                if (this.tpoPausa != 0) {
                    this.tpoInicio += millis() - this.tpoPausa;
                    this.tpoPausa = 0;
                } else {
                    this.tpoInicio = millis();
                }

                this.contador.reiniciar();
                this.estado = "jugando";
            }
            return;
        }

        if (this.estado === "pausa") {
            return;
        }

        this.crearNotas();
        this.actualizarNotas();
        this.eliminarNotas();
    }

    draw() {
        if (this.estado === "contador") {
            this.contador.draw();
        }

        this.dibujarNotas();
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
            if (this.notas[i].y > this.zonaGolpe + 20) {
                this.puntos.notaPerdida();
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
        this.tpoPausa = millis();
    }

    reanudar() {
        this.estado = "contador";
        this.contador.reiniciar();
    }

    tocarCarril(carrilPres) {
        for (let nota of this.notas) {
            if (nota.carril == carrilPres) {
                let acerto = this.puntos.precision(nota.y);

                if (acerto) {
                    nota.activa = false;
                }
                break;
            }
        }
    }
}