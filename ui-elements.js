class ClickableElement {

    constructor(_x, _y, _w, _h, _cb) {

        this.width = _w
        this.height = _h
        this.x = _x
        this.y = _y
        this.callback = _cb
        
    }

    

    testClick(x, y) {

        if (x < this.x + this.width && x > this.x && y > this.y && y < this.y + height) {

            this.callback()
        }
    }

}

class Button extends ClickableElement {

    constructor(_x, _y, _w, _h, _cb, _lbl, _color) {

        super(_x, _y, _w, _h, _cb)

        this.label = _lbl
        this.color = _color
    }

    show() {

        push()

        fill(this.color)
        noStroke()

        rect(this.x, this.y, this.width, this.height)

        pop()

    }
}