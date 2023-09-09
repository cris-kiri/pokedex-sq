/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
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
      <h2 tabIndex={0}>
        {pokemon?.name.toUpperCase()} #{pokemon?.id}
      </h2>
      <div className="pokemon-body">
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          tabIndex={0}
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
                  <h3 tabIndex={0}>{type.type.name}</h3>
                </div>
              ))}
              <div className="grid-item-height-title" tabIndex={0}>
                <h3>Height</h3>
              </div>
              <div className="grid-item-height-value" tabIndex={0}>
                {pokemon?.height}
              </div>
              <div className="grid-item-weight-title" tabIndex={0}>
                <h3>Weight</h3>
              </div>
              <div className="grid-item-weight-value" tabIndex={0}>
                {pokemon?.weight}
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="grid-container-stats">
              <div className="grid-item-stat-1-title" tabIndex={0}>
                <h3>HP</h3>
              </div>
              <div className="grid-item-stat-1-value" tabIndex={0}>
                {pokemon?.stats[0].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-2-title" tabIndex={0}>
                <h3>SPEED</h3>
              </div>
              <div className="grid-item-stat-2-value" tabIndex={0}>
                {pokemon?.stats[5].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-3-title" tabIndex={0}>
                <h3>ATTACK</h3>
              </div>
              <div className="grid-item-stat-3-value" tabIndex={0}>
                {pokemon?.stats[1].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-4-title" tabIndex={0}>
                <h3>SP ATTACK</h3>
              </div>
              <div className="grid-item-stat-4-value" tabIndex={0}>
                {pokemon?.stats[3].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-5-title" tabIndex={0}>
                <h3>DEFENSE</h3>
              </div>
              <div className="grid-item-stat-5-value" tabIndex={0}>
                {pokemon?.stats[2].base_stat || DEFAULT_STAT}
              </div>
              <div className="grid-item-stat-6-title" tabIndex={0}>
                <h3>SP DEFENSE</h3>
              </div>
              <div className="grid-item-stat-6-value" tabIndex={0}>
                {pokemon?.stats[4].base_stat || DEFAULT_STAT}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
