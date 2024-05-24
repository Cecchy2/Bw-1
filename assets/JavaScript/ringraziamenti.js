const voto = localStorage.getItem("voto");
const votoDato = document.getElementById("votoDato");
votoDato.innerText = voto;

if (voto <= 6 && voto > 4) {
  const votoAlto = document.getElementById("votoAlto");
  votoAlto.classList.add("invisibile");
  const divVotoMedio = document.getElementById("votoMedio");
  const testoMedio = document.createElement("h1");
  testoMedio.innerText =
    "Grazie per aver condiviso la tua opinione con noi! Apprezziamo il tuo feedback di " +
    voto +
    " stelle lo utilizzeremo per migliorare ulteriormente i nostri servizi. Speriamo di poter soddisfare ancora meglio le tue aspettative in futuro.";
  divVotoMedio.appendChild(testoMedio);
} else if (voto <= 4) {
  const votoAlto = document.getElementById("votoAlto");
  votoAlto.classList.add("invisibile");
  const divVotoBasso = document.getElementById("votoBasso");
  const testoBasso = document.createElement("h1");
  testoBasso.innerText =
    "Grazie per aver condiviso il tuo feedback. Siamo dispiaciuti di non aver soddisfatto le tue aspettative e apprezziamo il tuo tempo nel farci sapere come possiamo migliorare. Il tuo contributo è importante per noi e lavoreremo per offrirti un'esperienza migliore in futuro.";
  divVotoBasso.appendChild(testoBasso);
}
