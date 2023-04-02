export default function makeBoard() {
    function makeWhiteRow(no) {
        for (let i = 0; i < 8; i++) {
            const chessSquare = document.createElement("div");
            chessSquare.innerText = (i+10).toString(36) + no;
            if(i % 2==0) chessSquare.className = "chessSquareWhite";
            else chessSquare.className = "chessSquareBlack";
            chessSquare.id = (i+10).toString(36) + no;
            document.getElementById("chessBoard").appendChild(chessSquare);
        }
    }
    function makeBlackRow(no) {
        for (let i = 0; i < 8; i++) {
            const chessSquare = document.createElement("div");
            chessSquare.innerText = (i+10).toString(36) + no;
            if(i % 2==0) chessSquare.className = "chessSquareBlack";
            else chessSquare.className = "chessSquareWhite";
            chessSquare.id = (i+10).toString(36) + no;
            document.getElementById("chessBoard").appendChild(chessSquare);
        }
    }
    makeWhiteRow(8)
    makeBlackRow(7)
    makeWhiteRow(6)
    makeBlackRow(5)
    makeWhiteRow(4)
    makeBlackRow(3)
    makeWhiteRow(2)
    makeBlackRow(1)
}
