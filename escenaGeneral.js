//escena general donde definimos las propiedades base
class EscenaGeneral {
    constructor() {
        //creamos los objetos base que comparten todas las escenas
        this.hud = new HUD();
        this.ventana = new Ventana();
        this.musica = new Musica();
        this.fondo = new Fondo();

        //definimos los dos colores base para poder usarlos comodamente donde sea necesario en todas las escenas
        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;
    }

    //dibuja
    draw() {
        this.ventana.draw();
        this.update();
    }

    //actualiza el estado
    update() {
        if (this.ventana.estado !== null) {
            this.ventana.update();
            return;
        }
        this.hud.update();
    }

    //cambia de escena con las flechas izq/der
    keyPressed(key, keyCode) {
        if (keyCode === LEFT_ARROW) {
            mundo.escenaPrevia();
        } else if (keyCode === RIGHT_ARROW) {
            mundo.escenaSiguiente();
        }
    }

    //maneja los clicks, en caso de estar con una "ventana" abierta, los botones que se encuentren por debajo no reaccionan
    mouseClicked() {
        if (this.ventana.estado !== null) {
            this.ventana.mouseClicked();
            return;
        }
        this.hud.mouseClicked();
    }
}