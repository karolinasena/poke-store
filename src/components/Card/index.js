import React, { useContext } from "react";
import PokemonContext from "../../contexts/PokemonContext";

import "./style.scss";

function Card({ pokemon }) {
  const { setPokemonsInCart } = useContext(PokemonContext);

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={pokemon.sprites.front_default} />
      </div>

      <div className="card">
        <div className="card-info">
          <h2 className="card-name">{pokemon.name}</h2>
          <h3 className="card-price"> {pokemon.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
        </div>

        <button onClick={() => {
          setPokemonsInCart(pokemon)
        }}>
          Add to cart
        </button>

      </div>
    </div>
  );
}

export default Card;