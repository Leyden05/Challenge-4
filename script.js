// user is presented with 5 questions - array of objects
var myQuestions = [
  {
    question: "Who is the first boss you fight in Dark Souls 3?",
    choices: ["Dark Eater Midir", "Ornstein and Smough", "The Crystal Sage", "Ludex Gundyr"],
    answer: "Ludex Gundyr"
  },
  {
    question: "Where do you discover Unbreakable Patches in Dark Souls 3?",
    choices: ["The Boreal Valley", "High Wall of Lothric", "Painted World of Ariandel", "Cathedral of the Deep"],
    answer: "Cathedral of the Deep"
  },
  {
    question: "Who is NOT a lord of cinder?",
    choices: ["Abyss Watchers", "Yhorm the Giant", "Aldrich, Saint of the Deep", "Ornstein and Smough"],
    answer: "Ornstein and Smough"
  }
]

var startBtn = document.querySelector("#startBtn")
var startContainer = document.querySelector("#startContainer")
var questionsContainer = document.querySelector("#questions")
var timerContainer = document.querySelector("#timerContainer")
var questionsIndex = 0
var questionPoints = 0


startBtn.addEventListener("click", startGame)

function startGame() {
  startContainer.classList.add("hidden");
  setTime();
  generateQuestions();
}

function generateQuestions() {
  if (questionsIndex > myQuestions.length - 1) return
  questionsContainer.innerHTML = ''
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
        questionPoints += 5
        choiceBtn.setAttribute('class', 'correctBtn');
        console.log(questionPoints)
        // console.log(questionsIndex)
      } else {
        console.log('incorrect')
        secondsLeft -= 5
        console.log(questionPoints)
        // console.log(questionsIndex)
      }
      questionsIndex++
      // generateQuestions()
      if (questionsIndex < myQuestions.length) {
        setTimeout(function () {
          generateQuestions();
        }, 500)
      } else {
        // window.location.assign('./highscores.html')

        // localStorage.setItem('scores', questionPoints);
      }
    })
  }

}


var secondsLeft = 45;

function setTime() {
  var timerInterval = setInterval(function () {
    console.log(secondsLeft)
    secondsLeft--;
    timerContainer.textContent = secondsLeft

    if (secondsLeft <= 0 || questionsIndex > myQuestions.length - 1) {
      clearInterval(timerInterval);
      // window.location.assign("./highscores.html")
      // localStorage.setItem('scores', questionPoints);
      endQuiz()
    }
  }, 1000);
}

function endQuiz() {
  questionsContainer.innerHTML = ''
  var input = document.createElement('input')
  input.setAttribute('placeholder', 'Name')
  var endButton = document.createElement('button')
  endButton.textContent = 'Submit'
  questionsContainer.append(input, endButton)

  endButton.addEventListener('click', function () {

    var userObj = {
      name: input.value,
      score: questionPoints
    }

    var storage = JSON.parse(localStorage.getItem('scores'))

    if (storage === null) {
      storage = []
    }

    storage.push(userObj)

    localStorage.setItem('scores', JSON.stringify(storage))

    window.location.href = 'highscores.html'
  })

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
