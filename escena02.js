class Nivel_01 extends EscenaGeneral {
    constructor() {
        super();
        /* se crean los objetos necesarios para el nivel */
        this.gestor = new GestorNotas();
        this.teclas = new Teclas(this.gestor);
        this.ventana.alCerrar = () => { this.gestor.reanudar(); };/* le decimos a ventana de que manera comportarse al ser cerrada */

        //botones del HUD, le damos un comportamiento a todos los botones, que es la de pausar el juego y dar una advertencia antes de proceder
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

        /* Botones OPCIONES, estan en caso de que queramos salir del nivel, reiniciarlo o usar la configuracion */
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
        this.fondo.recorrerFondos();
        this.gestor.cargarCancion(canciones.nivel_1());
    }

    draw() {
        this.fondo.draw();
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

    keyPressed() {/* agregamos callbacks a las flechas para que no salga de manera inmediata del nivel por error, y maneja teclas nuevas que son las del nivel */
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

    mouseClicked() {/* agrega el manejo de clicks para una pestaña del final */
        if (this.ventana.estado !== null) {
            super.mouseClicked();
            return;
        }
        super.mouseClicked();
        this.gestor.finPartida.mouseClicked();
    }
}