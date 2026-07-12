class PantallaInicio extends Escena {
    constructor() {
        super();

        this.jugar = new Boton(150, 100, 100, 30, () => mundo.elegirEscena(1));
        this.comoJugar = new Boton(130, 140, 140, 30, () => this.ventana.open("comoJugar"));
        this.elegirEscena = new Boton(120, 180, 160, 30, () => this.ventana.open("elegirEscena"));
        this.configuracion = new Boton(120, 220, 160, 30, () => this.ventana.open());
        this.extras = new Boton(160, 260, 80, 30, () => this.ventana.open("extras"));
    }

    draw() {

        textSize(35);
        textAlign(CENTER);
        text("TITULO", 200, 50);

        rect(80, 80, 240, 240, 10);
        stroke(0);
        textSize(28);
        text("Jugar", 200, 120);
        text("Como jugar", 200, 160);
        text("Elegir escena", 200, 200);
        text("Configuracion", 200, 240);
        text("Extras", 200, 280);

        super.draw();
    }

    mouseClicked() {
        if (this.ventana.estado !== null) {
            super.mouseClicked();
            return;
        }
        
        super.mouseClicked();
        this.jugar.mouseClicked();
        this.comoJugar.mouseClicked();
        this.elegirEscena.mouseClicked();
        this.configuracion.mouseClicked();
        this.extras.mouseClicked();


    }
}