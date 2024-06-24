// Variables para almacenar las preguntas y diagnósticos
let preguntas = {};
let diagnosticos = {};
let respuestasUsuario = [];

// Función para cargar las preguntas desde el archivo JSON
function cargarPreguntas() {
  fetch('preguntas.json')
    .then(response => response.json())
    .then(data => {
      preguntas = data;
      mostrarPregunta('nivel1', 0); // Iniciar con la primera pregunta del nivel 1
    })
    .catch(error => console.error('Error al cargar preguntas:', error));
}

// Función para cargar los diagnósticos desde el archivo JSON
function cargarDiagnosticos() {
  fetch('diagnosticos.json')
    .then(response => response.json())
    .then(data => {
      diagnosticos = data.diagnosticos;
    })
    .catch(error => console.error('Error al cargar diagnósticos:', error));
}

// Función para mostrar una pregunta en la página
function mostrarPregunta(nivel, index) {
  const pregunta = preguntas[nivel][index];
  const preguntaDiv = document.getElementById('pregunta');
  preguntaDiv.innerHTML = `
    <h2>${pregunta.pregunta}</h2>
    <button onclick="guardarRespuesta('${nivel}', ${index}, 'A')">${pregunta.opciones.A}</button>
    <button onclick="guardarRespuesta('${nivel}', ${index}, 'B')">${pregunta.opciones.B}</button>
    <button onclick="guardarRespuesta('${nivel}', ${index}, 'C')">${pregunta.opciones.C}</button>
  `;
}

// Función para guardar la respuesta del usuario y mostrar la siguiente pregunta
function guardarRespuesta(nivel, index, respuesta) {
  respuestasUsuario.push({ nivel, index, respuesta });
  const siguienteNivel = obtenerSiguienteNivel(nivel, respuesta);
  const siguienteIndex = obtenerSiguienteIndex(nivel, index, respuesta);

  if (siguienteNivel) {
    mostrarPregunta(siguienteNivel, siguienteIndex);
  } else {
    mostrarDiagnostico();
  }
}

// Función para obtener el siguiente nivel de preguntas
function obtenerSiguienteNivel(nivel, respuesta) {
  const niveles = {
    'nivel1': 'nivel2',
    'nivel2': 'nivel3',
    'nivel3': 'nivel4'
  };
  return niveles[nivel];
}

// Función para obtener el índice de la siguiente pregunta
function obtenerSiguienteIndex(nivel, index, respuesta) {
  const indices = {
    'A': 0,
    'B': 1,
    'C': 2
  };
  return index * 3 + indices[respuesta];
}

// Función para mostrar el diagnóstico final basado en las respuestas del usuario
function mostrarDiagnostico() {
  const respuestaFinal = respuestasUsuario.map(r => `4${r.index}-${r.respuesta}`).join(',');
  const diagnostico = diagnosticos.find(d => d.respuestas.includes(respuestaFinal));
  
  const diagnosticoDiv = document.getElementById('diagnostico');
  diagnosticoDiv.innerHTML = `
    <h2>Diagnóstico</h2>
    <p>Hongo recomendado: ${diagnostico.hongo}</p>
    <p>Perfil de usuario: ${diagnostico.perfil}</p>
    <p>Recomendación: ${diagnostico.recomendacion}</p>
  `;
}

// Inicializar el cuestionario al cargar la página
window.onload = function() {
  cargarPreguntas();
  cargarDiagnosticos();
};

