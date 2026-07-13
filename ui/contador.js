class CuentaAtras {
    constructor() {
        this.num = 3;
        this.tpoContar = millis();
    }

    update() {
        if (millis() - this.tpoContar >= 1000) {
            this.num--;
            this.tpoContar = millis();
            if (this.num <= 0) {
                return true;
            }
        }
    }

    draw() {

    }

    reiniciar() {
        this.num = 3;
        this.tpoContar = millis();
    }
}