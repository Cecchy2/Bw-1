const howManyQuestions = sessionStorage.getItem("numQuestions"); // numero di domande selezionato
console.log("domande scelte: ", howManyQuestions);
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
    document.getElementById("timerNumerico").innerHTML = `${tempoRimanenteSecondi}
    <tspan x="130" dy="-38" font-size="10">SECONDS</tspan>
    <tspan x="125" dy="58" font-size="10">REMAINING</tspan>`;
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

  const duration = 40000;

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
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
      correct_answer: "Motherboard",
      incorrect_answers: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "How long is an IPv6 address?",
      correct_answer: "128 bits",
      incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does the Prt Sc button do?",
      correct_answer: "Captures what's on the screen and copies it to your clipboard",
      incorrect_answers: ["Nothing", "Saves a .png file of what's on the screen in your screenshots folder in photos", "Closes all windows"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "When Gmail first launched, how much storage did it provide for your email?",
      correct_answer: "1GB",
      incorrect_answers: ["512MB", "5GB", "Unlimited"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "The programming language 'Swift' was created to replace what other programming language?",
      correct_answer: "Objective-C",
      incorrect_answers: ["C#", "Ruby", "C++"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "'HTML' stands for Hypertext Markup Language.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
      correct_answer: "1000",
      incorrect_answers: ["512", "1024", "500"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does the 'MP' stand for in MP3?",
      correct_answer: "Moving Picture",
      incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
      correct_answer: "Apple",
      incorrect_answers: ["Microsoft", "Atari", "Commodore"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "Time on Computers is measured via the EPOX System.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ];

  const textQuestion = document.getElementById("domanda");
  const sezioneRisposte = document.getElementById("risposte");

  // creo una funzione per mettere le domande in ordine randomico
  function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  shuffleQuestions(questions);

  function mostraDomanda(index) {
    if (index >= howManyQuestions) {
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
          btnRisposta.style.backgroundColor = "green";
        } else {
          console.log("Risposta errata");
          totalWrongAnswers += 1; // Se la risposta è sbagliata +1 wrong answers
          risposteUtente.risposteSbagliate += 1;
          btnRisposta.style.backgroundColor = "red";
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
    sessionStorage.setItem("risposteCorrette", risposteUtente.risposteCorrette);
    sessionStorage.setItem("risposteSbagliate", risposteUtente.risposteSbagliate);
    window.location.href = "resultPage.html";
  };

  // Mostra la prima domanda
  mostraDomanda(currentQuestionIndex);
  const totalQuestions = document.getElementById("totalQuestions");
  totalQuestions.innerHTML = `/ ${howManyQuestions}`;
};

/* const totalQuestionNumber = document.querySelectorAll(".totalNumberQuestions");
totalQuestionNumber.forEach((currentElement) => {
  currentElement.innerText = questions.length;
}); */
