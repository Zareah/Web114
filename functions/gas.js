//Zareah calculate gas average
//11-12-2026

"use strict";

let useName = prompt("What is your name?")?.trim().toLowerCase();
if (useName !== null) {
    while (useName === "") {
        alert("Please enter your name.");
        useName = prompt("What is your name?")?.trim().toLowerCase();
    }
}else{
    alert(`You cancelled the name prompt.`);
}


let count = 1;
let total = 0;

function CalcGasAvg () {
    let goodData = parseFloat(prompt(`Enter your first week's gas total. Enter -1 when you are done.`));
    let average = 0;
    while (goodData !== -1) {
        count++;
        total += goodData;
        goodData = parseFloat(prompt(`Enter your next week's gas total. Enter -1 when you are done.`));
    }
    if (count > 0) {
        average = total / count;
    }
    return average;
}

let average = CalcGasAvg().toFixed(2);
if (count === 0) {
    alert(`no entries`);
}else if (count === 1) {
    alert(`${useName}'s gas total is $${total}`);
}else {
    alert(`${useName}'s average weekly gas bill is $${average}`);
    alert(`You entered ${count} gas totals.`);
}
