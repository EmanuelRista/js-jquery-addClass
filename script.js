// Creare un bottone che on hover aggiunga una classe che cambia il colore del testo e la toglie quando il mouse esce dal bottone. Con il doppio click cambio il testo in "cliccato". Con un solo click non fa niente
$("#my_button")
  .mouseenter(function() {
    $("#my_button").addClass("rosso");
  });
$("#my_button")
  .mouseleave(function() {
    $("#my_button").removeClass("rosso");
  });
