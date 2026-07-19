class HUD {
    constructor() {
        this.y = CONFIG.hud.y;
        this.size = CONFIG.hud.size;

        this.inicio = new Boton(140, this.y, this.size, this.size, () => this.onInicio());
        this.prev = new Boton(170, this.y, this.size, this.size, () => this.onPrev());
        this.sig = new Boton(210, this.y, this.size, this.size, () => this.onSig());
        this.config = new Boton(240, this.y, this.size, this.size, () => this.onConfig());
    }

    draw() {//botones 20x20
        fill(this.inicio.isHover() ? "pink" : 255);
        rect(140, 370, 20, 20);//inicio

        fill(this.prev.isHover() ? "pink" : 255);
        triangle(170, 380, 190, 370, 190, 390);//prev

        fill(this.sig.isHover() ? "pink" : 255);
        triangle(210, 370, 210, 390, 230, 380);//sig

        fill(this.config.isHover() ? "pink" : 255);
        circle(250, 380, 20);//config
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