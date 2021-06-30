// select elements
var start = document.getElementById("start");
var codeQuiz= document.getElementById("code-quiz");
var question = document.getElementById("question");

var option1 = document.getElementById("first");
var option2 = document.getElementById("second");
var option3 = document.getElementById("third");
var option4 = document.getElementById("fourth");

var answers = document.getElementById("answers");
var timerEl = document.getElementById('time');

var scoreEl = document.getElementById('score');


// quizQuestions
var quizQuestions = [
    {
        question : "Commonly used data types DO NOT include:",
        option1 : "strings",
        option2 : "booleans",
        option3 : "alerts",
        option4 : "numbers",
        correctAnswer : "third",
    },

    {
        question : "The conditions in an if/else statement is enclosed within _______",
        option1 : "quotes",
        option2 : "curly brackets",
        option3 : "parentheses",
        option4 : "square brackets",
        correctAnswer : "third",
    },

    {
        question : "Arrays in Javascript can be used to store _______",
        option1 : "numbers and strings",
        option2 : "other arrays",
        option3 : "booleans",
        option4 : "all of the above",
        correctAnswer : "fourth",
    },

    {
        question : "String values must be enclosed within _______ when being assigned to variables.",
        option1 : "commas",
        option2 : "curly brackets",
        option3 : "quotes",
        option4 : "parentheses",
        correctAnswer : "third",
    },

    {
        question : "A very useful tool used during development and debugging for printing content to the debugger is",
        option1 : "JavaScript",
        option2 : "terminal / bash",
        option3 : "for loops",
        option4 : "console log",
        correctAnswer : "fourth",
    }
];

// Variables
var currentQuestion = 0;;
var lastQuestion = quizQuestions.length-1;
var timeLeft = quizQuestions.length * 10;
var score = 0;


// function countdown() {
//     // var timeLeft = 25;  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//       // As long as the `timeLeft` is greater than 1
//       if (timeLeft > 1) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.textContent = timeLeft + ' seconds remaining';
//         // Decrement `timeLeft` by 1
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//         timerEl.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string        
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);
//         timerEl.textContent = '0 second remaining';
//         // Call the `displayMessage()` function        
//       }
//     }, 1000);
//   }

  function countdown() {
    // var timeLeft = 25;  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft >= 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = "TIME : " + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string        
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        timerEl.textContent = "TIME is up! ";

      }
    }, 1000);
  }

//Functions
function diplayQuestion() {    
    var quizQuestion = quizQuestions[currentQuestion];
    question.innerHTML = "<p>"+ quizQuestion.question + "</p>";
    option1.innerHTML = quizQuestion.option1;
    option2.innerHTML = quizQuestion.option2;
    option3.innerHTML = quizQuestion.option3;
    option4.innerHTML = quizQuestion.option4;
}

function CodeQuiz(){
    start.style.display = "none";
    codeQuiz.style.display = "inline-block" ;
    countdown();
    diplayQuestion();    
    renderBoxes();
}

// function checkAnswer(answer){
//     console.log({
//         currentIf: answer == quizQuestions[currentQuestion].correctAnswer,
//         currentQuestion:  quizQuestions[currentQuestion].correctAnswer,
//     })
  
//     if (answer == quizQuestions[currentQuestion].correctAnswer){
//         score++;
//         document.getElementById(currentQuestion).style.backgroundColor = "green";
//     }
//     else{
//         document.getElementById(currentQuestion).style.backgroundColor = "red";
//     }
//     if(currentQuestion < lastQuestion){
//         currentQuestion++;
//         diplayQuestion();
       

// }};

function checkAnswer(answer){
    if (answer == quizQuestions[currentQuestion].correctAnswer){
        // console.log("IF condition met!");
        score++;
        console.log(score);
        document.getElementById(currentQuestion).style.backgroundColor = "green";
    }
    else{
        // console.log("ELSE condition met!");
        document.getElementById(currentQuestion).style.backgroundColor = "red";
        timeLeft-=10;
        timerEl.textContent = "TIME : " + timeLeft

    }
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        diplayQuestion(); 
    }
    else{
        timeLeft = 0
        diplayScore()
    }       

};

function diplayScore() {
    codeQuiz.style.display = "none"
    scoreEl.style.display = "inline-block"
}

function renderBoxes(){
    for(let i = 0; i <= lastQuestion; i++){
        answers.innerHTML += "<div class='answer' id="+ i +"></div>";
    }
};


//Events
btn1.addEventListener("click",CodeQuiz);