class PantallaInicio extends EscenaGeneral {
    constructor() {
        super();

        this.jugar = new Boton(width * 0.1, height * 0.25, width * 0.4, height * 0.09, () => mundo.elegirEscena(1), { click: menuSelect });
        this.comoJugar = new Boton(width * 0.1, height * 0.36, width * 0.4, height * 0.09, () => this.ventana.open("comoJugar"), { click: menuSelect });
        this.elegirNivel = new Boton(width * 0.1, height * 0.47, width * 0.4, height * 0.09, () => this.ventana.open("elegirNivel"), { click: menuSelect });
        this.configuracion = new Boton(width * 0.1, height * 0.59, width * 0.4, height * 0.09, () => this.ventana.open("configUI"), { click: menuSelect });
        this.extras = new Boton(width * 0.1, height * 0.70, width * 0.4, height * 0.09, () => this.ventana.open("extras"), { click: menuSelect });

        //botones HUD
        this.hud.onInicio = () => mundo.elegirEscena(0);
        this.hud.onPrev = () => mundo.escenaPrevia();
        this.hud.onSig = () => mundo.escenaSiguiente();
        this.hud.onConfig = () => this.ventana.open("configuracion");
    }

    entrar() {
        this.musica.reproducir();
    }

    draw() {
        this.fondos.halftone();

        textSize(width / 20);//(35)
        textAlign(CENTER);
        stroke(255);
        strokeWeight(3);
        fill(...this.rosa);
        text("TITULO", width / 2, height / 8);

        strokeWeight(1);
        fill(255, 200)
        rect(width * 0.13, height * 0.2, width * 0.34, height * 0.64, 10);

        noStroke();
        fill(this.jugar.isHover() ? this.rosa : 20, 45, 30);
        rect(width * 0.1, height * 0.25, width * 0.4, height * 0.09, 5);
        fill(this.comoJugar.isHover() ? this.rosa : 20, 45, 30);
        rect(width * 0.1, height * 0.36, width * 0.4, height * 0.09, 5);
        fill(this.elegirNivel.isHover() ? this.rosa : 20, 45, 30);
        rect(width * 0.1, height * 0.47, width * 0.4, height * 0.09, 5);
        fill(this.configuracion.isHover() ? this.rosa : 20, 45, 30);
        rect(width * 0.1, height * 0.59, width * 0.4, height * 0.09, 5);
        fill(this.extras.isHover() ? this.rosa : 20, 45, 30);
        rect(width * 0.1, height * 0.70, width * 0.4, height * 0.09, 5);


        textSize(width / 30);//(24)
        textAlign(LEFT);
        stroke(this.rosa);
        strokeWeight(2);
        fill(255)
        text("Jugar", width * 0.15, height * 0.31);
        text("Como jugar", width * 0.15, height * 0.42);
        text("Elegir Nivel", width * 0.15, height * 0.53);
        text("Configuración", width * 0.15, height * 0.65);
        text("Extras", width * 0.15, height * 0.76);

        super.draw();
    }

    update() {
        this.musica.update();
        if (this.ventana.estado !== null) {
            super.update();
            return;
        }
        super.update();

        this.jugar.update();
        this.comoJugar.update();
        this.elegirNivel.update();
        this.configuracion.update();
        this.extras.update();
    }

    mouseClicked() {
        if (this.ventana.estado !== null) {
            super.mouseClicked();
            return;
        }

        super.mouseClicked();
        this.jugar.mouseClicked();
        this.comoJugar.mouseClicked();
        this.elegirNivel.mouseClicked();
        this.configuracion.mouseClicked();
        this.extras.mouseClicked();
    }

    keyPressed(key, keyCode) {
        super.keyPressed(key, keyCode);
    }
}