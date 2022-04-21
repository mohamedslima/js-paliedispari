// chiedo all'utente di inserire una parola

let userWord = prompt("inserisci una parola")

// divido la parola in lettere

let splitUserWord = userWord.split("");
console.log("parola divisa in lettere", splitUserWord);

// inverto le lettere 

let splitUserWordReverse = splitUserWord.reverse();
console.log("lettere inserite al contrario", splitUserWordReverse);

