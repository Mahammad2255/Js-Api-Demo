const API_KEY = 'api_key=215c81453c5996ad4473b86514974f4c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const search = document.getElementById('search');
const main = document.getElementById('main');
getMovies(API_URL);
function getMovies(url){
    fetch(url).then(res => res.json()).then(data=>{
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        
        <img src="${IMG_URL + poster_path}" alt="${title}">


        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
    
        <div class="overview">
            ${overview}
        </div>

        `

        main.appendChild(movieEl);
    });

}




function getColor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote >=5){
        return 'orange'
    }
    else{
        return 'red'
    }
}



