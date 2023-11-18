const apiCard = document.getElementById('apiCard')
const imgCard = document.getElementById('imageCard')


export const crearTarjeta = (datos) => {
    apiCard.innerHTML = '' ;
    apiCard.innerHTML = `
    <h3>Movie: ${datos.original_title}</h3>
    <p>${datos.overview}</p>
    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${datos.poster_path}"/>
    ` ;
  

}

