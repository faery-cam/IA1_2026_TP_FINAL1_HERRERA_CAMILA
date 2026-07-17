//escena general donde definimos las propiedades base
class Escena {
    constructor() {
        this.hud = new HUD(); //creamos el objeto que tiene el hud
        this.ventana = new Ventana();
    }

    draw() {
        this.hud.draw();
        this.ventana.draw();
    }

    //cambia de escena con las flechas izq/der
    keyPressed(tecla) {
        if (tecla === LEFT_ARROW) {
            mundo.escenaPrevia();
        } else if (tecla === RIGHT_ARROW) {
            mundo.escenaSiguiente();
        }
    }

    //maneja los clicks
    mouseClicked() {
        if (this.ventana.estado !== null) {
            this.ventana.mouseClicked();
            return;
        }
        this.hud.mouseClicked();
    }
}