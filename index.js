const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const quizBoard = document.getElementById("quiz-container");
let buttonText = document.getElementById("button").value;
let arrayOfAnswers = document.getElementsByClassName("answers-container");
const arrayOfRightAnswers = [];
const arrayOfWrongAnswers = [];

let random = function (length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  let random = array.splice(Math.random() * array.length)[0];
  return random;
};
console.log(questions[1].incorrect_answers);

const nextQuestion = function (x) {
  //   const quizBoard = document.createElement("div");
  //   quizBoard.id = "quiz-container";
  const question = document.createElement("div");
  const questionText = questions[x].question;
  question.className = "question-container";
  question.innerText = questionText;
  quizBoard.appendChild(question);

  // questions[x].incorrect_answers.push(questions[x].correct_answer);
  // let risposte = questions[x].incorrect_answers;
  // console.log(risposte);
  // for (i = 0; i < risposte.length; i++) {
  //   const answer = document.createElement("div");
  //   answer.addEventListener("click", (event) => {
  //     answer.classList.add("selected");
  //   });
  //   answer.className = "answers-container";
  //   let caso = random(risposte.length);
  //   let risposteText = risposte[caso];
  //   answer.innerText = risposteText;
  //   quizBoard.appendChild(answer);
  // }

  const correctAnswerText = questions[x].correct_answer;

  const correctAnswer = document.createElement("div");
  correctAnswer.addEventListener("click", (event) => {
    correctAnswer.classList.add("selected");
  });
  correctAnswer.className = "answers-container";
  correctAnswer.innerText = correctAnswerText;
  quizBoard.appendChild(correctAnswer);
  const wrongAnswersArray = questions[x].incorrect_answers;
  for (i = 0; i < wrongAnswersArray.length; i++) {
    const answer = document.createElement("div");
    answer.addEventListener("click", (event) => {
      answer.classList.add("selected");
    });
    answer.className = "answers-container";
    answer.innerText = wrongAnswersArray[i];
    quizBoard.appendChild(answer);
  }
  let button = document.querySelector("input");
  if (button.value !== "Next") {
    let h3 = document.getElementById("starting-block");
    h3.remove();
  }
  button.value = "Next";
};

let solution = function () {
  if (arrayOfRightAnswers.length > arrayOfWrongAnswers.length) {
    const correct = document.createElement("h2");
    correct.setAttribute("id", "starting-block");
    correct.innerText = "You passed the quiz!";
    quizBoard.appendChild(correct);
    const result = document.createElement("div");
    result.className = "question-container";
    result.innerText =
      "You got " + arrayOfRightAnswers.length + " answers right";
    quizBoard.appendChild(result);
    quizBoard.style.backgroundColor = "lightgreen";
  } else {
    const wrong = document.createElement("h2");
    wrong.setAttribute("id", "starting-block");
    wrong.innerText = "Better luck next time.";
    quizBoard.appendChild(wrong);
    const result = document.createElement("div");
    result.className = "question-container";
    result.innerText =
      "You got " + arrayOfRightAnswers.length + " answers right";
    quizBoard.appendChild(result);
    quizBoard.style.backgroundColor = "lightred";
  }
};

let index = 0;
const buttonClick = function () {
  let correctAnswer;
  if (index === 0) {
    correctAnswer = questions[0].correct_answer;
  } else {
    correctAnswer = questions[index - 1].correct_answer;
  }
  console.log(correctAnswer);
  let answerDiv = document.getElementsByClassName("selected");
  console.log(answerDiv);
  for (let answer of answerDiv) {
    if (answer.innerText === correctAnswer) {
      arrayOfRightAnswers.push("Correct Answer");
    } else {
      arrayOfWrongAnswers.push("Wrong Answer");
    }
  }
  let divs = document.querySelectorAll("div > div");
  //   console.log(divs);
  for (let div of divs) {
    div.remove();
  }
  if (index < questions.length) {
    nextQuestion(index);
    index = index + 1;
  } else {
    console.log("end of the quiz");
    solution();
  }

  console.log(arrayOfRightAnswers);
  console.log(arrayOfWrongAnswers);
};

// console.log(questions);

window.onload = function () {};
