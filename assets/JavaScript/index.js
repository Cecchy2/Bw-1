const form = document.getElementById("form");
const checkbox = document.getElementById("checkbox");
const proceedButton = document.getElementById("proceedButton");

proceedButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Tentativo di invio del modulo"); // Log del tentativo di invio del modulo

  const difficulty = document.getElementById("diffic").value;
  const numQuestions = document.getElementById("numQuestions").value;

  if (!checkbox.checked) {
    console.log("Checkbox non selezionata"); // Log della mancata selezione della checkbox
    alert("Devi accettare i termini per procedere.");
  } else {
    if (difficulty === "easy") {
      sessionStorage.setItem("numQuestions", numQuestions);
      window.location.href = "benchmarkEasy.html";
    } else if (difficulty === "medium") {
      sessionStorage.setItem("numQuestions", numQuestions);
      window.location.href = "benchmarkMedium.html";
    } else if (difficulty === "hard") {
      sessionStorage.setItem("numQuestions", numQuestions);
      window.location.href = "benchmarkHard.html";
    }
    console.log("Checkbox selezionata"); // Log della selezione della checkbox
  }
});
