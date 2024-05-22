const form = document.getElementById("form");
const checkbox = document.getElementById("checkbox");
const proceedButton = document.getElementById("proceedButton");

proceedButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Tentativo di invio del modulo"); // Log del tentativo di invio del modulo
  if (!checkbox.checked) {
    console.log("Checkbox non selezionata"); // Log della mancata selezione della checkbox
    alert("Devi accettare i termini per procedere.");
  } else {
    location.href = "benchmark.html";
    console.log("Checkbox selezionata"); // Log della selezione della checkbox
  }
});
