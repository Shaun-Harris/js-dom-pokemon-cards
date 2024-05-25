
function createCard(pokemon){
    return `<li class="card">
    <h2 class="card--title">${capitalizeWord(pokemon.name)}</h2>
    <img 
    width="256"
    class="card--img"
    src=${generateSprite(pokemon)}
    onclick="this.src='${changeSprite(pokemon)}'"
    />
    <ul class="card--text">
        ${generateStats(pokemon.stats)}
    </ul>
    <ul class="card--text">
        ${generateGames(pokemon)}
    </ul>
    </li>
    `
}

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1)
}

function generateStats(statsheet){
    let result = ``
    statsheet.forEach(stat => {
        result += `<li><b>${stat.stat.name.toUpperCase()}:</b> ${stat.base_stat}</li>`
    })
    return result
}

function generateSprite(pokemon){
    if(Math.floor(Math.random() * 99) === 1) {
        return pokemon.sprites.front_shiny
    } else {
        return pokemon.sprites.front_default
    }
}

function changeSprite(pokemon){
    return pokemon.sprites.front_shiny
}

function generateCards(database) {
    let result = ``
    database.forEach(pokemon => {
        result += createCard(pokemon)
    });
    return result
}

function generateGames(pokemon){
    let result = ``
   pokemon.game_indices.forEach(game => {
    result += `<li><b>Pokemon ${capitalizeWord(game.version.name)}: </b>${game.game_index}</li>`
   })
    return result
}

document.getElementsByClassName('cards')[0].innerHTML = generateCards(data)

