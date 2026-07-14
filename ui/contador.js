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
        text(this.num, width / 2, height / 2);
    }

    reiniciar() {
        this.num = 3;
        this.tpoContar = millis();
    }
}