//Zareah Stiles-Steele, 10-13-2026//

alert("Welcome To Harkefol!\nLet's get your started with a brand new hero persona!");

let heroName = prompt("Please enter your Hero name?");
let heroPet = prompt('What species would you like your pet to be?\n(Wooping Snakezilla, Bloodlust Rabbit, Gelatinous Cube, Morty,etc)');
let superPower = prompt(`What superpower would you like to have, ${heroName}? 
    (choose wisely)`);
let theyFight = confirm("Would you physically harm another being if you had to?\nClick OK for yes.");

alert(`Almost done, ${heroName}. Just a gathering the mIsTiCaL EnErGy force...or something`);

alert(`Alright! We are done.
    HERE IS YOUR NEW HERO PERSONA, ${heroName}!
    ===========================================
    Your new name is ${heroName}.
    Your adopted pet is ${heroPet}.
    Your superpower is ${superPower}.
    You ${theyFight ? "WOULD" : "WOULD NOT (???)"} 
    physically harm another being.${theyFight ? "" : " (You chose the \"PeRfEcT\" job)"}
    
    The tale of ${heroName} and their mighty pet 
    ${heroPet} is just beginning. 
    As the power of your ${superPower} will cause 
    the greatest of warriors to rise.
    ===========================================`);
