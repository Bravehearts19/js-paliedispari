const isPari = document.getElementById("user_choice").value;
const numeroSceltoDallUtente = document.getElementById("user_number").value;

function generaNumeroRandomPerComputer() {
    Math.ceil(Math.random() * 5);
}

const numeroComputer = generaNumeroRandomPerComputer();
const somma = numeroComputer + numeroSceltoDallUtente;

if ((somma % 2 === 0 && isPari) || (somma % 2 !== 0 && !isPari)) {
    alert("Il numero scelto dal computer è" + numeroComputer)
    alert("La somma è" + somma)
    alert("Hai vinto! =)")
} else {
    alert("Il numero scelto dal computer è" + numeroComputer)
    alert("La somma è" + somma)
    alert("Hai perso! :(")
}