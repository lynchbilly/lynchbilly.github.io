let modesArray = Object.keys(modeObj);
let randomMode = modeObj.fraction;
function initializeTask() {
	const question = document.querySelector(".play-page__container--second .play-page__task");
	question.insertAdjacentHTML('beforebegin', `<h2>${randomMode.heading}</h2>`);
	randomMode.check();
	answerContainer.parentNode.classList.add('active');
	randomMode = modeObj[modesArray[Math.floor(Math.random() * modesArray.length)]];
	answer = randomMode.initialize(question)
}