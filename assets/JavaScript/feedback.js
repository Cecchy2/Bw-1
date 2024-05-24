let voto = 0;

const stelleColorate = () => {
  const stelle = document.querySelectorAll(".stella path"); // seleziono tutte le stelle
  console.log(stelle);
  voto = 0;

  // aggiungo un event listener tipo hover e onclick a tutte le stelle e richiamo la funzione coloraStelle
  stelle.forEach(function (stella, index) {
    stella.addEventListener("mouseover", function () {
      coloraStelle(index + 1, stelle);
    });

    stella.addEventListener("mouseout", function () {
      coloraStelle(voto, stelle);
    });

    stella.addEventListener("click", function () {
      voto = index + 1;
      coloraStelle(voto, stelle);
    });
  });
};

// colora le stelle
const coloraStelle = (voto, stelle) => {
  for (let i = 0; i < stelle.length; i++) {
    if (i < voto) {
      stelle[i].style.fill = "rgb(0, 255, 255)";
    } else {
      stelle[i].style.fill = "";
    }
  }
};

stelleColorate();

// aggiungo event listener onclick sul bottone
const button = document.getElementById("button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.getElementById("input");
  const messaggioSalvato = input.value + ", il voto lasciato è " + voto;
  console.log(messaggioSalvato);
  input.value = " ";

  // al click del bottone si svuota la pagina
  const pageContainer = document.getElementById("pageContainer");
  pageContainer.innerText = "";

  // creo un paragrafo il cui testo dipende dal voto dato con le stelline
  const feedbackText = document.createElement("p");
  feedbackText.classList.add("feedbackMessage");
  if (voto > 8) {
    feedbackText.innerHTML =
      "Thanks for your feedback! <br> We'll continously improve our services and we will keep up with your future expectations <br> &#128515; &#128640;";
  } else if (voto <= 8 && voto > 6) {
    feedbackText.innerHTML =
      "Thanks for your feedback! <br> We appreciate your opinion and we will rely on it to improve and provide you with a better experience in the future <br> &#128515; &#128640;";
  } else {
    feedbackText.innerHTML =
      "Thanks for your feedback! <br> We are sorry we couldn't meet your expectations <br> We appreciate your opinion and we will rely on it to improve and provide you with a better experience in the future <br> &#128532;";
  }
  pageContainer.appendChild(feedbackText);
});

console.log(voto);
