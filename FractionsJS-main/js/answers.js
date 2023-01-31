const answerContainer = document.querySelector(".answer");
const answerBtn = document.querySelector('.answer-container button');
const playCounter = document.querySelector(".play-page__counter span");
let playCounterValue = parseInt(playCounter.textContent);
function rightAnswer() {
   playCounterValue++;
   playCounter.textContent = playCounterValue;
   playCounter.classList.add("active");
	answerContainer.insertAdjacentHTML('afterbegin', `<span class="iconify" data-icon="emojione-v1:white-heavy-check-mark"></span>That's right, beautiful!`)
   setTimeout(() => playCounter.classList.remove("active"), 700);
}

const playCrossesContainer = document.querySelector(".play-page__crosses");
const playCrosses = playCrossesContainer.querySelectorAll("div");
let mistakes = 0;
function wrongAnswer(right) {
   if (mistakes < playCrosses.length) {
      playCrosses[mistakes].classList.add("active");
      mistakes++;
		answerContainer.insertAdjacentHTML('afterbegin', right)
		answerContainer.insertAdjacentHTML('afterbegin', `<span class="iconify" data-icon="emojione:double-exclamation-mark"></span>
		Incorrect! The correct answer is:`)
   }
   if (mistakes >= 3) {
      console.log("Game over!");
   }
}
