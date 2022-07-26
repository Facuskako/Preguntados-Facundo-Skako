export class UI {
    constructor () {}


    mostrarPregunta(texto){
        const preguntaTitulo = document.getElementById("pregunta")
        preguntaTitulo.innerText = texto;

    }

    mostrarOpciones(opciones){
        const opcionesContenedor = document.getElementById("opciones")
        

        for (let i = 0; i < opciones.length; i++){
            const boton = document.createElement("button")
            boton.innerText = opciones[i]
            boton.className = "boton"


            opcionesContenedor.append(boton)
        }
    }

}

