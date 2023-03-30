async function getPokemon(event) {
    event.preventDefault()
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
    var pokeData = await response.json()
    console.log(pokeData.sprites.front_default)
    pokemon.value = ""
    poke_data.innerHTML = `
        <div>
            <h2>Name: ${pokeData.name}</h2>
            <img src="${pokeData.sprites.front_default}">
            <img src="${pokeData.sprites.front_shiny}">
            <p>Id #: ${pokeData.id}</p>
            <p>Order #: ${pokeData.order}</p>
        </div>
        ${poke_data.innerHTML}
    `
}