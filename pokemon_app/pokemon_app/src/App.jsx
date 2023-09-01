import { useEffect, useState } from 'react'
import './App.css'

const Pokemon = (props) => {
  const pokemonObj = props.pokemon.name
  // pokemonObj.style = "flex"
  // console.log(pokemonObj)
  return <li className='lala'>
      {pokemonObj}
    </li>
}

const App = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5"
      );

      const response = await data.json();
      setPokemons(response);
    };

    getPokemon();
  }, []);

  // alternatively:
  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5")
  //   .then(response => response.json())
  //   .then(data => setPokemons(data))
  //   .catch(error => console.error(error));
  // }, [])

  if (!pokemons) {
    return <div>Loading...</div>
  }

  console.log(pokemons.results)

  return <ul>
    {pokemons.results.map((pokemon) => {
      return <Pokemon key={pokemon.name} pokemon={pokemon} />
    })}
  </ul>

}

export default App
