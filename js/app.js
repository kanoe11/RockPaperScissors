const userScore = 0;
const computerScore = 0;
const userScore_Spam  = document.getElementById("user-score");
const computerScore_Spam  = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_fiv = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function game(userChoice){
    console.log(" blabla" + userChoice);
}

function main(){
//rock_div.addEventListener('click', function() {
          game("r");
//})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})

}

main();
