import request from 'superagent'

// Fetches too much unnecessary data and requires filtering to list pokemon
// export async function fetchPokemonByGeneration(gen: number) {
//   const response = await request.get(
//     `https://pokeapi.co/api/v2/generation/${gen}`
//   )

//   return response.body
// }

export async function fetchPokemonByGeneration(gen: number) {
  // Could get tricky to fetch pokemon when dealing with lots more generations
  if (gen === 1) {
    const response = await request.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    )
    return response.body
  }
  if (gen === 2) {
    const response = await request.get(
      'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151'
    )
    return response.body
  }
  if (gen === 3) {
    const response = await request.get(
      'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251'
    )
    return response.body
  }
}

export async function fetchPokemonByName(name: string) {
  const response = await request.get(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  )

  return response.body
}
