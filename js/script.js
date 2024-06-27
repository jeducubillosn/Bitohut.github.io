const urlPreguntas = 'preguntas.json';
const urlGoogleScript = 'https://script.google.com/macros/s/AKfycbxVWlLQnEqUWAmdijVG0KBmHUREjHaFUtCVikIpZlfUCmDVNWht-hHR_eeDewBERpZs/exec';  // Reemplaza con la URL de tu Web App

async function registrarRespuesta(idPregunta, opcionSeleccionada) {
    const respuesta = { idPregunta, opcionSeleccionada };

    try {
        const response = await fetch(urlGoogleScript, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(respuesta)
        });

        if (!response.ok) {
            throw new Error('Error al registrar la respuesta');
        }

        console.log('Respuesta registrada correctamente');
    } catch (error) {
        console.error('Error al registrar la respuesta:', error);
    }
}

function mostrarPregunta(pregunta) {
    const tituloPregunta = document.getElementById('titulo-pregunta');
    const contenedorOpciones = document.getElementById('contenedor-opciones');

    const niveles = pregunta.id.split('-').filter(n => n !== '0').length;
    setBodyClassByLevel(niveles);

    tituloPregunta.textContent = pregunta.pregunta;
    contenedorOpciones.innerHTML = '';

    if (Array.isArray(pregunta.opciones)) {
        pregunta.opciones.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.textContent = opcion;
            botonOpcion.classList.add('opcion');
            botonOpcion.addEventListener('click', () => manejarRespuesta(pregunta, index + 1));
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        const botonOpcion = document.createElement('button');
        botonOpcion.textContent = pregunta.opciones;
        botonOpcion.classList.add('opcion');
        botonOpcion.addEventListener('click', () => manejarRespuesta(pregunta, 1));
        contenedorOpciones.appendChild(botonOpcion);
    }
}

async function manejarRespuesta(preguntaActual, opcionSeleccionada) {
    const siguientePreguntaID = obtenerSiguientePreguntaID(preguntaActual.id, opcionSeleccionada);
    const siguientePregunta = await obtenerPregunta(siguientePreguntaID);

    // Enviar los datos a Google Sheets
    enviarDatosAGoogleSheets(preguntaActual, opcionSeleccionada);

    if (siguientePregunta) {
        mostrarPregunta(siguientePregunta);
        const progreso = calcularProgreso(siguientePreguntaID);
        updateProgress(progreso);
    } else if (siguientePreguntaID === '0-0-0-0') {
        const preguntaInicial = await obtenerPregunta('0-0-0-0');
        if (preguntaInicial) {
            mostrarPregunta(preguntaInicial);
            updateProgress(0);
        } else {
            console.error('No se pudo cargar la pregunta inicial');
        }
    } else {
        console.error('No se encontró la siguiente pregunta');
    }
}

function obtenerSiguientePreguntaID(idActual, opcionSeleccionada) {
    const niveles = idActual.split('-').map(Number);

    if (niveles[3] !== 0) {
        return '0-0-0-0';
    } else if (niveles[0] === 0) {
        niveles[0] = opcionSeleccionada;
    } else if (niveles[1] === 0) {
        niveles[1] = opcionSeleccionada;
    } else if (niveles[2] === 0) {
        niveles[2] = opcionSeleccionada;
    } else {
        niveles[3] = opcionSeleccionada;
    }
    return niveles.join('-');
}

async function obtenerPregunta(preguntaID) {
    const preguntas = await cargarPreguntas();
    if (preguntas) {
        for (let nivel in preguntas) {
            const pregunta = preguntas[nivel].find(p => p.id === preguntaID);
            if (pregunta) return pregunta;
        }
    }
    console.error('Pregunta no encontrada:', preguntaID);
    return null;
}

async function enviarDatosAGoogleSheets(pregunta, opcionSeleccionada) {
    const data = {
        id: pregunta.id,
        pregunta: pregunta.pregunta,
        opcionSeleccionada: opcionSeleccionada
    };

    try {
        const response = await fetch(urlWebApp, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Network response was not ok');
        const responseData = await response.json();
        console.log('Datos enviados correctamente:', responseData);
    } catch (error) {
        console.error('Error al enviar datos a Google Sheets:', error);
    }
}

function calcularProgreso(preguntaID) {
    const niveles = preguntaID.split('-').filter(n => n !== '0').length;
    return (niveles / 4) * 100;
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
