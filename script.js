var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-box");
var startTitle = document.getElementById("start-title");
var startInstructions = document.querySelector("p");
var questionText = document.getElementById("question-text");
var answerChoices = document.getElementsByClassName("answer-choice-button");
var time = document.getElementById("timer");

var buttonA = document.getElementById("button-a");
var buttonB = document.getElementById("button-b");
var buttonC = document.getElementById("button-c");
var buttonD = document.getElementById("button-d");

var button1Text = document.getElementById("button-1")
var button2Text = document.getElementById("button-2")
var button3Text = document.getElementById("button-3")
var button4Text = document.getElementById("button-4")


var i = 0;
var timer = 100;
time.textContent = "Time: " + timer;

var questions = [
    {
        title: "What is 2*5",
        choices: ["two", "ten", "three", "four"],
        correctAnswer: "B",
    },
    {   
        title: "What is my favorite food",
        choices: ["pasta", "seafood", "skittles", "roe"],
        correctAnswer: "B",
    },
    {
        title: "What is my favorite color?",
        choices: ["orange", "blue", "yellow", "purple"],
        correctAnswer: "A",
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
    runTimer();
}

function writeQuestion() {

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

        console.log(buttonA);
        console.log(buttonB);
        console.log(buttonC);
        console.log(buttonD);
}

buttonA.addEventListener("click", checkAnswerA);
buttonB.addEventListener("click", checkAnswerB);
buttonC.addEventListener("click", checkAnswerC);
buttonD.addEventListener("click", checkAnswerD);

  

function checkAnswerA() {

    console.log("This is the correct answer " + questions[i].correctAnswer);
    console.log("This is the content in the top left button " + buttonA.value);
    

    if (buttonA.value == questions[i].correctAnswer) {
        console.log("YOU GOT IT RIGHT");
    } else if (buttonA.value != questions[i].correctAnswer) {
        console.log("YOU GOT IT WRONG");
        timerSubtract();
    }
    
    i ++;

     writeQuestion();

}

function checkAnswerB() {

    console.log("This is the correct answer " + questions[i].correctAnswer);
    console.log("This is the content in the top right button " + buttonB.value);
    
    if (buttonB.value == questions[i].correctAnswer) {
        console.log("YOU GOT IT RIGHT");
    } else if (buttonB.value != questions[i].correctAnswer) {
        console.log("YOU GOT IT WRONG");
        timerSubtract();
    } 
    
    i ++;
    

     writeQuestion();

}

function checkAnswerC() {

    console.log("This is the correct answer " + questions[i].correctAnswer);
    console.log("This is the content in the bottom left button " + buttonC.value);
    
    if (buttonC.value == questions[i].correctAnswer) {
        console.log("YOU GOT IT RIGHT");
    } else if (buttonC.value != questions[i].correctAnswer) {
        console.log("YOU GOT IT WRONG");
        timerSubtract();
    }
    
    
    i ++;

     writeQuestion();

}

function checkAnswerD() {

    console.log("This is the correct answer " + questions[i].correctAnswer);
    console.log("This is the content in the bottom left button " + buttonC.value);
    
    if (buttonD.value == questions[i].correctAnswer) {
        console.log("YOU GOT IT RIGHT");
    } else if (buttonD.value != questions[i].correctAnswer){
        console.log("YOU GOT IT WRONG");
        timerSubtract();
    }
    
    
    i ++;

     writeQuestion();

}

function stopTimer(){
    clearInterval(myVar);
}


function runTimer() {
    var myVar = setInterval(myClock,1000);

    function myClock() {
        timer--;
        time.textContent = "Time: " + timer;

        if (timer==0){
            clearInterval(myVar);
            alert("Times up!");
        }
    }

}


function timerSubtract() {
    timer = timer - 10;
    time.textContent = "Time: " + timer;

}


function logScore() {


}