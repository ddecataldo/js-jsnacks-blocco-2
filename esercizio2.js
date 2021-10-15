/*** 
 * TRACCIA
 * Crea due array che hanno un numero di elementi diversi. 
 * Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.  

***/

const array1 = [15, 2, 7];
const array2 = [5];

for(i = 0; i < array1.length; i++ ){
    // In questo momento salvo nella variabile numeroElementiArray1 tutti gli elementi di array1
    const numeroElementiArray1 = array1[i];
    console.log(numeroElementiArray1);

    for (y = 0; i < array2.length; i++){
        // In questo momento salvo nella variabile numeroElementiArray2 tutti gli elementi di array2
        const numeroElementiArray2 = array2[i];
        console.log(numeroElementiArray2);
    }

}

// Confronta i due array

// Se uno dei due array ha più elementi dell'altro deve pushare gli elementi in più fino a 
// raggiungere la parità di elementi

