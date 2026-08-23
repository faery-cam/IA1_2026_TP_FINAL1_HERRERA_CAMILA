class PantallaFinal extends EscenaGeneral {
    constructor() {
        super();

         //botones HUD
        this.hud.onInicio = () => mundo.elegirEscena(0);
        this.hud.onPrev = () => mundo.escenaPrevia();
        this.hud.onSig = () => mundo.escenaSiguiente();
        this.hud.onConfig = () => this.ventana.open("configuracion");
    }
    
    draw() {
        super.draw();
        this.hud.draw();
    }
    update(){
        super.update();
        this.hud.update();
    }
}