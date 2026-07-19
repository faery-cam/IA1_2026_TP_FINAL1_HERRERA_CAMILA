class Puntos {
    constructor() {
        this.zonaGolpe = CONFIG.juego.zonaGolpe;
        this.combo = 0;
        this.maxCombo = 0;
        this.puntaje = 0;

        this.perfect = 0;
        this.good = 0;
        this.miss = 0;
    }

    precision(notaPres) {
        /* aca se puede comparar la nota para ver si fue perfect good o miss en base a la distancia de la zona de golpe y la ubicacion de la nota al ser presionada */
        let diferencia = abs(this.zonaGolpe - notaPres);

        if (diferencia <= 5) {
            this.perfect++;
            this.puntaje += 100;
            this.sumarCombo(true);
            return true;
        }
        else if (diferencia <= 10) {
            this.good++;
            this.puntaje += 30;
            this.sumarCombo(true);
            return true;
        }
        else if (diferencia <= 15) {
            this.miss++;
            this.sumarCombo(false);
            return true;
        }
        return false;
    }

    notaPerdida() {
        this.miss++;
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

    reiniciar() {
        this.combo = 0;
        this.maxCombo = 0;
        this.perfect = 0;
        this.good = 0;
        this.miss = 0;
        this.puntaje = 0;
    }
}