import { useQuery } from '@tanstack/react-query'

import { fetchPokemonByName } from '../apis/pokeapi'
import { type Pokemon } from '../../models/pokemon'
import LoadingPokeball from './LoadingPokeball'
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

  if (isLoading) return <LoadingPokeball />

  return (
    <>
      <div id="pokemon-header">
        <h2>
          {pokemon?.name.toUpperCase()} #{pokemon?.id}
        </h2>
      </div>
      <div>
        <div className="pokemon-body">
          <img
            src={pokemon?.sprites.front_default}
            alt={pokemon?.name}
            className="pokemon-image"
          />
          <div className="pokemon-stats">
            <div className="info">
              <p>HEIGHT: {pokemon?.height}</p>
              <p>WEIGHT: {pokemon?.weight}</p>
              {pokemon?.types.map((type) => (
                <p key={type.type.name}>{type.type.name.toUpperCase()}</p>
              ))}
            </div>
            <div className="stats">
              {pokemon?.stats.map((stat) => (
                <p key={stat.stat.name}>
                  {stat.stat.name.toUpperCase()}: {stat.base_stat}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
