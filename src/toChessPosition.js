export default function toChessPosition(coord) {
  let row = coord[0];
  let col = coord[1];
  let rank = 8 - row;
  let file = String.fromCharCode("a".charCodeAt(0) + col);
  return file + rank;
}
