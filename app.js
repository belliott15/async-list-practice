import { renderHarryPotterCharacters, renderCandies, renderIceCreams, renderPokemon } from './render-utils.js';
import { fetchHarryPotter, fetchCandies, fetchIceCreams, fetchPokemon } from './fetch-utils.js';
// import functions and grab DOM elements
const harryPotterEl = document.querySelector('#harry-potter-section');
const iceCreamEl = document.querySelector('#ice-cream-section');
const pokemonEl = document.querySelector('#pokemon-section');
const candyEl = document.querySelector('#candy-section');

// let state

// set event listeners 
window.addEventListener('load', async () => {
    fetchDisplayHarryPotterCharacters();
    fetchDisplayCandies();
    fetchDisplayIceCreams();
    fetchDisplayPokemon();

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
async function fetchDisplayHarryPotterCharacters(){
    const characterList = await fetchHarryPotter();

    for (let character of characterList){
        const characterAndWand = renderHarryPotterCharacters(character);
        harryPotterEl.append(characterAndWand);
    }
}

async function fetchDisplayCandies(){
    const candyList = await fetchCandies();

    for (let candy of candyList){
        const allCandy = renderCandies(candy);
        candyEl.append(allCandy);

    }
}

async function fetchDisplayPokemon(){
    const pokemonList = await fetchPokemon();
    for (let pokemon of pokemonList){
        const allPokemon = renderPokemon(pokemon);
        pokemonEl.append(allPokemon);
    }
}

async function fetchDisplayIceCreams(){
    const iceCreamList = await fetchIceCreams();
    for (let iceCream of iceCreamList){
        const iceCreams = renderIceCreams(iceCream);
        iceCreamEl.append(iceCreams);
    }
}