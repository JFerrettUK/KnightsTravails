export default function getNeighbours(row, col) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, -1],
    [-2, 1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const neighbours = [];
  let i = 0;

  for (const direction of directions) {
    console.log(i++);
    const [rowChange, colChange] = direction;
    const neighbourRow = row + rowChange;
    const neighbourCol = col + colChange;

    neighbours.push([neighbourRow, neighbourCol]);
  }

  return neighbours;
}