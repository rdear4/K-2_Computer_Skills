let canvasSize = {w:400, h:400}

const COLORS = ["red", "pink", "orange", "yellow", "green", "lime", "indigo", "violet", "blue"]
const COLORS_STROKE = ["white", "black", "black", "black", "white", "black", "white", "white", "white"]
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


let clickableElements = []

// let currentLetter = "A"
// let randNumber = rand(0, COLORS.length)
// console.log(randNumber)
// let currentLetterColor = COLORS[randNumber]

// let currentLetterPosition = {x: rand(50, cavnasSize.w-100), y:rand(50, cavnasSize.h-200)}

// let sequentialPassDone = false

let currentLevel

function setup() {

    console.log(window.location)

    canvasSize.w = window.innerWidth
    canvasSize.h = window.innerHeight

    createCanvas(canvasSize.w, canvasSize.h)

    currentLevel = new Level1(true, 0, false)

    // let newButton = new Button(10, 10, 100, 50, () => console.log("Button pressed"), "TEST", "red")

    // clickableElements.push(newButton)
}

function draw() {


    for (let el of clickableElements) {

        el.show();
    }



    currentLevel.drawLevel()
    currentLevel.checkComplete()

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

    currentLevel.keyPressed(key)

}

function mouseClicked() {

    for (let el of clickableElements) {

        el.testClick(mouseX, mouseY)
    }
}
