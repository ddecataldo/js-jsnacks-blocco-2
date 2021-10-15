/*
 * Crea due array che hanno un numero di elementi diversi. 
 * Aggiungi elementi all'array che ha meno elementi 
 * fino a quando ne avrà tanti quanti l'altro.
 */

const array1 = [15, 2, 7];
const array2 = [5, 27, 56, 4 ,6, 7, 9];

let arrayPiccolo;
let arrayGrande;

// controllo lunghezze array
// se array1 e' lungo quanto l'array 2 -> fine
if( array1.length === array2.length){
  console.log('I due array sono di uguale lunghezza. FINE')
  arrayPiccolo = array1;
  arrayGrande = array2;
} 
// altrimenti, se l'array1 e' piu piccolo dell'array2
else if (array1.length < array2.length){
  // etichetto l'array1 come il piu piccolo tra i due
  arrayPiccolo = array1
  arrayGrande = array2
  console.log('array1 < array2')
} 
// altrimenti ( unico caso restante ) 
else {
  // etichetto l'array2 come il piu piccolo tra i due
  arrayPiccolo = array2
  arrayGrande = array1
  console.log('array2 < array1')
}

// caloclo da differenza tra i due
const differenza = arrayGrande.length - arrayPiccolo.length

// aggiungo tanti elementi all'array piu piccolo rispetto a quanto e' la differenza tra i due
for(let i = 0; i < differenza; i++ ){
  arrayPiccolo.push(Math.random())
}

console.log(arrayGrande, arrayPiccolo)