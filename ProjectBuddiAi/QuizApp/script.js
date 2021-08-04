var score=0;
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  if(questionContainerIndex==10)
  {
    questionContainerElement.style.display='';
    answerButtonsElement.style.display='Your score'+ score;
    return
  }
  
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Score 7'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is Java?',
    answers: [
      { text: 'OOPL', correct: true },
      { text: 'Procedural language', correct: false },
      {text: 'Markup language',correct: false},
      {text: 'Definition language',correct: false}
    ]
  },
  {
    question: 'What are the features of Java?',
    answers: [
      { text: 'Web application', correct: false },
      { text: 'Modulity', correct: false },
      { text: 'Multi threading', correct: true },
      { text: 'Multi animation', correct: false }
    ]
  },
  {
    question: ' _____ is used to find and fix bugs in the Java programs.',
    answers: [
      { text: 'JVM', correct: false },
      { text: 'JDB', correct: true },
      { text: 'IDE', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: ' What is the return type of the hashCode() method in the Object class?',
    answers: [
      { text: 'Object', correct: false },
      { text: 'Int', correct: true },
      { text: 'Long', correct: false },
      { text: 'Void', correct: false }
    ]
  },
  {
    question: 'What does the expression float a = 35 / 0 return?',
    answers: [
      { text: 'long', correct: false },
      { text: 'Infinity', correct: true },
      { text: 'Not null', correct: false },
      { text: 'Void', correct: false }
    ]
  },
  {
    question: 'Which of the following is a valid long literal?',
    answers: [
      { text: 'ABH8097', correct: false },
      { text: ' L990023', correct: false },
      { text: '904423', correct: false },
      { text: 'Vo0xnf029L', correct: true }
    ]
  },
  {
    question: 'What does the expression float a = 35 / 0 return?',
    answers: [
      { text: '0', correct: false },
      { text: ' Not a Number', correct: false },
      { text: 'Run time error', correct: false },
      { text: 'Infinity', correct: true }
    ]
  },
  {
    question: 'Evaluate the following Java expression ++z + y - y + z + x++ if x=3, y=5, and z=10',
    answers: [
      { text: '44', correct: false },
      { text: ' 25', correct: true },
      { text: '55', correct: false },
      { text: 'V28', correct: false }
    ]
  },
  {
    question: 'Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?',
    answers: [
      { text: 'javap tool', correct: false },
      { text: 'javaw command', correct: false },
      { text: 'javah command', correct: false },
      { text: 'Javadoc tool', correct: true }
    ]
  },
  {
    question: 'Which of the following is a valid variable?',
    answers: [
      { text: 'var09', correct: false },
      { text: '6Give', correct: false },
      { text: '$hello', correct: true},
      { text: 'Vo0xnf029L', correct: false }
    ]
  },
]