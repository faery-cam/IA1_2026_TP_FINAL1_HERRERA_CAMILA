class Mundo {
    constructor() {
        this.escenas = [];
        this.escenaActual = null;
        this.indiceActual = null;
    }

    //agregamos cada escena al array para luego poder recorrerlo
    addEscena(e) {
        this.escenas.push(e);
        if (this.indiceActual == null) this.elegirEscena(0);
    }

    //cambiamos la escena que se está dibujando y guardamos el valor de indice que le corresponde
    elegirEscena(i) {
        if (i < 0 || i >= this.escenas.length) {
            i = 0; //en caso de algun error vuelve a la pantalla de inicio
        }

        this.escenaActual = this.escenas[i];
        this.indiceActual = i;
    }

    //pasa a siguiente escena sumando al valor guardado en el índice y enviandole ese valor a la función elegirEscena, si se acabaron las escenas se vuelve al inicio (0) usando modulo
    escenaSiguiente() {
        let i = (this.indiceActual + 1) % this.escenas.length;
        this.elegirEscena(i);
    }

    //va a la escena anterior restando, cuando llega al inicio y pasa a -1 se le otorga el valor del largo del array escenas menos 1, lo que nos hace volver al final
    escenaPrevia() {
        let i = this.indiceActual - 1;
        if (i < 0) i = this.escenas.length - 1;
        this.elegirEscena(i);
    }
}