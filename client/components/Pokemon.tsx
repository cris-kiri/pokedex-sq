import { useQuery } from '@tanstack/react-query'

import { fetchPokemonByName } from '../apis/pokeapi'
import { type Pokemon } from '../../models/pokemon'
import LoadingPokeball from './LoadingPokeball'
interface Props {
  name: string
}

export default function Pokemon({ name }: Props) {
  const DEFAULT_STAT = 1
  const {
    data: pokemon,
    error,
    isLoading,
  } = useQuery<Pokemon>(['pokemon', name], () => fetchPokemonByName(name))

  if (error) return <div>There was an error!</div>

  if (isLoading) return <LoadingPokeball />

  // This needs breaking down into smaller components with props
  return (
    <>
      <h2>
        {pokemon?.name.toUpperCase()} #{pokemon?.id}
      </h2>
      <div className="pokemon-body">
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          className="pokemon-image"
        />
        <div className="pokemon-stats">
          <div className="stats">
            <div className="grid-container-info">
              {pokemon?.types.map((type, index) => (
                <div
                  className={`grid-item-type-${index + 1}`}
                  key={type.type.name}
                >
                  <h4>{type.type.name}</h4>
                </div>
              ))}
              <div className="grid-item-height-title">
                <h4>Height</h4>
              </div>
              <div className="grid-item-height-value">{pokemon?.height}</div>
              <div className="grid-item-weight-title">
                <h4>Weight</h4>
              </div>
              <div className="grid-item-weight-value">{pokemon?.weight}</div>
            </div>
          </div>
          <div className="stats">
            <div className="grid-container-stats">
              <div className="grid-item-stat-1-title">
                <h4>HP</h4>
              </div>
              <div className="grid-item-stat-1-value">
                {pokemon?.stats[0].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-2-title">
                <h4>SPEED</h4>
              </div>
              <div className="grid-item-stat-2-value">
                {pokemon?.stats[5].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-3-title">
                <h4>ATTACK</h4>
              </div>
              <div className="grid-item-stat-3-value">
                {pokemon?.stats[1].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-4-title">
                <h4>SP ATTACK</h4>
              </div>
              <div className="grid-item-stat-4-value">
                {pokemon?.stats[3].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-5-title">
                <h4>DEFENSE</h4>
              </div>
              <div className="grid-item-stat-5-value">
                {pokemon?.stats[2].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-6-title">
                <h4>SP DEFENSE</h4>
              </div>
              <div className="grid-item-stat-6-value">
                {pokemon?.stats[4].base_stat || DEFAULT_STAT}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
