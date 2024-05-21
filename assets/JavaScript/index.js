const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
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

/* const textQuestion = document.getElementById("domanda");
console.log(questions);

const risposteUtente = [];
let punteggioUtente = 0;
let indexCurrentQuestion = 0;


for (let i = 0; i < questions.length; i++) {
  // cambio il testo della domanda
  textQuestion.innerText = questions[i].question;

  // creo un array con tutte le risposte di una domanda
  const arrayRisposte = [questions[i].correct_answer, ...questions[i].incorrect_answers];

  // creo un riferimento alla sezione dove andranno le risposte
  const sezioneRisposte = document.getElementById("risposte");

  // pulisco la sezione risposte prima di creare i bottoni
  sezioneRisposte.innerHTML = "";

  // itero gli elementi dell'array con le risposte per generare tanti bottoni quante sono le risposte
  arrayRisposte.forEach((currentAnswer) => {
    const btnRisposta = document.createElement("button");
    btnRisposta.innerText = currentAnswer;
    btnRisposta.classList.add("button");

    // aggiungo event listener click ai bottoni
    btnRisposta.addEventListener("click", (event) => {
      if (btnRisposta.innerText === questions[i].correct_answer) {
        console.log("riposta esatta");
        punteggioUtente += 1; // se la risposta è corretta +1 punto
      } else {
        console.log("risposta errata");
        punteggioUtente += 0; // se la risposta è sbagliata +0 punti
      }
      console.log("punteggio= ", punteggioUtente);

      // devo creare un delay

      // alla pressione del tasto, si genera una nuova domanda con nuove risposte
      sezioneRisposte.innerHTML = "";
    });

    textQuestion.innerText = questions[i].question;
    sezioneRisposte.appendChild(btnRisposta);
  });
} */

const textQuestion = document.getElementById("domanda");
const sezioneRisposte = document.getElementById("risposte");

const risposteUtente = [];
let punteggioUtente = 0; // contatore punteggio utente
let currentQuestionIndex = 0; // contatore domande

function mostraDomanda(index) {
  if (index >= questions.length) {
    getReuslt();
    return;
  }

  // Cambio il testo della domanda
  textQuestion.innerText = questions[index].question;

  // Creo un array con tutte le risposte di una domanda
  const arrayRisposte = [
    questions[index].correct_answer,
    ...questions[index].incorrect_answers,
  ];
  arrayRisposte.sort(() => Math.random() - 0.5);

  // Pulisco la sezione risposte prima di creare i bottoni
  sezioneRisposte.innerHTML = "";

  // Itero gli elementi dell'array con le risposte per generare tanti bottoni quante sono le risposte
  arrayRisposte.forEach((currentAnswer) => {
    const btnRisposta = document.createElement("button");
    btnRisposta.innerText = currentAnswer;
    btnRisposta.classList.add("button");

    // Aggiungo event listener click ai bottoni
    btnRisposta.addEventListener("click", () => {
      if (btnRisposta.innerText === questions[index].correct_answer) {
        console.log("Risposta esatta");
        punteggioUtente += 1; // Se la risposta è corretta +1 punto
      } else {
        console.log("Risposta errata");
      }
      console.log("Punteggio= ", punteggioUtente);

      // Aggiungo un delay di 1 secondo prima di passare alla prossima domanda
      setTimeout(() => {
        mostraDomanda(index + 1);
      }, 1000);
    });

    sezioneRisposte.appendChild(btnRisposta);
  });
}

const getReuslt = () => {
  window.location.href = "resultPage.html";
};

// Mostra la prima domanda
mostraDomanda(currentQuestionIndex);
