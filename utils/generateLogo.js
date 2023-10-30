// Create a function to render shape options, colors, text colors.

function renderShape(shape) {
  let shapeType = shape[0];
  console.log(shapeType)
  let shapeChoice = ''
  if (shapeType === 'Triangle') {
    shapeChoice = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (shapeType === 'Circle') {
    shapeChoice = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (shapeType === 'Square') {
    shapeChoice = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    shapeChoice = "N/A"
  }
  return shapeChoice;
};


function generateLogo(data) {

  return ` ${renderShape(data.shape)}


  ${data.text}

  ${data.textcolor}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribute}
`
}

module.exports = generateLogo;

