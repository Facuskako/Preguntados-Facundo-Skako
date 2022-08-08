// @ts-check
import { Question} from "./Question.js";


export class Cuestionario {

    preguntasIndex = 0
    puntaje = 0

    constructor(preguntas){

        this.preguntas = preguntas;

    }
//** Logica paras saber en que pregunta se encuentra el usuario  */

    getPreguntasIndex(){
        return this.preguntas[this.preguntasIndex]
    } 

//** Logica para indicar que ha finalizado el juego */

    haFinalizado(){
        return this.preguntas.length === this.preguntasIndex
    }

//** Logica para indicar la suma del puntaje final */
    guess(respuesta) {

        console.log(respuesta)
        if (this.getPreguntasIndex().respuestaCorrecta(respuesta)){
            this.puntaje++
        }


        this.preguntasIndex++
    }
}