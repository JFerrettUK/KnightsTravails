export default function numberToSquare(chessPosition) {
  const letterToNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const file = letterToNumber[chessPosition[0]];
  const rank = parseInt(chessPosition[1]);

  return (rank - 1) * 8 + file;
}
