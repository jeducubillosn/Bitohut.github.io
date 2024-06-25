// script.js

const urlPreguntas = 'preguntas.json'; // Asegúrate de tener el nombre correcto y la ruta adecuada aquí

async function cargarPreguntas() {
    try {
        const response = await fetch(urlPreguntas);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar las preguntas:', error);
        return null;
    }
}

function mostrarPregunta(pregunta) {
    const tituloPregunta = document.getElementById('titulo-pregunta');
    const contenedorOpciones = document.getElementById('contenedor-opciones');

    tituloPregunta.textContent = pregunta.pregunta;

    // Limpiar opciones anteriores si las hubiera
    contenedorOpciones.innerHTML = '';

    pregunta.opciones.forEach((opcion, index) => {
        const botonOpcion = document.createElement('button');
        botonOpcion.textContent = opcion;
        botonOpcion.classList.add('opcion');
        botonOpcion.addEventListener('click', () => manejarRespuesta(pregunta, index + 1));
        contenedorOpciones.appendChild(botonOpcion);
    });
}

async function manejarRespuesta(preguntaActual, opcionSeleccionada) {
    if (preguntaActual.hasOwnProperty('nivel5')) {
        // Si estamos en una pregunta del nivel 5
        if (opcionSeleccionada === 1) {
            // Opción única en el nivel 5, regresar a la pregunta inicial del nivel 1
            const preguntaInicialID = '0-0-0-0';
            const preguntaInicial = await obtenerPregunta(preguntaInicialID);

            if (preguntaInicial) {
                mostrarPregunta(preguntaInicial);
            } else {
                console.error('No se pudo cargar la pregunta inicial');
            }
        } else {
            console.error('Opción inválida en pregunta del nivel 5');
        }
    } else {
        // Obtener ID de la siguiente pregunta según la respuesta seleccionada
        const siguientePreguntaID = `${opcionSeleccionada}-${preguntaActual.b}-0-0`;
        const siguientePregunta = await obtenerPregunta(siguientePreguntaID);

        if (siguientePregunta) {
            mostrarPregunta(siguientePregunta);
        } else {
            console.error('No se encontró la siguiente pregunta');
        }
    }
}

async function obtenerPregunta(preguntaID) {
    const preguntas = await cargarPreguntas();
    if (preguntas && preguntas.hasOwnProperty(preguntaID)) {
        return preguntas[preguntaID];
    } else {
        console.error('Pregunta no encontrada:', preguntaID);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const preguntaInicialID = '0-0-0-0';
    const preguntaInicial = await obtenerPregunta(preguntaInicialID);

    if (preguntaInicial) {
        mostrarPregunta(preguntaInicial);
    } else {
        console.error('No se pudo cargar la pregunta inicial');
    }
});
