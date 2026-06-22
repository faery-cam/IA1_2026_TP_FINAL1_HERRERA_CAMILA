class Escena {

    draw() {

    }

    keyPressed(tecla) {
        if (tecla === LEFT_ARROW) {
            mundo.escenaPrevia;
        } else if (tecla === RIGHT_ARROW) { 
            mundo.escenaSiguiente;
        }
    }

}