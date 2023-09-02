import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Pokemon from './Pokemon'
import { fetchPokemonByGeneration } from '../apis/pokeapi'
import { Species } from '../../models/pokemon'
// import { Pokemon as PokemonType } from '../../models/pokemon'

export default function Pokedex() {
  const [gen, setGen] = useState('1')
  const [pokemon, setPokemon] = useState('bulbasaur')
  const {
    data: generation,
    isLoading,
    isError,
  } = useQuery(
    ['generation', gen],
    async () => await fetchPokemonByGeneration(Number(gen))
  )

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>There was an error!</div>

  function handleGenChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setGen(event.target.value)
  }

  function handlePokemonChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setPokemon(event.target.value)
  }

  return (
    <>
      <h1>Gotta catch &apos;em all...</h1>
      <select
        value={gen}
        name="generation"
        id="generation"
        onChange={handleGenChange}
      >
        <option value="1">Gen 1</option>
        <option value="2">Gen 2</option>
        <option value="3">Gen 3</option>
      </select>

      <select
        value={pokemon}
        name="pokemon"
        id="pokemon"
        onChange={handlePokemonChange}
      >
        {generation?.pokemon_species.map((pokemon: Species) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <Pokemon name={pokemon} />
    </>
  )
}
