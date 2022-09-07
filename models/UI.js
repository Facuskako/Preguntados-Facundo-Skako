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
        <h1 class="titulo__cuestionario">Resultado</h1>
        <h2 class="puntaje__cuestionario">Tu Puntaje es: ${puntaje}</h2>
        <h3 class="titulo__cuestionario"> !Felicitaciones¡ </h3>
        <button class="boton__reseteo">
            <a class="link__reseteo" href="index.html">
                <div class="texto__reseteo">Volver a comenzar</div>
            </a>

        </button>
        `;


        const elemento = document.getElementById("cuestionario")
        elemento.innerHTML = quizFinalHTML
        
        
    
    
    
    
    }


    mostrarProgreso(indiceActual, total) {
        const elementoFooter = document.getElementById("progreso");
        elementoFooter.innerHTML = `Pregunta ${indiceActual} de ${total}`;
      }
}

