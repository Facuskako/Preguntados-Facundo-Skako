

export class Question {
/**Objeto contructor de las preguntas del cuestionario */

    constructor(texto,opciones,respuesta,usuario) {
        this.texto = texto;
        this.opciones = opciones;
        this.respuesta = respuesta;
        this.usuario = usuario;

    }

/**Validacion de respuesta correcta */
    respuestaCorrecta(opcion) {
        return opcion ===  this.respuesta
        
    }


}





