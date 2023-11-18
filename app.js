import{crearGraficoDona} from "./grafico.js"
import {crearTarjeta} from "./tarjeta.js"
import { crearGraficoBarra} from "./grafico.js"

 
const formulario = document.getElementById('formulario')
const inputDeTexto = document.getElementById('inputDeTexto')


const apiKey='b0836695b4faeba99adf577723059d78'


const urlAPI = `https://api.themoviedb.org/3/movie/`


const myFunction = async (evento) => {
evento.preventDefault()
const valorInputDeTexto = inputDeTexto.value

const respuesta = await fetch(`${urlAPI}${valorInputDeTexto}?api_key=${apiKey}`)
const respuestaEnJson = await respuesta.json()

const values = [respuestaEnJson.vote_average, 10 - respuestaEnJson.vote_average];
const names = ["Score", ]



const budgetBar = [respuestaEnJson.budget];
const revenueBar = [respuestaEnJson.revenue];

console.log(respuestaEnJson)
crearTarjeta(respuestaEnJson)
crearGraficoDona(values, names)
crearGraficoBarra(budgetBar,revenueBar)
}

formulario.addEventListener("submit", myFunction)