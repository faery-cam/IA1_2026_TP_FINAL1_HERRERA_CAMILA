
class Ventana {
    constructor() {
        this.estado = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;

        this.alConfirmar = () => { };
        this.alCerrar = () => { };

        //=======BOTONES=========
        this.btnSi = new Boton(120, 210, 20, 20, () => {
            this.close();
            this.alConfirmar();
        },
            { click: menuSelect2 });

        this.btnNo = new Boton(260, 210, 20, 20, () => {
            this.close();
        },
            { click: menuCancel });

        this.btnCerrar = new Boton(170, 260, 60, 20, () => {
            this.close();
        },
            { click: menuCancel });

        this.btnX = new Boton(350, 30, 30, 30, () => {
            this.close();
        },
            { click: menuCancel });
    }

    open(estado) {
        this.estado = estado;
    }

    close() {
        this.estado = null;
        menuCancel.play();
        this.alCerrar();
    }

    draw() {
        if (this.estado === null) return;

        switch (this.estado) {
            case "comoJugar":
                this.comoJugar();
                break;

            case "elegirNivel":
                this.elegirNivel();
                break;

            case "configuracion":
                this.configuracion();
                break;

            case "extras":
                this.extras();
                break;

            case "salir":
                this.salir();
                break;
        }
    }

    dibujarMarco(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        rect(x, y, w, h, 10);
    }

    clickFuera() {
        return (
            mouseX < this.x || mouseX > this.x + this.w ||
            mouseY < this.y || mouseY > this.y + this.h
        );
    }

    mouseClicked() {
        switch (this.estado) {
            case "elegirNivel":
                this.btnX.mouseClicked();
                break;

            case "salir":
                this.btnSi.mouseClicked();
                this.btnNo.mouseClicked();
                break;

            case "extras":
                this.btnCerrar.mouseClicked();
                break;
        }

        if (this.clickFuera()) {
            this.close();
        }
    }

    update() {
        switch (this.estado) {
            case "elegirNivel":
                this.btnX.update();
                break;

            case "salir":
                this.btnSi.update();
                this.btnNo.update();
                break;

            case "extras":
                this.btnCerrar.update();
                break;
        }
    }

    //==============VENTANAS=================
    comoJugar() { }

    elegirNivel() {
        this.dibujarMarco(width * 0.1, height * 0.2, width * 0.4, height * 0.7);
        rect(width * 0.125, height * 0.35, width * 0.15, height * 0.125, 10);
        rect(width * 0.325, height * 0.35, width * 0.15, height * 0.125, 10);
        rect(width * 0.125, height * 0.55, width * 0.15, height * 0.125, 10);

        textAlign(CENTER);
        text("Elegir Nivel", width * 0.3, height * 0.3);
        textSize(width / 40);
        text("X", width * 0.47, height * 0.27); //360, 50
        text("Nivel 1", width * 0.2, height * 0.525);
        text("Nivel 2", width * 0.4, height * 0.525);
        text("Nivel 3", width * 0.2, height * 0.725);

    }

    configuracion() {
        this.dibujarMarco(80, 80, 240, 240);
        text("Música", 200, 140);
        text("Fx", 200, 180);
        text("Menú principal", 200, 220);
    }

    extras() {
        stroke(...this.menta);
        strokeWeight(1);
        //fill(40, 60, 50); //20, 90, 60
        this.dibujarMarco(width * 0.1, height * 0.2, width * 0.4, height * 0.7);
        textSize(15);
        textAlign(CENTER);
        text("Informática Aplicada 1, 2026", width * 0.3, height * 0.3);
        text("Hecho por: Herrera Camila", width * 0.3, height * 0.5);
        text("GitHub del proyecto", width * 0.3, height * 0.6);
        text("Cerrar", width * 0.3, height * 0.85);
    }

    salir() {
        stroke(this.menta);
        fill(40, 60, 50);
        this.dibujarMarco(width * 0.25, height * 0.325, width * 0.5, height * 0.35);

        stroke(0)
        fill(this.rosa);
        textAlign(CENTER);
        textSize(16);
        text("Perdera su progreso.", width * 0.5, height * 0.48);
        textSize(18);
        text("¿Desea abandonar la partida?", width * 0.5, height * 0.4);
        fill(255)
        textSize(20);
        text("Sí", width * 0.4, height * 0.6);
        text("No", width * 0.6, height * 0.6);
    }
}