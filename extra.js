// note, for the quiz, I got a ton of help from the online resource I used. I mainly wanted to make the quiz
// to learn more about JS.

//select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: "What Does CIMON Stand For?",
        imgSrc: "cimon.jpg",
        choiceA: "Crew Interactive Mobile Companion",
        choiceB: "Cloud Intensive Machine Company",
        choiceC: "Client International Macho Complain",
        correct: "A"
    },
    {
        question: "What is AI?",
        imgSrc: "ai.jpg",
        choiceA: "Discovery and exploration of celestial structures in outer space by means of evolving " +
            "and growing space technology. ",
        choiceB: "An area of computer science that deals with giving machines the ability to seem like they have" +
            "human intelligence.",
        choiceC: "Scientific study of algorithms and statistical models that computer systems use to effectively " +
            "perform a specific task without using explicit instructions",
        correct: "B",
    },
    {
        question: "What Jobs are NOT likely to be taken away by AI?",
        imgSrc: "jobs.jpg",
        choiceA: "Retail Managers, Clerks, Truck Drivers",
        choiceB: "Funeral Directors, Real Estate Agents, Construction Worker",
        choiceC: "Massage Therapists, Animal Scientists, Archaeologists",
        correct: "C",
    },
    {
        question: "What is one problem with Mars colonization?",
        imgSrc: "mars.jpg",
        choiceA: "The size of the AI machines that would be used",
        choiceB: "The communication delay between Earth and AI on Mars",
        choiceC: "Homesickness",
        correct: "B",
    },


];

//create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}


// button for starting quiz
start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion(); // actually create a question, and display it and the choices
    quiz.style.display = "block";
    renderProgress(); // how far along in the quiz the user is
    renderCounter();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){ // continues until last question
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>"; // reference html, then css for display the progress bar in the bottom
    }
}

// change progress colour to red
if(runningQuestion < lastQuestion){
    runningQuestion++; // updates question
    renderQuestion();
}else{
// end the quiz and show the score
}

// checkAnswer
function checkAnswer(answer){
    if( answer === questions[runningQuestion].correct){
// answer is correct
        score++;
// change progress color to green
        answerIsCorrect();
    }else {
// answer is wrong
// change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }

// answer is correct
    function answerIsCorrect(){
        document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    }

// answer is Wrong
    function answerIsWrong(){
        document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    }

// score render
    function scoreRender(){
        scoreDiv.style.display = "block";


// calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

// choose the image based on the scorePerCent
    let img = (scorePerCent >= 50) ? "yellow.png" :
        "emoji.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
