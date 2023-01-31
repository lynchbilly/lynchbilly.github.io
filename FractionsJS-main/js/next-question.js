const backgroundsArray = [
   "linear-gradient(#64a1e6, #9198e5)",
   "linear-gradient(#7c64e6, #84569e)",
   "linear-gradient(#a764e6, #c76862)",
   "linear-gradient(#2d2aff, #6481ff)",
   "linear-gradient(#2a63ff, #56f141)",
   "linear-gradient(#cd2aff, #f14141)",
   "linear-gradient(#ff2ab8, #f19641)",
   "linear-gradient(#2d08ff, #f14141)",
   "linear-gradient(#614bdd, #b041f1)",
   "linear-gradient(#4bdd52, #419cf1)",
];
let nextQuestion = document.querySelector(".next-question-btn");
let randomBcgCheck = "";
const playPageContainer = `<div class="play-page__container play-page__container--second">
<div class="play-page__task-container">
	<div class="play-page__task"></div>
	<button class="next-question-btn btn">Готово</button>
</div>
</div>`;

// intialization
let answer;
// initialization
nextQuestion.addEventListener("click", checkQuestion);
window.addEventListener("keydown", (e) => {
	if (e.code === 'Enter') checkQuestion();
});
function checkQuestion() {
	nextQuestion.removeEventListener('click', checkQuestion)
	nextQuestion = document.querySelector(".play-page__container--second .next-question-btn");
	nextQuestion.addEventListener("click", checkQuestion);
	initializeTask();
}
// Pushing 'ok' button
answerBtn.addEventListener('click', showNextQuestion)
function showNextQuestion() {
	answerContainer.parentNode.classList.remove('active');
	if (mistakes >= 3) {
		setTimeout(() => answerContainer.innerHTML = '', 600)
		return setTimeout(showGameOver, 600);
	}


	setTimeout(() => {
		answerContainer.innerHTML = '';
      let firstQuestion = document.querySelector(".play-page__container--first");
      let secondQuestion = document.querySelector(".play-page__container--second");
      let randomBcg = backgroundsArray[Math.floor(Math.random() * 10)]; // Рандомный задний вон
      while (randomBcgCheck === randomBcg) {
         randomBcg = backgroundsArray[Math.floor(Math.random() * 10)];
      }
      randomBcgCheck = randomBcg;
      secondQuestion.style.background = randomBcg;
      secondQuestion.style.transform = "translateX(-100vw)";
      setTimeout(() => {
         firstQuestion.remove();
         secondQuestion.style.transition = "none";
         secondQuestion.style.transform = "translateX(0)";
         secondQuestion.classList.remove("play-page__container--second");
         secondQuestion.classList.add("play-page__container--first");
         playPage.insertAdjacentHTML("beforeend", playPageContainer);
      }, 600);
   }, 700);
}
