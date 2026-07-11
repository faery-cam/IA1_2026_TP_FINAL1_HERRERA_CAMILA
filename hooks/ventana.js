
class Ventana {
    constructor() {
        this.estado = null;
    }

    open(estado) {
        this.estado = estado;
    }

    close() {
        this.estado = null;
    }

    draw() {
        if (this.estado === null) return;

        switch (this.estado) {
            case "comoJugar":
                this.comoJugar();
                break;
            case "elegirEscena":
                this.elegirEscena();
                break;

            case "salir":
                this.salir();
                break;

            case "extras":
                this.extras();
                break;
        }
    }

    comoJugar(){


    }

    elegirEscena() {

        rect(10, 10, 380, 380, 10);
        text("Elegir escena", 200, 50);
        rect(30, 80, 150, 70, 15);
        rect(30, 170, 150, 70, 15);
        rect(30, 260, 150, 70, 15);
        rect(220, 80, 150, 70, 15);
        rect(220, 170, 150, 70, 15);
        rect(220, 260, 150, 70, 15);
    }

    salir() {
        rect(60, 150, 280, 100, 10);
        textSize(20);
        text("¿Desea abandonar la partida?", 200, 190);
        text("Sí", 130, 230);
        text("No", 270, 230);
    }

    extras() {
        rect(60, 100, 280, 200, 10);
        text("Informática Aplicada 1, 2026", 200, 140);
        text("Hecho por:", 200, 180);
        text("GitHub del proyecto", 200, 220);
        text("Cerrar", 200, 280);
    }
}