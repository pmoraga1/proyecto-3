import{crearGrafico} from "./grafico.js"
import {crearTarjeta} from "./tarjeta.js"

 
const formulario = document.getElementById('formulario')
const inputDeTexto = document.getElementById('inputDeTexto')



//const weatherCard = document.getElementById('weatherCard')

//const miAPI2 = 'https://api.openweathermap.org/data/2.5/weather?q='

//const appID2 = '&appid=616629f9acdc3b22b8b09553e632e5da'

const urlAPI ="https://fruityvice.com/api/fruit/all"

const myFunction = async (evento) => {
evento.preventDefault()
const valorInputDeTexto = inputDeTexto.value
const respuesta = await fetch(urlAPI + valorInputDeTexto)
const respuestaEnJson = await respuesta.json()


const values = respuestaEnJson.stats.map((elemento) =>{
    return elemento.base_stat
})
const names = respuestaEnJson.stats.map((elemento) =>{
    return elemento.stat.name
})

//const urlAPI1 = miAPI+valorInputDeTexto+appID
//const urlAPI2 = 'https://api.openweathermap.org/data/2.5/weather?q=${valorInputDeTexto}&appid=616629f9acdc3b22b8b09553e632e5da&units=metric
//const respuesta = await fetch(urlAPI1 + '&units=metric')

console.log(respuestaEnJson)
crearTarjeta(respuestaEnJson)
crearGrafico(values, names)
}

formulario.addEventListener("submit", myFunction)