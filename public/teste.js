// const [button, setButtons] = useState(allButtons);
// const [allPokemons, setAllPokemons] = useState([]);
// const [resetPokemons, setResetPokemons] = useState([]);
// const [loadMore, setLoadMore] = useState(
//   "http://pokeapi.co/api/v2/pokemon?limit=40"
// );
// const [noLimit, setNoLimit] = useState(
//   "http://pokeapi.co/api/v2/pokemon?limit=40"
// );
// const filter = (button) => {
//   if (button === "All") {
//     setAllPokemons(resetPokemons);
//     return;
//   }
//   const filteredData = resetPokemons.filter((pokemon) => {
//     const type = pokemon.types[0].type.name;
//     if (type === button) {
//       return pokemon;
//     }
//     return;
//   });
//   setAllPokemons(filteredData);
// };

// const getAllPokemons = async () => {
//   const res = await fetch(loadMore);
//   const data = await res.json();

//   setLoadMore(data.next);

//   function createPokemonObject(result) {
//     result.forEach(async (pokemon) => {
//       const res = await fetch(
//         `http://pokeapi.co/api/v2/pokemon/${pokemon.name}`
//       );
//       const data = await res.json();
//       setAllPokemons((currentList) => [...currentList, data]);
//       setResetPokemons((currentList) => [...currentList, data]);
//       await allPokemons.sort((a, b) => a.id - b.id);
//     });
//   }

//   createPokemonObject(data.results);

//   const resNoLimit = await fetch(noLimit);
//   const dataNoLimit = await resNoLimit.json();

//   function getPokemonsNoLimit(result) {
//     result.forEach(async (pokemon) => {
//       const res = await fetch(
//         `http://pokeapi.co/api/v2/pokemon/${pokemon.name}`
//       );
//       const data = await res.json();
//       setResetPokemons((currentList) => [...currentList, data]);
//       await allPokemons.sort((a, b) => a.id - b.id);
//     });
//   }
//   getPokemonsNoLimit(dataNoLimit.result);
// };

// useEffect(() => {
//   getAllPokemons();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
