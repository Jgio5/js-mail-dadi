var emailUtente;

var emailDataBase = ["giorgio@hotmail.it", "luca@live.com", "bbsognidoro@hotmail.it", "boolean@info.it", "lucia@libero.net"]

emailUtente = prompt("Inserisci la tua Email");
console.log(emailUtente);


if (emailUtente == emailDataBase[0]) {
  console.log("Email trovata nel database");
  document.getElementById('email').innerHTML =  "Email trovata nel database";
}
else if (emailUtente == emailDataBase[1]) {
  console.log("Email trovata nel database");
  document.getElementById('email').innerHTML =  "Email trovata nel database";
}
else if (emailUtente == emailDataBase[2]) {
  console.log("Email trovata nel database");
  document.getElementById('email').innerHTML =  "Email trovata nel database";
}
else if (emailUtente == emailDataBase[3]) {
  console.log("Email trovata nel database");
  document.getElementById('email').innerHTML =  "Email trovata nel database";
}
else if (emailUtente == emailDataBase[4]) {
  console.log("Email trovata nel database");
  document.getElementById('email').innerHTML =  "Email trovata nel database";
}
else {
  console.log("Email non trovata nel database");
  document.getElementById('email').innerHTML =  "Email non trovata nel database"
}
