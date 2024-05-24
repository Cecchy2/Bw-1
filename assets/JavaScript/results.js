// mi riprendo risposteCorrette, risposteSbagliate e numero di domande dalla memoria del browser
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
  element.innerText = numQuestions; // scrive il numero di domande totali
}

correctAnswersNumber.innerText = risposteCorrette;
wrongAnswersNumber.innerText = risposteSbagliate;

// calcolo della percentuale del voto
const percentualeRisposteEsatteNumero = Math.round((((risposteCorrette * 100) / numQuestions) * 100) / 100);
const percentualeRisposteSbagliateNumero = Math.round((((risposteSbagliate * 100) / numQuestions) * 100) / 100);

// calcolo della percentuale residua per colorare il grafico
const remainingPercentageCorrectNumero = 100 - percentualeRisposteEsatteNumero;
const remainingPercentageWrongNumero = 100 - percentualeRisposteSbagliateNumero;

correctAnswersPercentage.innerText = percentualeRisposteEsatteNumero + "%";
wrongAnswersPercentage.innerText = percentualeRisposteSbagliateNumero + "%";

// setto i valori di stroke-dasharray per colorare il grafico
const wrongAnswersPercentageDonught = document.getElementById("wrongPercentage");
const correctAnswersPercentageDonught = document.getElementById("correctPercentage");
wrongAnswersPercentageDonught.setAttribute("stroke-dasharray", `${percentualeRisposteSbagliateNumero} ${remainingPercentageWrongNumero}`);
correctAnswersPercentageDonught.setAttribute("stroke-dasharray", `${percentualeRisposteEsatteNumero} ${remainingPercentageCorrectNumero}`);

console.log(percentualeRisposteSbagliateNumero, remainingPercentageWrongNumero);
console.log(percentualeRisposteEsatteNumero, remainingPercentageCorrectNumero);

const rateUsButton = document.getElementById("rateUsButton");
rateUsButton.addEventListener("click", (event) => {
  window.location.href = "Feedback.html";
});

const chartResult = document.getElementById("chartResultTest");

// genero il testo all'interno del grafico a seconda del punteggio ottenuto
if (percentualeRisposteEsatteNumero >= 60) {
  chartResult.innerHTML = `
  <tspan font-size="2px" dy="0em" x="-6%">Congratulations!</tspan>
  <tspan x="-6%" dy="2em" font-size="2px" fill="rgb(0, 255, 255)">You passed the exam</tspan>
  <tspan x="-6%" dy="3.4em" font-size="1.6px">We'll send you the certificate</tspan>
  <tspan x="-6%" dy="1.2em" font-size="1.6px">in few minutes.</tspan>
  <tspan x="-6%" dy="1.2em" font-size="1.6px">Check your email (including</tspan>
  <tspan x="-11%" dy="1.2em" font-size="1.6px">promotions / spam folder)</tspan>`;
}

if (percentualeRisposteEsatteNumero < 60) {
  chartResult.innerHTML = `
  <tspan font-size="2px" dy="0em" x="-6%">We are sorry</tspan>
  <tspan x="-5.2%" dy="2em" font-size="2px" fill="rgb(0, 255, 255)">You didn't pass the exam</tspan>
  <tspan x="-6%" dy="4.5em" font-size="1.6px">We are sure that next time</tspan>
  <tspan x="-5%" dy="1.2em" font-size="1.6px">you'll do better.</tspan>
  <tspan x="-5%" dy="2.1em" font-size="1.6px">Keep studying and you'll</tspan>
  <tspan x="-12%" dy="1.2em" font-size="1.6px">succeed!</tspan>`;
}
