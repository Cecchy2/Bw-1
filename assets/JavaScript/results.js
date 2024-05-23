// mi riprendo risposteCorrette e risposteSbagliate dalla memoria del browser
const numQuestions = sessionStorage.getItem("numQuestions");
const risposteCorrette = sessionStorage.getItem("risposteCorrette");
const risposteSbagliate = sessionStorage.getItem("risposteSbagliate");

const correctAnswersNumber = document.getElementById("correctAnswersNumber");
const wrongAnswersNumber = document.getElementById("wrongAnswersNumber");
const correctAnswersPercentage = document.getElementById("correctAnswersPercentage");
const wrongAnswersPercentage = document.getElementById("wrongAnswersPercentage");
const totalQuestionNumber = document.getElementsByClassName("totalQuestionNumber");

for (let i = 0; i < totalQuestionNumber.length; i++) {
  const element = totalQuestionNumber[i];
  element.innerText = numQuestions;
}

correctAnswersNumber.innerText = risposteCorrette;
wrongAnswersNumber.innerText = risposteSbagliate;
const percentualeRisposteEsatteNumero = Math.round((((risposteCorrette * 100) / numQuestions) * 100) / 100);
const percentualeRisposteSbagliateNumero = Math.round((((risposteSbagliate * 100) / numQuestions) * 100) / 100);

const remainingPercentageCorrectNumero = 100 - percentualeRisposteEsatteNumero;
const remainingPercentageWrongNumero = 100 - percentualeRisposteSbagliateNumero;

correctAnswersPercentage.innerText = percentualeRisposteEsatteNumero + "%";
wrongAnswersPercentage.innerText = percentualeRisposteSbagliateNumero + "%";

const wrongAnswersPercentageDonught = document.getElementById("wrongPercentage");
const correctAnswersPercentageDonught = document.getElementById("correctPercentage");

wrongAnswersPercentageDonught.setAttribute("stroke-dasharray", `${percentualeRisposteSbagliateNumero} ${remainingPercentageWrongNumero}`);
correctAnswersPercentageDonught.setAttribute("stroke-dasharray", `${percentualeRisposteEsatteNumero} ${remainingPercentageCorrectNumero}`);

console.log(percentualeRisposteSbagliateNumero, remainingPercentageWrongNumero);
console.log(percentualeRisposteEsatteNumero, remainingPercentageCorrectNumero);

if (risposteSbagliate > 5) {
  const congrat = document.getElementById("congrat");
  congrat.value = " ";
  const h3 = document.getElementById("h3");
  const paragrafo = document.getElementById("paragrafo");
  h3.innerText = "MI DISPIACE";
  paragrafo.innerText = "NON SEI PASSATO!";
}

const rateUsButton = document.getElementById("rateUsButton");
rateUsButton.addEventListener("click", (event) => {
  window.location.href = "Feedback.html";
});
