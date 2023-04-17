const fs = require('fs')
const Classes = require('./Utils/Classes.js')
const ShapeMaker = require('./Utils/ShapeMaker.js')
const inquirer = require('inquirer');
var madeshape
var UserChoice = {
  shape: "",
  color: "",
  Text: "",
  textcolor: "",
}
function prompts () {
  inquirer
    .prompt([
      {
        type: "list",
        message:"what shape do you want",
        name: "shape",
        choices:[
          "Triangle",
          "Circle",
          "Square",
        ]
      },
      {
        type: "input",
        message:"what color would you like your shape? (enter color or hex code)",
        name: "color"
      },
      {
        type: "input",
        message:"please enter 3 letters for your logo",
        name: "text"
      },
      {
        type: "input",
        message:"what color would you like your text? (enter color or hex code)",
        name: "textcolor"
      }
    ])
    .then (function (response){
      
      if (response.text.length <= 3){
        switch (response.shape) {
          case "Triangle":
            madeshape = new Classes.Triangle(response);
            console.log(madeshape)
           break;
          case "Square":
            madeshape = new Classes.Square(response);
            console.log(madeshape)
            break;
          case "Circle":
            madeshape = new Classes.Circle(response);
            console.log(madeshape)
            break;
        }
        console.log(madeshape)
        ShapeMaker.makeSVG(madeshape)
      }
      else {
        console.log('%cText was greater than 3 please try again', 'color: red')
        prompts()
      }
     
    })
}

  prompts()
