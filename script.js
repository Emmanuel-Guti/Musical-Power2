const app = new Vue({
    el: '#app',
    data() {
        return {
            titulo: 'Musical Power',
            nombre: '',
            nombreInput: '', 
            preguntas: [
                {
                    texto: 'Luis Miguel lanzó un álbum de boleros que originalmente se iba a titular Romances del Sol, pero finalmente se quedó solo como Romances.',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'La banda Zoé fue fundada en el mismo año que Linkin Park.',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'Molotov ganó su primer Grammy Latino con su canción "Frijolero".',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'Bad Bunny trabajó en un supermercado antes de dedicarse a la música y se inspiró en sus compañeros para algunas letras.',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'La cantante Julieta Venegas es autodidacta en varios instrumentos, incluyendo el acordeón y el piano.',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'Junior H fue uno de los primeros artistas en popularizar los "corridos tumbados".',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'La banda Fuerza Regida comenzó su carrera tocando en bares en Los Ángeles antes de tener éxito en plataformas de streaming.',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'Alfredo Olivas lanzó su álbum El Día de Muertos en el año 2020, presentando canciones que exploran la tradición del Día de Muertos en México.',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'Linkin Park inicialmente tenía otro nombre antes de elegir el actual, y lo cambiaron en honor al Lincoln Park en Santa Mónica, California.',
                    respuestas: ['Verdadero', 'Falso']
                },
                {
                    texto: 'Caifanes lanzó una versión remasterizada de su álbum Caifanes en el que se incluyen canciones inéditas y grabaciones de sus primeros conciertos.',
                    respuestas: ['Verdadero', 'Falso']
                }
            ],
            respuestas: [],
            resultados: JSON.parse(localStorage.getItem('resultados')) || {},
        }
    },
    methods: {
        mostrarPreguntas() {
            this.nombre = this.nombreInput; 
            const participantes = JSON.parse(localStorage.getItem('participantes')) || [];
            if (!participantes.includes(this.nombre)) {
                participantes.push(this.nombre);
                localStorage.setItem('participantes', JSON.stringify(participantes));
            }
            this.respuestas = new Array(this.preguntas.length).fill('');
            this.nombreInput = '';
        },
        calcularResultados() {
            let puntos = 0;
            const respuestasCorrectas = ['Verdadero', 'Falso', 'Verdadero', 'Verdadero', 'Verdadero', 'Verdadero', 'Verdadero', 'Verdadero', 'Verdadero', 'Verdadero'];
        
            this.respuestas.forEach((respuesta, index) => {
                if (respuesta === respuestasCorrectas[index]) {
                    puntos++;
                }
            });
        
            this.resultados[this.nombre] = puntos;
            localStorage.setItem('resultados', JSON.stringify(this.resultados));
            
            alert(`Hola, ${this.nombre}. Tu puntuación es: ${puntos} de ${respuestasCorrectas.length}`);
            this.nombre = '';
            this.nombreInput = '';
            this.respuestas = [];
        }
        ,
        borrarParticipantes() {
            localStorage.removeItem('participantes');
            localStorage.removeItem('resultados');
            this.resultados = {};
        }
    }
}); 