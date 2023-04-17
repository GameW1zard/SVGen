const fs = require('fs')
class Triangle {
    constructor (response) {
        this.title = response.text
        this.text = `<text font-size="8em" x="85" y="150" fill="${response.textcolor}">${response.text}</text>`
        this.shape = `<polygon points="150,0 250,200  50,200" fill="${response.color}" />`
    }
}

class Square {
    constructor (response) {
        this.title = response.text
        this.text = `<text text-anchor="middle" font-size="8em" x="100" y="125" fill="${response.textcolor}">${response.text}</text>`
        this.shape = `<rect x="0" y="0" width="200" height="200" fill="${response.color}"/>`
    }
}

class Circle {
    constructor (response) {
        this.title = response.text
        this.text = `<text x="150" y="125" font-size="8em" text-anchor="middle" fill="${response.textcolor}">${response.text}</text>`
        this.shape = `<circle  cx="150" cy="100" r="100" fill="${response.color}"/>`
    }
}
exports.Triangle = Triangle;
exports.Square = Square;
exports.Circle = Circle;