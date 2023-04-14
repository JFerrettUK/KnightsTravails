import nodeClass from "./nodeClass.js";
import getNeighbours from "./getNeighbours.js";

export default function knightMoves(start, target) {
  const [targetRow, targetColumn] = target;
  let queue = [];
  let startNode = nodeClass(start[0], start[1], 0);
  queue.push(startNode);

  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    const { row, col, level, path } = node;

    if (row == targetRow && col == targetColumn) {
      let result = `You made it in ${level} moves! Here's your path:\n`;
      for (const position of path) {
        result += `  [${position[0]},${position[1]}]\n`;
      }
      return result;
    }
    visited.add(node.getPositionString());

    for (const neighbour of getNeighbours(row, col)) {
      const [neighbourRow, neighbourColumn] = neighbour;
      const neighbourNode = new nodeClass(
        neighbourRow,
        neighbourColumn,
        level + 1,
        path
      );

      if (visited.has(neighbourNode.getPositionString())) continue;

      queue.push(neighbourNode);
    }
  }
}
