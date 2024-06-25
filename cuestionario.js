// Variables globales
let preguntas = [];
let diagnosticos = [];
let respuestasUsuario = [];

// Función para cargar las preguntas desde preguntas.json
function cargarPreguntas() {
  fetch('preguntas.json')
    .then(response => response.json())
    .then(data => {
      preguntas = data;
      mostrarPregunta(1, 1);
    })
    .catch(error => console.error('Error al cargar preguntas:', error));
}

// Función para cargar los diagnósticos desde diagnosticos.json
function cargarDiagnosticos() {
  fetch('diagnosticos.json')
    .then(response => response.json())
    .then(data => {
      diagnosticos = data;
    })
    .catch(error => console.error('Error al cargar diagnósticos:', error));
}

// Función para mostrar una pregunta basada en el nivel y el índice
function mostrarPregunta(nivel, index) {
  const pregunta = preguntas.find(p => p.nivel === nivel && p.index === index);
  if (!pregunta) {
    console.error('Pregunta no encontrada:', { nivel, index });
    return;
  }

  const preguntaDiv = document.getElementById('pregunta');
  preguntaDiv.innerHTML = `
    <h2>${pregunta.texto}</h2>
    <button onclick="guardarRespuesta(${nivel}, ${index}, '${pregunta.opciones[0]}')">${pregunta.opciones[0]}</button>
    <button onclick="guardarRespuesta(${nivel}, ${index}, '${pregunta.opciones[1]}')">${pregunta.opciones[1]}</button>
    <button onclick="guardarRespuesta(${nivel}, ${index}, '${pregunta.opciones[2]}')">${pregunta.opciones[2]}</button>
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

// Función para determinar el siguiente nivel basado en la respuesta
function obtenerSiguienteNivel(nivel, respuesta) {
  if (nivel === 4) return null; // Último nivel
  return nivel + 1;
}

// Función para determinar el siguiente índice basado en la respuesta
function obtenerSiguienteIndex(nivel, index, respuesta) {
  // Lógica para determinar el siguiente índice basado en la respuesta
  return (index - 1) * 3 + ['A', 'B', 'C'].indexOf(respuesta) + 1;
}

// Función para mostrar el diagnóstico final basado en las respuestas del usuario
function mostrarDiagnostico() {
  // Crear la cadena de respuestas finales
  const respuestaFinal = respuestasUsuario.map(r => `${r.nivel}-${r.index}-${r.respuesta}`).join(',');

  // Buscar el diagnóstico correspondiente
  let diagnosticoEncontrado = false;
  for (let i = 0; i < diagnosticos.length; i++) {
    if (diagnosticos[i].respuestas.includes(respuestaFinal)) {
      const diagnostico = diagnosticos[i];
      diagnosticoEncontrado = true;

      // Mostrar el diagnóstico
      const diagnosticoDiv = document.getElementById('diagnostico');
      diagnosticoDiv.innerHTML = `
        <h2>Diagnóstico</h2>
        <p>Hongo recomendado: ${diagnostico.hongo}</p>
        <p>Perfil de usuario: ${diagnostico.perfil}</p>
        <p>Recomendación: ${diagnostico.recomendacion}</p>
      `;
      break;
    }
  }

  // Si no se encuentra ningún diagnóstico, mostrar un mensaje de error
  if (!diagnosticoEncontrado) {
    console.error('No se encontró ningún diagnóstico para las respuestas:', respuestaFinal);
    const diagnosticoDiv = document.getElementById('diagnostico');
    diagnosticoDiv.innerHTML = `
      <h2>Error</h2>
      <p>No se encontró ningún diagnóstico para las respuestas proporcionadas.</p>
    `;
  }
}

// Función para cargar preguntas y diagnósticos
window.onload = function() {
  cargarPreguntas();
  cargarDiagnosticos();
};
