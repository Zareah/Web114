//Zareah Stiles --Math Quiz Game
//10/21/26

"use strict";

//set score to 0
//prompt math question
//save answer
//test if correct
//change score as needed
//repeat until all five questions are answered
//display final score

let finalScore = 0;

const question1 = Number(prompt("What is 5 + 3?"));
if (question1 === 8) {
  finalScore++;
  alert("You got the first question right!");
} else {
  alert("You got the first question wrong.");
}
const question2 = Number(prompt("What is 10 - 4?"));
if (question2 === 6) {
  finalScore++;
  alert("You got the second question right!");
} else {
  alert("You got this one wrong.");
}
const question3 = Number(prompt("What is 4 * 3?"));
if (question3 === 12) {
  finalScore++;
  alert("You got the third question right!");
} else {
  alert("That is not correct.");
}
const question4 = Number(prompt("What is 20 / 5?"));
if (question4 === 4) {
  finalScore++;
  alert("You got the fourth question right!");
} else {
  alert("wrong answer.");
}
const question5 = prompt("What is the name of my 7th favorite \"The Amazing World of Gumball\" show?");
if (question5 === "Larry") {
  finalScore++;
  alert("You actually got it right! Thats Icredible, GREAT JOB!");
} else {
  alert("It was a gamble, and you lost.");
}

//calculations into percentages
let scorePercentage === Number((finalScore / 5) * 100);


if (scorePercentage === 100) {
  alert("Congratulations! You got all questions right!");
} else if (scorePercentage >= 60) {
  alert(`You scored ${scorePercentage}%.`);
  console.log(`That means you are a little bit smarter than the average folk. Good job!`);
} else {
  alert(`You scored ${scorePercentage}% out of 5. Better luck next time!`);
}
