class Nota {
    constructor(carril, tecla, velocidad) {
        this.carril = carril;
        this.tecla = tecla;
        this.velocidad = velocidad;
        this.y = -20;

    }

    update() {
        this.y += this.velocidad;
    }

    draw() {
        circle(this.carril, this.y, 20);
    }
}