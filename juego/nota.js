class Nota {
    constructor(carril, tecla, velocidad) {
        this.carriles = carrilesJuego;
        this.carril = carril;
        this.tecla = tecla;
        this.velocidad = velocidad;

        this.x = this.carriles[carril];
        this.y = CONFIG.juego.spawnY;
        this.activa = true;
    }

    update() {
        this.y += this.velocidad;
    }

    draw() {
        rectMode(CENTER);
        fill(CONFIG.colores.rosa);
        stroke(255);
        rect(this.x, this.y, width * 0.12, height * 0.05, 5);
        rectMode(CORNER);
    }
}