var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-box");
var startTitle = document.getElementById("start-title");
var startInstructions = document.querySelector("p");
var questionText = document.getElementById("question-text");
var answerChoices = document.getElementsByClassName("answer-choice-button");
var time = document.getElementById("timer");

// variables for button elements themselves 
var buttonA = document.getElementById("button-a");
var buttonB = document.getElementById("button-b");
var buttonC = document.getElementById("button-c");
var buttonD = document.getElementById("button-d");

// These are the variables for the text header elements within the buttons
var button1Text = document.getElementById("button-1")
var button2Text = document.getElementById("button-2")
var button3Text = document.getElementById("button-3")
var button4Text = document.getElementById("button-4")

// i is used to move through questions, timer sets the starting time value
var i = 0;
var timer = 100;
time.textContent = "Time: " + timer;

// array of objects containing all questions, answer choices, and correct answers
// the correctAnswer A,B,C,D align with the value assigned to the button that the correct
// text will appear on, the values are assigned in html
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
    },
    {
        title: "Who is my favorite dog",
        choices: ["Raisin", "Fig", "Percy", "Mila"],
        correctAnswer: "D",
    },
    {
        title: "What is the best seasoning",
        choices: ["cinnamon", "oregano", "garlic", "curry powder"],
        correctAnswer: "C",
    }
]

// calls the function startGame on the startButton click
startButton.addEventListener("click", startGame);

// adding class hide, applies them to the css class hide and display none
// removing the hide class allows them to show
function startGame() {
    console.log("The game has started");
    startButton.classList.add("hide");
    startTitle.classList.add("hide");
    startInstructions.classList.add("hide");
    questionContainer.classList.remove("hide");
    writeQuestion();
    runTimer();
}

// this function writes the questions and the answers to the screen, i is referring to
// the array in reference and i is added to after each question is checked
// runs the function endGame when i = 5 which is after the last question is answered
function writeQuestion() {

        if (i === 5){
        endGame();
        console.log("The game is overrrr " + i);
        }

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
        

        console.log("This is i value " + i);

}

// each button has an event listener for a click and on click will run a seperate
// function to check the answer
buttonA.addEventListener("click", checkAnswerA);
buttonB.addEventListener("click", checkAnswerB);
buttonC.addEventListener("click", checkAnswerC);
buttonD.addEventListener("click", checkAnswerD);

  
// the check answer functions are all the same except for the button they are referencing
// they check to see if the value of button A is equal to the correctAnswer of the question
// that is currently displayed, they also call the writeQuestion function again after adding to i
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

// This function runs the timer, stops it when its equal to zero, and stops it after the last
// question is answered
function runTimer() {
    var myVar = setInterval(myClock,1000);

    function myClock() {
        timer--;
        time.textContent = "Time: " + timer;

        if (timer==0){
            clearInterval(myVar);
            alert("Times up!");
        }

        if (i === 5){
            clearInterval(myVar);
            alert("You completed the quiz!");
        }
    
    }

}

// this function subtracts 10 from timer, it is called when a user answers incorrectly
function timerSubtract() {
    timer = timer - 10;
    time.textContent = "Time: " + timer;

}

// this function logs the score(the timer value) when teh person finished the game
function logScore() {


}

// this function is the end of the game!
function endGame() {
    logScore();
}