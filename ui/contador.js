class CuentaAtras {
    constructor() {
        this.num = 3;
        this.tpoContar = millis();
    }

    update() {
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
        fill(0);
        stroke(...CONFIG.colores.rosa)
        textSize(width / 15);
        text(this.num, width * 0.5, height * 0.5);
    }

    reiniciar() {
        this.num = 3;
        this.tpoContar = millis();
    }
}