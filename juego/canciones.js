class Canciones {
    nivel_1() {
        return {
            nombre: "a",
            src: "a",
            velocidad: 3,
            notas: [
                { tiempo: 3000, carril: 0, tecla:'D'},
                { tiempo: 4000, carril: 1, tecla:'F' },
                { tiempo: 5000, carril: 2, tecla:'J' },
                { tiempo: 6000, carril: 3, tecla:'K' }
            ],
        }
    }

    nivel_2() {
        return {
            velocidad: 3,
            notas: [],
        }
    }

    nivel_3() {
        return {
            velocidad: 3,
            notas: [],
        }
    }
}