'use strict';

//HTML ELEMENTS IN CONSTANTS

const buttonEl = document.querySelector('.button');
const inputEl = document. querySelector('.input');
const listEl = document.querySelector('.list');
const listFavEl = document.querySelector('.list_fav');
//CON LA LINEA SS EL BUTTON SEARCH NO BUSCA
// const localFavEl = JSON.parse (localStorage.getItem ('favorite')) || []; //Creo la constante para recoger la lista de favoritos y le digo que si tiene guardado en el local storage el item 'favorite' me coja ese y si no tiene nada, que sea un array vacio.


// CALL TO THE API


function showpPrintTheData(){
  // event.preventDefault();
  let userinput = inputEl.value;
  
  fetch(`http://api.tvmaze.com/search/shows?q=${userinput}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){ //todo lo que haga lo tengo que hacer dentro de la funcion en el ambito de data, porque todo el tiempo estoy trabajando con la respuesta que me devuelve data que es un array de objetos. Si lo pongo debajo y uso sus datos, me va a decir que no existe.
      // PRINT THE TITLES AND IMAGES     

      listEl.innerHTML = ''; //con la lista vacia le digo que con cada busqueda la lista ul se me quede vacia antes de cada nueva busqueda.

      // listFavEl.innerHTML = ''; //No hace falta, porque quiero que se me almacenen constantemente en favoritos, no quiero vaciar el array.

      for (let i = 0; i < data.length; i++){
        console.log(data);
        const showImage = data[i].show.image;
        console.log (showImage);
        const showName = data[i].show.name;
        const showId = data[i].show.id;
        // console.log(Showid);

        const newLi = document.createElement('li');
        newLi.setAttribute ('class', 'item_list');
        newLi.setAttribute ('id', showId);
        // const contentId = document.createTextNode (showId);

        const newTitle = document.createElement ('h3');
        const contentnewTitle = document.createTextNode (showName);

        const newImg = document.createElement ('img');
        // const contentnewImg = document.createTextNode (showImageMedium);

        
        if (showImage === null){
          newImg.setAttribute('src', 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV');
        } else {newImg.setAttribute('src', showImage.medium);}
       
        listEl.appendChild (newLi);
        newLi.appendChild (newTitle);
        newLi.appendChild (newImg);

        newTitle.appendChild(contentnewTitle);
      }

      //Sigo dentro de data pero no dentro del bucle

      const resultList = document.querySelectorAll('.item_list'); //me devuele un array de objetos donde cada objeto es el li, uno por cada resultado
      console.log (resultList);

      for (let index = 0; index < resultList.length; index++){
        resultList[index].addEventListener ('click', handlerFavorite);
      }

      // ADD FAVOURITE
      function handlerFavorite (event) {
        const clicked = event.currentTarget;
        console.log (clicked); //console.log me da solo el elemento pero...console.dir me da el mismo elemento pero como objeto y esto si que lo puedo utilizar, para buscar los datos que necesito y acceder a ellos a traves de las claves del objeto.
        console.dir (clicked);
        clicked.classList.toggle('favorite'); //1 paso completado, nos pone la clase favorito si click

        const showImageFav = clicked.lastChild.src;
        console.log(showImageFav);

        const showNameFav = clicked.outerText;
        console.log (showNameFav);

        const showIdFav = clicked.id;

        if (clicked.classList.contains('favorite')){
          const itemFav = document.createElement ('li');
          const imgFav = document.createElement ('img');
          imgFav.setAttribute('src', showImageFav);
          if (showImageFav === null){
            imgFav.setAttribute('src', 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV');
          }
          const titleFav = document.createElement ('h4');
          const contentNewTitleFav = document.createTextNode (showNameFav);
        
          listFavEl.appendChild(itemFav);
          itemFav.appendChild(imgFav);
          itemFav.appendChild(titleFav);
          titleFav.appendChild(contentNewTitleFav);
        }
        
        // // SAVE IN LOCAL STORAGE
        // //Creo un objeto con los datos que he sacado

        // const localObject = {
        //   'name': showNameFav,
        //   'image': showImageFav,
        //   'id': showIdFav,
        // };
        // console.log(localObject);

        // localFavEl.push(localObject); //Al array vacio le añado cada serie como objeto

        // localStorage.setItem ('favorite', JSON.stringify(localFavEl));// Guardo el array de objetos con el nombre 'favorite' con stringify para convertirlo en  cadena, ya que en el local storage no se pude guardar un array, asi que con strinfigy lo guardo en cadena.

      }
    });
}

buttonEl.addEventListener('click', showpPrintTheData);




//# sourceMappingURL=main.js.map
