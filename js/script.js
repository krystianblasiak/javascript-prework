var playerInput, resultComputer = 0, resultPlayer = 0;

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
        resultPlayer += 1;
    }
    else if (movePlayer == "kamień" && moveComputer == "nożyce"){
        printMessage("Wygrywasz!");
        resultPlayer += 1;
    }
    else if (movePlayer == "nożyce" && moveComputer == "papier"){
        printMessage("Wygrywasz!");
        resultPlayer += 1;
    }
    else if (moveComputer == movePlayer) {
        printMessage("Remis!");
    }
    else {
        printMessage("Przegrywasz!");
        resultComputer += 1;
    }
    
    printMessage("Zagrałem " + moveComputer + ", a ty " + movePlayer)
}

function results(computerResult, playerResult){
    document.getElementById("result").innerHTML = '';
    const h2Result = document.createElement("h2");
    h2Result.innerHTML = "Gracz " + playerResult + " : " + computerResult + " Komputer";
    document.getElementById("result").appendChild(h2Result);
}

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    let randomNumber = Math.floor(Math.random() * 3 + 1).toString();
    console.log("Wylosowana liczba: " + randomNumber);

    let playerMove = argButtonName, computerMove = getMoveName(randomNumber);

    console.log("Ruch komputera: " + computerMove)
    displayResult(playerMove, computerMove)
    console.log("Wynik komputera: " + resultComputer + ", wynik gracza: " + resultPlayer);
    results(resultComputer, resultPlayer);
}

let buttonRock = document.getElementById('button-rock'),
    buttonPaper = document.getElementById('button-paper'),
    buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });