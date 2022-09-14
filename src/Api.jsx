export const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export function GET_POKEMON(pokemon) {
  return {
    url: API_URL + pokemon,
    options: {
      method: 'GET',
    },
  };
}
