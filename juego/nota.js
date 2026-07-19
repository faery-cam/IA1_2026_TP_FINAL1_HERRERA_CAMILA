const carriles = [...CONFIG.juego.carriles];

class Nota {
    constructor(carril, tecla, velocidad) {
        this.carril = carril;
        this.tecla = tecla;
        this.velocidad = velocidad;

        this.x = carriles[carril];
        this.y = CONFIG.juego.spawnY;
        this.activa = true;
    }

    update() {
        this.y += this.velocidad;
    }

    draw() {
        circle(this.x, this.y, 20);
    }
}