
class Ventana {
    constructor() {
        this.estado = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.crearBotones();

        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;

        this.alConfirmar = () => { };
        this.alCerrar = () => { };
    }

    open(estado) {
        this.estado = estado;
    }

    close() {
        this.estado = null;
        menuCancel.play();
        this.alCerrar();
    }

    draw() {
        if (this.estado === null) return;

        switch (this.estado) {
            case "comoJugar":
                this.comoJugar();
                break;

            case "elegirNivel":
                this.elegirNivel();
                break;

            case "configUI":
                this.configUI();
                break;

            case "extras":
                this.extras();
                break;

            case "salir":
                this.salir();
                break;

            case "opciones":
                this.opciones();
                break;
        }
    }

    dibujarMarco(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        rect(x, y, w, h, 10);
    }

    clickFuera() {
        return (
            mouseX < this.x || mouseX > this.x + this.w ||
            mouseY < this.y || mouseY > this.y + this.h
        );
    }

    mouseClicked() {
        switch (this.estado) {
            case "elegirNivel":
                this.btnNivel1.mouseClicked();
                this.btnNivel2.mouseClicked();
                this.btnNivel3.mouseClicked();
                this.btnX.mouseClicked();
                break;

            case "configUI":
                this.btnMenuMas.mouseClicked();
                this.btnMenuMenos.mouseClicked();
                this.btnJuegoMas.mouseClicked();
                this.btnJuegoMenos.mouseClicked();
                this.btnFxMas.mouseClicked();
                this.btnFxMenos.mouseClicked();
                this.btnAtras.mouseClicked();
                break;

            case "extras":
                this.btnGithub.mouseClicked();
                this.btnCerrar.mouseClicked();
                break;

            case "salir":
                this.btnSi.mouseClicked();
                this.btnNo.mouseClicked();
                break;

            case "opciones":
                this.btnReanudar.mouseClicked();
                this.btnReintentar.mouseClicked();
                this.btnConfiguracion.mouseClicked();
                this.btnInicio.mouseClicked();
                break;
        }

        if (this.clickFuera()) {
            this.close();
        }
    }

    update() {
        switch (this.estado) {
            case "elegirNivel":
                this.btnNivel1.update();
                this.btnNivel2.update();
                this.btnNivel3.update();
                this.btnX.update();
                break;

            case "configUI":
                this.btnMenuMas.update();
                this.btnMenuMenos.update();
                this.btnJuegoMas.update();
                this.btnJuegoMenos.update();
                this.btnFxMas.update();
                this.btnFxMenos.update();
                this.btnAtras.update();
                break;

            case "extras":
                this.btnGithub.update();
                this.btnCerrar.update();
                break;

            case "salir":
                this.btnSi.update();
                this.btnNo.update();
                break;

            case "opciones":
                this.btnReanudar.update();
                this.btnReintentar.update();
                this.btnConfiguracion.update();
                this.btnInicio.update();
                break;
        }
    }

    //==============VENTANAS=================
    comoJugar() { }

    elegirNivel() {
        fill(40, 60, 50)
        this.dibujarMarco(width * 0.1, height * 0.2, width * 0.4, height * 0.7);

        noStroke();
        fill(this.btnNivel1.isHover() ? this.rosa : this.menta);
        rect(width * 0.12, height * 0.34, width * 0.16, height * 0.2, 10);
        fill(this.btnNivel2.isHover() ? this.rosa : this.menta);
        rect(width * 0.32, height * 0.34, width * 0.16, height * 0.2, 10);
        fill(this.btnNivel3.isHover() ? this.rosa : this.menta);
        rect(width * 0.12, height * 0.59, width * 0.16, height * 0.2, 10);

        fill(255)
        stroke(this.rosa);
        rect(width * 0.125, height * 0.35, width * 0.15, height * 0.125, 10);
        rect(width * 0.325, height * 0.35, width * 0.15, height * 0.125, 10);
        rect(width * 0.125, height * 0.6, width * 0.15, height * 0.125, 10);

        textAlign(CENTER);
        text("Elegir Nivel", width * 0.3, height * 0.3);
        textSize(width / 40);
        text("Nivel 1", width * 0.2, height * 0.52);
        text("Nivel 2", width * 0.4, height * 0.52);
        text("Nivel 3", width * 0.2, height * 0.77);

        noStroke();
        fill(this.btnX.isHover() ? this.menta : this.rosa);
        text("X", width * 0.47, height * 0.27);
    }

    configUI() {
        stroke(this.menta);
        strokeWeight(1);
        fill(40, 60, 50);
        this.dibujarMarco(width * 0.25, height * 0.2, width * 0.5, height * 0.6, 5);

        //=====LISTA
        fill(20, 45, 30);
        rect(width * 0.3, height * 0.3, width * 0.4, height * 0.07, 6);
        rect(width * 0.3, height * 0.42, width * 0.4, height * 0.07, 6);
        rect(width * 0.3, height * 0.54, width * 0.4, height * 0.07, 6);
        rect(width * 0.3, height * 0.66, width * 0.4, height * 0.07, 6);

        textSize(width / 43.5);//16
        textAlign(CENTER);
        fill(this.menta);
        stroke(0);
        text("Configuración", width / 2, height * 0.25);

        stroke(0);
        textSize(width / 50);//14
        text(int(config.volMusica * 100) + "%", width * 0.59, height * 0.345);
        text(int(config.volJuego * 100) + "%", width * 0.59, height * 0.465);
        text(int(config.volFX * 100) + "%", width * 0.59, height * 0.585);

        noStroke();
        textSize(width / 58);//12
        text("Atras", width / 2, height * 0.7);
        fill(this.rosa);
        textAlign(LEFT);
        text("Volumen Menu", width * 0.32, height * 0.34);
        text("Volumen Juego", width * 0.32, height * 0.46);
        text("Volumen Efectos", width * 0.32, height * 0.58);

        textSize(width / 32);//22
        noStroke();
        //fila 1 MENU
        fill(this.btnMenuMas.isHover() ? this.menta : this.rosa);
        text("+", width * 0.65, height * 0.345);
        fill(this.btnMenuMenos.isHover() ? this.menta : this.rosa);
        text("-", width * 0.52, height * 0.345);
        //fila 2 JUEGO
        fill(this.btnJuegoMas.isHover() ? this.menta : this.rosa);
        text("+", width * 0.65, height * 0.465);
        fill(this.btnJuegoMenos.isHover() ? this.menta : this.rosa);
        text("-", width * 0.52, height * 0.465);
        //fila 3 FX
        fill(this.btnFxMas.isHover() ? this.menta : this.rosa);
        text("+", width * 0.65, height * 0.585);
        fill(this.btnFxMenos.isHover() ? this.menta : this.rosa);
        text("-", width * 0.52, height * 0.585);
    }

    extras() {
        stroke(this.menta);
        strokeWeight(1);
        fill(20, 45, 30);
        this.dibujarMarco(width * 0.1, height * 0.2, width * 0.4, height * 0.7);
        textSize(width / 46);//15
        textAlign(CENTER);
        fill(3255);
        text("Informática Aplicada 1, 2026", width * 0.3, height * 0.3);
        text("Hecho por: Herrera Camila", width * 0.3, height * 0.5);
        text("GitHub del proyecto", width * 0.3, height * 0.6);
        fill(this.btnCerrar.isHover() ? this.menta : 255);
        text("Cerrar", width * 0.3, height * 0.85);
    }

    salir() {
        stroke(this.menta);
        fill(40, 60, 50);
        this.dibujarMarco(width * 0.23, height * 0.325, width * 0.54, height * 0.35);

        fill(this.btnSi.isHover() ? this.rosa : this.menta);
        rect(width * 0.35, height * 0.565, width * 0.1, height * 0.06, 5);
        fill(this.btnNo.isHover() ? this.rosa : this.menta);
        rect(width * 0.547, height * 0.565, width * 0.1, height * 0.06, 5);

        stroke(0)
        fill(this.rosa);
        textAlign(CENTER);
        textSize(width / 43.5);//16
        text("Perdera su progreso.", width * 0.5, height * 0.48);
        textSize(width / 38);//18
        text("¿Desea abandonar la partida?", width * 0.5, height * 0.4);
        fill(255)
        textSize(width / 35);//20
        text("Sí", width * 0.4, height * 0.6);
        text("No", width * 0.6, height * 0.6);
    }

    opciones() {
        stroke(...this.menta);
        strokeWeight(1);
        fill(40, 60, 50);
        this.dibujarMarco(width * 0.25, height * 0.2, width * 0.5, height * 0.6, 5); //grande fondo

        //=====LISTA
        fill(20, 45, 30)
        rect(width * 0.3, height * 0.3, width * 0.4, height * 0.07, 6);
        rect(width * 0.3, height * 0.42, width * 0.4, height * 0.07, 6);
        rect(width * 0.3, height * 0.54, width * 0.4, height * 0.07, 6);
        rect(width * 0.3, height * 0.66, width * 0.4, height * 0.07, 6);

        textSize(width / 43.5);//16
        fill(...this.menta);
        stroke(0);
        text("Opciones", width / 2, height * 0.25);

        textSize(width / 58);//12
        noStroke();
        text("Reanudar", width / 2, height * 0.34);
        text("Reintentar", width / 2, height * 0.46);
        text("Configuración", width / 2, height * 0.58);
        text("Inicio", width / 2, height * 0.7);

    }
    /* =========================SOLO BOTONES========================== */
    crearBotones() {
        this.btnX = new Boton(width * 0.45, height * 0.22, width * 0.04, height * 0.06, () => {
            this.close();
        },
            { click: menuCancel });

        this.btnCerrar = new Boton(width * 0.25, height * 0.81, width * 0.1, height * 0.06, () => {
            this.close();
        },
            { click: menuCancel });

        this.btnSi = new Boton(width * 0.35, height * 0.565, width * 0.1, height * 0.06, () => {
            this.close();
            this.alConfirmar();
        },
            { click: menuSelect2 });

        this.btnNo = new Boton(width * 0.547, height * 0.565, width * 0.1, height * 0.06, () => {
            this.close();
        },
            { click: menuCancel });

        this.btnAtras = new Boton(width * 0.3, height * 0.66, width * 0.4, height * 0.07, () => this.onAtras(), { click: menuCancel });

        this.btnGithub = new Boton(width * 0.15, height * 0.55, width * 0.3, height * 0.08, () => window.open("https://github.com/faery-cam/IA1_2026_TP_FINAL1_HERRERA_CAMILA.git", "_blank"), { click: menuSelect2 });

        /* ==============BOTONES OPCIONES============== */
        this.btnReanudar = new Boton(width * 0.3, height * 0.3, width * 0.4, height * 0.07, () => this.onReanudar(), { click: menuSelect2 });

        this.btnReintentar = new Boton(width * 0.3, height * 0.42, width * 0.4, height * 0.07, () => this.onReiniciar(), { click: menuSelect2 });

        this.btnConfiguracion = new Boton(width * 0.3, height * 0.54, width * 0.4, height * 0.07, () => this.onConfiguracion(), { click: menuSelect2 });

        this.btnInicio = new Boton(width * 0.3, height * 0.66, width * 0.4, height * 0.07, () => this.onInicio(), { click: menuSelect2 });

        //=======BOTONES CONFIGURACION=========
        /* FILA 1 */
        this.btnMenuMas = new Boton(width * 0.64, height * 0.3, width * 0.04, width * 0.03,
            () => config.setVolMusica(0.1), { click: timer });
        this.btnMenuMenos = new Boton(width * 0.51, height * 0.3, width * 0.03, width * 0.03,
            () => config.setVolMusica(-0.1), { click: timer });
        /* FILA 2 */
        this.btnJuegoMas = new Boton(width * 0.64, height * 0.42, width * 0.04, width * 0.03,
            () => config.setVolJuego(0.1), { click: timer });
        this.btnJuegoMenos = new Boton(width * 0.51, height * 0.42, width * 0.03, width * 0.03,
            () => config.setVolJuego(-0.1), { click: timer });
        /* FILA 3 */
        this.btnFxMas = new Boton(width * 0.64, height * 0.54, width * 0.04, width * 0.03,
            () => config.setVolFX(0.1), { click: timer });
        this.btnFxMenos = new Boton(width * 0.51, height * 0.54, width * 0.03, width * 0.03,
            () => config.setVolFX(-0.1), { click: timer });

        //=======BOTONES ELEGIR NIVEL=========
        this.btnNivel1 = new Boton(width * 0.12, height * 0.34, width * 0.16, height * 0.2, () => { mundo.elegirEscena(1), this.close() }, { click: menuSelect });
        this.btnNivel2 = new Boton(width * 0.32, height * 0.34, width * 0.16, height * 0.2, () => { this.close() }, { click: menuSelect });
        this.btnNivel3 = new Boton(width * 0.12, height * 0.59, width * 0.16, height * 0.2, () => { this.close() }, { click: menuSelect });

    }

    /* FUNCIONES VACIAS, son para darle al boton la accion que uno quiera desde el lugar donde se lo llama */
    onAtras() { }
    onReanudar() { }
    onReiniciar() { }
    onConfiguracion() { }
    onInicio() { }
}