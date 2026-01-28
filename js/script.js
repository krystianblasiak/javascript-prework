var computerMove, playerMove, playerInput, randomNumber;
var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;

function getMoveName(move){
    switch(move) {
        case '1':
            return "kamień";
        case '2':
            return "papier";
        case '3':
            return "nożyce";
        default:
            printMessage("Brak wybranej opcji! Zakładam, że chodziło ci o 'kamień'.");
            return "kamień";
    }
}

function displayResult(movePlayer, moveComputer){
    if (movePlayer == "papier" && moveComputer == "kamień"){
        printMessage("Wygrywasz!");
    }
    else if (movePlayer == "kamień" && moveComputer == "nożyce"){
        printMessage("Wygrywasz!");
    }
    else if (movePlayer == "nożyce" && moveComputer == "papier"){
        printMessage("Wygrywasz!");
    }
    else if (moveComputer == movePlayer) {
        printMessage("Remis!");
    }
    else {
        printMessage("Przegrywasz!");
    }
    
    printMessage("Zagrałem " + moveComputer + ", a ty " + movePlayer)
}

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    randomNumber = Math.floor(Math.random() * 3 + 1).toString();
    console.log("Wylosowana liczba: " + randomNumber);

    playerMove = argButtonName;
    computerMove = getMoveName(randomNumber);
    console.log("Ruch komputera: " + computerMove)
    displayResult(playerMove, computerMove)
}

ButtonRock = buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });