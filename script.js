var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-box");
var startTitle = document.getElementById("start-title");
var questionText = document.getElementById("question-text");
var answerChoices = document.getElementsByClassName("answer-choice-button");

var button1Text = document.getElementById("button-1")
var button2Text = document.getElementById("button-2")
var button3Text = document.getElementById("button-3")
var button4Text = document.getElementById("button-4")

var questions = [
    {
        title: "What is 2*5",
        choices: ["two", "ten", "three","four"],
        correctAnswer: "two",
    },
    {   
        title: "What is my favorite food",
        choices: ["pasta", "seafood", "skittles", "roe"],
        correctAnswer: "seafood",
    },
    {
        title: "What is my favorite color?",
        choices: ["orange", "blue", "yellow", "purple"],
        correctAnswer: "orange",
    }
]

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("The game has started");
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    questionContainer.classList.remove("hide");
    writeQuestion();
}

function writeQuestion() {

    questions.forEach(function(question) {
        console.log(question.title);
        questionText.textContent = question.title;
     });

    questions.forEach(function(answer){
        console.log(answer.choices);

        button1Text.textContent = answer.choices[0];
        button2Text.textContent = answer.choices[1];
        button3Text.textContent = answer.choices[2];
        button4Text.textContent = answer.choices[3];

        console.log(button1Text);
        console.log(button2Text);
        console.log(button3Text);
        console.log(button4Text);
        
    });

    checkAnswer();
}


    

function checkAnswer() {
    if(answerChoices.clicked == true) {
        console.log("This is registering a click");
        if (questions.correctAnswer === answerChoices.clicked.textContent) {
        console.log("This is correct");
        }

    }


}

function logScore() {


}

function timer() {


}