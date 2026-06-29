class Boton {
    //clase donde se crea y se maneja cada boton
    constructor(x, y, w, h, accion) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.accion = accion;
    }

    //devuelve un bool
    isHover() {
        return (this.hitbox() ? true : false)
    }

    //define en base a los datos que guardamos en el constructor el area que ocupa el boton, creando una "hitbox" o un rect invisible por donde pasa el mouse
    hitbox() {
        return (
            mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h);
    }

    //maneja los clicks que ocurran sobre el boton y ejecuta la accion o callback enviado
    mouseClicked() {
        if (this.hitbox()) {
            this.accion();
        }
    }
}