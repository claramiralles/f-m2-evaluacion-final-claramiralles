'use strict';

console.log('funciona');

const button = document.querySelector('.button');
const input = document. querySelector ('.input');
const lista = document.querySelector ('.lista');


// let arrayResultados = [];


function handlerFunction(){
  let userinput = input.value;
  lista.innerHTML = '';
  fetch(`http://api.tvmaze.com/search/shows?q=${userinput}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      console.log('Esta de arriba es la respuesta de data');

      for (let i = 0; i < data.length; i++){
        // console.log(data[i].show.name);
        // console.log(data[i].show.image.medium);

        const image = data[i].show.image;
        const name = data[i].show.name;

        if (image === null){
          lista.innerHTML += (`<li> <h2>${name}</h2> <img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"> </li>`);
        } else {
          lista.innerHTML += (`<li> <h2>${name}</h2> <img src= '${image.medium}'> </li>`);
        }
      }
    });
}

button.addEventListener('click', handlerFunction);


// localStorage.setItem('film', JSON.stringify(arrayResultados));
//
//Ahora mismo se me imprime solo una vez. Quiero que se me imprima tantas veces como elementos hay en el array. Quiero que el bucle recorra todo el array y en cada elemento me de el name y el medium. y que vaya imprimiendo lo que tiene mas lo nuevo que le doy en el siguiente elemento.


// En lista debe ir el arrray de resultados, que debe recorrerlo para darme de cada uno de los objetos del array su image y su name.


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



// Criterios de evaluación
// Vamos a listar los criterios de evaluación de este ejercicio. Si no superas al menos el 80% de estos criterios o no has superado algún criterio clave (marcados con *) te pediremos que realices una re‒evaluación 

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
// Usar inglés para nombres de variables, funciones, clases, mensajes de commit, nombres de ficheros
// El repositorio de GitHub debe tener README y un enlace a la web en GitHub Pages accesible desde la página principal

// ¡Al turrón!


//# sourceMappingURL=main.js.map
