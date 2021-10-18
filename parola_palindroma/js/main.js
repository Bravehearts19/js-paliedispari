let parolaInseritaDaUtente;

function isParolaPalindroma() {
    parolaInseritaDaUtente = prompt("Inserisci una parola");
    let parolaDellUtenteInvertita = parolaInseritaDaUtente.split("").reverse().join("");
    let controlloParolaPalindroma;

    if (parolaInseritaDaUtente.toLowerCase() === parolaDellUtenteInvertita.toLowerCase()) {
        controlloParolaPalindroma = true;
    } else {
        controlloParolaPalindroma = false;
    }
    return controlloParolaPalindroma
}

if(isParolaPalindroma()) {
    alert('"' + parolaInseritaDaUtente.toUpperCase() + '"' + " è una parola palindroma");
} else {
    alert('"' + parolaInseritaDaUtente.toUpperCase() + '"' + " NON è una parola palindroma")
}
