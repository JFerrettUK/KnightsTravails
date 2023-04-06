import numberToSquare from "./numberToSquare.js";

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
    
    function makeRows () {
        for (let i = 8; i > 0; i--) {
            makeWhiteRow(i)
            i--
            makeBlackRow(i)               
        }
    }

    makeRows()
}
