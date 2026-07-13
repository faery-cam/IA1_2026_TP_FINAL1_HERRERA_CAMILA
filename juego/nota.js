const carriles = [100, 170, 240, 310];

class Nota {
    constructor(carril, tecla, velocidad) {
        this.tecla = tecla;
        this.velocidad = velocidad;

        this.x = carriles[carril];
        this.y = -20;
    }

    update() {
        this.y += this.velocidad;
    }

    draw() {
        circle(this.x, this.y, 50);
    }
}