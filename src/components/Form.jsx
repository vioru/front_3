import React, { useState } from "react";
import {pokemons} from "../utils/pokemons"
import Card from "./Card";
import '../styles/form.modules.css'

function Form() {

    const [user, setUser] = useState({
        nombreUsuario: "",
        nombreCompleto: "",
        color: "",
        pokemonElejido:""
      });

      const [show, setShow] = useState(false);
      const [error, setError] = useState(false);

      

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("entre a el submit");

        if (
          user.nombreUsuario.trim().length >= 3 &&
          user.nombreCompleto.trim().includes(" ") &&
          user.nombreCompleto.trim().length >= 3  &&
          user.pokemonElejido !== ""  
        ) {    console.log("entre a el if")
          setShow(true);
          setError(false);
        } else {
          setError(true);
        }
        console.log("error " + error);
        console.log(show);
        
    }

    const resetForm = () => {
        setUser({
            nombreUsuario: "",
            nombreCompleto: "",
            color: "",
            pokemonElejido:""}
        );
        setShow(false);            
      };


  return (
    show ? 
     <Card user ={user} resetForm={resetForm}/>
      : 
      <form className="form" onSubmit={handleSubmit}>
      <label>Nombre de Usuario</label>
      <input
        type="text"
        value={user.nombreUsuario}
        onChange={(event) =>
          setUser({ ...user, nombreUsuario: event.target.value })
        }
      />

      <label>Nombre Completo</label>
      <input
        type="text"
        placeholder="Escribe tu nombre completo"
        value={user.nombreCompleto}
        onChange={(event) =>
          setUser({ ...user, nombreCompleto: event.target.value })
        }
      />

      <label>Elije tu pokemon favorito de la primera generación</label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={user.pokemonElejido}
        onChange={(event) =>
          setUser({ ...user, pokemonElejido: event.target.value })
        }
      >
        <option  selected> Elige tu pokemon</option>
        {pokemons.map((pokemon, item) => (
          <option key={item}>{pokemon.name.toUpperCase()}</option>
        ))}
      </select>

      {/* <label>Elije tu color Favorito</label>
      <input
        type="color"
        value={user.color}
        onChange={(event) =>
          setUser({ ...user, color: event.target.value })
        }
      /> */}

      <button type="submit">Submit</button>

      {error ? (
            <h4 style={{ color: "red" }}>
              Debes colocar la información correctamente y completa
            </h4>
          ) : null}
    </form>
  );
}

export default Form;
