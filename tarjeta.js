const apiCard = document.getElementById('apiCard')

export const crearTarjeta = (datos) => {
    apiCard.innerHTML = '' ;
    apiCard.innerHTML = `
    <h3>Movie: ${datos.original_title}</h3>
    <p>${datos.overview} <p>>
    ` ;

}
