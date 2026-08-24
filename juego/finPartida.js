class FinPartida {/* objeto para mostrar las estadisticas al final de la partida */
    constructor() {
        this.fondo = new Fondo();

        /* botones */
        this.btnInicio = new Boton(width * 0.51, height * 0.88, width * 0.22, height * 0.08, () => this.onInicio(), { click: menuSelect2 });
        this.btnSiguiente = new Boton(width * 0.75, height * 0.88, width * 0.22, height * 0.08, () => this.onSiguiente(), { click: menuSelect });

        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;
    }

    draw(puntos, nombre, nivel) {/* dibuja utilizando los datos que se le mandan desde el gestor */
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
        rect(width * 0.02, height * 0.2, width * 0.49, height * 0.08, 7);
        rect(width * 0.02, height * 0.3, width * 0.49, height * 0.08, 7);
        rect(width * 0.02, height * 0.4, width * 0.49, height * 0.08, 7);
        rect(width * 0.02, height * 0.5, width * 0.49, height * 0.08, 7);
        rect(width * 0.02, height * 0.6, width * 0.49, height * 0.08, 7);
        rect(width * 0.02, height * 0.7, width * 0.49, height * 0.08, 7);

        stroke(0);
        strokeWeight(1);
        textSize(width / 44);
        textAlign(LEFT);
        fill(255, 60, 180); //rosa
        text("Perfect", width * 0.06, height * 0.24);
        fill(60, 210, 200); //celeste
        text("Great", width * 0.06, height * 0.34);
        fill(206, 236, 54);//verde lima
        text("Good", width * 0.06, height * 0.44);
        fill(239, 46, 46);//rojo
        text("Bad", width * 0.06, height * 0.54);
        fill(150, 50, 255); //morado
        text("Miss", width * 0.06, height * 0.64);
        fill(250, 230, 100);
        text("Combo máximo", width * 0.06, height * 0.74);
        stroke(this.rosa);
        strokeWeight(3);
        fill(255);
        textSize(width / 36);
        text("Puntuación", width * 0.06, height * 0.87);

        stroke(0);
        strokeWeight(1);
        textSize(width / 44);
        textAlign(RIGHT);
        fill(255, 60, 180); //rosa
        text(puntos.perfect, width * 0.47, height * 0.24);//PERFECT
        fill(60, 210, 200); //celeste
        text(puntos.great, width * 0.47, height * 0.34);//GREAT
        fill(206, 236, 54);//verde lima
        text(puntos.good, width * 0.47, height * 0.44);//GOOD
        fill(239, 46, 46);//rojo
        text(puntos.bad, width * 0.47, height * 0.54);//BAD
        fill(150, 50, 255); //morado
        text(puntos.miss, width * 0.47, height * 0.64);//MISS
        fill(250, 230, 100);
        text(puntos.maxCombo, width * 0.47, height * 0.74);//MAX COMBO
        stroke(this.rosa);
        strokeWeight(3);
        fill(255);
        textSize(width / 36);
        text(puntos.puntaje, width * 0.47, height * 0.87); //PUNTAJE TOTAL

        /* ===============BOTONES=============== */
        stroke(255);
        fill(this.btnInicio.isHover() ? this.rosa : this.menta);
        rect(width * 0.51, height * 0.88, width * 0.22, height * 0.08, 7);
        fill(this.btnSiguiente.isHover() ? this.rosa : this.menta);
        rect(width * 0.75, height * 0.88, width * 0.22, height * 0.08, 7);

        textAlign(CENTER);
        textSize(width / 44);
        fill(255);
        noStroke();
        text("Volver al inicio", width * 0.62, height * 0.92);
        text("Siguiente Nivel", width * 0.86, height * 0.92);
    }

    mouseClicked() {/* maneja clicks */
        this.btnInicio.mouseClicked();
        this.btnSiguiente.mouseClicked();
    }

    update() {/* actualiza */
        this.btnInicio.update();
        this.btnSiguiente.update();
    }

    /* FUNCIONES VACIAS, son callbacks */
    onInicio() { }
    onSiguiente() { }
}