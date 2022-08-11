import { nuevasPreguntas } from "./data/questions.js";
import { Cuestionario } from "./models/Cuestionario.js"
import { UI } from "./models/UI.js"


const paginaRenderizada = (quiz, ui) => {
    if (quiz.haFinalizado()) {
        ui.mostrarPuntaje(quiz.puntaje)
    } else {
        ui.mostrarPregunta(quiz.getPreguntasIndex().texto)
        ui.mostrarOpciones(quiz.getPreguntasIndex().opciones, (opcionElegida) => {
            quiz.guess(opcionElegida)
            paginaRenderizada(quiz, ui)
        });
        ui.mostrarProgreso(quiz.preguntasIndex + 1, quiz.preguntas.length)
    }
}


function main() {
    const quiz = new Cuestionario(nuevasPreguntas);
    const ui = new UI();


    paginaRenderizada(quiz, ui)




}

main()

