

function getBanners(){

  var url = 'https://script.google.com/macros/s/AKfycbyePitxShOm4o20mZC7W5Gh0AVUwoILJu8jiAYsCbRkSHGMI8poFrjIq-pgiGKkUI-TDA/exec';
  var param = '?banners';

  fetch(url.concat(param), {
    method : 'GET',
    mode : 'no-cors'
  })
    .then(res =>{ res.json(); console.log(res);})
    .then(data => {
      
      console.log(data)
      var banner = document.querySelector('div.__banner__');

      var d = data || [];
      banner.src = d[0].link;

    })
    .catch(error => {
      console.log(error);
    });
}

getBanners();


const intervalId = setInterval(changeCenterPopularFiction, 3000);

function changeCenterPopularFiction(){

    var leftCover = document.querySelector("img#__leftPopularFictionCover__");
    var centerCover = document.querySelector("img#__centerPopularFictionCover__");
    var rightCover = document.querySelector("img#__rightPopularFictionCover__");

    var title = document.querySelector("h3.__top3PopularFictionTitle__");
    var genres = document.querySelector("p.__top3PopularFictionGenres");
    var synopsis = document.querySelector("p.__top3PopularFictionSynopsis");

    var temp = centerCover.src;

    centerCover.src = leftCover.src;
    leftCover.src = rightCover.src;
    rightCover.src = temp;

    console.log(centerCover.src);
   
    console.log(centerCover.src.endsWith('another-sample-cover.jpg'));

    if(centerCover.src.endsWith('another-sample-cover.jpg')){
      title.innerText = 'The Rising of the Shield Hero';
      genres.innerHTML = 'Fantasy, Isekai, LitRPG, Adventure';
      synopsis.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem tempora nihil beatae ratione, placeat accusamus quod, dolorum excepturi, reprehenderit odit? Itaque quia facilis excepturi ex incidunt nihil animi voluptatum.';
      
      return;
  
    } else if(centerCover.src.endsWith('other-sample-cover.jpg')){

      title.innerText = "The King's Avatar";
      genres.innerHTML = 'Game, Action, Adventure';
      synopsis.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos asperiores officiis tempore laboriosam non ex repudiandae, corporis consectetur ipsam pariatur nemo, voluptatibus hic dolor rerum! Eius odit fugit ex?';

      return;
    }  

    title.innerText = 'Return of the Frozen Player';
    genres.innerHTML = 'Fantasy, Action, Game';
    synopsis.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vero ad illo omnis adipisci vitae impedit. Quia quaerat reiciendis alias voluptatum odit aut corrupti eligendi maxime mollitia tenetur? Obcaecati, architecto.';
     

    
  }