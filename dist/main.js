(()=>{"use strict";function t(t,e,n=null,o=[]){let c=new class{constructor(t,e,n,o){this.row=t,this.col=e,this.level=n,this.path=o}getPositionString(){return`${this.row}, ${this.col}`}}(t,e,n,o);return c}function e(t,e){const n=[[2,1],[2,-1],[-2,-1],[-2,1],[1,2],[1,-2],[-1,2],[-1,-2]],o=[];for(const c of n){const[n,i]=c,l=t+n,r=e+i;o.push([l,r])}return o}!function(){function t(t){for(let e=0;e<8;e++){const n=document.createElement("div");n.innerText=(e+10).toString(36)+t,n.className=e%2==0?"chessSquareWhite":"chessSquareBlack",n.id=(e+10).toString(36)+t,document.getElementById("chessBoard").appendChild(n)}}function e(t){for(let e=0;e<8;e++){const n=document.createElement("div");n.innerText=(e+10).toString(36)+t,n.className=e%2==0?"chessSquareBlack":"chessSquareWhite",n.id=(e+10).toString(36)+t,document.getElementById("chessBoard").appendChild(n)}}!function(){for(let n=8;n>0;n--)t(n),n--,e(n)}()}(),function(t){document.getElementById("knightPic")&&document.getElementById("knightPic").remove();const e=document.createElement("img");e.src="/src/knightPic.png",e.id="knightPic",document.getElementById("d4").appendChild(e)}(),console.log(function(n,o){let c=o[0],i=o[1],l=[t(n[0],n[1])],r=new Set;for(;l.length>0;){let n=l.shift();if(r.add(`${n.row},${n.col}`),n.row==c&&n.col==i)return`Number of moves: ${n.level}\nPath: ${n.path.join(" -> ")}`;r.add(n);let o=e(n.row,n.col);for(let e of o){let o=e[0],c=e[1];if(!r.has(`${o},${c}`)){let e=t(o,c,n.level+1,[...n.path,[o,c]]);l.push(e)}}}}([1,2],[4,3]))})();