class FinPartida {
    constructor() {
        this.fondo= new Fondo();

        this.btnInicio = new Boton(width * 0.51, height * 0.88, width * 0.22, height * 0.08, () => { this.onInicio(); });
        this.btnSiguiente = new Boton(width * 0.75, height * 0.88, width * 0.22, height * 0.08, () => { this.onSiguiente(); });

        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;
    }

    draw(puntos, nombre, nivel) {
        noStroke();
        fill(this.rosa);
        rect(0, 0, width, height);//fondo rosa
        this.fondo.halftone();

        fill(40);
        rect(0, 0, width, height * 0.1); //barra superior

        fill(this.rosa);
        textAlign(LEFT, CENTER);
        textSize(width / 60); //(15-14)
        text(nombre, 30, height * 0.05);  //nombre  de la cancion

        textAlign(RIGHT);
        textSize(width / 37.5); //(16)
        text("Nivel " + nivel, width * 0.98, height * 0.05); //nivel

        fill(255, 200);
        rect(width * 0.05, height * 0.15, width * 0.43, height * 0.78, 10); //rect izquierda blanco

        fill(20, 35, 30, 200);//lista negro transparente
        rect(width * 0.02, height * 0.2, width * 0.49, height * 0.12, 7);
        rect(width * 0.02, height * 0.35, width * 0.49, height * 0.12, 7);
        rect(width * 0.02, height * 0.5, width * 0.49, height * 0.12, 7);
        rect(width * 0.02, height * 0.65, width * 0.49, height * 0.12, 7);

        stroke(0);
        strokeWeight(1);
        textSize(width / 44);
        textAlign(LEFT);
        fill(255, 60, 180); //rosa
        text("Perfect", width * 0.06, height * 0.26);
        fill(60, 210, 200); //celeste
        text("Great", width * 0.06, height * 0.41);
        fill(150, 50, 255); //morado
        text("Miss", width * 0.06, height * 0.56);
        fill(250, 230, 100);
        text("Combo máximo", width * 0.06, height * 0.71);
        stroke(this.rosa);
        strokeWeight(3);
        fill(255);
        textSize(width / 36);
        text("Puntuación", width * 0.06, height * 0.85);

        stroke(0);
        strokeWeight(1);
        textSize(width / 44);
        textAlign(RIGHT);
        fill(255, 60, 180); //rosa
        text(puntos.perfect, width * 0.47, height * 0.26);//PERFECT
        fill(60, 210, 200); //celeste
        text(puntos.good, width * 0.47, height * 0.41);//GODD
        fill(150, 50, 255); //morado
        text(puntos.miss, width * 0.47, height * 0.56);//MISS
        fill(250, 230, 100);
        text(puntos.maxCombo, width * 0.47, height * 0.71);//MAX COMBO
        stroke(this.rosa);
        strokeWeight(3);
        fill(255);
        textSize(width / 36);
        text(puntos.puntaje, width * 0.47, height * 0.85); //PUNTAJE TOTAL

        /* ===============BOTONES=============== */
        fill(this.menta);
        stroke(255);
        rect(width * 0.51, height * 0.88, width * 0.22, height * 0.08, 7);
        rect(width * 0.75, height * 0.88, width * 0.22, height * 0.08, 7);

        textAlign(CENTER);
        textSize(width / 44);
        fill(255);
        noStroke();
        text("Volver al inicio", width * 0.62, height * 0.92);
        text("Siguiente Nivel", width * 0.86, height * 0.92);
    }

    mouseClicked() {
        this.btnInicio.mouseClicked();
        this.btnSiguiente.mouseClicked();
    }

    update() {
        this.btnInicio.update();
        this.btnSiguiente.update();
    }

    onInicio() { }
    onSiguiente() { }
}