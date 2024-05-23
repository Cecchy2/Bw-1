/* const questions = [
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
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"],
  },
  { type: "multiple", difficulty: "easy", category: "Science: Computers", question: "How long is an IPv6 address?", correct_answer: "128 bits", incorrect_answers: ["32 bits", "64 bits", "128 bytes"] },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer: "Captures what's on the screen and copies it to your clipboard",
    incorrect_answers: ["Nothing", "Saves a .png file of what's on the screen in your screenshots folder in photos", "Closes all windows"],
  },
  { type: "multiple", difficulty: "easy", category: "Science: Computers", question: "When Gmail first launched, how much storage did it provide for your email?", correct_answer: "1GB", incorrect_answers: ["512MB", "5GB", "Unlimited"] },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "The programming language 'Swift' was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  { type: "boolean", difficulty: "easy", category: "Science: Computers", question: "'HTML' stands for Hypertext Markup Language.", correct_answer: "True", incorrect_answers: ["False"] },
  { type: "multiple", difficulty: "easy", category: "Science: Computers", question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?", correct_answer: "1000", incorrect_answers: ["512", "1024", "500"] },
  { type: "multiple", difficulty: "easy", category: "Science: Computers", question: "What does the 'MP' stand for in MP3?", correct_answer: "Moving Picture", incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"] },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Atari", "Commodore"],
  },
  { type: "boolean", difficulty: "easy", category: "Science: Computers", question: "Time on Computers is measured via the EPOX System.", correct_answer: "False", incorrect_answers: ["True"] },
]; */

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
