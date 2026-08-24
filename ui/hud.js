class HUD {/* objeto para tener siempre a mano las opciones basicas como recorrer el sketch o entrar a configurracion o volver al inicio */
    constructor() {
        this.y = CONFIG.hud.y;
        this.size = CONFIG.hud.size;
        this.rosa = CONFIG.colores.rosa;
        this.menta = CONFIG.colores.menta;

        this.inicio = new Boton(width / 2 - this.size * 3, this.y, this.size, this.size, () => this.onInicio(), { click: menuSelect2 });
        this.prev = new Boton(width / 2 - this.y * 3, this.y, this.size, this.size, () => this.onPrev(), { click: menuSelect });
        this.sig = new Boton(width / 2 + this.y, this.y, this.size, this.size, () => this.onSig(), { click: menuSelect });
        this.config = new Boton(width / 2 + this.size * 2, this.y, this.size, this.size, () => this.onConfig(), { click: pause });
    }

    draw() {//botones 20x20
        noStroke();
        fill(this.inicio.isHover() ? this.rosa : this.menta);
        rect(width / 2 - this.size * 3, this.y, this.size, this.size);//inicio

        fill(this.prev.isHover() ? this.rosa : this.menta);
        triangle(width / 2 - this.y * 3, this.size, width / 2 - this.y, this.y + this.size, width / 2 - this.y, this.y);//prev

        fill(this.sig.isHover() ? this.rosa : this.menta);
        triangle(width / 2 + this.y * 3, this.size, width / 2 + this.y, this.y + this.size, width / 2 + this.y, this.y);//sig

        fill(this.config.isHover() ? this.rosa : this.menta);
        circle(width / 2 + this.y * 5, this.size, this.size);//config
    }

    update() {
        this.inicio.update();
        this.prev.update();
        this.sig.update();
        this.config.update();
    }

    mouseClicked() {
        this.inicio.mouseClicked();
        this.prev.mouseClicked();
        this.sig.mouseClicked();
        this.config.mouseClicked();
    }

    //metodos vacios asi cada escena puede decidir q hace con cada boton, el hud solo avisa q un boton fue tocado
    onInicio() { }
    onPrev() { }
    onSig() { }
    onConfig() { }
}