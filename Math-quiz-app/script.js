const formEl = document.getElementById('questionForm');
const questionEl = document.getElementById('question');
let storedAnswer;
const scoreEl = document.getElementById('score');
let score = 0;
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const generateQuestion = () => {
  const randomNumber1 = randomNumber(10, 20)
  const randomNumber2 = randomNumber(10, 20)
  const randomNumber3 = randomNumber(1, 3)
  let question;
  let answer;
  switch (randomNumber3) {
    case 1:
      question = `Q. What is ${randomNumber1} + ${randomNumber2}`
      answer = randomNumber1 + randomNumber2
      break;
    case 2:
      question = `Q. What is ${randomNumber1} - ${randomNumber2}`
      answer = randomNumber1 - randomNumber2

      break;
    case 3:
      question = `Q. What is ${randomNumber1} * ${randomNumber2}`
      answer = randomNumber1 * randomNumber2

      break;
  }
  return { question, answer }
}

const showQuestion = () => {
  const { question, answer } = generateQuestion()
  questionEl.innerHTML = question
  storedAnswer = answer
}
showQuestion()

const checkAnswer = (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const userAnswer = +formData.get('ans');
  console.log(userAnswer);
  if (userAnswer === storedAnswer) {
    score++;
    scoreEl.innerHTML = score;
  }
  else {
    score--;
    scoreEl.innerHTML = score;
  }
  e.target.reset();
  showQuestion();
}
