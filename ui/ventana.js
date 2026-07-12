
class Ventana {
    constructor() {
        this.estado = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        //=======BOTONES=========
        this.btnSi = new Boton(130, 230, 10, 10, () => mundo.elegirEscena(0));
        this.btnNo = new Boton(270, 230, 10, 10, () => this.close());
        this.btnCerrar = new Boton(170, 260, 60, 20, () => this.close());
        this.btnX = new Boton(350, 30, 30, 30, () => this.close());
    }

    open(estado) {
        this.estado = estado;
    }

    close() {
        this.estado = null;
    }

    draw() {
        if (this.estado === null) return;

        switch (this.estado) {
            case "comoJugar":
                this.comoJugar();
                break;
            case "elegirEscena":
                this.elegirEscena();
                break;

            case "salir":
                this.salir();
                break;

            case "extras":
                this.extras();
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
             case "elegirEscena":
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

    //==============VENTANAS=================
    comoJugar() {


    }

    elegirEscena() {

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

    salir() {
        this.dibujarMarco(60, 150, 280, 100);
        textSize(20);
        text("¿Desea abandonar la partida?", 200, 190);
        text("Sí", 130, 230);
        text("No", 270, 230);
    }

    extras() {
        this.dibujarMarco(60, 100, 280, 200);
        textSize(20);
        text("Informática Aplicada 1, 2026", 200, 140);
        text("Hecho por:", 200, 180);
        text("GitHub del proyecto", 200, 220);
        text("Cerrar", 200, 280);
    }
}