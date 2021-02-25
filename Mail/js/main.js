// Array con email
var emailDataBase = ["giorgio@hotmail.it", "luca@live.com", "bbsognidoro@hotmail.it", "boolean@info.it", "lucia@libero.net"]

// chiedo l'email all'utente
// var emailUtente = prompt("Inserisci la tua Email");
// console.log(emailUtente);


// Salvo la variabile Click
var bottoneClick = document.getElementById('invio');
console.log(invio);

// Funzione del Click
bottoneClick.addEventListener('click',
function () {
  var emailUtente = document.getElementById('email_utente').value;
  console.log(email_utente);

  // Controllo email nel database
  var emailTrovata = false;

  for (var i = 0; i < emailDataBase.length; i++) {
    if (emailUtente == emailDataBase[i]) {
      emailTrovata = true;
    }
  }

  // Stampo il messaggio
  if (emailTrovata == true) {
    console.log("Email trovata nel database");
    document.getElementById('email').innerHTML =  "Email trovata nel database";
  }
  else {
    console.log("Email non trovata nel database");
    document.getElementById('email').innerHTML =  "Email non trovata nel database";
    document.getElementById('email').className = 'red';
  }
}
);
