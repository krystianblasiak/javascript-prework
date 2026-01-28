var computerMove, playerMove;
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


printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
playerMove = 'papier';
printMessage('Zagrałem ' + 'papier');