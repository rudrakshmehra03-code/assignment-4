const quizQuestions = [
  {
    question: "WHAT IS THE FULL FORM OF API?",
    answer: "APPLICATION PROGRAMMING INTERFACE",
  },
  {
    question: "What does HTML stand for?",
    answer: "HYPERTEXT MARKUP LANGUAGE",
  },
  {
    question: "WhO IS THE PRESIDENT OF INDIA?",
    answer: "DROUPADI MURMU",
  },
  {
    question: "What is the full form of AI?",
    answer: "ARTIFICIAL INTELLIGENCE",
  },
  {
    question: "Who is the father of computers?",
    answer: "CHARLES BABAGE",
  },
];

// Function that runs the quiz
function runQuiz() {
  let score = 0; // score counter

  // Loop through each question
  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    // If user clicks cancel
    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    // Process answer
    userAnswer = userAnswer.toLowerCase().trim();

    // Compare answers
    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Final score
  alert(
    "Quiz completed! Your final score is " +
      score +
      " out of " +
      quizQuestions.length
  );
}

// Run the quiz
runQuiz();
