import numberToSquare from "./numberToSquare.js";
import squareToNumber from "./squareToNumber.js";
import nodeClass from "./nodeClass.js";
import knightMoves from "./knightMoves.js";
import makeBoardVisual from "./makeBoardVisual.js";
import placeKnight from "./placeKnight.js";

makeBoardVisual();
placeKnight("d4");
//build a function knightMoves that shows the shortest possible
console.log(knightMoves([0, 0], [3, 3]));

// Given that you are in a position x,y, a knight piece can
// move in these cells: [x+2, y+1], [x+1, y+2], [x+1, y-2] and so on

// So one thing you could do is adding all these possible new position
// in your search each time you visit coordinates a given coordinate x,y!
// (Taking care that each "new position" stays inside the board, so neither
// x nor y should get out of the interval [0, 7])
