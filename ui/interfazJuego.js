class InterfazJuego {
    constructor() {
        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;

        this.nombreCancion = null;
        this.numNivel = null;
        this.combo = 0;
        this.puntaje = 0;
    }

    subirCancion(cancion, nivel) {
        this.nombreCancion = cancion;
        this.numNivel = nivel;
    }

    update(combo, puntaje) {
        this.combo = combo;
        this.puntaje = puntaje;
    }

    draw() {
        fill(40);
        noStroke();
        rect(0, 0, width, height * 0.1); //barra superior

        quad(
            width * 0.84,
            height * 0.85,
            width,
            height * 0.85,
            width,
            height * 0.9,
            width * 0.8,
            height * 0.9
        ); //barra de puntaje

        fill(...this.menta);
        rect(0, height * 0.9, width, height); //barra inferior

        stroke(255);
        fill(20, 45, 30);
        rect(width * 0.15, height * 0.97, width * 0.83, height * 0.02);
        fill(...this.rosa);
        rect(width * 0.15, height * 0.97, width * 0.83, height * 0.02); //barra de la cancion (tiempo d duracion)
        
        fill(70);
        circle(height * 0.1, height * 0.9, height / 4); //zona donde muestra el combo

        fill(...this.menta);
        circle(height * 0.1, height * 0.9, height / 8); //circulo mas chico

        stroke(0);
        line(0, height * 0.75, width, height * 0.75); //zona d golpe

        noStroke();

        fill(...this.rosa);
        textAlign(LEFT, CENTER);
        textSize(width / 40); //(15-14)
        text(this.nombreCancion, 30, height * 0.05);

        textAlign(RIGHT);
        textSize(width / 37.5); //(16)
        text("Nivel " + this.numNivel, width * 0.98, height * 0.05);
        fill(0);
        textSize(width / 50); //(12)

        text(this.puntaje, width * 0.98, height * 0.94);
        fill(255);
        text("Puntuación", width * 0.98, height * 0.875);

        fill(...this.rosa);
        textAlign(CENTER);
        text("COMBO", height * 0.1, height * 0.82);

        stroke(0);
        strokeWeight(3);
        textSize(width / 24); //(25)
        text(this.combo, height * 0.1, height * 0.9);

        /* mando algunos valores en predeterminado para evitar fallos en otras zonas */
        strokeWeight(1);
        textSize(12);
    }

}