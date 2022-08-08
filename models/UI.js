export class UI {
    constructor () {}


    mostrarPregunta(texto){
        const preguntaTitulo = document.getElementById("pregunta")
        preguntaTitulo.innerText = texto;

    }

    mostrarOpciones(opciones, callback){
        const opcionesContenedor = document.getElementById("opciones")
        opcionesContenedor.innerHTML = ""
        

        for (let i = 0; i < opciones.length; i++){
            const boton = document.createElement("button")
            boton.innerText = opciones[i]
            boton.className = "boton"
            boton.addEventListener ("click", () => callback (opciones[i]))


            opcionesContenedor.append(boton)
        }
    }



    mostrarPuntaje(puntaje){
        const quizFinalHTML = `
        <h1>Resultado</h1>
        <h2 class="titulo__cuestionario">Tu Puntaje es: ${puntaje}</h2>
        <h3> !Felicitaciones¡ </h3>
        `;


        const elemento = document.getElementById("cuestionario")
        elemento.innerHTML = quizFinalHTML
        
        
    
    
    
    
    }


    mostrarProgreso(currentIndex, total) {
        const elementofooter = document.getElementById("progreso");
        elementofooter.innerHTML = `Pregunta ${currentIndex} de ${total}`;
      }
}

