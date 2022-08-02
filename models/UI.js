export class UI {
    constructor () {}


    mostrarPregunta(texto){
        const preguntaTitulo = document.getElementById("pregunta")
        preguntaTitulo.innerText = texto;

    }

    mostrarOpciones(opciones, callback){
        const opcionesContenedor = document.getElementById("opciones")
        

        for (let i = 0; i < opciones.length; i++){
            const boton = document.createElement("button")
            boton.innerText = opciones[i]
            boton.className = "boton"
            boton.addEventListener ("click", () => callback (opciones[i]))


            opcionesContenedor.append(boton)
        }
    }

}

