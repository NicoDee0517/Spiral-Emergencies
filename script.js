// JavaScript code to manage quiz questions and answers
const questions = [
    {
        question: "What is the normal resting heart rate for adults?",
        options: ["60-100 bpm", "40-60 bpm", "100-120 bpm", "120-140 bpm"],
        answer: 1
    },
    {
        question: "How much water should an average person drink daily?",
        options: ["1-2 liters", "2-3 liters", "3-4 liters", "4-5 liters"],
        answer: 2
    },
    {
        question: "Which vitamin is important for bone health?",
        options: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin B12"],
        answer: 3
    },
    {
        question: "What is the most common chronic disease in the world?",
        options: ["Diabetes", "Heart Disease", "Obesity", "Hypertension"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("option1").innerText = questions[currentQuestion].options[0];
    document.getElementById("option2").innerText = questions[currentQuestion].options[1];
    document.getElementById("option3").innerText = questions[currentQuestion].options[2];
    document.getElementById("option4").innerText = questions[currentQuestion].options[3];
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong answer! Try again.");
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = `<h3>Quiz Completed!</h3><p>Your Score: ${score}</p>`;
    }
    document.getElementById("score").innerText = "Score: " + score;
}

window.onload = loadQuestion;
function endQuiz() {
  document.getElementById("quiz-container").style.display = "none"; // Hide quiz
  document.getElementById("score").textContent = "Final Score: " + score;
  document.getElementById("retry-btn").style.display = "block"; // Show retry button
}

// Function to handle the retry button click
function retryQuiz() {
  startQuiz();
}

// Start the quiz when the page loads
window.onload = startQuiz;

