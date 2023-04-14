export default function squareToNumber(chessPosition) {
  const file = chessPosition.charCodeAt(0) - 97;
  const rank = 8 - parseInt(chessPosition.charAt(1));
  return file + 8 * rank + 1;
}
