import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import axios from "axios";

import "./style.scss"

function Home() {
  const [pokemons, setPokemons] = useState([]);

  async function fetchData() {
    try {
      let pokemon = [];
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12"
      );
      const { results } = data;

      let max = 20.0, min = 60.0;

      if (results.length) {
        for (let i = 0; i < results.length; i++) {
          const { data } = await axios.get(results[i].url);
          pokemon.push({ 
            ...data, 
            price: (Math.random() * (max - min) + min)
          });
        }
        setPokemons(pokemon);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="cards-container">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Home;