//escena general donde definimos las propiedades base
class EscenaGeneral {
    constructor() {
        this.hud = new HUD(); //creamos el objeto que tiene el hud
        this.configuracion = new Configuracion();
        
        this.ventana = new Ventana(this.configuracion);
        this.musica = new Musica();
        this.fondo = new Fondo();

        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;
    }

    draw() {
        this.ventana.draw();
        this.update();
    }

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

    //maneja los clicks
    mouseClicked() {
        if (this.ventana.estado !== null) {
            this.ventana.mouseClicked();
            return;
        }
        this.hud.mouseClicked();
    }
}