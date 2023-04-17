const classes = require('../Utils/Classes.js')
const TriConfirm = {
    title: 'sue',
    text: '<text font-size="8em" x="85" y="150" fill="black">sue</text>',
    shape: '<polygon points="150,0 250,200  50,200" fill="pink" />'
  }
const SquareConfirm = {
    title: 'ice',
    text: '<text text-anchor="middle" font-size="8em" x="100" y="125" fill="white">ice</text>',
    shape: '<rect x="0" y="0" width="200" height="200" fill="#368BC1"/>'
  }
  const CirConfirm = {
    title: 'urn',
    text: '<text x="150" y="125" font-size="8em" text-anchor="middle" fill="black">urn</text>',
    shape: '<circle  cx="150" cy="100" r="100" fill="green"/>'
  }
  test('Triangle passed', function (){
    let response = {
        shape: "Triangle",
        color: "pink",
        text: "sue",
        textcolor: "black",
      }
var madeshape = new classes.Triangle(response)
      expect(madeshape).toMatchObject(TriConfirm)
})

test('Square passed', function (){
    let response = {
        shape: "Square",
        color: "#368BC1",
        text: "ice",
        textcolor: "white",
      }
var madeshape = new classes.Square(response)
      expect(madeshape).toMatchObject(SquareConfirm)
})

test('Circle passed', function (){
    let response = {
        shape: "Circle",
        color: "green",
        text: "urn",
        textcolor: "black",
      }
var madeshape = new classes.Circle(response)
      expect(madeshape).toMatchObject(CirConfirm)
})