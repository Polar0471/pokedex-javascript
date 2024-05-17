
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// fetch retorna uma promisse (promessa de um resultado, promessa de uma resposta) 
// uma promisse nos ajuda com o processamento assíncrono
// no processamento assíncrono, temos todo o processo de enviar uma requisicão para o servidor e ele dar uma resposta. A grande questão é que essa resposta é dada de acordo com o tempo de processamento do servidor
// processamento assíncrono -> processamento que vai ser executado e vc não tem uma resposta de imediato

// then é utilizado para tratar o caso de sucesso do fetch. 'Se der certo, então...'
// catch é utilizado para tratar o caso de fracasso
// um finally trata as coisas independentemente do sucesso e do fracasso

// vc pode encadear os resultados dos thens

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

// appendChild concatena um filho
const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {    
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
});


