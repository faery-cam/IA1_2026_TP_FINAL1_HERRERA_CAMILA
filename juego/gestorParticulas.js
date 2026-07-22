class GestorParticulas {
    constructor() {
        this.particulas = [];
    }

    crear(x, y) {
        for (let i = 0; i < 15; i++) {
            this.particulas.push(
                new Particula(x, y)
            );
        }
    }

    draw() {
        for (let p of this.particulas) {
            p.draw();
        }
    }

    update() {
        for (let p of this.particulas) {
            p.update();
        }

        for (let i = this.particulas.length - 1; i >= 0; i--) {
            if (!this.particulas[i].existe()) {
                this.particulas.splice(i, 1);
            }
        }
    }
}
