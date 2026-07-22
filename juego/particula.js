class Particula {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);
        this.vy = random(-3, -1);
        this.tam = random(4, 6);
        this.duracion = 30;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.duracion--;
    }

    draw() {
        noStroke();
        fill(255, 255, 150, this.duracion * 8.5);
        circle(this.x, this.y, this.tam);
    }

    existe() {
        return this.duracion > 0;
    }
}