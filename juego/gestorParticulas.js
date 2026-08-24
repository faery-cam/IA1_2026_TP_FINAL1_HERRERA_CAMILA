class GestorParticulas {/* objeto para gestionar particulas */
    constructor() {
        this.particulas = [];
    }

    crear(x, y) {/* se crean las particulas en base a la posicion que nos pase el gestor de notas */
        for (let i = 0; i < 15; i++) {
            this.particulas.push(
                new Particula(x, y)
            );
        }
    }

    draw() {/* dibuja las particulas */
        for (let p of this.particulas) {
            p.draw();
        }
    }

    update() {/* actualiza las particulas y las va eliminando del array a medida que ".existe" avise (es una flag) */
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
