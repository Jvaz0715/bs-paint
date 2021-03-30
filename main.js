/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// event listener function for what happens when one is clicked.
//===========DO NOT TOUCH ABOVE CODE===========

//query the canvas squares
const canvasSquares = document.querySelectorAll('.canvas');
//loop through all the canvas squares and create eventlistener click event
for (square of canvasSquares) {
  square.addEventListener('click', function () {
    console.log('You clicked on a canvas square');
  })
}

//query the pallette colors and do something
const paletteColors = document.querySelectorAll('.palette-color');
//loop through the palettes and create eventlistener click event
for (palette of paletteColors) {
  palette.addEventListener('click', function(){
    console.log("you clicked on a palette color")
  })
}

//query the main brush
const currentBrush = document.querySelector(".current-brush");
//console log on brush
currentBrush.addEventListener('click', function(){
  console.log('You clicked the current brush')
})

//Functions that will replace console logs below
//============================================
// create a function that will replace the current brush with the palette clicked
//this function will grab the "second class of the palette which holds the color in css e.g. color-1 is lightblue"
function grabColor(e) {
  return e.classList[1];
}
//
function whenSquareClicked(e) {
  const square = e.target
}
