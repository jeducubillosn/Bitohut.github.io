// Cargar las preguntas y diagnósticos desde las bases de datos JSON
let preguntas = [];
let diagnosticos = [];

fetch('preguntas.json')
    .then(response => response.json())
    .then(data => {
        preguntas = data.preguntas;
        mostrarPreguntaActual();
    });

fetch('diagnosticos.json')
    .then(response => response.json())
    .then(data => {
        diagnosticos = data.diagnosticos;
    });

let respuestasUsuario = [];
let preguntaActual = 0;

// Mostrar la pregunta actual al usuario
function mostrarPreguntaActual() {
    const pregunta = preguntas[preguntaActual];
    const preguntaTexto = document.getElementById('pregunta-texto');
    const opciones = document.getElementById('opciones');

    preguntaTexto.textContent = pregunta.pregunta;
    opciones.innerHTML = '';

    pregunta.opciones.forEach((opcion, index) => {
        const button = document.createElement('button');
        button.textContent = opcion;
        button.onclick = () => guardarRespuesta(preguntaActual, index);
        opciones.appendChild(button);
    });
}

// Guardar la respuesta del usuario y avanzar a la siguiente pregunta o mostrar el diagnóstico
function guardarRespuesta(preguntaIndex, opcionIndex) {
    respuestasUsuario[preguntaIndex] = preguntas[preguntaIndex].id + "-" + String.fromCharCode(65 + opcionIndex);
    
    if (preguntaIndex + 1 < preguntas.length) {
        preguntaActual++;
        mostrarPreguntaActual();
    } else {
        mostrarDiagnostico();
    }
}

// Mostrar el diagnóstico final basado en las respuestas del usuario
function mostrarDiagnostico() {
    const idRespuestas = respuestasUsuario.join('');

    const diagnostico = diagnosticos.find(d => d.respuestas.includes(idRespuestas));

    if (diagnostico) {
        document.getElementById('pregunta-texto').textContent = diagnostico.diagnostico;
        document.getElementById('opciones').innerHTML = '';
    } else {
        document.getElementById('pregunta-texto').textContent = 'No se encontró un diagnóstico correspondiente.';
        document.getElementById('opciones').innerHTML = '';
    }
}

// Inicializar la primera pregunta
document.addEventListener('DOMContentLoaded', () => {
    mostrarPreguntaActual();
});
