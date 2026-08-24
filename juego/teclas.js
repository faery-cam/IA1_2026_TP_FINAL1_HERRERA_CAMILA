class Teclas {/* objeto parra manejar las teclas dentro del juego, datos q luego le manda al gestor */
    constructor(gestor) {
        this.gestor = gestor;
    }

    keyPressed(tecla) {
        switch (tecla) {
            case "d":
            case "D":
                this.gestor.tocarCarril(0);
                break;

            case "f":
            case "F":
                this.gestor.tocarCarril(1);
                break;

            case "j":
            case "J":
                this.gestor.tocarCarril(2);
                break;

            case "k":
            case "K":
                this.gestor.tocarCarril(3);
                break;
        }
    }
}