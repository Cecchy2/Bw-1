let currentQuestionIndex = 0; // contatore domande
let progressoCerchio = document.querySelector(".progresso");
let raggio = progressoCerchio.r.baseVal.value; /* calcolare il raggio del cerchio */
let circonferenza = raggio * 2 * Math.PI;
const risposteUtente = {
  risposteCorrette: 0,
  risposteSbagliate: 0,
};
let totalCorrectAnswers = 0; // contatore risposte corrette
let totalWrongAnswers = 0; // contatore risposte sbagliate

window.onload = function () {
  //let progressoCerchio = document.querySelector(".progresso");
  //let raggio = progressoCerchio.r.baseVal.value; /* calcolare il raggio del cerchio */
  //let circonferenza = raggio * 2 * Math.PI;
  /* dargli una circonferenza completa cercare dasharray e offset */
  progressoCerchio.style.strokeDasharray = circonferenza;
  progressoCerchio.style.strokeDashoffset = circonferenza;

  let intervallo;

  /* avanzamento del "progresso cerchio" */
  function avanzamento(percent) {
    progressoCerchio.style.strokeDashoffset = circonferenza - (percent / 100) * circonferenza;

    //  tempo rimanente in secondi
    let tempoRimanenteSecondi = Math.ceil(((percent / 100) * duration) / 1000);

    //  timer numeric0 aggoirnato con il tempo rimanente
    document.getElementById("timerNumerico").innerText = tempoRimanenteSecondi;
  }

  /* gestire il countdown */
  /* impostare un punto di inizio */
  /* date now */
  /* calcolare il tempo trascorso dallo start al date now */

  function inizioCount(duration) {
    let start = Date.now();
    intervallo = setInterval(function () {
      let durata = Date.now() - start;

      /* calcolare la percentuale del tempo trascorso e se arriva al 100%bloccare con clear interval */
      let percent = (durata / duration) * 100;
      if (percent >= 100) {
        percent = 100;
        clearInterval(intervallo);
        currentQuestionIndex += 1;
        risposteUtente.risposteSbagliate += 1;
        mostraDomanda(currentQuestionIndex);
      }
      avanzamento(100 - percent); // mostrare il countdown
    }, 100);
  }

  function resetTimer(duration) {
    clearInterval(intervallo); // ferma il timer corrente
    avanzamento(100); // resetta il cerchio di progresso
    inizioCount(duration); // avvia un nuovo countdown
  }

  const duration = 2000;

  // Funzioni per la gestione delle domande
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

  const textQuestion = document.getElementById("domanda");
  const sezioneRisposte = document.getElementById("risposte");

  /* const risposteUtente = {
    risposteCorrette: 0,
    risposteSbagliate: 0,
  };

  let totalCorrectAnswers = 0; // contatore risposte corrette
  let totalWrongAnswers = 0; // contatore risposte sbagliate */
  //   let currentQuestionIndex = 0; // contatore domande

  function mostraDomanda(index) {
    if (index >= questions.length) {
      getReuslt();
      return;
    }

    resetTimer(duration); // Resetta il timer ogni volta che mostri una nuova domanda

    // Cambio il testo della domanda
    textQuestion.innerText = questions[index].question;

    // Creo un array con tutte le risposte di una domanda
    const arrayRisposte = [questions[index].correct_answer, ...questions[index].incorrect_answers];
    arrayRisposte.sort(() => Math.random() - 0.5);

    // Pulisco la sezione risposte prima di creare i bottoni
    sezioneRisposte.innerHTML = "";

    // Itero gli elementi dell'array con le risposte per generare tanti bottoni quante sono le risposte
    arrayRisposte.forEach((currentAnswer) => {
      const btnRisposta = document.createElement("button");
      btnRisposta.innerText = currentAnswer;
      btnRisposta.classList.add("button");

      const numeroDomanda = document.getElementById("currentQuestionNumber");
      numeroDomanda.innerText = index + 1;

      // Aggiungo event listener click ai bottoni
      btnRisposta.addEventListener("click", () => {
        if (btnRisposta.innerText === questions[index].correct_answer) {
          console.log("Risposta esatta");
          totalCorrectAnswers += 1; // Se la risposta è corretta +1 correct answers
          risposteUtente.risposteCorrette += 1;
        } else {
          console.log("Risposta errata");
          totalWrongAnswers += 1; // Se la risposta è sbagliata +1 wrong answers
          risposteUtente.risposteSbagliate += 1;
        }
        console.log("risposte corrette= ", risposteUtente.risposteCorrette);
        console.log("risposte sbagliate= ", risposteUtente.risposteSbagliate);

        // Aggiungo un delay di 1 secondo prima di passare alla prossima domanda
        setTimeout(() => {
          mostraDomanda(index + 1);
        }, 1000);
      });

      sezioneRisposte.appendChild(btnRisposta);
    });
  }

  const getReuslt = () => {
    localStorage.setItem("risposteCorrette", risposteUtente.risposteCorrette);
    localStorage.setItem("risposteSbagliate", risposteUtente.risposteSbagliate);
    window.location.href = "resultPage.html";
  };

  // Mostra la prima domanda
  mostraDomanda(currentQuestionIndex);
};

const totalQuestionNumber = document.querySelectorAll(".totalNumberQuestions");
totalQuestionNumber.forEach((currentElement) => {
  currentElement.innerText = questions.length;
});
