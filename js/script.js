var computerMove, playerMove, playerInput;
var randomNumber = Math.floor(Math.random() * 3 + 1).toString();
console.log("Wylosowana liczba: " + randomNumber);

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

playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Wpisana odpowiedź to: " + playerInput);

playerMove = getMoveName(playerInput);
console.log("Ruch gracza: " + playerMove);

computerMove = getMoveName(randomNumber);
console.log("Ruch komputera: " + computerMove)

displayResult(playerMove, computerMove)