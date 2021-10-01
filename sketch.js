let cavnasSize = {w:400, h:400}

const COLORS = ["red", "pink", "orange", "yellow", "green", "lime", "indigo", "violet", "blue"]
const COLORS_STROKE = ["white", "black", "black", "black", "white", "black", "white", "white", "white"]
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


let clickableElements = []

let currentLetter = "A"
let randNumber = rand(0, COLORS.length)
console.log(randNumber)
let currentLetterColor = COLORS[randNumber]

let currentLetterPosition = {x: rand(50, cavnasSize.w-100), y:rand(50, cavnasSize.h-200)}

let sequentialPassDone = false







function setup() {

    cavnasSize.w = window.innerWidth
    cavnasSize.h = window.innerHeight

    createCanvas(cavnasSize.w, cavnasSize.h)

    // let newButton = new Button(10, 10, 100, 50, () => console.log("Button pressed"), "TEST", "red")

    // clickableElements.push(newButton)
}

function draw() {

    background("#87e7ff")

    drawBackground()

    // console.log(`There are ${clickableElements.length} buttons`)

    for (let el of clickableElements) {

        el.show();
    }

    drawCurrentLetter()

}

function drawCurrentLetter() {

    push()

    stroke(COLORS_STROKE[COLORS.indexOf(currentLetterColor)])

    fill(currentLetterColor)
    textSize(80)

    text(currentLetter, currentLetterPosition.x, currentLetterPosition.y)



    pop()

}

function keyTyped() {

    if (key == currentLetter.toLowerCase()) {

        //Move to next Letter

        let currentLetterIndex = LETTERS.indexOf(currentLetter.toUpperCase())

        if (currentLetterIndex === LETTERS.length - 1) {

            console.log("ALL DONE!!")

            sequentialPassDone  = true

        } else {

            currentLetter = LETTERS[currentLetterIndex + 1]

            let rnd = rand(0, COLORS.length)
            currentLetterColor = COLORS[rnd]
            console.log(COLORS)
            console.log(rnd, currentLetterColor)

            
            currentLetterPosition = {x: rand(50, cavnasSize.w-100), y:rand(50, cavnasSize.h-200)}

        }

    } else {

        console.log("Try Again!")
    }
}

function mouseClicked() {

    for (let el of clickableElements) {

        el.testClick(mouseX, mouseY)
    }
}

function drawBackground() {

    const numberOfTrees = 10

    const treeBottom = 50;

    //Draw the ground

    push()
    fill("#96593c")
    noStroke()
    
    rect(0, cavnasSize.h-treeBottom, cavnasSize.w, cavnasSize.h)

    
    pop()

    for (let x = -20; x < cavnasSize.w + 20; x += (cavnasSize.w + 40)/numberOfTrees) {

        //Draw the ellips

        push()

        //Trunk
        fill("#874623")
        noStroke()
        // rectMode(CENTER)

        rect(x-10, cavnasSize.h-treeBottom-100, 20, 100)

        fill("#12c724")
        stroke("#114516")
        strokeWeight(3)
        ellipse(x, cavnasSize.h - 100 - treeBottom, 50, 100)

        
    }

    stroke("#12c724")
    strokeWeight(4)
    line(0, cavnasSize.h-treeBottom, cavnasSize.w, cavnasSize.h-treeBottom)

}