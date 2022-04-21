// chiedo all'utente di inserire una parola

let userWord = prompt("inserisci una parola")

// divido la parola in lettere

let splitUserWord = userWord.split("");
console.log("parola divisa in lettere", splitUserWord);

// inverto le lettere 

let splitUserWordReverse = splitUserWord.reverse();
console.log("lettere inserite al contrario", splitUserWordReverse);

// unisco la parola al contrario

let userWordReverse = splitUserWordReverse.join("");
console.log(userWordReverse);

// variabile 

if (isThisWordPalindromes(userWord, userWordReverse)){
    alert ("la parola che hai inserito è palindroma");
} else {
    alert ("la parola che hai inserito non è palindroma");
}

// funzione

/**
 * Description
 * @param {string} - firstWord
 * @param {string} - secondWord
 * @returns {boolean} - valore booleano
 */

function isThisWordPalindromes(firstWord, secondWord) {
    let comparison = false;

    if (firstWord === secondWord) {
        comparison = true;
    }

    return comparison;
}