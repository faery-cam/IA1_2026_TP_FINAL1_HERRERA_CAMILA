class PantallaFinal extends EscenaGeneral {
    constructor() {
        super();

        this.volverInicio = new Boton(width * 0.5, height * 0.35, width * 0.4, height * 0.09, () => mundo.elegirEscena(0), { click: menuSelect });
        this.elegirNivel = new Boton(width * 0.5, height * 0.50, width * 0.4, height * 0.09, () => this.ventana.open("elegirNivel"), { click: menuSelect });
        this.configuracion = new Boton(width * 0.5, height * 0.65, width * 0.4, height * 0.09, () => this.ventana.open("configUI"), { click: menuSelect });

        //botones HUD
        this.hud.onInicio = () => mundo.elegirEscena(0);
        this.hud.onPrev = () => mundo.escenaPrevia();
        this.hud.onSig = () => mundo.escenaSiguiente();
        this.hud.onConfig = () => this.ventana.open("configUI");
    }

    entrar() {
        this.musica.update();
    }

    draw() {
        this.fondo.halftone();

        fill(40);
        rect(0, 0, width, height * 0.1); //barra superior

        textSize(width / 26);
        textAlign(CENTER);
        stroke(255);
        strokeWeight(3);
        fill(this.rosa);
        text("Llegaste al final", width / 2, height / 5);

        strokeWeight(1);
        fill(255, 200);
        rect(width * 0.53, height * 0.25, width * 0.34, height * 0.6, 10);

        noStroke();
        fill(this.volverInicio.isHover() ? this.rosa : 20, 45, 30);
        rect(width * 0.5, height * 0.35, width * 0.4, height * 0.09, 5);
        fill(this.elegirNivel.isHover() ? this.rosa : 20, 45, 30);
        rect(width * 0.5, height * 0.50, width * 0.4, height * 0.09, 5);
        fill(this.configuracion.isHover() ? this.rosa : 20, 45, 30);
        rect(width * 0.5, height * 0.65, width * 0.4, height * 0.09, 5);

        textSize(width / 30); //(24)
        textAlign(LEFT);
        stroke(this.rosa);
        strokeWeight(2);
        fill(255);
        text("Volver al inicio", width * 0.55, height * 0.41);
        text("Elegir Nivel", width * 0.55, height * 0.56);
        text("Configuración", width * 0.55, height * 0.71);

        this.hud.draw();
        this.musica.miniReproductor();
        super.draw();
    }

    update() {
        this.musica.update();
        if (this.ventana.estado !== null) {
            super.update();
            return;
        }
        super.update();

        this.hud.update();
        this.volverInicio.update();
        this.elegirNivel.update();
        this.configuracion.update();
    }

    mouseClicked() {
        if (this.ventana.estado !== null) {
            super.mouseClicked();
            return;
        }
        super.mouseClicked();
        this.volverInicio.mouseClicked();
        this.elegirNivel.mouseClicked();
        this.configuracion.mouseClicked();
        this.musica.mouseClicked();
    }
}