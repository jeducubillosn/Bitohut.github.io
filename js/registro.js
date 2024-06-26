// Código para actualizar interacciones y resumen
function actualizarInteraccion(id) {
    const interacciones = JSON.parse(localStorage.getItem('interacciones')) || [];
    const interaccion = interacciones.find(inter => inter.id === id);

    if (interaccion) {
        interaccion.NumeroDeImpresiones += 1;
    } else {
        interacciones.push({ id, NumeroDeImpresiones: 1 });
    }

    localStorage.setItem('interacciones', JSON.stringify(interacciones));
}

function actualizarResumen(id, opcionSeleccionada) {
    const resumen = JSON.parse(localStorage.getItem('resumen')) || [];
    const preguntaResumen = resumen.find(res => res.id === id);

    if (preguntaResumen) {
        preguntaResumen[`opcion${opcionSeleccionada}`] += 1;
    } else {
        const nuevaPregunta = {
            id,
            pregunta: obtenerEnunciadoPregunta(id),
            opcion1: 0,
            opcion2: 0,
            opcion3: 0
        };
        nuevaPregunta[`opcion${opcionSeleccionada}`] = 1;
        resumen.push(nuevaPregunta);
    }

    localStorage.setItem('resumen', JSON.stringify(resumen));
}

function obtenerEnunciadoPregunta(id) {
    // Implementar la lógica para obtener el enunciado de la pregunta basado en el ID
    // Puede ser similar a obtenerPregunta(id) en el código existente
}

function generarCSV() {
    const resumen = JSON.parse(localStorage.getItem('resumen')) || [];
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID,Pregunta,Opción 1,Opción 2,Opción 3\n";

    resumen.forEach(row => {
        csvContent += `${row.id},${row.pregunta},${row.opcion1},${row.opcion2},${row.opcion3}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'resumen_respuestas.csv');
    document.body.appendChild(link);
    link.click();
}
