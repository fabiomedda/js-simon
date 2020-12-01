/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta,
i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti
e quali numeri sono stati ricordati.
*/
$(function () {

  var numeri = [];
  var i = 0;
  while (i < 5) {
    var numeroProv = Math.ceil(Math.random() * 100);
    console.log(numeroProv);
    if (!numeri.includes(numeroProv)) {
      numeri.push(numeroProv);
      i++;
    }
  }
  console.log(numeri);

  $("p.numeri").text(numeri);

  var numeriUtente = [];

  setTimeout(function () {
    $("p.numeri").text("inserisci i numeri che ricordi");

    i = 1;
    setTimeout(function () {
      while (i <= 5) {
        var numeroProvUtente = Number(prompt("inserisci numero " + i));
        if (!numeriUtente.includes(numeroProvUtente)) {
          numeriUtente.push(numeroProvUtente);
          i++;
        } else {
          alert("inserisci un numero diverso");
        }
      }

      var x = 0;
      var numeriRicordati = [];

      for (i = 0; i < 5; i++) {

        if (numeri.includes(numeriUtente[i])) {
          x++;
          numeriRicordati.push(numeriUtente[i]);
        }

      }
      console.log("Hai ricordato " + x + " numeri");
      $("p.tot_numeri").text("Hai ricordato " + x + " numeri");
      console.log("Questi sono i numeri che hai ricordato", numeriRicordati);
      $("p.numeri_ricordati").text("Questi sono i numeri che hai ricordato: " + numeriRicordati);

    }, 10);


  }, 30000);





});
