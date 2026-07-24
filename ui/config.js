class Configuracion {
    constructor() {
        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;
    }
    draw() {
        stroke(...this.menta);
        strokeWeight(1);
        fill(40, 60, 50); //20, 90, 60
        rect(width * 0.25, height * 0.2, width * 0.5, height * 0.6, 5); //grande fondo

        //=====LISTA
        fill(20, 45, 30)
        rect(width * 0.3, height * 0.3, width * 0.4, height * 0.07, 6); //lista
        rect(width * 0.3, height * 0.42, width * 0.4, height * 0.07, 6); //lista
        rect(width * 0.3, height * 0.54, width * 0.4, height * 0.07, 6); //lista
        rect(width * 0.3, height * 0.66, width * 0.4, height * 0.07, 6); //lista

        textSize(16);
        fill(...this.menta);
        stroke(0);
        text("Configuración", width / 2, height * 0.25);

        textSize(12);
        noStroke();
        text("Reanudar", width / 2, height * 0.34);
        text("Reintentar", width / 2, height * 0.46);
        text("Opciones", width / 2, height * 0.58);
        text("Inicio", width / 2, height * 0.7);


    }
}