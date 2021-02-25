var tiri = prompt("inserisci quanti tiri fare");

var numeroDatoPc, numeroDatoUtente;


for (var i = 0; i < tiri; i++) {
  numeroDatoUtente = Math.floor(Math.random() * 6) + 1;

  numeroDatoPc = Math.floor(Math.random() * 6) + 1;

  console.log(numeroDatoPc);
  console.log(numeroDatoUtente);
}

if (numeroDatoPc > numeroDatoUtente) {
  console.log ("Il vincitore è il PC con " + numeroDatoPc + " punti.");
}
else if (numeroDatoPc < numeroDatoUtente){
  console.log ("Il vincitore è l'utente " + numeroDatoUtente + " punti.");
}
else {
  console.log ("Risultato uguale");
}
