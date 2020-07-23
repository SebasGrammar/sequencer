import {Element} from "./element.js";

class Step extends Element {
    constructor() {
        super()
    }

    create() {
        return super.create("div", "step")
    }

}

export { Step };