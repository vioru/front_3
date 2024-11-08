import React from 'react'
import "../styles/card.modules.css"

function Card( {user ,resetForm}) {

  const { nombreUsuario, nombreCompleto, color, pokemonElejido } = user;
  console.log("User data:", nombreCompleto);

  return (

  <div className="card-body">
    <h3>Hola {nombreUsuario}</h3>
    <h2>Tu pokemon favorito es  {pokemonElejido}</h2>
    <button onClick={resetForm} >Volver al formulario</button>
  </div>

  )
}

export default Card
