const playBtn = document.querySelector(".main-page__play-btn");
const playPage = document.querySelector(".play-page");
playBtn.addEventListener("click", () => {
	playPage.style.transform = 'translateY(-100vh)';
	playPage.style.background = backgroundsArray[Math.floor(Math.random() * 10)];
	answer = fractionInitialize(document.querySelector(".play-page__container--first .play-page__task"));
	nextQuestion = document.querySelector(".next-question-btn");
	nextQuestion.addEventListener("click", checkQuestion);
});
