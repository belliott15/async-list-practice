import { renderHarryPotterCharacters, renderCandies } from './render-utils.js';
import { fetchHarryPotter, fetchCandies } from './fetch-utils.js';
// import functions and grab DOM elements
const harryPotterEl = document.querySelector('#harry-potter-section');
const candyEl = document.querySelector('#candy-section');
// let state

// set event listeners 
window.addEventListener('load', async () => {
    fetchDisplayHarryPotterCharacters();
    fetchDisplayCandies();

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
async function fetchDisplayHarryPotterCharacters(){
    const characterList = await fetchHarryPotter();

    for (let character of characterList){
        const characterAndWand = renderHarryPotterCharacters(character)
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