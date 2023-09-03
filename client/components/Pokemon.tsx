import { useQuery } from '@tanstack/react-query'

import { fetchPokemonByName } from '../apis/pokeapi'
import { type Pokemon, Species } from '../../models/pokemon'
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
      <div className="pokemon-body">
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          className="pokemon-image"
        />
        <div className="pokemon-stats">
          <div className="info">
            <table>
              <tr>
                <td>
                  <h4>HEIGHT:</h4> {pokemon?.height}
                </td>
                <td>
                  <h4>WEIGHT:</h4> {pokemon?.weight}
                </td>
              </tr>
              <tr>
                {pokemon?.types.map((type) => (
                  <td key={type.type.name}>
                    <h4>{type.type.name.toUpperCase()}</h4>
                  </td>
                ))}
              </tr>
            </table>
          </div>
          <div className="stats">
            <table>
              <tr>
                <td>
                  <h4>HP:</h4> {pokemon?.stats[0].base_stat}
                </td>
                <td>
                  <h4>SPEED:</h4> {pokemon?.stats[5].base_stat}
                </td>
              </tr>
              <tr>
                <td>
                  <h4>ATTACK:</h4> {pokemon?.stats[1].base_stat}
                </td>
                <td>
                  <h4>SP ATTACK:</h4> {pokemon?.stats[3].base_stat}
                </td>
              </tr>
              <tr>
                <td>
                  <h4>DEFENSE:</h4> {pokemon?.stats[2].base_stat}
                </td>
                <td>
                  <h4>SP DEFENSE:</h4> {pokemon?.stats[4].base_stat}
                </td>
              </tr>
            </table>
            {/* {pokemon?.stats.map((stat) => (
                <p key={stat.stat.name}>
                  {stat.stat.name.toUpperCase()}: {stat.base_stat}
                </p>
              ))} */}
          </div>
        </div>
      </div>
    </>
  )
}
