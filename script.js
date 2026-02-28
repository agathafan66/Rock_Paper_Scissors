function getComputerChoice() {
    let com=Math.floor(Math.random() * 3 + Math.ceil(1));
    console.log(com);
    switch(com) {
        case 1 : 
            com="ROCK";
            break;
        case 2 : com="PAPER";
            break;
        case 3 : com="SCISSOR"
            break;
    }
    console.log(com);
    return com;

}

function getHumanChoice() {
    let human=prompt('Your choice?');
    return human.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    let play=["ROCK", "SCISSOR", "PAPER"];
    if (humanChoice==computerChoice) {
        return console.log("It's tied");
    } 
    switch (computerChoice) {
        case "ROCK":
            if (humanChoice=="SCISSOR") {
                console.log("You lose! Rock beats Scissor")
                computerScore += 1;
                break;
            } else {
                console.log("You win! Paper beats Rock.");
                humanScore += 1;
                break;
            }
            
        case "PAPER":
            if (humanChoice=="ROCK") {
                console.log("You lose! Paper beats Rock")
                computerScore += 1;
                break;
            } else {
                console.log("You win! Scissor beats Paper.");
                humanScore += 1;
                break;
            }

        case "SCISSOR":
             if (humanChoice=="ROCK") {
                console.log("You win! Rock beats Scissor.");
                humanScore += 1;
                break;
            } else {
                console.log("You lose! Scissor beats Paper.");
                computerScore += 1;
                break;
            }
          

    }

}

function playGame() {


    for (i=0; i<5; i++) {
        let computerSelection= getComputerChoice();
        let humanSelection=getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
}

let humanScore=0;
let computerScore=0;
playGame();
console.log(`Your Score is ${humanScore}`);
if (computerScore > humanScore) {
    console.log('You lose the game')
} else if(computerScore < humanScore) {
    console.log('You Win the game!');
} else console.log('It\'s a tie');

