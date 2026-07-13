class Nivel_01 extends Escena {
    constructor() {
        super();

        this.gestor = new GestorNotas();
        this.gestor.cargarCancion(canciones.nivel_1());
    }

    draw() {
        text('nivel 1', 10, 100);
        super.draw();
    }
}