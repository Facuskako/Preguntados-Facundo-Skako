

export class Question {
/**Objeto contructor de las preguntas del cuestionario */

    constructor(texto,opciones,respuesta) {
        this.texto = texto;
        this.opciones = opciones;
        this.respuesta = respuesta;

    }

/**Validacion de respuesta correcta */
    respuestaCorrecta(opcion) {
        return opcion ===  this.respuesta
        
    }


}





