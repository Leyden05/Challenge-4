// user is presented with 5 questions - array of objects
var myQuestions = [
  {
    question: "Who is the first boss you fight in Dark Souls 3",
    choices: ["Dark Eater Midir", "Ludex Gundyr", "The Crystal Sage", "Ornstein and Smough"],
    answer: "Ludex Gundyr"
  },
  {
    question: "Who is the second boss you fight in Dark Souls 3",
    choices: ["Rotten Greatwood", "Ludex Gundyr", "The Crystal Sage", "Ornstein and Smough"],
    answer: "Rotten Greatwood"
  },
  {
    question: "Who is the third boss you fight in Dark Souls 3",
    choices: ["Dark Eater Midir", "Ludex Gundyr", "The Crystal Sage", "Ornstein and Smough"],
    answer: "The Crystal Sage"
  }
]

var startBtn = document.querySelector("#startBtn")
var startContainer = document.querySelector("#startContainer")
var questionsContainer = document.querySelector("#questions")
var questionsIndex = 0

startBtn.addEventListener("click", startGame)

function startGame() {
  startContainer.classList.add("hidden");
  // startTimer();
  generateQuestions();
}

function generateQuestions() {
  var questionList = document.createElement("ul")
  questionsContainer.append(questionList)

  var questionTitle = document.createElement("h3")
  questionTitle.textContent = myQuestions[questionsIndex].question
  questionList.append(questionTitle)

  for (var i = 0; i < myQuestions[questionsIndex].choices.length; i++) {
    var choiceBtn = document.createElement("button")
    choiceBtn.textContent = myQuestions[questionsIndex].choices[i]
    choiceBtn.setAttribute('class', 'btn')
    questionList.append(choiceBtn)

    choiceBtn.addEventListener('click', function (event) {
      // console.log(event.target.textContent)
      if (event.target.textContent === myQuestions[questionsIndex].answer) {
        console.log('correct')
      } else {
        console.log('incorrect')
      }
      questionsIndex++
    })
  }

}


  // Format for answers
    // Object that contains {questions: string, Choices: array, answer: string}
    // Display question - loop
    // append question
    // append choices array
// user selects an answer(button, radio, checkboxes)data-answer = "fdsfds"
  // click events is on the parent container (NOT INDIVIDUAL BUTTONS -- SHOULD BE ON CONTAINER THAT HOLDS ALL QUESTIONS)
  // how to know whihc element was clicked(event.target)
  // if the answer is correct, then display the next question ACCESS ARRAY OF QUESTIONS OBJECT
  // if incorrect, add 15 seconds to score and display next question

  // when all questions are answered, display form to submit initials
  // save form values score and initials to local storage

// change to highscores HTML
// window.location.href"HTML LINK"
  // read values from localStorage
  // append score values to page

// possible form idea: display none then display once all questions are answered;
