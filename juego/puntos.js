class Puntos {
    constructor() {
        this.zonaGolpe = zonaGolpeJuego;
        this.combo = 0;
        this.maxCombo = 0;
        this.puntaje = 0;

        this.perfect = 0;
        this.good = 0;
        this.miss = 0;
        this.feedback;

        this.alpha;
        this.y;
    }

    draw() {
        if (!this.feedback) return;

        //======= Perfect, Good, Miss
        switch (this.feedback) {
            case "Perfect":
                fill(255, 60, 180, this.alpha); //rosa
                break;
            case "Good":
                fill(60, 210, 200, this.alpha); //celeste
                break;
            case "Miss":
                fill(110, 10, 200, this.alpha); //morado
                break;
        }

        stroke(255);
        textSize(width / 50); //(12) 
        text(this.feedback, width / 2, this.y);

        this.alpha -= 4;
        this.y -= 1;

        if (this.alpha <= 0) {
            this.feedback = null;
        }
        stroke(0);
    }

    precision(notaPres) {
        /* aca se puede comparar la nota para ver si fue perfect, good o miss en base a la distancia de la zona de golpe y la ubicacion de la nota al ser presionada */
        let diferencia = abs(this.zonaGolpe - notaPres);

        if (diferencia <= 10) {
            this.mostrarFeedback("Perfect");

            this.perfect++;
            pressNote.play();
            this.puntaje += 100;
            this.sumarCombo(true);
            return true;
        }
        else if (diferencia <= 20) {
            this.mostrarFeedback("Good");

            this.good++;
            pressNote2.play();
            this.puntaje += 30;
            this.sumarCombo(true);
            return true;
        }
        else if (diferencia <= 25) {
            this.mostrarFeedback("Miss");

            this.miss++;
            pressError.play();
            this.sumarCombo(false);
            return true;
        }
        return false;
    }

    notaPerdida() {
        this.mostrarFeedback("Miss");
        this.miss++;
        pressError.play();

        this.sumarCombo(false);
    }

    sumarCombo(acierto) {
        //por cada miss se pierde el combo, siempre que sea good o perfect el combo sigue sumando 1.
        if (acierto) {
            this.combo++;
            if (this.combo > this.maxCombo) {
                this.maxCombo = this.combo;
            }
        } else {
            this.combo = 0;
        }
    }

    mostrarFeedback(texto) {
        this.feedback = texto;
        this.alpha = 255;
        this.y = height * 0.65;
    }

    reiniciar() {
        this.combo = 0;
        this.maxCombo = 0;
        this.perfect = 0;
        this.good = 0;
        this.miss = 0;
        this.puntaje = 0;
    }
}