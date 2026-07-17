const carriles = [100, 170, 240, 310];

class Nota {
    constructor(carril, tecla, velocidad) {
        this.carril = carril;
        this.tecla = tecla;
        this.velocidad = velocidad;

        this.x = carriles[carril];
        this.y = -20;
        this.activa = true;
    }

    update() {
        this.y += this.velocidad;
    }

    draw() {
        circle(this.x, this.y, 20);
    }
}