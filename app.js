import{crearGraficoDona} from "./grafico.js"
import {crearTarjeta} from "./tarjeta.js"
import { crearGraficoBarra} from "./grafico.js"

 
const formulario = document.getElementById('formulario')
const inputDeTexto = document.getElementById('inputDeTexto')
const movieGrid = document.getElementById('movieGrid')
const imageURL ="https://image.tmdb.org/t/p/w500"
const urlAPI2 = "https://api.themoviedb.org/3/movie/"

const apiKey='b0836695b4faeba99adf577723059d78'


const urlAPI = `https://api.themoviedb.org/3/search/movie?query=`

let movieList = []

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
    movieDetails.innerText = "Details";
    movieDetails.addEventListener("click", () => {
      searchMovie(movie.id);
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

    const values = [respuestaEnJson.vote_average, 10 - respuestaEnJson.vote_average];
    const names = ["Score", ]

    const budgetBar = [respuestaEnJson.budget];
    const revenueBar = [respuestaEnJson.revenue];

    console.log(respuestaEnJson)
    crearTarjeta(respuestaEnJson)
    crearGraficoDona(values, names)
    crearGraficoBarra(budgetBar,revenueBar)
}

const searchMovie = async (movieID) => { 
    const respuesta = await fetch(`${urlAPI2}${movieID}?api_key=${apiKey}`)
    const respuestaEnJson = await respuesta.json()
    window.location.href='dashboard.html'
    console.log(respuestaEnJson)
}


formulario.addEventListener("submit", myFunction)
renderMovies()