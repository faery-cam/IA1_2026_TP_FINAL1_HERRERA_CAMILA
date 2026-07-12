class HUD {
    constructor(escena) {
        this.escena = escena;

        this.inicio = new Boton(140, 370, 20, 20, () => mundo.elegirEscena(0))
        this.prev = new Boton(170, 370, 20, 20, () => mundo.escenaPrevia())
        this.sig = new Boton(210, 370, 20, 20, () => mundo.escenaSiguiente())
        this.config = new Boton(240, 370, 20, 20, () => this.escena.ventana.open("configuracion"));
    }

    draw() {//botones 20x20
        fill(this.inicio.isHover() ? "pink" : 255);
        rect(140, 370, 20, 20);//inicio

        fill(this.prev.isHover() ? "pink" : 255);
        triangle(170, 380, 190, 370, 190, 390);//prev

        fill(this.sig.isHover() ? "pink" : 255);
        triangle(210, 370, 210, 390, 230, 380);//sig

        fill(this.config.isHover() ? "pink" : 255);
        circle(250, 380, 20);//config
    }

    mouseClicked() {
        this.inicio.mouseClicked();
        this.prev.mouseClicked();
        this.sig.mouseClicked();
        this.config.mouseClicked();
    }
}