// note, for this quiz, I got a ton of help from the online resource I used. I mainly wanted to make the quiz
// to learn more about JS.

//select all elements; matches these with the ones in HTML
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
        question: "What Does CIMON Stand For?",
        imgSrc: "cimon.jpg",
        choiceA: "Crew Interactive Mobile Companion",
        choiceB: "Cloud Intensive Machine Company",
        choiceC: "Client International Macho Complain",
        correct: "A"

    },
    {
        question: "What is one problem with Mars colonization?",
        imgSrc: "mars.jpg",
        choiceA: "It gets too hot on Mars",
        choiceB: "The communication delay between Earth and AI on Mars",
        choiceC: "The AI that we have created isn't compatible with Mars' soil",
        correct: "B",

    },
    {
        question: "What Jobs are not likely to be taken away by AI?",
        imgSrc: "jobs.jpg",
        choiceA: "Retail Managers, Clerks, Truck Drivers",
        choiceB: "Funeral Directors, Real Estate Agents, Construction Worker",
        choiceC: "Massage Therapists, Animal Scientists, Archaeologists\n",
        correct: "C",

    },
    {
        question: "Who is this man?",
        imgSrc: "elon.jpg",
        choiceA: "Elo Mus",
        choiceB: "Tesla Boi",
        choiceC: "Elon Musk",
        correct: "C",

    },

];


const lastQuestion = questions.length - 1; // index is always -1
let runningQuestion = 0; // gets updated throughout
let count = 0; // needed for prog bar
let score = 0; //used for calculating percent at the end

// make a question
function renderQuestion(){
let q = questions[runningQuestion];

question.innerHTML = "<p>"+ q.question +"</p>";
qImg.innerHTML = "<img src="+ q.imgSrc +">";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
start.style.display = "none";
renderQuestion(); // actually create a question, and display it and the choices
quiz.style.display = "block"; // normal paragraph form
renderProgress(); // how far along in the quiz the user is
ensureProg(); // needed for progress
}

// render progress
function renderProgress(){
for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){ // continues until last question
progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>"; // reference html, then css for display the progress bar in the bottom
}
}

// this function basically helps the progress of the quiz. It keeps the progress bar correct, and it
// determines if the user is done the quiz or not.

function ensureProg(){
if(count){ // i was testing code, and this code is needed here to ensure that the progress bar is updated properly
    // (if this wasn't here, the first prog bubble wouldn't work)

// change progress color to red, user got it wrong if the count is existent
if(runningQuestion < lastQuestion){
runningQuestion++; // updates question
renderQuestion();
}else{
// end the quiz and show the score, because the number of questions in the quiz has been surpassed
scoreRender();
}
}
}

// checkAnswer; this function checks if the user got the right answer, and either updates the prog with green, or red.
// also checks if the user is done the quiz or not.

function checkAnswer(answer){
if(answer === questions[runningQuestion].correct){
// answer is correct
score++;
// change progress color to green
answerIsCorrect();
}else{
// answer is wrong
// change progress color to red
answerIsWrong();
}
count = 0;
if(runningQuestion < lastQuestion){
runningQuestion++;
renderQuestion();
}else{
// end the quiz and show the score
scoreRender();
}
}

// answer is correct; fill the prog bar with the correct colour
function answerIsCorrect(){
document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// answer is Wrong; fill the prog bar with the correct colour
function answerIsWrong(){
document.getElementById(runningQuestion).style.backgroundColor = "red";
}

// score element will be displayed as "block-level element", meaning it will be displayed like normal text (<p>)
function scoreRender(){
scoreDiv.style.display = "block";

// calculate the amount of question percent answered by the user
const scorePerCent = Math.round(100 * score/questions.length);

// choose the image based on the scorePerCent
let img = (scorePerCent >= 50) ? "yellow.png" :
"emoji.png";


// these two lines go to the HTML, and in turn go to the CSS to display percent and img (img determined from above)
scoreDiv.innerHTML = "<img src="+ img +">";
scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
