"use strict";

let typedText = document.querySelector(".typewritten");
let typed;

let nthletter = 0;
let typingSpeed = 200;

const charOneSound = document.getElementById("typekey1");
const charTwoSound = document.getElementById("typekey2");
const spaceSound = document.getElementById("typespace");
const lastKeySound = document.getElementById("typelast");
const returnSound = document.getElementById("typereturn");
const soundButton = document.getElementsByClassName("button");
const sounds = document.getElementById("sounds");

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");

    // Mute sound on Load
    sounds.play = false;

    // Festch txt from HTML
    typed = typedText.innerHTML;
    // Clear fetched text
    typedText.innerHTML = "";
    // Start Loop function
    typewriterLoop(typed);

}

function typewriterLoop() {
    console.log(typed);
    console.log("This letter is number (" + nthletter + ")");

    if (nthletter < typed.length) {
        console.log("The length of string is = " + typed.length);

        // - Set textContent to substring of 0 to N
        typedText.textContent += typed.charAt(nthletter);
        // Imcrement N (++) 
        nthletter++;
        console.log(nthletter);

        playSound(nthletter);

        // Wait before calling loop again
        setTimeout(typewriterLoop, typingSpeed);
    }
}


function playSound() {
    console.log("PlaySound");

    let spaceBar = typed.indexOf(' ');
    let lastLetter = typed.length;
    console.log(lastLetter);

    if (nthletter === lastLetter) {
        lastKeySound.play();
        setTimeout(typingSpeed);
        returnSound.play();

    } else if (nthletter == spaceBar) {
        spaceSound.play();

    } else {
        let play = Math.random();
        if (play < .5) {
            charOneSound.play();
        } else {
            charTwoSound.play();
        }
    }
}