class Mundo {
    constructor() {
        this.escenas = [];
        this.escenaActual = null;
        this.indiceActual = null;
    }

    addEscena(e) {
        this.escenas.push(e);
        if (this.indiceActual == null) this.elegirEscena(0);
    }

    elegirEscena(i) {
        if (i < 0 || i >= this.escenas.length) {
          i = 0; //en caso de algun error vuelve a la pantalla de inicio
        }

        this.escenaActual = this.escenas[i];
        this.indiceActual = i;
    }

    escenaSiguiente() {
        let i = (this.indiceActual + 1) % this.escenas.length;
        this.elegirEscena(i);
    }

    escenaPrevia() {
        let i = this.indiceActual - 1;
        if (i < 0) i = this.escenas.length - 1;
        this.elegirEscena(i);
    }
}