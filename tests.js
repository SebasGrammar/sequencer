let bars = document.querySelectorAll(".bar")

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


for (let index = 0; index < bars.length; index++) {
    setTimeout(function (y) {
        console.log("XD")
        console.log(y)
        kick.play()
    }, index * 1000, "lol")
}




console.log(bars)