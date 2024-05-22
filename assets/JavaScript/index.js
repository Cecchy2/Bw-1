const form = document.getElementById("form");
const checkbox = document.getElementById("checkbox");
const proceedButton = document.getElementById("proceedButton");

proceedButton.addEventListener("click", function (params) {});
proceedButton.addEventListener("click", function (event) {
  console.log("Tentativo di invio del modulo"); // Log del tentativo di invio del modulo
  if (!checkbox.checked) {
    event.preventDefault(); // Impedisce l'azione del link
    console.log("Checkbox non selezionata"); // Log della mancata selezione della checkbox
    alert("Devi accettare i termini per procedere.");
  } else {
    console.log("Checkbox selezionata"); // Log della selezione della checkbox
  }
});
