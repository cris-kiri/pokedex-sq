import { useState, useEffect } from 'react'

import Pokemon from './Pokemon'
import { fetchPokemonByGeneration } from '../apis/pokeapi'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function Pokedex() {
  const {
    data: generation,
    isLoading,
    isError,
  } = useQuery(['pokemon'], async () => await fetchPokemonByGeneration(1))

  console.log(generation)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>There was an error!</div>

  return (
    <>
      <h1>Gotta catch &apos;em all...</h1>

      <ul>
        {generation.pokemon_species.map((p, index: number) => (
          <li key={index}>
            <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
