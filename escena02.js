class Nivel_01 extends Escena {
    constructor() {
        super();

        this.gestor = new GestorNotas();
        this.teclas = new Teclas(this.gestor);
    }

    entrar() {//lo que se ejecuta primero al entrar al nivel/escena
        this.gestor.cargarCancion(canciones.nivel_1());
    }

    draw() {
        text('nivel 1', 30, 100);

        this.gestor.update();
        this.gestor.draw();
        super.draw();
    }

    keyPressed() {
        super.keyPressed();
        this.teclas.keyPressed();

    }
}