import React, { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import PokemonContext from "./PokemonContext";
import Swal from "sweetalert2";

const defaultPokemons = {
  total: 0,
  pokemonsInCart: []
};

const AppProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(defaultPokemons);

  const setPokemonsInCart = useCallback((pokemon) => {
    setPokemon((currentPokemon) => {
      let total = 0;
      const alreadyExists = currentPokemon.pokemonsInCart.find(pokemons => pokemons.id === pokemon.id) ? false : true;

      if(alreadyExists) {
        Swal.fire(
          'Sucesso!',
          `Você adicionou ${pokemon.name} ao carrinho!`,
          'success'
        );
        return {
          total: total + pokemon.price,
          pokemonsInCart: [
            { ...pokemon, quantity: 1 },
            ...currentPokemon.pokemonsInCart
          ]
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${pokemon.name} já foi adicionado ao carrinho!`,
        });  
        return currentPokemon;
      }
    });
  }, []);

  const removePokemon = (index) => {
    const pokemons = pokemon;
    pokemons.pokemonsInCart.splice(index, 1)
    setPokemon({...pokemons}); 
  }

  const finish = () => {
    setPokemon(defaultPokemons);
  }

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemonsInCart, removePokemon, finish }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default AppProvider;