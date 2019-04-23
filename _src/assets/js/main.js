'use strict';

//HTML ELEMENTS IN CONSTANTS

const buttonEl = document.querySelector('.button');
const inputEl = document. querySelector('.input');
const listEl = document.querySelector('.list');

// CALL TO THE API

function showpPrintTheData(){
  event.preventDefault();
  let userinput = inputEl.value;
  
  fetch(`http://api.tvmaze.com/search/shows?q=${userinput}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      console.log('Esta de arriba es la respuesta de data');

      // PRINT THE TITLES AND IMAGES     

      listEl.innerHTML = '';
      for (let i = 0; i < data.length; i++){
        // console.log(data[i].show.name);
        // console.log(data[i].show.image.medium);

        const Showimage = data[i].show.image;
        const Showname = data[i].show.name;
        const Showid = data[i].show.id;
        console.log(Showid);

        if (Showimage === null){
          listEl.innerHTML += (`<li class='item_li' id='${Showid}'> <h3>${Showname}</h3> <img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"> </li>`);
        } else {
          listEl.innerHTML += (`<li class='item_li' id='${Showid}'> <h3>${Showname}</h3> <img class='image_size' src= '${Showimage.medium}'> </li>`);
        }
      }
      listEl.innerHTML = listEl.innerHTML; selectTheFavourite (); 
    });
}

buttonEl.addEventListener('click', showpPrintTheData);

// SAVE IN LOCAL STORAGE
// ADD FAVOURITE

function convertToFavStoreInCache(event){ //Listens if serie clicked (currentTarget) and adds class favourite.  Later it storages it into the cache
  const serieclicked = event.currentTarget;
  serieclicked.classList.toggle('favourite');

  const idSeries = document.querySelectorAll ('item_li'); //Saves all the items of the list in an array.

  console.log (idSeries);

  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; //The variable itemsArray gets the items of the list that are in an array. These items were saved in the localStorage two lines below, with the localStorage.setItem. The condition is that if the items are storaged in the browser cache, they should be 

  itemsArray.push(idSeries);//The push method includes in the array created in the local storage the arrray with the id of series that was created before with qsAlll in const idSeries.

  localStorage.setItem('items', JSON.stringify(itemsArray)); //Gets the array of items, converts it into string and saves it in the local storage as 'items'.
}

function selectTheFavourite() { // Function that selects only the items of series that have been clicked. It saves the items into an array and goes through them with a loop that executes in each of them and Eventlistener if the item has been clicked and excutes on that concrete item the function that adds to fav and stores in cache.
  const showItems = document.querySelectorAll('.item_li'); //storages the series into an array (declared locally, just in this function, not globally)
  for ( const item of showItems) { // loop that goes through the array listening to which serie has been clicked and if clicked it executes the function that adds the class favourite and stores them into the browser cache
    item.addEventListener('click', convertToFavStoreInCache);
  }
}


