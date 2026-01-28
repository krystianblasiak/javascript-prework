var computerMove, playerMove, playerInput;
var randomNumber = Math.floor(Math.random() * 3 + 1)

if(randomNumber == 1) {
    computerMove = "kamień"
}
else if(randomNumber == 2) {
    computerMove = "papier"
}
else if(randomNumber == 3){
    computerMove = "nożyce"
}
else {
    computerMove = 'nieznany ruch';
}

playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.")
console.log("Wpisana odpowiedź to: " + playerInput)

switch(playerInput) {
    case '1': 
        playerMove = "kamień"
        break;
    case '2': 
        playerMove = "papier"
        break;
    case '3':
        playerMove = "nożyce"
        break;
    default:
        printMessage("Brak wybranej opcji!")
        playerMove = "kamień"
}

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + playerMove);