// ===== GAME STATE =====
let userScore = 0;
let compScore = 0;
let roundNum = 0;
const roundHistory = [];
const MAX_HISTORY = 8;
let currentLevel = 1;
let levelWins = 0;
let levelLosses = 0;

// ===== LEVEL CONFIGURATION =====
const LEVELS = {
    1: {
        name: "Beginner",
        winsToAdvance: 3,
        maxLosses: 5,
        aiStrategy: "random",
        description: "Perfect for learning the basics!"
    },
    2: {
        name: "Apprentice",
        winsToAdvance: 5,
        maxLosses: 4,
        aiStrategy: "counter",
        description: "The AI starts getting smarter!"
    },
    3: {
        name: "Challenger",
        winsToAdvance: 7,
        maxLosses: 3,
        aiStrategy: "pattern",
        description: "Can you beat the pattern predictor?"
    },
    4: {
        name: "Expert",
        winsToAdvance: 10,
        maxLosses: 2,
        aiStrategy: "adaptive",
        description: "The AI learns from your moves!"
    },
    5: {
        name: "Master",
        winsToAdvance: 15,
        maxLosses: 1,
        aiStrategy: "psychic",
        description: "Face the ultimate challenge!"
    },
    6: {
        name: "Grandmaster",
        winsToAdvance: Infinity,
        maxLosses: 1,
        aiStrategy: "unbeatable",
        description: "You've reached the pinnacle!"
    }
};

// ===== PLAYER MOVE HISTORY FOR AI =====
const playerMoveHistory = [];
const MAX_MOVE_HISTORY = 10;

// ===== DOM ELEMENTS =====
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const roundNumEl = document.querySelector("#roundNum");
const roundHistoryEl = document.querySelector("#roundHistory");
const choices = document.querySelectorAll(".choice-btn");
const msg = document.querySelector("#msg");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerChoiceEl = document.querySelector("#computerChoice");
const resetBtn = document.querySelector("#resetBtn");
const currentLevelEl = document.querySelector("#currentLevel");
const levelNameEl = document.querySelector("#levelName");
const levelWinsEl = document.querySelector("#levelWins");
const levelLossesEl = document.querySelector("#levelLosses");
const progressFillEl = document.querySelector("#progressFill");
const progressTargetEl = document.querySelector("#progressTarget");

// ===== EMOJI MAP =====
const emojiMap = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

// ===== COMPUTER CHOICE =====
const getCompChoice = () => {
    const levelConfig = LEVELS[currentLevel];
    const options = ["rock", "paper", "scissors"];
    
    switch (levelConfig.aiStrategy) {
        case "random":
            // Pure random choice
            return options[Math.floor(Math.random() * 3)];
            
        case "counter":
            // 30% chance to counter the player's most common move
            if (playerMoveHistory.length >= 3 && Math.random() < 0.3) {
                const mostCommon = getMostCommonMove();
                return getCounterMove(mostCommon);
            }
            return options[Math.floor(Math.random() * 3)];
            
        case "pattern":
            // Try to predict based on patterns
            if (playerMoveHistory.length >= 3) {
                const predicted = predictNextMove();
                if (predicted && Math.random() < 0.5) {
                    return getCounterMove(predicted);
                }
            }
            return options[Math.floor(Math.random() * 3)];
            
        case "adaptive":
            // Learn and adapt to player's patterns
            if (playerMoveHistory.length >= 5) {
                const predicted = predictNextMove();
                if (predicted && Math.random() < 0.7) {
                    return getCounterMove(predicted);
                }
            }
            return options[Math.floor(Math.random() * 3)];
            
        case "psychic":
            // Highly predictive with some randomness
            if (playerMoveHistory.length >= 3) {
                const predicted = predictNextMove();
                if (predicted && Math.random() < 0.85) {
                    return getCounterMove(predicted);
                }
            }
            return options[Math.floor(Math.random() * 3)];
            
        case "unbeatable":
            // Maximum prediction capability
            if (playerMoveHistory.length >= 2) {
                const predicted = predictNextMove();
                if (predicted && Math.random() < 0.95) {
                    return getCounterMove(predicted);
                }
            }
            return options[Math.floor(Math.random() * 3)];
            
        default:
            return options[Math.floor(Math.random() * 3)];
    }
};

// ===== AI HELPER FUNCTIONS =====
const getCounterMove = (move) => {
    const counters = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    };
    return counters[move];
};

const getMostCommonMove = () => {
    const counts = { rock: 0, paper: 0, scissors: 0 };
    playerMoveHistory.forEach(move => counts[move]++);
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
};

const predictNextMove = () => {
    if (playerMoveHistory.length < 2) return null;
    
    // Look for patterns in the last few moves
    const recentMoves = playerMoveHistory.slice(-5);
    
    // Simple pattern matching: check if player repeats
    if (recentMoves.length >= 2 && recentMoves[recentMoves.length - 1] === recentMoves[recentMoves.length - 2]) {
        return recentMoves[recentMoves.length - 1];
    }
    
    // Check for cyclic patterns (rock -> paper -> scissors -> rock)
    if (recentMoves.length >= 3) {
        const lastThree = recentMoves.slice(-3);
        const isCyclic = (lastThree[0] === "rock" && lastThree[1] === "paper" && lastThree[2] === "scissors") ||
                        (lastThree[0] === "paper" && lastThree[1] === "scissors" && lastThree[2] === "rock") ||
                        (lastThree[0] === "scissors" && lastThree[1] === "rock" && lastThree[2] === "paper");
        if (isCyclic) {
            const cycleOrder = ["rock", "paper", "scissors"];
            const currentIndex = cycleOrder.indexOf(lastThree[2]);
            return cycleOrder[(currentIndex + 1) % 3];
        }
    }
    
    // Frequency-based prediction
    const moveCounts = { rock: 0, paper: 0, scissors: 0 };
    recentMoves.forEach(move => moveCounts[move]++);
    return Object.keys(moveCounts).reduce((a, b) => moveCounts[a] > moveCounts[b] ? a : b);
};

// ===== SHOW WINNER =====
const showWinner = (userWin, userChoice, compChoice) => {
    roundNum++;
    roundNumEl.innerText = roundNum;

    // Update fighter icons with result styling
    playerChoiceEl.classList.remove("winner", "loser", "draw");
    computerChoiceEl.classList.remove("winner", "loser", "draw");

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        levelWins++;
        animateScore(userScorePara);
        msg.innerText = `You win! ${capitalize(userChoice)} beats ${capitalize(compChoice)} 🎉`;
        msg.className = "message win slideIn";
        playerChoiceEl.classList.add("winner");
        computerChoiceEl.classList.add("loser");
        roundHistory.push("win");

        // Confetti on milestone
        if (userScore % 5 === 0) {
            launchConfetti();
        }
        
        // Check for level up
        checkLevelProgress();
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        levelLosses++;
        animateScore(compScorePara);
        msg.innerText = `You lose! ${capitalize(compChoice)} beats ${capitalize(userChoice)} 😢`;
        msg.className = "message lose slideIn";
        playerChoiceEl.classList.add("loser");
        computerChoiceEl.classList.add("winner");
        roundHistory.push("lose");
        
        // Check for level failure
        checkLevelFailure();
    }

    updateRoundHistory();
};

// ===== DRAW GAME =====
const drawGame = (userChoice) => {
    roundNum++;
    roundNumEl.innerText = roundNum;

    playerChoiceEl.classList.remove("winner", "loser", "draw");
    computerChoiceEl.classList.remove("winner", "loser", "draw");

    msg.innerText = "It's a draw! Play again 🤝";
    msg.className = "message draw slideIn";
    playerChoiceEl.classList.add("draw");
    computerChoiceEl.classList.add("draw");
    roundHistory.push("draw");

    updateRoundHistory();
};

// ===== PLAY GAME =====
const playGame = (userChoice) => {
    // Track player move for AI learning
    trackPlayerMove(userChoice);
    
    const compChoice = getCompChoice();

    // Disable buttons during animation
    toggleChoices(false);

    // Show player choice immediately
    playerChoiceEl.innerHTML = `<span>${emojiMap[userChoice]}</span>`;
    playerChoiceEl.classList.add("active");

    // Shake animation on computer side
    computerChoiceEl.classList.add("shaking");
    computerChoiceEl.innerHTML = `<span>❓</span>`;

    // Reveal computer choice after shake
    setTimeout(() => {
        computerChoiceEl.classList.remove("shaking");
        computerChoiceEl.innerHTML = `<span>${emojiMap[compChoice]}</span>`;
        computerChoiceEl.classList.add("active");

        // Determine result
        if (userChoice === compChoice) {
            drawGame(userChoice);
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }

        // Re-enable buttons
        setTimeout(() => {
            toggleChoices(true);
        }, 400);
    }, 600);
};

// ===== EVENT LISTENERS =====
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Reset button
resetBtn.addEventListener("click", resetGame);

// ===== LEVEL PROGRESS FUNCTIONS =====
function checkLevelProgress() {
    const levelConfig = LEVELS[currentLevel];
    
    if (levelWins >= levelConfig.winsToAdvance) {
        if (currentLevel < Object.keys(LEVELS).length) {
            levelUp();
        } else {
            msg.innerText = "🏆 You are the Ultimate Champion! 🏆";
            launchConfetti();
        }
    }
}

function checkLevelFailure() {
    const levelConfig = LEVELS[currentLevel];
    
    if (levelLosses >= levelConfig.maxLosses) {
        levelDown();
    }
}

function levelUp() {
    if (currentLevel < Object.keys(LEVELS).length) {
        currentLevel++;
        levelWins = 0;
        levelLosses = 0;
        playerMoveHistory.length = 0;
        
        updateLevelDisplay();
        msg.innerText = `🎉 LEVEL UP! Welcome to ${LEVELS[currentLevel].name}! ${LEVELS[currentLevel].description}`;
        msg.className = "message level-up slideIn";
        
        launchConfetti();
        launchConfetti();
        
        // Disable buttons briefly for celebration
        toggleChoices(false);
        setTimeout(() => {
            toggleChoices(true);
        }, 1500);
    }
}

function levelDown() {
    if (currentLevel > 1) {
        currentLevel--;
        levelWins = 0;
        levelLosses = 0;
        playerMoveHistory.length = 0;
        
        updateLevelDisplay();
        msg.innerText = `😢 Level down! Back to ${LEVELS[currentLevel].name}. Keep trying!`;
        msg.className = "message level-down slideIn";
        
        // Disable buttons briefly
        toggleChoices(false);
        setTimeout(() => {
            toggleChoices(true);
        }, 1000);
    } else {
        // Reset level progress if at beginner level
        levelWins = 0;
        levelLosses = 0;
        playerMoveHistory.length = 0;
        
        msg.innerText = "Keep practicing! You'll get better! 💪";
        msg.className = "message slideIn";
    }
}

function updateLevelDisplay() {
    currentLevelEl.innerText = currentLevel;
    levelNameEl.innerText = LEVELS[currentLevel].name;
    
    // Add visual feedback
    currentLevelEl.classList.add("level-change");
    setTimeout(() => {
        currentLevelEl.classList.remove("level-change");
    }, 500);
    
    updateLevelProgress();
}

function updateLevelProgress() {
    const levelConfig = LEVELS[currentLevel];
    
    // Update wins and losses display
    levelWinsEl.innerText = levelWins;
    levelLossesEl.innerText = levelLosses;
    
    // Update progress bar
    const progressPercent = Math.min((levelWins / levelConfig.winsToAdvance) * 100, 100);
    progressFillEl.style.width = `${progressPercent}%`;
    
    // Update progress target message
    const winsNeeded = levelConfig.winsToAdvance - levelWins;
    const lossesRemaining = levelConfig.maxLosses - levelLosses;
    
    if (winsNeeded <= 0) {
        progressTargetEl.innerText = "🎉 Level up!";
        progressTargetEl.style.color = "#00e676";
    } else if (lossesRemaining <= 0) {
        progressTargetEl.innerText = "⚠️ Level down!";
        progressTargetEl.style.color = "#ff1744";
    } else {
        progressTargetEl.innerText = `Win ${winsNeeded} more to level up! (${lossesRemaining} loss${lossesRemaining !== 1 ? 'es' : ''} remaining)`;
        progressTargetEl.style.color = "rgba(255, 255, 255, 0.7)";
    }
}

function trackPlayerMove(move) {
    playerMoveHistory.push(move);
    if (playerMoveHistory.length > MAX_MOVE_HISTORY) {
        playerMoveHistory.shift();
    }
}

// ===== HELPER FUNCTIONS =====
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function animateScore(el) {
    el.classList.remove("pulse");
    // Trigger reflow to restart animation
    void el.offsetWidth;
    el.classList.add("pulse");
}

function toggleChoices(enabled) {
    choices.forEach((choice) => {
        if (enabled) {
            choice.classList.remove("disabled");
        } else {
            choice.classList.add("disabled");
        }
    });
}

function updateRoundHistory() {
    // Keep only last MAX_HISTORY rounds
    if (roundHistory.length > MAX_HISTORY) {
        roundHistory.shift();
    }

    roundHistoryEl.innerHTML = "";
    roundHistory.forEach((result) => {
        const dot = document.createElement("span");
        dot.classList.add("history-dot", result);
        roundHistoryEl.appendChild(dot);
    });
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    roundNum = 0;
    roundHistory.length = 0;
    currentLevel = 1;
    levelWins = 0;
    levelLosses = 0;
    playerMoveHistory.length = 0;

    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    roundNumEl.innerText = "0";
    roundHistoryEl.innerHTML = "";
    currentLevelEl.innerText = "1";
    levelNameEl.innerText = LEVELS[1].name;
    levelWinsEl.innerText = "0";
    levelLossesEl.innerText = "0";
    progressFillEl.style.width = "0%";
    progressTargetEl.innerText = `Win ${LEVELS[1].winsToAdvance} more to level up!`;
    progressTargetEl.style.color = "rgba(255, 255, 255, 0.7)";

    playerChoiceEl.innerHTML = "<span>❓</span>";
    computerChoiceEl.innerHTML = "<span>❓</span>";
    playerChoiceEl.classList.remove("winner", "loser", "draw", "active");
    computerChoiceEl.classList.remove("winner", "loser", "draw", "active");

    msg.innerText = "Play your move! 🎮";
    msg.className = "message";

    toggleChoices(true);
}

function launchConfetti() {
    const colors = ["#00e676", "#00d4ff", "#ff2d95", "#ffea00", "#7b2ff7", "#ff1744"];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + "px";
        confetti.style.height = Math.random() * 10 + 5 + "px";
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        confetti.style.animationDelay = Math.random() * 0.5 + "s";

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 4500);
    }
}
