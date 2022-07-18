import {Question} from "../models/Question.js"
import {data} from "./data.js"

export const nuevasPreguntas = data.map(pregunta => new Question(pregunta.preguntas, pregunta.opciones, pregunta.respuesta))
