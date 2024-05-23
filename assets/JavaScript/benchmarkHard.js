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
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
      correct_answer: "Coffee Lake",
      incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
      correct_answer: "Heartbleed",
      incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "The acronym 'RIP' stands for which of these?",
      correct_answer: "Routing Information Protocol",
      incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
      correct_answer: "Injection ",
      incorrect_answers: ["Broken Authentication", "Cross-Site Scripting", "Insecure Direct Object References"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What internet protocol was documented in RFC 1459?",
      correct_answer: "IRC",
      incorrect_answers: ["HTTP", "HTTPS", "FTP"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Which of these is not a layer in the OSI model for data communications?",
      correct_answer: "Connection Layer",
      incorrect_answers: ["Application Layer", "Transport Layer", "Physical Layer"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
      correct_answer: "ADPCM Sampler",
      incorrect_answers: ["FM Synthesizer", "Programmable Sound Generator (PSG)", "PCM Sampler"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
      correct_answer: "Transport",
      incorrect_answers: ["Session", "Data link", "Network"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Which RAID array type is associated with data mirroring?",
      correct_answer: "RAID 1",
      incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "The Harvard architecture for micro-controllers added which additional bus?",
      correct_answer: "Instruction",
      incorrect_answers: ["Address", "Data", "Control"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
      correct_answer: "Micronesia",
      incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What port does HTTP run on?",
      correct_answer: "80",
      incorrect_answers: ["53", "443", "23"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Which data structure does FILO apply to?",
      correct_answer: "Stack",
      incorrect_answers: ["Queue", "Heap", "Tree"],
    },
    {
      type: "boolean",
      difficulty: "hard",
      category: "Science: Computers",
      question: "DHCP stands for Dynamic Host Configuration Port.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Which of these names was an actual codename for a cancelled Microsoft project?",
      correct_answer: "Neptune",
      incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
    },
    {
      type: "boolean",
      difficulty: "hard",
      category: "Science: Computers",
      question: "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What was the name of the security vulnerability found in Bash in 2014?",
      correct_answer: "Shellshock",
      incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Which of these is not a key value of Agile software development?",
      correct_answer: "Comprehensive documentation",
      incorrect_answers: ["Individuals and interactions", "Customer collaboration", "Responding to change"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
      correct_answer: "Game Maker",
      incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
      correct_answer: "Cheetah",
      incorrect_answers: ["Puma", "Tiger", "Leopard"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What major programming language does Unreal Engine 4 use?",
      correct_answer: "C++",
      incorrect_answers: ["Assembly", "C#", "ECMAScript"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Which of the following computer components can be built using only NAND gates?",
      correct_answer: "ALU",
      incorrect_answers: ["CPU", "RAM", "Register"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "Who is the original author of the realtime physics engine called PhysX?",
      correct_answer: "NovodeX",
      incorrect_answers: ["Ageia", "Nvidia", "AMD"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Science: Computers",
      question: "What was the name of the first Bulgarian personal computer?",
      correct_answer: "IMKO-1",
      incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
    },
    {
      type: "boolean",
      difficulty: "hard",
      category: "Science: Computers",
      question: "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
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
