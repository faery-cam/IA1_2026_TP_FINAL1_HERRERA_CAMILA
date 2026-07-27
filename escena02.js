class Nivel_01 extends EscenaGeneral {
    constructor() {
        super();

        this.gestor = new GestorNotas();
        this.teclas = new Teclas(this.gestor);
        this.ventana.alCerrar = () => { this.gestor.reanudar(); };

        //botones HUD
        this.hud.onInicio = () => {
            this.gestor.pausar();
            this.ventana.alConfirmar = () => { this.gestor.reiniciar(); mundo.elegirEscena(0); };
            this.ventana.open("salir");
        };
        this.hud.onPrev = () => {
            this.gestor.pausar();
            this.ventana.alConfirmar = () => { this.gestor.reiniciar(); mundo.escenaPrevia(); };
            this.ventana.open("salir");
        };
        this.hud.onSig = () => {
            this.gestor.pausar();
            this.ventana.alConfirmar = () => { this.gestor.reiniciar(); mundo.escenaSiguiente(); };
            this.ventana.open("salir");
        };
        this.hud.onConfig = () => {
            this.gestor.pausar();
            this.ventana.open("opciones");
        };

        /* Botones OPCIONES */
        this.ventana.onAtras = () => { this.ventana.open("opciones"); };
        this.ventana.onReanudar = () => { this.ventana.close(); };
        this.ventana.onReiniciar = () => {
            this.gestor.reiniciar();
            this.ventana.alCerrar = () => { };
            this.ventana.close();
        };
        this.ventana.onConfiguracion = () => { this.ventana.open("configUI") };
        this.ventana.onInicio = () => {
            this.ventana.alConfirmar = () => { this.gestor.reiniciar(); mundo.elegirEscena(0); };
            this.ventana.open("salir");
        };
    }

    entrar() {
        //lo que se ejecuta primero al entrar al nivel/escena. De esta manera queda coordinado el tiempo y detiene la musica q este sonando en menu u otra zona.
        this.musica.detener();
        fondo.recorrerFondos();
        this.gestor.cargarCancion(canciones.nivel_1());
    }

    draw() {
        fondo.draw();
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
        this.hud.update();
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