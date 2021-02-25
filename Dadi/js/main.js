// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
var lancio = prompt("Inserisci quanti lanci fare");
console.log(lancio);

var totaleLanciUtente = 0;
var totaleLanciPc = 0;

// Somma dei dati dell'utente
for (var i = 0; i < lancio; i++ ) {
  var numeroDatoUtente = Math.floor(Math.random() * 6) + 1;
  console.log("numero dado utente: " + numeroDatoUtente);
  // somma numero dadi utente
  totaleLanciUtente += numeroDatoUtente
}

// Somma dei dati del pc
for (var i = 0; i < lancio; i++ ) {
  var numeroDatoPc = Math.floor(Math.random() * 6) + 1;
  console.log("numero dado PC: " + numeroDatoPc);
  // somma numero dadi pc
  totaleLanciPc += numeroDatoPc
}

// proviamo se la somma dei punteggi funziona
console.log ("Punteggio totale pc: " + totaleLanciPc);
console.log ("Punteggio totale utente: " + totaleLanciUtente);

//  troviamo il vincitore
if (totaleLanciPc > totaleLanciUtente) {
  console.log ("vince il pc con: " + totaleLanciPc);
  document.getElementById('vincitore').innerHTML = "Il PC con " + totaleLanciPc + " punti!";
  // alert("Il vincitore è il PC con " + totaleLanciPc + " punti.");
}
else if (totaleLanciPc < totaleLanciUtente) {
  console.log ("vince l'utente con: " + totaleLanciUtente);
  document.getElementById('vincitore').innerHTML = "L'utente con " + totaleLanciUtente + " punti!";
  // alert("Il vincitore è l'utente con " + totaleLanciUtente + " punti.");
}
else {
  console.log ("Risultato uguale: " + totaleLanciUtente + " " + totaleLanciPc);
  document.getElementById('vincitore').innerHTML = "Pareggio con " + totaleLanciUtente + " punti per l'utente e il PC";
  // alert("Pareggio");
}
