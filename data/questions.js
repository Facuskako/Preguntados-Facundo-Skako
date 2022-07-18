import {Question} from "../models/Question.js"
import {data} from "./data.js"

export const nuevasPreguntas = data.map(pregunta => new Question(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))
