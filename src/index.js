
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[1]);

//Function delcared with pokemon object. 
//Return to template string containing the HTML structure for Pokemon card.
//generate functions to determin and call for img, stats and gmaes for each pokemon
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

//function to caplitalise each first letter of a word and concatenate the rest.
function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1)
}

// function needs to generate a ;ist of stats for each Pokemon
// Loop each stat in the stat sheet and append an item for each w/ name and sts value
function generateStats(statsheet){
    let result = ``
    statsheet.forEach(stat => {
        result += `<li><b>${stat.stat.name.toUpperCase()}:</b> ${stat.base_stat}</li>`
    })
    return result
}

//function generate a sprite URL for a given Pokemon
//randomiser that decides wether the to use  a shiny sprite (1% chance)
//else default to regular sprite 
function generateSprite(pokemon){
    if(Math.floor(Math.random() * 99) === 1) {
        return pokemon.sprites.front_shiny
    } else {
        return pokemon.sprites.front_default
    }
}
/// function get Url of Shiny Sprite for given (Pokemon)
function changeSprite(pokemon){
    return pokemon.sprites.front_shiny
}

// generate cards for pokemons from database
//loop each Pokemon in the data base
//append generate card to result string

function generateCards(database) {
    let result = ``
    database.forEach(pokemon => {
        result += createCard(pokemon)
    });
    return result
}

// generate a list of games that each Pokemon has been in. 
//loop through each game index
//append a list with version name an index
function generateGames(pokemon){
    let result = ``
   pokemon.game_indices.forEach(game => {
    result += `<li><b>Pokemon ${capitalizeWord(game.version.name)}: </b>${game.game_index}</li>`
   })
    return result
}
//Refer to DOM
// return a live HTMLCollection of elements
//select first element in the collection [0]
//replace existing content in the html conent
//generate the cardsand pass through data
//assign to HTMl string from generateCards(data)

document.getElementsByClassName('cards')[0].innerHTML = generateCards(data)

