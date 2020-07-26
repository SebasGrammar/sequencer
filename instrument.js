let stepSequencer = document.querySelector(".step-sequencer");
let counter = 4;

export function createInstrument() {
    let instrument = document.createElement("div")
    instrument.classList.add(`instrument${counter}`, "row")

    instrument.innerHTML = `
    <!-- default -->

    <div class="controls">
        <div class="enable">

        </div>

        <div class="panning knob">

        </div>

        <div class="volume knob">

        </div>

        <div class="mixer-channel">

        </div>
    </div>


    <div class="sample">
        Kick
    </div>

    <div class="selected">
        <div class="light">

        </div>
    </div>

    <div class="steps">
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
    </div>


    <div class="empty">

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

