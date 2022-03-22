import { fetchHarryPotter } from "./fetch-utils.js";

export function renderHarryPotterCharacters(){
    // <div>
    //     <h1>Character Name</h1>
    //     <h3>House</h3>
    //     <p>wand material</p>
    //     <p>wand core</p>
    //     <p>wand length</p>
    //     <p>books list</p>
    // </div>
    const div = document.createElement('div');
    const nameEl = document.createElement('h1');
    const houseEl = document.createElement('h3');
    const wandMaterialEl = document.createElement('p');
    const wandCoreEl = document.createElement('p');
    const wandLengthEl = document.createElement('p');
    const bookListEl = document.createElement('ul');

    nameEl.textContent = 
}