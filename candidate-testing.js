const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American Woman in space?";

let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["1) Who was the first American Woman in space? ",'2) True or false: 5 kilometer == 5000 meters? ',"3) (5 + 3)/2 * 10 = ? ","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","5) What is the minimum crew size for the ISS? "];

//console.log(questions);

let correctAnswers = ["sally ride", "true", '40', "Trajectory", '3'];
//console.log(correctAnswers);
let candidateAnswers = "";

let score = 0;
let pass = 80;
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
   askForName = (candidateName = input.question ("Enter your name: "));
   console.log(`Candidate Name: ${candidateName}`);
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
  for (let i = 0; i < questions.length; i++) {
  candidateAnswers = input.question(questions[i]);
   console.log( `Your response: ${candidateAnswers}
Correct response: ${correctAnswers[i]}`);
   if(candidateAnswers.toLowerCase() === correctAnswers.join('|').toLowerCase().split('|')[i]){
     score++;
     console.log(`You got that right!\n`);
   } else{
     console.log(`Incorrect \n`);
   }
 }
   } 
 

function gradeQuiz(candidateAnswers){

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 let grade = score/5*100;
if (grade >= pass){
     console.log(`Status: Passed ` );
   } else{ console.log(`>>> Staus: FAILED <<< `)}
  return (console.log(`>>> Overall Grade: ${grade}% You answered ${score} of ${questions.length} questions correctly! <<<`));

 
}

function runProgram() {
  
  // TODO 1.1c: Ask for candidate's name //
 

  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};