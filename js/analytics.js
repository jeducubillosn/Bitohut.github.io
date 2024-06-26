// js/analytics.js

async function registrarRespuesta(preguntaID, opcionSeleccionada) {
    try {
        await db.collection('respuestas').add({
            preguntaID: preguntaID,
            opcionSeleccionada: opcionSeleccionada,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Respuesta registrada');
    } catch (error) {
        console.error('Error al registrar la respuesta:', error);
    }
}
