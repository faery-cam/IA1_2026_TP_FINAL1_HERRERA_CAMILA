class InterfazJuego {/* lo que ve el usuario, aca se muestran los datos a medida avanza el juego y se actualiza la escena */
    constructor() {
        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;

        this.nombreCancion = null;
        this.numNivel = null;
        this.combo = 0;
        this.puntaje = 0;
    }

    subirCancion(cancion, nivel) {/* guardamos datos que despues se utilizan en el ui */
        this.nombreCancion = cancion;
        this.numNivel = nivel;
    }

    update(combo, puntaje) {/* actualiza los datos */
        this.combo = combo;
        this.puntaje = puntaje;
    }

    draw() {
        fill(10, 30, 20, 180);
        stroke(this.menta);
        rect(width * 0.25, 0, width * 0.5, height); //zona de carriles
        stroke(255);
        strokeWeight(2);
        line(width * 0.25, height * 0.75, width * 0.75, height * 0.75); //zona de golpe


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

        fill(this.menta);
        rect(0, height * 0.9, width, height); //barra inferior

        stroke(255);
        fill(20, 45, 30);
        rect(width * 0.15, height * 0.97, width * 0.83, height * 0.02);
        fill(this.rosa);
        rect(width * 0.15, height * 0.97, width * 0.83, height * 0.02); //barra de la cancion (tiempo d duracion)

        fill(70);
        circle(height * 0.1, height * 0.9, height / 4); //zona donde muestra el combo

        fill(this.menta);
        circle(height * 0.1, height * 0.9, height / 8); //circulo mas chico

        noStroke();

        fill(this.rosa);
        textAlign(LEFT, CENTER);
        textSize(width / 60); //(15-14)
        text(this.nombreCancion, 30, height * 0.05);  //nombre  de la cancion

        textAlign(RIGHT);
        textSize(width / 37.5); //(16)
        text("Nivel " + this.numNivel, width * 0.98, height * 0.05);

        fill(0);
        textSize(width / 50); //(12)
        text(this.puntaje, width * 0.98, height * 0.94);//puntaje
        fill(255);
        text("Puntuación", width * 0.98, height * 0.875);

        fill(this.rosa);
        textAlign(CENTER);
        text("COMBO", height * 0.1, height * 0.82);

        stroke(0);
        strokeWeight(3);
        textSize(width / 24); //(25)
        text(this.combo, height * 0.1, height * 0.9);

        textAlign(CENTER);
        textSize(width / 45);
        stroke(...this.menta, 200);
        strokeWeight(1);
        fill(...this.menta, 100)//teclas en pantalla parra guiar al usuario
        text("D", width * 0.31, height * 0.82);
        text("F", width * 0.435, height * 0.82);
        text("J", width * 0.56, height * 0.82);
        text("K", width * 0.685, height * 0.82);
    }
}