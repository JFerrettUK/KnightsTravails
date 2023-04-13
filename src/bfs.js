import nodeClass from "./nodeClass.js";
import getNeighbours from "./getNeighbours.js";

export default function bfs(targetRow, targetColumn) {
  //1. Enqueue x, y as root node
  let queue = [];
  let startNode = nodeClass(0, 0, 0);
  queue.push(startNode);

  const visited = new Set();

  while (queue.length > 0) {
    console.log("whileloopin BFS");
    //remove node
    const node = queue.shift();
    const { row, col, level } = node;

    //process node
    if (row == targetRow && col == targetColumn) return level;
    visited.add(node.getPositionString());

    //WHAT IF OUT OF BOUNDS - ADD HERE

    //add neighbours
    for (const neighbour of getNeighbours(row, col)) {
      const [neighbourRow, neighbourColumn] = neighbour;
      const neighbourNode = new nodeClass(
        neighbourRow,
        neighbourColumn,
        level + 1
      );

      if (visited.has(neighbourNode.getPositionString())) continue;

      queue.push(neighbourNode);
    }
  }
}
