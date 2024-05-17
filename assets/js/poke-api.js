
// esse arquivo vai conter um objeto em que teremos as funções de manipulação da pokeapi

const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json());
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
        .then((response) => response.json())  
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailsRequests) => Promise.all(detailsRequests))
        .then((pokemonDetails) => pokemonDetails);
}

// buscamos a lista de pokemons
// obtemos o response e convertemos para json
// os jsons vem cheios de detalhes, então especificamos que queriamos somente os resultados
// após isso mapeamos a lista de pokemons em uma lista de requisicões dos detalhes dos pokemons
// assim fazemos um novo fetch para a url do pokemon que eu estou querendo acessar e convertendo a response que ele me der para um json
// dessa forma, temos a lista de requisicões e estamos esperando que todas as requisicões terminem 
