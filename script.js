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
        showResult(`You chose ${humanChoice}, computer chose ${computerChoice}, It's tied`);
        return console.log("It's tied");
    } 
    switch (computerChoice) {
        case "ROCK":
            if (humanChoice=="SCISSOR") {
                computerScore += 1;
                showResult(`You chose ${humanChoice}, computer chose ${computerChoice}, You lose! Rock beats Scissor.`);
                console.log("You lose! Rock beats Scissor");
                
                // if (computerScore>=5) {
                //     finalScore.textContent=`Your Score is ${humanScore}, You lost.`
                //     log.console(humanScore);
                // }
                break;
            } else {
                humanScore += 1;
                showResult(`You chose ${humanChoice}, computer chose ${computerChoice}, You win! Paper beats Rock.`);
                
                // if (computerScore>=5) {
                //     finalScore.textContent=`Your Score is ${humanScore}, You Win.`
                // }
                break;
            }
            
        case "PAPER":
            if (humanChoice=="ROCK") {
                computerScore += 1;
                showResult(`You chose ${humanChoice}, computer chose ${computerChoice}, You lose! Paper beats Rock.`);
                console.log("You lose! Paper beats Rock")
                
                // if (computerScore>=5) {
                //     finalScore.textContent=`Your Score is ${humanScore}, You lost.`
                // }
                break;
            } else {
                humanScore += 1;
                showResult(`You chose ${humanChoice}, computer chose ${computerChoice}, You win! Scissor beats Paper.`);
                console.log("You win! Scissor beats Paper.");
                
                // if (computerScore>=5) {
                //     finalScore.textContent=`Your Score is ${humanScore}, You Win.`
                // }
                break;
            }

        case "SCISSOR":
             if (humanChoice=="ROCK") {
                humanScore += 1;
                showResult(`You chose ${humanChoice}, computer chose ${computerChoice}, You win! Rock beats Scissor.`);
                console.log("You win! Rock beats Scissor.");
                
                // if (computerScore>=5) {
                //     finalScore.textContent=`Your Score is ${humanScore}, You win.`
                // }
                break;
            } else {
                computerScore += 1;
                showResult(`You chose ${humanChoice}, computer chose ${computerChoice}, You lose! Scissor beats Paper.`);
                console.log("You lose! Scissor beats Paper.");
                
                // if (computerScore>=5) {
                //     finalScore.textContent=`Your Score is ${humanScore}, You lost.`
                // }
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

function showResult(result) {
    const roundResult=document.createElement('p');
    roundResult.textContent=result;
    const finalScore=document.createElement('p');
    if (computerScore>=5) {
        finalScore.textContent=`Your Score is ${humanScore}, You lost.`
    } else if (humanScore>=5) {
        finalScore.textContent=`Your Score is ${humanScore}, You Win.`
    } else {
        finalScore.textContent=`Your current score is ${humanScore}.`
    }

    resultDiv.appendChild(roundResult);
    resultDiv.appendChild(finalScore);
}

let humanScore=0;
let computerScore=0;

const btnGroup=document.querySelector('#button-container');
const resultDiv=document.createElement('div');


resultDiv.id='result'; //方便之後以id來設定CSS或找到此div
btnGroup.after(resultDiv);
// resultDiv.appendChild(finalScore);

btnGroup.addEventListener('click',(e) => {
    let humanSelection=e.target.textContent.toUpperCase();
    // console.log(humanSelection);
    let computerSelection= getComputerChoice();
    // resultDiv.textContent=`You chose ${humanSelection}, computer chose ${computerSelection}.`;

    playRound(humanSelection, computerSelection);
})

