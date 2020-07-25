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
        step.addEventListener("click", function () {
            step.classList.toggle("active")
        })
    }
}

let counter = 100

let run = true;

document.addEventListener("keypress", function (event) {
    event.preventDefault()
    console.log("OEOEOE")
    console.log(event.keyCode)
    if (event.keyCode == 32) {
        run = false
        console.log(run)
    }
})

let time = 2200


function sendHeartBeat() {
    for (let index = 0; index < bars.length * 4; index++) { // steps in 4 bars => 16, so 4 * 4
        setTimeout(function (y) {
            if (steps[index].classList.contains("active")) {
                console.log(index)
                console.log("PLAY")
                //kick.pause()
                kick.currentTime = 0;
                kick.play()
            }

            if (ste[index].classList.contains("active")) {
                //hihat.pause()
                hihat.currentTime = 0;
                hihat.play()
            }

            if (s[index].classList.contains("active")) {
                //snare.pause()
                snare.currentTime = 0;
                snare.play()
            }
            console.log(index)
        }, index * (time / 16), "lol")
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

//pollFunc(sendHeartBeat, 60000, time);

export {sendHeartBeat}

// _timer.run(sendHeartBeat)

console.log(bars)


createInstrument()