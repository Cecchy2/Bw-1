const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// mi riprendo risposteCorrette e risposteSbagliate dalla memoria del browser
const risposteCorrette = localStorage.getItem("risposteCorrette");
const risposteSbagliate = localStorage.getItem("risposteSbagliate");

const correctAnswersNumber = document.getElementById("correctAnswersNumber");
const wrongAnswersNumber = document.getElementById("wrongAnswersNumber");
const correctAnswersPercentage = document.getElementById("correctAnswersPercentage");
const wrongAnswersPercentage = document.getElementById("wrongAnswersPercentage");
const totalQuestionNumber = document.getElementsByClassName("totalQuestionNumber");

for (let i = 0; i < totalQuestionNumber.length; i++) {
  const element = totalQuestionNumber[i];
  element.innerText = questions.length;
}

correctAnswersNumber.innerText = risposteCorrette;
wrongAnswersNumber.innerText = risposteSbagliate;
const percentualeRisposteEsatteNumero = (risposteCorrette * 100) / questions.length;
const percentualeRisposteSbagliateNumero = (risposteSbagliate * 100) / questions.length;

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
  congrat.value = "";
  const h3 = document.getElementById("h3");
  const paragrafo = document.getElementById("paragrafo");
  h3.innerText = "MI DISPIACE";
  paragrafo.innerText = "NON SEI PASSATO";
}
