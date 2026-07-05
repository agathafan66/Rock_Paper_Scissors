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
        resultDiv.textContent=`You chose ${humanChoice}, computer chose ${computerChoice}, It's tied`;
        return console.log("It's tied");
    } 
    switch (computerChoice) {
        case "ROCK":
            if (humanChoice=="SCISSOR") {
                resultDiv.textContent="You lose! Rock beats Scissor";
                console.log("You lose! Rock beats Scissor");
                computerScore += 1;
                if (computerScore>=5) {
                    finalScore.textContent=`Your Score is ${humanScore}, You lost.`
                    log.console(humanScore);
                }
                break;
            } else {
                resultDiv.textContent="You win! Paper beats Rock.";
                console.log("You win! Paper beats Rock.");
                humanScore += 1;
                if (computerScore>=5) {
                    finalScore.textContent=`Your Score is ${humanScore}, You Win.`
                }
                break;
            }
            
        case "PAPER":
            if (humanChoice=="ROCK") {
                resultDiv.textContent="You lose! Paper beats Rock";
                console.log("You lose! Paper beats Rock")
                computerScore += 1;
                if (computerScore>=5) {
                    finalScore.textContent=`Your Score is ${humanScore}, You lost.`
                }
                break;
            } else {
                resultDiv.textContent="You win! Scissor beats Paper.";
                console.log("You win! Scissor beats Paper.");
                humanScore += 1;
                if (computerScore>=5) {
                    finalScore.textContent=`Your Score is ${humanScore}, You Win.`
                }
                break;
            }

        case "SCISSOR":
             if (humanChoice=="ROCK") {
                resultDiv.textContent="You win! Rock beats Scissor.";
                console.log("You win! Rock beats Scissor.");
                humanScore += 1;
                if (computerScore>=5) {
                    finalScore.textContent=`Your Score is ${humanScore}, You win.`
                }
                break;
            } else {
                resultDiv.textContent="You lose! Scissor beats Paper.";
                console.log("You lose! Scissor beats Paper.");
                computerScore += 1;
                if (computerScore>=5) {
                    finalScore.textContent=`Your Score is ${humanScore}, You lost.`
                }
                break;
            }
          

    }

}

function playGame() {


    // for (i=0; i<5; i++) {
        
        // const btnGroup=document.querySelector('#button-container');
        // btnGroup.addEventListener('click',(e) => {
        //     let humanSelection=e.target.textContent;
        //     console.log(humanSelection);
        // })
    
        playRound(humanSelection, computerSelection);
    // }
}
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
let humanScore=0;
let computerScore=0;

const btnGroup=document.querySelector('#button-container');
const resultDiv=document.createElement('div');
const finalScore=document.createElement('p');

resultDiv.id='result'; //方便之後以id來設定CSS或找到此div
btnGroup.after(resultDiv);
resultDiv.appendChild(finalScore);


btnGroup.addEventListener('click',(e) => {
    let humanSelection=e.target.textContent.toUpperCase();
    // console.log(humanSelection);
    let computerSelection= getComputerChoice();
    resultDiv.textContent=`You chose ${humanSelection}, computer chose ${computerSelection}.`;

    playRound(humanSelection, computerSelection);
})


// console.log(`Your Score is ${humanScore}`);
// if (computerScore > humanScore) {
//     console.log('You lose the game')
// } else if(computerScore < humanScore) {
//     console.log('You Win the game!');
// } else console.log('It\'s a tie');

