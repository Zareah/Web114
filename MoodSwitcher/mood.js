//Zareah Moods Switcher in js
//11-18-2026

"use strict";

//selects the id from html page
const moodquote = document.querySelector('#quote');
const title = document.querySelector('#title');
const buttons = document.querySelector('#buttons');

//Changes the background color, text color, title, and quote based on the mood button clicked
const moods = {
    happy:     { name:"Happy", bg: `#EEFF29`, text:`#D1A700`, moodquote:`Warm smiles and the sun kisses!`},
    mad:       { name:"Mad", bg: `#A30000`, text:`#000000`, moodquote: `Furrowed brows and volcanic Explosions.`},
    depressed: { name: "Depressed", bg: `#0000CC`, text:`#926EC2`, moodquote: `Its like a rain storm of tears.`},
    tranquil:  { name: "Tranquil", bg: `#4BB4A2`, text:`#317260`, moodquote: `A peaceful state of mind with light breezes.`},
};

//trigger to initiate function
buttons.addEventListener(`click`, handleMoodButtonClick);

//function to handle the mood button click event
function handleMoodButtonClick(moodClick){
    if (moodClick.target.classList.contains(`mood-btn`)){ 
        const mood = moodClick.target.getAttribute(`data-mood`);
        const moodSettings = moods[mood];

        document.body.style.backgroundColor = moodSettings.bg;
        document.body.style.color = moodSettings.text;

        title.textContent = moodSettings.name;
        moodquote.textContent = moodSettings.moodquote;

        console.log("Mood clicked:", mood);
        console.log("Mood settings:", moodSettings);
    }
};
