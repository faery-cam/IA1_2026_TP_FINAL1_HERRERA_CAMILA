class Configuracion {
    constructor() {
        this.volMusica = 0.2;
        this.volJuego = 0.5;
        this.volFX = 0.2;

        this.aplicar();
    }

    aplicar() {
       for (let m of menuMusica) {
            m.setVolume(this.volMusica);
        }
        for (let c of cancionesJuego) {
            c.setVolume(this.volJuego);
        }
          for (let e of efectosSonido) {
            e.setVolume(this.volFX);
        }
    }

    setVolMusica(valor) {
        this.volMusica += valor;

        if (this.volMusica > 1) {
            this.volMusica = 1;
        } else if (this.volMusica < 0) {
            this.volMusica = 0;
        }

        for (let m of menuMusica) {
            m.setVolume(this.volMusica);
        }
    }

    setVolJuego(valor) {
        this.volJuego += valor;

        if (this.volJuego > 1) {
            this.volJuego = 1;
        } else if (this.volJuego < 0) {
            this.volJuego = 0;
        }

        for (let c of cancionesJuego) {
            c.setVolume(this.volJuego);
        }
    }

    setVolFX(valor) {
        this.volFX += valor;

        if (this.volFX > 1) {
            this.volFX = 1;
        } else if (this.volFX < 0) {
            this.volFX = 0;
        }

        for (let e of efectosSonido) {
            e.setVolume(this.volFX);
        }
    }
}