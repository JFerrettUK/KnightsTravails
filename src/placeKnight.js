export default function placeKnight(square) {
    const chessSquare = document.createElement('img');
    chessSquare.src = '../src/knightPic.png'
    document.getElementById(square).appendChild(knightPic);
}