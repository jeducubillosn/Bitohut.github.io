const questions = [
    {
        question: "¿Qué factor es más importante para ti al seleccionar un hongo?",
        options: ["Valor nutricional", "Beneficios medicinales", "Uso recreativo", "Aspecto decorativo"],
        next: [1, 2, 3, 4]
    },
    {
        question: "¿Qué es para ti más significativo en la alimentación con hongos?",
        options: ["Quieres experimentar nuevos sabores", "Quieres un sustituto de proteínas", "Ya consumes hongos pero quieres más variedad"],
        next: [5, 6, 7]
    },
    {
        question: "¿Qué beneficios medicinales buscas en los hongos que cultivas?",
        options: ["Apoyo al sistema inmunológico", "Propiedades adaptogénicas", "Aumento de niveles de energía", "Mejora en salud de la piel"],
        next: [8, 9, 10, 11]
    },
    {
        question: "¿Qué tipo de uso recreativo prefieres con los hongos?",
        options: ["Experiencias culinarias", "Actividades al aire libre", "Arte y manualidades"],
        next: [12, 13, 14]
    },
    {
        question: "¿Qué aspecto decorativo buscas en los hongos?",
        options: ["Colores vibrantes", "Formas únicas", "Fácil mantenimiento"],
        next: [15, 16, 17]
    },
    {
        question: "¿Prefieres hongos con sabores fuertes o sutiles?",
        options: ["Sabores fuertes", "Sabores sutiles"],
        next: [18, 19]
    },
    {
        question: "¿Te interesan más los hongos por su alto contenido de proteínas o por sus aminoácidos esenciales?",
        options: ["Alto contenido de proteínas", "Aminoácidos esenciales"],
        next: [20, 21]
    },
    {
        question: "¿Buscas hongos que se puedan usar en platos tradicionales o en recetas innovadoras?",
        options: ["Platos tradicionales", "Recetas innovadoras"],
        next: [22, 23]
    },
    {
        question: "¿Qué tipo de apoyo inmunológico buscas?",
        options: ["Prevención de enfermedades", "Recuperación más rápida"],
        next: [24, 25]
    },
    {
        question: "¿Para qué situaciones deseas propiedades adaptogénicas?",
        options: ["Estrés diario", "Mejora del rendimiento físico"],
        next: [26, 27]
    },
    {
        question: "¿Buscas un aumento de energía rápido o sostenido?",
        options: ["Rápido", "Sostenido"],
        next: [28, 29]
    },
    {
        question: "¿Qué aspecto de la salud de la piel te interesa más?",
        options: ["Prevención de arrugas", "Tratamiento de afecciones"],
        next: [30, 31]
    },
    {
        question: "¿Qué tipo de experiencia culinaria buscas?",
        options: ["Cocina gourmet", "Cocina casera"],
        next: [32, 33]
    },
    {
        question: "¿Qué tipo de actividad al aire libre prefieres?",
        options: ["Excursiones", "Jardinería"],
        next: [34, 35]
    },
    {
        question: "¿Qué tipo de proyecto artístico te interesa?",
        options: ["Pintura", "Escultura"],
        next: [36, 37]
    },
    {
        question: "¿Prefieres hongos con colores naturales o artificiales?",
        options: ["Naturales", "Artificiales"],
        next: [38, 39]
    },
    {
        question: "¿Qué tipo de formas únicas te atraen más?",
        options: ["Formas geométricas", "Formas abstractas"],
        next: [40, 41]
    },
    {
        question: "¿Qué tan frecuentemente deseas cuidar tus hongos?",
        options: ["Frecuentemente", "Ocasionalmente"],
        next: [42, 43]
    },
    {
        question: "Ejemplo Nivel 4",
        options: ["Opción 1", "Opción 2"],
        next: [44, 45]
    },
    {
        question: "Ejemplo Nivel 5",
        options: ["Opción 1", "Opción 2"],
        next: [46, 47]
    }
];

let currentLevel = 0;
let currentQuestion = 0;

function loadQuestion(level, questionIndex) {
    const container = document.getElementById('question-container');
    container.innerHTML = '';

    if (questionIndex >= questions.length) {
        container.innerHTML = '<h2>No hay más preguntas.</h2>';
        return;
    }

    const question = questions[questionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `<h2>${question.question}</h2>`;

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.innerText = option;
        optionElement.className = 'option-button';
        optionElement.addEventListener('click', () => selectOption(level, questionIndex, index));
        container.appendChild(optionElement);
    });
}

function selectOption(level, questionIndex, optionIndex) {
    currentLevel = level + 1;
    currentQuestion = questions[questionIndex].next[optionIndex];
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    if (currentLevel < 5) {
        loadQuestion(currentLevel, currentQuestion);
        document.getElementById('next-button').disabled = true;
    } else {
        document.getElementById('question-container').innerHTML = '<h2>Recomendación de hongo basada en tus respuestas...</h2>';
        document.getElementById('next-button').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentLevel, currentQuestion);
    document.getElementById('next-button').addEventListener('click', nextQuestion);
});
