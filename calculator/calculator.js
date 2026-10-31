//zareah stiles Caulculator with js
//10-30-26

"use strict";
let choice;
let num1;
let num2;


let menu = prompt("What would you like to do? \n1. add\n2. subtract\n3. multiply\n4. divide\n5. exit")?.trim().toLowerCase();


if (menu === "add") {
    choice = Number(1);
} else if (menu === "subtract") {
    choice = Number(2);
} else if (menu === "multiply") {
    choice = Number(3);
} else if (menu === "divide") {
    choice = Number(4);
} else if (menu === "exit") {
    choice = Number(5);
} 


switch (choice) {
    case 1:
        num1 = Number(prompt("Please enter the first number:"));
        num2 = Number(prompt("Please enter the second number:"));
        alert("The sum is: " + (num1 + num2));
        break;
    case 2:
        num1 = Number(prompt("Please enter the first number:"));
        num2 = Number(prompt("Please enter the second number:"));
        alert("The difference is: " + (num1 - num2));
        break;
    case 3:
        num1 = Number(prompt("Please enter the first number:"));
        num2 = Number(prompt("Please enter the second number:"));
        alert("The product is: " + (num1 * num2));
        break;
    case 4:
        num1 = Number(prompt("Please enter the first number:"));
        num2 = Number(prompt("Please enter the second number (Not zero, Please):"));
        if (num2 !== 0) {
            alert("The quotient is: " + (num1 / num2));
        } else {
            alert("Cannot divide by zero");
        }
        break;
    case 5:
        alert("Exiting the program, BYE!");
        break;
    default:
        alert("Invalid choice");
}
