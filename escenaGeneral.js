class Escena {

    draw() {
        text("Draw por defecto", width / 2, height / 2);
    }

    keyPressed(tecla) {
        if (tecla === LEFT_ARROW) {
            mundo.escenaPrevia();
        } else if (tecla === RIGHT_ARROW) {
            mundo.escenaSiguiente();
        }
    }

}