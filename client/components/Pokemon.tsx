import { useQuery } from '@tanstack/react-query'

import { fetchPokemonByName } from '../apis/pokeapi'
import { type Pokemon } from '../../models/pokemon'
import LoadingPokeball from './LoadingPokeball'
import Stat from './Stat'
interface Props {
  name: string
}

export default function Pokemon({ name }: Props) {
  const {
    data: pokemon,
    error,
    isLoading,
  } = useQuery<Pokemon>(['pokemon', name], () => fetchPokemonByName(name))

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
              <tbody>
                <tr>
                  {pokemon?.types.map((type) => (
                    <td key={type.type.name}>
                      <Stat title={type.type.name} stat={0} />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>
                    <Stat title="height" stat={pokemon?.height || 1} />
                  </td>
                  <td>
                    <Stat title="weight" stat={pokemon?.weight || 1} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="stats">
            <table>
              <tbody>
                <tr>
                  <td>
                    <Stat title="hp" stat={pokemon?.stats[0].base_stat || 1} />
                  </td>
                  <td>
                    <Stat
                      title="speed"
                      stat={pokemon?.stats[5].base_stat || 1}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Stat
                      title="attack"
                      stat={pokemon?.stats[1].base_stat || 1}
                    />
                  </td>
                  <td>
                    <Stat
                      title="sp attack"
                      stat={pokemon?.stats[3].base_stat || 1}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Stat
                      title="defense"
                      stat={pokemon?.stats[2].base_stat || 1}
                    />
                  </td>
                  <td>
                    <Stat
                      title="sp defense"
                      stat={pokemon?.stats[4].base_stat || 1}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
