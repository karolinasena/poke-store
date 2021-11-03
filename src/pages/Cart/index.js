import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PokemonContext from "../../contexts/PokemonContext";
import { Trash2 } from "react-feather";
import Swal from "sweetalert2";

import "./style.scss";

function Cart() {
  const { pokemon, removePokemon, finish } = useContext(PokemonContext);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let total = 0;

    pokemon.pokemonsInCart.forEach(pokemon => {
      total += pokemon.price;
    });

    setSubtotal(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
  }, [pokemon]);

  return (
    <div className="cart-container">
      <Header />
      <div className="cart-purchase">
        <h1>Finalizar Compra</h1>

        {pokemon.pokemonsInCart.length === 0 ? (
          <p className="cart-empty">Carrinho vazio</p>
        ) : (

          <div className="cart-info">
            <table>
              <thead>
                <tr>
                  <th>Pokémon</th>
                  <th>Valor</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                <PokemonContext.Consumer>
                  {({ pokemon }) => (
                    pokemon.pokemonsInCart.map((pokemon, index) => (
                      <tr key={pokemon.id}>
                        <td>
                          <img src={pokemon.sprites.front_default} />
                          <h3>{pokemon.name}</h3>
                        </td>
                        <td> {pokemon.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>{pokemon.quantity}</td>
                        <td> {(pokemon.price * pokemon.quantity)
                          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </td>
                        <td>
                          <Trash2
                            color="#5e548e"
                            cursor="pointer"
                            onClick={() => { removePokemon(index) }}
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </PokemonContext.Consumer>
              </tbody>
            </table>

            <div className="cart-finish">
              <h3 className="cart-total">Total: {subtotal}</h3>
              <button onClick={() => {
                finish()
                Swal.fire(
                  'Sucesso!',
                  'Compra Finalizada!',
                  'success'
                )
              }}>
                Finalizar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;