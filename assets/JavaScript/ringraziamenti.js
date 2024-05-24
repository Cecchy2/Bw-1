const voto = localStorage.getItem("voto");
const votoDato = document.getElementById("votoDato");
votoDato.innerText = voto;

if (voto <= 8 && voto > 6) {
  const votoAlto = document.getElementById("votoAlto");
  votoAlto.classList.add("invisibile");
  const divVotoMedio = document.getElementById("votoMedio");
  const testoMedio = document.createElement("h3");
  testoMedio.innerText =
    "Grazie per aver condiviso la tua opinione con noi! Apprezziamo il tuo feedback di " +
    voto +
    " stelle lo utilizzeremo per migliorare ulteriormente i nostri servizi. Speriamo di poter soddisfare ancora meglio le tue aspettative in futuro.";
  divVotoMedio.appendChild(testoMedio);
} else if (voto <= 6) {
  const votoAlto = document.getElementById("votoAlto");
  votoAlto.classList.add("invisibile");
  const divVotoBasso = document.getElementById("votoBasso");
  const testoBasso = document.createElement("h3");
  testoBasso.innerText =
    "Grazie per aver condiviso il tuo feedback. Siamo dispiaciuti di non aver soddisfatto le tue aspettative e aver preso solamente " +
    voto +
    " stelle. Apprezziamo il tuo tempo nel farci sapere come possiamo migliorare. Il tuo contributo è importante per noi e lavoreremo per offrirti un'esperienza migliore in futuro.";
  divVotoBasso.appendChild(testoBasso);
}
