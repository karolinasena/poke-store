import { createContext } from "react";

const PokemonContext = createContext({
	pokemons: null,
	setPokemonsInCart: () => { }
});

export default PokemonContext;