let body = document.querySelector("body")


export function createGrid(n) {

    for (let counter = 0; counter <= n; counter += 50) {
        let line = document.createElement("div")
        let separator = document.createElement("div")
    
        line.classList.add("grid", "separator-a")
        line.style.left = `${counter + 10}px`

        separator.classList.add("grid", "separator-b")
        separator.style.left = `${counter + 50}px`

    
        body.appendChild(line)
        body.appendChild(separator)
    }

}

// for (let counter = 0; counter < n; counter ++) {
//     let line = document.createElement("div")

//     line.className = "line"

//     body.appendChild(line)
// }