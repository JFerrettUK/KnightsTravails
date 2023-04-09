import makeBoard from './makeBoard.js';
import placeKnight from './placeKnight.js';
import numberToSquare from './numberToSquare.js';
import chessGraph from './graph.js';
import bfs from './bfs.js';

//build a function knightMoves that shows the shortest possible 
makeBoard();
let adjacencylist = chessGraph();
bfs(adjacencylist)

// Given that you are in a position x,y, a knight piece can 
// move in these cells: [x+2, y+1], [x+1, y+2], [x+1, y-2] and so on

// So one thing you could do is adding all these possible new position 
// in your search each time you visit coordinates a given coordinate x,y!
// (Taking care that each "new position" stays inside the board, so neither 
// x nor y should get out of the interval [0, 7])
