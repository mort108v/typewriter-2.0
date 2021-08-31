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
const soundButtonOn = document.getElementById("on");
const soundButtonOff = document.getElementById("off");
const sounds = document.querySelectorAll("audio");

document.addEventListener("DOMContentLoaded", init);

function mutePage() {
    console.log("Muting page");
    sounds.forEach.call(sounds, function(sounds) {
        muteMe(sounds);
    });
}

function unMutePage() {
    console.log("Muting page");
    sounds.forEach.call(sounds, function(sounds) {
        unMuteMe(sounds);
    });
}
// Mute a singular HTML5 element
function muteMe(elem) {
    elem.muted = true;
}

function unMuteMe(elem) {
    elem.muted = false;
}

function init() {
    console.log("init");

    // Sound stuff  
    mutePage(sounds);

    soundButtonOn.onclick = function() {
        console.log("On BTN clicked");
        unMutePage(sounds);
    };
    soundButtonOff.onclick = function() {
        console.log("Off BTN clicked");
        mutePage(sounds);
    };
    // Fetch txt from HTML
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