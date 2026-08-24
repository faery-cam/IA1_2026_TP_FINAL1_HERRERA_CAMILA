class CuentaAtras {/* contador para el juego */
    constructor() {
        this.num = 3;
        this.tpoContar = millis();
    }

    update() {/* cuenta atras basandose en la cantidad de milisegundos que pasaron */
        if (millis() - this.tpoContar < 1000) {
            this.num = 3;
        } else if (millis() - this.tpoContar < 2000) {
            this.num = 2;
        } else if (millis() - this.tpoContar < 3000) {
            this.num = 1;
        } else {
            return true;
        }
    }

    draw() {
        fill(255);
        stroke(CONFIG.colores.rosa)
        textSize(width / 15);
        text(this.num, width * 0.5, height * 0.5);
    }

    reiniciar() {/* vuelve a los valores base para poder reutilizarse en el momento */
        this.num = 3;
        this.tpoContar = millis();
    }
}