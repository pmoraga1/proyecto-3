const apiCard = document.getElementById('apiCard')



export const crearTarjeta = (datos) => {
    apiCard.innerHTML = '' ;
    apiCard.innerHTML = `
    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${datos.poster_path}"/>
    <div>
    <h3>${datos.original_title}   (${datos.release_date.slice(0,4)})</h3>
    <p>${datos.overview}</p>
    <ul>
        ${datos.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
      </ul>

    </div>
    ` ;
  

}

