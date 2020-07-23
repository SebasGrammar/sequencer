let bars = document.querySelectorAll(".bar")

let steps = document.querySelectorAll(".step")

let kick = document.querySelector("audio")

for (let bar of bars) {
    let steps = bar.children;
    for (let step of steps) {
        step.addEventListener("click", function () {
            //step.style.background = "green"
            step.classList.toggle("active")
        })
    }
}
let counter = 100

let run = true;

document.addEventListener("keypress", function (event) {
    event.preventDefault()
    if (event.keyCode === 32) {
        run = false
    }
})

// for (let index = 0; index < bars.length; index++) {
//     setTimeout(function (y) {
//         console.log("XD")
//         console.log(y)
//         kick.play()
//     }, index * 1000, "lol")
// }

/*****/

// for (let index = 0; index < bars.length * 4; index++) {
//     setTimeout(function (y) {
//         console.log("XD")
//         console.log(y)
//         //kick.play()
//     }, index * 500, "lol") // gotta implement different bpms
// }




// for (let index = 0; index < bars.length * 4; index++) {
//     setTimeout(function (y) {
//         if (steps[index].classList.contains("active")) {
//             kick.play()
//         }
//         //kick.play()
//     }, index * 500, "lol") // gotta implement different bpms
// }


// setInterval(function() {
//     for (let index = 0; index < bars.length * 4; index++) {
//         setTimeout(function (y) {
//             if (steps[index].classList.contains("active")) {
//                 console.log(index)
//                 kick.play()
//             }
//             //kick.play()
//         }, index * 500, "lol") // gotta implement different bpms
//     }
//     console.log("Buuuuu")
// }, 10000)

// let time = 1000

// setInterval(function() {
//     for (let index = 0; index < bars.length * 4; index++) {
//         setTimeout(function (y) {
//             if (steps[index].classList.contains("active")) {
//                 console.log(index)
//                 kick.play()
//             }
//             //kick.play()
//         console.log(index)
//         }, index * (time / 16), "lol") // gotta implement different bpms
//     }
//     console.log("Buuuuu")
// }, time)

let time = 3000

setInterval(function() {
    for (let index = 0; index < bars.length * 4; index++) {
        setTimeout(function (y) {
            if (steps[index].classList.contains("active")) {
                console.log(index)
                console.log("PLAY")
                kick.play()
            }
            //kick.play()
        console.log(index)
        }, index * (time / 16), "lol") // gotta implement different bpms
    }
    console.log("Buuuuu")
}, time)

console.log(bars)