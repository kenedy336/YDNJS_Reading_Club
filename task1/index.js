alert("Вітаю вас в грі!!!")
var userInstrument = prompt("Оберіть свій інструмент для гри (Rock, Paper, Scissors)")
var computerInstrument = null;
var mathProbability = Math.random() * 100;

if (mathProbability > 0 && mathProbability <= 33.3)
    computerInstrument = "Rock";

else if (mathProbability > 33.3 && mathProbability <= 66.6)
    computerInstrument = "Paper";

else if (mathProbability > 66.7 && mathProbability <= 100)
    computerInstrument = "Scissors";


if (computerInstrument == userInstrument) {
    alert("Нічия")
} else if (computerInstrument == "Rock") {
    if (userInstrument == "Paper")
        alert(`Ви виграли, комп'ютер обрав ${computerInstrument}`)
    else if (userInstrument == "Scissors")
        alert(`Ви програли, комп'ютер обрав ${computerInstrument}`)
} else if (computerInstrument == "Paper") {
    if (userInstrument == "Scissors")
        alert(`Ви виграли, комп'ютер обрав ${computerInstrument}`)
    else if (userInstrument == "Rock")
        alert(`Ви програли, комп'ютер обрав ${computerInstrument}`)
} else if (computerInstrument == "Scissors") {
    if (userInstrument == "Rock")
        alert(`Ви виграли, комп'ютер обрав ${computerInstrument}`)
    else if (userInstrument == "Paper")
        alert(`Ви програли, комп'ютер обрав ${computerInstrument}`)
}