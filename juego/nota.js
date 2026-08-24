class Nota {/* objeto para crear las notas dentro el juego, sabe datos como a que carril corresponde, donde tiene q aparecerm a que velocidad caer y si esta activa (todavia no fue presionada o perdida) */
    constructor(carril, tecla, velocidad) {
        this.carriles = carrilesJuego;
        this.carril = carril;
        this.tecla = tecla;
        this.velocidad = velocidad;

        this.x = this.carriles[carril];
        this.y = CONFIG.juego.spawnY;
        this.activa = true;
    }

    update() {/* actualiza su posicion */
        this.y += this.velocidad;
    }

    draw() {/* se dibuja cambiando el eje del rect, luego vuelve al default para mantener todo en orden */
        rectMode(CENTER);
        fill(CONFIG.colores.rosa);
        stroke(255);
        rect(this.x, this.y, width * 0.12, height * 0.05, 5);
        rectMode(CORNER);
    }
}