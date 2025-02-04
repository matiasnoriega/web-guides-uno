import GIT from "./git.json";
import BDD from "./bdd.json";

const Web = [
    {
        title: "La Web",
        content: [
            {
                name: "Un poco de Historia",
                description:
                    "¿Qué es la Web?, ¿Quién la creó?, ¿Cómo surgió?, ¿Cómo evolucionó?",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Funcionamiento de la Web",
                description:
                    "¿Cómo funciona?, ¿Qué es HTTP?, ¿Cuál es la función del navegador?",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "",
                void: true,
            },
        ],
    },
    {
        title: "HTML",
        content: [
            {
                name: "Introducción",
                description:
                    "¿Qué es HTML?, ¿Qué son las Etiquetas?, Estructura básica, Atributos de Etiquetas",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Etiquetas importantes",
                description:
                    "Textos, Listas, Div, Imágenes, Tablas, Formularios",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Etiquetas Semánticas",
                description:
                    "header, article, section, main, nav, aside, footer, details, figure...",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Contenidos Avanzados",
                description: "Metadata, SEO, Accesibilidad Web",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "",
                void: true,
            },
        ],
    },
    GIT,
    {
        title: "CSS",
        content: [
            {
                name: "Introducción",
                description:
                    "¿Qué es CSS?, Sintaxis, Selectores, Especificidad",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Colorear",
                description: "Medidas de Colores, Backgrounds, Bordes, Sombras",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Box Display",
                description:
                    "Box Display, Medidas de Tamaños, Márgenes, Paddings, Width/Height",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Textos",
                description: "Alineamiento, Tamaños, Fuentes, Decoración",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Web Layout",
                description:
                    "Diseño e Implementación, Alinear Horizontal/Vertical",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Responsive Design",
                description: "¿Qué es?, Max-width, Media Queries, calc",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Imagenes",
                description: "Overflow, Responsive",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Responsive Box Display",
                description: "FlexBox, Grid",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Contenidos Avanzados",
                description:
                    "Gradients, Transitions, Animations, Transforms, Frameworks (Tailwind, Bulma, Bootstrap)",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "",
                void: true,
            },
        ],
    },
    {
        title: "JavaScript",
        content: [
            {
                name: "Introducción",
                description:
                    "Nacimiento, Usos, Bondades del lenguaje, Sintaxis básica, ¿Qué significa inferencia de tipo?",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Bases",
                description:
                    "Operadores lógicos, matemáticos, Manejo de strings, Condicionales, Operador ternario, Bucles, Funciones",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "JavaScript Funcional",
                description:
                    "Closure, Funciones Anónimas/Arrow Functions, High Order Functions, First Class Functions, Funciones Puras, Manejo de Arrays/Set/Maps, Callbacks",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "JavaScript Orientado a Objetos",
                description: "Objetos, Herencia/Extensión",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "JavaScript y el DOM",
                description:
                    "¿Qué es el DOM?, Interacción con el DOM, Event Listeners",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "JavaScript Asincrónico",
                description:
                    "Asincronismo, Event loop, Promesas, Encadenamiento de Promesas, Async/Await",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "JavaScript y el Backend",
                description: "JSON, Request HTTP, LocalStorage",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "",
                void: true,
            },
        ],
    },
    {
        title: "Preprocesadores CSS",
        content: [
            {
                name: "Introducción",
                description: "¿Qué es un Preprocesador?, Transpilar, SCSS/SASS",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Bases",
                description: "Variables, Nesting/Anidamiento, Módulos, Mixins",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Metodología CSS",
                description:
                    "¿Qué son las Metodologías CSS y por qué aplicarlas?, BEM",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "SCSS/SASS Avanzado",
                description:
                    "Herencia/Extensión, Operadores, Control de Flujo, Functions",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "",
                void: true,
            },
        ],
    },
    {
        title: "Frameworks/Bibliotecas JS",
        content: [
            {
                name: "Introducción",
                description:
                    "¿Qué es un Framework/Biblioteca JS?, ¿Por qué utilizar uno?, Choose One(React-Vue-Angular-Svelte)",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Bases de cada uno a aprender",
                description:
                    "Componentes y Atomic Design, Router y Navegación, Ciclo de Vida de Componentes, Comunicación entre Componentes",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Adentrándose un poquito mas",
                description:
                    "Formularios, HTTP y Asincronismo, Bibliotecas de Estilos",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Mas y mas",
                description:
                    "Testing, TypeScript, Server Side Rendering, GraphQL",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Contenidos Avanzados",
                description:
                    "Mobile Apps, Desktop Apps, Progressive Web Apps, Web Assembly",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "",
                void: true,
            },
        ],
    },
    BDD,
    {
        title: "Backend",
        content: [
            {
                name: "Introducción",
                description:
                    "¿Qué es el Backend?, Elegir Lenguaje(JS, Py, Java, Go, Ruby, PHP, C#, Rust...), ¿Qué es una API REST?, Postman",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Bases de cada uno a aprender",
                description:
                    "Sintaxis y bases de programación, Frameworks de backend, Modelos - Controladores - Rutas, ORMs, Hacer un CRUD, Manejo de Archivos, CORS",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Adentrándose un poquito mas",
                description:
                    "Autenticaciones, Enviar Mails, Testing, GraphQL, WebSockets",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "Contenidos Avanzados",
                description: "Microservicios, Docker",
                links: [
                    { key: "", href: "" },
                    { key: "", href: "" },
                ]
            },
            {
                name: "",
                void: true,
            },
        ],
    },
];
export default Web;
