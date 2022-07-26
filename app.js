import {nuevasPreguntas} from "./data/questions.js";
import {Cuestionario} from "./models/Cuestionario.js"
import {UI} from "./models/UI.js"



function main (){
    const quiz = new Cuestionario(nuevasPreguntas);
        const ui = new UI();


        ui.mostrarPregunta(quiz.getPreguntasIndex().texto)
        ui.mostrarOpciones(quiz.getPreguntasIndex().opciones)




}

main()

