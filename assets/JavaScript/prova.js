let voto = 0;

const stelleColorate = () => {
  const stelle = document.querySelectorAll(".stella path");
  console.log(stelle);
  voto = 0;

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

const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const messaggioSalvato = input.value + ", il voto lasciato è " + voto;
  console.log(messaggioSalvato);
  input.value = " ";

  const stelle = document.querySelectorAll(".stella path");
  let votoAttuale = 0;
  stelle.forEach((stella, index) => {
    if (stella.style.fill === "rgb(0, 255, 255)") {
      votoAttuale = index + 1;
    }
  });

  const pageContainer = document.getElementById("pageContainer");
  pageContainer.innerText = "";

  const feedbackText = document.createElement("p");
  if (votoAttuale <= 8) {
    feedbackText.innerText =
      "Thanks for your feedback! We'll make sure to keep improving our services and we hope we will be able to keep up with your future expectations 	&#128515;";
    "Grazie per aver condiviso la tua opinione con noi! Apprezziamo il tuo feedback di " +
      votoAttuale +
      " stelle lo utilizzeremo per migliorare ulteriormente i nostri servizi. Speriamo di poter soddisfare ancora meglio le tue aspettative in futuro.";
  } else if (votoAttuale <= 6) {
    feedbackText.innerText =
      "Thanks for your feedback! We are sorry we couldn't meet your expactations 😔 We appreciate your opinion and we will rely on it to improve and provide you with a better experience in the future";
  }
  pageContainer.appendChild(feedbackText);
});
