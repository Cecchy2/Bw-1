let voto = 0;

const stelleColorate = () => {
  const stelle = document.querySelectorAll(".stella path");
  console.log(stelle);
  voto = 0;

  for (let i = 0; i < stelle.length; i++) {
    stelle[i].addEventListener("click", (event) => {
      voto = i + 1;
      coloraStelle(voto, stelle);
    });
  }
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
  const messaggioSalvato = input.value + " Il voto lasciato è " + voto;
  console.log(messaggioSalvato);
  input.value = " ";
  window.alert("il messaggio è stato inviato");
});
