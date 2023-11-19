import{crearGraficoDona} from "./grafico.js"
import {crearTarjeta} from "./tarjeta.js"
import { crearGraficoBarra} from "./grafico.js"

const apiKey = "b0836695b4faeba99adf577723059d78";
const movieUrl = "https://api.themoviedb.org/3/movie/";
const imageUrl = "https://image.tmdb.org/t/p/w500";

const movieItem = document.getElementById("apiCard");

let movie = {};

function getIdFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

async function fetchMovie() {
  const movieId = getIdFromUrl();
  const respuesta = await fetch(`${movieUrl}${movieId}?language=es-CL&api_key=${apiKey}&append_to_response=videos,images`);
  const respuestaEnJson = await respuesta.json();
  movie = respuestaEnJson;
  renderMovie();
}

fetchMovie();

function renderMovie() {
    
    const values = [movie.vote_average, 10 - movie.vote_average];
    const names = ["Score", ]

    const budgetBar = [movie.budget];
    const revenueBar = [movie.revenue];

    console.log(movie)

    crearTarjeta(movie)
    crearGraficoDona(values, names)
    crearGraficoBarra(budgetBar,revenueBar);
}