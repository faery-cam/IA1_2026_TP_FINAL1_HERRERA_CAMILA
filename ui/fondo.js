class Fondo {/* objeto para estilizar el fondo de cada escena */
    constructor() {
        this.imagenes = fondos;
        this.imagenActual = this.imagenes[this.i];

        this.espacio = 7;
        this.diam = 5;
        this.i = 0;
    }

    draw() {/* dibuja una de las imagenes de fondo precargadas */
        image(this.imagenActual, 0, 0, width, height);
    }

    halftone() {/* crea una malla estilo comic que se mueve en forma de oleaje, con un modo de mezcla distinto para que se integre con el color de fondo */
        noStroke();
        fill(255);
        blendMode(OVERLAY);

        for (let x = -10; x <= width + 10; x += this.espacio) {
            for (let y = -10; y <= height + 10; y += this.espacio) {
                //movimiento q se parece a un frente de onda.
                let movimiento = sin(frameCount * 0.04 - x * 0.08 - y * 0.1);
                let diam = this.diam + sin(frameCount * 0.04 - (x + y) * 0.01);

                circle(x, y + movimiento, diam);
            }
        }
        blendMode(BLEND);/* vuelvo al modo de mezcla normal asi el resto de elemento no se ven afectados */
    }

    recorrerFondos() {/* recorre los distintos fondos cargados */
        this.imagenActual = this.imagenes[this.i];

        this.i++;

        if (this.i >= this.imagenes.length) {
            this.i = 0;
        }
    }
}