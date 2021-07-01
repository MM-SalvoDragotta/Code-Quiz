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

var nameEl = document.getElementById('show-form');

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");



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
        option4 : "all of the previous answers",
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
// var timeLeft = quizQuestions.length * 10;
var timeLeft = 2;
var score = 0;
var todos = [];

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

//https://stackoverflow.com/questions/46942255/javascript-how-do-i-wait-x-seconds-before-running-next-line-of-code

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function waitsec() {
    // console.log('Taking a break...');
    await sleep(5000);
    diplayScore()
    // console.log('Two second later');
}

function renderTodos() {
    // Clear todoList element and update todoCountSpan
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
  
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = todo;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Added ✔️";
  
      li.appendChild(button);
      todoList.appendChild(li);
    }
}

  function storeTodos() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
}
  
// Add submit event to form
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
});

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
        // timerEl.textContent = "TIME is up! ";
        timerEl.textContent = "All done! And your score is .... ";
        waitsec();
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
        timerEl.textContent = "TIME : " + timeLeft;

    }
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        diplayQuestion(); 
    }
    else{
        timeLeft = 0;
        waitsec();
    }       

};

function diplayScore() {
    codeQuiz.style.display = "none";
    nameEl.style.display = "inline-block";
    scoreEl.style.display = "inline-block";
    var message = `Your score for the test is ${(score / quizQuestions.length) * 100}%`;
    console.log (message);
    scoreEl.innerHTML = `<p>${message}</p>`;
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }
  
    // This is a helper function that will render todos to the DOM
    renderTodos();

    todoList.addEventListener("click", function(event) {
        var element = event.target;
      
        // Checks if element is a button
        if (element.matches("button") === true) {
          // Get its data-index value and remove the todo element from the list
          var index = element.parentElement.getAttribute("data-index");
          todos.splice(index, 1);
      
          // Store updated todos in localStorage, re-render the list
          storeTodos();
          renderTodos();
        }
      });


    
    
};

function renderBoxes(){
    for(var i = 0; i <= lastQuestion; i++){
        answers.innerHTML += "<div class='answer' id="+ i +"></div>";
    }
};

//Events
btn1.addEventListener("click",CodeQuiz);