class Level1 extends Level {

    

    constructor(_timerEnabled, _timerVal, _timerDecrement) {

        super(_timerEnabled, _timerVal, _timerDecrement)

        this.COLORS = ["red", "pink", "orange", "yellow", "green", "lime", "indigo", "violet", "blue"]
        this.COLORS_STROKE = ["white", "black", "black", "black", "white", "black", "white", "white", "white"]
        this.LETTERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        // this.LETTERS = ["1", "2"]


        this.clickableElements = []

        this.letterPressCount = 0

        // this.currentLetterIndex = rand(0, this.LETTERS.length)
        this.currentLetter = this.LETTERS[rand(0, this.LETTERS.length)]

        let randNumber = rand(0, COLORS.length)
        
        this.currentLetterColor = this.COLORS[rand(0, this.COLORS.length)]

        this.currentLetterPosition = {x: rand(50, canvasSize.w-100), y:rand(50, canvasSize.h-200)}

        this.sequentialPassDone = false

        this.levelEndEvaluator = () => {

            if (this.LETTERS.length === 0) {

                this.levelComplete = true

                console.log("ALL DONE!!!")

            }

        }

        

        console.log("Level 1 loaded")

    }

    

    drawLevel() {

        background("#77EEFF")

        const numberOfTrees = 10

        const treeBottom = 50;

        //Draw the ground

        push()
        fill("#96593c")
        noStroke()
        
        rect(0, canvasSize.h-treeBottom, canvasSize.w, canvasSize.h)

        
        pop()

        for (let x = -20; x < canvasSize.w + 20; x += (canvasSize.w + 40)/numberOfTrees) {

            //Draw the ellips

            push()

            //Trunk
            fill("#874623")
            noStroke()
            // rectMode(CENTER)

            rect(x-10, canvasSize.h-treeBottom-100, 20, 100)

            fill("#12c724")
            stroke("#114516")
            strokeWeight(3)
            ellipse(x, canvasSize.h - 100 - treeBottom, 50, 100)

            
        }

        stroke("#12c724")
        strokeWeight(4)
        line(0, canvasSize.h-treeBottom, canvasSize.w, canvasSize.h-treeBottom)

        //Draw the Current Letter

        if (!this.levelComplete) {
            push()

            stroke(this.COLORS_STROKE[this.COLORS.indexOf(this.currentLetterColor)])

            fill(this.currentLetterColor)
            // console.log(this.currentLetterColor)
            textSize(80)

            // text(this.LETTERS[this.currentLetterIndex], this.currentLetterPosition.x, this.currentLetterPosition.y)
            text(this.currentLetter, this.currentLetterPosition.x, this.currentLetterPosition.y)



            pop()
        } else {
            
            push()

            fill("blue")
            // console.log(this.currentLetterColor)
            textSize(80)
            stroke("white")
            text("YAY!! You did it!!!!", canvasSize.w/2-canvasSize.w/4, canvasSize.h/2)

            console.log(canvas.w/2, canvas.h/2)

            pop()
        }

        

        this.showTimer()

    }


    keyPressed(key) {

        if (!this.levelComplete) {

            if (key == this.currentLetter.toLowerCase() || key == this.currentLetter.toUpperCase()) {

                // this.letterPressCount++

                this.LETTERS = this.LETTERS.filter((i) => i !== this.currentLetter)

                this.currentLetter = this.LETTERS[rand(0, this.LETTERS.length)]
                // this.currentLetterIndex = rand(0, this.LETTERS.length)
                console.log(`LENGTH: ${this.LETTERS.length}`)

                
                this.currentLetterColor = this.COLORS[rand(0, this.COLORS.length)]
                console.log(`COLOR: ${this.currentLetterColor}`)
                
                this.currentLetterPosition = {x: rand(50, canvasSize.w-200), y:rand(50, canvasSize.h-200)}
                console.log(this.currentLetterPosition)


            } else {

                console.log("Try Again!")
            }
            
        }


    }




}