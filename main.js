import {Step} from "./steps.js";

let steps = {
    
}

let step = new Step();

function main() {
    let steps = document.querySelector(".steps");

    steps.appendChild(step.create())
}

// main()