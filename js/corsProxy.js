const proxyUrl = 'https://api.allorigins.win/get?url=';
const targetUrl = 'https://script.google.com/macros/s/AKfycbxNAsKZ0soa-TivRRbtz8WS0-g47ERlPzEd3JVwAW0mFz_2oEwpjxRButnJpv9OUE9j/exec';

async function enviarDatosConProxy(id, pregunta, opcionSeleccionada) {
    const url = proxyUrl + encodeURIComponent(targetUrl);

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
