let banner, popular, shows, movies, cartoon;
let bannerDiv, popularDiv, moviesDiv, cartoonDiv, showsDiv;

const loadData = () => {
    var xhr = new XMLHttpRequest();
    xhr.onload = listenToReuest;
    xhr.onerror = reqError;
    xhr.open('get', 'javaScript/data.json', true)
    xhr.send();
}

window.onload = loadData();

function listenToReuest() {
    banner = JSON.parse(this.responseText).banners;
    popular = JSON.parse(this.responseText).popularShows;
    cartoon = JSON.parse(this.responseText).cartoons;
    shows = JSON.parse(this.responseText).series;
    movie = JSON.parse(this.responseText).movies;
    console.log(banner);
    console.log(cartoon);

    bannerDiv = $('#banner');
    console.log(bannerDiv)
    movieDiv = $('#movie');
    cartoonDiv = $('#container');
    console.log(cartoonDiv);
    showsDiv = $('#shows');
   
    showBanner(banner);
    showMovie(movie);
    showCartoon(cartoon);
    showShows(shows);



}

function showBanner(data) {
    var bannerCard = document.createElement("div");
    let bannerWrap = `<div class="bannerSection">
                    <div class="bannerSlide">
                            <div class="owl-carousel carousel-nav-center" id="hero-carousel">`;

    var bannerCardItem = '';
    data.forEach(function (item, i) {
        var movie = item.movie;
        var hd = item.hd;
        var duration = item.duration;
        var age = item.age;
        var image = item.image;
        var rating = item.rating;
        var info = item.info;



        bannerCardItem = `${bannerCardItem} <div  class="bannerSlideItem">                                            
                                                <img alt="${movie}" src="${image}" >
                                                <div class="overlay"></div>
                                                <div class="bannerSlideContent">
                                                    <div class="itemWrap">
                                                        <div class="itemTitle downTransition">
                                                                <h1>${movie}</h1>
                                                        </div>
                                                        <div class="bannerInfo downTransition lateTrans2 ">
                                                            <div class="movieInfo downTransition lateTrans2">                                   
                                                            <i class='bx bxs-star bx-flashing'></i>
                                                                <span>${rating}</span>
                                                            </div>
                                                            <div class="movieInfo ">
                                                            <i class='bx bx-time-five bx-spin' style='color:#f31313' ></i>
                                                                <span>${duration}</span>
                                                            </div>
                                                            <div class="movieInfo">
                                                                <span>${hd}</span>
                                                            </div>
                                                            <div class="movieInfo">
                                                                <span>${age}</span>
                                                            </div>
                                                            <div class="contentDescription downTransition lateTrans4">
                                                                ${info}
                                                            </div>
                                                            <div class="itemAction downTransition lateTrans6">
                                                                <a class="profileText profileTextHover">
                                                                <span>Preview! <i class='bx bxs-right-arrow bx-fade-right' style='color:#f50505'  ></i></span>
                                                                </a>
                                                            </div>
                                                            <div class="video">
                                                                <video width="100%" controls>
                                                                <source src="video/trailer.mp4" type="video/mp4">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;

        if (i + 1 === data.length  ) {
        
            bannerCard.innerHTML = `${bannerWrap}${bannerCardItem}</div></div></div>`;
            bannerDiv.append(bannerCard);
        }

    });

}//end of showBanner


function showMovie(data) {
    let movieCard = document.createElement("div");
    let movieWrap = `<div class="movieSlide" >
                        <div class="owl-carousel" id="movieSlide">`;
    var movieCardItem = '';
    
    data.forEach(function (item, i) {
        var movie = item.movie;
        var hd = item.hd;
        var duration = item.duration;
        var age = item.age;
        var image = item.image;
        var rating = item.rating;

    
        movieCardItem =` ${ movieCardItem } <div class="movieItem">
                                                <div class="movieImg"><img src="${image}" alt="${movie}"></div>
                                                <div class="movieContent">
                                                    <div class="movieTitle">
                                                        ${movie}
                                                    </div>
                                                    <div class="movieInfos">
                                                        <div class="movieInfo">
                                                            <i class="bx bxs-star bx-flashing"></i>
                                                            <span>${rating}</span>
                                                        </div>
                                                        <div class="movieInfo">
                                                            <i class="bx bxs-time bx-spin"></i>
                                                            <span>${duration}</span>
                                                        </div>
                                                        <div class="movieInfo">
                                                            <span>${hd}</span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>`

                if(i+1===data.length && item.type==="movies"){
                    movieCard.innerHTML=`${movieWrap}${movieCardItem}</div></div>`
                    movieDiv.append(movieCard)

                }
                if(i+1===data.length && item.type==="cartoons"){
                    movieCard.innerHTML=`${movieWrap}${movieCardItem}</div></div>`
                    cartoonDiv.append(movieCard)
                }
                if(i+1===data.length && item.type==="series"){
                    movieCard.innerHTML=`${movieWrap}${movieCardItem}</div></div>`
                    showsDiv.append(movieCard)
                }

               

    });
}
function showCartoon(data) {
    let cartoonCard = document.createElement("div");
    let cartoonWrap = `<div class="cartoonSlide owl-carousel owlcarousel-nav-center" >`;
    var cartoonCardItem = '';
    data.forEach(function (item, i) {
        var movie = item.movie;
        var hd = item.hd;
        var duration = item.duration;
        var age = item.age;
        var image = item.image;
        var rating = item.rating;


        cartoonCardItem =` ${ cartoonCardItem } <a class="cartoonItem">
                                                <div class="movieImg"><img src="${image}" alt="${movie}"></div>
                                                <div class="movieContent">
                                                    <div class="movieTitle">
                                                        ${movie}
                                                    </div>
                                                    <div class="movieInfos">
                                                        <div class="movieInfo">
                                                            <i class="bx bxs-star bx-flashing"></i>
                                                            <span>${rating}</span>
                                                        </div>
                                                        <div class="movieInfo">
                                                            <i class="bx bxs-time bx-spin"></i>
                                                            <span>${duration}</span>
                                                        </div>
                                                        <div class="movieInfo">
                                                            <span>${hd}</span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </a>`

               
                if(i+1===data.length){
                    cartoonCard.innerHTML=`${cartoonWrap}${cartoonCardItem}</div></div>`
                    cartoonDiv.append(cartoonCard)
                }
               

               

    });
}

function showShows(data) {
    let showsCard = document.createElement("div");
    let showsWrap = `<div class="showSlide owl-carousel owlcarousel-nav-center" >`;
    var showsCardItem = '';
    data.forEach(function (item, i) {
        var movie = item.movie;
        var hd = item.hd;
        var duration = item.duration;
        var age = item.age;
        var image = item.image;
        var rating = item.rating;


        showsCardItem =` ${ showsCardItem } <a class="showItem">
                                                <div class="movieImg"><img src="${image}" alt="${movie}"></div>
                                                <div class="movieContent">
                                                    <div class="movieTitle">
                                                        ${movie}
                                                    </div>
                                                    <div class="movieInfos">
                                                        <div class="movieInfo">
                                                            <i class="bx bxs-star bx-flashing"></i>
                                                            <span>${rating}</span>
                                                        </div>
                                                        <div class="movieInfo">
                                                            <i class="bx bxs-time bx-spin"></i>
                                                            <span>${duration}</span>
                                                        </div>
                                                        <div class="movieInfo">
                                                            <span>${hd}</span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </a>`

               
                if(i+1===data.length){
                    showsCard.innerHTML=`${showsWrap}${showsCardItem}</div></div>`
                    showsDiv.append(showsCard)
                }
               

               

    });
}


function reqError(err) {
    console.log('Fetch Error ', err);
}