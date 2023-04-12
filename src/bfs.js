import nodeClass from "./nodeClass.js";
import calculateKnightMove from "./calculateKnightMove.js";

export default function bfs(start_x, start_y, dest_x = null, dest_y = null) {
  let moves = calculateKnightMove();
  let level = 0;

  //bfs:
  //1. Enqueue start_x, start_y as root node
  let queue = [];
  let startNode = nodeClass(0, 0, 0);

  let rootNode = nodeClass(start_x, start_y, level);
  console.log(rootNode);

  //2. Dequeue a node and examine it

  queue.shift(rootNode);

  let cur_x = queue.start_x;
  let cur_y = queue.start_y;
  level = queue.level;

  //3. If destination_x, destination_y is found, quit searching and report the level of the node

  if ((cur_x, cur_y) == (dest_x, dest_y)) {
    return level;
  }

  //4. Otherwise, enqueue direct child nodes that aren't visited

  // for dest_x, dest_y

  //5. If queue is not empty, repeat from step 2.
}
