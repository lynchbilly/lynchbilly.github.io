const gameOver = document.querySelector(".gameover");
const gameOverCounter = document.querySelector("[data-stat='count']");
const gameOverBest = document.querySelector("[data-stat='best']");
const homeBtn = document.querySelector("[data-active='home']");
const playAgainBtn = document.querySelector("[data-active='playAgain']");
let bestCounterValue = 0;

homeBtn.addEventListener('click', () => {
	gameOver.style.transform = 'translateY(-100vh)'
	playPage.style.transform = 'translateY(0)'
	setTimeout(resetGame, 600);
})
playAgainBtn.addEventListener('click', () => {
	resetGame();
	nextQuestion = document.querySelector(".next-question-btn:nth-child(3)");
	nextQuestion.addEventListener("click", checkQuestion);
	gameOver.style.transform = 'translateY(-100vh)'
	answer = fractionInitialize(document.querySelector(".play-page__container--first .play-page__task"));
})

function showGameOver() {
	gameOver.style.transform = 'translateY(0)'
	gameOverCounter.textContent = playCounterValue;
	if (playCounterValue > bestCounterValue) {
		bestCounterValue = playCounterValue;
		gameOverBest.textContent = bestCounterValue;
	}
	document.querySelector(".main-page__record span").textContent = bestCounterValue;
}
function resetGame() {
	mistakes = 0;
	playCrosses.forEach(item => item.classList.remove('active'));
	playCounterValue = 0;
	playCounter.textContent = playCounterValue;
	document.querySelectorAll(".play-page__task").forEach(item => item.innerHTML = '');
}