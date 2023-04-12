import numberToSquare from "./numberToSquare.js";
import squareToNumber from "./squareToNumber.js";
import boardData from "./boardData.js";
import calculateKnightMove from "./calculateKnightMove.js";
import nodeClass from "./nodeClass.js";
import bfs from "./bfs.js";

//build a function knightMoves that shows the shortest possible
let chessboard = boardData();
bfs(1, 2);

// Given that you are in a position x,y, a knight piece can
// move in these cells: [x+2, y+1], [x+1, y+2], [x+1, y-2] and so on

// So one thing you could do is adding all these possible new position
// in your search each time you visit coordinates a given coordinate x,y!
// (Taking care that each "new position" stays inside the board, so neither
// x nor y should get out of the interval [0, 7])
