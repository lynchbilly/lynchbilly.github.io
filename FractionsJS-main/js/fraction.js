function sum(arr) {
   return arr.reduce((total, item) => total + item, 0);
}
function checkFraction() {
	let rightAnswerHTML = '<div class="task__fraction">';
   let numeratorInput = document.querySelector("input[name='numerator']");
   
   let denominatorInput = document.querySelector("input[name='denominator']");
   if (denominatorInput) {
      denominatorInput = parseInt(denominatorInput.value);
   }
	
   let intInput = document.querySelector("input[name='int']");
   if (intInput) {
      intInput = parseInt(intInput.value);
		rightAnswerHTML += `<div class="fraction__int">${answer.int}</div>`
		
   }
	if (numeratorInput) {
      numeratorInput = parseInt(numeratorInput.value);
		rightAnswerHTML += `<div class="fraction__numerator">${answer.num}</div>
		<div class="fraction__denominator">${answer.denom}</div>`
   }
	rightAnswerHTML += '</div>'

	if (!answer.num) {
		if (intInput === answer.int) {
			return rightAnswer();
		}
	}
	if (!answer.int) {
		if (answer.num === numeratorInput && answer.denom === denominatorInput) {
			return rightAnswer();
		}
	}
	if (answer.num === numeratorInput && answer.denom === denominatorInput && answer.int === intInput) {
		return rightAnswer();
	}
	return wrongAnswer(rightAnswerHTML);
}

function fractionInitialize(question) {
	let multOrDivisFlag = false;
	let answerObj = {
      int: 0,
      num: 0,
      denom: 0,
   };
	let int1 = random(16) - 1;
   let int2 = random(16) - 1;
	const taskOperator = ['*', '/', '+', '-'][Math.floor(Math.random() * 4)]
	if (taskOperator === '-') {
   	int2 = int1 - random(int1);
	}
	console.log(int1, taskOperator, int2)
   let intInput = true;
   let numInput = true;
   let denominator = 1 + random(9);
   let denom1 = denominator,
      denom2 = denominator;
   let flag = random(10);
   let numerators = [];
   while (flag === denominator || flag % denominator === 0) {
      flag = random(10);
   }
   numerators.push(flag);
   flag = random(10);
   while (flag === denominator || flag % denominator === 0) {
      flag = random(10);
   }
	if (taskOperator === '-') {
		console.log(123)
		while (flag > numerators[0] || flag % denominator === 0) {
			flag = random(10);
		}
	}
   numerators.push(flag);
   let num1 = numerators[0];
   let num2 = numerators[1];
	// mult and division
	if (taskOperator === '*' || taskOperator === '/') {
		multOrDivisFlag = true;
		let num1Copy = num1;
		let num2Copy = num2;
		if (int1) num1Copy += int1 * denom1;
		if (int2) num2Copy += int2 * denom2;
		console.log(num1Copy, num2Copy);
		switch (taskOperator) {
			case '*':
				answerObj.num = num1Copy * num2Copy;
				answerObj.denom = denom1 * denom2;
				break;
			case '/':
				answerObj.num = num1Copy * denom2;
				answerObj.denom = denom1 * num2Copy;
				break;
		}
		[answerObj.num, answerObj.denom] = reduction(answerObj.num, answerObj.denom, nod(answerObj.num, answerObj.denom));
		if (answerObj.denom === 1) {
			answerObj.int = answerObj.num;
			answerObj.num = 0;
		} else {
			answerObj.int = Math.floor(answerObj.num / answerObj.denom);
			answerObj.num %= answerObj.denom;
		}
	}
	// mult and division

   if (((num1 + num2) % denominator === 0 && taskOperator === '+') || ((num1 - num2) % denominator === 0 && taskOperator === '-') || (!answerObj.num && multOrDivisFlag)) {
      numInput = false;
   } else if (((num1 + num2 < denominator) && !int1 && !int2 && taskOperator === '+') || (!int1 && !int2 && taskOperator === '-') || (!answerObj.int && multOrDivisFlag)) {
      intInput = false;
   }
   console.log(`${num1}/${denominator} ${taskOperator} ${num2}/${denominator}`);
	if (taskOperator === '-') {
		answerObj.num = num1 - num2;
		answerObj.int = int1 - int2;
	}
   if (num1 > denominator) {
      int1 += Math.floor(num1 / denominator);
      num1 %= denominator;
      if (!num1) {
         denom1 = 0;
      }
   }
   if (num2 > denominator) {
      int2 += Math.floor(num2 / denominator);
      num2 %= denominator;
      if (!num2) {
         denom2 = 0;
      }
   }
   console.log(`${int1} ${num1}/${denom1} ${taskOperator} ${int2} ${num2}/${denom2}`);
   if (question) {
      question.insertAdjacentHTML(
         "afterbegin",
         `<div class="task__fraction"></div><div class="task__fraction"></div><div class="task__fraction"></div>`
      );
   }
   let taskFractions = question.querySelectorAll(".task__fraction");


   // loading-to-page-start
   if (int1) {
      taskFractions[0].insertAdjacentHTML(
         "beforeend",
         `<div class="fraction__int" data-fraction="int">${int1}</div>`
      );
		if (taskOperator === '+') answerObj.int += int1;
   }
   if (num1) {
      taskFractions[0].insertAdjacentHTML(
         "beforeend",
         `<div class="fraction__numerator" data-fraction="numerator">${num1}</div>
			<div class="fraction__denominator" data-fraction="denominator">${denom1}</div>`
      );
      if (taskOperator === '+') answerObj.num += num1;
		if (taskOperator !== '*' && taskOperator !== '/') answerObj.denom = denom1;
   }
   if (int2) {
      taskFractions[1].insertAdjacentHTML(
         "beforeend",
         `<div class="fraction__int" data-fraction="int">${int2}</div>`
      );
      if (taskOperator === '+') answerObj.int += int2;
   }
   if (num2) {
      taskFractions[1].insertAdjacentHTML(
         "beforeend",
         `<div class="fraction__numerator" data-fraction="numerator">${num2}</div>
			<div class="fraction__denominator" data-fraction="denominator">${denom2}</div>`
      );
      if (taskOperator === '+') answerObj.num += num2;
		if (taskOperator !== '*' && taskOperator !== '/') answerObj.denom = denom2;
   }
   // loading-to-page-end
   // input--loading-start
   if (intInput) {
      taskFractions[2].insertAdjacentHTML(
         "beforeend",
         `<div class="fraction__int"><input type="number" name="int"></div>`
      );
   }
   if (numInput) {
      taskFractions[2].insertAdjacentHTML(
         "beforeend",
         `<div class="fraction__numerator"><input type="number" name="numerator"></div>
			<div class="fraction__denominator"><input type="number" name="denominator"></div>`
      );
   }
   // input--loading-end

   taskFractions[0].insertAdjacentHTML(
      "afterend",
      `<div class="task__operator">${taskOperator}</div>`
   );
   taskFractions[1].insertAdjacentHTML("afterend", `=`);
	answerObj.denom = Math.abs(answerObj.denom)
	if (!multOrDivisFlag) {
		if (answerObj.num >= answerObj.denom) {
			answerObj.int += Math.floor(answerObj.num / answerObj.denom);
			answerObj.num %= answerObj.denom;
		}
		[answerObj.num, answerObj.denom] = reduction(answerObj.num, answerObj.denom, nod(answerObj.num, answerObj.denom));
	}
   console.log(answerObj);
   return answerObj;
}
function random(n) {
   return Math.ceil(Math.random() * n);
}
function nod(x, y) {
	while (x * y) {
		if (x > y) x %= y;
		else y %= x;
	}
	return x + y;
}
function reduction(v1, v2, red) {
	v1 /= red;
	v2 /= red;
	return [v1, v2]
}