/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
    if(timer === 0) {
        return 'Lasagna is done.';
    } else if (typeof(timer) === 'number') {
        return 'Not done, please wait.';
    } else {
        return 'You forgot to set the timer.';
    }
}

// Returns the prep time of a lasagna
// IN > OUT : Array-Of-Strings Number > Number
// Psuedo Code :
    // return layers * time
export function preparationTime(layers, time = 2) {
    return layers.length * time;
}

// Returns an Object with the amount of noodles and sauces need for a lasagna
// IN > OUT : Array-Of-Strings > Object
// Psuedo Code :
    // Create new object named 'quanity' with keys empty 'noodles' and 'sauce'
    // Loop through layers
        // if(layer === 'noodles')
            //quanity.noodles += 50;
        // else if(layer === 'sauce')
            //quanity.sauce += 0.2;
    // return quantity
export function quantities(layers) {
    const quanity = {
        noodles: 0,
        sauce: 0,
    };

    for(let layer of layers) {
        if(layer === 'noodles')
            quanity.noodles += 50;
        else if(layer === 'sauce')
            quanity.sauce += 0.2;
    }

    return quanity;
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(oldRecipe, portions) {
    let newRecipe = {};
    for(let item in oldRecipe) {
        newRecipe[item] = oldRecipe[item] * portions / 2;
    }
    return newRecipe;
}