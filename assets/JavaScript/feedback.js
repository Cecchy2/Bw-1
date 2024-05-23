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
  window.alert("il messaggio è stato inviato");

  localStorage.setItem("voto", voto);
  location.href = "ringraziamenti.html";
});

console.log(voto);
