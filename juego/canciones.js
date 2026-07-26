class Canciones {
    nivel_1() {
        return {
            nombre: "Girl Like Me - PinkPhanteress",
            src: cancionesJuego[0],
            nivel: "1",
            velocidad: 3,
            notas: [
                { tiempo: 3000, carril: 0, tecla: 'D' },
                { tiempo: 4000, carril: 1, tecla: 'F' },
                { tiempo: 5000, carril: 2, tecla: 'J' },
                { tiempo: 10000, carril: 3, tecla: 'K' }
            ],
        }
    }

    nivel_2() {
        return {
            nombre: "Biii:-P - XLOV",
            src: cancionesJuego[1],
            nivel: "2",
            velocidad: 3,
            notas: [],
        }
    }

    nivel_3() {
        return {
            nombre: "Dec. - Kanaria", /* HITO Mania - Sasuke Haraguchi */
            src: cancionesJuego[2],
            nivel: "3",
            velocidad: 3,
            notas: [],
        }
    }
}