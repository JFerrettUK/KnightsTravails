import nodeClass from "./nodeClass.js";
import getNeighbours from "./getNeighbours.js";

export default function remadeKnightMoves(start, target) {
  // The target row and column are extracted from the target argument.
  let targetRow = target[0];
  let targetCol = target[1];

  // A queue is initialized with the starting position
  // as the first element. The starting position is represented
  // as an instance of the Node class, which is created using the
  // nodeClass function. The Node class has properties for the row,
  // column, level (number of moves), and path (array of positions) of the knight.
  let queue = [nodeClass((start[0], start[1]))];
  console.log(queue);
}

// A set is initialized to keep track of the visited positions.
// The algorithm enters a loop that continues until there are no more positions in the queue.
// The first position in the queue is removed and its properties are extracted.
// If the current position is equal to the target position, a result string is constructed with the number of moves and the path of the knight’s moves, and the function returns this string.
// Otherwise, the current position is added to the set of visited positions.
// The neighbors of the current position are calculated using the getNeighbours function. This function returns an array of valid knight moves from the current position.
// For each neighbor, a new Node instance is created with an incremented level and an updated path. If this neighbor has not been visited before, it’s added to the queue.
// The loop continues until there are no more positions in the queue or until the target position is reached.
