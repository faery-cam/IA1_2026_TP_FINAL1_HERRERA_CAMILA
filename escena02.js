class Nivel_01 extends Escena {
    constructor() {
        super();

        this.gestor = new GestorNotas();
        this.teclas = new Teclas(this.gestor);

        this.gestor.cargarCancion(canciones.nivel_1());
    }

    draw() {
        text('nivel 1', 10, 100);

        this.gestor.update();
        this.gestor.draw();
        super.draw();
    }

    keyPressed() {
        super.keyPressed();
        this.teclas.keyPressed();

    }
}