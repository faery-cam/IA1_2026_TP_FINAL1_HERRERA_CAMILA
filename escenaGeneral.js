//escena general donde definimos las propiedades base
class Escena {
    constructor() {
        this.hud = new BotonesHUD(); //creamos el objeto que tiene el hud
    }

    draw() {
        this.hud.draw();
    }

    //cambia de escena con las flechas izq/der
    keyPressed(tecla) {
        if (tecla === LEFT_ARROW) {
            mundo.escenaPrevia();
        } else if (tecla === RIGHT_ARROW) {
            mundo.escenaSiguiente();
        }
    }

    //maneja los clicks del hud
    mouseClicked() {
        this.hud.mouseClicked();
    }
}

//clase donde se crea el hud y se maneja cada boton
class BotonesHUD {

    //ubicamos datos base de cada boton
    constructor() {
        this.inicio = {
            x: 140,
            y: 370,
            size: 20,
            accion: () => mundo.elegirEscena(0),
        };
        this.prev = {
            x: 170,
            y: 370,
            size: 20,
            accion: () => mundo.escenaPrevia(),
        };
        this.sig = {
            x: 210,
            y: 370,
            size: 20,
            accion: () => mundo.escenaSiguiente(),
        };
        this.config = {
            x: 240,
            y: 370,
            size: 20,
            accion: () => mundo.elegirEscena(0),
        };
    }

    //dibujamos cada boton y le damos un color cuando el usuario hace hover, unicamente  parte visual
    draw() {//botones 20x20
        fill(this.hitbox(this.inicio) ? "pink" : 255)
        rect(140, 370, 20, 20);//inicio

        fill(this.hitbox(this.prev) ? "pink" : 255)
        triangle(170, 380, 190, 370, 190, 390);//prev

        fill(this.hitbox(this.sig) ? "pink" : 255)
        triangle(210, 370, 210, 390, 230, 380);//sig

        fill(this.hitbox(this.config) ? "pink" : 255)
        circle(250, 380, 20);//config
    }

    //define en base a los datos que guardamos en el constructor el area que ocupa el boton que se envie como parametro, creando una "hitbox" o un rect invisible por donde pasa el mouse
    hitbox(btn) {
        return (
            mouseX > btn.x && mouseX < btn.x + btn.size &&
            mouseY > btn.y && mouseY < btn.y + btn.size);
    }

    //maneja los clicks que ocurran sobre cada boton y ejecuta la acción correspondiente
    mouseClicked() {
        if (this.hitbox(this.inicio)) {
            this.inicio.accion();
        }
        if (this.hitbox(this.prev)) {
            this.prev.accion();
        }
        if (this.hitbox(this.sig)) {
            this.sig.accion();
        }
        if (this.hitbox(this.config)) {
            this.config.accion();
        }
    }
}