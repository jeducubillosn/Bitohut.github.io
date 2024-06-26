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
    const siguientePreguntaID = obtenerSiguientePreguntaID(preguntaActual.id, opcionSeleccionada);
    const siguientePregunta = await obtenerPregunta(siguientePreguntaID);

    if (siguientePregunta) {
        mostrarPregunta(siguientePregunta);
    } else {
        console.error('No se encontró la siguiente pregunta');
    }
}

function obtenerSiguientePreguntaID(idActual, opcionSeleccionada) {
    const niveles = idActual.split('-');
    niveles[0] = opcionSeleccionada.toString();
    if (niveles[1] === '0') niveles[1] = '1';
    else if (niveles[2] === '0') niveles[2] = '1';
    else if (niveles[3] === '0') niveles[3] = '1';
    return niveles.join('-');
}

async function obtenerPregunta(preguntaID) {
    const preguntas = await cargarPreguntas();
    for (let nivel in preguntas) {
        const pregunta = preguntas[nivel].find(p => p.id === preguntaID);
        if (pregunta) return pregunta;
    }
    console.error('Pregunta no encontrada:', preguntaID);
    return null;
}

function reiniciarCuestionario() {
    const preguntaInicialID = '0-0-0-0';
    obtenerPregunta(preguntaInicialID).then(preguntaInicial => {
        if (preguntaInicial) {
            mostrarPregunta(preguntaInicial);
        } else {
            console.error('No se pudo cargar la pregunta inicial');
        }
    });
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
