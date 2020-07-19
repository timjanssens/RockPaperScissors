function computerPlay() {
    let choiceComputerNumber = Math.floor(Math.random() * 3);
    let choiceComputer;
    switch (choiceComputerNumber) {
        case 0:
            choiceComputer = 'rock';
            break;
        case 1:
            choiceComputer = 'paper';
            break;
        case 2:
            choiceComputer = 'scissor'
            break;

        default:
            break;
    }
    return choiceComputer;
}

function playRock(computerSelection) {
    switch (computerSelection) {
        case 'rock':
            return 'Tie game';
            break;
        case 'paper':
            return 'You Loose! '
            break;
        case 'scissor':
            return 'You Win!';
            break;

        default:
            break;
    }
}

function playPaper(computerSelection) {
    switch (computerSelection) {
        case 'rock':
            return 'You Win!';
            break;
        case 'paper':
            return 'Tie game';
            break;
        case 'scissor':
            return 'You Loose!';
            break;
            break;

    }
}

function playScissor(computerSelection) {
    switch (computerSelection) {
        case 'rock':
            return 'You Loose!';
            break;
        case 'paper':
            return 'You Win!';
            break;
        case 'scissor':
            return 'Tie game';
            break;

        default:
            break;
    }
}


function playRPS(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            return playRock(computerSelection)
            break;
        case 'paper':
            return playPaper(computerSelection)
            break;
        case 'scissor':
            return playScissor(computerSelection)
            break;

        default:
            break;
    }
}


function Game(){
    for (let i= 0; i < 5; i++) {
        console.log(playRPS(prompt('Choice => rock - paper - scissor'), computerPlay()));
        
    }
}

Game();