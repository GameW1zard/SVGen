const fs = require('fs')
function makeSVG (madeshape){
    fs.writeFile(`./Output/${madeshape.title}.svg`, 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> \n
        ${madeshape.shape} \n
        ${madeshape.text} \n
        </svg>`,
        (err) => err ? console.error(err) : console.log("Write success! Check Output folder!"))
    
}
exports.makeSVG = makeSVG