//Zareah Looping assignment
//11-6-26

"use strict";

let fragile = 0;
let loadCrate = 0;
let inspect = 0;

//start a loop
//sort them

for (let crate = 1; crate <= 20; crate++) {
    if (crate % 5 === 0) {
        fragile++;
        console.log("Crate #" + crate + ": Handle with care");
    }else if (crate % 2 === 0) {
        loadCrate++;
        console.log("Crate #" + crate + ": Load the crate");
    }else {
        inspect++;
        console.log("Crate #" + crate + ": Inspect the crate");
    }
}

console.log(`${fragile} fragile crates`);
console.log(`${loadCrate} load crates`);
console.log(`${inspect} inspect crates`);
