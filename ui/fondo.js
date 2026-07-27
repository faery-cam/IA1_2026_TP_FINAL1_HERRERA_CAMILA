class Fondo {
    constructor() {
        this.imagenes = fondos;
        this.imagenActual = this.imagenes[this.i];

        this.espacio = 7;
        this.diam = 5;
        this.i = 0;
    }

    draw() {
        image(this.imagenActual, 0, 0, width, height);
        this.halftone();
    }

    halftone() {
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
        blendMode(BLEND);
    }

    recorrerFondos() {
        this.imagenActual = this.imagenes[this.i];

        this.i++;

        if (this.i >= this.imagenes.length) {
            this.i = 0;
        }
    }
}