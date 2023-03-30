async function getPokemon(event){
    event.preventDefault()
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
    var pokeData = await response.json()
    console.log(pokeData.sprites.front_default)
    pokemon.value = ""
    poke_data.innerHTML = `
        <div>
            <h2>Name: ${pokeData.name}</h2>
            <p>id: ${pokeData.id}</p>
            <img src="${pokeData.sprites.front_default}">
        </div>
        ${poke_data.innerHTML}
    `
}