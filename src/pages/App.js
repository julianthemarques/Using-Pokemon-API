import { useState, useEffect } from "react";
import PokemonDataSheet from "../components/PokemonDataSheet";
import pokemonType from "../assets/json/pokemonType.json";
import Buttons from "../components/Buttons";
import { useFetch } from "../utils/useFetch";

const buttonTypes = ["all", ...new Set(pokemonType.map((data) => data.type))];

function App() {
  const { dataMoreInfo, isFetching, readMore } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=151",
    [
      {
        func(data, fetchApi, setDataMoreInfo) {
          data.results &&
            data.results.forEach((pokemon) => {
              fetchApi(pokemon.url).then((result) => {
                setDataMoreInfo((lastInfos) => [result, ...lastInfos]);
              });
            });
        },
      },
    ]
  );

  const [currentType, setCurrentType] = useState(buttonTypes[0]);

  function filterPokemonType(value) {
    if (currentType === "all") {
      return value;
    }
    if (currentType === value.types[0].type.name) {
      return value;
    }
  }

  return (
    <div className="app">
      <h1 className="title">Pokemon List</h1>
      <div className="buttons">
        <Buttons types={buttonTypes} setCurrentType={setCurrentType} />
      </div>
      <div className="container">
        <div className="pokemon-container">
          {!isFetching &&
            dataMoreInfo
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .filter((a, b) => a !== b)
              .filter(filterPokemonType)
              .map((pokemon) => {
                return (
                  <PokemonDataSheet
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.sprites.other.dream_world.front_default}
                    type={pokemon.types[0].type.name}
                    hp={pokemon.stats[0].base_stat}
                    attack={pokemon.stats[1].base_stat}
                    defense={pokemon.stats[2].base_stat}
                    specialAttack={pokemon.stats[3].base_stat}
                    specialDefense={pokemon.stats[4].base_stat}
                    speed={pokemon.stats[5].base_stat}
                    key={pokemon.id}
                  />
                );
              })}
        </div>
      </div>
      <button className="load-more" onClick={() => readMore()}>
        Load more
      </button>
    </div>
  );
}

export default App;
