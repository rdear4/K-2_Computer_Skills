class Level {

    

    constructor(_timerEnabled = false, _timerVal = 60, _timerDecrement = true, _trackTime = false, _timeLimit = 60, _le_eval) {

        this.levelEndEvaluator = _le_eval       //Function that evaluates whether or not the level is complete
        this.levelComplete = false
        this.timerEnabled = _timerEnabled
        this.timerRunning = false
        this.trackTime = _trackTime

        this.timeLimit = _timeLimit * 1000
        this.timerDecrement = _timerDecrement
        this.timerVal = _timerVal * 1000
        
        this.LEVEL_STATES = {
            LOADING: 0,
            PREPLAY: 1,
            PLAYING: 2,
            PAUSED: 3,
            OVER: 4
        }

        this.levelState = 0

    }

    checkComplete() {


        if (!this.levelComplete) {

            if (this.timerDecrement) {
                this.timerVal = (this.timerVal - deltaTime >= 0) ? this.timerVal - deltaTime : 0
            } else {
                this.timerVal+= deltaTime

            }
            
            this.levelEndEvaluator()
        }

    }

    

    showTimer() {

        if (this.timerEnabled) {

            (this.timerDecrement) ? this.timeRemaining -= deltaTime : this.timerValue

            push()

            fill('white')
            stroke('black')
            textSize(30)

            let textTime = `${Math.round(this.timerVal/100)/10}`
            // console.log(textTime)
            if (textTime.indexOf(".") === -1) {
                textTime += ".0"
                // console.log(textTime)
            }

            text(textTime, canvasSize.w - 100, 50)

            pop()

        }

        
    }


}