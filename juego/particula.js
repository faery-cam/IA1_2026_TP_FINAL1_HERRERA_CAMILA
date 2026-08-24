class Particula {/* obj de particula que se le otorga diferentes propiedades en base a distintos random, como el tamaño o la velocidad en X e Y */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);
        this.vy = random(-3, -1);
        this.tam = random(4, 6);
        this.duracion = 30;
    }

    update() {/* actualizamos la posicion y va disminuyendo la opacidad modificando duracion */
        this.x += this.vx;
        this.y += this.vy;
        this.duracion--;
    }

    draw() {/* dibuja la particula */
        noStroke();
        fill(255, 255, 150, this.duracion * 8.5);
        circle(this.x, this.y, this.tam);
    }

    existe() {/* si la particula ya es transparente la flag para a falso, es decir que duracion ya vale 0 */
        return this.duracion > 0;
    }
}