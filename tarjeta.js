const apiCard = document.getElementById('apiCard')

export const crearTarjeta = (datos) => {
    apiCard.innerHTML = '' ;
    apiCard.innerHTML = `
    <h3>${datos.name}</h3>
    <p>Tu pokemón elegido es  ${datos.name} <p>
    <img src=${datos.sprites.other.dream_world.front_default}>
    ` ;

}
