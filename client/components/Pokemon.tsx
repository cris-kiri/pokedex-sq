import { useQuery } from '@tanstack/react-query'

import { fetchPokemonByName } from '../apis/pokeapi'
import { type Pokemon } from '../../models/pokemon'
interface Props {
  name: string
}

export default function Pokemon(props: Props) {
  const {
    data: pokemon,
    error,
    isLoading,
  } = useQuery<Pokemon>(['pokemon', props.name], () =>
    fetchPokemonByName(props.name)
  )

  if (error) return <div>There was an error!</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <h2>{pokemon?.name}</h2>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <p>HEIGHT: {pokemon?.height}</p>
      <p>WEIGHT: {pokemon?.weight}</p>
      {pokemon?.stats.map((stat) => (
        <p key={stat.stat.name}>
          {stat.stat.name.toUpperCase()}: {stat.base_stat}
        </p>
      ))}
      {pokemon?.types.map((type) => (
        <p key={type.type.name}>{type.type.name.toUpperCase()}</p>
      ))}
    </>
  )
}
