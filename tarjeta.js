const apiCard = document.getElementById('apiCard')



export const crearTarjeta = (datos) => {
    apiCard.innerHTML = '' ;
    apiCard.innerHTML = `
    <img src="https://www.themoviedb.org/t/p/w440_and_h660_face/${datos.poster_path}"/>
    <div>
    <h3>${datos.original_title}   (${datos.release_date.slice(0,4)})</h3>
    <p>${datos.overview}</p>
    <ul>
        ${datos.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
      </ul>
      
   
    <iframe width="100%"   src="https://www.youtube.com/embed/${datos.videos.results[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    ` ;
  

}
