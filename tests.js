import {createInstrument} from "./instrument.js";

let bars = document.querySelectorAll(".bar")

console.log(bars)

let one = document.querySelector(".instrument")
let steps = one.querySelectorAll(".step")

let steps2 = document.querySelector(".instrument2")


let ste = steps2.querySelectorAll(".step")

let steps3 = document.querySelector(".instrument3")
let s = steps3.querySelectorAll(".step")

let kick = document.querySelector(".kick")
let hihat = document.querySelector(".hihat")
let snare = document.querySelector(".snare")

for (let bar of bars) {
    let steps = bar.children;
    for (let step of steps) {
        step.addEventListener("mousedown", function () {
            step.classList.toggle("active")
        })
    }
}

let counter = 100

let run = true;

document.addEventListener("keypress", function (event) {
    event.preventDefault()
    if (event.keyCode == 32) {
        run = false
    }
})

let time = 2200

function play() {
    for (let index = 0; index < bars.length * 4; index++) { // steps in 4 bars => 16, so 4 * 4
        setTimeout(function () {
            if (steps[index].classList.contains("active")) {
                kick.currentTime = 0;
                kick.play()
            }

            if (ste[index].classList.contains("active")) {
                hihat.currentTime = 0;
                hihat.play()
            }

            if (s[index].classList.contains("active")) {
                snare.currentTime = 0;
                snare.play()
            }
            console.log(index)
        }, index * (time / 16))
    }
}

function pollFunc(fn, timeout, interval) {
    var startTime = (new Date()).getTime();
    interval = interval || 1000;

    (function p() {
        fn();
        if (((new Date).getTime() - startTime) <= timeout) {
            setTimeout(p, interval);
        }
    })();
}

export {play}

console.log(bars)

createInstrument()