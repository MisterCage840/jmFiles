let computerChoice;
function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    let randomChoice;
    randomChoice = Math.floor(Math.random()*100);
    while(randomChoice>2){
        randomChoice = Math.floor(Math.random()*100);
    }
    computerChoice = choice[randomChoice];
    return computerChoice;
}

function playRound(playerselection, computerselection){
    if(playerselection == "rock"){
        if(computerselection == "rock"){
                document.getElementById('result').innerHTML = "Draw!";
                document.getElementById('VsMatch').innerHTML = "Rock vs Rock";
        }else if(computerselection == "paper"){
            document.getElementById('result').innerHTML = "Paper beats Rock, Computer wins!";
            document.getElementById('VsMatch').innerHTML = "Rock vs Paper";
        }else if(computerselection == "scissors"){
            document.getElementById('result').innerHTML = "Rock beats Scissors, Player wins!";
            document.getElementById('VsMatch').innerHTML = "Rock vs Scissors";
        }
    }
    if(playerselection == "paper"){
        if(computerselection == "rock"){
                document.getElementById('result').innerHTML = "Paper beats Rock, Player wins!";
                document.getElementById('VsMatch').innerHTML = "Paper vs Rock";
        }else if(computerselection == "paper"){
            document.getElementById('result').innerHTML = "Draw!";
            document.getElementById('VsMatch').innerHTML = "Paper vs Paper";
        }else if(computerselection == "scissors"){
            document.getElementById('result').innerHTML = "Scissors beats Paper, Computer wins!";
            document.getElementById('VsMatch').innerHTML = "Paper vs Scissors";
        }
    }
    if(playerselection == "scissors"){
        if(computerselection == "rock"){
                document.getElementById('result').innerHTML = "Rock beats Scissors, Computer Wins!";
                document.getElementById('VsMatch').innerHTML = "Scissors vs Rock";
        }else if(computerselection == "paper"){
            document.getElementById('result').innerHTML = "Scissors beats Paper, Player wins!";
            document.getElementById('VsMatch').innerHTML = "Scissors vs Paper";
        }else if(computerselection == "scissors"){
            document.getElementById('result').innerHTML = "Draw!";
            document.getElementById('VsMatch').innerHTML = "Scissors vs Scissors";
        }
    }
}

function game(){
    let playerscore =0, computerscore =0;
    for(let i=1; i<=5; i++){
        while(playerscore != 5 && computerscore != 5){
            let playerchoice = prompt("Pick Rock, Paper, or Scissors: ");
            playerchoice = playerchoice.toLowerCase();
            playRound(playerchoice, getComputerChoice());
            if(document.getElementById('result').innerHTML.includes("Computer wins!")){
                computerscore++;
            }else if(document.getElementById('result').innerHTML.includes("Player wins!")){
                playerscore++;
            }
            console.log(playerscore);
            console.log(computerscore);
            }
            
        }
        if(playerscore ==5){
            document.getElementById('finalscore').innerHTML += "Player wins! Score: " + playerscore + " Computer score: " + computerscore;
        }else if(computerscore==5){
            document.getElementById('finalscore').innerHTML += "Computer wins! Score: " + computerscore + " Player score: " + playerscore;
        }
    }

game();