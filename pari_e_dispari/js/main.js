function generaNumeroRandomPerComputer() {
    const numeroGeneratoPerComputer = Math.floor(Math.random() * 6);
    return numeroGeneratoPerComputer;
}

document.getElementById("play").addEventListener("click", function() {
    const isPari = document.getElementById("user_choice").value;
    const numeroSceltoDallUtente = parseInt(document.getElementById("user_number").value);

    const numeroComputer = generaNumeroRandomPerComputer();
    const somma = numeroComputer + numeroSceltoDallUtente;

    if ((somma % 2 === 0 && isPari === "pari") || (somma % 2 !== 0 && isPari === "dispari")) {
        alert("Il numero scelto dal computer è " + numeroComputer)
        alert("La somma è " + somma)
        alert("Hai vinto! =)")
    } else {
        alert("Il numero scelto dal computer è " + numeroComputer)
        alert("La somma è " + somma)
        alert("Hai perso! :(")
    }
})