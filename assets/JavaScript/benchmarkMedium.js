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
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },

    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
      correct_answer: "Clipper Chip",
      incorrect_answers: ["Enigma Machine", "Skipjack", "Nautilus"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "The very first recorded computer 'bug' was a moth found inside a Harvard Mark II computer.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "When was the programming language 'C#' released?",
      correct_answer: "2000",
      incorrect_answers: ["1998", "1999", "2001"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does AD stand for in relation to Windows Operating Systems? ",
      correct_answer: "Active Directory",
      incorrect_answers: ["Alternative Drive", "Automated Database", "Active Department"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Which of the following is a personal computer made by the Japanese company Fujitsu?",
      correct_answer: "FM-7",
      incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Android versions are named in alphabetical order.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "It's not possible to format a write-protected DVD-R Hard Disk.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Which of these people was NOT a founder of Apple Inc?",
      correct_answer: "Jonathan Ive",
      incorrect_answers: ["Steve Jobs", "Ronald Wayne", "Steve Wozniak"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What five letter word is the motto of the IBM Computer company?",
      correct_answer: "Think",
      incorrect_answers: ["Click", "Logic", "Pixel"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "How many bytes are in a single Kibibyte?",
      correct_answer: "1024",
      incorrect_answers: ["2400", "1000", "1240"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Which one of these is not an official development name for a Ubuntu release?",
      correct_answer: "Mystic Mansion",
      incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "How fast is USB 3.1 Gen 2 theoretically?",
      correct_answer: "10 Gb/s",
      incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What was the name given to Android 4.3?",
      correct_answer: "Jelly Bean",
      incorrect_answers: ["Lollipop", "Nutella", "Froyo"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What is the number of keys on a standard Windows Keyboard?",
      correct_answer: "104",
      incorrect_answers: ["64", "94", "76"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "The first dual-core CPU was the Intel Pentium D.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "AMD created the first consumer 64-bit processor.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Which internet company began life as an online bookstore called 'Cadabra'?",
      correct_answer: "Amazon",
      incorrect_answers: ["eBay", "Overstock", "Shopify"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "The common software-programming acronym 'I18N' comes from the term 'Interlocalization'.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "'Windows NT' is a monolithic kernel.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
      correct_answer: "JavaScript",
      incorrect_answers: ["C#", "Python", "PHP"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
      correct_answer: "Taiwan",
      incorrect_answers: ["United States", "Germany", "China (People's Republic of)"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Science: Computers",
      question: "A Boolean value of '0' represents which of these words?",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "All of the following programs are classified as raster graphics editors EXCEPT:",
      correct_answer: "Inkscape",
      incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
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
