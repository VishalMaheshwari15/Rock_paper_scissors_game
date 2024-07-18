const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const resultMessage = document.getElementById('result-message');
const choices = document.querySelectorAll('.choice');
let userScore = 0;
let compScore = 0;

choices.forEach(choice => choice.addEventListener('click', game));

function game(event) {
    const userChoice = event.target.alt;
    const compChoice = getCompChoice();
    const result = getResult(userChoice, compChoice);
    updateScores(result);
    showResult(userChoice, compChoice, result);
}

function getCompChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(user, comp) {
    if (user === comp) {
        return 'draw';
    }
    if ((user === 'Rock' && comp === 'Scissors') ||
        (user === 'Paper' && comp === 'Rock') ||
        (user === 'Scissors' && comp === 'Paper')) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateScores(result) {
    if (result === 'win') {
        userScore++;
        userScoreSpan.textContent = userScore;
    } else if (result === 'lose') {
        compScore++;
        compScoreSpan.textContent = compScore;
    }
}

function showResult(userChoice, compChoice, result) {
    if (result === 'win') {
        resultMessage.textContent = `You chose ${userChoice}. Computer chose ${compChoice}. You win! 🎉`;
    } else if (result === 'lose') {
        resultMessage.textContent = `You chose ${userChoice}. Computer chose ${compChoice}. You lose! 😞`;
    } else {
        resultMessage.textContent = `You both chose ${userChoice}. It's a draw! 🤝`;
    }
}
