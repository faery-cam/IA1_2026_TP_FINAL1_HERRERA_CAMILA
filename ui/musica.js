class Musica {/* objeto para reproducir musica en pantalla inicio/final */
    constructor() {
        this.listaCanciones = menuMusica;
        this.i = 0;
        this.btnStop = new Boton(width * 0.04, height * 0.93, 25, 20, () => this.detener(), { click: timer });
    }

    update() {/* cambia a siguiente cancion en caso de que ya no se esté reproduciendo la actual */
        if (!this.listaCanciones[this.i].isPlaying()) {
            this.siguiente();
        }
    }

    reproducir() {/* reproduce si no esta sonando la cancion */
        if (!this.listaCanciones[this.i].isPlaying()) {
            this.listaCanciones[this.i].play();
        }
    }

    detener() {/* detiene todas las canciones */
        for (let cancion of this.listaCanciones) {
            cancion.stop();
        }
    }

    siguiente() {/* reproduce la sig cancion de la lista */
        this.i++;

        if (this.i >= this.listaCanciones.length) {
            this.i = 0;
        }
        this.reproducir();
    }

    miniReproductor() {/* boton para pasar de cancion de manera manual */
        noStroke();
        fill(this.btnStop.isHover() ? CONFIG.colores.rosa : 255)
        triangle(
            width * 0.06,
            height * 0.95,
            width * 0.04,
            height * 0.93,
            width * 0.04,
            height * 0.97
        );
        triangle(
            width * 0.075,
            height * 0.95,
            width * 0.055,
            height * 0.93,
            width * 0.055,
            height * 0.97
        );
    }

    mouseClicked() {
        this.btnStop.mouseClicked();
    }
}