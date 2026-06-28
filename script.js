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
resultDiv.id='result'; //方便之後以id來設定CSS或找到此div
btnGroup.after(resultDiv);

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

