const niveles = {
    "nivel1": ["Valor nutricional", "Beneficios medicinales", "Uso recreativo"],
    "nivel2": {
        "Valor nutricional": ["Experimentar nuevos sabores", "Sustituto de proteínas", "Más variedad en la dieta"],
        "Beneficios medicinales": ["Apoyo al sistema inmunológico", "Propiedades adaptogénicas", "Aumento de niveles de energía"],
        "Uso recreativo": ["Experiencias psicodélicas", "Aspecto decorativo", "Ambos"]
    },
    "nivel3": {
        "Experimentar nuevos sabores": ["Exóticos", "Gourmet", "Tradicionales"],
        "Sustituto de proteínas": ["Alta", "Moderada", "Baja"],
        "Más variedad en la dieta": ["Mucha", "Moderada", "Poca"],
        "Apoyo al sistema inmunológico": ["Prevención", "Tratamiento", "Ambos"],
        "Propiedades adaptogénicas": ["Relajantes", "Estimulantes", "Ambos"],
        "Aumento de niveles de energía": ["Rápidamente", "Gradualmente", "Ambos"],
        "Experiencias psicodélicas": ["Visuales", "Cognitivas", "Ambas"],
        "Aspecto decorativo": ["Colorido", "Texturizado", "Ambos"],
        "Ambos": ["Más psicodélico", "Más decorativo", "Equilibrado"]
    },
    "nivel4": {
        "Exóticos": ["Frutales", "Terrosos", "Marinos"],
        "Gourmet": ["Alta cocina", "Cocina casera", "Innovadora"],
        "Tradicionales": ["Italianos", "Mexicanos", "Asiáticos"],
        "Alta": ["Deportivas", "Dietéticas", "Vegetarianas"],
        "Moderada": ["Equilibradas", "Flexitarianas", "Pescetarianas"],
        "Baja": ["Veganas", "Sin gluten", "Orgánicas"],
        "Mucha": ["Colores", "Texturas", "Sabores"],
        "Moderada": ["Un poco de todo", "Principalmente sabores", "Principalmente texturas"],
        "Poca": ["Pocos cambios", "Constancia en sabores", "Constancia en texturas"],
        "Prevención": ["Fortalecimiento", "Refuerzo", "Ambos"],
        "Tratamiento": ["Curación", "Mantenimiento", "Ambos"],
        "Relajantes": ["Suaves", "Moderados", "Intensos"],
        "Estimulantes": ["Suaves", "Moderados", "Intensos"],
        "Rápidamente": ["Natural", "Suplementos", "Ambos"],
        "Gradualmente": ["Dieta", "Ejercicio", "Ambos"],
        "Visuales": ["Colores", "Patrones", "Ambos"],
        "Cognitivas": ["Claridad", "Creatividad", "Ambos"],
        "Colorido": ["Rojo", "Azul", "Verde"],
        "Texturizado": ["Rugosas", "Suaves", "Ambos"]
    }
};

const diagnosticos = {
    "1-1-1-1": "Prefieres hongos con un alto valor nutricional y te interesa experimentar nuevos sabores, específicamente exóticos con un toque frutal. Los hongos que se ajustan a esta preferencia son el Reishi y el Chaga, conocidos por sus perfiles de sabor únicos y beneficios nutricionales destacados. Como amante de la cocina saludable y exótica, estos hongos complementarán tus platos de manera excelente.",
    "1-1-1-2": "Estás buscando hongos que no solo aporten nutrición sino que también ofrezcan nuevos sabores exóticos, en particular aquellos con matices terrosos. El Maitake y el Enoki son ideales para ti, ofreciendo sabores profundos y complejos que enriquecerán tus comidas. Como entusiasta de la gastronomía con un paladar aventurero, estos hongos serán una gran adición a tus recetas.",
    "1-1-1-3": "Quieres incorporar hongos nutricionalmente ricos en tu dieta, con un enfoque en experimentar sabores exóticos y marinos. El Shiitake y el Lobster Mushroom son perfectos para ti, imitando o complementando sabores de mariscos. Como alguien que aprecia la innovación culinaria, estos hongos te permitirán crear platos únicos y saludables.",
    "1-1-2-1": "Te interesa el valor nutricional de los hongos y deseas probar sabores gourmet, especialmente aquellos que se destacan en la alta cocina. El Porcini y el Truffle Mushroom son ideales para ti, usados en preparaciones culinarias sofisticadas. Como aficionado a la alta cocina, estos hongos elevarán tus platos a un nivel gourmet, aportando tanto nutrición como sofisticación.",
    "1-1-2-2": "Prefieres hongos nutritivos que ofrezcan sabores gourmet adaptables a la cocina casera. El Cremini y el Oyster Mushroom son perfectos para ti, mejorando tus comidas diarias con un toque especial sin complicar demasiado las preparaciones. Como alguien que valora la cocina casera pero sofisticada, estos hongos serán una excelente adición a tu repertorio culinario.",
    "1-1-2-3": "Buscas hongos nutritivos con sabores gourmet innovadores. El Lion's Mane y el Blue Oyster son ideales para ti, aportando sabores únicos y texturas interesantes a tus platos. Como amante de la cocina innovadora, estos hongos te permitirán experimentar y crear recetas sorprendentes.",
    "1-1-3-1": "Quieres agregar valor nutricional a tu dieta con hongos tradicionales que aporten nuevos sabores. El Shiitake y el Portobello son ideales para ti, ofreciendo sabores robustos que complementarán tus platos favoritos. Como alguien que valora la tradición culinaria, estos hongos serán una adición valiosa a tus comidas.",
    "1-1-3-2": "Prefieres hongos nutritivos con sabores tradicionales mexicanos. El Huitlacoche y el Oyster Mushroom son perfectos para ti, añadiendo autenticidad y nutrición a tus recetas mexicanas. Como amante de la cocina mexicana, estos hongos enriquecerán tus platos con sabores y nutrientes.",
    "1-1-3-3": "Buscas hongos nutritivos con sabores tradicionales asiáticos. El Shiitake y el Enoki son ideales para ti, aportando autenticidad y riqueza nutricional a tus platos asiáticos. Como entusiasta de la cocina asiática, estos hongos te permitirán crear recetas auténticas y saludables.",
    "1-2-1-1": "Estás buscando hongos como sustituto de proteínas con un perfil de proteínas altas, especialmente aquellos que tienen un valor nutricional deportivo. El Oyster y el Shiitake son ideales para ti, conocidos por su alto contenido de proteínas y beneficios para la salud. Como alguien que sigue una dieta alta en proteínas, estos hongos serán un excelente complemento.",
    "1-2-1-2": "Buscas hongos como sustituto de proteínas con un perfil de proteínas altas, adaptadas a una dieta dietética. El Maitake y el Reishi son perfectos para ti, ofreciendo beneficios nutricionales y un contenido proteico adecuado para dietas equilibradas. Como alguien que sigue una dieta dietética, estos hongos serán una adición saludable.",
    "1-2-1-3": "Prefieres hongos como sustituto de proteínas altas que sean vegetarianas. El Lion's Mane y el Enoki son ideales para ti, proporcionando una fuente rica de proteínas vegetales. Como alguien que sigue una dieta vegetariana, estos hongos te ayudarán a mantener un equilibrio nutricional adecuado.",
    "1-2-2-1": "Te interesa el uso de hongos como sustituto de proteínas con un perfil moderado, equilibradas. El Oyster y el Cremini son perfectos para ti, ofreciendo una cantidad moderada de proteínas que se adapta a una dieta equilibrada. Como alguien que busca un balance nutricional, estos hongos serán una excelente opción.",
    "1-2-2-2": "Buscas hongos como sustituto de proteínas con un perfil moderado, adaptado a una dieta flexitariana. El Shiitake y el Maitake son ideales para ti, proporcionando proteínas y beneficios nutricionales que se adaptan a tu estilo de vida flexitariano. Como alguien que sigue una dieta flexitariana, estos hongos enriquecerán tus comidas.",
    "1-2-2-3": "Prefieres hongos como sustituto de proteínas con un perfil moderado, adaptado a una dieta pescetariana. El Oyster y el Blue Oyster son perfectos para ti, proporcionando proteínas y nutrientes que complementan una dieta pescetariana. Como alguien que sigue una dieta pescetariana, estos hongos serán una adición valiosa.",
    "1-2-3-1": "Buscas hongos como sustituto de proteínas bajas, adecuados para una dieta vegana. El Lion's Mane y el Enoki son ideales para ti, ofreciendo proteínas y nutrientes esenciales sin productos animales. Como alguien que sigue una dieta vegana, estos hongos te ayudarán a mantener un equilibrio nutricional.",
    "1-2-3-2": "Prefieres hongos como sustituto de proteínas bajas, sin gluten. El Shiitake y el Oyster son perfectos para ti, proporcionando proteínas y nutrientes sin gluten. Como alguien que sigue una dieta sin gluten, estos hongos serán una excelente adición a tus comidas.",
    "1-2-3-3": "Estás buscando hongos como sustituto de proteínas bajas, orgánicas. El Reishi y el Maitake son ideales para ti, conocidos por sus beneficios nutricionales y cultivo orgánico. Como alguien que valora los productos orgánicos, estos hongos enriquecerán tu dieta.",
    "1-3-1-1": "Te interesa una mayor variedad en tu dieta con muchos colores. El Oyster y el Blue Oyster son perfectos para ti, ofreciendo una variedad de colores vibrantes y beneficios nutricionales. Como alguien que valora la diversidad en los alimentos, estos hongos añadirán un toque de color y nutrición a tus platos.",
    "1-3-1-2": "Buscas una mayor variedad en tu dieta con muchas texturas. El Shiitake y el Lion's Mane son ideales para ti, proporcionando una variedad de texturas y beneficios nutricionales. Como alguien que aprecia la diversidad en las texturas alimentarias, estos hongos enriquecerán tus comidas.",
    "1-3-1-3": "Prefieres una mayor variedad en tu dieta con muchos sabores. El Maitake y el Enoki son perfectos para ti, ofreciendo una diversidad de sabores únicos y beneficios nutricionales. Como alguien que disfruta explorando diferentes sabores, estos hongos serán una excelente adición a tus recetas.",
    "1-3-2-1": "Te interesa una variedad moderada en tu dieta con un poco de todo. El Oyster y el Shiitake son ideales para ti, proporcionando una variedad equilibrada de colores, texturas y sabores. Como alguien que busca un equilibrio en la diversidad alimentaria, estos hongos serán una excelente opción.",
    "1-3-2-2": "Buscas una variedad moderada en tu dieta con un enfoque en sabores. El Maitake y el Cremini son perfectos para ti, ofreciendo una diversidad de sabores y beneficios nutricionales. Como alguien que valora la variedad de sabores en sus comidas, estos hongos enriquecerán tus recetas.",
    "1-3-2-3": "Prefieres una variedad moderada en tu dieta con un enfoque en texturas. El Lion's Mane y el Enoki son ideales para ti, proporcionando una diversidad de texturas y beneficios nutricionales. Como alguien que aprecia la variedad de texturas en los alimentos, estos hongos serán una gran adición a tus platos.",
    "1-3-3-1": "Te interesa una variedad limitada en tu dieta con pocos cambios. El Shiitake y el Cremini son perfectos para ti, ofreciendo consistencia y beneficios nutricionales. Como alguien que prefiere estabilidad en la dieta, estos hongos serán una excelente opción.",
    "1-3-3-2": "Buscas una variedad limitada en tu dieta con constancia en sabores. El Maitake y el Oyster son ideales para ti, proporcionando sabores consistentes y beneficios nutricionales. Como alguien que prefiere la constancia en los sabores, estos hongos enriquecerán tus comidas.",
    "1-3-3-3": "Prefieres una variedad limitada en tu dieta con constancia en texturas. El Lion's Mane y el Enoki son perfectos para ti, proporcionando texturas consistentes y beneficios nutricionales. Como alguien que prefiere estabilidad en las texturas alimentarias, estos hongos serán una excelente adición a tus recetas.",
    "2-1-1-1": "Estás buscando hongos exóticos que mejoren tu salud mental y emocional. El Reishi y el Lion's Mane son ideales para ti, conocidos por sus propiedades adaptogénicas y beneficios para la cognición. Como alguien interesado en la salud mental y emocional, estos hongos serán una excelente adición a tu dieta.",
    "2-1-1-2": "Prefieres hongos exóticos que refuercen tu sistema inmunológico. El Chaga y el Turkey Tail son perfectos para ti, con propiedades inmunoestimulantes reconocidas. Como alguien que valora la fortaleza inmunológica, estos hongos enriquecerán tu dieta y fortalecerán tus defensas.",
    "2-1-1-3": "Buscas hongos exóticos que mejoren tu salud digestiva. El Maitake y el Shiitake son ideales para ti, conocidos por sus beneficios para la salud intestinal. Como alguien que valora la salud digestiva, estos hongos serán una adición valiosa a tus comidas.",
    "2-1-2-1": "Te interesan los hongos gourmet que mejoren tu salud mental y emocional. El Truffle Mushroom y el Porcini son perfectos para ti, con perfiles de sabor sofisticados y beneficios para la cognición. Como aficionado a la alta cocina y la salud mental, estos hongos enriquecerán tus platos y bienestar.",
    "2-1-2-2": "Prefieres hongos gourmet que refuercen tu sistema inmunológico. El Oyster y el Shiitake son ideales para ti, con beneficios inmunoestimulantes y sabores gourmet. Como alguien que aprecia la alta cocina y la salud inmunológica, estos hongos serán una excelente adición a tus recetas.",
    "2-1-2-3": "Buscas hongos gourmet que mejoren tu salud digestiva. El Maitake y el Enoki son perfectos para ti, proporcionando beneficios digestivos y sabores gourmet. Como alguien que valora la alta cocina y la salud digestiva, estos hongos enriquecerán tus platos y bienestar.",
    "2-1-3-1": "Te interesan los hongos tradicionales que mejoren tu salud mental y emocional. El Shiitake y el Lion's Mane son ideales para ti, conocidos por sus beneficios cognitivos y de bienestar. Como alguien que aprecia la tradición culinaria y la salud mental, estos hongos serán una excelente adición a tu dieta.",
    "2-1-3-2": "Prefieres hongos tradicionales que refuercen tu sistema inmunológico. El Reishi y el Turkey Tail son perfectos para ti, conocidos por sus propiedades inmunoestimulantes. Como alguien que valora la tradición culinaria y la salud inmunológica, estos hongos enriquecerán tu dieta.",
    "2-1-3-3": "Buscas hongos tradicionales que mejoren tu salud digestiva. El Maitake y el Shiitake son ideales para ti, conocidos por sus beneficios digestivos. Como alguien que aprecia la tradición culinaria y la salud digestiva, estos hongos serán una excelente adición a tus comidas.",
    "2-2-1-1": "Prefieres hongos medicinales que mejoren tu salud mental y emocional. El Reishi y el Lion's Mane son ideales para ti, conocidos por sus propiedades adaptogénicas y beneficios cognitivos. Como alguien interesado en la medicina natural y la salud mental, estos hongos enriquecerán tu bienestar.",
    "2-2-1-2": "Buscas hongos medicinales que refuercen tu sistema inmunológico. El Chaga y el Turkey Tail son perfectos para ti, con propiedades inmunoestimulantes reconocidas. Como alguien que valora la medicina natural y la salud inmunológica, estos hongos fortalecerán tus defensas.",
    "2-2-1-3": "Te interesan hongos medicinales que mejoren tu salud digestiva. El Maitake y el Shiitake son ideales para ti, conocidos por sus beneficios para la salud intestinal. Como alguien que valora la medicina natural y la salud digestiva, estos hongos enriquecerán tu dieta.",
    "2-2-2-1": "Prefieres hongos para la salud integral con beneficios para la salud mental y emocional. El Reishi y el Lion's Mane son perfectos para ti, proporcionando bienestar cognitivo y emocional. Como alguien que valora la salud integral, estos hongos enriquecerán tu bienestar mental y emocional.",
    "2-2-2-2": "Buscas hongos para la salud integral que refuercen tu sistema inmunológico. El Chaga y el Turkey Tail son ideales para ti, conocidos por sus propiedades inmunoestimulantes. Como alguien que aprecia la salud integral, estos hongos enriquecerán tu sistema inmunológico.",
    "2-2-2-3": "Te interesan hongos para la salud integral que mejoren tu salud digestiva. El Maitake y el Shiitake son perfectos para ti, proporcionando beneficios digestivos. Como alguien que valora la salud integral, estos hongos enriquecerán tu salud digestiva.",
    "2-2-3-1": "Prefieres hongos tradicionales con beneficios para la salud mental y emocional. El Shiitake y el Lion's Mane son ideales para ti, conocidos por sus beneficios cognitivos y de bienestar. Como alguien que valora la tradición y la salud mental, estos hongos enriquecerán tu dieta.",
    "2-2-3-2": "Buscas hongos tradicionales que refuercen tu sistema inmunológico. El Reishi y el Turkey Tail son perfectos para ti, con propiedades inmunoestimulantes. Como alguien que aprecia la tradición y la salud inmunológica, estos hongos enriquecerán tu dieta.",
    "2-2-3-3": "Te interesan hongos tradicionales que mejoren tu salud digestiva. El Maitake y el Shiitake son ideales para ti, conocidos por sus beneficios digestivos. Como alguien que valora la tradición y la salud digestiva, estos hongos enriquecerán tu dieta.",
    "2-3-1-1": "Prefieres hongos exóticos que mejoren tu salud mental y emocional. El Reishi y el Lion's Mane son perfectos para ti, conocidos por sus propiedades adaptogénicas y beneficios cognitivos. Como alguien interesado en la salud mental y emocional, estos hongos enriquecerán tu bienestar.",
    "2-3-1-2": "Buscas hongos exóticos que refuercen tu sistema inmunológico. El Chaga y el Turkey Tail son ideales para ti, conocidos por sus propiedades inmunoestimulantes. Como alguien que valora la fortaleza inmunológica, estos hongos enriquecerán tu dieta.",
    "2-3-1-3": "Te interesan hongos exóticos que mejoren tu salud digestiva. El Maitake y el Shiitake son perfectos para ti, conocidos por sus beneficios para la salud intestinal. Como alguien que valora la salud digestiva, estos hongos enriquecerán tu bienestar.",
    "2-3-2-1": "Prefieres hongos gourmet que mejoren tu salud mental y emocional. El Truffle Mushroom y el Porcini son ideales para ti, con perfiles de sabor sofisticados y beneficios para la cognición. Como aficionado a la alta cocina y la salud mental, estos hongos enriquecerán tu bienestar.",
    "2-3-2-2": "Buscas hongos gourmet que refuercen tu sistema inmunológico. El Oyster y el Shiitake son perfectos para ti, con beneficios inmunoestimulantes y sabores gourmet. Como alguien que aprecia la alta cocina y la salud inmunológica, estos hongos serán una excelente adición a tus recetas.",
    "2-3-2-3": "Te interesan hongos gourmet que mejoren tu salud digestiva. El Maitake y el Enoki son ideales para ti, proporcionando beneficios digestivos y sabores gourmet. Como alguien que valora la alta cocina y la salud digestiva, estos hongos enriquecerán tu bienestar.",
    "2-3-3-1": "Prefieres hongos tradicionales que mejoren tu salud mental y emocional. El Shiitake y el Lion's Mane son perfectos para ti, conocidos por sus beneficios cognitivos y de bienestar. Como alguien que aprecia la tradición culinaria y la salud mental, estos hongos enriquecerán tu dieta.",
    "2-3-3-2": "Buscas hongos tradicionales que refuercen tu sistema inmunológico. El Reishi y el Turkey Tail son ideales para ti, conocidos por sus propiedades inmunoestimulantes. Como alguien que valora la tradición culinaria y la salud inmunológica, estos hongos enriquecerán tu bienestar.",
    "2-3-3-3": "Te interesan hongos tradicionales que mejoren tu salud digestiva. El Maitake y el Shiitake son perfectos para ti, conocidos por sus beneficios digestivos. Como alguien que valora la tradición culinaria y la salud digestiva, estos hongos enriquecerán tu dieta.",
    "3-1-1-1": "Buscas hongos para mejorar tu energía y vitalidad. El Cordyceps y el Reishi son perfectos para ti, conocidos por sus propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad, estos hongos enriquecerán tu bienestar.",
    "3-1-1-2": "Prefieres hongos que mejoren tu resistencia física. El Cordyceps y el Lion's Mane son ideales para ti, con beneficios para la resistencia y la salud física. Como alguien que valora la resistencia física, estos hongos serán una excelente adición a tu dieta.",
    "3-1-1-3": "Te interesan hongos que mejoren tu recuperación muscular. El Reishi y el Turkey Tail son perfectos para ti, conocidos por sus beneficios para la recuperación y la salud muscular. Como alguien que valora la recuperación muscular, estos hongos enriquecerán tu bienestar.",
    "3-1-2-1": "Buscas hongos para mejorar tu energía y vitalidad en general. El Cordyceps y el Lion's Mane son ideales para ti, con propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad, estos hongos enriquecerán tu dieta.",
    "3-1-2-2": "Prefieres hongos que mejoren tu resistencia física en el deporte. El Cordyceps y el Shiitake son perfectos para ti, con beneficios para la resistencia y el rendimiento deportivo. Como alguien que valora la resistencia física en el deporte, estos hongos serán una excelente adición a tu dieta.",
    "3-1-2-3": "Te interesan hongos que mejoren tu recuperación física después del ejercicio. El Reishi y el Turkey Tail son ideales para ti, con propiedades recuperadoras y beneficios para la salud muscular. Como alguien que valora la recuperación física, estos hongos enriquecerán tu bienestar.",
    "3-1-3-1": "Buscas hongos para mejorar tu energía y vitalidad de forma natural. El Cordyceps y el Lion's Mane son perfectos para ti, con propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad natural, estos hongos enriquecerán tu dieta.",
    "3-1-3-2": "Prefieres hongos que mejoren tu resistencia física y adaptabilidad. El Cordyceps y el Reishi son ideales para ti, conocidos por sus beneficios para la resistencia y la adaptabilidad física. Como alguien que valora la resistencia física y la adaptabilidad, estos hongos enriquecerán tu bienestar.",
    "3-1-3-3": "Te interesan hongos que mejoren tu recuperación física y equilibrio. El Reishi y el Turkey Tail son perfectos para ti, con propiedades recuperadoras y equilibradoras para la salud física. Como alguien que valora la recuperación física y el equilibrio, estos hongos enriquecerán tu bienestar.",
    "3-2-1-1": "Buscas hongos para mejorar tu energía y vitalidad en una dieta de alto rendimiento. El Cordyceps y el Lion's Mane son perfectos para ti, con propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad en una dieta de alto rendimiento, estos hongos enriquecerán tu dieta.",
    "3-2-1-2": "Prefieres hongos que mejoren tu resistencia física en una dieta equilibrada. El Cordyceps y el Shiitake son ideales para ti, con beneficios para la resistencia y el rendimiento físico equilibrado. Como alguien que valora la resistencia física en una dieta equilibrada, estos hongos serán una excelente adición a tu dieta.",
    "3-2-1-3": "Te interesan hongos que mejoren tu recuperación física en una dieta nutricional. El Reishi y el Turkey Tail son perfectos para ti, con propiedades recuperadoras y beneficios para la salud muscular. Como alguien que valora la recuperación física en una dieta nutricional, estos hongos enriquecerán tu bienestar.",
    "3-2-2-1": "Buscas hongos para mejorar tu energía y vitalidad en una dieta moderada. El Cordyceps y el Lion's Mane son ideales para ti, con propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad en una dieta moderada, estos hongos enriquecerán tu bienestar.",
    "3-2-2-2": "Prefieres hongos que mejoren tu resistencia física en una dieta equilibrada. El Cordyceps y el Shiitake son perfectos para ti, con beneficios para la resistencia y el rendimiento físico equilibrado. Como alguien que valora la resistencia física en una dieta equilibrada, estos hongos enriquecerán tu dieta.",
    "3-2-2-3": "Te interesan hongos que mejoren tu recuperación física en una dieta balanceada. El Reishi y el Turkey Tail son ideales para ti, con propiedades recuperadoras y beneficios para la salud muscular. Como alguien que valora la recuperación física en una dieta balanceada, estos hongos enriquecerán tu bienestar.",
    "3-2-3-1": "Buscas hongos para mejorar tu energía y vitalidad en una dieta básica. El Cordyceps y el Lion's Mane son perfectos para ti, con propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad en una dieta básica, estos hongos enriquecerán tu bienestar.",
    "3-2-3-2": "Prefieres hongos que mejoren tu resistencia física en una dieta básica. El Cordyceps y el Shiitake son ideales para ti, con beneficios para la resistencia y el rendimiento físico básico. Como alguien que valora la resistencia física en una dieta básica, estos hongos enriquecerán tu dieta.",
    "3-2-3-3": "Te interesan hongos que mejoren tu recuperación física en una dieta sencilla. El Reishi y el Turkey Tail son perfectos para ti, con propiedades recuperadoras y beneficios para la salud muscular. Como alguien que valora la recuperación física en una dieta sencilla, estos hongos enriquecerán tu bienestar.",
    "3-3-1-1": "Buscas hongos para mejorar tu energía y vitalidad en una dieta avanzada. El Cordyceps y el Lion's Mane son ideales para ti, con propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad en una dieta avanzada, estos hongos enriquecerán tu bienestar.",
    "3-3-1-2": "Prefieres hongos que mejoren tu resistencia física en una dieta avanzada. El Cordyceps y el Shiitake son perfectos para ti, con beneficios para la resistencia y el rendimiento físico avanzado. Como alguien que valora la resistencia física en una dieta avanzada, estos hongos enriquecerán tu dieta.",
    "3-3-1-3": "Te interesan hongos que mejoren tu recuperación física en una dieta avanzada. El Reishi y el Turkey Tail son ideales para ti, con propiedades recuperadoras y beneficios para la salud muscular. Como alguien que valora la recuperación física en una dieta avanzada, estos hongos enriquecerán tu bienestar.",
    "3-3-2-1": "Buscas hongos para mejorar tu energía y vitalidad en una dieta intermedia. El Cordyceps y el Lion's Mane son perfectos para ti, con propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad en una dieta intermedia, estos hongos enriquecerán tu bienestar.",
    "3-3-2-2": "Prefieres hongos que mejoren tu resistencia física en una dieta intermedia. El Cordyceps y el Shiitake son ideales para ti, con beneficios para la resistencia y el rendimiento físico intermedio. Como alguien que valora la resistencia física en una dieta intermedia, estos hongos enriquecerán tu dieta.",
    "3-3-2-3": "Te interesan hongos que mejoren tu recuperación física en una dieta intermedia. El Reishi y el Turkey Tail son perfectos para ti, con propiedades recuperadoras y beneficios para la salud muscular. Como alguien que valora la recuperación física en una dieta intermedia, estos hongos enriquecerán tu bienestar.",
    "3-3-3-1": "Buscas hongos para mejorar tu energía y vitalidad en una dieta básica. El Cordyceps y el Lion's Mane son ideales para ti, con propiedades energizantes y adaptogénicas. Como alguien que valora la energía y la vitalidad en una dieta básica, estos hongos enriquecerán tu bienestar.",
    "3-3-3-2": "Prefieres hongos que mejoren tu resistencia física en una dieta básica. El Cordyceps y el Shiitake son perfectos para ti, con beneficios para la resistencia y el rendimiento físico básico. Como alguien que valora la resistencia física en una dieta básica, estos hongos enriquecerán tu dieta.",
    "3-3-3-3": "Te interesan hongos que mejoren tu recuperación física en una dieta básica. El Reishi y el Turkey Tail son ideales para ti, conocidos por sus propiedades recuperadoras y beneficios para la salud muscular. Como alguien que valora la recuperación física en una dieta básica, estos hongos enriquecerán tu bienestar."
};

// Esta parte genera la estructura de rutas de respuestas y diagnósticos formateados
let rutas_de_respuestas = [];
for (let i1 = 0; i1 < niveles["nivel1"].length; i1++) {
    let nivel1 = niveles["nivel1"][i1];
    for (let i2 = 0; i2 < niveles["nivel2"][nivel1].length; i2++) {
        let nivel2 = niveles["nivel2"][nivel1][i2];
        for (let i3 = 0; i3 < niveles["nivel3"][nivel2].length; i3++) {
            let nivel3 = niveles["nivel3"][nivel2][i3];
            for (let i4 = 0; i4 < niveles["nivel4"][nivel3].length; i4++) {
                let nivel4 = niveles["nivel4"][nivel3][i4];
                let id_ruta = `${i1+1}-${i2+1}-${i3+1}-${i4+1}`;
                let ruta = {
                    "id": id_ruta,
                    "respuestas": {
                        "nivel1": nivel1,
                        "nivel2": nivel2,
                        "nivel3": nivel3,
                        "nivel4": nivel4
                    }
                };
                rutas_de_respuestas.push(ruta);
            }
        }
    }
}

let diagnosticos_formateados = [];
for (const [key, value] of Object.entries(diagnosticos)) {
    diagnosticos_formateados.push({"id": key, "diagnostico": value});
}

let base_de_datos = {
    "rutas_de_respuestas": rutas_de_respuestas,
    "diagnosticos": diagnosticos_formateados
};

// Aquí comienza el código que va en script.js para la implementación en la página web

// Función para generar la lista de preguntas
function generarListaPreguntas() {
    const listaPreguntas = document.getElementById("lista-preguntas");
    for (const clave in niveles) {
        const pregunta = document.createElement("li");
        pregunta.textContent = niveles[clave];
        listaPreguntas.appendChild(pregunta);
    }
}

// Función para generar la lista de diagnósticos
function generarListaDiagnosticos() {
    const listaDiagnosticos = document.getElementById("lista-diagnosticos");
    for (const clave in diagnosticos) {
        const diagnostico = document.createElement("li");
        diagnostico.textContent = diagnosticos[clave];
        listaDiagnosticos.appendChild(diagnostico);
    }
}

// Llamamos a las funciones para generar las listas al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    generarListaPreguntas();
    generarListaDiagnosticos();
});
