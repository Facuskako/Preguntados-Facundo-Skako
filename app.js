import {nuevasPreguntas} from "./data/questions.js";
import {Cuestionario} from "./models/Cuestionario.js"

function main (){
    const quiz = new Cuestionario(nuevasPreguntas);

    quiz.guess("opcion1")


    console.log(quiz);

    console.log(
        quiz.getPreguntasIndex());
}

main()

