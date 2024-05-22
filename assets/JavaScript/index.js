/* const resultCorrectAnswers = document.getElementById(
  "resultCorrectAnswersNumber"
);
resultCorrectAnswers.innerText = correctAnswers; */

const form = document.getElementById("form");
const checkbox = document.getElementById("checkbox");

form.addEventListener("submit", function (event) {
  console.log("modulo inviato");
  if (!checkbox.checked) {
    event.preventDefault();
    console.log("checkbox non selezionata");
    alert("Devi accettare i termini e le condizioni per continuare.");
  } else {
    console.log("checkbox selezionata");
  }
});
