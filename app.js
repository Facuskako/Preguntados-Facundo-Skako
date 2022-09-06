import { nuevasPreguntas } from "./data/questions.js";
import { Cuestionario } from "./models/Cuestionario.js"
import { UI } from "./models/UI.js"



const { value: text } = await Swal.fire({
    title: 'Hola!, ingresa tu nombre!',
    input: 'text',
    inputLabel: 'Podes elegir el usuario que quieras, o tu nombre :D',
    inputPlaceholder: 'Ingresa tu Nombre',
    inputAttributes: {
        maxlength: 10,
        autocapitalize: 'off',
        autocorrect: 'off'
    }
})

if (text) {
    Swal.fire(`Bienvenid@ !<3: ${text}`)
};

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Toast.fire({
    icon: 'info',
    title: `Bienvenid@ !<3  ${text}, Gracias por jugar!`
})



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

