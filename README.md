# 04-code-quiz

# Code-Quiz

This page allows users to take a coding quiz based on javascript. 

## Link to deployed page

https://mmurphy222.github.io/04-code-quiz/

## Usage

The quiz initially prompts with a start screen (instructions and a button), then upon clicking start a timer begins and a viewer is shown questions. The answer choice buttons change color upon mouse hover, when a user gets a question wrong ten seconds are deducted from the timer. The user must answer 5 questions before the timer reaches 0. Upon answering the last question the timer is stopped and that value is logged as their score, the user has the option to enter and save their initials along with their score. 

The html and css for this page are relatively bare, most of the editing has been done within the javascript. 

In order to move between start screen, questions, and end screen. A class of hide has been added and removed from elements using javascript. 

```bash
.ClassList.add("hide");
.ClassList.remove("hide");
```
The class of hide is referenced within the css and is given display: none;

There are a few main functions within the javascript allowing this page to run. The first of those is writeQuestion. This fills a question in the question box and answer choices to each of the buttons. All of these are referenced from objects within an array. 

```bash
questionText.textContent = questions[i].title; 

 
button1Text.textContent = questions[i].choices[0];
button2Text.textContent = questions[i].choices[1];
button3Text.textContent = questions[i].choices[2];
button4Text.textContent = questions[i].choices[3];

```

The variable i is used to reference objects within the array, it is initially set to zero and incrementally goes up by one after each question is checked prior to running the writeQuestion function again. 

In order to checkAnswers each button has a separate eventListener added to it. Each eventListener then calls a function that checks the content within that button to what is listed as the correctAnswer within the array of Questions. The if else statement within the function looks like this. 

```bash
if (buttonA.value == questions[i].correctAnswer) {
        console.log("YOU GOT IT RIGHT");
    } else if (buttonA.value != questions[i].correctAnswer) {
        console.log("YOU GOT IT WRONG");
        timerSubtract();
    }
```

The correct answers are held as values, A, B, C, or D that correspond with what button the correct answer will appear on. I initially had the correctAnswers logged as string values that were equal to one of the answer choice values but javascript was not recognizing them as equal to each other, so I changed them to values. 

timerSubtract() is a function that subtracts ten from the timer and updates it to the page. 

The timer is run using an interval within a function runTimer

```bash
function runTimer() {
    var myVar = setInterval(myClock,1000);
    function myClock() {
        timer--;
        time.textContent = "Time: " + timer;
        if (timer==0){
            clearInterval(myVar);
            endGame();
        }
        if (i === 5){
            clearInterval(myVar);
            endGame();
        }
    }
}
```

This function allows the timer to stop if it equals zero or if i is equal to 5. the variable i will be equal to 5 after the last question is answered. So this stops the timer when that occurs and runs the endGame function. 

The endGame function logs the score (timer) to local storage, hides the question container, and removes the hide class from a form that allows the user to input their initials. 