import knightPic from '/src/knightPic.png';

export default function placeKnight(square) {
    if (document.getElementById('knightPic')) {
        const oldKnight = document.getElementById('knightPic');
        oldKnight.remove();
    }
    const knightSquare = document.createElement('img');
    knightSquare.src = '/src/knightPic.png'
    knightSquare.id = 'knightPic'
    document.getElementById(square).appendChild(knightSquare);
}