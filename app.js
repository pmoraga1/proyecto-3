const formulario = document.getElementById('formulario')
const inputDeTexto = document.getElementById('inputDeTexto')
const movieGrid = document.getElementById('movieGrid')
const imageURL ="https://image.tmdb.org/t/p/w500"
const urlAPI2 = "https://api.themoviedb.org/3/movie/" //API para buscar por ID

const apiKey='b0836695b4faeba99adf577723059d78'

const urlAPI = `https://api.themoviedb.org/3/search/movie?query=` //API para buscar por película

let movieList = [] // para el buscador
let movie = {} // para el dashbaord


const renderMovies = () => {
    movieGrid.innerHTML ="";
    movieList.forEach((movie) => {
    const movieDiv = document.createElement('div')
    movieDiv.classList.add('movie')
    const moviePoster = document.createElement('img')
    moviePoster.src = `${imageURL}${movie.poster_path}`
    movieDiv.appendChild(moviePoster)

    const movieContainer = document.createElement('div')
    movieDiv.appendChild(movieContainer);

    const movieTitle = document.createElement("h2");
    movieTitle.innerText = movie.title;
    movieContainer.appendChild(movieTitle);

    const movieOverview = document.createElement("p");
    movieOverview.innerText = movie.overview;
    movieContainer.appendChild(movieOverview);

    const movieDetails = document.createElement("button");
    movieDetails.innerText = "Ver más";
    movieDetails.addEventListener("click", () => {
      openMovie(movie.id);
    });

    movieContainer.appendChild(movieDetails);
    movieGrid.appendChild(movieDiv);
  });


}

const myFunction = async (evento) => {
    evento.preventDefault()
    const valorInputDeTexto = inputDeTexto.value

    const respuesta = await fetch(`${urlAPI}${valorInputDeTexto}&api_key=${apiKey}`)
    const respuestaEnJson = await respuesta.json()

    if (respuestaEnJson.results){
        movieList=respuestaEnJson.results;
        renderMovies()
    } else{
        movieList= [];
    }

}
const openMovie = async (movieID) => { 
    window.location.href=`./dashboard.html?id=${movieID}`
}



formulario.addEventListener("submit", myFunction)

async function defaultMovies() {
    const result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=es-CL&api_key=${apiKey}`
    );
    const resultJson = await result.json();
  
    if (resultJson.results) {
      movieList = resultJson.results;
      renderMovies();
    } else {
      movies = [];
    }
  }

  defaultMovies()