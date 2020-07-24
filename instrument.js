let stepSequencer = document.querySelector(".step-sequencer");
let counter = 4;

export function createInstrument() {
    let instrument = document.createElement("div")
    instrument.classList.add("instrument", `steps${counter}`, "row")

    instrument.innerHTML = `
    <div class="bar gray">
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
    </div>

    <div class="bar red">
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
    </div>

    <div class="bar gray">
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
    </div>

    <div class="bar red">
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
    </div>
    `

    let bars = instrument.querySelectorAll(".bar")

    for (let bar of bars) {
        let steps = bar.children;
        for (let step of steps) {
            step.addEventListener("click", function () {
                step.classList.toggle("active")
            })
        }
    }

    stepSequencer.appendChild(instrument)
    counter ++
    
}

