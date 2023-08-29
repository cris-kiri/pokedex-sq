import request from 'superagent'

export async function fetchPokemonByGeneration(gen: number) {
  const response = await request.get(
    `https://pokeapi.co/api/v2/generation/${gen}`
  )

  return response.body
}
