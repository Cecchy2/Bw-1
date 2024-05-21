const stelleColorate = () => {
  const stelle = document.querySelectorAll(".stella path");
  console.log(stelle);
  let voto = 0;

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
      stelle[i].style.fill = "rgb(224, 224, 224)";
    } else {
      stelle[i].style.fill = "";
    }
  }
};

stelleColorate();
