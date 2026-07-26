class Nivel_01 extends EscenaGeneral {
    constructor() {
        super();

        this.gestor = new GestorNotas();
        this.teclas = new Teclas(this.gestor);
        this.ventana.alCerrar = () => { this.gestor.reanudar(); };

        //botones HUD
        this.hud.onInicio = () => {
            this.gestor.pausar();
            this.ventana.alConfirmar = () => { mundo.elegirEscena(0); };
            this.ventana.open("salir");
        }
        this.hud.onPrev = () => {
            this.gestor.pausar();
            this.ventana.alConfirmar = () => { mundo.escenaPrevia(); };
            this.ventana.open("salir");
        }
        this.hud.onSig = () => {
            this.gestor.pausar();
            this.ventana.alConfirmar = () => { mundo.escenaSiguiente(); };
            this.ventana.open("salir");
        }
        this.hud.onConfig = () => {
            this.gestor.pausar();
            this.ventana.open("configuracion");
        }
    }

    entrar() {
        //lo que se ejecuta primero al entrar al nivel/escena. De esta manera queda coordinado el tiempo y detiene la musica q este sonando en menu u otra zona.
        this.musica.detener();
        this.fondos.recorrerFondos();
        this.gestor.cargarCancion(canciones.nivel_1());
    }

    draw() {
        this.fondos.draw();
        this.gestor.draw();
        this.hud.draw();
        super.draw();
    }

    update() {

        if (this.ventana.estado !== null) {
            super.update();
            return;
        }
        this.gestor.update();

    }

    keyPressed() {
        if (keyCode === LEFT_ARROW) {
            this.gestor.pausar();
            this.ventana.alConfirmar = () => { mundo.escenaPrevia(); };
            this.ventana.open("salir");
        }
        else if (keyCode === RIGHT_ARROW) {
            this.gestor.pausar();
            this.ventana.alConfirmar = () => { mundo.escenaSiguiente(); };
            this.ventana.open("salir");
        }
        this.teclas.keyPressed(key);
    }

    mouseClicked() {
        if (this.ventana.estado !== null) {
            super.mouseClicked();
            return;
        }
        super.mouseClicked();

    }
}