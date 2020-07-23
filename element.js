class Element {
    constructor() {

    }

    create(type, className) {
        let element = document.createElement(type)
        element.classList.add(className);
        return element;
    }
}

export {Element};