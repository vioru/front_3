import React, { useEffect, useState } from 'react'
import "../styles/card.modules.css"
import axios from 'axios'

function Card( {user ,resetForm}) {

  const urlImg = "https://pokeapi.co/api/v2/pokemon/"
  const urlChain = "https://pokeapi.co/api/v2/evolution-chain/"

  const [pokemon, setPokemon] = useState({
    id : "",
    name: "",
    img: "",
    evolutions: []
   
  });
  
  const [id, setId] = useState(1)

  const generarId = () => {
    const numeroAleatorio = Math.floor(Math.random() * 549); 
    setId(numeroAleatorio);
  };
    
  useEffect(()=>{

    const fetchPokemonData = async () => {
      let tempPokemon = {};
      const responseName = await axios.get(urlChain + id);
      tempPokemon.name = responseName.data.chain.species.name;

      const responseImg = await axios.get(urlImg + tempPokemon.name);
      tempPokemon.img = responseImg.data.sprites.front_default; 

      tempPokemon.evolutions = findEvolutions(responseName.data.chain.evolves_to);  

        const evolutions = tempPokemon.evolutions;

        await Promise.all(evolutions.map(async (evolution, index) => {
          const response = await axios.get(`${urlImg}${evolution.name}`);
          evolutions[index].img = response.data.sprites.front_default;
        }));

        console.log(tempPokemon);

      setPokemon(tempPokemon);


    };
  
    fetchPokemonData();

    // axios(urlChain+id).then((res)=>{
    //   console.log(res.data.chain); 
      // setPokemon({
      //   id : res.data.id,
      //   name: res.data.chain.species.name,
      //   img: res.data.sprites.front_default,
      //   // type: [res.data.types],
        
      // })
      // console.log("el pokemon: " , JSON.stringify(pokemon, null, 2));    
  }, [id])

  const findEvolutions = (evolutions) => {
    return evolutions.flatMap(evolution => {
      const evolutionData = {
        name: evolution.species.name,
        img: ""
      };
      return [
        evolutionData,
        ...findEvolutions(evolution.evolves_to)
      ];
    });
  };
  return (

  <div className="card-body">
    <h2>Pokedex</h2>
    <h2>Nombre: {pokemon.name.toUpperCase()}  </h2>
    <img src={pokemon.img}  width={300} alt="" />
    
    <b>evoluciones</b>
    <div className='evolutions'>
    { pokemon.evolutions.length > 0 ? (
  pokemon.evolutions.map((pokemon)=>(
    <>
    <img src={pokemon.img} alt='imagen'  width={100} />
      <b key={pokemon.id}>{pokemon.name.toUpperCase()}</b>
    </>
  ))
) : (
  <p>No tiene evoluciones</p>
)}

    </div>

    <button onClick={generarId} >Nuevo Pokemon</button>
  </div>

  )
}

export default Card
