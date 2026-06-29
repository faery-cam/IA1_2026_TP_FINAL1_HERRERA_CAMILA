class PantallaInicio extends Escena {
    constructor() {
        super();
    }

    draw() {
        super.draw();
        textSize(35);
        textAlign(CENTER);
        text("TITULO", 200, 50);

        rect(80, 80, 240, 240, 10);
        stroke(0);
        textSize(28);
        text("Jugar", 200, 120);
        text("Como jugar", 200, 160);
        text("Elegir escena", 200, 200);
        text("Configuracion", 200, 240);
        text("Extras", 200, 280);

        rect(80, 80, 240, 240, 10);
        text("Música", 200, 140);
        text("Fx", 200, 180);
        text("Menú principal", 200, 220);

        rect(60, 150, 280, 100, 10);
        textSize(20);
        text("¿Desea abandonar la partida?", 200, 190);
        text("Sí", 130, 230);
        text("No", 270, 230);

        rect(10, 10, 380, 380, 10);
        text("Elegir escena", 200, 50);
        rect(30, 80, 150, 70, 15);
        rect(30, 170, 150, 70, 15);
        rect(30, 260, 150, 70, 15);
        rect(220, 80, 150, 70, 15);
        rect(220, 170, 150, 70, 15);
        rect(220, 260, 150, 70, 15);

        rect(60, 100, 280, 200, 10);
        text("Informática Aplicada 1, 2026",200, 140);
        text("Hecho por: Herrera Camila",200, 180);
        text("GitHub del proyecto", 200, 220);
        text("Cerrar", 200, 280);
    }
}