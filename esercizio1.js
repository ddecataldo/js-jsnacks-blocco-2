/*** 
 * TRACCIA
 * Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
 Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
 Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.  

***/

let numero;

while (!numero) {

    numeroUtente = prompt("Inserisci un numero");
    
    if(numero % 2 === 0){
        numero= "true";
        console.log("Il numero è pari");
    } else {
        numero= "false";
        console.log("Il numero è dispari");
    }

}