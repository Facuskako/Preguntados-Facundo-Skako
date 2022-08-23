


import {Question} from "../models/Question.js"

const dataFetch = fetch('./data/data.json')
  .then(response => response.json())

const data = await dataFetch

export const nuevasPreguntas = data.map(pregunta => new Question(pregunta.preguntas, pregunta.opciones, pregunta.respuesta))