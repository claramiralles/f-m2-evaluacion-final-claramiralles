'use strict';

console.log('funciona');

// aplicación web de búsqueda de series de TV
//maquetación con HTML y Sass, tras JavaScript, (evaluacion x JS, no por html y csss) 


// Vamos de definir los distintos hitos del ejercicio:
// 1. Estructura básica
// La aplicación de búsqueda de series consta de dos partes
// 1. Un campo de texto y un botón para buscar series por su título
// 2. Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título
// Para realizar la estructura básica del ejercicio usaremos la base de gulp del Adalab Web Starter Kit.

// 2. Búsqueda
// Al hacer clic sobre el botón de 'Buscar', nuestra aplicación debe conectarse al API abierto de
// TVMaze para búsqueda de series. Os recomendamos echar un vistazo al JSON que devuelve una
// petición de búsqueda para ver qué datos de los que nos devuelve necesitamos. Para construir la
// URL de búsqueda necesitaremos recoger el texto que ha introducido el usuario en el campo de

// búsqueda. 

// Por cada show contenido en el resultado de búsqueda debemos pintar una tarjeta
// donde mostramos una imagen de la serie y el título.
// NOTA: Para pintar la información en la página puedes elegir hacerlo de forma básica con
// innerHTML o manipulando de forma avanzada el DOM
// Algunas de las series que obtenemos en los resultados no tienen imagen. En ese caso debemos
// mostrar una imagen de relleno. Podemos crear una imagen de relleno con el servicio de
// placeholder.com donde en la propia URL indicamos el tamaño, colores, texto:
// https://via.placeholder.com/210x295/ffffff/666666/?text=TV
// 3. Favoritos
// Una vez aparecen los resultados de búsqueda, podremos indicar cuáles son nuestras series
// favoritas. Para ello, al hacer clic sobre un resultado el color de fondo y el de fuente se
// intercambian.
// Además, debes crear un listado (array) con las series favoritas que almacenamos en una variable.
// Este listado lo mostraremos en la parte izquierda de la pantalla, debajo del formulario de búqueda.
// Para terminar, si volvemos a realizar una nueva búsqueda, los favoritos se irán acumulando en
// nuestra lista.
// 4. Almacenamiento local
// Vamos a almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página
// el listado de favoritos se mantiene.
// 5. BONUS: Afinar la maquetación
// Una vez terminada la parte de interacción, podemos centrarnos en la parte de maquetación donde
// tenéis libertad para decidir los estilo. En cualquier caso os dejamos una propuesta gráfica.
// 6. BONUS: Borrar favoritos
// Como bonus, os proponemos la opción de borrar favoritos. De esta forma, al hacer clic sobre el
// icono de la 'x' al lado de los favoritos, podremos borrarlos (de nuestra lista y del localStorage).
// Para terminar de rematar nuestra app de series, nos gustaría poder añadir/quitar favorito al hacer
// clic sobre una serie. Y que, si realizamos una nueva búsqueda y sale una serie que ya es favorita,
// aparezca ya resaltada en los resultados de búsqueda (con colores de fondo y texto
// intercambiados).
// Y ya sería fantástico si al final de la lista de favoritos tenemos un botón para borrarlos todos.
// Entrega
// La entrega del ejercicio se realizará en el mismo repositorio que has creado al comienzo del
// ejercicio. Hemos pautado 12 horas de dedicación al ejercicio, por lo que el límite de entrega es
// turno de mañana: próxima sesión a las 15:00h
// turno de tarde: próxima sesión a las 22:00h
// Normas
// Este ejercicio está pensado para que lo realices de forma individual en clase, pero podrás consultar
// tus dudas con la profesora y tus compañeras si lo consideras necesario. Aún facilitando la
// comunicación entre compañeras, durante la prueba está prohibido copiar código de otra persona o
// acceder a su portátil. Confiamos en tu responsabilidad. La evaluación es una buena oportunidad
// para conocer cómo estás progresando, saber qué temas debes reforzar durante las siguientes
// semanas y cuáles dominas. Te recomendamos que te sientas cómoda con el ejercicio que
// entregues y no envíes cosas copiadas que no entiendas. Si detectamos que has entregado código
// copiado de una compañera, no evaluaremos tu ejercicio y pasarás directamente a la re‒evaluación
// del módulo. Tu objetivo no debería ser pasar la evaluación sino convertirte en programadora, y
// esto debes tenerlo claro en todo momento. Una vez entregado el ejercicio realizarás una revisión
// del mismo con la profesora (30 minutos), que te pedirá que expliques las decisiones tomadas para
// realizarlo y te propondrá realizar cambios in situ sobre tu solución. Al final, tendrás un feedback
// sobre aspectos a destacar y a mejorar en tu ejercicio, y sabrás qué objetivos de aprendizaje has
// superado de los listados a continuación.
// Criterios de evaluación
// Vamos a listar los criterios de evaluación de este ejercicio. Si no superas al menos el 80% de estos
// criterios o no has superado algún criterio clave (marcados con *) te pediremos que realices una re‒
// evaluación con el fin de que termines el curso mejor preparada y enfrentes tu primera experiencia
// profesional con más seguridad. En caso contrario, estás aprendiendo al ritmo que hemos pautado
// para poder afrontar los conocimientos del siguiente módulo.
// JavaScript básico
// Crear código JavaScript con sintaxis correcta, bien estructurado e indentado*
// Usar constantes/variables para almacenar información y re‒asignar valores*
// Usar condicionales para ejecutar acciones distintas en función de una condición
// Saber trabajar con listados de datos (arrays)*
// Usar funciones para estructurar el código
// Saber modificar la información del DOM para añadir contenido dinámico*
// Saber escuchar eventos del DOM y actuar en consecuencia*
// AJAX y APIs
// Crear peticiones con fetch y promesas*
// Saber trabajar correctamente con la respuesta del servidor*
// Gestionar información en formato JSON
// Usar el localStorage para guardar información en el navegador
// Issues
// Haber resuelto las issues de la evaluación intermedia
// Otros criterios a tener en cuenta
// Usar inglés para nombres de variables, funciones, clases, mensajes de commit, nombres de
// ficheros
// El repositorio de GitHub debe tener README y un enlace a la web en GitHub Pages accesible
// desde la página principal
// ¡Al turrón!

const button = document.querySelector('.button');
const input = document. querySelector ('.input');
const lista = document.querySelector ('.lista');
const carteldelaserie = document.querySelector ('.carteldelaserie');
const titulodelaserie = document.querySelector ('.titulodelaserie');

console.log (button, input, lista, carteldelaserie, titulodelaserie);

function handlerFunction(){
  fetch(' http://api.tvmaze.com/search/shows?q=girls')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      document.body.innerHTML = data.result;
    });
}

button.addEventListener('click', handlerFunction);
input.addEventListener ('click', handlerFunction);