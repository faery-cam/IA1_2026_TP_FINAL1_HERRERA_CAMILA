class Musica {
    constructor() {
        this.listaCanciones = menuMusica;
        this.i = 0;
    }

    update() {
        if (!this.listaCanciones[this.i].isPlaying()) {
            this.siguiente();
        }
    }

    reproducir() {
        if (!this.listaCanciones[this.i].isPlaying()) {
            this.listaCanciones[this.i].play();
        }
    }

    detener() {
        for (let cancion of this.listaCanciones) {
            cancion.stop();
        }
    }

    siguiente() {
        this.i++;

        if (this.i >= this.listaCanciones.length) {
            this.i = 0;
        }
        this.reproducir();
    }
}