let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const getCompChoice = () => {
    const option = ["rock","paper","Scissors"];
    const randamIdx = Math.floor(Math.random() * 3);
    return option[randamIdx];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you are win");
        msg.innerText = `You are win Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "yellow"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you are loss");
         msg.innerText = `You are lose ${compChoice} beats Your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    console.log("game is draw");
     msg.innerText = "Game was draw!play again";
     msg.style.backgroundColor = "green";
};

const playGame = (userChoice) => {
    console.log("user choice is =", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice is =", compChoice);
    if (userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);

    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("print",choice)
        playGame(userChoice);

     });


});

