const fps = 60;

class GestorNotas {
    constructor() {
        this.contador = new CuentaAtras();
        this.estado = "contador";
        this.cancion = null;
        this.zonaGolpe = 350;
        this.tpoCaida = 0;
        this.spawnY = -20;
    }

    cargarCancion(cancion) {
        this.cancion = cancion;
        this.tiempoCaida();
        this.indiceNota = 0;
        this.notas = [];
    }

    update() {
        let termino = this.contador.update();
        if (this.estado === "contador") {
            this.contador.update();
            this.contador.draw();
            if (termino) {
                this.estado = "jugando";
                this.tpoInicio = millis();
            }

            return;
        }

        if (this.estado === "pausa") {
            this.pausar_iniciar();
            return;
        }

        this.crearNotas();
        this.actualizarNotas();
        this.dibujarNotas();
        // this.eliminarNotas();
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

    }

    tiempoActual() {
        return millis() - this.tpoInicio;
    }

    tiempoCaida() {
        let distancia = this.zonaGolpe - this.spawnY;
        let segundos = (distancia / this.cancion.velocidad) / fps;
        this.tpoCaida = segundos * 1000; //pasa de segundos a milisegundos
    }

    pausar_iniciar() {


        //metodo para contar antes de empezar la cancion (3, 2, 1...) y para dejar pausado el contador en caso de pausar juego.
    }

}

class Puntos {
    precision() {
        //aca se puede comparar la nota para ver si fue perfect good o miss
    }

    combo() {
        //por cada miss se pierde el combo, siempre qe sea good o perfect el combo sigue sumando 1.
    }

    puntuacion() {
        //se calcula en base a la cantidad de perfect, good y miss, multiplicando la cantidad de cada uno por su valor y sumando todo al final
    }
}