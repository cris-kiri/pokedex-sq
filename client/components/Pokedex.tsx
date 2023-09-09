import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Pokemon from './Pokemon'
import { fetchPokemonByGeneration } from '../apis/pokeapi'
import * as utils from '../../utils/lib.ts'
import { Species } from '../../models/pokemon'

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
    <div className="container">
      <div className="selection">
        <label htmlFor="generation">Choose a generation:</label>
        <select
          value={gen}
          name="generation"
          id="generation"
          tabIndex={0}
          onChange={handleGenChange}
        >
          <option value="1">Gen 1</option>
          <option value="2">Gen 2</option>
          <option value="3">Gen 3</option>
        </select>

        <label htmlFor="pokemon">Choose a pokemon:</label>
        <select
          value={pokemon}
          name="pokemon"
          id="pokemon"
          tabIndex={0}
          onChange={handlePokemonChange}
        >
          {generation?.results.map((pokemon: Species) => (
            <option key={pokemon.name} value={pokemon.name}>
              {utils.capatiliseString(pokemon.name)}
            </option>
          ))}
        </select>
      </div>
      <article className="card">
        <Pokemon name={pokemon} />
      </article>
    </div>
  )
}
