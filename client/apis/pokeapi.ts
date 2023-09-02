import request from 'superagent'

export async function fetchPokemonByGeneration(gen: number) {
  const response = await request.get(
    `https://pokeapi.co/api/v2/generation/${gen}`
  )

  return response.body
}

export async function fetchPokemonByName(name: string) {
  const response = await request.get(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  )

  return response.body
}
