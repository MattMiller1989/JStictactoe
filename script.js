const Gameboard= () => {
   var board=["","","",
           "","","",
           "","",""];
    
}
const Game= (Gameboard) => {
    var dispBoard=document.getElementById("ticTacBoard").rows[0].length;
    console.log(dispBoard);
}

Game(Gameboard());