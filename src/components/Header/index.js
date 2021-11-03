import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import PokemonContext from "../../contexts/PokemonContext";

import "./style.scss";

function Header() {
  const { pokemon } = useContext(PokemonContext);

  return (
    <header className="header-container">
      <Link to="/">
        <h2>PokéStore</h2>
      </Link>
      
      <Link to="/cart">
        <ShoppingCart
          size={24}
          color="#5e548e"
          strokeWidth={2}
          cursor="pointer"
        />

        <div className="amount">
          <span>{ pokemon.pokemonsInCart.length }</span>
        </div>
      </Link>

    </header>
  );
}

export default Header;