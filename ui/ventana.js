
class Ventana {
    constructor() {
        this.estado = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
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
            this.alCerrar();
        },
            { click: menuCancel });

        this.btnCerrar = new Boton(170, 260, 60, 20, () => {
            this.close();
            this.alCerrar();
        },
            { click: menuCancel });

        this.btnX = new Boton(350, 30, 30, 30, () => {
            this.close();
            this.alCerrar();
        },
            { click: menuCancel });
    }

    open(estado) {
        this.estado = estado;
    }

    close() {
        this.estado = null;
        menuCancel.play();
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
        this.dibujarMarco(10, 10, 380, 380);
        text("Elegir escena", 200, 50);
        text("X", 360, 50);
        rect(30, 80, 150, 70, 15);
        rect(30, 170, 150, 70, 15);
        rect(30, 260, 150, 70, 15);
        rect(220, 80, 150, 70, 15);
        rect(220, 170, 150, 70, 15);
        rect(220, 260, 150, 70, 15);
    }

    configuracion() {
        this.dibujarMarco(80, 80, 240, 240);
        text("Música", 200, 140);
        text("Fx", 200, 180);
        text("Menú principal", 200, 220);
    }

    extras() {
        this.dibujarMarco(60, 100, 280, 200);
        textSize(20);
        text("Informática Aplicada 1, 2026", 200, 140);
        text("Hecho por:", 200, 180);
        text("GitHub del proyecto", 200, 220);
        text("Cerrar", 200, 280);
    }

    salir() {
        this.dibujarMarco(60, 150, 280, 100);
        textSize(20);
        text("¿Desea abandonar la partida?", 200, 190);
        text("Sí", 130, 230);
        text("No", 270, 230);
    }
}