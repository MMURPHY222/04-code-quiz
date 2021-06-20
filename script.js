var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-box");
var startTitle = document.getElementById("start-title");
var startInstructions = document.querySelector("p");
var questionText = document.getElementById("question-text");
var answerChoices = document.getElementsByClassName("answer-choice-button");

var buttonA = document.getElementById("button-a");
var buttonB = document.getElementById("button-b");
var buttonC = document.getElementById("button-c");
var buttonD = document.getElementById("button-d");

var button1Text = document.getElementById("button-1")
var button2Text = document.getElementById("button-2")
var button3Text = document.getElementById("button-3")
var button4Text = document.getElementById("button-4")

var i = 0;

var questions = [
    {
        title: "What is 2*5",
        choices: ["two", "ten", "three", "four"],
        correctAnswer: "ten",
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
    startInstructions.classList.add("hide");
    questionContainer.classList.remove("hide");
    writeQuestion();
}

function writeQuestion() {

    // questions.forEach(function(question, i)  {

        console.log(questions[i].title);
        questionText.textContent = questions[i].title; 

        console.log(questions[i].choices);

        button1Text.textContent = questions[i].choices[0];
        button2Text.textContent = questions[i].choices[1];
        button3Text.textContent = questions[i].choices[2];
        button4Text.textContent = questions[i].choices[3];

        console.log(button1Text);
        console.log(button2Text);
        console.log(button3Text);
        console.log(button4Text);
        
    

    //   });

    // questions.forEach(function(answer){
    //     console.log(answer.choices);

    //     button1Text.textContent = answer.choices[0];
    //     button2Text.textContent = answer.choices[1];
    //     button3Text.textContent = answer.choices[2];
    //     button4Text.textContent = answer.choices[3];

    //     console.log(button1Text);
    //     console.log(button2Text);
    //     console.log(button3Text);
    //     console.log(button4Text);
        
    // });

    // checkAnswer();
}

buttonA.addEventListener("click", checkAnswerA);
buttonB.addEventListener("click", checkAnswerB);
buttonC.addEventListener("click", checkAnswerC);
buttonD.addEventListener("click", checkAnswerD);

  

function checkAnswerA() {

    console.log("This is the correct answer" + questions[i].correctAnswer);
    console.log("This is the content in the top left button" + buttonA.textContent);
    
    // if (buttonA.textContent == questions[i].correctAnswer) {
    //     console.log("YOU GOT IT RIGHT");
    // } else {
    //     console.log("YOU GOT IT WRONG");
    // }
    
     i ++;

     writeQuestion();

}

function checkAnswerB() {

    console.log("This is the correct answer" + questions[i].correctAnswer);
    console.log("This is the content in the top right button" + buttonB.textContent);
    
    // if (buttonB.textContent == questions[i].correctAnswer) {
    //     console.log("YOU GOT IT RIGHT");
    // } else {
    //     console.log("YOU GOT IT WRONG");
    // }
    
     i ++;

     writeQuestion();

}

function checkAnswerC() {

    console.log("This is the correct answer" + questions[i].correctAnswer);
    console.log("This is the content in the bottom left button" + buttonC.textContent);
    
    // if (buttonC.textContent == questions[i].correctAnswer) {
    //     console.log("YOU GOT IT RIGHT");
    // } else {
    //     console.log("YOU GOT IT WRONG");
    // }
    
     i ++;

     writeQuestion();

}

function checkAnswerD() {

    console.log("This is the correct answer" + questions[i].correctAnswer);
    console.log("This is the content in the bottom left button" + buttonC.textContent);

    // if (buttonD.textContent == questions[i].correctAnswer) {
    //     console.log("YOU GOT IT RIGHT");
    // } else {
    //     console.log("YOU GOT IT WRONG");
    // }
    
     i ++;

     writeQuestion();

}





function logScore() {


}

function timer() {


}