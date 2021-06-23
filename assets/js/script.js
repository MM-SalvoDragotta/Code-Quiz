// select elements
var start = document.getElementById("start");
var codeQuiz= document.getElementById("code-Quiz");

// Questions

var questions = [
    {
        question : "Commonly used data types DO NOT include:",
        option1 : "strings",
        option2 : "booleans",
        option3 : "alerts",
        option4 : "numbers",
        correctAnswer : "3",
    },

    {
        question : "The conditions in an if/else statement is enclosed within _______",
        option1 : "quotes",
        option2 : "curly brackets",
        option3 : "parentheses",
        option4 : "square brackets",
        correctAnswer : "3",
    },

    {
        question : "Arrays in Javascript can be used to store _______",
        option1 : "numbers and strings",
        option2 : "other arrays",
        option3 : "booleans",
        option4 : "all of the above",
        correctAnswer : "4",
    },

    {
        question : "String values must be enclosed within _______ when being assigned to variables.",
        option1 : "commas",
        option2 : "curly brackets",
        option3 : "quotes",
        option4 : "parentheses",
        correctAnswer : "3",
    },

    {
        question : "A very useful tool used during development and debugging fro printing content to the debugger is",
        option1 : "JavaScript",
        option2 : "terminal / bash",
        option3 : "for loops",
        option4 : "console log",
        correctAnswer : "4",
    }
];

// Variables

//Functions
function startQuiz(){
    start.style.display = "none";
}

//Events

btn1.addEventListener("click",startQuiz);