/*** 
 * TRACCIA
 * Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
 Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
 Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.  

***/

let numero = false;

while (!numero) {

    numeroUtente = parseInt(prompt("Inserisci un numero"));
    
    if(numeroUtente % 2 === 0){
        numero= "true";
        console.log("Il numero " + numeroUtente + " è pari");
    } else {
        numero= "false";
        console.log("Il numero " + numeroUtente + " è dispari");
    }

}