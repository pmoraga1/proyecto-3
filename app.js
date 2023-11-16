import{crearGrafico} from "./grafico.js"
import {crearTarjeta} from "./tarjeta.js"

 
const formulario = document.getElementById('formulario')
const inputDeTexto = document.getElementById('inputDeTexto')


const apiKey='b0836695b4faeba99adf577723059d78'
//const movieId = 550

const urlAPI = `https://api.themoviedb.org/3/movie/`
// ${movieId}?api_key=${apiKey}

const myFunction = async (evento) => {
evento.preventDefault()
const valorInputDeTexto = inputDeTexto.value
//const respuesta = await fetch(urlAPI)
const respuesta = await fetch(`${urlAPI}${valorInputDeTexto}?api_key=${apiKey}`)
const respuestaEnJson = await respuesta.json()

const values = [respuestaEnJson.vote_average, 10-respuestaEnJson.vote_average]
const names = "Score"
//const values1 = respuestaEnJson.stats.map((elemento) =>{
//    return elemento.base_stat
//})
//const names1 = "respuestaEnJson.stats.map((elemento) =>{
//    return elemento.stat.name"
//})


console.log(respuestaEnJson)
crearTarjeta(respuestaEnJson)
crearGrafico(values, names)
}

formulario.addEventListener("submit", myFunction)