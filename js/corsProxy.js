const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://script.google.com/macros/s/AKfycbzLnMdef9B39_7F2zZNRV-mElOwMXWc-2aAeaMTXv3q_OHsyFhUp3x6Gj-NKXI-3-mO/exec';

async function enviarDatosConProxy(id, pregunta, opcionSeleccionada) {
    const url = proxyUrl + targetUrl;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, pregunta, opcionSeleccionada })
        });
        
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Datos enviados correctamente con proxy:', data);
    } catch (error) {
        console.error('Error al enviar datos con proxy:', error);
    }
}
