/* funzione per il timer. il timer si attiva all'avvio della pagina. per modificarne la durata cambiare il valore della variabile sec */
let timer;
let ele = document.getElementById("timer");

(function timerFunction() {
  let sec = 40;
  timer = setInterval(() => {
    ele.innerHTML = sec; //
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
})();
