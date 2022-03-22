
export function renderHarryPotterCharacters(characters){
    const characterDiv = document.createElement('div');
    const nameEl = document.createElement('h1');
    const houseEl = document.createElement('h3');
    const wandMaterialEl = document.createElement('p');
    const wandCoreEl = document.createElement('p');
    const wandLengthEl = document.createElement('p');
    const bookListEl = document.createElement('ul');

    nameEl.textContent = characters.name;
    houseEl.textContent = characters.house;
    wandMaterialEl.textContent = `Wand Material: ${characters.wand_material}`;
    wandCoreEl.textContent = `Wand Core: ${characters.wand_core}`;
    wandLengthEl.textContent = `Wand Length: ${characters.wand_length}`;
    
    for (let character of characters.appearance_in_books){
        const li = document.createElement('li');
        li.textContent = character;

        bookListEl.append(li);
    }

    characterDiv.classList.add('harry-potter');
    characterDiv.append(nameEl, houseEl, wandMaterialEl, wandLengthEl, wandCoreEl, bookListEl);

    return characterDiv;
}

export function renderIceCreams(iceCream){
    const iceCreamDiv = document.createElement('div');
    const nameEl = document.createElement('h1');
    const brandEl = document.createElement('h3');
    const colorEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const flavorEl = document.createElement('ul');

    nameEl.textContent = iceCream.name;
    brandEl.textContent = iceCream.brand;
    consistencyEl.textContent = `Consistency: ${iceCream.consistency}`;
    sugarEl.textContent = `Sugar: ${iceCream.grams_of_sugar}grams`;
    
    for (let flavor of iceCream.flavor){
        const li = document.createElement('li');
        li.textContent = flavor;

        flavorEl.append(li);
    }

    iceCreamDiv.classList.add('iceCream');
    iceCreamDiv.append(nameEl, categoryEl, categoryEl, consistencyEl, sugarEl, flavorEl);

    return iceCreamDiv;
}



export function renderCandies(candy){
    const candyDiv = document.createElement('div');
    const nameEl = document.createElement('h1');
    const categoryEl = document.createElement('h3');
    const consistencyEl = document.createElement('p');
    const sugarEl = document.createElement('p');
    const flavorEl = document.createElement('ul');

    nameEl.textContent = candy.name;
    categoryEl.textContent = candy.category;
    consistencyEl.textContent = `Consistency: ${candy.consistency}`;
    sugarEl.textContent = `Sugar: ${candy.grams_of_sugar}grams`;
    
    for (let flavor of candy.flavor){
        const li = document.createElement('li');
        li.textContent = flavor;

        flavorEl.append(li);
    }

    candyDiv.classList.add('candy');
    candyDiv.append(nameEl, categoryEl, categoryEl, consistencyEl, sugarEl, flavorEl);

    return candyDiv;
}



