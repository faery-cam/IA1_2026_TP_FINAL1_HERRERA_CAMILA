const fps = 60;

class GestorNotas {
    constructor() {
        this.notas = [];
        this.cancion = null;

        this.zonaGolpe = 350;
        this.tiempoCaida = 0;
    }

    cargarCancion() {

    }






    tiempoCaida() {
        let distancia = this.zonaGolpe - this.notas.y;
        let segundos = (distancia / this.cancion.velocidad) / fps;
        this.tiempoCaida = segundos;
    }


}