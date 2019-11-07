// ROCK PAPER SCISSORS

// Global Vars (you may add more global vars, but you don't need to)
let count = 3;
let pPick = '';
let cPick = '';
let playerScore = 0;
let computerScore = 0;


// Event Listeners 
// All necessary listeners added for you. Note that the first three have arguments that are used in the event function's parameter variable.
// DO NOT ALTER THIS SECTION
document.getElementById('rock').addEventListener('click', () => pick('rock'));
document.getElementById('paper').addEventListener('click', () => pick('paper'));
document.getElementById('scissors').addEventListener('click', () => pick('scissors'));
document.getElementById('name-btn').addEventListener('click', setNames);

// Event Functions

// When the appropriate picture is selected, pPick and cPick
// are set, then a countdown timer begins.
// DO NOT ALTER THIS FUNCTION
function pick(playerClicked) {
    pPick = playerClicked;
    cPick = computerChooses();
    countdown();
}


// Allows a 3, 2, 1 countdown before displaying the results of the round.
// DO NOT ALTER THIS SECTION
function countdown() {
    document.getElementById('countdown-area').style.visibility = "visible";
    if (count > 0) {
        document.getElementById('countdown-area').innerHTML = count
        count--;
        setTimeout(countdown, 700);
    }
    else {
        count = 3;
        document.getElementById('countdown-area').style.visibility = "hidden";
        showPicks(pPick, cPick);
        updateScoreArea(getWinner());
    }
}
//Creative Stuff
document.getElementById('rankingRefresh').addEventListener('click', playerRank)
function playerRank(){
    document.getElementById('ranking').innerHTML = rankingMileStone();
}

/*---------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------*/

// Helper Functions

// Prompt the user for player and computer names, then display them in the appropriate area
// Parameters: none
// Return value: none
// Appx lines of code: 4
function setNames() {
    let playerName = prompt('Enter your player name')
    document.getElementById('p-name').innerHTML = playerName;
    let computerName = prompt('Enter the computer name')
    document.getElementById('c-name').innerHTML = computerName;

}

// Read the players name from the appropriate section in the HTML ()
// Parameters: none
// Return value: the player's name
// Appx lines of code: 1
function getPlayerName() {
    return document.getElementById('p-name').innerHTML

}

// Read the computer's name from the appropriate section in the HTML
// Parameters: none
// Return value: the computer's name
// Appx lines of code: 1
function getCompName() {
    return document.getElementById('c-name').innerHTML

}



// Simulate the computer randomly choosing between rock, paper or scissors at 0.33 chance for each.
// Parameters: none
// Return value: A string - 'rock' , 'paper', or 'scissors'
// Appx lines of code: 8
function computerChooses() {
    let cpuChoices = Math.random();
    //Rock
    if (cpuChoices < 0.33) {
        return 'rock'
    }
    //Paper
    else if (cpuChoices < 0.66) {
        return 'paper'
    }
    //Scissors
    else {
        return 'scissors'
    }
}

// Compare player pick and computer pick to see who wins
// Parameters: none
// Return value: The name of the player who won, or the string 'tie'
// Appx lines of code: 10
function getWinner() {

    let playerPick = pPick
    let computerPick = cPick
    

    if (playerPick == 'rock' && computerPick == 'scissors') {
        return (getPlayerName() + ' wins!')
        
    }
    else if (playerPick == 'paper' && computerPick == 'rock') {
        return (getPlayerName() + ' wins!')
    }
    else if (playerPick == 'scissors' && computerPick == 'paper') {
        return (getPlayerName() + ' wins!')
    }
    if (computerPick == 'rock' && playerPick == 'scissors') {
        return (getCompName() + ' wins!')
    }
    else if (computerPick == 'paper' && playerPick == 'rock') {
        return (getCompName() + ' wins!')
    }
    else if (computerPick == 'scissors' && playerPick == 'paper') {
        return (getCompName() + ' wins!')
    }
    else if (playerPick == computerPick) {
        return "It's a tie!"
    }

}

// Show the updated player/computer score in the table and display in text who won in the 'winner-text' area of the HTML
// Parameters: The name of the winner (you must use this parameter in your code, and not a global variable)
// Return value: none
// Appx lines of code: 12
function updateScoreArea(winnerName) {
    
    document.getElementById("winner-text").innerHTML = getWinner()
    
    if (winnerName == getPlayerName() + ' wins!'){
        playerScore++
        document.getElementById('p-score').innerHTML = playerScore
    }
    else if(winnerName == getCompName() + ' wins!'){
        computerScore++
        document.getElementById('c-score').innerHTML = computerScore
    }
  
}
    // Update the display area to show what the player/computer chose for this round
    // Parameters: none
    // Return value: none
    // Appx lines of code: 2
    function showPicks() {
        document.getElementById('p-move').src = 'images/' + pPick + '.png';
        document.getElementById('c-move').src = 'images/' + cPick + '.png';
    }

    // Creativity Function. Add your own unique aspect to this project by coding
    // your own function(s). Your function must have either parameters or return values
    // or both. Change the name of the function to indicate what it will do.

function rankingMileStone() {
        if (playerScore < 5){
            return 'Noob' +'<br>' + '<img src = images/youTriedMedal.jpg>'
        }
        else if (playerScore < 10){
            return 'Amateur'+'<br>' + '<img src = images/bronzeMedal.jpg>'
        } 
        else if (playerScore < 20){
            return 'Novice'+'<br>' + '<img src = images/silverMedal.jpg>'
        }
        else if (playerScore < 50){
            return 'pro'+'<br>' + '<img src = images/goldMedal.jpg>'
        }
        else if (playerScore >= 50){
            return 'Champion'+'<br>' + '<img src = images/championMedal.jpg>'
        }
    }

